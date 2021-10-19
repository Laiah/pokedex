import { Tooltip, Image } from "@chakra-ui/react";

export const Types = {
    water: {
        color: '#b5dcff',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Pok%C3%A9mon_Water_Type_Icon.svg/50px-Pok%C3%A9mon_Water_Type_Icon.svg.png'
    },
    fire: {
        color: '#ff9f94',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Pok%C3%A9mon_Fire_Type_Icon.svg/50px-Pok%C3%A9mon_Fire_Type_Icon.svg.png'
    },
    grass: {
        color: '#c2e6aa',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Pok%C3%A9mon_Grass_Type_Icon.svg/50px-Pok%C3%A9mon_Grass_Type_Icon.svg.png'
    },
    normal: {
        color: '#dcdeca',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Pok%C3%A9mon_Normal_Type_Icon.svg/50px-Pok%C3%A9mon_Normal_Type_Icon.svg.png'
    },
    flying: {
        color: '#abc6ff',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Pok%C3%A9mon_Flying_Type_Icon.svg/50px-Pok%C3%A9mon_Flying_Type_Icon.svg.png'
    },
    poison: {
        color: '#b888b2',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Pok%C3%A9mon_Poison_Type_Icon.svg/50px-Pok%C3%A9mon_Poison_Type_Icon.svg.png'
    },
    fairy: {
        color: '#fccfff',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Pok%C3%A9mon_Fairy_Type_Icon.svg/50px-Pok%C3%A9mon_Fairy_Type_Icon.svg.png'
    },
    psychic: {
        color: '#fa96cc',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Pok%C3%A9mon_Psychic_Type_Icon.svg/50px-Pok%C3%A9mon_Psychic_Type_Icon.svg.png'
    },
    steel: {
        color: '#c4c2da',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Pok%C3%A9mon_Steel_Type_Icon.svg/50px-Pok%C3%A9mon_Steel_Type_Icon.svg.png'
    },
    dragon: {
        color: '#b4a6ff',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Pok%C3%A9mon_Dragon_Type_Icon.svg/50px-Pok%C3%A9mon_Dragon_Type_Icon.svg.png'
    },
    bug: {
        color: '#c8d162',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Pok%C3%A9mon_Bug_Type_Icon.svg/50px-Pok%C3%A9mon_Bug_Type_Icon.svg.png'
    },
    electric: {
        color: '#faea78',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Pok%C3%A9mon_Electric_Type_Icon.svg/50px-Pok%C3%A9mon_Electric_Type_Icon.svg.png'
    },
    ice: {
        color: '#baf6ff',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Pok%C3%A9mon_Ice_Type_Icon.svg/50px-Pok%C3%A9mon_Ice_Type_Icon.svg.png'
    },
    fighting: {
        color: '#b87e72',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Pok%C3%A9mon_Fighting_Type_Icon.svg/50px-Pok%C3%A9mon_Fighting_Type_Icon.svg.png'
    },
    ground: {
        color: '#e3cb7b',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Pok%C3%A9mon_Ground_Type_Icon.svg/50px-Pok%C3%A9mon_Ground_Type_Icon.svg.png'
    },
    dark: {
        color: '#756961',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Pok%C3%A9mon_Dark_Type_Icon.svg/50px-Pok%C3%A9mon_Dark_Type_Icon.svg.png'
    },
    rock: {
        color: '#ccbf89',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Pok%C3%A9mon_Rock_Type_Icon.svg/50px-Pok%C3%A9mon_Rock_Type_Icon.svg.png'
    },
    ghost: {
        color: '#aba9d9',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pok%C3%A9mon_Ghost_Type_Icon.svg/50px-Pok%C3%A9mon_Ghost_Type_Icon.svg.png'
    },
};

export const getTypesNames = (types) => {
    if (types.length === 1) {
        return types[0].type.name;
    }

    return types[0].type.name+ " and " + types[1].type.name;
}

export const colorTypeGradients = (types) => {
    const hasMultipleTypes = types.length === 2;
    const firstType = types[0].type.name;
    const firstColor = Types[firstType].color;

    if (!hasMultipleTypes) {
        return ['to-b', firstColor, firstColor];
    }

    const secondType = types[1].type.name;
    const secondColor = Types[secondType].color;

    return ['to-b', secondColor, firstColor+' 40%', firstColor+' 60%', secondColor];
}

const PokeTypes = props => {
    return (
        props.types.map(function(type) {
            return (
                <Tooltip label={type.type.name} key={type.type.name} >
                    <Image src={Types[type.type.name].icon} boxSize="20px" mr="5px" />
                </Tooltip>
            );
        })
    );
}

export default PokeTypes;