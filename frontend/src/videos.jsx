import { useGetVideosQuery } from "./api"
import { Box, Flex, Spacer, Tag, Text, HStack, Progress } from '@chakra-ui/react';
import { Link } from "react-router-dom";


function Videos() {
  const { data, error, isLoading } = useGetVideosQuery()

  return (
    <Box>
      <Progress isIndeterminate={isLoading} isAnimated />
      <Flex mt={8} p={4} flexWrap='wrap'>
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          <>
            {
              data.map((video, i) => (
                <Link key={i} to={`/${video.id}`} >
                  <Box
                    boxShadow="md"
                    flexGrow={1}
                    minW={64}
                    m={4}
                    p={6}
                    rounded="xs"
                    bg="#F8F8F8"
                    _hover={{
                      background: "white",
                      color: "teal.500",
                    }}>
                    <HStack mb={14}>
                      <Text fontSize="md" textTransform="capitalize">{video?.attributes.title}</Text>
                      <Spacer />
                      <Tag size='sm' variant="solid" colorScheme="blueprint">
                        Live
                      </Tag>
                    </HStack>
                    <Spacer />
                    <Text mb={1} fontSize="xs">{video?.attributes.slug}</Text>
                    <Tag size='md' variant="solid" colorScheme={video?.attributes.isPublic ? "blue" : "red"} px={4}>
                      {video?.attributes.isPublic ? "Public" : "Private"}
                    </Tag>
                  </Box>
                </Link>
              ))
            }
          </>
        ) : null}
      </Flex>
    </Box>
  );
}
export default Videos;