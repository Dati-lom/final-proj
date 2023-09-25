
import './App.css';
import Login from './Components/Login';
import Header from './Components/Header';
import Register from ".//Components/Register"
import {Routes, Route ,useLocation,matchPath} from 'react-router-dom';
import MainPage from './Components/MainPage';
import { useEffect, useState } from 'react';
import useAuth from './Hooks/useAuth';
import AuthContext from './Context/AuthContext';
import CreateReview from "./Components/CreateReview"
import Tags from './Components/CreateReviewComps/Tags';
import hook from "./Hooks/useAuth"
import ReviewPage from './Components/ReviewPage';
import TokenValid from './Hooks/TokenValid';
import { ClerkProvider } from '@clerk/clerk-react';
import ProfilePage from './Components/ProfilePage';

function App() {
  const [username,setUsername] = useState();
  const [userId,setUserId] = useState();
  const [isAuthed,setAuthed] = useState(false);
  const [isAdmin,setIsAdmin]=useState(false);



  return (
    <div className="App">
      <div className='bg-dark border p-4 h-screen'>
      <AuthContext.Provider value = {{isAuthed,setAuthed,userId,setUserId,isAdmin,setIsAdmin,username,setUsername}}>
      <Header isAuthed={isAuthed} ></Header>
       <Routes>
        <Route path='/login' element={<Login setAuthed={setAuthed} ></Login>}></Route>
        <Route path="/register" element ={<Register></Register>}></Route>
        <Route path="/" element={<MainPage setAuthed={(e) => {setAuthed(e)}}></MainPage>}></Route>
        <Route path='/mainpage/user/:userId' element={<MainPage></MainPage>}></Route>
        <Route path='/create-review/' element={<CreateReview></CreateReview>}></Route>
        <Route path='/review/:revId' element = {<ReviewPage></ReviewPage>}></Route>
        <Route path='/profile/:userId' element={<ProfilePage></ProfilePage>}/>
      </Routes>


      </AuthContext.Provider>
      </div>
      
    </div>
  );
}

export default App;
