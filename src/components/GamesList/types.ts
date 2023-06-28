interface IdObject {
  id: number;
}

export interface Collections {
  novelty: number;
  popularity: number;
  slots: number;
  _hd: number;
  all: number;
}

export type Coins = 'BTC' | 'ETH' | 'LTC' | 'DOG'

export type Real = Record<Coins, IdObject>

export interface Game {
  title: string;
  provider: string;
  collections: Collections;
  real: Real;
  demo: string;
}

export interface GameWithId extends Game{
  id: string;
}

export type GamesData = Record<string, Game>
