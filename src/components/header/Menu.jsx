import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import { menuText, keywordText } from '../../data/header'

const Menu = () => {

    const loaction = useLocation();
    console.log(loaction.pathname);

    return (
        <nav className='header__menu'>
            <ul className='menu'>
                {menuText.map((menu, key) => (
                    <li key={key} className={loaction.pathname === menu.src ? 'active' : ''}>
                        <Link to={menu.src}>
                            {menu.icon} <em>{menu.title}</em>
                        </Link>
                    </li>
                ))}
            </ul>
            <ul className='keyword'>
                <ul>
                    {keywordText.map((keyword, key) => (
                        <li key={key} className={decodeURIComponent(loaction.pathname) === keyword.src ? 'active' : ''}>
                            <Link to={keyword.src}>
                                {keyword.icon} <em>{keyword.title}</em>
                            </Link>
                        </li>
                    ))}
                </ul>
            </ul>
        </nav>
    )
}

export default Menu