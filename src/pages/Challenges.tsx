import React from 'react';
import { Trophy, Users, Clock } from 'lucide-react';

const Challenges: React.FC = () => {
  const challenges = [
    { id: 1, title: 'Most Productive Week', participants: 15, timeLeft: '3 days' },
    { id: 2, title: 'Task Completion Sprint', participants: 8, timeLeft: '1 week' },
    { id: 3, title: 'Focus Time Champion', participants: 22, timeLeft: '2 days' },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Challenges</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {challenges.map(challenge => (
          <div key={challenge.id} className="bg-white rounded-lg shadow-md p-6 space-y-4">
            <div className="flex items-center justify-between">
              <Trophy className="h-8 w-8 text-yellow-500" />
              <span className="text-sm font-medium text-gray-500">{challenge.timeLeft} left</span>
            </div>
            <h2 className="text-xl font-semibold text-gray-800">{challenge.title}</h2>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <Users className="h-4 w-4" />
                <span>{challenge.participants} participants</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{challenge.timeLeft}</span>
              </div>
            </div>
            <button className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-150 ease-in-out">
              Join Challenge
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Challenges;