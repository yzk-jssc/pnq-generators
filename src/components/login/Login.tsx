import { observer } from "mobx-react-lite";
import { FormEvent, FunctionComponent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import user from "../../store/user";
import MyButton from "../UI/button/MyButton";
import MyInput from "../UI/input/MyInput";
import MyModal from "../UI/modal/MyModal";
import classes from './Login.module.scss'

interface LoginProps {
    
}
 
const Login: FunctionComponent<LoginProps> = observer(() => {
    const [login, setLogin] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const navigate =useNavigate();
    const [remember, setRemember] = useState<boolean>(false)
    const [visible, setVisible] = useState<boolean>(false)

    const submitLoginHandler= (e:FormEvent<HTMLFormElement>) =>{
        e.preventDefault()

        user.login(login,password,remember)

        if(!user.loginCheck){
            setVisible(true)
        }
    }

    const correctLoginRedirect =(isAuth:boolean)=>{
        if(isAuth){
            return navigate('/')
        }else if(!isAuth){
            return navigate('/login')
        }

    }

    useEffect(() => {
        correctLoginRedirect(user.userInfo.auth)
    }, [user.userInfo.auth])

    return (
        <div className={classes.login}>

            <header className={classes.title}>
                login
            </header>
            <main className={classes.main}>
                
                <form className={classes.form} onSubmit={
                    (e)=>submitLoginHandler(e)
                }>

                    <div className={classes.form_item}>

                        <label className={classes.form_item_title} htmlFor="">login</label>

                        <MyInput
                        placeholder="Enter login"
                        value={login} onChange={(e)=>setLogin(e.target.value)}/>

                    </div>

                    <div className={classes.form_item}>

                        <label className={classes.form_item_title} htmlFor="">password</label>

                        <MyInput
                        placeholder="Enter password"
                        value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        
                        
            
                    </div>

                    <MyButton
                    children='LOGIN'
                    />
                    <div className={classes.check}>

                        <input 
                        className={classes.check_main}
                        type="checkbox" name="" id="check"
                        checked={remember}
                        onChange={(e)=>setRemember(e.target.checked)}/>

                        <label className={classes.check_title} htmlFor="check">Remember me</label>

                    </div>
                </form>

                {!user.loginCheck && (
                        <MyModal visible={visible} setVisible={setVisible}
                        
                        children='Enter correct login or password'
                    />
                )}
            </main>

        </div>
    );
})
 
export default Login;