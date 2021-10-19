import {
    Box,
    ModalContent,
    Modal,
    ModalOverlay,
    ModalCloseButton,
    Heading,
    Flex,
    Image,
    Text,
} from "@chakra-ui/react";
import { getTypesNames } from './Types';

const InfoModal = props => {
    const { isOpen, onClose, pokemon } = props;
    const description = `${pokemon.name} is a ${getTypesNames(pokemon.types)} type Pokemon. It measures ${pokemon.height /10} meters and weights ${pokemon.weight /10} kilograms.`;

    return (
        <Modal isOpen={isOpen} onClose={onClose} motionPreset="scale" size="xl">
            <ModalOverlay />
            <ModalContent>
                <Box p="6">
                    <Flex>
                        <Flex direction="column" mr="4">
                            <Heading mb="3">{pokemon.name}</Heading>
                            <Image src={pokemon.sprites.other.dream_world.front_default} boxSize="150px" alignSelf="center" />
                        </Flex>
                        <Box p="6" ml="4">
                            <Text fontFamily="mono">
                                {description}
                            </Text>
                        </Box>
                    </Flex>
                </Box>
                <ModalCloseButton />
            </ModalContent>
        </Modal>
    );
}

export default InfoModal;