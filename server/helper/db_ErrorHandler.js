
const getErrorMessage = (err)=>{
    let message = '';
    if (err.code){
        switch(err.code){
            case 11000:
            case 11001:
                message:getUniqueError(err);
                break;
            default:
                message="something went wrong"
        }
    }else{
        for (let errName in err.errors)
        {
            if(err.errors[errName].message){
                message= err.errors[errName].message
            }
        }
    }
    return message ;

}

const getUniqueError = async (error)=>{
    let output;
    try{
        let fieldname = error.message.substring(error.message.lastIndexOf('.$')+2, error.message.lastIndexOf(_1))
        output = fieldname.chartAt(0).toUpperCase()+fieldname.slice(1)+"already exits"
    }catch(err){
        output = "Unique, already exits"
    }
    return output
}

module.exports = {getErrorMessage};