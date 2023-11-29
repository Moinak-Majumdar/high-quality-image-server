import express from 'express';
import latest from '../controller/latest';
import editorsChoice from '../controller/editorsChoice';
import trending from '../controller/trending';
import categorized from '../controller/categorized';
import _fullImage from '../controller/_fullImage';

const router = express.Router();

router.get('/latest', latest);

router.get('/editorsChoice', editorsChoice);

router.get('/trending', trending);
router.get('/initial', trending);

router.get('/categorized', categorized);

router.get('/fullImage', _fullImage);


export default router;