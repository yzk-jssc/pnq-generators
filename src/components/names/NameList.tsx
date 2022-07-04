import { FormEvent, FunctionComponent, useState } from "react";
import collection from "../../store/collection";
import user from "../../store/user";
import MyForm from "../UI/form/MyForm";
import classes from './NameList.module.scss'

interface NameListProps {
    namesList:string[]
}

const NameList: FunctionComponent<NameListProps> = ({namesList}) => {
    
    const [value, setValue] = useState<string>('')

    const sumbitFunc=(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        collection.addInMyCol(value)
    }

    return (
        <div className={classes.list}>
            <div className={classes.names}>
                {namesList.map((name) => (
                    
                    <div data-tip='hello' onClick={()=>setValue(name)} key={name} className={classes.item} >{name}</div>
                                        
                    
                ))}
            </div>
            {namesList && user.userInfo.auth && (
                <>
                {value&& user.userInfo.auth &&(
                    <MyForm
                    inputPlaceholder=''
                    sumbitFunc={(e)=>sumbitFunc(e)}
                    title=''
                    value={value}
                    valueHandler={()=>{}}
                    buttonValue='Add'
                    />
                )}

                <div>
                    You can click on name to add in 'my collection'
                </div>
                
                </>
            )}
        </div>
    );
};

export default NameList;
