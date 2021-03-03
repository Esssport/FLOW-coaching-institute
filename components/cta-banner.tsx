interface ctaProps {
    copy: Text;
    ctaText: Text;
}

function removeElement(el: Element) {
    el.parentNode && el.parentNode.removeChild(el);
}

export default function CtaBanner({ copy, ctaText }: ctaProps) {
    return (
        <div className="cta-banner-container">
            <button className="close-button red-button">Close</button>
            <div className="cta-banner">
                <button className="cta-button">{ctaText}</button>
                <h1>{copy}</h1>
                <img src="/cta-banner.svg"></img>
            </div>
        </div>
    )
}