const express = require('express');
const router = express.Router();

const ProductsController = require('../controllers/products.controller');
// const authMiddleware = require("../middlewares/auth-middleware");

const productsController = new ProductsController();

// 중고거래 상품 생성
router.post('/', productsController.createProduct);

// 중고거래 상품 전체 조회
router.get('/', productsController.getAllProduct);

// 중고거래 상품 상세 조회
router.get('/:product_id', productsController.getOneProduct);

// 중고거래 상품 수정
router.patch('/:product_id', productsController.updateProduct);

// 중고거래 상품 삭제
router.delete('/:product_id', productsController.deleteProduct);

// 중고거래 상품 거래 완료
// router.post('/product_id/sold', productsController.soldProduct);

// 중고거래 상품 거래 검색
// router.get('/search', productsController.searchProduct);

// 관련 게시물 조회
// router.get("?category=:category", productsController.relatedProduct);

module.exports = router;
