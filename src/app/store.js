import { combineReducers, configureStore } from "@reduxjs/toolkit";
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
import cartReducer from "features/auth/cartSlice";

const persistConfigLogin = {
  key: "root",
  storage,
};
export const rootReducers = combineReducers({
  login: loginReducer,
  cart: cartReducer,
});
const persistedReducerLogin = persistReducer(persistConfigLogin, rootReducers);
const store = configureStore({
  reducer: persistedReducerLogin,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;
