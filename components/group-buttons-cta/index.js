import ButtonCTA from "../button-cta"
import styles from "./index.module.scss"

const GroupButtonsCTA = ({primaryCTA, secondaryCTA, reverse=false}) => {
    return (
        <div className={`${reverse ? styles.reverse : styles.buttons}`}>
            <ButtonCTA cta={primaryCTA} />
            <ButtonCTA cta={secondaryCTA} isSecondary={true} />
        </div>
    )
}

export default GroupButtonsCTA;