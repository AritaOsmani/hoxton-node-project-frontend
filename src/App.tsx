import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import { User } from './types'

const userModel = {
  id: 2,
  email: "endi@email.com",
  password: "$2a$08$DeiLwY.W9CdB9EAqEiojAeY4wdbfXFpt.CxM6oAk1EBVpyvwpftEq",
  firstName: "Endi",
  lastName: "Ymeri",
  bio: "",
  avatarImage: "https://robohash.org/default",
  joinedAt: "2022-03-19T22:52:29.430Z",
  articles: []
}

function App() {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    if (localStorage.token) {
      fetch(`http://localhost:4000/validate`, {
        headers: {
          Authorization: localStorage.token
        }
      }).then(data => data.json()).then(data => {
        setUser(data)
      })
    }
  }, [])

  return (
    <div className="App">
      <Header user={user} setUser={setUser} />
      <Routes>
        <Route path='/signup' element={<SignUp user={user} setUser={setUser} />} />
        <Route path='/login' element={<LogIn setUser={setUser} />} />
      </Routes>
    </div>
  )
}

export default App
