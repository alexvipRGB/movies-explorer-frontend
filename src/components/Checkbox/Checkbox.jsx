import './Checkbox.css'

function Checkbox({ checkHandler, isChecked }) {
  return (
    <label className='filter'>
      <input
        className='filter__checkbox'
        type='checkbox'
        name='shorts'
        checked={isChecked}
        onChange={checkHandler}
      />
      <p className='filter__text'>Короткометражки</p>
    </label>
  )
};

export default Checkbox;