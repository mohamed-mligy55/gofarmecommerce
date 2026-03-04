"use client";

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cartslice";
import heartReducer from "./heartslice";

import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

const rootReducer = combineReducers({
  cart: cartReducer,
  heart: heartReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);