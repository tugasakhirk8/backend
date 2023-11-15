import Absent from "../models/AbsentModel.js";
import Users from "../models/UserModel.js";

export const getAbsents = async(req, res) => {
    try{
        let response;
        if(req.role === "admin"){
            response = await Absent.findAll({
                attributes: ['uuid','date','absent'],
                include:[{
                    model: Users,
                    attributes: ['name']
                }]
            });
        } else{
            response = await Absent.findAll({
                attributes: ['uuid','date','absent'],
                where:{
                    userId: req.userId
                },
                include:[{
                    model: Users,
                    attributes: ['name']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getAbsentByAbsentId = async(req, res) => {
    try{
        const absent = await Absent.findOne({
            where:{
                uuid: req.params.id
            }
        });
        if(!absent) return res.status(404).json({msg: "data tidak ditemukan"});
        let response;
        if(req.role === "admin"){
            response = await Absent.findOne({
                attributes: ['uuid','date','absent'],
                where:{
                    id: absent.id
                },
                include:[{
                    model: Users,
                    attributes: ['name']
                }]
            });
        } else{
            response = await Absent.findOne({
                attributes: ['uuid','date','absent'],
                where:{
                    userId: req.userId
                },
                include:[{
                    model: Users,
                    attributes: ['name']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const createAbsent = async(req, res) => {
    const {date, absent} = req.body;
    try{
        await Absent.create({
            date: date,
            absent: absent,
            userId: req.userId
        });
        res.status(201).json({msg:"Absent sudah terinput"});
    } catch (error){
        res.status(500).json({msg: error.message});
    }
}
