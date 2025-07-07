
const { resolve } = require("path");
let db=require("../../db");
const { rejects } = require("assert");


exports.saveData=((pname,Category,price,qty)=>{
    return new Promise((resolve,reject)=>{
        db.query("insert into product values('0',?,?,?,?)",[pname,Category,price,qty],(err,result)=>{
            if(err)
            {
                reject("product not save");

            }else{
                resolve("product save");

            }
        })
    })
});


exports.getAllProduct=(()=>{
    return new Promise((resolve,reject)=>{
        db.query("select *from product",(err,result)=>{
            if(err)
            {
                reject(err);

            }else{

                resolve(result);
                
            }
        })
    })

})


exports.delprod=(depid)=>{
    return new Promise((resolve,reject)=>{
        db.query("delete from product where id=?",[depid],(err,result)=>{
            if(err)
            {
                reject("err");
            }else{
                resolve("result");

            }
        })
    })

}




exports.pdateProduct=(depid,name,category,price,qty)=>{
    return new Promise((resolve,reject)=>{
        db.query(
            "Update product SET name=?, category=?, price=?, qty=? where id=?",
            [name, category, price, qty, depid],(err,result)=>{
            if(err)
            {
                reject(err);
            }else{
                resolve(result);
            }
        })
    })

    

}
exports.getCatByName = (category) => {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM product WHERE category LIKE ?", [`%${category}%`], (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};
