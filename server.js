const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/submit", (req, res) => {
  // Handle form submission here

  const charValue = req.body.charInput;
  const textValue = req.body.textInput;
  const count = countOccurrences(charValue, textValue)
  console.log(count)

  function countOccurrences(charValue, charInput) {
    const regex = new RegExp(charValue, "g");
    const matches = textValue.match(regex);
    return matches ? matches.length : 0;
  }

  const queryParams = `charInput=${encodeURIComponent(
    charValue
  )}&textInput=${encodeURIComponent(textValue)}&count=${count}`;
  res.redirect(`/result.html?${queryParams}`);
});

app.listen(port, () => {
  console.log(`server Started on port: ${port}`);
});
