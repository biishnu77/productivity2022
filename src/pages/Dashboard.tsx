import React from 'react';
import { BarChart, Clock, CheckCircle } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          icon={<Clock className="h-8 w-8 text-blue-500" />}
          title="Total Time"
          value="32h 45m"
          description="Time spent this week"
        />
        <StatCard
          icon={<CheckCircle className="h-8 w-8 text-green-500" />}
          title="Tasks Completed"
          value="18/25"
          description="Tasks completed this week"
        />
        <StatCard
          icon={<BarChart className="h-8 w-8 text-purple-500" />}
          title="Productivity Score"
          value="85%"
          description="Your productivity this week"
        />
      </div>
      {/* Add more dashboard components here */}
    </div>
  );
};

const StatCard: React.FC<{ icon: React.ReactNode; title: string; value: string; description: string }> = ({
  icon,
  title,
  value,
  description,
}) => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-4">
        {icon}
        <div>
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
      <span className="text-2xl font-bold text-gray-800">{value}</span>
    </div>
  </div>
);

export default Dashboard;