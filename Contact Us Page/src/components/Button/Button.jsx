import styles from './button.module.css'
function Button({ content, icon: Icon }) {
    return (
        <div className={styles.btnContainer}>
            <button>
                {Icon && <Icon />}
                {content}
            </button>
        </div>
    )
}
export default Button;