import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Goals.css";

const goalsList = [
  {name:"Fitness", icon: FaDumbbell},
  {name:"Learning", icon: FaBook},
  {name:"Health", icon: FaHeart},
  {name:"Career", icon  : FaBriefcase},
  {name:"Relationships", icon:FaPeopleGroup},
  {name:"Mindfulness", icon: FaBrain},
  {name:"Sleep", icon: FaMoon},
  {name:"Nutrition", icon: FaApple},
  {name:"Finance", icon: FaWallet},
  {name:"Creativity", icon: FaStar},
];

import {
  FaDumbbell,
  FaBook,
  FaHeart,
  FaBriefcase,
  FaUsers,
  FaBrain,
  FaBed,
  FaAppleAlt,
  FaDollarSign,
  FaPaintBrush,
  FaCheck,
  FaMoon,
  FaApple,
  FaWallet,
} from "react-icons/fa";
import { FaPeopleGroup, FaStar } from "react-icons/fa6";

function Goals() {
  const [selected, setSelected] = useState([]);
  const navigate = useNavigate();

  const toggleGoal = (goal) => {
    if (selected.includes(goal)) {
      setSelected(selected.filter((g) => g !== goal));
    } else {
      setSelected([...selected, goal]);
    }
  };

  return (
    <div className="goals-layout">
      <div className="goals-card">
        <h1>What do you want to focus on?</h1>
        <p>
          Select the areas you want to build habits around. You can always change
          these later.
        </p>

        <div className="goals-grid">
          {goalsList.map((goal) => (
            <div
              key={goal.name}
              className={`goal-card ${
                selected.includes(goal.name) ? "active" : ""
              }`}
              onClick={() => toggleGoal(goal.name)}
            >
              {goal.icon && <goal.icon className="goal-icon" />}
              <span>{goal.name}</span>
            </div>
          ))}
        </div>

        <button className="continue-btn" onClick={() => navigate('/home')}>Continue →</button>
      </div>
    </div>
  );
}
export default Goals;
