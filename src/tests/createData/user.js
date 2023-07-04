const User = require("../../models/User")

const user = async()=> {

    const userCreate = {
            firstName: "kevin",
            lastName: "burgos",
            email: "kevincamilo.ferrerrodelo@gmail.com",
            password: "kevinfer258",
            phone: "3187222666"
    }
    
    await User.create(userCreate)
}

module.exports = user