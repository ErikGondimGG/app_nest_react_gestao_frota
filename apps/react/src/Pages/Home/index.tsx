import { InteractiveGridPattern } from '@/Components/magicui/interactive-grid-pattern';
import Login from './components/login'; // Ensure the case matches the actual file name

function Home() {
  return (
    <InteractiveGridPattern>
      <Login />
    </InteractiveGridPattern>
  );
}

export default Home;
