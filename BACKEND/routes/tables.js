const router = require("express").Router();
const table = require("../models/tables");
//importing the Mongoose model defined in the tables.js in "models" directory
let tables = require("../models/tables");

router.route("/add").post((req,res)=>{

    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const address = req.body.address;
    const nic = req.body.nic;
    
    const noOfTables = Number(req.body.noOfTables);
    const type  = req.body.type;
    const decoration = req.body.decoration;
    const date = req.body.date;
    const time = req.body.time;
    
    const payment  = req.body.payment;

    const newTable = new tables({
        name,
        email,
        phone,
        address,
        nic,
        
        noOfTables,
        type,
        decoration,
        date,
        time,
       
        payment
    })

    newTable.save().then(()=>{
        res.json("Reservation added successfully")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/tables").get((req, res) => {
    tables
      .find()
      .then((tables) => {
        res.json({ success: true, existingTables: tables }); // Return tables as part of an object with a success key
      })
      .catch((err) => {
        console.log(err);
      });
  });

router.route("/update/:id").put(async (req,res) =>{
    let id = req.params.id;
    const {name,email,phone, address,nic,noOfGuests,noOfTables,type, decoration,time,date,note,payment} = req.body;

    const updatetable = {
        name,
        email,
        phone,
        address,
        nic,
        
        noOfTables,
        type,
        decoration,
        date,
        time,
        
        payment
    }

    const update = await tables.findByIdAndUpdate(id,updatetable)
    .then(() =>{
        res.status(200).send ({status: "Table updated"})

    }).catch((err)=> {
        console.log(err);
        res.status(500).send({status: "Error with updatingh data"});
    })
})

router.route("/delete/:id").delete(async (req , res) => {
    let id = req.params.id;

    await tables.findByIdAndDelete(id)
     .then(() =>{
        res.status(200).send({status:" Table deleted "});
     }).catch ((err)=>{
        console.log(err.message);
        res.status(500).send({status: "error with delete user", error: err.message});
     })
})

router.route("/get/:id").get(async (req,res)=>{
    let id = req.params.id;
    const user = await tables.findById(id)
    .then((tables) =>{
        res.status(200).send({status: "Table fetched", tables})
    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status: "Error with get user", error: err.message});
    })
})

module.exports = router;
