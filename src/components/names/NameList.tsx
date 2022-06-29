import { FunctionComponent } from "react";
import classes from './NameList.module.scss'

interface NameListProps {
    namesList:string[]
}

const NameList: FunctionComponent<NameListProps> = ({namesList}) => {

    return (
        <div className={classes.list}>
            {namesList.map((name) => (
                <div className={classes.item} key={name}>{name}</div>
            ))}
        </div>
    );
};

export default NameList;
