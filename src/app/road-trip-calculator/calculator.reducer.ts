// import * as _ from 'lodash';
import * as CalcActions from './calculator.actions';

export interface State {
  
// contains the instructions sent back from the POST call detailing what everyone owes or is owed
    transactionsData: string;
}

export const initialState: State = {
    transactionsData: '',
};

export function reducer(state: State = initialState, action: CalcActions.Actions): State {
  switch (action.type) {
    case CalcActions.SET_TRANSACTIONS: {
        const transactions: string = (<CalcActions.SetTransactionsAction>action).payload;
        return {...state, transactionsData: transactions };
    }
    default: {
      return state;
    }
  }
}