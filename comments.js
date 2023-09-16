// Create web server
// 1. Create web server
// 2. Create router
// 3. Create routes
// 4. Start server
// 5. Test

// 1. Create web server
const express = require('express');
const app = express();

// 2. Create router
const commentsRouter = require('./routes/comments');
const postsRouter = require('./routes/posts');

// 3. Create routes
// 4. Start server
app.use('/comments', commentsRouter);
app.use('/posts', postsRouter);

// 5. Test
app.listen(3000, () => {
  console.log('Server started at port 3000');
});