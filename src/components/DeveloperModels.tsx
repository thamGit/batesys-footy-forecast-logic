
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { TrendingUp, Code, Brain, BarChart3 } from 'lucide-react';
import { mockDeveloperModels } from '@/data/mockData';

const DeveloperModels = () => {
  const getModelIcon = (type: string) => {
    switch (type) {
      case 'Statistical': return <BarChart3 className="h-5 w-5" />;
      case 'Machine Learning': return <Brain className="h-5 w-5" />;
      case 'Hybrid': return <TrendingUp className="h-5 w-5" />;
      default: return <Code className="h-5 w-5" />;
    }
  };

  const getPerformanceBadge = (accuracy: number) => {
    if (accuracy >= 75) return 'default';
    if (accuracy >= 65) return 'secondary';
    return 'destructive';
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Developer Prediction Models</h2>
        <p className="text-gray-600">
          Different approaches to football prediction using various algorithms and data sources
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {mockDeveloperModels.map((model) => (
          <Card key={model.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                    {getModelIcon(model.type)}
                  </div>
                  <div>
                    <CardTitle className="text-lg">{model.name}</CardTitle>
                    <p className="text-sm text-gray-600">by {model.developer}</p>
                  </div>
                </div>
                <Badge variant={getPerformanceBadge(model.accuracy)}>
                  {model.accuracy}%
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="text-gray-700">{model.description}</p>

              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Accuracy</span>
                    <span>{model.accuracy}%</span>
                  </div>
                  <Progress value={model.accuracy} />
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Predictions Made</span>
                    <div className="font-semibold">{model.totalPredictions}</div>
                  </div>
                  <div>
                    <span className="text-gray-600">Model Type</span>
                    <div className="font-semibold">{model.type}</div>
                  </div>
                </div>

                <div>
                  <span className="text-gray-600 text-sm">Key Features</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {model.features.map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t">
                  <div className="text-sm text-gray-600">
                    Last updated: {model.lastUpdated}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DeveloperModels;
