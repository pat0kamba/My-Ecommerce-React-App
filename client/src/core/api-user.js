 const create = async (user)=>{
    try{
        const response = await fetch('http://localhost:4000/api/create', {
            method:'POST',
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
            },
            body:JSON.stringify(user)
        });

        return await response.json()
    }catch(err){
        console.log(err)
    }
   

 };


 const read = async (params, credentials, signal)=>{
    try{
        const response = await fetch('http://localhost:4000/api/read/'+params.userId, {
            method:"GET",
            signal:signal,
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json",
                "Authorization":"Bearer"+credentials.t
            }
        });
        return await response.json();
    }catch(err){
        console.log(err)
    }
   

 };

 const list = async (signal)=>{
    try{
        const response = await fetch('http://localhost:4000/api/list', {
            method:"GET",
            signal:signal,
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
            }
        })

        return await response.json();
    }catch(err){
        console.log(err)

    }
 };

 export {create, read, list};