

// const PostHeader = () => {
//   return (
    <div>PostHeader</div>
//   )
// }

// export default PostHeader
import { Avatar, Box,Text, Button, Flex, Skeleton, SkeletonCircle } from "@chakra-ui/react";
// import { Link } from "react-router-dom";
// import useFollowUser from "../../hooks/useFollowUser";
// import { timeAgo } from "../../utils/timeAgo";

const PostHeader = ( {username,avatar}) => {
	// const { handleFollowUser, isFollowing, isUpdating } = useFollowUser(post.createdBy);

	return (
		<Flex justifyContent={"space-between"} alignItems={"center"} w={"full"} my={2}>
			<Flex alignItems={"center"} gap={2}>
				
						<Avatar src={avatar} alt='user profile pic' size={"sm"} />
					
				
					
				

				<Flex fontSize={12} fontWeight={"bold"} gap='2'>
					{username}

					<Box color={"gray.500"}>. 1d</Box>
				</Flex>
			</Flex>
			<Box cursor={"pointer"}>
				<Button
					size={"xs"}
					bg={"transparent"}
					fontSize={12}
					color={"blue.500"}
					fontWeight={"bold"}
					_hover={{
						color: "white",
					}}
					transition={"0.2s ease-in-out"}
					
				>
                    Unfollow
				</Button>
			</Box>
		</Flex>
	);
};

export default PostHeader;
