
import { AppState } from './app.reducer';




export const getTransactions = {
    transactions: (state: AppState) => state.calculator.transactionsData
};
