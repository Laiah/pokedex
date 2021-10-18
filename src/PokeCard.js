import { Box, Heading, Image, Flex } from "@chakra-ui/react";
import PokeTypes from "./Types";

const PokeCard = props => {
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

    let front = props.isShinyModeOn ? sprites.front.shiny : sprites.front.default;
    let back = props.isShinyModeOn ? sprites.back.shiny : sprites.back.default;
    return (
        <Box borderWidth="1px" borderRadius="lg"  p="6" w="75%" h="250px">
            <Image src={front} boxSize="100px"
                onMouseOver={e => (e.currentTarget.src = back)}
                onMouseOut={e => (e.currentTarget.src = front)}
            />
            <Heading>{props.pokemon.name}</Heading>
            <Flex>
                <PokeTypes types={props.pokemon.types}/>
            </Flex>
        </Box>
    );
}

export default PokeCard;