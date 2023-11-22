import React from 'react'
import Logo from '../header/Logo'
import Menu from '../header/Menu'
import Sns from '../header/Sns'

const Header = () => {

    // const Showmenu = () => {
    //     const headerlogo = document.querySelector(".header__logo");
    //     const headerMenu = document.getElementById("#header");
    //     console.log(headerMenu);

    //     if (headerlogo) {
    //         headerlogo.addEventListener("click", () => {
    //             headerMenu.classList.toggle("show");
    //         })
    //     }
    // }
    // Showmenu();

    return (
        <header id='header' role='banner'>
            <Logo />
            <Menu />
            <Sns />
        </header>
    )
}

export default Header