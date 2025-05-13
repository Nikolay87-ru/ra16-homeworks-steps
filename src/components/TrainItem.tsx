import type { FC } from 'react';
import type { TrainSession } from '../types/TrainSession';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';

interface TrainItemProps {
  train: TrainSession;
}

export const TrainItem: FC<TrainItemProps> = ({ train }) => {
  return (
    <div className="train-item">
      <span>{train.date}</span>
      <span>{train.distance} км</span>
      <span className="train-controls">
        <AiFillEdit />
        <AiFillDelete />
      </span>
    </div>
  );
};
