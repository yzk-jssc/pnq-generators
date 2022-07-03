import { FunctionComponent } from "react";
import NavPages from "../../UI/nav_pages/NavPages";

interface CollectionLinksProps {
    
}
 
const CollectionLinks: FunctionComponent<CollectionLinksProps> = () => {
    return (
        <>
            <NavPages 
                firstLink=""
                firstName="Homepage"
                secondLink="passwords"
                secondName="Passwords"           
            />
            <NavPages 
                firstLink="qrs"
                firstName="QR-s"
                secondLink="names"
                secondName="Names"           
            />
            
        </>
    );
}
 
export default CollectionLinks;