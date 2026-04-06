const team = [
  {
    name: "Mina Okafor",
    role: "Lead Nature Curator",
    img: "/assets/images/team1.jpg",
    bio: "Passionate about discovering and presenting the world’s most breathtaking natural wonders in ways that inspire curiosity and preservation.",
  },
  {
    name: "Amina Bello",
    role: "Ecosystem Research Curator",
    img: "/assets/images/team2.jpg",
    bio: "Explores diverse ecosystems and curates rich, insightful content that highlights the beauty and importance of the natural world.",
  },
  {
    name: "Daniel Mensah",
    role: "Visual Storytelling Curator",
    img: "/assets/images/team3.jpg",
    bio: "Transforms natural landscapes into compelling visual narratives that connect audiences to the planet’s hidden wonders.",
  },
];

function TeamSection() {
  return (
    <section className="team section">
      <div className="container">
        <p className="section__eyebrow">The People</p>
        <h2 className="section__title">Meet the Curators</h2>
        <div className="team__grid">
          {team.map((m, i) => (
            <div key={i} className="team__card">
              <div className="team__card-img">
                <img src={m.img} alt={m.name} loading="lazy" />
              </div>
              <div className="team__card-body">
                <h3>{m.name}</h3>
                <p className="team__role">{m.role}</p>
                <p className="team__bio">{m.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
