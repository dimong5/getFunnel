import { createContext, useContext } from 'react';

// { videoRef, isPlay, setIsPlay }
export interface IPlayerContext {
  videoRef: any;
  isPlay: boolean;
  setIsPlay: (isPlay: boolean) => void;
};

export const PlayerContext = createContext({} as IPlayerContext);
