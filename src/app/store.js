import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";


import { cryptoApi } from "../services/cryptoApi";
import { cryptoNewsApi} from "../services/cryptoNewsApi";
import { cryptoExchangesApi } from "../services/cryptoExchangesApi";



export default configureStore({
     // Add the generated reducer as a specific top-level slice
    reducer: {
        [ cryptoApi.reducerPath ]: cryptoApi.reducer,
        [ cryptoNewsApi.reducerPath ]: cryptoNewsApi.reducer,
        [ cryptoExchangesApi.reducerPath ]: cryptoExchangesApi.reducer,
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(cryptoApi.middleware, cryptoNewsApi.middleware),
    
    
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(cryptoApi.middleware, cryptoNewsApi.middleware, cryptoExchangesApi.middleware),

    
});