import { Link, routes } from "@redwoodjs/router"

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return <>
  <header className="flex flex-row justify-between mx-8 py-4">
    <h1>
    <Link to={routes.home()} className="font-semibold">Contact R Us</Link>
    </h1>
    <nav className="flex flex-row gap-2">
    <Link to={routes.home()} className="border-b-[1px] border-transparent hover:border-black">Home</Link>
    <Link to={routes.contact()} className="border-b-[1px] border-transparent hover:border-black">Contact</Link>
    <Link to={routes.dashboard()} className="border-b-[1px] border-transparent hover:border-black">Dashboard</Link>
    </nav>
  </header>
  <main>
  {children}
  </main>
  </>
}

export default MainLayout
