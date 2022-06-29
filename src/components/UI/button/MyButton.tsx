import { ButtonHTMLAttributes, FunctionComponent,MouseEvent, ReactNode } from "react";
import classes from './MyButton.module.scss'

interface MyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    onClick?:(e:MouseEvent<HTMLButtonElement>)=>void;
    children:ReactNode
}
 
const MyButton: FunctionComponent<MyButtonProps> = ({
    onClick,children,...rest
}) => {
    return (
        <button
        className={classes.button}
        onClick={onClick}
            {...rest}
        >
            {children}
        </button>
    );
}
 
export default MyButton;