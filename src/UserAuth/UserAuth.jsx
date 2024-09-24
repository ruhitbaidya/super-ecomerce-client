import React, { createContext, useState } from 'react'

export const AuthUser = createContext(null)
const UserAuth = ({children}) => {
  const [cardItem, setCardItem] = useState([]);
  const info = {cardItem, setCardItem}
  return (
    <AuthUser.Provider value={info}>
        {children}
    </AuthUser.Provider>
  )
}

export default UserAuth
