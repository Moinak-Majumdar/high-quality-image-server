import express from 'express';
import initial from '../controller/initial';
import editorsChoice from '../controller/editorsChoice';
import latest from '../controller/latest';
import categorized from '../controller/categorized';
import _fullImage from '../controller/_fullImage';

const router = express.Router();

router.get('/initial', initial);

router.get('/editorsChoice', editorsChoice);

router.get('/latest', latest);

router.get('/categorized', categorized);

router.get('/fullImage', _fullImage);


export default router;