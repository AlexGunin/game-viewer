import { ActionFunctionArgs, ParamParseKey, Params } from "react-router-dom";
import {api} from "../../api";
import {Paths} from "../../router";


export async function gamesPageLoader() {
  return api.games.all();
}
