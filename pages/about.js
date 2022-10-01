import Layout from "@/components/Layout"

export default function AboutPage() {
  return (
    <Layout title='About Dash Off Blog'>
        <h1 className="text-5xl border-b-4 pb-5 font-bold">ABOUT ME</h1>
        <div className='bg-white shadow-md rounded-lg px-10 py-6 mt-6'>
        <h3 className='text-2xl mb-5'>Hi, there! I'm Rodel and my friends called me 'Ode'</h3>
          <img src="/images/odedahay-logo.jpeg" width="720px" alt="Evolution of logo" />
          <p>I'm a UX/UI designer and seasonal developer. I have a passion for creating websites and love to developing interactive designs</p>
          <p>I simply love and enjoy my 24/7 activities:</p>
          <ul class="list-disc pl-5">
            <li>UI Designing</li>
            <li>Developing WP theme</li>
            <li>Developing Django App</li>
            <li>Photography</li>
            <li>Pyrography</li>
          </ul>
          <p className='mb-3'>Oh btw. this my a personal blog that built with Next.js and Markdown</p>
          <p><span className='font-bold'>Version 1.0.0</span></p>
        </div>
    </Layout>
  )
}
