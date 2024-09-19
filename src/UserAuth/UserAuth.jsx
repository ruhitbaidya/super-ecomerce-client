import React, { createContext } from 'react'

export const AuthUser = createContext(null)
const UserAuth = ({children}) => {
  const info = {name : 'ruhit baidya'}
  return (
    <AuthUser.Provider value={info}>
        {children}
    </AuthUser.Provider>
  )
}

export default UserAuth
