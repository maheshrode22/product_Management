let express=require("express");
let prodctrl=require("../controller/deptctrl");

let router=express.Router();
 
router.get("/",prodctrl.homePage);
router.get("/addProd",prodctrl.addProd);
router.post("/saveData",prodctrl.saveData);
router.get("/viewproduct",prodctrl.getAllProduct);
router.get("/delprod",prodctrl.delprod);
router.get("/update",prodctrl.update)
router.post("/updateProduct",prodctrl.pdateProduct);
router.get("/searchCatByName", prodctrl.searchCatByName);





module.exports=router;
