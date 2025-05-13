import type { FC } from 'react';
import type { TrainSession } from '../types/TrainSession';
import { TrainItem } from '../components/TrainItem';

interface DisplayTrainDataProps {
  trainList: TrainSession[];
}

const DisplayTrainData: FC<DisplayTrainDataProps> = ({ trainList }) => {
  return (
    <div className="container">
      <div className="container-titles">
        <span>Дата (ДД.ММ.ГГ)</span>
        <span>Пройдено км</span>
        <span>Действия</span>
      </div>
      <div className="train-list">
        {trainList.map((train) => {
          return <TrainItem key={train.id} train={train}/>
        })}
      </div>
    </div>
  );
};

export default DisplayTrainData;
