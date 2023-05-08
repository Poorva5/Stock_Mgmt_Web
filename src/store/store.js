import { configureStore } from "@reduxjs/toolkit";
import authReducer from './auth';
import dashboardReducer from './dashboard'

const store = configureStore(
    {
        reducer: {
            auth: authReducer,
            dashboard: dashboardReducer,
        }
    }
)

export default store;