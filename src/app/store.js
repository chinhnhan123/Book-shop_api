import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import loginReducer from "features/auth/loginSlice";

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducerLogin = persistReducer(persistConfig, loginReducer);
const store = configureStore({
  reducer: {
    login: persistedReducerLogin,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;
