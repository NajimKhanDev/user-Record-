import React, { useContext, useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import Employeedashboard from './Components/Dashbord/Employeedashboard'
import Admindashboard from './Components/Dashbord/Admindashboard'
import { CrtContext } from './Context/AuthContext'
import { Getdata,Setdata } from './Localstorage/Localstorage'
const App = () => {
  const userdata = useContext(CrtContext)
  const [role, setRole] = useState('')
  const [user, setUser] = useState('')

  console.log("user is",user)
  

  useEffect(() => {
    Setdata()  // sets initial localStorage if empty
    Getdata()  // reads data (not needed if using context)
    console.log('LocalStorage data saved.')

//     const loggedInUser=localStorage.getItem('loggedInUser')
//       if(loggedInUser){
// const userdata=JSON.parse(loggedInUser);
// setRole(userdata.role)
// setUser(userdata.da)
// console.log(userdata)
//       }
     
  }, [])


  const handlelogin = (email, password) => {
    if (email === "admin@gmail.com" && password == 123) {
      setUser('admin')
     const adminrole= localStorage.setItem('loggedInUser',JSON.stringify({role:"admin"}))
     setRole(adminrole)
    } else if ( userdata)  {
      const employee =userdata.find((e) => e.email === email && e.password == password)
      if(employee){
        setUser('employee')
         localStorage.setItem('loggedInUser',JSON.stringify({role:"employee"}))
        setRole(employee)

      }
    } else {
      alert("Invalid input")
    }
  }

  return (
    <div>
      {!user && <Login handlelogin={handlelogin} />}
      {user === 'employee' && <Employeedashboard data={role}/>}
      {user === 'admin' && <Admindashboard data={role}/>}
    </div>
  )
}

export default App
