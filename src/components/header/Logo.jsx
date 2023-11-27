import React from 'react'
import { RiFileMusicLine } from "react-icons/ri"
import { Link } from 'react-router-dom'

const Logo = ({ toggleMenu }) => {
    return (
        <h1 className='header__logo'>
            <Link to='/' onClick={toggleMenu}>
                <em><RiFileMusicLine /></em>
                <span>Silence<br />Youtube</span>
            </Link>
        </h1>
    )
}

export default Logo