import './RSVP.css';

const WELCOME_DINNER_FORM = 'https://docs.google.com/forms/d/e/1FAIpQLSckf_paff32Y4ktYKAiiv2j_pIQeM0JMrorPxbEOJLDqiGPKg/viewform?usp=header';
const CEREMONY_FORM = 'https://docs.google.com/forms/d/e/1FAIpQLSd6ebtXpHBbmdEkX11v9IU1BetKiVxub9GOOdESjDb-vOPkJg/viewform';
const GOODBYE_BRUNCH_FORM = 'https://docs.google.com/forms/d/e/1FAIpQLSckf_paff32Y4ktYKAiiv2j_pIQeM0JMrorPxbEOJLDqiGPKg/viewform';

function RSVP() {
  return (
    <div className="rsvp">

      {/* Hero Section */}
      {/* TODO: Add rsvp-hero.jpg to src/assets/ to replace the placeholder */}
      <section className="rsvp-hero">
        <div className="rsvp-hero-overlay">
          <h1>RSVP</h1>
          <p>Please respond by August 1, 2026</p>
        </div>
      </section>

      <div className="rsvp-intro container">
        <p>We are so excited to celebrate with you! Please RSVP for each event you plan to attend below.</p>
      </div>

      <div className="rsvp-forms container">

        {/* Welcome Dinner */}
        <div className="rsvp-card">
          <div className="rsvp-card-header">
            <span className="rsvp-card-date">Friday, September 25</span>
            <h2>Welcome Dinner</h2>
            <p className="rsvp-card-meta">Location: TBD · Time: TBD</p>
          </div>
          <div className="rsvp-card-body">
            <p>Kick off the wedding weekend with a welcome dinner. Click below to RSVP.</p>
            <a href={WELCOME_DINNER_FORM} target="_blank" rel="noreferrer" className="rsvp-button">
              RSVP for Welcome Dinner
            </a>
          </div>
        </div>

        {/* Ceremony */}
        <div className="rsvp-card">
          <div className="rsvp-card-header">
            <span className="rsvp-card-date">Saturday, September 26</span>
            <h2>Wedding Ceremony & Reception</h2>
            <p className="rsvp-card-meta">Providence Public Library · Guests arrive at 4:30 PM</p>
          </div>
          <div className="rsvp-card-body">
            <p>Join us for our ceremony and reception. Click below to RSVP and select your dinner choice.</p>
            <a href={CEREMONY_FORM} target="_blank" rel="noreferrer" className="rsvp-button">
              RSVP for Ceremony & Reception
            </a>
          </div>
        </div>

        {/* Goodbye Brunch */}
        <div className="rsvp-card">
          <div className="rsvp-card-header">
            <span className="rsvp-card-date">Sunday, September 27</span>
            <h2>Goodbye Brunch</h2>
            <p className="rsvp-card-meta">21 Rosewood Ave · Time: TBD</p>
          </div>
          <div className="rsvp-card-body">
            <p>Send off the newlyweds with a relaxed goodbye brunch. Click below to RSVP.</p>
            <a href={GOODBYE_BRUNCH_FORM} target="_blank" rel="noreferrer" className="rsvp-button">
              RSVP for Goodbye Brunch
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default RSVP;