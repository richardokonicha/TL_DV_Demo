import { HamburgerIcon } from '@chakra-ui/icons'
import {
    Avatar, Button, HStack, Spacer,
} from '@chakra-ui/react'
import { Link } from "react-router-dom"

export default function Nav() {
    return (
        <HStack px={[0, 4]} shadow="md" h={14}>
            <Button as={Link} to="/" leftIcon={<HamburgerIcon />} colorScheme='gray' variant='solid'>
                Home
            </Button>
            <Spacer />
            <Avatar name="Foot print" colorScheme="blackAlpha" size="xs" />
        </HStack>
    )
}