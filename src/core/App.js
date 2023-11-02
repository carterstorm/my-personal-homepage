import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { WebsiteWrapper } from "./styled";
import { Skills } from "../features/Skills";
import { AboutMe } from "../features/AboutMe";
import { MyProjects } from "../features/MyProjects";
import { LayoutPage } from "../features/LayoutPage";
import { toAboutMe } from "../routes";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <LayoutPage />,
            children: [{
                path: "aboutMe",
                element: <AboutMe />
            },
            {
                path: "skills",
                element: <Skills />
            },
            {
                path: "projects",
                element: <MyProjects />
            },
            {
                path: "*",
                element: <Navigate to={toAboutMe()} />
            },
            ]
        },
    ]);

export const App = () => (
    <WebsiteWrapper>
        <RouterProvider router={router} />
    </WebsiteWrapper>
);