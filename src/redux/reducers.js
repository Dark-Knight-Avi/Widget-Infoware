import { createReducer } from '@reduxjs/toolkit'

const initialState = {
    city: "Mumbai",
    country: "India"
}

export const widgetReducer = createReducer(
    initialState,
    {
        updateCity: (state, action) => {
            state.city = action.payload
        },
        updateCountry: (state, action) => {
            state.country = action.payload
        }
    }
)