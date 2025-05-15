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
  const formatDate = (dateString: string) => {
    if (!dateString) return "Нет даты";
    
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return "Выберите дату!";
      
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const year = date.getFullYear();
      
      return `${day}.${month}.${year}`;
    } catch {
      return "Выберите дату!";
    }
  };

  return (
    <div className="container">
      <div className="container-titles">
        <span>Дата (ДД.ММ.ГГ)</span>
        <span>Пройдено км</span>
        <span>Действия</span>
      </div>
      <div className="train-list">
        {trainList.map((train) => (
          <TrainItem 
            key={train.id} 
            train={{ ...train, date: formatDate(train.date) }} 
            updateTrain={updateTrain}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default DisplayTrainData;
