import React from 'react';
import classes from './Homepage.module.css';

export default function Homepage(){
    return(
        <h2 className={classes['homepage-heading']}>
            Welcome to this application
        </h2>
    )
}