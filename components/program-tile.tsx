export default function programTile() {
    return (
        <div className="program-tile" style={{ backgroundImage: `url('/program-tile.svg')` }}>
            <button className="live-button red-button">Online - Live</button>
            <h1><img src="/icon-medal-black.svg"></img>Course A</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt scelerisque sem quam consectetur nunc, pretium enim. Dictum id euismod nibh curabitur in euismod egestas leo turpis. Consequat, et quis nisl adipiscing a, tortor consectetur id...</p>
            <div className="program-info">
                <ul>
                    <li><h2>Course Details</h2></li>
                    <li><img src="/icon-clock.svg"></img><strong>25</strong>{` `}hours</li>
                    <li><img src="/icon-lesson.svg"></img><strong>4</strong> modules</li>
                    <li><img src="/icon-medal.svg"></img><strong>ACF Certifications</strong></li>
                </ul>
                <ul>
                    <li><h2>Prerequisite</h2></li>
                    <li><img src="/icon-clock.svg"></img>module <strong>1-5</strong></li>
                </ul>
                {/* TODO:Add learn more button here*/}
            </div>
        </div>
    )
}