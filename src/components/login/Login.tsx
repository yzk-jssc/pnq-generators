import { FunctionComponent } from "react";
import MyButton from "../UI/button/MyButton";
import MyInput from "../UI/input/MyInput";
import classes from './Login.module.scss'

interface LoginProps {
    
}
 
const Login: FunctionComponent<LoginProps> = () => {
    return (
        <div className={classes.login}>

            <header className={classes.title}>
                login
            </header>
            <main className={classes.main}>
                <form className={classes.form}>
                    <div className={classes.form_item}>
                        <label className={classes.form_item_title} htmlFor="">login</label>
                        <MyInput value="as"/>
                    </div>
                    <div className={classes.form_item}>
                        <label className={classes.form_item_title} htmlFor="">password</label>
                        <MyInput value="as"/>
                    </div>
                    <MyButton
                    children='LOGIN'
                    />
                </form>
            </main>

        </div>
    );
}
 
export default Login;