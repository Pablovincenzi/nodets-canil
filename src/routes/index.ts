import { Router } from "express";
import * as PageController from '../controllers/pageController'
import * as SearchController from '../controllers/pageController'

const router = Router();

router.get('/',PageController.home)
router.get('/dogs',PageController.dogs)
router.get('/dogs',PageController.cats)
router.get('/dogs',PageController.fishes)
router.get('/search',PageController.fishes)

export default router;