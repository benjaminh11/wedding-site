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
            <h2>Welcome Dinner</h2>
            <p className="event-meta">Friday, September 25, 2026</p>
            <p className="event-meta">Time: TBD</p>
            <p className="event-meta">Location: TBD</p>
            <p className="event-description">Kick off the wedding weekend with a welcome dinner. More details coming soon!</p>
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
            <a className="event-directions" href="https://maps.google.com/?q=Providence+Public+Library+Providence+RI" target="_blank" rel="noreferrer">Get Directions</a>
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
            <p className="event-meta">Time: TBD</p>
            <p className="event-meta">21 Rosewood Ave</p>
            <a className="event-directions" href="https://maps.google.com/?q=21+Rosewood+Ave" target="_blank" rel="noreferrer">Get Directions</a>
            <p className="event-description">Send off the newlyweds with a relaxed goodbye brunch before heading home.</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Events;