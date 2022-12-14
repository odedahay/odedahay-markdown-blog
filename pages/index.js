import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import matter from 'gray-matter'
import Layout from "@/components/Layout"
import Post from '@/components/Post'
import {sortByDate} from '@/utils/index'

export default function HomePage({posts}) {
  return (
    <Layout>
      <h1 className='border-b-4 border-color p-5 headline'>Latest Posts</h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {posts.map((post, index) => <Post key={index} post={post} />)}
      </div>
      <Link href='/blog'>
        <div className='flex justify-center mt-10'>
          <a className='block text-center border border-gray-500 text-gray-800 rounded-md py-4 my-5 transition duration-500 ease select-none hover:text-white hover:bg-gray-900 focus:outline-none focus:shadow-outline w-32'>
            All Posts
          </a>
        </div>
      </Link>
    </Layout>
  )
}

export async function getStaticProps(){
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

  return{
    props:{
      posts: posts.sort(sortByDate).slice(0, 6)
    }
  }
}