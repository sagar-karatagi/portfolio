const About = () => {
  return (
    <section className="min-h-screen px-6 py-10 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-blue-600">About Me</h2>

      <p className="text-lg text-gray-700 mb-4">
        Hello! I'm <strong>Sagar Karatagi</strong>, a passionate Fullstack Developer focused on building high-quality web applications using <strong>Java Spring Boot</strong> on the backend and <strong>React</strong> on the frontend. I'm deeply interested in modern development, DevOps practices, and scalable system design.
      </p>

      <p className="text-gray-600 mb-4">
        Currently, I'm pursuing my B.E. in Computer Engineering at <strong>PCCOE Pune</strong>, with a CGPA of <strong>8.79</strong>. I'm the Vice President at <strong>GeeksforGeeks PCCOE</strong> and an active open-source contributor through GDSC.
      </p>

      <h3 className="text-2xl font-semibold mt-8 text-blue-500">Technical Snapshot:</h3>
      <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
        {[
          "Backend: Java, Spring Boot, JPA, Hibernate",
          "Frontend: React, Tailwind CSS, Framer Motion",
          "Database: PostgreSQL, MySQL",
          "DevOps: Docker, GitHub Actions (Learning)",
          "Tools: Postman, Git, IntelliJ, VS Code",
        ].map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <p className="text-gray-600 mt-6">
        I love building scalable products and exploring cloud and DevOps technologies. Outside of coding, I'm enthusiastic about teaching, community-building, and contributing to open-source.
      </p>
    </section>
  );
};

export default About;
