
// Mock data for football predictions and historical matches

export const mockMatches = [
  {
    id: '1',
    homeTeam: 'Manchester City',
    awayTeam: 'Arsenal',
    league: 'Premier League',
    kickoff: '15:00 GMT',
    prediction: 'Manchester City Win',
    confidence: 78,
    homeOdds: 1.85,
    awayOdds: 4.20,
    drawOdds: 3.40,
    developerModel: 'Batesy AI v2.1'
  },
  {
    id: '2',
    homeTeam: 'Liverpool',
    awayTeam: 'Chelsea',
    league: 'Premier League',
    kickoff: '17:30 GMT',
    prediction: 'Draw',
    confidence: 65,
    homeOdds: 2.10,
    awayOdds: 3.20,
    drawOdds: 3.10,
    developerModel: 'Statistical Model Pro'
  },
  {
    id: '3',
    homeTeam: 'Barcelona',
    awayTeam: 'Real Madrid',
    league: 'La Liga',
    kickoff: '20:00 CET',
    prediction: 'Barcelona Win',
    confidence: 82,
    homeOdds: 2.40,
    awayOdds: 2.80,
    drawOdds: 3.20,
    developerModel: 'Neural Network v1.5'
  },
  {
    id: '4',
    homeTeam: 'Bayern Munich',
    awayTeam: 'Borussia Dortmund',
    league: 'Bundesliga',
    kickoff: '18:30 CET',
    prediction: 'Bayern Munich Win',
    confidence: 75,
    homeOdds: 1.70,
    awayOdds: 4.80,
    drawOdds: 3.60,
    developerModel: 'Hybrid Analytics'
  },
  {
    id: '5',
    homeTeam: 'Leicester City',
    awayTeam: 'Leeds United',
    league: 'Championship',
    kickoff: '15:00 GMT',
    prediction: 'Leicester City Win',
    confidence: 88,
    homeOdds: 1.55,
    awayOdds: 5.20,
    drawOdds: 4.10,
    developerModel: 'Championship Specialist'
  }
];

export const mockHistoricalMatches = [
  {
    id: 'h1',
    homeTeam: 'Manchester United',
    awayTeam: 'Tottenham',
    homeScore: 2,
    awayScore: 1,
    league: 'Premier League',
    date: '2024-01-15',
    prediction: 'Manchester United Win',
    predictionCorrect: true,
    confidence: 72,
    developerModel: 'Batesy AI v2.1'
  },
  {
    id: 'h2',
    homeTeam: 'Brighton',
    awayTeam: 'West Ham',
    homeScore: 1,
    awayScore: 1,
    league: 'Premier League',
    date: '2024-01-14',
    prediction: 'Brighton Win',
    predictionCorrect: false,
    confidence: 68,
    developerModel: 'Statistical Model Pro'
  },
  {
    id: 'h3',
    homeTeam: 'Newcastle',
    awayTeam: 'Aston Villa',
    homeScore: 0,
    awayScore: 2,
    league: 'Premier League',
    date: '2024-01-13',
    prediction: 'Draw',
    predictionCorrect: false,
    confidence: 55,
    developerModel: 'Neural Network v1.5'
  },
  {
    id: 'h4',
    homeTeam: 'Atletico Madrid',
    awayTeam: 'Sevilla',
    homeScore: 3,
    awayScore: 1,
    league: 'La Liga',
    date: '2024-01-12',
    prediction: 'Atletico Madrid Win',
    predictionCorrect: true,
    confidence: 79,
    developerModel: 'Hybrid Analytics'
  },
  {
    id: 'h5',
    homeTeam: 'Inter Milan',
    awayTeam: 'AC Milan',
    homeScore: 1,
    awayScore: 0,
    league: 'Serie A',
    date: '2024-01-11',
    prediction: 'Inter Milan Win',
    predictionCorrect: true,
    confidence: 81,
    developerModel: 'Championship Specialist'
  }
];

export const mockDeveloperModels = [
  {
    id: 'model1',
    name: 'Batesy AI v2.1',
    developer: 'Batesy',
    type: 'Machine Learning',
    description: 'Advanced neural network combining team form, player stats, and historical head-to-head data with weather conditions and injury reports.',
    accuracy: 76.5,
    totalPredictions: 324,
    features: ['Player Stats', 'Team Form', 'Weather Data', 'Injury Reports', 'Historical H2H'],
    lastUpdated: '2024-01-16'
  },
  {
    id: 'model2',
    name: 'Statistical Model Pro',
    developer: 'DataSoccer',
    type: 'Statistical',
    description: 'Pure statistical approach using regression analysis on 5+ years of match data, focusing on goals scored/conceded patterns.',
    accuracy: 73.2,
    totalPredictions: 289,
    features: ['Goals Analysis', 'Home/Away Form', 'League Position', 'Recent Form'],
    lastUpdated: '2024-01-15'
  },
  {
    id: 'model3',
    name: 'Neural Network v1.5',
    developer: 'AI Football',
    type: 'Machine Learning',
    description: 'Deep learning model trained on European league data, specializing in upset predictions and underdog victories.',
    accuracy: 71.8,
    totalPredictions: 412,
    features: ['Deep Learning', 'Upset Detection', 'Market Odds', 'Team Psychology'],
    lastUpdated: '2024-01-14'
  },
  {
    id: 'model4',
    name: 'Hybrid Analytics',
    developer: 'TechFooty',
    type: 'Hybrid',
    description: 'Combines machine learning with expert analysis, incorporating tactical formations and manager influence.',
    accuracy: 74.9,
    totalPredictions: 267,
    features: ['Tactical Analysis', 'Manager Impact', 'Formation Data', 'Player Chemistry'],
    lastUpdated: '2024-01-13'
  },
  {
    id: 'model5',
    name: 'Championship Specialist',
    developer: 'EFL Analytics',
    type: 'Statistical',
    description: 'Specialized model for English Championship, accounting for the league\'s unpredictability and travel fatigue.',
    accuracy: 69.3,
    totalPredictions: 156,
    features: ['Championship Focus', 'Travel Analysis', 'Squad Rotation', 'Fatigue Modeling'],
    lastUpdated: '2024-01-12'
  }
];
