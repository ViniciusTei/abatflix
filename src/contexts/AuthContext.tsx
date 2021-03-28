import * as React from 'react'
import {auth} from '../firebse'

export const AuthContext = React.createContext({} as any);

export function useAuth() {
    return React.useContext(AuthContext)
}

export const AuthProvider: React.FC = ({ children }) => {
    const [currentUser, setCurrentUser] = React.useState<any>()
    const [loading, setLoading] = React.useState(true)

    function singup(email: string, password: string) {
        return auth.createUserWithEmailAndPassword(email, password)
    }
    
    React.useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user)
            setLoading(false) //not render the app until have the current user
        })

        return unsubscribe
    }, [])
    
    const value: any = {
        currentUser,
        singup
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
