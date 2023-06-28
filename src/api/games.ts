import games from './games_test.json'


const sleep = (time: number) => new Promise((res, rej) => setTimeout(res, time))

const randomSleep = (min: number, max: number) => sleep(Math.floor(min + Math.random() * (max - min)))

const getGames = async () => {
  await randomSleep(200, 500)

  return Object.fromEntries(Object.entries(games).sort(([_, game1], [__, game2]) => game1.collections.popularity - game2.collections.popularity))
}


const getGame = async (gameId: string) => {
  await randomSleep(200, 500)

  if(!gameId) return null

  const key = gameId as keyof typeof games

  return key in games ? games[key] : null
}

export const gamesApi = {
  all: getGames,
  one: getGame
}
