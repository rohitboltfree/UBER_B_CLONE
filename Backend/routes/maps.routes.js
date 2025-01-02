// const express  = require('express');
// const router = express.Router();
// const { query } = require('express-validator');
// const { routes } = require('../app');
// const authMiddleware = require('../middlewares/auth.middleware');
// const mapController = require('../controlers/map.controller');


// router.get('/get-coordinates',
//      query('address').isString().isLength().apply({min:3}),
//      authMiddleware.authUser, mapController) 

// module.exports = router ;

const express = require('express');
const router = express.Router();
const { query } = require('express-validator');
const authMiddleware = require('../middlewares/auth.middleware');
const mapController = require('../controllers/map.controller');

// Define the route with correct express-validator usage
router.get('/get-coordinates',
    query('address').isString().isLength({ min: 3 }),
    authMiddleware.authUser,
    mapController.getAddressCoordinate  // Ensure this points to a specific method
);

module.exports = router;
