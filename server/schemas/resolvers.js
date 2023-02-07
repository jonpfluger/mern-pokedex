const { Pokemon, Trainer } = require('../models')

const resolvers = {
    Query: {
        pokemons: async (parent, args, context, info) => {
            return await Pokemon.find()
        },
        pokemon: async (parent, args, context, info) => {
            return await Pokemon.findOne({ pokemonId: args.pokemonId })
        },
        trainers: async (parent, args, context, info) => {
            return await Trainer.find()
        },
        trainer: async (parent, args, context, info) => {
            return await Trainer.findById(args._id)
        },
    },
}

module.exports = resolvers