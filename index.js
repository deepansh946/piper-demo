const express = require("express");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

function addNumbers(a, b) {
  return a + b;
}

function divideNumbers(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

function getUserName(user) {
  return user.name;
}

async function fetchData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

app.get("/", (_req, res) => {
  res.json({
    name: "piper-demo",
    message: "Try asking Piper to find bugs or add a /health endpoint.",
  });
});

app.get("/sum", (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  res.json({ result: addNumbers(a, b) });
});

app.get("/divide", (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  try {
    res.json({ result: divideNumbers(a, b) });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get("/health", (_req, res) => {
  res.status(200).json({ status: "ok" });
});

const numbers = [1, 2, 3, 4];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`piper-demo listening on http://localhost:${PORT}`);
    console.log("sum(5,10) =", addNumbers(5, 10));
    console.log("divide(10,2) =", divideNumbers(10, 2));
    console.log("user =", getUserName({ name: "Deepansh", age: 25 }));
    fetchData().then((data) => console.log("fetchData =", data));
  });
}

module.exports = {
  app,
  addNumbers,
  divideNumbers,
  getUserName,
  fetchData,
};
