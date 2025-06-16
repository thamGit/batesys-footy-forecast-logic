
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import PredictionCard from '@/components/PredictionCard';
import { mockMatches } from '@/data/mockData';

const PredictionDashboard = () => {
  const [selectedLeague, setSelectedLeague] = useState('Premier League');
  
  const leagues = ['Premier League', 'Championship', 'La Liga', 'Bundesliga'];
  
  const filteredMatches = mockMatches.filter(match => match.league === selectedLeague);

  return (
    <div className="space-y-6">
      {/* League Selector */}
      <div className="flex flex-wrap gap-2">
        {leagues.map((league) => (
          <Badge
            key={league}
            variant={selectedLeague === league ? "default" : "secondary"}
            className="cursor-pointer px-4 py-2"
            onClick={() => setSelectedLeague(league)}
          >
            {league}
          </Badge>
        ))}
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Model Accuracy</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">73.2%</div>
            <Progress value={73.2} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-1">
              Average across all models
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Predictions Today</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{filteredMatches.length}</div>
            <p className="text-xs text-muted-foreground">
              Matches with AI predictions
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">High Confidence</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {filteredMatches.filter(m => m.confidence > 80).length}
            </div>
            <p className="text-xs text-muted-foreground">
              Predictions above 80% confidence
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Match Predictions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredMatches.map((match) => (
          <PredictionCard key={match.id} match={match} />
        ))}
      </div>
    </div>
  );
};

export default PredictionDashboard;
