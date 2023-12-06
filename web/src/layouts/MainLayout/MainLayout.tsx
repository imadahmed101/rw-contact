import { Link, routes } from "@redwoodjs/router"
import { useState } from "react"

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {

  const [open, setOpen] = useState(false)

  return <>
    <header className="hidden md:flex flex-row justify-between mx-8 py-4">
      <h1>
        <Link to={routes.home()} className="font-bold">chatform</Link>
      </h1>
      <nav className="flex flex-row gap-2">
        <Link to={routes.home()} className="border-b-[1px] border-transparent hover:border-black">Home</Link>
        <Link to={routes.contact()} className="border-b-[1px] border-transparent hover:border-black">Contact</Link>
        <Link to={routes.dashboard()} className="border-b-[1px] border-transparent hover:border-black">Dashboard</Link>
      </nav>
    </header>

    <header className="flex md:hidden flex-row justify-between mx-8 py-4">
      <h1>
        <Link to={routes.home()} onClick={()=>setOpen(false)} className="font-semibold">Contact R Us</Link>
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

      {open && <nav className="flex flex-col absolute w-full h-auto top-14 bg-gray-700 text-white">
        <Link to={routes.home()} onClick={()=>setOpen(false)} className="border-b-[1px] border-transparent p-2 hover:bg-gray-800">Home</Link>
        <Link to={routes.contact()} onClick={()=>setOpen(false)} className="border-b-[1px] border-transparent p-2 hover:bg-gray-800">Contact</Link>
        <Link to={routes.dashboard()} onClick={()=>setOpen(false)} className="border-b-[1px] border-transparent p-2 hover:bg-gray-800">Dashboard</Link>
      </nav>}
    </header>

    <main>
      {children}
    </main>
  </>
}

export default MainLayout
