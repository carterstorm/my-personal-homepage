import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { WebsiteWrapper } from "./styled";
import { Skills } from "../features/Skills";
import { AboutMe } from "../features/AboutMe";
import { MyProjects } from "../features/MyProjects";
import { LayoutPage } from "../features/LayoutPage";
import { toAboutMe, toMyProjects, toSkills } from "../routes";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <LayoutPage />,
            children: [{
                path: toAboutMe(),
                element: <AboutMe />
            },
            {
                path: toSkills(),
                element: <Skills />
            },
            {
                path: toMyProjects(),
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