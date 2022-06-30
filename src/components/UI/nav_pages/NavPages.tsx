import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import classes from './NavPages.module.scss'

interface NavPagesProps {
    firstLink:string;
    firstName:string;
    secondLink:string;
    secondName:string;
}

const NavPages: FunctionComponent<NavPagesProps> = ({firstLink,firstName,secondLink,secondName}) => {
    return (
        <nav className={classes.nav}>
            <Link className={classes.nav_link} to={`/${firstLink}`}>{firstName}</Link>
            <Link className={classes.nav_link} to={`/${secondLink}`}>{secondName}</Link>
        </nav>
    );
};

export default NavPages;
