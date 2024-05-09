/* eslint-disable @typescript-eslint/no-unused-vars */
import { configureStore } from '@reduxjs/toolkit';

import { thunk } from 'redux-thunk';

export const store = configureStore({
    reducer: {},
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(thunk),
});

