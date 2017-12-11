const express = require('express'); //托管静态资源
const app = express();

const PORT = 80; //服务端分配端口，需与nginx配置保持一致
const PATH = '/'; //服务端分配的路径，需与nginx配置保持一致，访问的虚拟路径，文件不在这里

/**
 * 静态资源根目录,直接在 demo 目录下访问
 * 但是明明 www.js 在 demo 中，直接写路径 dist 是怎么访问到 dist的呢
 * 因为执行 www.js 的时候，不是进入到 demo 文件夹中执行
 * 而是 带了一层目录执行 www.js，就是直接在 项目第一级，执行 node demo/www.js
 * 这样就能直接使用 dist路径 目录了
 */
const ROOT = 'dist';

//输出请求，便于调试
app.use(function (req, res, next) {
  console.log(`${new Date()}: ${req.originalUrl}`);
  next();
});


//可访问目录，及其访问路径
app.use(PATH, express.static(ROOT));


//提示部署成功
app.listen(PORT, () => console.log(`Success!! Listening on port: ${PORT}, access path: ${PATH}`))




