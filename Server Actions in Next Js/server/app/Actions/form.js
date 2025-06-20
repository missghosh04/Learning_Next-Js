 "use server"
 import fs from "fs/promises"

 export const submitAction= async(e)=>{

    console.log(e.get("name"),e.get("address"),e.get("contact"))
    let a= await fs.writeFile("soumi.txt",`The name is ${e.get("name")} and the address is ${e.get("address")}`)


  }