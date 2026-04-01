import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Goals.css";


const goalsList = [
  "Fitness",
  "Learning",
  "Health",
  "Career",
  "Relationships",
  "Mindfulness",
  "Sleep",
  "Nutrition",
  "Finance",
  "Creativity",
];

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
              key={goal}
              className={`goal-card ${
                selected.includes(goal) ? "active" : ""
              }`}
              onClick={() => toggleGoal(goal)}
            >
              {goal}
            </div>
          ))}
        </div>

        <button className="btn btn-primary continue-btn" onClick={() => navigate('/home')}>Continue →</button>
      </div>
    </div>
  );
}
export default Goals;
