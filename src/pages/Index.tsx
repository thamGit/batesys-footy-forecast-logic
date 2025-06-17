
import { useState } from 'react';
import Header from '@/components/Header';
import PredictionDashboard from '@/components/PredictionDashboard';
import MatchHistory from '@/components/MatchHistory';
import DeveloperModels from '@/components/DeveloperModels';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Index = () => {
  const [activeTab, setActiveTab] = useState('predictions');

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-blue-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Batesy's footy predictor
          </h1>
          <p className="text-lg text-gray-600">
            AI-Powered AFL & NRL Predictions & Analytics
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="predictions">Live Predictions</TabsTrigger>
            <TabsTrigger value="history">Match History</TabsTrigger>
            <TabsTrigger value="models">Developer Models</TabsTrigger>
          </TabsList>

          <TabsContent value="predictions">
            <PredictionDashboard />
          </TabsContent>

          <TabsContent value="history">
            <MatchHistory />
          </TabsContent>

          <TabsContent value="models">
            <DeveloperModels />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
