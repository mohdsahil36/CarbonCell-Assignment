import React from 'react';
import Logo from '../../assets/Logo.svg';
import classes from './Sidebar.module.css';
import './Side.css';
import { IoMdSearch } from "react-icons/io";
import Pages from '../Pages/Pages';
import Options from '../Options/Options';
import UserCard from '../UserCard/UserCard';

export default function Sidebar() {
    return (
        <aside>
            <nav className="navbar navbar-expand-lg navbar-light p-0">
                <div className={`container-fluid ${classes['sidebar-navigation']}`}>
                    <div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <div className={classes['sidebar-items']}>
                                <div>
                                    <li className="nav-item">
                                        <div className="first">
                                            <div className={classes.org}>
                                                <img src={Logo} alt="company-logo" height="32px" />
                                            </div>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <div className={classes.searchBar}>
                                            <IoMdSearch size={'1rem'} className={classes['search-icon']} />
                                            <input type="text" placeholder="Search" className={classes['search-input']} />
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <Pages />
                                    </li>
                                </div>
                                <div>
                                    <li>
                                        <Options/>
                                        <UserCard/>
                                    </li>
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
        </aside>

    )
}