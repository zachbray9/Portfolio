import { Outlet, ScrollRestoration } from "react-router-dom"
import Navbar from "./components/layout/navbar"

function App() {
  return (
    <>
      <ScrollRestoration />
      <Navbar />
      <main className="w-full flex-grow">
        <Outlet />
      </main>
    </>
  )
}

export default App
