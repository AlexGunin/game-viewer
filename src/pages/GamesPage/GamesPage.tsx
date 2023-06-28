import {useLoaderData} from "../../hooks/useLoaderData";
import {GamesFilter, GamesList, GamesData, GameWithId} from "../../components/";
import { useMemo } from "react";
import {useGamesFilter} from "../../hooks/useGamesFilter";
import styles from './games-page.module.css'

const transformGamesDataToArray = (gamesData?: GamesData): GameWithId[] => gamesData ? Object.entries(gamesData).reduce((acc, [id, game]) => [...acc, {...game, id}], [] as GameWithId[]) : []

export const GamesPage = () => {
  const gamesData = useLoaderData<GamesData>()
  const games = useMemo(() => transformGamesDataToArray(gamesData),[gamesData])

  const {filteredGames, real, provider, onChangeReal, onChangeProvider} = useGamesFilter(games)

  return (
    <main>
        <GamesFilter extraStyles={styles} gamesData={gamesData} currentReal={real} currentProvider={provider} onChangeProvider={onChangeProvider} onChangeReal={onChangeReal}/>
        <GamesList games={filteredGames}/>
    </main>
  );
};
