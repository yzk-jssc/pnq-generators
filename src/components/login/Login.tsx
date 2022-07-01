import { observer } from "mobx-react-lite";
import { FunctionComponent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import user from "../../store/user";
import MyButton from "../UI/button/MyButton";
import MyInput from "../UI/input/MyInput";
import classes from './Login.module.scss'

interface LoginProps {
    
}
 
const Login: FunctionComponent<LoginProps> = observer(() => {
    const [login, setLogin] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const navigate =useNavigate()

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
                    (e)=>user.login(e,login,password,setPassword)
                }>

                    <div className={classes.form_item}>

                        <label className={classes.form_item_title} htmlFor="">login</label>

                        <MyInput value={login} onChange={(e)=>setLogin(e.target.value)}/>

                    </div>

                    <div className={classes.form_item}>

                        <label className={classes.form_item_title} htmlFor="">password</label>

                        <MyInput value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        
                    </div>
                    <MyButton
                    children='LOGIN'
                    />
                </form>
            </main>

        </div>
    );
})
 
export default Login;