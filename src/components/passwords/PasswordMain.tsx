import { observer } from "mobx-react-lite";
import { FunctionComponent, useEffect } from "react";
import { useClipboard } from "use-clipboard-copy";
import password from "../../store/password";
import MyForm from "../UI/form/MyForm";
import NavPages from "../UI/nav_pages/NavPages";
import Range from "../UI/range/Range";
import PasswordList from "./password_list/PasswordList";
import MyButton from "../UI/button/MyButton";
import collection from "../../store/collection";
import user from "../../store/user";

import classes from './PasswordMain.module.scss'

interface PasswordMainProps {}

const PasswordMain: FunctionComponent<PasswordMainProps> = observer(() => {

    const copyClick = useClipboard()

    useEffect(() => {
        collection.swithCollectionsToPas()
    }, [])
   
    return (
        <div className="_passwords_header">
            <header>
                <NavPages
                firstLink="names"
                firstName="Names"
                secondLink="qrs"
                secondName="QR"
                />
                <div className={classes.password_title}>Password generator</div>
            </header>

            <main className={classes.password}>
                
                <div className={classes.password_preference}>
                    <div className={classes.password_item}>
                        <Range 
                        rangeClass={classes.password_length}
                        title={`Password length`} 
                        value={password.passwords.pLength} 
                        storeFunc={e=>password.lengthHandler(+e.target.value)}
                        minLength={8}
                        maxLength={30}
                    />
                    </div>

                    <div className={classes.password_item}>

                    <PasswordList />


                    </div>

                </div>

                <div className={classes.password_item}>
                <MyForm
                inputPlaceholder={"Click 'generate!'"}
                title={'result'}
                sumbitFunc={(e)=>password.generatePassword(e)}
                value={password.passwords.result}
                valueHandler={()=>{}}
                inputRef={copyClick.target}
                inputCopy={copyClick.copy}
                readOnly={true}
                buttonValue={'Generate!'}
                />

                </div>

                {user.userInfo.auth && (
                    <footer className={classes.button}>
                    {password.passwords.result && (
                        <MyButton
                        children='add this password in my collection'
                        onClick={()=>collection.addInMyCol(password.passwords.result)}
                        />
                    )}
                    </footer>
                )}
                
                
            
            </main>
        </div >
    );
});

export default PasswordMain

