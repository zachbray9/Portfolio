import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import App from "../App";
import Projects from "../pages/projects";
import Contact from "../pages/contact";
import ProjectCybernetica from "../pages/projectCybernetica";
import GravityOfSilence from "../pages/gravityOfSilence";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: '', element: <Home /> },
            { path: 'projects', element: <Projects /> },
            { path: 'contact', element: <Contact /> },
            { path: 'project-cybernetica', element: <ProjectCybernetica /> },
            { path: 'gravity-of-silence', element: <GravityOfSilence /> }
        ]
    }
])