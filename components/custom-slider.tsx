import { ReactComponentElement } from "react"
import Tile from './tile'

interface SliderProps {
    tileType: Text;
    children: any;
    
}


export default function customSlider({tileType, children}: SliderProps ) {
    return (
        <div className={`${tileType.toString()} custom-slider`}>
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
    )
}