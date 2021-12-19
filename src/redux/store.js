import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { contactApi } from './contacts/contact-api';

export const store = configureStore({
  reducer: {
    [contactApi.reducerPath]: contactApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false })
      .concat(contactApi.middleware)
      .concat(logger),
  devTools: process.env.NODE_ENV === 'development',
});
