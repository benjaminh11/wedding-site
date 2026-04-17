import './WeddingParty.css';

const weddingParty = [
  {
    name: 'Erin Mena',
    role: 'Co-Maid of Honor',
    photo: null,
    photoPosition: 'center center',
    bio: 'Bio coming soon.',
  },
  {
    name: 'Lauren Marley',
    role: 'Co-Maid of Honor',
    photo: new URL('../assets/lauren-marley.jpg', import.meta.url).href,
    photoPosition: 'center 20%',
    bio: 'I first met Taylor at Elon University. I introduced her to Indian food and Taylor introduced me to Drag Race. It was the beginning of a beautiful friendship! Taylor became an unofficial member of our sorority, generously attending many sorority leadership dinners all over North Carolina. We have been there for each other through thick and thin, and Taylor is such a loving and supportive person and friend. It has been a pleasure to see Taylor and AJ start dating and fall in love, and I am so excited for this next chapter in your life! Congratulations and I cannot wait to celebrate with you!',
  },
  {
    name: 'Jenna Stephens',
    role: 'Bridesmaid',
    photo: null,
    photoPosition: 'center center',
    bio: 'My name is Jenna and I am Taylor\'s future sister-in-law. I am married to AJ\'s brother, Jordan. I first met Taylor at AJ and Taylor\'s graduation from Elon. They were just friends at the time - but it was pretty clear that AJ was already in love. I remember thinking that she could one day be my sister-in-law. And here we are!',
  },
  {
    name: 'Nic Cicchetti',
    role: 'Bridesman',
    photo: new URL('../assets/nic-cicchetti.jpg', import.meta.url).href,
    photoPosition: 'center center',
    bio: 'Bio coming soon.',
  },
  {
    name: 'Jordan Brodsky',
    role: 'Best Man',
    photo: null,
    photoPosition: 'center center',
    bio: 'Bio coming soon.',
  },
  {
    name: 'Ben Hernowitz',
    role: 'Groomsman',
    photo: new URL('../assets/ben-hernowitz.JPG', import.meta.url).href,
    photoPosition: 'center 40%',
    bio: 'My name is Ben and I am Taylor\'s younger brother and only sibling. I recall the first time I met A.J. I gave him a written test to determine whether or not he was right for my sister. While he passed with a great score, I wasn\'t 100% convinced. However, since that time I have grown to love the time I spend with him, and I couldn\'t be happier to welcome him into the family and call him my brother.',
  },
  {
    name: 'Nathan Scheer',
    role: 'Groomsman',
    photo: null,
    photoPosition: 'center center',
    bio: 'Bio coming soon.',
  },
  {
    name: 'Matt Bacchi',
    role: 'Groomsman',
    photo: null,
    photoPosition: 'center center',
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
                <img
                  src={member.photo}
                  alt={member.name}
                  style={{ objectPosition: member.photoPosition || 'center center' }}
                />
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