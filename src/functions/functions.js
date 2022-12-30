export const fetchData = async(request) =>{
    console.log(request)
    try{
        const result = await fetch('http://localhost:3000/this',{
        method:'POST',	
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(request)
	})
    
	const data = await result.json();
    console.log(data)
    return data;
    }catch(e){
        return null;
    }

}