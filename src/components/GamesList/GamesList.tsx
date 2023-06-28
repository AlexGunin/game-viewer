import {GameItem} from "./components/GameItem";
import {usePagination} from "../../hooks/usePagination";
import styles from './games-list.module.css';
import {GameWithId} from "./types";

interface GamesProps {
  games?: GameWithId[]
}

export const GamesList = (props: GamesProps) => {
  const {games = []} = props

  const {visibleItems, next, isLast, isEmpty} = usePagination({items: games})

  if(isEmpty) return <span>Игр по выбранным критериям не найдено</span>

  return (
    <section className={styles.container}>
      <div className={styles.list}>
        {visibleItems.map(game => <GameItem key={game.id} id={game.id} title={game.title}/>)}
      </div>

      {!isLast && <button onClick={next} className={styles.moreBtn}>Показать еще</button>}
    </section>
  );
};
