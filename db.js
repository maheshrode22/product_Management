require("dotenv").config();
let mysql=require("mysql2");
 
let conn=mysql.createConnection({
    host:process.env.db_host,
    user:process.env.db_username,
    password:process.env.db_password,
    database:process.env.db_dbname
});
conn.connect((err)=>{
if(err)
{
    console.log("database is not connect");
    
}else{
    console.log("database is connected");
    
}
})



module.exports = conn;