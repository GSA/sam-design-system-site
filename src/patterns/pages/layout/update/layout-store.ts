import { DataStore } from '../../../architecture';
import { layoutReducer } from './reducer';
import { model } from '../model/layout.model';

export const layoutStore = new DataStore(
  layoutReducer,
  model
);
