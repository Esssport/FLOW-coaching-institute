import ButtonCTA from "../button-cta"
import styles from "./index.module.scss"

const GroupButtonsCTA = ({secondaryOnClick, primaryOnClick, primaryCTA, secondaryCTA, reverse=false}) => {
    return (
        <div className={`${reverse ? styles.reverse : styles.buttons}`}>
            <ButtonCTA onClick={primaryOnClick} cta={primaryCTA} />
            <ButtonCTA onClick={secondaryOnClick} cta={secondaryCTA} isSecondary={true} />
        </div>
    )
}

export default GroupButtonsCTA;