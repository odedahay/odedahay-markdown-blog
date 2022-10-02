import Head from 'next/head'
import Header from './Header'
import Search from './Search'
import Footer from './Footer'

export default function Layout({ title, keywords, description, children }) {
    return (
      <div className='bg-cream text-gray-900' style={{boxShadow: "inset 0 0 5rem rgb(0 0 0 / 50%)" }}>
        <Head>
          <title>{title}</title>
          <meta name='keywords' content={keywords} />
          <meta name='description' content={description} />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <Header />
        <Search />
        <main className='container mx-auto my-7'>{children}</main>
        <Footer />
      </div>
    )
  }
  
  Layout.defaultProps = {
    title: 'Welcome to DevSpace',
    keywords: 'development, coding, programming',
    description: 'The best info and news in development',
  }