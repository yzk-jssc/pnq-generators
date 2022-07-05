import { observer } from "mobx-react-lite";
import { FunctionComponent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import user from "../../store/user";
import MyButton from "../UI/button/MyButton";
import MyInput from "../UI/input/MyInput";
import MyModal from "../UI/modal/MyModal";
import classes from "./SignIn.module.scss";

interface SignInProps {}

const SignIn: FunctionComponent<SignInProps> = observer(() => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [visible, setVisible] = useState<boolean>(false)
    console.log(visible)
    const correctSignRedirect = (isAuth: boolean) => {
        if (isAuth) {            
            navigate("/login")            
        } 
    };

    useEffect(() => {
        correctSignRedirect(user.signInfo.login);
    }, [user.signInfo.login]);

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
                        placeholder="Enter login(more than 3 letter)"
                            value={login}
                            onChange={(e) => setLogin(e.target.value)}
                        />
                    </div>

                    <div className={classes.form_item}>
                        <label className={classes.form_item_title} htmlFor="">
                            password
                        </label>

                        <MyInput
                        placeholder="Enter password(more than 3 letter)"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {/* MODAL PASSWORD/LOGIN FALSE */}
                    <MyButton onClick={()=>setVisible(true)} children="SIGN IN" />
                </form>
                
                    {!user.signInfo.login && (
                        <MyModal visible={visible} setVisible={setVisible}
                        
                        children='asd'
                        />
                    )}


            </main>
        </div>
    );
});

export default SignIn;
