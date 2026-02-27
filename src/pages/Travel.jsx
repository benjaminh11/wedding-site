import './Travel.css';

const HOTEL_LINK = 'https://www.marriott.com/event-reservations/reservation-link.mi?id=1769707054417&key=GRP&app=resvlink&_branch_match_id=1549576816499676902&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXTywo0MtNLCrKzC8p0UvOz9UvSi3OyczLtgdK2ALZZSCOWmaKraG5maW5gbmBqYmJobladmqlrXtQgFpdUWpaKlB3Xnp8UlF%2BeXFqka1zRlF%2BbioAlz7VdWAAAAA%3D';

function Travel() {
  return (
    <div className="travel">

      <section className="travel-hero">
        <div className="travel-hero-overlay">
          <h1>Travel</h1>
          <p>Everything you need to plan your trip to Providence</p>
        </div>
      </section>

      <div className="travel-content container">

        <section className="travel-section">
          <h2>Getting to Providence</h2>

          <div className="travel-card">
            <h3>TF Green Airport (PVD)</h3>
            <p>Rhode Island's main airport, TF Green International Airport, is located in Warwick, RI — just 15 minutes south of Providence. This is the closest and most convenient option for guests flying in.</p>
            <a className="travel-link" href="https://www.pvdairport.com" target="_blank" rel="noreferrer">Visit TF Green Website →</a>
          </div>

          <div className="travel-card">
            <h3>Boston Logan International Airport (BOS)</h3>
            <p>Boston Logan is approximately 60 miles north of Providence and offers more flight options. From Logan you can rent a car, take an Amtrak train, or use a rideshare to get to Providence in about one hour.</p>
            <a className="travel-link" href="https://www.massport.com/logan-airport" target="_blank" rel="noreferrer">Visit Logan Airport Website →</a>
          </div>

        </section>

        <section className="travel-section">
          <h2>Hotel Block</h2>

          <div className="travel-card hotel-card">
            <h3>Courtyard by Marriott Providence Downtown</h3>
            <p>We have reserved a block of rooms at the Courtyard by Marriott Providence Downtown for the wedding weekend. Book early to secure your spot at the group rate!</p>
            <a className="travel-button" href={HOTEL_LINK} target="_blank" rel="noreferrer">Book Your Room</a>
          </div>

        </section>

        <section className="travel-section">
          <h2>Things to Do in Rhode Island</h2>
          <p className="travel-section-intro">Make the most of your trip to the Ocean State! Here are some of our favorite things to do in and around Providence.</p>

          <div className="travel-grid">

            <div className="travel-card">
              <h3>WaterFire Providence</h3>
              <p>One of Providence's most iconic experiences — bonfires blazing on the three rivers of downtown Providence. Check the schedule to see if there is a lighting during your visit.</p>
            </div>

            <div className="travel-card">
              <h3>Federal Hill</h3>
              <p>Providence's famous Italian neighborhood is packed with incredible restaurants, cafes, and shops. A perfect spot for dinner or a night out.</p>
            </div>

            <div className="travel-card">
              <h3>Newport, RI</h3>
              <p>Just 30 minutes from Providence, Newport is known for its stunning Gilded Age mansions, beautiful harbor, and iconic Cliff Walk along the ocean.</p>
            </div>

            <div className="travel-card">
              <h3>RISD Museum</h3>
              <p>The Rhode Island School of Design Museum features an impressive collection of art and design spanning thousands of years. A great way to spend a morning or afternoon.</p>
            </div>

            <div className="travel-card">
              <h3>Narragansett Beach</h3>
              <p>One of New England's best beaches is just 30 minutes from Providence. Perfect for a relaxing day by the ocean before or after the wedding weekend.</p>
            </div>

            <div className="travel-card">
              <h3>Benefit Street</h3>
              <p>Known as the Mile of History, Benefit Street is one of the most concentrated areas of Colonial architecture in the United States. A beautiful walk through Providence's past.</p>
            </div>

          </div>

        </section>

      </div>

    </div>
  );
}

export default Travel;