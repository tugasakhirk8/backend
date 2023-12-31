import Users from "../models/UserModel.js";
import argon2 from "argon2";

export const Login = async (req, res) => {
    try {

        // Check if the 'name' field is provided in the request body
        if (!req.body.name) {
            return res.status(400).json({ error: "Please provide a 'name' in the request body" });
        }

        const users = await Users.findOne({
            where: {
                name: req.body.name
            }
        });

        if (!users) {
            return res.status(404).json({ error: "User tidak Ditemukan" });
        }

        const match = await argon2.verify(users.password, req.body.password);

        if (!match) {
            return res.status(400).json({ error: "Wrong Password" });
        }

        req.session.userId = users.uuid;
        const { uuid, name, role } = users;

        const sessionID = req.sessionID;
        res.status(200).json({ uuid, name, role, sessionID });
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};




export const Me = async(req, res) =>{
    if(!req.session.userId){
        return res.status(401).json({msg:"Mohon login ke akun anda"});
    }
    const users = await Users.findOne({
        attributes:['uuid','name','role'],
        where:{
            uuid: req.session.userId
        }
    });
    if(!users) return res.status(404).json({msg:"User tidak Ditemukan"});
    res.status(200).json(users);
}

export const LogOut = (req, res) =>{
    req.session.destroy((err) =>{
        if(err) return res.status(400).json({msg: "Tidak dapat Logout"});
        res.status(200).json({msg:"Anda telah Logout"});
    });
}