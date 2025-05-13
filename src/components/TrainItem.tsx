import { useState, type FC } from 'react';
import type { TrainSession } from '../types/TrainSession';
import EditTrainingForm from './EditTrainForm';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';

interface TrainItemProps {
  train: TrainSession;
  updateTrain: (newTrain: TrainSession) => void;
  onDelete: (id: number) => void;
}

export const TrainItem: FC<TrainItemProps> = ({ train, updateTrain, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleToggleEdit = () => {
    setIsEditing(!isEditing);
  };

  if (isEditing) {
    return (
      <EditTrainingForm 
        data={train} 
        updateTrain={updateTrain} 
        handleToogleEdit={handleToggleEdit} 
      />
    );
  }

  return (
    <div className="train-item">
      <span>{train.date}</span>
      <span>{train.distance} км</span>
      <span className="train-controls">
        <AiFillEdit onClick={handleToggleEdit} className="icon" />
        <AiFillDelete onClick={() => onDelete(train.id)} className="icon" />
      </span>
    </div>
  );
};
