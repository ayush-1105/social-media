import { Box, Image, Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import PostHeader from '../FeedPosts/PostHeader';
import PostFooter from '../FeedPosts/PostFooter';

const SmallScreenPost = ({ img, username, avatar }) => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  // Function to handle image click and navigate to the user's profile
  const handleImageClick = () => {
    navigate(`/`); // Navigate to the profile page
  };

  return (
    <Flex direction="column" h="100vh" py={3} pl={2} pr={2}>
      {/* Post Header with username and avatar */}
      <PostHeader username={username} avatar={avatar} />
      
      {/* Image Section: Make the image clickable */}
      <Box flex={1} overflow="hidden" onClick={handleImageClick} cursor="pointer">
        <Image src={img} alt={username} w="100%" h="100%" objectFit="cover" />
      </Box>
      
      {/* Post Footer with username (for likes, comments, etc.) */}
      <PostFooter username={username} />
    </Flex>
  );
};

export default SmallScreenPost;
