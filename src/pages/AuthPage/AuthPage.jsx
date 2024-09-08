import { Container ,Flex} from '@chakra-ui/react'
import { Box, Image, VStack } from '@chakra-ui/react';
import AuthForm from '../../components/AuthForm/AuthForm';

const AuthPage = () => {
  return (
     <Flex minH={"100vh"} justifyContent ={"center"} alignItems={"center"} px={4}>
        <Container maxW={"container.md"} padding={0}>
            <Flex gap={10} justifyContent={"center"}>
            <Box display={{base:"none",md:"block"}}>
    <Image  src ='/auth.png' h ={650} alt='Phone Image'/>
    </Box>

    <VStack spacing={4} align={"stretch"}>
        <AuthForm />
        <Box textAlign={"center"}>
            Get the app.Just kidding not available yet
        </Box>
        <Flex gap={5} justifyContent={"center"}> 
        <Image src ='/playstore.png' h ={10} alt='Playstore Image' />
        <Image src ='/microsoft.png' h ={10} alt='Microsoft Image' />

        </Flex>


    </VStack>
            </Flex>
    {/* Here is some content */}
    

{/* VStack put one below other  */}
    
        </Container>
     </Flex>
  )
}

export default AuthPage;

