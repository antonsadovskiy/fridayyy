import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import thunk from "redux-thunk";
import {loginReducer} from "./reducers/login-reducer";
import {registerReducer} from "./reducers/register-reducer";
import {profileReducer} from "./reducers/profile-reducer";


const rootReducer = combineReducers({
    loginPage: loginReducer,
    registerPage: registerReducer,
    profilePage: profileReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))
export type RootStateType = ReturnType<typeof rootReducer>