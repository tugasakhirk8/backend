import express from "express";
import{
    getAbsents,
    getAbsentByAbsentId,
    createAbsent
} from "../controllers/Absent.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/absent', verifyUser,getAbsents);
router.get('/absent/:id', verifyUser,getAbsentByAbsentId);
router.post('/absent', verifyUser,createAbsent);

export default router;