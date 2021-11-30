import logo from './logo.svg';
import { useGetVideosQuery } from "./api"
import { Box, Flex, Modal, useToast, IconButton, useDisclosure, Center, Spacer, Tag, Text, HStack, Progress, Button, Input } from '@chakra-ui/react';
import { Link } from "react-router-dom";


function Videos() {
    const { data, error, isLoading } = useGetVideosQuery()
  
    console.log(data)
  
    return (
      <Box>
        <Progress isIndeterminate={isLoading} isAnimated />
        <Flex mt={8} p={4}  flexWrap='wrap'>
          {error ? (
            <>Oh no, there was an error</>
          ) : isLoading ? (
            <>Loading...</>
          ) : data ? (
            <>
              {
                data.map((video, i) => (
                  <Link key={i} to={`/${i}`} >
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
                          <Text fontSize="md" textTransform="capitalize">{video?.attributes.name}</Text>
                          <Spacer />
                          <Tag size='sm' variant="solid" colorScheme="blueprint">
                              Live
                          </Tag>
                      </HStack>
                      <Spacer />
                      <Text mb={1} fontSize="xs">{video?.attributes.slug}</Text>
                      <Text color="gray.500" fontSize="xs">Created on 6/6/78</Text>
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