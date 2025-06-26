import Score from "./Score";

export default function Learner({ learner }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", margin: "1rem 0" }}>
      <h2>{learner.name}</h2>
      <p>{learner.bio}</p>
      <h3>Scores</h3>
      <ul>
        {learner.scores.map((score, index) => (
          <Score key={index} score={score} />
        ))}
      </ul>
    </div>
  );
}