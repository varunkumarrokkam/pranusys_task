const apiUrl = "https://www.w3schools.com/js/default.asp";

async function fetchData (){
    try {
        const response = await fetch(apiUrl);

        if (response.ok){
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();

        console.log(data);
    }
    catch (error) {
        console.error('Error fetching data:', error.message);
    }
}

fetchData();