/**
 * @ngrx/store is a Redux alternative for Angular 2 + that makes strong use of Observables to track State updates via subscriptions.
 *
 */

//  import * as _ from 'lodash';
 import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
 import { storeFreeze } from 'ngrx-store-freeze';
 
 import * as CalcReducer from './road-trip-calculator/calculator.reducer';

 
 
 
 // defines the structure of the state of the app which is the single source of truth for data
 export interface AppState {
  calculator: CalcReducer.State;

 }
 
 // collection of the reducer functions defined throughout the app that change the state
 export const AppReducer: ActionReducerMap<AppState> = {
  calculator: CalcReducer.reducer,
 };
 
