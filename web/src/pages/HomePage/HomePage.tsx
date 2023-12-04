import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      {/* Hero Section - options */}

      {/* <div className='text-center py-16'>
        <h2 className='text-6xl mb-4 font-bold tracking-tight'>Welcome to Contact R Us</h2>
        <p className='text-xl mb-8 text-gray-800'>All in one application built as a contact platform where you can manage all requests in one place.</p>
        <button className='text-xl border-[2px] border-black py-2 px-4 rounded-md hover:bg-black hover:text-white'>Get Started</button>
      </div> */}

      <div className='bg-black text-white text-center py-16'>
        <h2 className='text-6xl mb-4 font-bold tracking-tight'>Welcome to Contact R Us</h2>
        <p className='text-xl mb-8 text-gray-200'>All in one application built as a contact platform where you can manage all requests in one place.</p>
        <button className='text-xl border-[2px] py-2 px-4 rounded-md hover:bg-white hover:text-black'>Get Started</button>
      </div>

      {/* <div className='bg-gradient-to-br from-blue-500 to-blue-600 text-white text-center py-16'>
        <h2 className='text-6xl mb-4 font-bold tracking-tight'>Welcome to Contact R Us</h2>
        <p className='text-xl mb-8 text-gray-200'>All in one application built as a contact platform where you can manage all requests in one place.</p>
        <button className='text-xl border-[2px] py-2 px-4 rounded-md hover:bg-white hover:text-black'>Get Started</button>
      </div> */}

      {/* Benefits Section */}
      <div className='flex flex-col md:flex-row justify-center text-center gap-2 m-2'>

        <div className='w-full md:w-[300px] bg-red-500 mx-auto md:mx-0 py-8'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" className="w-6 h-6 mx-auto">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
          </svg>

          <p className='text-xl text-white'>Contact Form</p>
        </div>

        <div className='w-full md:w-[300px] bg-green-500 mx-auto md:mx-0 py-8'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" className="w-6 h-6 mx-auto">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
          </svg>

          <p className='text-xl text-white'>Admin Dashboard</p>
        </div>

        <div className='w-full md:w-[300px] bg-purple-500 mx-auto md:mx-0 py-8'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" className="w-6 h-6 mx-auto">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
          </svg>

          <p className='text-xl text-white'>Automatic Emailing</p>
        </div>

      </div>

      {/* Plans Link */}
      <div className='py-8 text-center'>
        <h4 className='text-xl'>View All Plans</h4>
      </div>

      {/* Main Section */}
<div className='max-w-[1280px] mx-auto'>

      <div className='flex flex-col md:flex-row py-16'>
        <div className='flex-1'>
          <div className='flex bg-red-500 py-32 w-[300px]'></div>
        </div>
        <div className='flex-1 mx-2'>
          <div className='max-w-[600px]'>
            <h3 className='text-2xl font-semibold'>Contact Form's Simplified</h3>
            <p className='text-xl text-gray-700'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime dolore molestias, facere hic ducimus laudantium excepturi accusantium aliquid et necessitatibus! Porro commodi iure aliquid veritatis officia, sit tenetur molestiae adipisci?</p>
          </div>
        </div>
      </div>

      <div className='flex flex-col md:flex-row py-16'>
        <div className='flex-1 mx-2'>
          <div className='max-w-[600px]'>
          <h3 className='text-2xl font-semibold'>Secure Admin Dashboard</h3>
          <p className='text-xl text-gray-700'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime dolore molestias, facere hic ducimus laudantium excepturi accusantium aliquid et necessitatibus! Porro commodi iure aliquid veritatis officia, sit tenetur molestiae adipisci?</p>
          </div>
        </div>
        <div className='flex-1'>
          <div className='flex bg-green-500 py-32 w-[300px] ml-auto'></div>
        </div>
      </div>


      <div className='flex flex-col md:flex-row py-16'>
        <div className='flex-1'>
          <div className='flex bg-blue-500 py-32 w-[300px]'></div>
        </div>
        <div className='flex-1 mx-2'>
          <div className='max-w-[600px]'>
            <h3 className='text-2xl font-semibold'>Automatic Email Setup</h3>
            <p className='text-xl text-gray-700'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime dolore molestias, facere hic ducimus laudantium excepturi accusantium aliquid et necessitatibus! Porro commodi iure aliquid veritatis officia, sit tenetur molestiae adipisci?</p>
          </div>
        </div>
      </div>
</div>


      {/* <div className='flex flex-col md:flex-row py-8'>
        <div className='flex-1'>
          <div className='flex bg-red-500 py-32 w-[300px] mx-auto'></div>
        </div>
        <div className='flex-1 mx-2'>
          <div className='max-w-[600px]'>
            <h3 className='text-2xl font-semibold'>Contact Form's Simplified</h3>
            <p className='text-xl text-gray-700'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime dolore molestias, facere hic ducimus laudantium excepturi accusantium aliquid et necessitatibus! Porro commodi iure aliquid veritatis officia, sit tenetur molestiae adipisci?</p>
          </div>
        </div>
      </div>

      <div className='flex flex-col md:flex-row py-8'>
        <div className='flex-1 mx-2'>
          <div className='max-w-[600px]'>
          <h3 className='text-2xl font-semibold'>Contact Form's Simplified</h3>
          <p className='text-xl text-gray-700'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime dolore molestias, facere hic ducimus laudantium excepturi accusantium aliquid et necessitatibus! Porro commodi iure aliquid veritatis officia, sit tenetur molestiae adipisci?</p>
          </div>
        </div>
        <div className='flex-1'>
          <div className='flex bg-green-500 py-32 w-[300px] mx-auto'></div>
        </div>
      </div>


      <div className='flex flex-col md:flex-row py-8'>
        <div className='flex-1'>
          <div className='flex bg-blue-500 py-32 w-[300px] mx-auto'></div>
        </div>
        <div className='flex-1 mx-2'>
          <div className='max-w-[600px]'>
            <h3 className='text-2xl font-semibold'>Automatic Email Setup</h3>
            <p className='text-xl text-gray-700'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime dolore molestias, facere hic ducimus laudantium excepturi accusantium aliquid et necessitatibus! Porro commodi iure aliquid veritatis officia, sit tenetur molestiae adipisci?</p>
          </div>
        </div>
      </div> */}

      {/* <div className='flex flex-col md:flex-row'>
        <div className='flex-1 bg-red-500 py-16'>
          <div className='bg-white py-16 m-2 md:m-8'></div>
        </div>
        <div className='flex-1 m-2'>
          <h3 className='text-2xl font-semibold'>Contact Form's Simplified</h3>
          <p className='text-xl text-gray-700'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime dolore molestias, facere hic ducimus laudantium excepturi accusantium aliquid et necessitatibus! Porro commodi iure aliquid veritatis officia, sit tenetur molestiae adipisci?</p>
        </div>
      </div> */}

      {/* <div className='flex flex-col md:flex-row'>
        <div className='hidden md:flex md:flex-col flex-1 m-2'>
          <h3 className='text-2xl font-semibold'>Secure Admin Dashboard</h3>
          <p className='text-xl text-gray-700'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime dolore molestias, facere hic ducimus laudantium excepturi accusantium aliquid et necessitatibus! Porro commodi iure aliquid veritatis officia, sit tenetur molestiae adipisci?</p>
        </div>
        <div className='flex-1 bg-green-500 py-16'>
          <div className='bg-white py-16 m-2 md:m-8'></div>
        </div>
        <div className='flex-1 md:hidden m-2'>
          <h3 className='text-2xl font-semibold'>Secure Admin Dashboard</h3>
          <p className='text-xl text-gray-700'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime dolore molestias, facere hic ducimus laudantium excepturi accusantium aliquid et necessitatibus! Porro commodi iure aliquid veritatis officia, sit tenetur molestiae adipisci?</p>
        </div>
      </div> */}

      {/* <div className='flex flex-col md:flex-row'>
        <div className='flex-1 bg-blue-500 py-16'>
          <div className='bg-white py-16 m-2 md:m-8'></div>
        </div>
        <div className='flex-1 m-2'>
          <h3 className='text-2xl font-semibold'>Automatic Email Setup</h3>
          <p className='text-xl text-gray-700'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime dolore molestias, facere hic ducimus laudantium excepturi accusantium aliquid et necessitatibus! Porro commodi iure aliquid veritatis officia, sit tenetur molestiae adipisci?</p>
        </div>
      </div> */}

    </>
  )
}

export default HomePage
