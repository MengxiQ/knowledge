项目核心服务
===============

> 运行环境要求
1. node + vue cli
2. PHP7.2+，兼容PHP8.1;composer + ThinkPHP 6.0
### 安装依赖&运行
~~~
cd admin
npm install
npm run build:prod 
# 将会build到/server/public/admin 
~~~
~~~
# 切换到server目录
cd ..
cd server
composer update
php think run -p 8090
~~~
### 浏览器打开
~~~
http://localhost:8090 
~~~

### 路由
+ 后台地址：
  http://localhost:8090/admin
  默认账号： admin admin

+ 前台地址 http://localhost:8090/stage

