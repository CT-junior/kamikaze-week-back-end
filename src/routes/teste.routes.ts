import Router from "express";

const hello = Router();

hello.get('/hello', (req, res)=>{
    return res.json({message: "OK"});
});

export { hello };