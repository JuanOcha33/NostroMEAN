import {Router} from 'express';

const router = Router();

import {createPhoto, getPhotos, getPhoto, deletePhoto, updatePhoto, getTitle } from '../controllers/photo.controller'

import multer from '../lib/multer'

router.route('/photos')
.get(getPhotos)
.post(multer.single('image'), createPhoto);

router.route('/photos/:id')
.get(getPhoto)
.delete(deletePhoto)
.put(updatePhoto);


router.route('/photos/titulo/:title')
.get(getTitle);


export default router;