import s from './Filter.module.css';

export default function Filter({ onChange }) {
  return (
    <label className={s.filter}>
      Find contacts by name:
      <input type="text" className={s.input} onChange={onChange} />
    </label>
  );
}
