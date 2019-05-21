module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': []
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: false
    }
  },
  configureWebpack: {
    mode: "development",
    devtool: undefined,
    devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost:3031'
        }
      }
      // before(app) {
      //   app.get("/api/login", (req, res) => {
      //     const { username, password } = req.query;
      //     if (username === "tim" && password === "123") {
      //       res.json({ code: 1, token: "jilei" })
      //     } else {
      //       res.status(401);
      //     }
      //     res.end();
      //   })
      //   function auth(req, res, next) {
      //     if (req.headers.token === "abc") {
      //       next()
      //     } else {
      //       res.status(401);
      //       res.end();
      //     }
      //   }
      //   app.get("/api/userinfo", auth, (req, res) => {
      //     res.json({
      //       code: 1, data: {
      //         name: "tim"
      //       }
      //     })
      //   })
      // }
    }
  }
}
