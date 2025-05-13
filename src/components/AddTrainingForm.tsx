import type { ChangeEvent, FC, FormEvent } from 'react';
import { useState } from 'react';
import '../index.css';

const initState = {
  date: null,
  distance: null,
};

const AddTrainingForm: FC = () => {
  const [newTrainData, setNewTrainData] = useState<{
    date: string | null;
    distance: number | null;
  }>(initState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(`Handle Change: `, e.target);

    const { name, value } = e.target;
    setNewTrainData({
      ...newTrainData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', newTrainData);
  };

  console.log(`New Data: `, newTrainData);

  return (
    <form className="train-form" onSubmit={handleSubmit}>
      <div className="date-box">
        <label htmlFor="date" className="date-title">
          Дата(ДД.ММ.ГГ)
        </label>
        <input
          className="input-date"
          name="date"
          type="date"
          id="date"
          placeholder="ДД.ММ.ГГ"
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
          type="text"
          id="distance"
          placeholder="0 км"
          onChange={handleChange}
          value={newTrainData.distance || ''}
        />
      </div>
      <button type="submit" className="submit-btn">
        ok
      </button>
    </form>
  );
};

export default AddTrainingForm;
