import React from 'react';
import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation/MainNavigation';
import classes from "./AdminPageLayout.module.scss";

const AdminPageLayout = () => {
    return (
        <>
            <MainNavigation />
            <main className={classes.mainLayout}>
                <Outlet />
            </main>
        </>
    )
}

export default AdminPageLayout