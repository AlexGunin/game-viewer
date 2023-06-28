import { Link } from 'react-router-dom';
import styles from './game-item.module.css'

interface GameItemProps {
  id: string;
  title: string;
}

export const GameItem = (props: GameItemProps) => {

  const {id, title} = props

  const prepareId = id.replace(/\//, '-')

  return (
    <div>
      <Link to={prepareId}>
        <img src={`https://cdn2.softswiss.net/i/s2/${id}.png`} alt={`Обложка игры - ${title}`} className={styles.img}/>
      </Link>
      <p>{title}</p>
    </div>
  );
};
