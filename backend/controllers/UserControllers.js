import User from "../models/UserModels.js";

//get user by id
export const getUsersById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.json(user)
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

//post users
export const saveUser = async (req, res) => {
    const user = new User(req.body);
    try {
        const inserteduser = await user.save();
        res.status(201).json(inserteduser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

//update users
export const updateUser = async (req, res) => {
    try {
        const updateduser = await User.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updateduser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

//delete users
export const deleteUser = async (req, res) => {
    try {
        const deleteduser = await User.deleteOne({_id:req.params.id});
        res.status(200).json(deleteduser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

//get and seacrh data
export const getUsers = async(req, res) =>{
    const page = parseInt(req.query.page) || 0;
    const limit = parseInt(req.query.limit) || 10;
    const search = req.query.search_query || "";
    console.log(search);
    const offset = limit * page;
    const totalRows = await User.count({name: search}); 
    const totalPage = Math.ceil(totalRows / limit);
    let result = await User.find();
    const rgx = new RegExp(search, 'i')
    result = result.filter(v => rgx.test(v.name) || rgx.test(v.nik))
    console.log(result)
    res.json({
        result: result,
        page: page,
        limit: limit,
        totalRows: totalRows,
        totalPage: totalPage
    });
}