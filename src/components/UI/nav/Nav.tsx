import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import user from "../../../store/user";
import classes from './Nav.module.scss'

interface NavProps {
    
}
 
const Nav: FunctionComponent<NavProps> = () => {
    return (
        <nav className={`${classes.nav}`}>
                
            <Link to='/' className={classes.title}>p-n-q generators</Link>
                    
                    <div className={classes.buttons}>
                    {user.currUserInfo.auth
                    ? <>
                        <div className={classes.name}>
                            {user.currUserInfo.login}
                        </div>
                        <Link className={classes.button} to='/collection'>
                            my collection
                        </Link>
                        <Link to='/' className={classes.button}>
                            log out {/* модалку */}
                        </Link>
    
                    </>
                    :<>
                        <Link className={classes.button} to={"/login"}>login</Link>
                        <Link className={classes.button} to={"/sign"}>sign in</Link>
                    </>
                    }
                    </div>
                    
        </nav>
    );
}
 
export default Nav;