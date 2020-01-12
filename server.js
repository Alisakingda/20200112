const WS = require("ws")
const ws = new WS.Server({ port: 9090 }, () => {
  console.log("server start")
})

let clients = []
// 连接成功后
ws.on("connection", client => {
  clients.push(client)
  // 发送数据
  client.send("北京欢迎您！")
  // 连接后,接受前端信息
  client.on("message", msg => {
    console.log(`来自前端的数据${msg}`)
  })
  // 前端主动关闭
  client.on("close", msg => {
    console.log(`前端主动断开连接`)
  })
})
