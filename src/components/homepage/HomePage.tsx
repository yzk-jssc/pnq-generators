import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import classes from './HomePage.module.scss'


interface HomePageProps {
    
}
 
const HomePage: FunctionComponent<HomePageProps> = () => {
    return (
        <>
            <header >
                <h1 className={classes.header_title}>
                    {`Passwords-Names-Qr generators`}
                </h1>
            </header>
            <main className={classes.home_links}>
                <Link className={classes.home_links_item} to='/passwords'>Passwords</Link>
                <Link className={classes.home_links_item} to='/qrs'>Qr-s</Link>
                <Link className={classes.home_links_item} to='/names'>Names</Link>
            </main>
        </>
    );
}
 
export default HomePage;
