
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Clock, TrendingUp } from 'lucide-react';

interface Match {
  id: string;
  homeTeam: string;
  awayTeam: string;
  league: string;
  kickoff: string;
  prediction: string;
  confidence: number;
  homeOdds: number;
  awayOdds: number;
  drawOdds: number;
  developerModel: string;
}

interface PredictionCardProps {
  match: Match;
}

const PredictionCard = ({ match }: PredictionCardProps) => {
  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 80) return 'text-green-600';
    if (confidence >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getConfidenceBadge = (confidence: number) => {
    if (confidence >= 80) return 'default';
    if (confidence >= 60) return 'secondary';
    return 'destructive';
  };

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">
            {match.homeTeam} vs {match.awayTeam}
          </CardTitle>
          <Badge variant={getConfidenceBadge(match.confidence)}>
            {match.confidence}% confident
          </Badge>
        </div>
        <div className="flex items-center space-x-4 text-sm text-gray-600">
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{match.kickoff}</span>
          </div>
          <Badge variant="outline">{match.league}</Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Prediction */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="font-medium">AI Prediction</span>
            <div className="flex items-center space-x-1">
              <TrendingUp className="h-4 w-4 text-blue-600" />
              <span className="text-sm text-blue-600">{match.developerModel}</span>
            </div>
          </div>
          <div className="text-lg font-bold text-center py-2">
            {match.prediction}
          </div>
          <Progress 
            value={match.confidence} 
            className="mt-2"
          />
        </div>

        {/* Odds Comparison */}
        <div className="grid grid-cols-3 gap-2 text-sm">
          <div className="text-center p-2 bg-blue-50 rounded">
            <div className="font-medium">{match.homeTeam}</div>
            <div className="text-blue-600 font-bold">{match.homeOdds.toFixed(2)}</div>
          </div>
          <div className="text-center p-2 bg-gray-50 rounded">
            <div className="font-medium">Draw</div>
            <div className="text-gray-600 font-bold">{match.drawOdds.toFixed(2)}</div>
          </div>
          <div className="text-center p-2 bg-red-50 rounded">
            <div className="font-medium">{match.awayTeam}</div>
            <div className="text-red-600 font-bold">{match.awayOdds.toFixed(2)}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PredictionCard;
