const router = require('express').Router();

const {create, createMany, findAll, findOne, update, updateMany, delete: deleteModel, deleteMany} = require('../controllers/role_controller');

router.post('/create', create);
router.post('/createMany', createMany);
router.get('/findAll', findAll);
router.get('/findOne/:id', findOne);
router.put('/update/:id', update);
router.put('/updateMany', updateMany);
router.delete('/delete/:id', deleteModel);
router.delete('/deleteMany', deleteMany);

module.exports = router;



