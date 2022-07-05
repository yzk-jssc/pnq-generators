import React, { Dispatch, FunctionComponent, ReactChild,  ReactNode, SetStateAction } from 'react'
import classes from './MyModal.module.scss'

interface MyModalProps {
    visible: boolean;
    setVisible: Dispatch<SetStateAction<boolean>>;
    children?: ReactNode | ReactChild 
}
 
const MyModal: FunctionComponent<MyModalProps> = ({visible,setVisible,children}) => {


    return (
        <div className={visible ? `${classes.myModal} ${classes.myModal_active}` : classes.myModal } onClick={()=>setVisible(false)}>
            <div className={visible ? `${classes.myModalContent} ${classes.myModalContent_active}` : classes.myModalContent} onClick={(e)=>e.stopPropagation()}>
                {children}
            </div>
            
        </div>
    );
}
 
export default MyModal;

