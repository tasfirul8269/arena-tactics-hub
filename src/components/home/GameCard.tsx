
import { Card } from "@/components/ui/card";

interface GameCardProps {
  name: string;
}

const GameCard = ({ name }: GameCardProps) => {
  return (
    <Card className="group overflow-hidden border border-border/50">
      <div className="aspect-video bg-muted relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
          <h3 className="text-xl font-bold text-white">{name}</h3>
        </div>
        <div className="absolute inset-0 bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
    </Card>
  );
};

export default GameCard;
