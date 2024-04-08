import React from 'react';
import Logo from '../../assets/Logo.svg';
import classes from './Sidebar.module.css';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdSearch } from "react-icons/io"; 
import Pages from '../Pages/Pages';
import Options from '../Options/Options';
import UserCard from '../UserCard/UserCard';

export default function Sidebar(){
    return(
        <aside className={classes['dashboard-sidebar']}>
            <nav className={classes['sidebar-navigation']}>
                <div className='first'>
                    <div className={classes.org}>
                        <img src={Logo} alt="company-logo" height='32px'/>
                        <button className={classes['collapse-button']}>
                            <RxHamburgerMenu size={'2rem'} className={classes['hamburger-icon']}/>
                        </button>
                    </div>
                    <div className={classes.searchBar}>
                        <IoMdSearch size={'1.5rem'} className={classes['search-icon']}/>
                        <input type="text" placeholder='Search' className={classes['search-input']}/>
                    </div>
                    <Pages/>
                </div>
                <div className='second'>
                    <div className={classes.options}>
                        <Options/>
                    </div>
                    <UserCard/>
                </div>
            </nav>
        </aside>
    )
}