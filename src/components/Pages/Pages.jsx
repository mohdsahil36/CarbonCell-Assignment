import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoHomeOutline } from "react-icons/io5";
import { IoPeopleOutline } from "react-icons/io5";
import { GrCurrency } from "react-icons/gr";
import { CiWallet } from "react-icons/ci";
import classes from './Pages.module.css';

export default function Pages() {
    return (
        <div>
            <nav className='navigation'>
                <ul className={classes['page-navigation-list']}>
                    <li className={classes['page-list']}>
                        <IoHomeOutline />
                        <NavLink exact to="/" className={({ isActive }) =>
                            `pageLink ${isActive ? classes.active : ''}`
                        }>Home</NavLink>
                    </li>
                    <li>
                        <IoPeopleOutline />
                        <NavLink to="/population" className={({ isActive }) =>
                            `pageLink ${isActive ? classes.active : ''}`
                        }>Population</NavLink>
                    </li>
                    <li>
                        <GrCurrency />
                        <NavLink to="/crypto" className={({ isActive }) =>
                            `pageLink ${isActive ? classes.active : ''}`
                        }>Crypto</NavLink>
                    </li>
                    <li>
                        <CiWallet />
                        <NavLink to="/metamask" className={({ isActive }) =>
                            `pageLink ${isActive ? classes.active : ''}`
                        }>Metamask</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
