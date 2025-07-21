import { Outlet, ScrollRestoration } from "react-router-dom"
import Navbar from "./components/layout/navbar"
import Footer from "./components/layout/footer"
import { Bounce, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Chatbot from "./components/chatbot/chatbot";

function App() {
  return (
    <>
      <ScrollRestoration />
      <Navbar />

      <main className="flex flex-col grow my-10 ">
        <ToastContainer theme="colored" position="top-right" autoClose={5000} transition={Bounce}/>
        <Outlet />
      </main>

      <Footer />

      <Chatbot />
    </>
  )
}

export default App
