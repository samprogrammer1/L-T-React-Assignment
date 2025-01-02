import { configureStore } from "@reduxjs/toolkit";
import counterSlice  from "./features/counter/couterSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
    key: "root",
    storage, // You can also use sessionStorage or another storage type if needed
  };

const persistedReducer = persistReducer(persistConfig, counterSlice);

export const store = configureStore({
    reducer: {
        counter: persistedReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: ['persist/PERSIST'], // Ignore persist actions
          },
        }),
})

export const persistor = persistStore(store);