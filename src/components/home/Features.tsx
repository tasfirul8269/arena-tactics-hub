
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: "🏆",
    title: "Tournament Management",
    description: "Create custom tournaments with various formats, point systems, and brackets. Perfect for organizers of any size.",
  },
  {
    icon: "👥",
    title: "Team Management",
    description: "Build your roster, manage team profiles, and coordinate with your teammates all in one place.",
  },
  {
    icon: "💬",
    title: "Team Communication",
    description: "Chat with your teammates, share strategies, and coordinate your gameplay in real-time.",
  },
  {
    icon: "🗺️",
    title: "Interactive Strategy Maps",
    description: "Plan your battle strategies with interactive maps for games like PUBG and Free Fire. Mark spots and draw routes together.",
  },
  {
    icon: "📊",
    title: "Results & Statistics",
    description: "Track tournament results, team standings, and player statistics all in one comprehensive dashboard.",
  },
  {
    icon: "📱",
    title: "Mobile Compatible",
    description: "Access Arena Tactics Hub on any device with our responsive web interface (and upcoming mobile app).",
  },
];

const Features = () => {
  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-esports-accent">
            PLATFORM FEATURES
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
