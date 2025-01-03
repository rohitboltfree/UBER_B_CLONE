const  express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth.middleware');
const mapController = require('../controlers/map.controller');

const { query } = require('express-validator')


router.get('/get-coordinates',
     query('address').isString().isLength({min:3}),
      authMiddleware.authUser,
      mapController.getCoordinates);

router.get('/get-distance-time',
    [
        query('origin').isString().isLength({min:3}),
    query('destination').isString().isLength({min:3}),
    authMiddleware.authUser,
    mapController.getDistance
    ]
);

router.get('/get-place-suggestions',
    [
        query('input').isString().isLength({min:1}),
        authMiddleware.authUser,
        mapController.getPlaceSuggestions
    ]
) 

module.exports = router;