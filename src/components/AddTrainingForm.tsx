import type { ChangeEvent, FC, FormEvent } from 'react';
import { useState } from 'react';
import type { TrainSession } from '../types/TrainSession';
import '../index.css';

interface AddTrainingFormProps {
  addTrainData: (newTrainSession: TrainSession) => void;
}

const initState = {
  date: null,
  distance: 0,
};

const AddTrainingForm: FC<AddTrainingFormProps> = ({ addTrainData }) => {
  const [newTrainData, setNewTrainData] = useState<{
    date: string | null;
    distance: number | null;
  }>(initState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(`Handle Change: `, e.target);

    const { name, value } = e.target;
    setNewTrainData({
      ...newTrainData,
      [name]: name === 'distance' ? Number(value) : value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { date, distance } = newTrainData;

    if (date && distance) {
      addTrainData({
        date,
        distance: Number(distance),
        id: Date.now(),
      });
      setNewTrainData(initState);
    }
  };

  console.log(`New Data: `, newTrainData);

  return (
    <form className="train-form" onSubmit={handleSubmit}>
      <div className="date-box">
        <label htmlFor="date" className="date-title">
          Дата (ДД.ММ.ГГ)
        </label>
        <input
          className="input-date"
          name="date"
          type="date"
          id="date"
          onChange={handleChange}
          value={newTrainData.date || ''}
        />
      </div>
      <div className="distance-box">
        <label htmlFor="distance" className="distance-title">
          Пройдено км
        </label>
        <input
          className="input-distance"
          name="distance"
          type="number"
          id="distance"
          placeholder="0 км"
          onChange={handleChange}
          value={newTrainData.distance || ''}
        />
      </div>
      <button type="submit" className="submit-btn">
        OK
      </button>
    </form>
  );
};

export default AddTrainingForm;
