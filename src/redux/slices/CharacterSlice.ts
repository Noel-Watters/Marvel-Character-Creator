//CharacterSlice.ts
import { Character } from "../../types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface characterState {
    characters: Character[];

    }

const initialState: characterState = {
    characters: [],
}

const characterSlice = createSlice({
    name: "character",
    initialState,
    reducers: {

        SetCharacter: (state, action: PayloadAction<Character[]>) => { // sets character in the state
            state.characters = action.payload;
        },

    }});
export const { SetCharacter} = characterSlice.actions;
export default characterSlice.reducer; //Export the reducer to be used in the store