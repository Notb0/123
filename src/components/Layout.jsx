import { Outlet } from 'react-router-dom';
import { CustomLink } from './CustomLink'

const Layout = () => {
    return (
        <>
        <header>
            <CustomLink to="/">Главная</CustomLink>
            <CustomLink to="/maininfo">Блок</CustomLink>
            <CustomLink to="/theme">Тема</CustomLink>
            <CustomLink to="/theme2">Тема</CustomLink>
            <CustomLink to="/about">О нас</CustomLink>
        </header>

        <main className="container">
            <Outlet /> 
        </main>
        

        </>
    )
}

export {Layout}
