import React, { createContext, useEffect, useState } from 'react'
import Localstorage, { Getdata, Setdata } from '../Localstorage/Localstorage'

export const CrtContext = createContext()

const AuthContext = ({ children }) => {
  const [Userdetails, SetUserdetails] = useState([])

  useEffect(() => {
    Setdata()
    const { empData, adminData } = Getdata()
    // You can merge or choose either empData/adminData based on your logic
    SetUserdetails(empData) // or SetUserdetails([...empData, ...adminData])
  }, [])

  return (
    <CrtContext.Provider value={Userdetails}>
      {children}
    </CrtContext.Provider>
  )
}

export default AuthContext
