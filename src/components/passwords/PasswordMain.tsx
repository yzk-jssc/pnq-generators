import { observer } from "mobx-react-lite";
import { FunctionComponent } from "react";
import { useClipboard } from "use-clipboard-copy";
import password from "../../store/password";
import MyForm from "../UI/form/MyForm";
import Nav from "../UI/nav/Nav";
import Range from "../UI/range/Range";
import PasswordList from "./password_list/PasswordList";
import classes from './PasswordMain.module.scss'

interface PasswordMainProps {}

const PasswordMain: FunctionComponent<PasswordMainProps> = observer(() => {

    const copyClick = useClipboard()
   
    return (
        <div className="_passwords_header">
            <header>
                <Nav
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
                title={'result'}
                sumbitFunc={(e)=>password.generatePassword(e)}
                value={password.passwords.result}
                valueHandler={()=>{}}
                inputRef={copyClick.target}
                inputCopy={copyClick.copy}
                />

                </div>


                
            
            </main>
        </div >
    );
});

export default PasswordMain

