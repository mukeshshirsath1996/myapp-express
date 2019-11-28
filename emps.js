const express=require("express")
const db=require("./sql_connection")

const router=express.Router()

router.get('/',(request,response)=>{
    const connection = db.connect()
    const statement = 'select * from employees';
    connection.query(statement,(error, data)=>{
        connection.end()

       response.send(data)
    })
})

module.exports = router;
