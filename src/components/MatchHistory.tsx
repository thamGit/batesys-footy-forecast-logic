
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, XCircle, Calendar } from 'lucide-react';
import { mockHistoricalMatches } from '@/data/mockData';

const MatchHistory = () => {
  const [filter, setFilter] = useState('all');
  
  const filteredHistory = mockHistoricalMatches.filter(match => {
    if (filter === 'correct') return match.predictionCorrect;
    if (filter === 'incorrect') return !match.predictionCorrect;
    return true;
  });

  const correctPredictions = mockHistoricalMatches.filter(m => m.predictionCorrect).length;
  const totalPredictions = mockHistoricalMatches.length;
  const accuracy = ((correctPredictions / totalPredictions) * 100).toFixed(1);

  return (
    <div className="space-y-6">
      {/* Filter Controls */}
      <div className="flex flex-wrap gap-2">
        <Button
          variant={filter === 'all' ? 'default' : 'outline'}
          onClick={() => setFilter('all')}
        >
          All ({totalPredictions})
        </Button>
        <Button
          variant={filter === 'correct' ? 'default' : 'outline'}
          onClick={() => setFilter('correct')}
        >
          Correct ({correctPredictions})
        </Button>
        <Button
          variant={filter === 'incorrect' ? 'default' : 'outline'}
          onClick={() => setFilter('incorrect')}
        >
          Incorrect ({totalPredictions - correctPredictions})
        </Button>
      </div>

      {/* Accuracy Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Prediction Accuracy</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-green-600 mb-2">{accuracy}%</div>
          <p className="text-gray-600">
            {correctPredictions} correct out of {totalPredictions} predictions
          </p>
        </CardContent>
      </Card>

      {/* Historical Matches */}
      <div className="space-y-4">
        {filteredHistory.map((match) => (
          <Card key={match.id} className="hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-2">
                    <div className="font-semibold">
                      {match.homeTeam} {match.homeScore} - {match.awayScore} {match.awayTeam}
                    </div>
                    {match.predictionCorrect ? (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-600" />
                    )}
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{match.date}</span>
                    </div>
                    <Badge variant="outline">{match.league}</Badge>
                    <span>Model: {match.developerModel}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium mb-1">
                    Predicted: {match.prediction}
                  </div>
                  <Badge
                    variant={match.predictionCorrect ? 'default' : 'destructive'}
                  >
                    {match.confidence}% confidence
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MatchHistory;
