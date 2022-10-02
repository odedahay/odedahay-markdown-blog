import fs from 'fs'
import path, { parse } from 'path'
import Link from 'next/link'
import matter from 'gray-matter'
import Layout from "@/components/Layout"
import Post from '@/components/Post'
import {sortByDate} from '@/utils/index'
import {POST_PER_PAGE} from '@/config/index'
import Pagination from '@/components/Pagination'
import CategoryList from '@/components/CategoryList'

export default function BlogPage({posts, numPages, currentPage, categories}) {
  return (
    <Layout>
      <div className='flex justify-between'>
        <div className='w-3/4 mr-10'>
          <h1 className='border-b-4 border-color border-b-4 p-5 headline'>Blog</h1>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {posts.map((post, index) => <Post key={index} post={post} />)}
          </div>
          <Pagination currentPage={currentPage} numPages={numPages} />
        </div>
        <div className='w-1/4'>
          <CategoryList categories={categories} />
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticPaths(){
    
    const files = fs.readdirSync(path.join('posts')) 

    const numPages = Math.ceil(files.length / POST_PER_PAGE)

    let paths = []

    for (let i = 1; i <= numPages; i++){
        paths.push({
            params: {page_index: i.toString() },
        })
    }
    // console.log(paths)
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}){

  const page = parseInt( (params && params.page_index) || 1 )

  const files = fs.readdirSync(path.join('posts'))
  
  const posts = files.map(filename =>{
    const slug = filename.replace('.md', '')

    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
    const { data:frontmatter } = matter(markdownWithMeta)

    return{
      slug,
      frontmatter
    }
  })

  // Get Categories for sidebar
  const categories = posts.map((post) => post.frontmatter.category)
  const uniqueCategories = [...new Set(categories)]

  const numPages = Math.ceil(files.length / POST_PER_PAGE)
  const pageIndex = page - 1
  const orderedPost = posts
    .sort(sortByDate)
    .slice(pageIndex * POST_PER_PAGE, (pageIndex + 1) * POST_PER_PAGE)

  return{
    props:{
      posts: orderedPost,
      numPages,
      currentPage: page,
      categories: uniqueCategories
    }
  }
}