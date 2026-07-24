const express = require('express');
const musicController = require('../controllers/music.controller')
const authMiddlewaer = require('../middlewares/auth.middlewear')
const multer = require('multer');


const upload = multer({
    storage: multer.memoryStorage()
})

const router = express.Router();

router.post('/upload', authMiddlewaer.authArtist, upload.single("music") , musicController.createMusic)
router.post('/album',authMiddlewaer.authArtist, musicController.createAlbum)
router.get('/', authMiddlewaer.authUser, musicController.getAllMusics)
router.get('/albums', authMiddlewaer.authUser, musicController.getAllAlbums)
router.get('/albums/albumId', authMiddlewaer.authUser, musicController.getAlbumById)

module.exports = router;