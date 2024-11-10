import { Outlet, ScrollRestoration } from "react-router-dom"
import Navbar from "./components/layout/navbar"
import Footer from "./components/layout/footer"

function App() {
  return (
    <>
      <ScrollRestoration />
      <Navbar />
      <main className="w-full flex-grow my-10">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
