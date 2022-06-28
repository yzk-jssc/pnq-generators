import { ChangeEvent, FormEvent, FormHTMLAttributes, FunctionComponent, RefObject,MouseEvent, ReactNode } from "react";
import MyButton from "../button/MyButton";
import MyInput from "../input/MyInput";

interface MyFormProps extends FormHTMLAttributes<HTMLFormElement>{
    value:string;
    title:string;
    sumbitFunc:(e:FormEvent<HTMLFormElement>)=>void
    valueHandler:(e:ChangeEvent<HTMLInputElement>)=>void
    ref?:RefObject<any>;
    inputCopy?:(e:MouseEvent<HTMLInputElement>)=>void;
}

const MyForm: FunctionComponent<MyFormProps> = ({
    value,title, sumbitFunc,valueHandler,ref,inputCopy, ...rest
}) => {
    return (
        <form onSubmit={sumbitFunc} >
            <label>{title}</label>
            <br />
            <MyInput
            ref={ref}
            onClick={inputCopy}
            key={'123'}
            value={value}
            onChange={valueHandler}
        
            />

            <MyButton key={(Math.random()).toString()}>Convert!</MyButton>
        </form>
    );
};

export default MyForm;
