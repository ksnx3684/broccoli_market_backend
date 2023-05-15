const { Products, Likes } = require("../models");

class LikeRepository {
  /* Product 존재확인용 */
  existProduct = async (product_id) => {
    const existProduct = await Products.findByPk(product_id);
    return existProduct;
  };
  /* like_id 존재확인용 */
  existLikeId = async (user_id, product_id) => {
    const existLikeId = await Likes.findOne({
      where: { user_id, product_id },
    });
    return existLikeId;
  };
  A;
  /* ************************** */

  /* 관심 클릭시 likes_id 생성 */
  createLike = async (product_id, user_id) => {
    await Likes.create({
      where: {
        user_id: 1,
        product_id: 2,
      },
    });
  };
  /* likes_id 생성 시 Product의 likes +1 */
  likeUp = async (product_id) => {
    await Products.increment("likes", { where: { product_id } });
  };
  /* ************************** */

  /* 관심 취소시 likes_id 삭제 */
  deleteLike = async (product_id, user_id) => {
    await Likes.destroy({
      where: {
        user_id: 1,
        product_id: 2,
      },
    });
  };
  /* likes_id 삭제 시 Product의 likes -1 */
  likeDown = async (product_id) => {
    await Products.decrement("likes", {
      where: { product_id },
    });
  };
  /* ************************** */
}

module.exports = LikeRepository;
