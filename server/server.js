const Koa = require("koa");
const Router = require("koa-router");
const jwt = require("jsonwebtoken") // 签发令牌
const jwtAuth = require("koa-jwt") //校验令牌

const secret = "it's a secret";

const app = new Koa();
const router = new Router();

router.get("/api/login", async ctx => {
  const { username, password } = ctx.query
  console.log(username, password);

  if (username === "tim" && password === "123") {
    // 生成令牌
    const token = jwt.sign({
      data: { name: username }, // 用户信息
      exp: Math.floor(Date.now() / 1000) + 60 * 60 // 过期时间
    }, secret)
    console.log("token", token)
    ctx.body = { code: 1, token }
  } else {
    ctx.status = 401;
    ctx.body = { code: 0, message: "用户名或者密码错误" }
  }
})
router.get(
  "/api/userinfo",
  jwtAuth({
    secret,
    // cookie: secret
  }),
  async ctx => {
    ctx.body = {
      code: 1, data: {
        name: "tim",
        age: 18
      }
    }
  })

app.use(router.routes());
const port = process.env.PORT || 3031
app.listen(port, () => {
  console.log("server is running at " + port)
})