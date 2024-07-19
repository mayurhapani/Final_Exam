const { Router } = require("express");
const router = Router();

const { isLogin } = require("../middlewares/userAuth.middleware");
const { userInput } = require("../middlewares/userInput.middleware");

const { imageUpload } = require("../middlewares/fileUpload.middleware");
const {
  addUser,
  addUserPage,
  login,
  loginAuth,
  logout,
  edituser,
  editUserPage,
  allBlogs,
  myblogs,
  deleteuser,
  adminPanel,
} = require("../controllers/user.controller");

router.get("/", isLogin, allBlogs);
router.get("/adminPanel", isLogin, adminPanel);

router.get("/login", login);
router.post("/login", loginAuth);

router.get("/addUser", addUser);
router.post("/addUser", imageUpload, userInput, addUserPage);

router.get("/edituser", isLogin, edituser);
router.post("/editeduser", isLogin, imageUpload, userInput, editUserPage);

router.get("/deleteUser", isLogin, deleteuser);

router.get("/myblogs", isLogin, myblogs);

router.get("/logout", logout);

module.exports = { router };
