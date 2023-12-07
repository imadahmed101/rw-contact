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
        <h2 className='text-4xl md:text-6xl mb-4 font-bold tracking-tight'>Contact Forms Made Easy</h2>
        <p className='text-xl font-semibold mb-8 text-gray-300 max-w-[500px] mx-auto'>All in one application built as a contact platform where you can manage all requests in one place.</p>
        <button className='text-xl border-[2px] py-2 px-4 rounded-md hover:bg-white hover:text-black'>Get Started</button>
      </div>

      {/* <div className='bg-gradient-to-br from-blue-500 to-blue-600 text-white text-center py-16'>
        <h2 className='text-6xl mb-4 font-bold tracking-tight'>Welcome to Contact R Us</h2>
        <p className='text-xl mb-8 text-gray-200'>All in one application built as a contact platform where you can manage all requests in one place.</p>
        <button className='text-xl border-[2px] py-2 px-4 rounded-md hover:bg-white hover:text-black'>Get Started</button>
      </div> */}

      {/* Benefits Section */}
      <div className='flex flex-col md:flex-row justify-center text-center gap-2 m-2'>

        <div className='w-full md:w-[300px] bg-green-500 mx-auto md:mx-0 py-8'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-6 h-6 mx-auto">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
          </svg>

          <p className='text-xl text-white'>Contact Form</p>
        </div>

        <div className='w-full md:w-[300px] bg-blue-500 mx-auto md:mx-0 py-8'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-6 h-6 mx-auto">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
          </svg>

          <p className='text-xl text-white'>Admin Dashboard</p>
        </div>

        <div className='w-full md:w-[300px] bg-purple-600 mx-auto md:mx-0 py-8'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-6 h-6 mx-auto">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
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
        <div className='mx-2'>


          <div className='flex flex-col md:flex-row py-16'>
            <div className='flex-1'>
              <div className='flex bg-green-500 py-32 w-[300px]'></div>
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
              <div className='flex bg-blue-500 py-32 w-[300px] ml-auto'></div>
            </div>
          </div>


          <div className='flex flex-col md:flex-row py-16'>
            <div className='flex-1'>
              <div className='flex bg-purple-600 py-32 w-[300px]'></div>
            </div>
            <div className='flex-1 mx-2'>
              <div className='max-w-[600px]'>
                <h3 className='text-2xl font-semibold'>Automatic Email Setup</h3>
                <p className='text-xl text-gray-700'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime dolore molestias, facere hic ducimus laudantium excepturi accusantium aliquid et necessitatibus! Porro commodi iure aliquid veritatis officia, sit tenetur molestiae adipisci?</p>
              </div>
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

      <div className='bg-black text-white py-32 text-center'>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat suscipit eum voluptate recusandae ducimus molestias alias rerum sit culpa reiciendis dolore animi quis ullam ea, veritatis repellat quam itaque ab.</p>
      </div>

      <div className='py-16'>
        <h3 className='text-2xl text-center'>Pricing</h3>


        <div className='flex flex-col md:flex-row justify-center text-center text-white gap-2 m-2'>

          <div className='w-full md:w-[300px] bg-green-500 mx-auto md:mx-0 py-8'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-6 h-6 mx-auto">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
            <p className='text-xl mb-4'>Beginner</p>
            <p className='text-4xl mb-4'>$5 <span className='text-sm'>/m</span></p>
            <p className='mx-2'>Great for testing out the platform and just getting started.</p>
          </div>

          <div className='w-full md:w-[300px] bg-blue-500 mx-auto md:mx-0 py-8'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-6 h-6 mx-auto">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className='text-xl mb-4'>Advanced</p>
            <p className='text-4xl mb-4'>$10 <span className='text-sm'>/m</span></p>
            <p className='mx-2'>Great for when you need more options in your forms.</p>
          </div>

          <div className='w-full md:w-[300px] bg-purple-600 mx-auto md:mx-0 py-8'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-6 h-6 mx-auto">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>
            <p className='text-xl mb-4'>Expert</p>
            <p className='text-4xl mb-4'>$15 <span className='text-sm'>/m</span></p>
            <p className='mx-2'>Great for when you need to build complex forms with multi stages and specific validations.</p>
          </div>

        </div>
        <div className='text-center pt-4'>
        <button className='bg-black text-white text-xl border-[2px] border-black py-2 px-4 rounded-md hover:bg-white hover:text-black'>Get Started</button>
        {/* <button className='text-xl border-[2px] border-black py-2 px-4 rounded-md hover:bg-black hover:text-white'>Get Started</button> */}
        </div>

      </div>

<div className='bg-black text-white py-2 text-center'>
  <p>Copyright 2023 ChatForm</p>
</div>

    </>
  )
}

export default HomePage
