import { createSlice } from "@reduxjs/toolkit";

// e' la slice dedicata al counter
export const citiesSlice = createSlice({
    name: 'cities',
    initialState: {
        value: [
            {
                id: 0,
                title: "Tokyo",
                description: "Ecco Tokyo!!",
                imgURL: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG9reW98ZW58MHx8MHx8fDA%3D",
                isVisited: true
            },
            {
                id: 1,
                title:"New York",
                description: "Siamo nella grande mela..",
                imgURL: "https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3JTIweW9ya3xlbnwwfHwwfHx8MA%3D%3D",
                isVisited: false
            },
            {
                id: 2,
                title: "Rome",
                description: "La città eterna",
                imgURL: "https://images.unsplash.com/photo-1537799943037-f5da89a65689?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                isVisited: true
            },
            {
                id: 3,
                title: "Paris",
                description: "Parigi val bene una messa",
                imgURL: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                isVisited: false
            },
        ]
    },
    //i reducer sono le azioni (funzioni) che operano su uno stato
    reducers: {
        add: (state, action) => {
            state.value.push(action.payload)
        },
    },
})

export const { add } = citiesSlice.actions

export const citiesReducer = citiesSlice.reducer