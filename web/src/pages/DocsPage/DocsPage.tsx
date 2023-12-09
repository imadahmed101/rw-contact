import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const DocsPage = () => {
  return (
    <>
      <MetaTags title="Docs" description="Docs page" />

      <h1 className='text-2xl font-bold mb-8'>How ChatForm Works</h1>

      <div className='max-w-[700px] mx-2'>

      <h2 className='text-xl font-semibold text-gray-800 mb-2'><Link to={routes.formBuilder()}>Form Builder</Link></h2>
      <p className='text-gray-800 mb-8'>you can create custom forms using our form builder. Just select what label you want and what type of input you expect from the user. Click add section and a preview will appear just below so you can view how your form will look. Once everything is to your liking you can click save form to save it and publish it to your account.</p>

      <h2 className='text-xl font-semibold text-gray-800 mb-2'><Link to={routes.contact()}>Contact Form</Link></h2>
      <p className='text-gray-800 mb-8'>Navigate to the contact page to view your form. This is also the same page you can share on different platforms so your users can access it and input their submissions.</p>

      <h2 className='text-xl font-semibold text-gray-800 mb-2'><Link to={routes.dashboard()}>Dashboard</Link></h2>
      <p className='text-gray-800 mb-8'>Navigate to the dashboard page to view all submission from your users.</p>

      <h2 className='text-xl font-semibold text-gray-800 mb-2'><Link to={routes.dashboard()}>Settings</Link></h2>
      <p className='text-gray-800 mb-8'>You can change your preferences in the settings section.</p>
      </div>
    </>
  )
}

export default DocsPage
