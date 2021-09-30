import { Tooltip, Image } from "@chakra-ui/react";

const Types = {
    water: {
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Pok%C3%A9mon_Water_Type_Icon.svg/50px-Pok%C3%A9mon_Water_Type_Icon.svg.png'
    },
    fire: {
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Pok%C3%A9mon_Fire_Type_Icon.svg/50px-Pok%C3%A9mon_Fire_Type_Icon.svg.png'
    },
    grass: {
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Pok%C3%A9mon_Grass_Type_Icon.svg/50px-Pok%C3%A9mon_Grass_Type_Icon.svg.png'
    },
    normal: {
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Pok%C3%A9mon_Normal_Type_Icon.svg/50px-Pok%C3%A9mon_Normal_Type_Icon.svg.png'
    },
    flying: {
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Pok%C3%A9mon_Flying_Type_Icon.svg/50px-Pok%C3%A9mon_Flying_Type_Icon.svg.png'
    },
    poison: {
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Pok%C3%A9mon_Poison_Type_Icon.svg/50px-Pok%C3%A9mon_Poison_Type_Icon.svg.png'
    },
    fairy: {
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Pok%C3%A9mon_Fairy_Type_Icon.svg/50px-Pok%C3%A9mon_Fairy_Type_Icon.svg.png'
    },
    psychic: {
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Pok%C3%A9mon_Psychic_Type_Icon.svg/50px-Pok%C3%A9mon_Psychic_Type_Icon.svg.png'
    },
    steel: {
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Pok%C3%A9mon_Steel_Type_Icon.svg/50px-Pok%C3%A9mon_Steel_Type_Icon.svg.png'
    },
    dragon: {
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Pok%C3%A9mon_Dragon_Type_Icon.svg/50px-Pok%C3%A9mon_Dragon_Type_Icon.svg.png'
    },
    bug: {
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Pok%C3%A9mon_Bug_Type_Icon.svg/50px-Pok%C3%A9mon_Bug_Type_Icon.svg.png'
    },
    electric: {
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Pok%C3%A9mon_Electric_Type_Icon.svg/50px-Pok%C3%A9mon_Electric_Type_Icon.svg.png'
    },
    ice: {
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Pok%C3%A9mon_Ice_Type_Icon.svg/50px-Pok%C3%A9mon_Ice_Type_Icon.svg.png'
    },
    fighting: {
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Pok%C3%A9mon_Fighting_Type_Icon.svg/50px-Pok%C3%A9mon_Fighting_Type_Icon.svg.png'
    },
    ground: {
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Pok%C3%A9mon_Ground_Type_Icon.svg/50px-Pok%C3%A9mon_Ground_Type_Icon.svg.png'
    },
    dark: {
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Pok%C3%A9mon_Dark_Type_Icon.svg/50px-Pok%C3%A9mon_Dark_Type_Icon.svg.png'
    },
    rock: {
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Pok%C3%A9mon_Rock_Type_Icon.svg/50px-Pok%C3%A9mon_Rock_Type_Icon.svg.png'
    },
    ghost: {
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pok%C3%A9mon_Ghost_Type_Icon.svg/50px-Pok%C3%A9mon_Ghost_Type_Icon.svg.png'
    },
};

const PokeTypes = props => {
    return (
        props.types.map(function(type) {
            return (
                <Tooltip label={type.type.name}>
                    <Image src={Types[type.type.name].icon} boxSize="20px" />
                </Tooltip>
            );
        })
    );
}

export default PokeTypes;