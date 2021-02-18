interface ctaProps {
    copy: Text;
    ctaText: Text;
}

export default function CtaBanner({copy, ctaText}: ctaProps) {
    return (
        //  style={{ backgroundImage: `url('/cta-banner.svg')` }}
        <div className="cta-banner">
            <button className="cta-button">{ctaText}</button>
            <h1>{copy}</h1>
        </div>
    )
}