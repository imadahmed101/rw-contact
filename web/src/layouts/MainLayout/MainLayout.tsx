import { Link, routes } from "@redwoodjs/router"

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return <>
  <header className="flex flex-row justify-between mx-8">
    <h1>
    <Link to={routes.home()}>Contact R Us</Link>
    </h1>
    <nav className="flex flex-row gap-2">
    <Link to={routes.home()}>Home</Link>
    <Link to={routes.contact()}>Contact</Link>
    </nav>
  </header>
  <main>
  {children}
  </main>
  </>
}

export default MainLayout
