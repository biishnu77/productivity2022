import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ListTodo, Trophy, User } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Clock className="h-8 w-8" />
            <span className="text-xl font-bold">ProductivityPro</span>
          </Link>
          <div className="flex space-x-4">
            <NavLink to="/" icon={<Clock className="h-5 w-5" />} text="Dashboard" />
            <NavLink to="/tasks" icon={<ListTodo className="h-5 w-5" />} text="Tasks" />
            <NavLink to="/challenges" icon={<Trophy className="h-5 w-5" />} text="Challenges" />
            <NavLink to="/login" icon={<User className="h-5 w-5" />} text="Login" />
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink: React.FC<{ to: string; icon: React.ReactNode; text: string }> = ({ to, icon, text }) => (
  <Link to={to} className="flex items-center space-x-1 hover:text-indigo-200 transition duration-150 ease-in-out">
    {icon}
    <span>{text}</span>
  </Link>
);

export default Navbar;