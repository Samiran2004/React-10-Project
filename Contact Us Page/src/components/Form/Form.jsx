import Button from '../Button/Button';
import styles from './Form.module.css'
import { BiSolidMessageRoundedDots } from "react-icons/bi";
import { MdAddCall } from "react-icons/md";
import { MdOutlineAttachEmail } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
function Form() {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.contentContainer}>
                <div className={styles.buttonContainer}>
                    <Button content={"VIA SUPPORT CHAT"} icon={BiSolidMessageRoundedDots} />
                    <Button content={"VIA CALL"} icon={MdAddCall} />
                    <Button content={"VIA EMAIL FORM"} icon={MdOutlineAttachEmail} />
                </div>
                <div className={styles.formContainer}>
                    <input type="text" placeholder='ENTER YOUR NAME' />
                    <input type="text" placeholder='EMAIL' />
                    <input type="text" placeholder='TEXT' />
                    <Button content={"SUBMIT"} icon={IoIosSend} />
                </div>
            </div>
            <div className="imageSection">
                <img src="https://cdni.iconscout.com/illustration/premium/thumb/contact-us-3483601-2912018.png" alt="Reload" />
            </div>
        </div>
    )
}
export default Form;