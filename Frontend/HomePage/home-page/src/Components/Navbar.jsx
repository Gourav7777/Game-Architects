import React from 'react'
import { Link } from 'react-router-dom'
import { useToast } from '@chakra-ui/react'
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import {useNavigate} from "react-router-dom"
const Navbar = () => {
    const toast = useToast()
    const navigate=useNavigate()
    let token  = localStorage.getItem("token")
    let handleLogout=()=>{
        localStorage.removeItem("token")
       
        navigate("/")
        toast({
            title: 'Logged Out',
            description: "Log in again to continue Playing",
            status: 'error',
            duration: 5000,
            isClosable: true,
          })
      }

      let handleLogin=()=>{
        
       
        navigate("/login")
      }

      let handleSignup=()=>{
        
       
        navigate("/signup")
      }
      let homepage=()=>{
        
       
        navigate("/")
      }
  return (
   
     
    <div  className="justify-between items-center w-full h-20 flex px-80 top-0">

     {/* <div className="absolute top-0 justify-between items-center w-full h-20 flex px-80 text-white backdrop-blur-md"> */}

      <div onClick={homepage} className='text-3xl cursor-pointer tracking-widest font-bold first-letter:text-orange-500 first-letter:font-bold'>
         <i>GAMEHUB </i>
      </div>


      <div className=" justify-between items-center text-2xl flex px-20 py-10  cursor-pointer">


     { !token?<Menu >
        <MenuButton colorScheme='teal' variant='solid' as={Button} >
          Signup
        </MenuButton>
        <MenuList bg={"black"}>
          
          <MenuItem onClick={handleSignup} color={"black"}>SignUp</MenuItem>
          <MenuItem onClick={handleLogin} color={"black"}>LogIn</MenuItem>
        </MenuList>
      </Menu>
    
     : <Menu >
        <MenuButton colorScheme='teal' variant='solid' as={Button} >
          Logout
        </MenuButton>
        <MenuList bg={"black"}>
          
          <MenuItem color={"black"}>Delete</MenuItem>
          <MenuItem onClick={handleLogout} color={"black"}>Logout</MenuItem>
        </MenuList>
      </Menu>}
        
       
      </div>

     </div>


    
  )
}

export default Navbar