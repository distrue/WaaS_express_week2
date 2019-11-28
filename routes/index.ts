import express from 'express';
var router = express.Router();
import eat from '../controller/eat';
import {getDiet} from '../controller/diet';

router.get('/', async function(req, res, next) {
  // return res.send(eat(req.query.date, req.query.time));
  try {
    const ans = await getDiet;
    return res.send(ans)
  } catch(err) {
    console.log(err); 
    return res.send("error occured");
  }
});

export default router;
