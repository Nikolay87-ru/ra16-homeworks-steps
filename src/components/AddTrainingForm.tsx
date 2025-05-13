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
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', newTrainData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="date">Дата(ДД.ММ.ГГ)</label>
      <input
        name="date"
        type="date"
        id="date"
        placeholder="ДД.ММ.ГГ"
        onChange={handleChange}
        value={newTrainData.date || ''}
      />
      <label htmlFor="distance">Дата(ДД.ММ.ГГ)</label>
      <input
        name="distance"
        type="text"
        id="distance"
        placeholder="0 км"
        onChange={handleChange}
        value={newTrainData.distance || ''}
      />
      <button type="submit">ok</button>
    </form>
  );
};

export default AddTrainingForm;
