const router = require("express").Router();
const authController = require("../../controllers/admin.controller/auth.controller");
const userController = require("../../controllers/user.controller");
const {adminMiddleware} =require("../../middleware/auth.middleware")
const multer = require("multer");
const upload = multer();

// auth
router.post("/register",adminMiddleware, authController.signUp);
router.post("/login", authController.signIn);
router.get("/logout", authController.logout);

// user DB
router.get("/", userController.getAllUsers);
router.get("/:id", userController.userInfo);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
