import express from 'express';
import userRoutes from './users';
import listingRoutes from './listings';

const router = express.Router();

// main paths
router.use('/hosts', userRoutes);
router.use('/listings', listingRoutes);

export default function getRouter() {
  return router;
}
