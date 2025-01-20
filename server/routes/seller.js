
import express from 'express'
import { addProduct, addProductsFromFile, getTemplateByCategory, loginSeller, registerSeller,viewSProduct, removeProduct, updateProduct, sellerData } from '../controllers/seller.js'
import multer from 'multer'

const upload = multer({ dest: 'uploads/' });
const router = express.Router()

router.post('/sellerinfo', sellerData )
router.post('/viewsproducts', viewSProduct )
router.post('/register', registerSeller)
router.post('/login', loginSeller)
router.post('/addproduct', addProduct)
router.post('/gettemplate', getTemplateByCategory)
router.post('/updateproduct', updateProduct)
router.post('/removeproduct', removeProduct)
router.post('/addproductsfile', upload.single('file'), addProductsFromFile);

export default router
