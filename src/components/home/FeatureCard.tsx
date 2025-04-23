
import { Card, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <Card className="bg-background/50 backdrop-blur-sm border border-border/50 overflow-hidden">
      <CardContent className="p-6">
        <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
          <div className="h-6 w-6 text-primary">{icon}</div>
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-foreground/70">{description}</p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
