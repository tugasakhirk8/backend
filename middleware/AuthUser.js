import Users from "../models/UserModel.js";

export const verifyUser = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({ msg: "Mohon login ke akun anda" });
    }
    const users = await Users.findOne({
        where: {
            uuid: token
        }
    });
    if (!users) return res.status(404).json({ msg: "User tidak Ditemukan" });
    req.userId = users.id;
    req.role = users.role;
    next();
}

export const adminOnly = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader.split(' ')[1];
    const users = await Users.findOne({
        where: {
            uuid: token
        }
    });
    if (!users) return res.status(404).json({ msg: "User tidak Ditemukan" });
    if (users.role !== "admin") return res.status(403).json({ msg: "Akses Terlarang" });
    next();
}