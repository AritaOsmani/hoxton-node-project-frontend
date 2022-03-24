import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import CategoriesPage from './pages/CategoriesPage'
import LogIn from './pages/LogIn'
import NewArticlePage from './pages/NewArticlePage'
import SignUp from './pages/SignUp'
import SingleArticlePage from './pages/SingleArticlePage'
import UpdateArticlePage from './pages/UpdateArticlePage'
import UserPage from './pages/UserPage'
import { User } from './Types'


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
        <Route path='/' element={<Main />} />
        <Route path='/signup' element={<SignUp user={user} setUser={setUser} />} />
        <Route path='/login' element={<LogIn setUser={setUser} />} />
        <Route path='/user/:username' element={<UserPage user={user} />} />
        <Route path='/create-article' element={<NewArticlePage user={user} />} />
        <Route path='/article/:id' element={<SingleArticlePage />} />
        <Route path='/update-article/:id' element={<UpdateArticlePage user={user} />} />
        <Route path='/categories/:category' element={<CategoriesPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
