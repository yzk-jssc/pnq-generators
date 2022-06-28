import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

interface NavProps {
    firstLink:string;
    firstName:string;
    secondLink:string;
    secondName:string;
}

const Nav: FunctionComponent<NavProps> = ({firstLink,firstName,secondLink,secondName}) => {
    return (
        <nav>
            <Link to={`/${firstLink}`}>{firstName}</Link>
            <Link to={`/${secondLink}`}>{secondName}</Link>
        </nav>
    );
};

export default Nav;
