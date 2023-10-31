import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { MainInformation } from "../common/MainInformation";
import { WebsiteWrapper } from "./styled";
import { Skills } from "../features/Skills";
import { AboutMe } from "../features/AboutMe";
import { MyProjects } from "../features/MyProjects";
import { Footer } from "../common/Footer";

export const App = () => (
    <HashRouter>
        <WebsiteWrapper>
            <MainInformation />
            <Switch>
                <Route path="/aboutMe">
                    <AboutMe />
                </Route>
                <Route path="/skills">
                    <Skills />
                </Route>
                <Route path="/projects">
                    <MyProjects />
                </Route>
                <Route path="/">
                    <Redirect to="/aboutMe" />
                </Route>
            </Switch>
            <Footer />
        </WebsiteWrapper>
    </HashRouter>
);