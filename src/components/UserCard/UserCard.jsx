import React from 'react';
import Avatar from '../../assets/boy.png';
import { SlOptionsVertical } from "react-icons/sl";
import classes from './UserCard.module.css';

export default function UserCard(){
    return(
        <div className={classes['user-card']}>
            <div className={classes['user-avatar']}>
                <img src={Avatar} alt="avatar" className={classes.avatar}/>
            </div>
            <div className={classes['user-data']}>
                <p className={classes.username}>Brooklyn Simmons</p>
                <p className={classes['user-email']}>brooklyn@simmons.com</p>
            </div>
            <div>
                <SlOptionsVertical className={classes.ext}/>
            </div>
        </div>
    )
}
