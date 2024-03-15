import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { rootReducers } from "./rootReducer"; // Assuming rootReducers is a typo
import thunk from "redux-thunk";
import { APIURL } from "../config";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: APIURL,
      },
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);

// persistor.purge();

export { store, persistor }; // Removed dispatch export as it's not necessary and might lead to issues
