const resolvers = {
    Query: {
        pokemons: async (parent, args, context, info) => {
            console.log('pokemons')
        },
        pokemon: async (parent, args, context, info) => {
            console.log('pokemon')
        },
        trainers: async (parent, args, context, info) => {
            console.log('trainers')
        },
        trainer: async (parent, args, context, info) => {
            console.log('trainer')
        },
    },
}

module.exports = resolvers