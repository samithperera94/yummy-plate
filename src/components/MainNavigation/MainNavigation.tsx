import { NavLink } from 'react-router-dom';
import HeaderCartButton from '../HeaderCart/HeaderCartButton';
import classes from './MainNavigation.module.scss';
// import NewsletterSignup from './NewsletterSignup';

function MainNavigation() {
    return (
        <header className={classes.header}>
            <div className={classes.logoWrapper}>
                <img src="/logo_transparent.png" />
            </div>
            <nav>
                <ul className={classes.list}>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => isActive ? classes.active : undefined}
                            end>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) => isActive ? classes.active : undefined}
                            to="/promotions">
                            Promotions
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) => isActive ? classes.active : undefined}
                            to="/top-rated">
                            Top Rated
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            className={({ isActive }) => isActive ? classes.active : undefined}
                            to="/about">
                            About Us
                        </NavLink>
                    </li>

                </ul>
            </nav>
            <div className={classes.cartWrapper}>
                <HeaderCartButton />
            </div>
        </header>
    );
}

export default MainNavigation;