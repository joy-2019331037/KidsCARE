const express = require("express");
const cors = require("cors");
const { default : axios } = require("axios");
const colors = require('colors');


const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try{
    const r = await axios.put(
      'https://api.chatengine.io/users/',
      {
        username : username,
        secret : username,
        first_name : username
      },
      {
        headers : {"private-key" : "f5f540fe-7405-4f85-89db-109d6e7389c2"}
      }
    );
    return res.status(r.status).json(r.data);
  } catch(e) {
    return res.status(e.response.status).json(e.response.data);
  
  }


  //return res.json({ username: username, secret: "sha256..." });
});
console.log("server started !".bgCyan.white);
app.listen(3001);