import { createBrowserRouter } from "react-router-dom";
import {GamesPage, GamePage, gamesPageLoader, gamePageLoader} from "../pages/";

export const Paths = {
  game: "/:gameId",
} as const;

export const router = createBrowserRouter([
  {
    path: "/",
    element: <GamesPage/>,
    loader: gamesPageLoader,
  },
  {
    path: "/:gameId",
    element: <GamePage />,
    loader: gamePageLoader
  },
]);
