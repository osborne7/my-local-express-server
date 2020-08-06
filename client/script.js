
// add api baseURL, username, and key - use .env or config if publishing
// let baseURL = ;
// let apiKey = ;
// let user = ;

// generic api GET request

//specialData would be a city name, anything else you need in your query to get to the right data
// const getData = async (baseURL, specialData, key) => {
//     const res = await fetch(baseURL+specialData+key)
//     try {
//         const data = await res.json();
//         console.log(data);
//         return data;
//     } catch(err) {
//         console.log(`GET request error: ${err}`);
//     }
// }



// generic addData POST request

const postData = async (url = '', data = {}) => {
    console.log(data);
    const res = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    try {
        const newData = await res.json();
        console.log(newData);
        return newData;
    } catch (err) {
        console.log(err);
    }
}

// dummy data to test, remove in practice
postData('http://localhost:3015/addData', {number: 11, text:'eleven'});

// chain requests to get and post data
// function execute(e) {
//     getData(baseURL, newSpecialData, apiKey)
//     .then(data => {
//         console.log(data);
//         postData('http://localhost:3015/addData', {number: data.number, text: data.text});
//     });
// };