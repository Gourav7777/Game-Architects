import React, { useEffect, useState } from 'react'
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { useToast } from '@chakra-ui/react'

import { Navigate, useLocation, useNavigate } from 'react-router-dom';
  
  export default function Login() {
   
    const location = useLocation();
    const toast = useToast()

    const [email,setemail] = useState('')
    const [password,setpassword] = useState("")

    const navigate=useNavigate()

  const login = async () => {
   
    const payload = {
      
      email,
      
      password,
      
   }  
  
   let res = await fetch("https://doubtful-pinafore-wasp.cyclic.app/users/login",{
         method:'POST',
         headers:{
          "content-type":"application/json"
         },
         body:JSON.stringify(payload)
   })
      res = await res.json()
      localStorage.setItem("token",res.token)
    console.log(res)
    navigate("/")
    toast({
        title: 'Logged In',
        description: "Great You Can start Playing Now 😍😍😎😎",
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
  };
 
   
    
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
       
        >
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading  color={'gray.600'}fontSize={'3xl'}>Sign in to your account ✌️</Heading>
           
          </Stack>
          <Box
            rounded={'lg'}
            
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" onChange={(e)=>setemail(e.target.value)} value={email} />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type={'password'}  onChange={(e)=>setpassword(e.target.value)} value={password} />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  onClick={login}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Log in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }