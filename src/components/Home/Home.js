import './Home.css';
import { Link } from 'react-router-dom';

export default function Home() {
  const colors = [];
  for (let i = 0; i < 12; i++) {
    let color = [];
    for (let j = 0; j < 3; j++) {
      color.push(Math.floor(Math.random() * 256));
    }
    colors.push(color);
  }
  return (
    <div className='container'>
      <main className='home-main'>
        {colors.map((color, i) => <div key={i} style={{ backgroundColor: `rgb(${colors[i][0]}, ${colors[i][1]}, ${colors[i][2]})`, width: `100%`, height: `100%` }}></div>)}
      </main>
      <Link to='/255/255/255'>
        <button>Go To Color Router</button>
      </Link>
    </div>
  );
}