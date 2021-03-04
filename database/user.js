var mongoose = require("./connect");
var USERSCHEMA = new mongoose.Schema({
    foto: {
        type: String,
        default: "Sin Foto"
    },
    nombre: {
        type: String,
        required: [true, "El nombre es necesario"]
    },
    email: {
        type: String,
        required: [true, "El email es necesario"],
        validate: {
            validator: (value) => {
                return /^[\w\.]+@[\w\.]+\.\w{3,3}$/.test(value);
            },
            message: props => `${props.value} no es valido`
        }
        
    },
    password: {
        type: String,
        required: [true, "El password es necesario"],
    },
    roles: {
        type: Array,
        default: []
    }
});
var USER = mongoose.model("user", USERSCHEMA);
module.exports = USER;