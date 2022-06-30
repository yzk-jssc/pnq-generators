import { FunctionComponent } from "react";
import MyButton from "../UI/button/MyButton";
import MyInput from "../UI/input/MyInput";
import classes from './SignIn.module.scss'

interface SignInProps {
    
}
 
const SignIn: FunctionComponent<SignInProps> = () => {
    return (
        <div className={classes.sign_in}>

            <header className={classes.title}>
                sign in
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
                    children='SIGN IN'
                    />
                </form>
            </main>

        </div>
    );
}
 
export default SignIn;