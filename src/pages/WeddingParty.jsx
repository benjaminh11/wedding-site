import './WeddingParty.css';

const weddingParty = [
  {
    name: 'Erin Mena',
    role: 'Co-Maid of Honor',
    photo: new URL('../assets/erin-mena.jpg', import.meta.url).href,
    photoPosition: 'center 40%',
    bio: 'I met Taylor during our first day of college. However, it may be more accurate to say that Taylor met me, when she walked through the door adjoining their dorm rooms and introduced herself. Quickly we became roommates, but more importantly, we became very close friends. Taylor introduced AJ to me as her "friend", but it soon became clear that there was a significant connection between them, as Taylor and AJ shared similar interests and enjoyed each other\'s company. I am honored to be a co-maid of honor and so excited to celebrate Taylor and AJ.',
  },
  {
    name: 'Lauren Marley',
    role: 'Co-Maid of Honor',
    photo: new URL('../assets/lauren-marley.jpg', import.meta.url).href,
    photoPosition: 'center 20S%',
    bio: 'I first met Taylor at Elon University. I introduced her to Indian food and Taylor introduced me to Drag Race. It was the beginning of a beautiful friendship! Taylor became an unofficial member of our sorority, generously attending many sorority leadership dinners all over North Carolina. We have been there for each other through thick and thin, and Taylor is such a loving and supportive person and friend. It has been a pleasure to see Taylor and AJ start dating and fall in love, and I am so excited for this next chapter in your life! Congratulations and I cannot wait to celebrate with you!',
  },
  {
    name: 'Jenna Stephens',
    role: 'Bridesmaid',
    photo: new URL('../assets/jenna-stephens.jpg', import.meta.url).href,
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
    photoPosition: 'center 30%',
    bio: 'My name is Ben and I am Taylor\'s younger brother and only sibling. I am so happy to welcome AJ into the family. His sense of humor is one of his best qualities, second only to how he treats Taylor. I am very excited to call him my brother.',
  },
  {
    name: 'Nathan Scheer',
    role: 'Groomsman',
    photo: new URL('../assets/nathan-scheer.jpg', import.meta.url).href,
    photoPosition: 'center center',
    bio: 'My name is Nathan, and I lived with AJ for two years at college. We would bond over Qdoba quesadillas while watching Jeopardy and Bob\'s Burgers nearly every day (as solid a foundation for a friendship as I\'ve ever heard). By the admission of both Taylor and AJ, I am also responsible for introducing them after I dragged AJ to a trivia night. They are some of my closest friends, and I\'ve since become a loving "uncle" to their two cats, Jorge and Angus. Taylor often reminds me that I am not allowed to have a favorite cat-nephew, even though it will always be Angus.',
  },
  {
    name: 'Matt Bacchi',
    role: 'Groomsman',
    photo: new URL('../assets/matt-bacchi.jpg', import.meta.url).href,
    photoPosition: 'center 40%',
    bio: 'I\'m Matt, one of AJ\'s best friends from childhood. AJ and I met in school in 2004 when I moved to Armonk. We immediately bonded over video games and AJ\'s incredible ability to make me laugh at any given moment. We have an incredible friendship that has spanned over 2 decades, even while we live in separate countries. I remember when AJ first started mentioning Taylor, and how it was clear from very early on that this was something serious. I cherish every moment my wife and I get to spend with the two of them. It\'s incredible to see AJ has finally found someone to outwit him.',
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