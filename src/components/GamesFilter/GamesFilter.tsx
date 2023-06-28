import { useMemo } from "react";
import {getProviders, getReals} from "./helpers";
import {GamesData} from "../GamesList";
import styles from './games-filter.module.css';

type ChangeFunction<T> = (value: T) => void;

interface GamesFilterProps<R = string, P = string> {
  currentReal?: R;
  currentProvider?:P;
  gamesData?: GamesData
  onChangeReal?: ChangeFunction<R>;
  onChangeProvider?: ChangeFunction<P>;
  extraStyles?: Record<string, string>;
}

export const GamesFilter = (props: GamesFilterProps) => {
  const {extraStyles = {},currentReal, currentProvider, gamesData = {}, onChangeProvider, onChangeReal} = props

  const reals = useMemo(() => getReals(gamesData), [gamesData])
  const providers = useMemo(() => getProviders(gamesData), [gamesData])

  // TODO: использовать библиотеку classNames
  const containerClasses = `${styles.filter} ${extraStyles.filter}`

  return (
    <div className={containerClasses}>
      <select name="real" onChange={(e) => onChangeReal && onChangeReal(e.target.value)} value={currentReal}>
        {reals.map(real => <option value={real}>{real}</option>)}
      </select>
      <select name="provider" onChange={(e) => onChangeProvider && onChangeProvider(e.target.value)} value={currentProvider}>
        {providers.map(provider => <option value={provider}>{provider}</option>)}
      </select>
    </div>
  );
};
