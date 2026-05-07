import './WeddingParty.css';

const weddingParty = [
  {
    name: 'Erin Mena',
    role: 'Co-Maid of Honor',
    photo: new URL('../assets/erin-mena.jpg', import.meta.url).href,
    photoPosition: 'center 40%',
    photoScale: '1',
    photoHeight: '300px',
    bio: 'I met Taylor during our first day of college. However, it may be more accurate to say that Taylor met me, when she walked through the door adjoining their dorm rooms and introduced herself. Quickly we became roommates, but more importantly, we became very close friends. Taylor introduced AJ to me as her "friend", but it soon became clear that there was a significant connection between them, as Taylor and AJ shared similar interests and enjoyed each other\'s company. I am honored to be a co-maid of honor and so excited to celebrate Taylor and AJ.',
  },
  {
    name: 'Lauren Marley',
    role: 'Co-Maid of Honor',
    photo: new URL('../assets/lauren-marley.jpg', import.meta.url).href,
    photoPosition: 'center 20%',
    photoScale: '1',
    photoHeight: '300px',
    bio: 'I first met Taylor at Elon University. I introduced her to Indian food and Taylor introduced me to Drag Race. It was the beginning of a beautiful friendship! Taylor became an unofficial member of our sorority, generously attending many sorority leadership dinners all over North Carolina. We have been there for each other through thick and thin, and Taylor is such a loving and supportive person and friend. It has been a pleasure to see Taylor and AJ start dating and fall in love, and I am so excited for this next chapter in your life! Congratulations and I cannot wait to celebrate with you!',
  },
  {
    name: 'Jenna Stephens',
    role: 'Bridesmaid',
    photo: new URL('../assets/jenna-stephens.jpg', import.meta.url).href,
    photoPosition: 'center center',
    photoScale: '1',
    photoHeight: '300px',
    bio: 'My name is Jenna and I am Taylor\'s future sister-in-law. I am married to AJ\'s brother, Jordan. I first met Taylor at AJ and Taylor\'s graduation from Elon. They were just friends at the time - but it was pretty clear that AJ was already in love. I remember thinking that she could one day be my sister-in-law. And here we are!',
  },
  {
    name: 'Nic Cicchetti',
    role: 'Bridesman',
    photo: new URL('../assets/nic-cicchetti.jpg', import.meta.url).href,
    photoPosition: 'center center',
    photoScale: '1',
    photoHeight: '300px',
    bio: 'Taylor and Nic met during a high school production of Beauty and the Beast. They became fast friends and loved spending their time holding court while eating fine meats and cheeses. They also worked together as counselors at Taylor\'s childhood sleepaway camp in the Catskills, where Nic taught theatrical lighting and Taylor taught leatherworking. While they live on opposite sides of the country, they still see each other every few years, and always pick up exactly where they left off. Nic is very honored and excited to support Taylor and AJ on this special day.',
  },
  {
    name: 'Jordan Brodsky',
    role: 'Best Man',
    photo: new URL('../assets/jordan-brodsky.jpg', import.meta.url).href,
    photoPosition: 'center 30%',
    photoScale: '1',
    photoHeight: '400px',
    bio: 'I\'m Jordan, AJ\'s older brother. My parents told me I was going to be a big brother at a TGI Fridays in Tarrytown. Once I stopped crying and devouring my chicken tenders, I couldn\'t wait for the day I got to meet him. I first met AJ in June of 1996 when he moved into my house rather abruptly and without warning. He didn\'t say or do a whole lot, but he grew on me pretty quickly. I have fond memories of our time growing up together and even with the almost 9 year age gap, we still managed to be friends. I had always wanted a younger brother and I\'m lucky that I got stuck with AJ. I\'m so happy that he found the love of his life and am excited to celebrate the happy couple in September.',
  },
  {
    name: 'Ben Hernowitz',
    role: 'Groomsman',
    photo: new URL('../assets/ben-hernowitz.JPG', import.meta.url).href,
    photoPosition: 'center 30%',
    photoScale: '1',
    photoHeight: '300px',
    bio: 'My name is Ben and I am Taylor\'s younger brother and only sibling. I am so happy to welcome AJ into the family. His sense of humor is one of his best qualities, second only to how he treats Taylor. I am very excited to call him my brother.',
  },
  {
    name: 'Nathan Scheer',
    role: 'Groomsman',
    photo: new URL('../assets/nathan-scheer.jpg', import.meta.url).href,
    photoPosition: 'center center',
    photoScale: '1',
    photoHeight: '300px',
    bio: 'My name is Nathan, and I lived with AJ for two years at college. We would bond over Qdoba quesadillas while watching Jeopardy and Bob\'s Burgers nearly every day (as solid a foundation for a friendship as I\'ve ever heard). By the admission of both Taylor and AJ, I am also responsible for introducing them after I dragged AJ to a trivia night. They are some of my closest friends, and I\'ve since become a loving "uncle" to their two cats, Jorge and Angus. Taylor often reminds me that I am not allowed to have a favorite cat-nephew, even though it will always be Angus.',
  },
  {
    name: 'Matt Bacchi',
    role: 'Groomsman',
    photo: new URL('../assets/matt-bacchi.jpg', import.meta.url).href,
    photoPosition: 'center 40%',
    photoScale: '1',
    photoHeight: '300px',
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
            <div className="member-photo" style={{ height: member.photoHeight || '300px' }}>
              {member.photo ? (
                <img
                  src={member.photo}
                  alt={member.name}
                  style={{
                    objectPosition: member.photoPosition || 'center center',
                    transform: member.photoScale ? `scale(${member.photoScale})` : 'none',
                    transformOrigin: 'center center',
                    height: '100%',
                    width: '100%',
                    objectFit: 'cover',
                  }}
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