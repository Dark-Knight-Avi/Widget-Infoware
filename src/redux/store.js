import { configureStore } from "@reduxjs/toolkit";
import { widgetReducer } from "./reducers";

export default configureStore({
    reducer: {
        widgetReducer: widgetReducer
    }
})