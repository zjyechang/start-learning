# HTTP请求方法

## GET
请求，获取数据
## POST
提交数据
## PUT
与post相似，指定存放位置
## HARD
http头信息，判断资源是否存在
## DELETE
删除
## OPTIONS
获取当前URL所支持的方法，请求成功http返回"allow"的头
## CONNECT
动态切换到隧道代理
## TRACE
激发远程，应用层的请求回路消息

## 区别：幂等性



# HTTP状态码

## 1xx 消息
请求已被接受，需要继续处理
## 2xx 成功
请求已成功被服务器接收、理解、并接受
## 3xx 重定向
代表需要客户端采取进一步的操作才能完成请求
## 4xx 请求错误
客户端可能发生了错误，妨碍了服务器的处理
## 5xx 服务器错误
服务器在处理请求的过程中有错误或者异常状态发生