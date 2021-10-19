import { Box, Heading, Image, Flex, Text, Spacer, useDisclosure } from "@chakra-ui/react";
import PokeTypes, { colorTypeGradients } from "./Types";
import InfoModal from './InfoModal.js';

const PokeCard = props => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const sprites = {
        front : {
            default: props.pokemon.sprites.front_default,
            shiny: props.pokemon.sprites.front_shiny
        },
        back: {
            default: props.pokemon.sprites.back_default,
            shiny: props.pokemon.sprites.back_shiny
        }
    }

    let front = !props.isShinyModeOn ? sprites.front.shiny : sprites.front.default;
    let back = !props.isShinyModeOn ? sprites.back.shiny : sprites.back.default;

    return (
        <Box bgGradient={`linear(${colorTypeGradients(props.pokemon.types)});`} boxShadow="md"
            borderRadius="lg"  display="flex" flexDir="column"
            p="6" w="250px" h="350px" 
            m="auto" mb="15px"
            onClick={onOpen}
        >
            <Flex>
                <PokeTypes types={props.pokemon.types}/>
                <Spacer />
                <Text fontWeight="bold" fontSize="2xl" fontFamily="mono">
                    #{("00" + props.pokemon.id).slice (-3)}
                </Text>
            </Flex>
            <Image src={front} boxSize="150px" m="auto" alignSelf="center"
                onMouseOver={e => (e.currentTarget.src = back)}
                onMouseOut={e => (e.currentTarget.src = front)}
            />
            <Heading textAlign="center" fontFamily="mono" size="lg">{props.pokemon.name}</Heading>
            <InfoModal pokemon={props.pokemon} isOpen={isOpen} onClose={onClose} />
        </Box>
    );
}

export default PokeCard;