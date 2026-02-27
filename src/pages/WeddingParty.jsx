import './WeddingParty.css';

const weddingParty = [
  {
    name: 'Erin Mena',
    role: 'Co-Maid of Honor',
    photo: null,
    bio: 'Bio coming soon.',
  },
  {
    name: 'Lauren Marley',
    role: 'Co-Maid of Honor',
    photo: null,
    bio: 'Bio coming soon.',
  },
  {
    name: 'Jenna Stephens',
    role: 'Bridesmaid',
    photo: null,
    bio: 'Bio coming soon.',
  },
  {
    name: 'Nic Cicchetti',
    role: 'Bridesman',
    photo: null,
    bio: 'Bio coming soon.',
  },
  {
    name: 'Jordan Brodsky',
    role: 'Best Man',
    photo: null,
    bio: 'Bio coming soon.',
  },
  {
    name: 'Ben Hernowitz',
    role: 'Groomsman',
    photo: null,
    bio: 'Bio coming soon.',
  },
  {
    name: 'Nathan Scheer',
    role: 'Groomsman',
    photo: null,
    bio: 'Bio coming soon.',
  },
  {
    name: 'Matt Bacchi',
    role: 'Groomsman',
    photo: null,
    bio: 'Bio coming soon.',
  },
];

function WeddingParty() {
  return (
    <div className="wedding-party">

      <section className="wedding-party-hero">
        <div className="wedding-party-hero-overlay">
          <h1>Wedding Party</h1>
          <p>The people who mean the most to us</p>
        </div>
      </section>

      <div className="wedding-party-grid container">
        {weddingParty.map((member) => (
          <div className="member-card" key={member.name}>
            <div className="member-photo">
              {member.photo ? (
                <img src={member.photo} alt={member.name} />
              ) : (
                <div className="member-photo-placeholder">
                  <span>Photo Coming Soon</span>
                </div>
              )}
            </div>
            <div className="member-info">
              <h2>{member.name}</h2>
              <p className="member-role">{member.role}</p>
              <p className="member-bio">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default WeddingParty;