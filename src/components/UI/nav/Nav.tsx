import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import classes from './Nav.module.scss'

interface NavProps {
    firstLink:string;
    firstName:string;
    secondLink:string;
    secondName:string;
}

const Nav: FunctionComponent<NavProps> = ({firstLink,firstName,secondLink,secondName}) => {
    return (
        <nav className={classes.nav}>
            <Link className={classes.nav_link} to={`/${firstLink}`}>{firstName}</Link>
            <Link className={classes.nav_link} to={`/${secondLink}`}>{secondName}</Link>
        </nav>
    );
};

export default Nav;
