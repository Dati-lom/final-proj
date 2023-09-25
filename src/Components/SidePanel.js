import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import AuthContext from '../Context/AuthContext'
import * as auth from '../Functions/AuthFuns'
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import { 
  UserCircleIcon,
  Cog6ToothIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";

function SidePanel({handleLogOut}) {
  const {username,isAdmin} = useContext(AuthContext)

  return (
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] flex-col p-4 shadow-xl bg-dark text-white border-1">
  <List>
    <ListItem>
      <ListItemPrefix>
        <UserCircleIcon className="h-5 w-5 text-white" /> 
      </ListItemPrefix>
      <Link to={`/profile/${localStorage.getItem("userId")}`} className="nav-link text-white" >Profile</Link>
    </ListItem>
    <ListItem>
      <ListItemPrefix>
        <Cog6ToothIcon className="h-5 w-5 text-white" /> 
      </ListItemPrefix>
      <Link to="/create-review" className="nav-link text-white" >Create Review</Link>
    </ListItem>
    <ListItem onClick={handleLogOut}>
      <ListItemPrefix>
        <PowerIcon className="h-5 w-5 text-white" /> 
      </ListItemPrefix>
      Log Out
    </ListItem>
  </List>
</Card>
  );
}

export default SidePanel