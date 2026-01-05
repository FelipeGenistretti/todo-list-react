import { NavLink, Outlet } from "react-router";
import { Container } from "../components/Container/Container";
import { Text } from "../components/Text/Text";
import { MainContent } from "../core-components/main-content";
import { Header } from "../core-components/Header.tsx/Header";
import { Footer } from "../core-components/Footer/Footer";

export function LayoutMain(){
    return<>
        
        <Header/>
        <MainContent>
            <Outlet/>
        </MainContent>
        <Footer/>
        
    </>
}