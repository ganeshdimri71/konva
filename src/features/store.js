import { configureStore } from '@reduxjs/toolkit'
import KonvaData from '../features/konvaReducer'

const store = configureStore( {
    reducer: {
        KonvaData: KonvaData,
    },
    devTools: true,
} );
window.store = store
export default store;