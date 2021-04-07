import CustomSlider from '../custom-slider';

const SectionEvents = props => {
    return (
        <div className="events">
            <div className="description">
                <h1>UPCOMING<br />EVENTS</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi et, adipiscing ac feugiat fermentum. Arcu orci sodales nibh sit fermentum. Ut sed sed id pellentesque est rhoncus blandit.</p>
                <div className="cta-orange"><a href="/">Go to event calendar &rarr;</a></div>
            </div>
            <div className="event-slider-container">
                <CustomSlider tileType="event-tiles">

                    {/* TODO: export to own component */}
                    <div className="event-tile">
                        <div className="date-bar">
                            <h1><span className="day-sub-section">08</span><br /><span className="month-sub-section">January</span></h1>
                            <a className="free-button red-button">Free</a>
                        </div>
                        <h1>Flow Global Talks</h1>
                        <small>Webinar</small>
                        <a className="learn-more-events">Learn more &rarr;</a>
                        <div className="info">
                            <div className="sponsor-wrapper">
                                <small>sponsored by</small>
                                <img src="/logo.svg" alt="sponsor logo"></img>
                            </div>
                            <div className="support-wrapper">
                                <small>supported by</small>
                                <h1>Emily Carr</h1>
                                <h2>University of Art + Design</h2>
                            </div>
                        </div>
                    </div>
                </CustomSlider>
            </div>
        </div>
    )
}

export default SectionEvents;