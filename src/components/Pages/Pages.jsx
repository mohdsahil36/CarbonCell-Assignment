import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Pages.module.css';

export default function Pages() {
    return (
        <div className={classes['navigation-links']}>
            <nav>
                <ul className={classes['navigation-list']}>
                    <li>
                        <NavLink to='/' exact>
                            Home
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
