import type { FC } from 'react';
import type { TrainSession } from '../types/TrainSession';

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
          return train.distance;
        })}
      </div>
    </div>
  );
};

export default DisplayTrainData;
