import { DataStoreEvent, DataStore } from '../../../architecture';

export function layoutReducer (state: any, action: DataStoreEvent) {
  switch (action.type) {
    case 'DATA_CHANGED':
      return {
        ...state,
        data: action.payload
      };
    case 'FILTERS_CHANGED':
      return {
        ...state,
        filters: action.payload
      };
    case 'PAGE_CHANGE':
      return {
        ...state,
        pagination: action.payload
      };
    case 'SORT_CHANGE':
      return {
        ...state,
        sort: action.payload
      };
    case 'ERROR':
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
}
