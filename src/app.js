import express from "express";
import path from "path";

const app = express();

// PORT = 3000
const PORT = 3000;

// app.js 에게 퍼그를 써야한다고 신호를 줌
app.set("view engine", "pug");

// app.js 에게 CSS나 js는 /assets에 있음
app.use(express.static(path.join(__dirname, "/assets")));

// 사용자가 요청하는 것을 보여주는 웹페이지
app.get("/", (req, res) => {
  res.render("sadari");
});

// 설정 끝난 후 Server Start
app.listen(PORT, () => {
  console.log(`✅  ${PORT} Server Start`);
});
