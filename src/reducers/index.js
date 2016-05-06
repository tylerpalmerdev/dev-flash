/*
This is the "master reducer" file that sets up entire application state
Imports all other reducers and combines them into one state
Exports state
*/

import { combineReducers } from 'redux';
import CategoriesReducer from './reducer_categories';
import SelectedCategories from './reducer_selected_categories';

const rootReducer = combineReducers({
  categories: CategoriesReducer, // val is whatever gets returned from CategoriesReducer fcn
  selectedCategories: SelectedCategories
});

export default rootReducer;
