const router = require('express').Router();
const controllers = require('./controllers');

router.post('/', controllers.create);
router.get('/', controllers.getAll);
router.post('/:todoId', controllers.delete);
router.post('/:todoId/complete', controllers.complate);
router.post('/completeAll/:boolean', controllers.complateAll);

module.exports = router;