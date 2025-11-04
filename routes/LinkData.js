import express from "express"
import {saveLink, checkLink} from "../controllers/LinkControllers.js"

const router = express.Router();

router.get('/:id',checkLink);
router.post('/',saveLink);


export default router;