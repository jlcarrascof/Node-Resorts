import { DataTypes } from 'sequelize'
import db from '../config/db.js'
import bcrypt from 'bcrypt'

const User = db.define('users', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    token: DataTypes.STRING,
    confirmado: DataTypes.BOOLEAN
}, {
        hooks: {
            beforeCreate: async function(user) {
                const salt = await bcrypt.genSalt(10)
                user.password = await bcrypt.hash(user.password, salt)
            }
        }
})

export default User
