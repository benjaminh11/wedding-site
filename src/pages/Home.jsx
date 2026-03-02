import Countdown from '../components/Countdown';
import './Home.css';

function Home() {
  return (
    <div className="home">

      {/* Hero Section */}
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
      <section className="story-section">
        <div className="story-container">
          <h2>Our Story</h2>
          <div className="story-divider"></div>
          <div className="story-text">
            <p>
              Taylor and A.J. met in October of 2016 at a trivia night hosted by the history department at Elon University. They ended up on the same team and when they eventually won first place, their whole team decided to use the prize money to go out for pizza. From there, Taylor and A.J. became good friends, bonding over a mutual love for trivia, comedy, and the New York Yankees. They stayed close throughout their senior year and when graduation came, they pledged to stay friends no matter how far apart they were.
            </p>
            <p>
              They didn't start dating right away, although their friends are quick to remind them that they were inseparable for a long time before they were officially together. After graduation, they saw each other as often as they could, including when A.J. flew down to Texas just to help Taylor get set up in her new place. When Taylor moved back to North Carolina in 2019, they were both excited to be near each other again. In February of 2020, they finally came to their senses and made the relationship official.
            </p>
            <p>
              The next few years were tumultuous: graduate school, a big move to Washington, DC, the loss of Taylor's father, Ira, and new careers and opportunities for both of them. Throughout all of it, they have found comfort and support in each other. They are still united by their mutual loves and have been to many baseball games and trivia nights in the decade since they first met.
            </p>
            <p>
              A.J. proposed at their favorite botanical garden in September of 2024. They both cried through the whole thing and Taylor doesn't remember a word of what A.J. said, although A.J. assures her it was beautiful and thoughtful. They are looking forward to all the exciting things coming in the future and are so excited to share their love and celebrate with everyone!
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;