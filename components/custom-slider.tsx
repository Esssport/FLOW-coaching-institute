import { ReactComponentElement } from "react"
import Tile from './tile'

interface SliderProps {
    tileType: Text;
    children: any;
}


export default function customSlider({ tileType, children }: SliderProps) {
    return (
        <>
            <div className={`${tileType.toString()} custom-slider slider`}>
                {children}
                {children}
                {children}
                {children}
                {children}
                {children}
                {children}
                {children}
                {children}
                {children}
            </div>
        {tileType.toString() === "program-tiles" 
        ? <div className="learn-more-container"><a href="/">Go to program calendar &rarr;</a></div>
        : <></>
        }
        </>
    )
}