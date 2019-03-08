import React, { Fragment } from 'react';
import ImgUrl from '../images/notes-background.jpg';

const WelcomePage = () => (
    <Fragment>
        <div align='center'>
            <h2 style={{ color: 'blue' }}>
                Hey Welcome to Notes App!!!
            </h2>          
        </div>
        <img src={ImgUrl} alt="Notes App"  height="100%" width="100%"/>              
    </Fragment>
);

export default WelcomePage;