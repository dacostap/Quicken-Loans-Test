import { Action } from '@ngrx/store';

export const SET_TRANSACTIONS = '[Calculate] Sets transactions';
export class SetTransactionsAction implements Action {
  readonly type = SET_TRANSACTIONS;
  constructor(public payload: string = '') {}
} 


export type Actions =
  | SetTransactionsAction;
