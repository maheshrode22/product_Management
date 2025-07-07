let depModel = require("../models/depModel");

exports.homePage = ((req, res) => {
   res.render("home.ejs");

});
exports.addProd = ((req, res) => {
   res.render("deptForm.ejs", { msg: "" });
})

exports.saveData = ((req, res) => {
   let abc = { pname, Category, price, qty } = req.body;

   let Promise = depModel.saveData(pname, Category, price, qty);
   Promise.then((result) => {
      res.render("deptForm.ejs", { msg: result });
   }).catch((err) => {
      res.render("deptForm.ejs", { msg: err });

   })

});


exports.getAllProduct = ((req, res) => {
   let Promise = depModel.getAllProduct();
   Promise.then((result) => {
      res.render("viewProduct.ejs", { products: result });

   }).catch((err) => {
      res.render("viewProduct.ejs", { products: "" });

   })
})


exports.delprod = (req, res) => {
   let depid = parseInt(req.query.prodid);
   let Promise = depModel.delprod(depid);
   Promise.then((result) => {
      let P = depModel.getAllProduct();
      P.then((result) => {
         res.render("viewProduct.ejs", { products: result });

      }).catch((err) => {
         res.render("viewProduct.ejs", { products: "" });

      })

   }).catch((err) => {
      res.send("err");

   })
}

exports.update = ((req, res) => {
   res.render("update.ejs", {
      deptname:req.query.name,
      prodid:req.query.prodid,
      Category:req.query.category,
      price:req.query.price,
      qty:req.query.qty,
      msg:""
   });


})




exports.pdateProduct=((req,res)=>{
   let name=req.body.pname;
   let category=req.body.Category;
   let price = parseFloat(req.body.price);
   let qty=parseInt(req.body.qty);
   let depid = parseInt(req.body.id);
   
   

   let Promise = depModel.pdateProduct(depid,name,category,price,qty);

   Promise.then((result) => {
      let P = depModel.getAllProduct();
      P.then((result) => {
         res.render("viewProduct.ejs", { products: result });

      }).catch((err) => {
         res.render("viewProduct.ejs", { products: "" });

      })

   }).catch((err) => {
      
      res.render("viewProduct.ejs",{msg:"prodcut failed"});
   })

})
exports.searchCatByName = (req, res) => {
   let category = req.query.category;  // changed from 'deptname'

   let promise = depModel.getCatByName(category);
   promise.then((result) => {
       res.json(result);
   }).catch((err) => {
       res.status(500).send("Something went wrong");
   });
};


