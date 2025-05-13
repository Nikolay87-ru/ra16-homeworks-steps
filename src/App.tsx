import type { FC } from 'react';
import { useState } from 'react';
import AddTrainingForm from './components/AddTrainingForm';
import type { TrainSession } from './types/TrainSession';
import './index.css';

const App: FC = () => {
  const [trainList, setTrainList] = useState<TrainSession[]>([]);

  const addTrainData = (newTrainSession: TrainSession) => {
    setTrainList([...trainList, newTrainSession])
  }

console.log(`trainList: `, trainList);

  return (
    <div className="app">
      <div className="wrap">
        <AddTrainingForm 
          addTrainData={addTrainData}
        />
      </div>
    </div>
  );
};

export default App;
