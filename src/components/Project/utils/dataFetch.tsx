export async function dataFetch(apiUrl:any){
    try {
        console.log(apiUrl)
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data;    
    } catch (error) {
        console.error('Error fetching data', error);
    }
}