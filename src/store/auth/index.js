import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentAccount: {
        id: 1,
        username: "Araz_Ahmet_",
        fullName: "Ahmet Araz",
        avatar: "https://pbs.twimg.com/profile_images/1709686834559614976/RoqN0-Ba_400x400.png"
    },
    accounts: [

        {
            id: 1,
            username: "Araz_Ahmet_",
            fullName: "Ahmet Araz",
            avatar: "https://pbs.twimg.com/profile_images/1709686834559614976/RoqN0-Ba_400x400.png"
        },
        {
            id: 2,
            username: "Hu_Victor_",
            fullName: "Victor Hugo",
            avatar: "https://pbs.twimg.com/profile_images/1469809415914242049/v6GYu9BP_400x400.jpg"
        },

    ]
}

const auth = createSlice({
    name: "auth",
    initialState,   
    reducers: {
        // state manuplating methods
        _addAccount: (state, action) => {
            state.accounts.push(action.payload)
        },
        _removeAccount: (state, action) => {
            state.accounts = state.accounts.filter(account => account.id !== action.payload)
            if(state.currentAccount && action.payload === state.currentAccount.id){
                this._setCurrentAccount(false)
            }
        },
        _setCurrentAccount: (state, action) => {
            state.currentAccount = action.payload
        },
    }
})

export const {_addAccount, _setCurrentAccount, _removeAccount} = auth.actions
export default auth.reducer