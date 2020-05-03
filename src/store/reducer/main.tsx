import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

type TinitialState = {
    name: string,
    mail: string,
    color: number,    
}

const initialState = {
    name: '',
    mail: '',
    color: 0,  
}

const main = (state: TinitialState = initialState, action: any) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default createStore(main, applyMiddleware(thunk));