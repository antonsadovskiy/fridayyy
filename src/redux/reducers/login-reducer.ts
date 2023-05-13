export type LoginPageStateType = {
    login: string
    password: string
}
const initialState: LoginPageStateType = {
    login: '',
    password: ''
}

export const loginReducer = (state: LoginPageStateType = initialState, action: any): LoginPageStateType => {
    return state
}