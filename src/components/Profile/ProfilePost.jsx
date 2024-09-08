import { Box, Flex, GridItem, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, useDisclosure, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';
import { AiFillHeart } from 'react-icons/ai'; 
import { FaComment } from 'react-icons/fa';  
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import PostFooter from '../FeedPosts/PostFooter';
import Comment from '../Comment/Comment'; 
import SmallScreenPost from '../Profile/SmallScreenPost';  // Import SmallScreenPost for small screens

const ProfilePost = ({ img, username, avatar }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();  // Modal state control
  const isSmallScreen = useBreakpointValue({ base: true, md: false });  // Small screen check
  const navigate = useNavigate();  // Initialize useNavigate

  // Handle navigation to the profile page when clicking the image
  const handleNavigateToProfile = () => {
    navigate('/'
    );  // Navigate to the profile page
  };

  return (
    <>
      <GridItem
        cursor={"pointer"}
        borderRadius={4}
        overflow={"hidden"}
        border={"1px solid"}
        borderColor={"whiteAlpha.300"}
        position={"relative"}
        aspectRatio={1 / 1}
        onClick={onOpen}  
      >
        <Flex
          opacity={0}
          _hover={{ opacity: 1 }}
          position={"absolute"}
          top={0}
          left={0}
          bottom={0}
          right={0}
          bg={"blackAlpha.600"}
          zIndex={1}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Flex alignItems={"center"} gap={10}>
            <Flex alignItems={"center"}>
              <AiFillHeart size={20} />
              <Text fontWeight={"bold"} ml={2}>
                10
              </Text>
            </Flex>

            <Flex alignItems={"center"}>
              <FaComment size={20} />
              <Text fontWeight={"bold"} ml={2}>
                7
              </Text>
            </Flex>
          </Flex>
        </Flex>

        <Image src={img} alt='profile post' w={"100%"} objectFit={"cover"} h={"100%"} />
      </GridItem>

      <Modal isOpen={isOpen} onClose={onClose} isCentered={true} size={{ base: "full", md: "5xl" }}>
        <ModalOverlay />
        <ModalContent>
          {isSmallScreen ? (
            <SmallScreenPost 
              img={img} 
              username={username} 
              avatar={avatar} 
            />
          ) : (
            <>
              <ModalHeader>Post</ModalHeader>
              <ModalCloseButton />
              <ModalBody bg={"black"} pb={5}>
                <Flex gap={4} w="full" mx={"auto"}>
                  {/* Left: Image Section */}
                  <Flex
                    borderRadius={4}
                    overflow={"hidden"}
                    border={"1px solid"}
                    borderColor={"whiteAlpha.500"}
                    flex={1.2}
                    onClick={handleNavigateToProfile} // Navigate to profile on image click
                    cursor={"pointer"}
                  >
                    <Image src={img} alt="profile post" objectFit="cover" w="100%" />
                  </Flex>

                  {/* Right: Comments and Footer Section */}
                  <Flex flex={1} direction={"column"}>
                    {/* Comments Section */}
                    <Flex
                      direction="column"
                      overflowY="auto"
                      maxH="350px"
                      bg={"gray.800"}
                      p={4}
                      mb={17} // margin-bottom to separate comments from the footer
                    >
                      <Comment
                        createdAt="2h ago"
                        username="JohnDoe"
                        profilePic="https://bit.ly/sage-adebayo"
                        text="Great post!"
                      />
                      <Comment
                        createdAt="5h ago"
                        username="JaneSmith"
                        profilePic="https://bit.ly/dan-abramov"
                        text="Awesome!"
                      />
                      {/* Add more comments as needed */}
                    </Flex>

                    {/* Footer */}
                    <Box>
                      <PostFooter />
                    </Box>
                  </Flex>
                </Flex>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default ProfilePost;
