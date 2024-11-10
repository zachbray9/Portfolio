import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import App from "../App";
import Projects from "../pages/projects";
import Contact from "../pages/contact";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: '', element: <Home /> },
            { path: 'projects', element: <Projects /> },
            { path: 'contact', element: <Contact /> }
        ]
    }
])