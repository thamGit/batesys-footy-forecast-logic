
// Mock data for AFL predictions and historical matches

export const mockMatches = [
  {
    id: '1',
    homeTeam: 'Collingwood',
    awayTeam: 'Carlton',
    league: 'AFL',
    kickoff: '7:50 PM AEST',
    prediction: 'Collingwood Win',
    confidence: 78,
    homeOdds: 1.85,
    awayOdds: 4.20,
    drawOdds: 15.00,
    developerModel: 'Batesy AI v2.1'
  },
  {
    id: '2',
    homeTeam: 'Richmond',
    awayTeam: 'Essendon',
    league: 'AFL',
    kickoff: '2:10 PM AEST',
    prediction: 'Richmond Win',
    confidence: 65,
    homeOdds: 2.10,
    awayOdds: 3.20,
    drawOdds: 18.00,
    developerModel: 'Statistical Model Pro'
  },
  {
    id: '3',
    homeTeam: 'Melbourne',
    awayTeam: 'Geelong',
    league: 'AFL',
    kickoff: '1:45 PM AEST',
    prediction: 'Melbourne Win',
    confidence: 82,
    homeOdds: 2.40,
    awayOdds: 2.80,
    drawOdds: 20.00,
    developerModel: 'Neural Network v1.5'
  },
  {
    id: '4',
    homeTeam: 'West Coast Eagles',
    awayTeam: 'Fremantle',
    league: 'AFL',
    kickoff: '6:10 PM AWST',
    prediction: 'West Coast Eagles Win',
    confidence: 75,
    homeOdds: 1.70,
    awayOdds: 4.80,
    drawOdds: 25.00,
    developerModel: 'Hybrid Analytics'
  },
  {
    id: '5',
    homeTeam: 'Port Adelaide',
    awayTeam: 'Adelaide',
    league: 'AFL',
    kickoff: '7:25 PM ACST',
    prediction: 'Port Adelaide Win',
    confidence: 88,
    homeOdds: 1.55,
    awayOdds: 5.20,
    drawOdds: 22.00,
    developerModel: 'AFL Specialist'
  },
  {
    id: '6',
    homeTeam: 'Brisbane Lions',
    awayTeam: 'Gold Coast',
    league: 'AFL',
    kickoff: '4:35 PM AEST',
    prediction: 'Brisbane Lions Win',
    confidence: 91,
    homeOdds: 1.40,
    awayOdds: 6.50,
    drawOdds: 28.00,
    developerModel: 'AFL Specialist'
  }
];

export const mockHistoricalMatches = [
  {
    id: 'h1',
    homeTeam: 'Sydney',
    awayTeam: 'GWS Giants',
    homeScore: 98,
    awayScore: 76,
    league: 'AFL',
    date: '2024-01-15',
    prediction: 'Sydney Win',
    predictionCorrect: true,
    confidence: 72,
    developerModel: 'Batesy AI v2.1'
  },
  {
    id: 'h2',
    homeTeam: 'North Melbourne',
    awayTeam: 'Western Bulldogs',
    homeScore: 84,
    awayScore: 89,
    league: 'AFL',
    date: '2024-01-14',
    prediction: 'North Melbourne Win',
    predictionCorrect: false,
    confidence: 68,
    developerModel: 'Statistical Model Pro'
  },
  {
    id: 'h3',
    homeTeam: 'Hawthorn',
    awayTeam: 'St Kilda',
    homeScore: 67,
    awayScore: 102,
    league: 'AFL',
    date: '2024-01-13',
    prediction: 'Hawthorn Win',
    predictionCorrect: false,
    confidence: 55,
    developerModel: 'Neural Network v1.5'
  },
  {
    id: 'h4',
    homeTeam: 'Carlton',
    awayTeam: 'Collingwood',
    homeScore: 112,
    awayScore: 95,
    league: 'AFL',
    date: '2024-01-12',
    prediction: 'Carlton Win',
    predictionCorrect: true,
    confidence: 79,
    developerModel: 'Hybrid Analytics'
  },
  {
    id: 'h5',
    homeTeam: 'Richmond',
    awayTeam: 'Melbourne',
    homeScore: 88,
    awayScore: 77,
    league: 'AFL',
    date: '2024-01-11',
    prediction: 'Richmond Win',
    predictionCorrect: true,
    confidence: 81,
    developerModel: 'AFL Specialist'
  }
];

export const mockDeveloperModels = [
  {
    id: 'model1',
    name: 'Batesy AI v2.1',
    developer: 'Batesy',
    type: 'Machine Learning',
    description: 'Advanced neural network combining team form, player stats, and historical head-to-head data with weather conditions and injury reports specific to AFL.',
    accuracy: 76.5,
    totalPredictions: 324,
    features: ['Player Stats', 'Team Form', 'Weather Data', 'Injury Reports', 'Historical H2H', 'Ground Advantage'],
    lastUpdated: '2024-01-16'
  },
  {
    id: 'model2',
    name: 'Statistical Model Pro',
    developer: 'AFL Analytics',
    type: 'Statistical',
    description: 'Pure statistical approach using regression analysis on 5+ years of AFL match data, focusing on scoring patterns and percentage analysis.',
    accuracy: 73.2,
    totalPredictions: 289,
    features: ['Scoring Analysis', 'Home Ground Advantage', 'Ladder Position', 'Recent Form', 'Percentage'],
    lastUpdated: '2024-01-15'
  },
  {
    id: 'model3',
    name: 'Neural Network v1.5',
    developer: 'AI Footy',
    type: 'Machine Learning',
    description: 'Deep learning model trained on AFL data, specializing in upset predictions and identifying when underdogs might cause surprises.',
    accuracy: 71.8,
    totalPredictions: 412,
    features: ['Deep Learning', 'Upset Detection', 'Market Odds', 'Team Psychology', 'Interstate Travel'],
    lastUpdated: '2024-01-14'
  },
  {
    id: 'model4',
    name: 'Hybrid Analytics',
    developer: 'TechFooty',
    type: 'Hybrid',
    description: 'Combines machine learning with expert analysis, incorporating tactical setups and coach influence in AFL matches.',
    accuracy: 74.9,
    totalPredictions: 267,
    features: ['Tactical Analysis', 'Coach Impact', 'Formation Data', 'Player Chemistry', 'Ground Conditions'],
    lastUpdated: '2024-01-13'
  },
  {
    id: 'model5',
    name: 'AFL Specialist',
    developer: 'AFL Data Pro',
    type: 'Statistical',
    description: 'Specialized model for AFL, accounting for unique aspects like ground dimensions, weather impact, and travel factors.',
    accuracy: 79.3,
    totalPredictions: 156,
    features: ['Ground Dimensions', 'Weather Analysis', 'Travel Fatigue', 'Finals Experience', 'Derby Factors'],
    lastUpdated: '2024-01-12'
  },
  {
    id: 'model6',
    name: 'Tham Predictor v3.0',
    developer: 'Tham',
    type: 'Machine Learning',
    description: 'Advanced ensemble model combining multiple prediction algorithms with real-time team dynamics and player form analysis for AFL.',
    accuracy: 77.8,
    totalPredictions: 201,
    features: ['Ensemble Learning', 'Real-time Analysis', 'Player Form', 'Team Dynamics', 'Quarter Predictions', 'Weather Impact'],
    lastUpdated: '2024-01-17'
  }
];
