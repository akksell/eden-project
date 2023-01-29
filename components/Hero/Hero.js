import styles from "./Hero.module.css"

const Hero = ({...props}) => {
    return (
        <div className={`${styles.heroContainer}`}>
            <div>
                <h1 className={`${styles.heroTitle}`}>
                    Welcome To <span className={`${styles.emphasis}`}>Eden</span>
                </h1>
                <h4 className={`${styles.heroSubtitle}`}>A fun way to track and manage your goals.</h4>
            </div>
            <div className={`${styles.heroBtnContainer}`}>
                <a href="/signup" className={`${styles.heroBtn}`}>Sign Up</a>
                <a href="/login" className={`${styles.heroBtn} ${styles.teal}`}>Login</a>
            </div>
        </div>
    )
}

export default Hero