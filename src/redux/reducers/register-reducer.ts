type RegistrationStateType = {
    login: string
    password: string
    rememberMe: boolean
}

const initialState: RegistrationStateType = {
    login: '',
    password: '',
    rememberMe: false
}

export const registerReducer = (state: RegistrationStateType = initialState, action: any): RegistrationStateType => {
    return state
}