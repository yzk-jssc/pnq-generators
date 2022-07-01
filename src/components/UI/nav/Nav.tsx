import { observer } from "mobx-react-lite";
import { FunctionComponent } from "react";
import { Link, useNavigate } from "react-router-dom";
import user from "../../../store/user";
import classes from './Nav.module.scss'

interface NavProps {
    
}
 
const Nav: FunctionComponent<NavProps> = observer(() => {


    return (
        <nav className={`${classes.nav}`}>
                
            <Link to='/' className={classes.title}>p-n-q generators</Link>
                    
                    <div className={classes.buttons}>
                    {user.userInfo.auth
                    ? <>

                        <div className={classes.name}>
                            {user.userInfo.login}
                        </div>
                        <Link className={classes.button} to='/collection'>
                            my collection
                        </Link>
                        <button className={classes.button}>
                            log out {/* модалку */}
                        </button>
    
                    </>
                    :<>
                        <Link className={classes.button} to={"/login"}>login</Link>
                        <Link className={classes.button} to={"/sign"}>sign in</Link>
                    </>
                    }
                    </div>
                    
        </nav>
    );
})
 
export default Nav;