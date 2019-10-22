const graphql = require('graphql')
const register = require('../models/register.model');
const courses = require('../models/courses.model');

const _ = require('lodash');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
} = graphql;

const ProfileType = new GraphQLObjectType({
  name: `Users`,
  fields: () => ({
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    type: { type: GraphQLString },
    phoneNumber: { type: GraphQLInt },
    city: { type: GraphQLString },
    country: { type: GraphQLString },
    hometown: { type: GraphQLString },
    language: { type: GraphQLString },
    gender: {type: GraphQLString},
    aboutMe: { type: GraphQLString }
  })
});


const courseType = new GraphQLObjectType({
    name: `Course`,
    fields: () => ({
       
        fa_mail: { type: GraphQLString },
        courseID: { type: GraphQLString },
        courseNumber: { type: GraphQLString },
        courseDept: { type: GraphQLInt },
        courseRoom: { type: GraphQLString },
        courseCapacity: { type: GraphQLString },
        waitlistCapacity: { type: GraphQLString },
        courseTerm: { type: GraphQLString },
    
    })
});

const LoginType = new GraphQLObjectType({
  name: `login`,
  fields: () => ({
    email: { type: GraphQLString },
    type: { type: GraphQLString }
  })
});


const courseType = 

const RegisterType = new GraphQLObjectType({
    name: `register`,
    fields: () => ({
        password: {
            type: GraphQLString
        },
        name: {
            type: GraphQLString
        },
        email: {
            type: GraphQLString
        },
        type: {
            type: GraphQLString
        },
    })
});


const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    login: {
      type: LoginType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        type: { type: GraphQLString }
      },
      async resolve(parent, args) {
        console.log(`args`);
        console.log(args);
        return new Promise(async (resolve, reject) => {
          await register.findOne(
            { email: args.email, type: args.type },
            result => {
              resolve({
                success: true,
                email: result.email,
                type: result.type
              });
            },
            error => {
              resolve({ success: false, message: "User Not Found" });
            }
          );
        });
      }
    },
    register: {
      type: register,
      args: {
        password: {
          type: GraphQLString
        },
        name: {
          type: GraphQLString
        },
        email: {
          type: GraphQLString
        },
        type: {
          type: GraphQLString
        }
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
        register: {
            type: RegisterType,
            args: {
            
                password: {
                    type: GraphQLString
                },
                name: {
                    type: GraphQLString
                },
                email: {
                    type: GraphQLString
                },
                type: {
                    type: GraphQLString
                },
            },
            
            resolve(parent, args){
                let userRegister = new register({
                    email: args.email,
                    password: args.password,
                    type: args.type
                })
            
              userRegister.save();
            }
        }
    })

});



export default {
  type: ProfileType,
  args: {
    email: {
      name: "email",
      type: new GraphQLNonNull()
    },
    data: {
      name: "data",
      type: new GraphQLNonNull(userInputType)
    }
  },
  resolve(parent, args) {
    return register.findOneAndUpdate(
      args.id,
      { $set: { ...args.data } },
      { new: true }
    ).catch(err => new Error("Couldn't Update User data, ", err));
  }
};

resolve(parent, args){}
    let course = new course({
       data: args.data
    })

    course.save();
}


resolve(parent, args)

    return course.find(
        args.id,
        { $set: { ...args.data } },
        { new: true }
    ).catch(err => new Error("Coudn't find courses ", err));
}
}

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})