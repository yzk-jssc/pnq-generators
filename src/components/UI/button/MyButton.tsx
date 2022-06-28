import { ButtonHTMLAttributes, FunctionComponent,MouseEvent, ReactNode } from "react";

interface MyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    key:string;
    onClick?:(e:MouseEvent<HTMLButtonElement>)=>void;
    children:ReactNode
}
 
const MyButton: FunctionComponent<MyButtonProps> = ({
    key,onClick,children,...rest
}) => {
    return (
        <button
        key={key}
        onClick={onClick}
            {...rest}
        >
            {children}
        </button>
    );
}
 
export default MyButton;