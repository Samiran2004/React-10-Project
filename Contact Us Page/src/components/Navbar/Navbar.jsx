import Button from "../Button/Button";
import styles from "./Navbar.module.css"
function Navbar() {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.logo}>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/009/397/810/small/contact-us-buttons-clipart-design-illustration-free-png.png" alt="Reload" />
            </div>
            <div className={styles.content}>
                <ul>
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>CONTACT</li> 
                </ul>
            </div>
        </div>
    );
}
export default Navbar;