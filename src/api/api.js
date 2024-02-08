
export const fetchCountryDetail =  async ()=>{
    try{
        const data = await fetch("https://restcountries.com/v3.1/all");
        // console.log(data);
        const json = await data.json();
        return json;
    }catch(e){
        console.error(e)
    }
}

