import type { ChangeEvent, FC, FormEvent } from 'react';
import { useState } from 'react';
import type { TrainSession } from '../types/TrainSession';
import '../index.css';

interface EditTrainingFormProps {
  data: TrainSession;
  updateTrain: (newTrain: TrainSession) => void;
  handleToogleEdit: () => void;
}

const EditTrainingForm: FC<EditTrainingFormProps> = ({ data, updateTrain, handleToogleEdit }) => {
  const [editTrainData, setEditTrainData] = useState<TrainSession>(data);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(`Handle Change: `, e.target);

    const { name, value } = e.target;
    setEditTrainData({
      ...editTrainData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { date, distance } = editTrainData;

    if (date && distance) {
      updateTrain(editTrainData);
      handleToogleEdit();
    }
  };

  console.log(`edit Data: `, editTrainData);

  return (
    <form className="train-form" onSubmit={handleSubmit}>
      <div className="date-box">
        <input
          className="input-date"
          name="date"
          type="date"
          id="date"
          onChange={handleChange}
          value={editTrainData.date || ''}
        />
      </div>
      <div className="distance-box">
        <input
          className="input-distance"
          name="distance"
          type="text"
          id="distance"
          placeholder="0 км"
          onChange={handleChange}
          value={editTrainData.distance || ''}
        />
      </div>
      <button type="submit" className="submit-btn">
        ИЗМЕНИТЬ
      </button>
    </form>
  );
};

export default EditTrainingForm;
