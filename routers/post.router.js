const { Router } = require("express");
const postRouter = Router();

const { isLogin } = require("../middlewares/userAuth.middleware");
const { imageUpload } = require("../middlewares/fileUpload.middleware");
const { postInput } = require("../middlewares/postInput.middleware");
const {
  myPost,
  likePost,
  editPost,
  editPostPage,
  deletePost,
  addPost,
  addPostpage,
  addComment,
  deleteComment,
  editCommentPage,
  editComment,
} = require("../controllers/post.controller");

postRouter.get("/addPost", isLogin, myPost);
postRouter.get("/addpostpage", isLogin, addPost);

postRouter.post("/addpostpage", isLogin, imageUpload, postInput, addPostpage);

postRouter.post("/addComment/:id", isLogin, addComment);

postRouter.get("/likePost/:id", isLogin, likePost);
postRouter.get("/editPost/:id", isLogin, editPost);
postRouter.get("/deletePost/:id", isLogin, deletePost);

postRouter.get("/editComment/:id", isLogin, editCommentPage);
postRouter.post("/editComment/:id", isLogin, editComment);
postRouter.get("/deleteComment/:id", isLogin, deleteComment);

postRouter.post("/editPost/:id", isLogin, imageUpload, postInput, editCommentPage);

module.exports = { postRouter };
