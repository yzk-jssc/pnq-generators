import { observer } from "mobx-react-lite";
import { FunctionComponent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import user from "../../store/user";
import MyButton from "../UI/button/MyButton";
import MyInput from "../UI/input/MyInput";
import classes from "./SignIn.module.scss";

interface SignInProps {}

const SignIn: FunctionComponent<SignInProps> = observer(() => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    user.signInfo.login= false

    const correctSignRedirect = (isAuth: boolean) => {

        if (isAuth) {
            
            navigate("/login")
            
        } 
    };

    // useEffect(() => {
        correctSignRedirect(user.signInfo.login);
    // }, [user.signInfo.login]);

    return (
        <div className={classes.sign_in}>
            <header className={classes.title}>sign in</header>

            <main className={classes.main}>
                <form
                    className={classes.form}
                    onSubmit={(e) => user.signIn(e, login, password, setLogin,setPassword)}
                >
                    <div className={classes.form_item}>
                        <label className={classes.form_item_title} htmlFor="">
                            login
                        </label>

                        <MyInput
                            value={login}
                            onChange={(e) => setLogin(e.target.value)}
                        />
                    </div>

                    <div className={classes.form_item}>
                        <label className={classes.form_item_title} htmlFor="">
                            password
                        </label>

                        <MyInput
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <MyButton children="SIGN IN" />
                </form>
            </main>
        </div>
    );
});

export default SignIn;
