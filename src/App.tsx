import type { FC } from 'react';
import { useState } from 'react';
import AddTrainingForm from './components/AddTrainingForm';
import DisplayTrainData from './components/DisplayTrainData';
import type { TrainSession } from './types/TrainSession';
import './index.css';

const App: FC = () => {
  const [trainList, setTrainList] = useState<TrainSession[]>([]);

  const addTrainData = (newTrain: TrainSession) => {
    setTrainList((prevList) => {
      const sameDateIndex = prevList.findIndex((item) => item.date === newTrain.date);

      if (sameDateIndex >= 0) {
        const updatedList = [...prevList];
        updatedList[sameDateIndex] = {
          ...updatedList[sameDateIndex],
          distance: updatedList[sameDateIndex].distance + newTrain.distance,
        };
        return updatedList;
      } else {
        return [...prevList, newTrain];
      }
    });
  };

  const updateTrain = (newTrain: TrainSession) => {
    setTrainList((prevList) => {
      const sameDateIndex = prevList.findIndex(
        (item) => item.date === newTrain.date && item.id !== newTrain.id,
      );

      if (sameDateIndex >= 0) {
        const updatedList = prevList.filter((item) => item.id !== newTrain.id);
        updatedList[sameDateIndex] = {
          ...updatedList[sameDateIndex],
          distance: updatedList[sameDateIndex].distance + newTrain.distance,
        };
        return updatedList;
      } else {
        return prevList.map((train) => (train.id === newTrain.id ? newTrain : train));
      }
    });
  };

  const deleteTrain = (id: number) => {
    setTrainList(trainList.filter((train) => train.id !== id));
  };

  return (
    <div className="app">
      <div className="wrap">
        <AddTrainingForm addTrainData={addTrainData} />
        <DisplayTrainData trainList={trainList} updateTrain={updateTrain} onDelete={deleteTrain} />
      </div>
    </div>
  );
};

export default App;
