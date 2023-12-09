import { Link, routes } from "@redwoodjs/router"
import { useState } from "react"

import { useAuth } from 'src/auth'

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()
  const [open, setOpen] = useState(false)

  const clickLogOut = () => {
    logOut()
    setOpen(false)
  }

  return <>
    <header className="hidden md:flex flex-row justify-between mx-8 py-4">
      <h1>
        <Link to={routes.home()} className="font-bold">chatform</Link>
      </h1>
      <nav>
        {isAuthenticated ? (
          <div className="flex flex-row gap-2">
            {/* <Link to={routes.home()} className="border-b-[1px] border-transparent hover:border-black">Home</Link> */}
            <Link to={routes.contact()} className="border-b-[1px] border-transparent hover:border-black">Contact</Link>
            <Link to={routes.dashboard()} className="border-b-[1px] border-transparent hover:border-black">Dashboard</Link>
            <Link to={routes.formBuilder()} className="border-b-[1px] border-transparent hover:border-black">Form Builder</Link>
            <Link to={routes.docs()} className="border-b-[1px] border-transparent hover:border-black">Docs</Link>
            <button type="button" onClick={clickLogOut} className="border-b-[1px] border-transparent hover:border-black">Logout</button>
            <span className="bg-gray-600 text-white rounded-md px-1">Logged in as: {currentUser.name}{' '}</span>
          </div>
        )
          : (
            <div className="flex flex-row gap-2">

        {/* <Link to={routes.home()} className="border-b-[1px] border-transparent hover:border-black">Home</Link> */}
        <Link to={routes.login()} className="border-b-[1px] border-transparent hover:border-black">Login</Link>
            <Link to={routes.signup()} className="border-b-[1px] border-transparent hover:border-black">Register</Link>
            </div>
          )
        }

      </nav>
    </header>

    <header className="flex md:hidden flex-row justify-between mx-8 py-4">
      <h1>
        <Link to={routes.home()} onClick={() => setOpen(false)} className="font-semibold">chatform</Link>
      </h1>
      <button onClick={() => setOpen((prev) => !prev)}>
        {!open ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
          :
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>}

      </button>

      {open && <nav className=" absolute w-full h-auto top-14 bg-gray-700 text-white">
        {isAuthenticated ? (
          <div className="flex flex-col">
            <span className="p-2 font-bold border-b-[1px] border-gray-500">Logged in as: {currentUser.name}</span>
            <Link to={routes.home()} onClick={() => setOpen(false)} className="p-2 hover:bg-gray-800">Home</Link>
            <Link to={routes.contact()} onClick={() => setOpen(false)} className="p-2 hover:bg-gray-800">Contact</Link>
            <Link to={routes.dashboard()} onClick={() => setOpen(false)} className="p-2 hover:bg-gray-800">Dashboard</Link>
            <Link to={routes.formBuilder()} onClick={() => setOpen(false)} className="p-2 hover:bg-gray-800">Form Builder</Link>
            <Link to={routes.docs()} onClick={() => setOpen(false)} className="p-2 hover:bg-gray-800">Docs</Link>
            <button type="button" onClick={clickLogOut} className="p-2 hover:bg-gray-800 text-left">Logout</button>
          </div>
        )
          : (
            <div className="flex flex-col">
              <Link to={routes.home()} onClick={() => setOpen(false)} className="p-2 hover:bg-gray-800">Home</Link>
              <Link to={routes.login()} className="p-2 hover:bg-gray-800">Login</Link>
              <Link to={routes.signup()} className="p-2 hover:bg-gray-800">Register</Link>
            </div>
          )
        }
      </nav>}
    </header>

    <main>
      {children}
    </main>
  </>
}

export default MainLayout
