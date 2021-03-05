interface ctaProps {
    copy: Text;
    ctaText: Text;
}

const removeElement = (el: any) => {
    // d = document.getElementById('overlay');
    // d.parentNode.removeChild(d);
    document.querySelector('.cta-banner-container')?.remove()
    // el.remove()
}

export default function CtaBanner({ copy, ctaText }: ctaProps) {
    return (
        
        <div className="cta-banner-container">
            <button onClick={() => removeElement("this")} className="close-button red-button">Close</button>
            <div className="cta-banner">
                <button className="cta-button">{ctaText}</button>
                <h1>{copy}</h1>
                <img src="/cta-banner.svg"></img>
            </div>
        </div>
    )
}