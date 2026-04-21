import Layout from '../components/Layout'

import { useState } from "react";
import {
  Dumbbell,
  BookOpen,
  Heart,
  Briefcase,
  Users,
  Brain,
  Moon,
  Utensils,
  Sparkles,
  Wallet,
  Target,
  Plus
} from "lucide-react";

import "./Goalsdashb.css";

const focusOptions = [
  { name: "Fitness", icon: <Dumbbell size={16} /> },
  { name: "Learning", icon: <BookOpen size={16} /> },
  { name: "Health", icon: <Heart size={16} /> },
  { name: "Career", icon: <Briefcase size={16} /> },
  { name: "Relationships", icon: <Users size={16} /> },
  { name: "Mindfulness", icon: <Brain size={16} /> },
  { name: "Sleep", icon: <Moon size={16} /> },
  { name: "Nutrition", icon: <Utensils size={16} /> },
  { name: "Creativity", icon: <Sparkles size={16} /> },
  { name: "Finance", icon: <Wallet size={16} /> },
  { name: "Personal", icon: <Target size={16} /> },
];


function GoalsDashboard() {
  const [selected, setSelected] = useState(["Fitness", "Sleep"]);

  const toggleOption = (name) => {
    setSelected((prev) =>
      prev.includes(name)
        ? prev.filter((item) => item !== name)
        : [...prev, name]
    );
  };

  return (
    <Layout>
      <div className="goals-container">
        <h1>Goals</h1>
        <p className="subtitle">
          Set and review your long-term goals.
        </p>

        
        <div className="card">
          <h2>Your Focus Areas</h2>
          <p className="card-subtitle">
            Areas you selected during onboarding. Click to add or remove.
          </p>

          <div className="chips">
            {focusOptions.map((item) => {
              const isActive = selected.includes(item.name);

              return (
                <button
                  key={item.name}
                  className={`chip ${isActive ? "active" : ""}`}
                  onClick={() => toggleOption(item.name)}
                >
                  {item.icon}
                  {item.name}
                  {isActive && <span className="check">✓</span>}
                </button>
              );
            })}
          </div>
        </div>

        {/* Goals Header */}
        <div className="goals-header">
          <div>
            <h2>Your Goals</h2>
            <p>Track your long-term objectives</p>
          </div>

          <button className="add-btn">
            <Plus size={16} />
            Add Goal
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default GoalsDashboard
