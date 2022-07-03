import { ChangeEvent, FormEvent, FunctionComponent,MouseEvent } from "react";
import MyButton from "../button/MyButton";
import MyInput from "../input/MyInput";
import classes from './MyForm.module.scss'

interface MyFormProps {
    value:string;
    title:string;
    inputPlaceholder:string
    sumbitFunc:(e:FormEvent<HTMLFormElement>)=>void
    valueHandler:(e:ChangeEvent<HTMLInputElement>)=>void
    inputRef?:any
    inputCopy?:(e:MouseEvent<HTMLInputElement>)=>void;
}

const MyForm: FunctionComponent<MyFormProps> = ({
    value,title,inputPlaceholder, sumbitFunc,valueHandler,inputRef,inputCopy, ...rest
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
            {...rest}
            />

            <MyButton  key={(Math.random()).toString()}>Generate!</MyButton>
        </form>
    );
};

export default MyForm;
