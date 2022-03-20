import { useState } from 'react'
import './App.css'
import Header from './components/Header'
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

  return (
    <div className="App">
      <Header user={user} />
    </div>
  )
}

export default App
