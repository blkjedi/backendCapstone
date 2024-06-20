import express from 'express';
import User from '../Models/User.js';
import Listing from '../Models/Listing.js';

const router = express.Router();

/**
 * POST /listings/
 */
router.post("/", async (req, res) => {
    console.log(req.body);
    const { username, newListing } = req.body;
  
    // check if user exists
    const dbUser = await User.findOne({ username });
  
    if (dbUser) {
      console.log(dbUser);
  
      const listing = await Listing.create({
        content: newListing,
        price:newListing.price,
        user: dbUser._id,
        username: dbUser.username,
      });
      return res.json(listing);
    } else {
      const newUser = await User.create({ username });
      console.log(newUser);
  
      const listing = await Listing.create({
        content: newListing,
        price: newListing.price,
        user: newUser._id,
        username: newUser.username,
      });
  
      return res.json(listing);
    }
  });
  
  /**
   * GET /listing/
   */
  router.get("/", async (req, res) => {
    const listing = await Listing.find();
    res.send(listing);
  });
  
  router.delete("/", async (req, res) => {
    res.send("deleting listing....");
  });
  
  router.put("/", async (req, res) => {
    res.send("updating listing....");
  });



export default router