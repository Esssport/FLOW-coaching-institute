import ButtonCTA from "../button-cta"
import ButtonTransparent from "../button-transparent"
import styles from "./index.module.scss"

const GroupButtonsCTA = props => {
    return (
        <div className={styles.buttons}>
            <ButtonCTA />
            <ButtonTransparent />
        </div>
    )
}

export default GroupButtonsCTA;