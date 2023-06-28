import {GamesData} from "../GamesList";

export const getProviders = (gamesData: GamesData): string[] => {
  const providersSet = Object.values(gamesData).reduce((acc, game) => acc.add(game.provider) , new Set() as Set<string>)

  return [...providersSet.keys()]
}

export const getReals = (gamesData: GamesData): string[] => {
  const realsSet = Object.values(gamesData).reduce((acc, game) => {
    const reals = Object.keys(game?.real)

    reals.forEach(real => acc.add(real))

    return acc
  } ,new Set() as Set<string>)

  return [...realsSet.keys()]
}
