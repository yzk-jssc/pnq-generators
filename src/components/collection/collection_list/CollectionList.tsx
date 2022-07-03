import { observer } from "mobx-react-lite";
import { FunctionComponent } from "react";
import collection from "../../../store/collection";
import classes from "./CollectionList.module.scss";

interface CollectionListProps {}

const CollectionList: FunctionComponent<CollectionListProps> = observer(() => {
    const currentItemsList = collection.collectionList.filter(
        (item) => item.id === collection.currentList.id
    )[0];

    return (
        <>
            {currentItemsList && (
                <>
               <header>
                { <div className={classes.title}>{currentItemsList.id}</div>}
            </header>
                    <div className={classes.list}>
                        {currentItemsList.items.map((item) => (
                            
                            <div className={classes.item} key={item}>
                                {item}
                            </div>
                            
                            
                        ))}
                    </div>
                </>
            )}
        </>
    );
});

export default CollectionList;
