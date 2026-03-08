import './Events.css';

function Events() {
  return (
    <div className="events">

      <section className="events-hero">
        <div className="events-hero-overlay">
          <h1>Events</h1>
          <p>Join us for a weekend of celebration</p>
        </div>
      </section>

      <div className="events-list container">

        <div className="event-card">
          <div className="event-date">
            <span className="event-month">Sep</span>
            <span className="event-day">25</span>
          </div>
          <div className="event-details">
            <h2>Welcome Party</h2>
            <p className="event-meta">Friday, September 25, 2026</p>
            <p className="event-meta">Time: 7:30 P.M.</p>
            <p className="event-meta">Narragansett Brewery</p>
            <a className="event-directions" href="https://maps.google.com/?q=Narragansett+Brewery+Providence+RI" target="_blank" rel="noreferrer">Get Directions →</a>
            <p className="event-description">Kick off the wedding weekend with drinks, snacks, and trivia at Narragansett Brewery</p>
          </div>
        </div>

        <div className="event-card">
          <div className="event-date">
            <span className="event-month">Sep</span>
            <span className="event-day">26</span>
          </div>
          <div className="event-details">
            <h2>Wedding Ceremony and Reception</h2>
            <p className="event-meta">Saturday, September 26, 2026</p>
            <p className="event-meta">Guests arrive at 4:30 PM · Ceremony begins at 5:00 PM</p>
            <p className="event-meta">Providence Public Library · Providence, RI</p>
            <a className="event-directions" href="https://maps.google.com/?q=Providence+Public+Library+Providence+RI" target="_blank" rel="noreferrer">Get Directions →</a>
            <p className="event-description">Please arrive by 4:30 PM to be seated before the ceremony begins at 5:00 PM.</p>
          </div>
        </div>

        <div className="event-card">
          <div className="event-date">
            <span className="event-month">Sep</span>
            <span className="event-day">27</span>
          </div>
          <div className="event-details">
            <h2>Goodbye Brunch</h2>
            <p className="event-meta">Sunday, September 27, 2026</p>
            <p className="event-meta">Time: 10AM</p>
            <p className="event-meta">21 Rosewood Ave</p>
            <a className="event-directions" href="https://www.google.com/maps/place/21+Rosewood+Ave,+Narragansett,+RI+02882/@41.3760438,-71.4835201,17z/data=!3m1!4b1!4m6!3m5!1s0x89e5be770e8fbfaf:0x5bc5d6a23e7807b4!8m2!3d41.3760438!4d-71.4809452!16s%2Fg%2F11c190nvj7?entry=ttu&g_ep=EgoyMDI2MDMwNC4xIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noreferrer">Get Directions →</a>
            <p className="event-description">Send off the newlyweds with a relaxed goodbye brunch before heading home.</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Events;