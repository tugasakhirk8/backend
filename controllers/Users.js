import Users from "../models/UserModel.js";
import argon2 from "argon2";

export const getUsers = async(req, res) => {
    try {
        const response = await Users.findAll({
            attributes:['uuid','name','role']
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getUserById = async(req, res) => {
    try {
        const response = await Users.findOne({
            attributes:['uuid','name','role'],
            where: {
                uuid: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const createUser = async(req, res) => {
    const {name, password, confPassword, role} = req.body;
    if(password !== confPassword) return res.status(400).json({msg: "Password dan Confirm Password tidak sama"});
    const hashPassword = await argon2.hash(password);
    try {
        await Users.create({
            name: name,
            password: hashPassword,
            role: role
        });
        res.status(201).json({msg: "Registrasi Berhasil"});
    } catch (error) {
        res.status(400).json({msg: error.message}); 
    }
}

export const updateUser = async(req, res) => {
    const users = await Users.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if(!Users) return res.status(404).json({msg: "User tidak ditemukan"});
    const {name, password, confPassword, role} = req.body;
    let hashPassword;
    if(password === "" || password == null){
        hashPassword = Users.password
    }else{
        hashPassword = await argon2.hash(password);
    }
    if(password !== confPassword) return res.status(400).json({msg: "Password dan Confirm Password tidak sama"});
    try {
        await Users.update({
            name: name,
            password: hashPassword,
            role: role
        },{
            where:{
                id: users.id
            }
        });
        res.status(201).json({msg: "User Updated"});
    } catch (error) {
        res.status(400).json({msg: error.message}); 
    }
}

export const deleteUser = async(req, res) => {
    const users = await Users.findOne({
        where: {
            uuid: req.params.id
        },
    });
    if(!Users) return res.status(404).json({msg: "User tidak ditemukan"});
    try {
        await Users.destroy({
            where:{
                id: users.id
            }
        });
        res.status(200).json({msg: "User deleted"});
    } catch (error) {
        res.status(400).json({msg: error.message}); 
    }
}
