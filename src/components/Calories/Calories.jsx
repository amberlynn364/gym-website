import './Calories.css';
import CaloriesImg from '../../assets/calories.png';

const Calories = () => {
  return (
    <div className="calories">
      <img src={CaloriesImg} alt="" />
      <div>
        <span>Calories Burned</span>
        <span>220 kcal</span>
      </div>
    </div>
  )
}

export default Calories