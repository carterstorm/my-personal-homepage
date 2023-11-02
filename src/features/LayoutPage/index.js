import { Outlet } from "react-router-dom";
import { Footer } from "../../common/Footer";
import { MainInformation } from "../../common/MainInformation";
import { Menu } from "./Menu";

export const LayoutPage = () => (
    <div>
        <Menu />
        <MainInformation />
        <Outlet />
        <Footer />
    </div>
);