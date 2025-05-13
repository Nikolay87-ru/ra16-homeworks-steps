import type { FC } from 'react';
import { useState } from 'react';
import AddTrainingForm from './components/AddTrainingForm';
import DisplayTrainData from './components/DisplayTrainData';
import type { TrainSession } from './types/TrainSession';
import './index.css';

const App: FC = () => {
  const [trainList, setTrainList] = useState<TrainSession[]>([]);

  const addTrainData = (newTrainSession: TrainSession) => {
    setTrainList([...trainList, newTrainSession]);
  };

  const updateTrain = (newTrain: TrainSession) => {
    setTrainList(trainList.map((train) => 
      train.id === newTrain.id ? newTrain : train
    ));
  };

  const deleteTrain = (id: number) => {
    setTrainList(trainList.filter((train) => train.id !== id));
  };

  return (
    <div className="app">
      <div className="wrap">
        <AddTrainingForm addTrainData={addTrainData} />
        <DisplayTrainData 
          trainList={trainList} 
          updateTrain={updateTrain}
          onDelete={deleteTrain} 
        />
      </div>
    </div>
  );
};

export default App;
