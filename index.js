const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.p1d61hg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function run() {
  try {
    // await client.connect();

    // const database = client.db("usersdb");
    const postsCollection = client.db("postDB").collection("posts");
    const supportNoteCollection = client.db("postDB").collection("supportRequestData");
    const contactDataCollection = client.db("postDB").collection("contactData");


    app.put("/posts/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      options = { upsert: true };
      const updatedPost = req.body;
      const updatedDoc = {
        $set: updatedPost,
      };
      const result = await postsCollection.updateOne(
        filter,
        updatedDoc,
        options
      );
      res.send(result);
    });

    app.put("/like/:id", async (req, res) => {
      

      res.send("26165");
    });

    // app.patch("/posts/:id", async (req, res) => {
    //   const id = req.params.id;
    //   const filter = { _id: new ObjectId(id) };
    //   options = { upsert: true };
    //   const result = await postsCollection.deleteOne(filter);
    //   const updatedLikeCount = result + 1;
    //   const updatedDoc = {
    //     $set: updatedLikeCount,
    //   };
    //   const updateLike = await postsCollection.updateOne(
    //     filter,
    //     updatedDoc,
    //     options
    //   );
    //   res.send(updateLike);
    // });

    app.delete("/posts/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await postsCollection.deleteOne(query);
      res.send(result);
    });

    app.get("/posts", async (req, res) => {
      const result = await postsCollection.find().toArray();
      res.send(result);
    });

    app.get("/posts/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await postsCollection.findOne(query);
      res.send(result);
    });

    app.get("/my-posts", async (req, res) => {
      const userEmail = req.query.email;

      if (!userEmail) {
        return res.status(400).json({ error: "Email is required" });
      }

      try {
        const myPosts = await postsCollection
          .find({ email: userEmail })
          .toArray();
        res.send(myPosts);
      } catch (error) {
        res.status(500).json({ error: "Server Error" });
      }
    });

    app.get("/featured-posts", async (req, res) => {
      try {
        const posts = await postsCollection
          .find({ availability: "Available" })
          .limit(6)
          .toArray();

        res.send(posts);
      } catch (err) {
        console.error("Failed to fetch featured posts", err);
        res.status(500).send({ error: "Internal Server Error" });
      }
    });
    app.post("/posts", async (req, res) => {
      const newPost = req.body;
      console.group(newPost);
      const result = await postsCollection.insertOne(newPost);
      res.send(result);
    });
    app.post("/support", async (req, res) => {
      const newSupportNote = req.body;
      console.group(newSupportNote);
      const result = await supportNoteCollection.insertOne(newSupportNote);
      res.send(result);
    });
    app.post("/contacts", async (req, res) => {
      const newContsctData = req.body;
      console.group(newContsctData);
      const result = await contactDataCollection.insertOne(newContsctData);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // await client.close();
  }
}

app.get("/", (req, res) => {
  res.send("This is batch11-assignment-10-server-side Running");
});

app.listen(port, () => {
  console.log(`This sever running on port : ${port}`);
});

run().catch(console.dir);
