import { useGetVideoByIdQuery, useUpdateVideoMutation } from "./api"
import { useParams } from "react-router-dom";
import "../node_modules/video-react/dist/video-react.css"
import { Player } from 'video-react';
import { Box, Heading, Tag, Switch, Progress, HStack, Spacer, Button, Text, Input, useToast, useDisclosure, Modal, ModalBody, ModalOverlay, ModalContent, ModalFooter, ModalCloseButton, ModalHeader } from "@chakra-ui/react"
import { EditIcon } from "@chakra-ui/icons";
import { Formik, Field, Form } from 'formik';

function Video() {
  const { id } = useParams();
  const { data, isLoading } = useGetVideoByIdQuery(id)

  console.log(data)
  return (
    <Box p={8}>
      <HStack mb={8}>
        <Heading >{data?.attributes.title}</Heading>
        <Tag size='md' variant="solid" colorScheme={data?.attributes.isPublic ? "blue" : "red"} px={4}>
          {data?.attributes.isPublic ? "Public" : "Private"}
        </Tag>
        <Spacer />
        <EditModal data={data} id={id} />

      </HStack>
      <Text mb={4}>{data?.attributes.slug}</Text>
      <Text mb={4}>{data?.attributes.url}</Text>
      <Progress isIndeterminate={isLoading} isAnimated />

      {data?.attributes?.url && <PlayerCard url={data?.attributes?.url} />}
    </Box>
  );
}
export default Video;


function PlayerCard({ url }) {
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


function EditModal({ data, id }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [updateVideo] = useUpdateVideoMutation()
  const toast = useToast()

  function handleEditVideo(values) {
    console.log(values)
    updateVideo({
      id,
      data: values
    }).unwrap()
      .then((payload) => {
        toast({
          title: 'Successfull edited',
          description: "We couldn't save your changes, try again!",
          status: 'success',
          duration: 2000,
          isClosable: true,
        })
      })
    onClose()
  }
  return (
    <>
      <Button leftIcon={<EditIcon />} colorScheme='gray' variant='solid' onClick={onOpen}>Edit Video</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <Formik
            initialValues={{
              title: data?.attributes.title || "",
              slug: data?.attributes.slug || "",
              url: data?.attributes.url || "",
              isPublic: data?.attributes.isPublic || false
            }}
            onSubmit={async (values) => {
              handleEditVideo(values)
            }}
          >
            {({
              errors,
              touched,
              values,
              handleSubmit,
              setFieldValue,
              isSubmitting
            }) => (
              <Form>
                <ModalHeader>Edit Video</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Input as={Field} name="title" placeholder="title" mb={4} />
                  {errors.title && touched.title && <div>{errors.title}</div>}

                  <Input as={Field} name="slug" placeholder="slug" mb={4} />
                  {errors.slug && touched.slug && <div>{errors.slug}</div>}

                  <Input as={Field} name="url" placeholder="Url" mb={4} />
                  {errors.url && touched.url && <div>{errors.url}</div>}
                  <Switch
                    name="isPublic"
                    isChecked={values.isPublic}
                    onChange={(event, checked) => {
                      setFieldValue("isPublic", values.isPublic ? false : true);
                    }}
                  />
                </ModalBody>
                <ModalFooter>
                  <Button colorScheme='blue' mr={3} onClick={onClose}>
                    Close
                  </Button>
                  <Button variant='ghost' type="submit" >Save Video</Button>
                </ModalFooter>
              </Form>
            )}
          </Formik>
        </ModalContent>
      </Modal>
    </>
  )
}

