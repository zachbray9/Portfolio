import { Outlet, ScrollRestoration } from "react-router-dom"

function App() {
  return (
    <>
      <ScrollRestoration />
      <main className="h-screen bg-bg-light dark:bg-bg-dark text-text-light dark:text-text-dark">
        <div className="w-full flex flex-col items-center justify-start px-8">
          <Outlet />
        </div>
      </main>
    </>
  )
}

export default App
