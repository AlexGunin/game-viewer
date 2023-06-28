import {useLoaderData} from "../../hooks/useLoaderData";
import {Game} from "../../components";
import { Link } from "react-router-dom";
import styles from './game-page.module.css'

export const GamePage = () => {
  const game = useLoaderData<Game>()

  if(!game) return <span>Игра не найдена</span>

  return (
    <main className={styles.main}>
      <Link to="/">На главную</Link>
       <section className={styles.titleContainer}>{game.title}</section>
    </main>
  );
};
