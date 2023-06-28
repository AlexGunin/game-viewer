import {useMemo, useState } from "react"
import {GameWithId, Real} from "../components";

const checkReal = (real: Real, filter?: string) => filter ? Object.keys(real).includes(filter) : true

const checkProvider = (provider: string, filter: string) => filter ? provider === filter : true

export const useGamesFilter = (games: GameWithId[]) => {
  const [real, setReal] = useState('')
  const [provider, setProvider] = useState('')

  const filteredGames = useMemo(() => games.filter(game => {
    if(!real && !provider) return true

    return checkReal(game.real, real) && checkProvider(game.provider, provider)
  }), [games, provider, real])

  return {
    real,
    provider,
    onChangeReal: setReal,
    onChangeProvider: setProvider,
    filteredGames
  }
}
