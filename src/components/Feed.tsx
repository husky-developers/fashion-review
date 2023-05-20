import { Box, Flex, Heading, Image, Text, IconButton, Spacer, Badge } from '@chakra-ui/react';
import { FaHeart } from 'react-icons/fa';

interface Post {
  id: number;
  imageUrl: string;
  title: string;
  date: string;
  description: string;
  college: string;
}

interface FeedProps {
  posts: Post[];
}

const Feed: React.FC<FeedProps> = ({ posts }) => {
  return (
    <Box p={5}>
      {posts.map((post) => (
        <Box key={post.id} bg="white" boxShadow="md" p={4} mb={4} maxW="600px" mx="auto">
          <Flex alignItems="center">
            <Image src={post.imageUrl} alt={post.title} boxSize="300px" objectFit="cover" mr={4} />
            <Box>
              <Heading size="md" mb={2}>{post.title}</Heading>
              <Text fontSize="sm" color="gray.500" mb={2}>{post.date}</Text>
              <Text fontSize="md">{post.description}</Text>
              <Badge colorScheme="green" mt={2}>{post.college}</Badge>
            </Box>
            <Spacer />
            <IconButton aria-label="Like" icon={<FaHeart />} />
          </Flex>
        </Box>
      ))}
    </Box>
  );
};

export default Feed;