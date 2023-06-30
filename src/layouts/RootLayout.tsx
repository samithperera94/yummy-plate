import React from 'react';
import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation/MainNavigation';
import classes from "./RootLayout.module.scss"

const RootLayout = () => {
    return (
        <>
            <MainNavigation />
            <main className={classes.mainLayout}>
                <Outlet />
            </main>
        </>
    )
}

export default RootLayout