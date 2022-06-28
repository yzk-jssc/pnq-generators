import { FunctionComponent } from "react";

interface NameListProps {
    namesList:string[]
}

const NameList: FunctionComponent<NameListProps> = ({namesList}) => {

    return (
        <div>
            {namesList.map((name) => (
                <div key={name}>{name}</div>
            ))}
        </div>
    );
};

export default NameList;
