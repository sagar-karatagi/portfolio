import FadeInWhenVisible from "../components/FadeInWhenVisible";

const About = () => {
  return (
    <section className="min-h-screen px-6 py-10 max-w-4xl mx-auto">
      <FadeInWhenVisible>
        <h2 className="text-3xl font-bold mb-4 text-blue-600">About Me</h2>

        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          Hello! I'm <strong>Sagar Karatagi</strong>...
        </p>
        {/* Continue rest inside FadeInWhenVisible */}
      </FadeInWhenVisible>
    </section>
  );
};
export default About;