const express = require('express');
const { registerUser, loginUser, logout } = require('../controller/User');
const isAuthenticated = require('../middlewares/auth');
const { createBlog, readBlog, deleteBlog, getAllBlogs } = require('../controller/Blog');
const router = express.Router();

router.post('/createblog',isAuthenticated,createBlog)
router.get('/blog/:id',isAuthenticated,readBlog).delete("/blog/:id",isAuthenticated,deleteBlog)
router.get('/blogs',isAuthenticated,getAllBlogs)

module.exports = router;