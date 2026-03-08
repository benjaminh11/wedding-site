import './Registry.css';

const REGISTRY_LINK = 'https://www.theknot.com/us/taylor-hernowitz-and-a-j-brodsky-sep-2026/registry';

function Registry() {
  return (
    <div className="registry">

      <section className="registry-hero">
        <div className="registry-hero-overlay">
          <h1>Registry</h1>
          <p>A few things we love</p>
        </div>
      </section>

      <div className="registry-content container">

        <div className="registry-message">
          <h2>A Note From Us</h2>
          <div className="registry-divider"></div>
          <p>Your presence at our wedding is the greatest gift of all, and we are so grateful
            that you will be there to celebrate with us. Please do not feel any obligation
            to bring a gift — having you there means everything to us.</p>
          <p>For those who have asked, we have put together a registry through The Knot.
            Our registry includes items from Crate and Barrel as well as a few other
            selections. Everything is managed in one place and can be found at the link below.</p>
          <p>Thank you so much for your love and generosity. We cannot wait to celebrate with you!</p>
          <p className="registry-signature">With love, Taylor and A.J.</p>
        </div>

        <div className="registry-button-wrapper">
          <a href={REGISTRY_LINK} target="_blank" rel="noreferrer" className="registry-button">
            View Our Registry
          </a>
        </div>

      </div>
    </div>
  );
}

export default Registry;