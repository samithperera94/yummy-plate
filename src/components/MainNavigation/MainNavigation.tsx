import { NavLink, Link } from 'react-router-dom';
import HeaderCartButton from '../HeaderCart/HeaderCartButton';
import classes from './MainNavigation.module.scss';
// import NewsletterSignup from './NewsletterSignup';

function MainNavigation() {
    return (
        <header className={classes.header}>
            <div className={classes.logoWrapper}>
                <Link to="/">
                    <img src="/logo_transparent.png" />
                </Link>
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
                            to="/menu"
                            className={({ isActive }) => isActive ? classes.active : undefined}
                            end>
                            Menu
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) => isActive ? classes.active : undefined}
                            to="menu/promotions">
                            Promotions
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) => isActive ? classes.active : undefined}
                            to="menu/top-rated">
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
                {/* <HeaderCartButton /> */}
            </div>
        </header>
    );
}

export default MainNavigation;