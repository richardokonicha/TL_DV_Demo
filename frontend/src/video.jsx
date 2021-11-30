import { useGetVideoByIdQuery } from "./api"
import { useParams } from "react-router-dom";
import "../node_modules/video-react/dist/video-react.css"
import { Player } from 'video-react';
import { Box, Heading, Tag, HStack, Spacer, Button } from "@chakra-ui/react"
import { EditIcon } from "@chakra-ui/icons";

function Video() {
    const { id } = useParams();
    const { data, error, isLoading } = useGetVideoByIdQuery(id)
    console.log(data)
    return (
      <Box p={8}>
          <HStack mb={8}>
          <Heading >{data?.attributes.title}</Heading>
          <Tag size='md' variant="solid" colorScheme={data?.attributes.isPublic ? "blue" : "red"} px={4}>
            {data?.attributes.isPublic ? "Public" : "Private"}
          </Tag>
          <Spacer/>
    
          <Button leftIcon={<EditIcon />} colorScheme='gray' variant='solid'>
            Edit Video
        </Button>
          </HStack>
          {data?.attributes?.url && <PlayerCard url={data?.attributes?.url}/>}
      </Box>
    );
  }
export default Video;


function PlayerCard({url}) {
    console.log(url)
    return (
      <Box boxShadow='dark-lg' p='6' rounded='md' bg='white' >
          <Player
          fluid
        //    poster={logo}
           >
               <source src={url} />
          </Player>   
          
      </Box>
    );
  }


