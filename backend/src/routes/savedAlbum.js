import express from 'express'
import * as  savedAlbumController from "../controllers/savedAlbum.js"
import { savedAlbumValidate } from '../validators/savedAlbumValidate.js'
const router = express.Router()
router.post('/',savedAlbumValidate.add(),savedAlbumController.addSavedAlbum)
router.get('/',savedAlbumValidate.get(),savedAlbumController.getSavedAlbums)
router.get('/sharedUrl',savedAlbumValidate.getShareLink(),savedAlbumController.getShareLink)
router.get('/SavedBySharedUrl',savedAlbumValidate.getSavedAlbumByShareLink(),savedAlbumController.getSavedAlbumByShareLink)
router.get('/:id',savedAlbumValidate.getOne(),savedAlbumController.getSavedAlbum)
router.put('/',savedAlbumValidate.update(),savedAlbumController.updateSavedAlbum)
router.delete('/',savedAlbumValidate.drop(),savedAlbumController.deleteSavedAlbum)
export default router;