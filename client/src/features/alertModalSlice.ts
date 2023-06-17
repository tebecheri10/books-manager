import { createSlice } from '@reduxjs/toolkit'
import { AlertModalType } from '../typings/alertModal'

const initialState:AlertModalType = {
    show: false,
    bookToDeleteId: 0
}

const alertModalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        toggleModal: (state, actions)=>{
            const { show, bookToDeleteId} =  actions.payload
            state.show = show
            state.bookToDeleteId = bookToDeleteId
        }
    }
})

export const { toggleModal} = alertModalSlice.actions
export default alertModalSlice.reducer