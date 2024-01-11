import {combineReducers, configureStore, Reducer} from "@reduxjs/toolkit";
import {
  TypedUseSelectorHook,
  useDispatch as useAppDispatch,
  useSelector as useAppSelector,
} from 'react-redux';
import bookReducer from '@/app/lib/features/books/booksSlice'

// Define the root state type using the ReturnType utility of TypeScript
export type RootState = ReturnType<typeof rootReducer>;
// Define the type for dispatching actions from the store
export type AppDispatch = typeof store.dispatch;

const rootReducer = combineReducers({
  booksSlice: bookReducer,
});

const store = configureStore({
  reducer: rootReducer, // Add your reducers here
});

// Extract the dispatch function from the store for convenience
const { dispatch } = store;

export default store;