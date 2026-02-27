import Countdown from '../components/Countdown';
import './Home.css';

function Home() {
  return (
    <div className="home">

      {/* Hero Section */}
      {/* TODO: Add home-hero.jpg to src/assets/ to replace the placeholder */}
      <section className="hero">
        <div className="hero-overlay">
          <h1>Taylor & A.J.</h1>
          <p className="hero-date">September 26, 2026 · Providence, RI</p>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="countdown-section">
        <Countdown />
      </section>

      {/* Our Story Section */}
      <section className="story-section container">
        <h2>Our Story</h2>
        <p>
          This is where Taylor and A.J.'s story goes. Update this with however
          you'd like to tell it — how you met, a favorite memory, what makes
          your relationship special.
        </p>
      </section>

    </div>
  );
}

export default Home;