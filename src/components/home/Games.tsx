
import GameCard from "./GameCard";

const games = ["PUBG", "Free Fire", "Fortnite", "Apex Legends"];

const Games = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-esports-accent">
            SUPPORTED GAMES
          </span>
        </h2>
        <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
          Plan strategies and organize tournaments for today's most popular battle royale games.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {games.map((game) => (
            <GameCard key={game} name={game} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Games;
