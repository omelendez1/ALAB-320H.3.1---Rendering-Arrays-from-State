export default function Score({ score }) {
  return (
    <li>
      <strong>Date:</strong> {score.date} — <strong>Score:</strong> {score.score}
    </li>
  );
}