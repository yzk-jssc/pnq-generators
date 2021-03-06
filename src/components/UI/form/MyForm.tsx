import { ChangeEvent, FormEvent, FunctionComponent,MouseEvent } from "react";
import MyButton from "../button/MyButton";
import MyInput from "../input/MyInput";
import classes from './MyForm.module.scss'

interface MyFormProps {
    value:string;
    title:string;
    inputPlaceholder:string
    sumbitFunc:(e:FormEvent<HTMLFormElement>)=>void
    valueHandler:(e:ChangeEvent<HTMLInputElement>)=>void;
    buttonValue?:string;
    readOnly?:boolean;
    inputRef?:any
    inputCopy?:(e:MouseEvent<HTMLInputElement>)=>void;
}

const MyForm: FunctionComponent<MyFormProps> = ({
    value,title,inputPlaceholder, sumbitFunc,buttonValue,valueHandler,readOnly,inputRef,inputCopy, ...rest
}) => {
    return (
        <form onSubmit={sumbitFunc} className={classes.form}>
            <label className={classes.title}>{title}</label>
            <MyInput
            placeholder={inputPlaceholder}
            innerRef={inputRef}
            onClick={inputCopy}
            key={title}
            value={value}
            onChange={valueHandler}
            readOnly={readOnly}
            />

            <MyButton  key={(Math.random()).toString()}>{buttonValue}</MyButton>
        </form>
    );
};

export default MyForm;
