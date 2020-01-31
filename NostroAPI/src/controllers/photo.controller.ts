import {Request, Response} from 'express'
import path from 'path'
import fs from 'fs-extra'

import Photo from '../models/Photos'

export async function getPhotos(req: Request, res: Response): Promise <Response> {
    const photos = await Photo.find();
   return res.json(photos);
}

export async function getPhoto(req: Request, res: Response): Promise <Response> {
   const photo = await Photo.findById(req.params.id);
   return res.json(photo);
}

export async function createPhoto(req: Request, res: Response): Promise <Response>{

   const {title, description } = req.body;
   
   const newPhoto = {
       title: title,
       description: description,
       imagePath: req.file.path  
   };
   const photo = new Photo(newPhoto);
   await photo.save();

    return res.json({
        message: 'Photo successfuly saved', 
        photo
    })
}

export async function deletePhoto(req: Request, res: Response): Promise <Response>{
    const photo = await Photo.findByIdAndRemove(req.params.id);
    if (photo){
       await fs.unlink(path.resolve(photo.imagePath))
    }
    return res.json({
        message: 'Archivo eliminado'
    })

}

export async function updatePhoto(req: Request, res: Response): Promise <Response>{
    const { id } = req.params;
    const {title, description} = req.body;

    const updatedPhoto = await Photo.findByIdAndUpdate(id, {
        title,
        description
    }, {new: true})

    return res.json({
        message: 'Actualizado correctamente',
        updatedPhoto
    });
}


export async function getTitle(req: Request, res: Response): Promise <Response>{
    
    const titulo = req.params.title;
    const photosTitle = await Photo.find({"title": titulo });
    
    return res.json(photosTitle);
}