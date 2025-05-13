import type { FC } from 'react';
import AddTrainingForm from './components/AddTrainingForm';
import './index.css';

const App: FC = () => {
  // const [count, setCount] = useState(0)

  return (
    <div className="app">
      <div className="wrap">
        <AddTrainingForm />
      </div>
    </div>
  );
};

export default App;
