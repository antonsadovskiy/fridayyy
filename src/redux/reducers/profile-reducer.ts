export type ProfileStateType = {
    login: string
    status: string
    avatar: string
}
const initialState: ProfileStateType = {
    login: '',
    status: '',
    avatar: ''
}

export const profileReducer = (state: ProfileStateType = initialState, action: any): ProfileStateType => {
    return state
}