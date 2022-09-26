import { useParams } from 'react-router-dom';
import './Main.css';

export default function Main() {
  const { r, g, b } = useParams();
  return (
    <main style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}>
      <p>rgb({r}, {g}, {b})</p>
    </main>
  );
}