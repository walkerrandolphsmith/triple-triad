import { FILTER_WINNER_TYPE } from './../index';

export const filterWinnerType = winnerType => ({
   type: FILTER_WINNER_TYPE,
   payload: {
      winnerType: winnerType
   }
});