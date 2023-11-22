import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import db from "./config/Database.js";
import SequlizeStore from "connect-session-sequelize";
import UserRoute from "./routes/UserRoute.js";
import AbsentRoute from "./routes/AbsentRoute.js";
import AuthRoute from "./routes/AuthRoute.js";
dotenv.config();

const app = express();

const sessionStore = SequlizeStore(session.Store);

const store = new sessionStore({
    db: db
});

app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
        secure: 'auto'
    }
}));

// (async() =>{
//     await db.sync();
// })();

app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: 'auto'
    }
}));

app.use(cors({
    credentials: true,
    origin: '*',
    header: 'access'
}));
app.use(express.json());
app.use(UserRoute);
app.use(AbsentRoute);
app.use(AuthRoute);

// store.sync();

app.listen(process.env.APP_PORT, ()=>{
    console.log('Server sudah berhasil jalan');
});