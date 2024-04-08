import React from 'react';
import { MdNotificationsNone } from "react-icons/md";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { CiSettings } from "react-icons/ci";
import classes from './Options.module.css';

export default function Options(){
    return(
        <div className='user-options'>
            <div className={classes['notifications-opt']}>
                <div className={classes.notification}>
                    <MdNotificationsNone className={classes['notification-svg']} size={'1.25rem'}/>
                    <p className={classes['notification-label']}>Notifications</p>
                </div>
                <div className='notifications-num'>
                    <span className={classes.notNum}>12</span>
                </div>
            </div>
            <div className={classes.support}>
               <AiOutlineQuestionCircle className={classes['support-svg']} size={'1.25rem'}/> 
               <p className={classes['support-label']}>Support</p>
            </div>
            <div className={classes.settings}>
                <CiSettings className={classes['settings-svg']} size={'1.25rem'}/>
                <p className={classes['settings-label']}>Settings</p>
            </div>
        </div>
    )
}