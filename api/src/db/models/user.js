'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcrypt')

const SALT_ROUNDS= Number(process.env.SALT_ROUNDS)

console.log({ salt: SALT_ROUNDS})

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Todo, {
        foreignKey: "userId",
      });
    }

    static passwordCompare(password, hash){
      return new Promise((resolve, reject)=> {
        bcrypt.compare(password, hash, (err, result)=> {
          if(err) reject(err)
          resolve(result)
        })
      })
    }
  }
  User.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate: (user) => {
        return new Promise((resolve, reject) =>{
          bcrypt.hash(user.password, SALT_ROUNDS, (err, hash) => {
            if(err) reject(new Error("Authentication error")) ;
            user.password = hash;
            resolve()
          })
        })
      },
      afterCreate: (user) => {
        delete user.dataValues.password;
      }
    }
  });
  return User;
};