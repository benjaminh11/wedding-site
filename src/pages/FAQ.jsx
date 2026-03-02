import './FAQ.css';

const faqs = [
  {
    question: "What's the dress code?",
    answer: "The dress code is black tie optional. That's full-length dresses or gowns, suits with ties, and tuxedos. Feel free to go all out; this is the perfect opportunity to wear that outfit you've been saving for a special occasion.",
  },
  {
    question: "Is there parking?",
    answer: "For the welcome party, there is parking at the (TBD). For the wedding, there is ample parking around the library, including both street parking and parking garages. For the goodbye brunch, we recommend you park in the restaurant parking lot located at the top of the street.",
  },
  {
    question: "Are kids invited?",
    answer: "Unfortunately, this event is for adults only.",
  },
  {
    question: "Can I take pictures?",
    answer: "We have hired an incredibly talented team of photographers to capture memories of our special day. We invite you to be present with us and focus on enjoying the moment, and to feel free to take as many pictures as you like once the ceremony is over.",
  },
  {
    question: "Do you have a registry?",
    answer: "We do! Please do not feel pressured to get us a gift, as your presence is the most important thing to us. We have a registry through the Knot which you can find here if you would like to give a present.",
    link: { text: "View Our Registry", href: "/registry" },
  },
];

function FAQ() {
  return (
    <div className="faq">

      <section className="faq-hero">
        <div className="faq-hero-overlay">
          <h1>FAQs</h1>
          <p>Everything you need to know</p>
        </div>
      </section>

      <div className="faq-list container">
        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>
            <h2>{faq.question}</h2>
            <p>{faq.answer}</p>
            {faq.link && (
              <a href={faq.link.href} className="faq-link">{faq.link.text}</a>
            )}
          </div>
        ))}
      </div>

    </div>
  );
}

export default FAQ;