import { Box, Button, Flex, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react";
import { CommentLogo, NotificationsLogo, UnlikeLogo } from "../../assets/constants";
import { useState } from "react";


const PostFooter = ({username}) => {
    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(1000);

    const handleLike = () => {
        if (liked) {
            setLiked(false);
            setLikes(likes - 1);
        } else {
            setLiked(true);
            setLikes(likes + 1);
        }
    };

    return (
        <Box my={10}>
            <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} mt={2}>
                <Box onClick={handleLike} cursor={"pointer"} fontSize={18}>
                    {!liked ? (<NotificationsLogo />) : (<UnlikeLogo />)}
                </Box>
                <Box cursor={"pointer"} fontSize={18}>
                    <CommentLogo />
                </Box>
            </Flex>
            <Text fontWeight={600} color={"white"}>
                   {likes} likes
                </Text>
            <Text fontWeight={800} fontSize={"sm"}>
                {username} {" "}
                <Text as='span' fontWeight={500}>
                    How am I looking today
                </Text>
                <Text fontWeight={600} color={"white"}>
                    View all 123 comments
                </Text>
            </Text>
            <Flex alignItems={"center"} gap={2} justifyContent={"space-between"} w={"full"}>
                <InputGroup>
                    <Input variant={"flushed"} placeholder={"Add a comment..."} fontSize={15} />
                    <InputRightElement>
                        <Button
                            fontSize={13}
                            color={"blue.600"}
                            _hover={{ color: "white" }}
                            bg={"transparent"}>
                            Post
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </Flex>
        </Box>
    );
}

export default PostFooter;
