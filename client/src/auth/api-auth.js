 const signin = async (user)=>{
    try{
        const response = await fetch('http://localhost:4000/auth/signin', {
            method:"POST",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json" 
            },
            body:JSON.stringify(user)
        })
         return await response.json(); 

    }catch(err){
        console.log(err)
    }
    

 }
 
 const signout = async ()=>{
    try{
        const response = await fetch('http://localhost:4000/auth/signout', {
            method:"GET",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
            }
        });
        return await response.json();
    }catch(err){
        console.log(err)
    }
    
  

 }

 export {signin, signout};