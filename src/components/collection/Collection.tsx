import { FunctionComponent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import collection from "../../store/collection";
import user from "../../store/user";
import MyButton from "../UI/button/MyButton";
import classes from "./Collection.module.scss";
import CollectionLinks from "./collection_links/CollectionLinks";
import CollectionList from "./collection_list/CollectionList";

interface CollectionProps {}

const Collection: FunctionComponent<CollectionProps> = () => {
    
    const navigate = useNavigate()

    const collectionRedirect =(isAuth:boolean)=>{

        if(!isAuth){
            return navigate('/login')
        }
    }

    useEffect(() => {
        collection.swithCollectionsToPas()
        collectionRedirect(user.userInfo.auth)

    }, [user.userInfo.auth,])
    return (
        <div className={classes.collection}>
            <header className={classes.header}>
                <div className={classes.collection_title}>My collection</div>
            </header>
            <main className={classes.main}>
                <div className={classes.sidebar}>
                    {/* <button>Passwords</button> */}
                    <MyButton
                    onClick={()=>collection.swithCollectionsToPas()}
                    >Passwords</MyButton>
                    <MyButton
                    onClick={()=>collection.swithCollectionToNames()}
                    >Names</MyButton>
                </div>
                <div className={classes.content}>
                    <CollectionList/>
                </div>
            </main>
            <footer className={classes.footer}>
                <CollectionLinks/>
            </footer>
        </div>
    );
};

export default Collection;
