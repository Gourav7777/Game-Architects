import React, { useEffect, useState } from 'react'
import hangman from "../Images/Hangman.png"
import rock from "../Images/download.jpg"
import sudoku from "../Images/sudoku.png"
import { useToast } from '@chakra-ui/react'
import video from "../bgvideo/bg.mp4"
import { Link } from 'react-router-dom'

const Video = () => {
// const [token,setToken] = useState("")
  let token = localStorage.getItem("token")
  
  const toast = useToast()
  console.log(token)


  // useEffect(()=>{
  //   {a?setToken(a):setToken("")}
  // },[token])
  return (
    <>
    <div className="absolute mt-36 ml-36  h-1/2 w-10/12 flex justify-between px-1.5 py-1.5">

   
    <div className=" h-full w-1/4 items-center ">
    <img src={hangman} className='w-full h-full'/>
    
    { token?<Link to="https://hang-paprisaha1999.vercel.app/">
    <button className='bg-cyan-300 w-2/5 mt-3 ml-20 rounded-lg px-0.5 py-0.5 font-bold text-lg'>Play Now

     </button>
    </Link>:<button
     onClick={()=>{
       toast({
        title: 'Cannot Proceed',
        description: "You need to register or Login to proceed 😊",
        status: 'error',
        duration: 2000,
        isClosable: true,
      })
    }} 
    className='bg-cyan-300 w-2/5 mt-3 ml-20 rounded-lg px-0.5 py-0.5 font-bold text-lg'>Play Now

</button>}




    {/* <Link to ="https://github.com/Gourav7777">

    <button className='bg-cyan-300 w-2/5 mt-3 ml-20 rounded-lg px-0.5 py-0.5 font-bold text-lg'>Play Now </button>
    </Link> */}
    </div>
    

    <div className=" h-full w-1/4">
    <img src={rock} className='w-full h-full '/>
    { token?<Link to="https://rock-paper-mu.vercel.app/">
    <button className='bg-zinc-950 text-yellow-400 border-yellow-400 w-2/5 mt-3 ml-20 rounded-lg px-0.5 py-0.5 font-bold text-lg'>Play Now

     </button>
    </Link>:<button
     onClick={()=>{
       toast({
        title: 'Cannot Proceed',
        description: "You need to register or Login to proceed 😊",
        status: 'error',
        duration: 2000,
        isClosable: true,
      })
    }} 
    className='bg-zinc-950 text-yellow-400 border-yellow-400 w-2/5 mt-3 ml-20 rounded-lg px-0.5 py-0.5 font-bold text-lg'>Play Now

</button>}

   
    </div>
    
    <div className=" h-full w-1/4 ">
    <img src={sudoku} className='w-full h-full'/>
    { token?<Link to="https://sudoku-coral-six.vercel.app">
    <button className='bg-green-400 w-2/5 mt-3 ml-20 rounded-lg px-0.5 py-0.5 font-bold text-lg'>Play Now

     </button>
    </Link>:<button
     onClick={()=>{
       toast({
        title: 'Cannot Proceed',
        description: "You need to register or Login to proceed 😊",
        status: 'error',
        duration: 2000,
        isClosable: true,
      })
    }} 
    className='bg-green-400 w-2/5 mt-3 ml-20 rounded-lg px-0.5 py-0.5 font-bold text-lg'>Play Now

</button>}
    </div>
    

     </div>
      

    <video className="w-full h-96 object-cover"  src={video} autoPlay loop muted/>

    <div className="absolute mt-10 w-full">
    <video className="w-full h-36 object-cover"  src={video} autoPlay loop muted/>
    </div>
    </>
  )
}

export default Video