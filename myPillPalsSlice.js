import { createSlice } from "@reduxjs/toolkit";
 
export const myPillPalsSlice = createSlice({
    name: "myPillPals", 
    initialState:{
        value: {
            pillPals: [
                {
                    "id": 0, 
                    "charge": 15,
                    "Timer": "00:01:00:00",
                    "Haptics": "Flash",
                    "Name": "Pilder1",
                },
                {
                    "id": 1,
                    "charge": 25,
                    "Timer": "00:01:00:00",
                    "Haptics": "Flash",
                    "Name": "Pilder2"
                },
                {
                    "id": 2,
                    "charge": 50,
                    "Timer": "00:01:00:00",
                    "Haptics": "Flash",
                    "Name": "Pilder3"
                },
            ]}
    },

    reducers:{
        addPal: (state, action) =>{
          //modify and append new pill-pal to existing inventory 
            state.value.pillPals.push(action.payload);
        },

        changePal: (state, action) =>{
            state.value.pillPals[action.payload.id]['Name'] = action.payload.text; 
        }

    }
})

export const {addPal, changePal} = myPillPalsSlice.actions; 
export const selecMyPillPals = (state) => state.myPillPals.value; 
export default myPillPalsSlice.reducer; 
