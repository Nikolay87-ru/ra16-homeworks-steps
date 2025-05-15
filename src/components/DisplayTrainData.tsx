import type { FC } from 'react';
import type { TrainSession } from '../types/TrainSession';
import { TrainItem } from '../components/TrainItem';

interface DisplayTrainDataProps {
  trainList: TrainSession[];
  updateTrain: (newTrain: TrainSession) => void;
  onDelete: (id: number) => void;
}

const DisplayTrainData: FC<DisplayTrainDataProps> = ({ 
  trainList, 
  updateTrain,
  onDelete 
}) => {
  return (
    <div className="container">
      <div className="container-titles">
        <span>Дата (ГГ.ММ.ДД)</span>
        <span>Пройдено км</span>
        <span>Действия</span>
      </div>
      <div className="train-list">
        {trainList.map((train) => (
          <TrainItem 
            key={train.id} 
            train={train} 
            updateTrain={updateTrain}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default DisplayTrainData;
