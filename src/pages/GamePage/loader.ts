import { ActionFunctionArgs, ParamParseKey, Params } from "react-router-dom";
import {api} from "../../api";
import {Paths} from "../../router";

interface GameLoaderArgs extends ActionFunctionArgs {
  params: Params<ParamParseKey<typeof Paths.game>>;
}

export async function gamePageLoader({ params }: GameLoaderArgs) {
  const prepareGameId = params.gameId ? params.gameId.replace(/-/, '/') : ''
  return api.games.one(prepareGameId)
}
