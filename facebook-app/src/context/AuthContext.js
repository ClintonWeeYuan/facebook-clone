import {createContext, useReducer} from 'react';
import AuthReducer from './AuthReducer';

const INITIAL_STATE = {
    user: {
        _id : "6156a11f070250e20cf2bf8f",
        username:"jane",
        email: "jane@gmail.com",
        password: "killmenow",
        profilePicture : "../../assets/people/jasmine.jpg",
        followers: [],
        following:[],
        isAdmin: false,
    },
    isFetching: false,
    error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    return (
        <AuthContext.Provider value={{user:state.user, isFetching:state.isFetching, error: state.error, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}