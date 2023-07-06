import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as todoReducer } from "./TodoSlice";
import { reducer as visibilityFilterReducer } from "./VisibilityFIlters";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  todo: todoReducer,
  visibilityFilter: visibilityFilterReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
const persistor = persistStore(store);

// store.subscribe(() => console.log("updated state", store.getState()));

export { store, persistor };
