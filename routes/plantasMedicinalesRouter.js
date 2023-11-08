import express from 'express';
import plantasMedicinalesController from '../controllers/plantasMedicinalesController.js';
import passport from '../middleware/verifyToken.js'

const plantasMedicinalesRouter = express.Router();

plantasMedicinalesRouter.get('/', plantasMedicinalesController.getAllPlantasMedicinales);
plantasMedicinalesRouter.get('/:id', plantasMedicinalesController.getPlantaMedicinalById);
plantasMedicinalesRouter.put('/:id', passport.authenticate('jwt', { session: false }), plantasMedicinalesController.updatePlantaMedicinal);
plantasMedicinalesRouter.post('/', passport.authenticate('jwt', { session: false }), plantasMedicinalesController.createPlantaMedicinal);
plantasMedicinalesRouter.delete('/:id', passport.authenticate('jwt', { session: false }), plantasMedicinalesController.deletePlantaMedicinal);