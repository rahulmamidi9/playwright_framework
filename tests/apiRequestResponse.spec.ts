import {test,expect} from '@playwright/test'

test('Get Call',async({request})=>{

    //https://reqres.in/api/users/2
    

    const response = await request.get('https://postman-echo.com/get?foo1=bar1&foo2=bar2',
    {
        headers: {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',       
            'Accept': 'application/json' }
    })
    expect(response.status()).toBe(200)

    const responseBody = await response.json()
    console.log(responseBody.args.foo1);
    const foolValue = responseBody.args.fool

    expect(foolValue).toEqual("bar1")
    console.log("Mamidi");
    


})


// test('POST - Create a new user', async ({ request }) => {
//   const requestData = {
//     name: "Morpheus",
//     job: "Leader"
//   };
 
//   // 1. Send POST request with data payload
//   const response = await request.post('https://reqres.in/api/users', {
//     data: requestData
//   });
 
//   // 2. Validate Status Code
//   expect(response.status()).toBe(201);
 
//   // 3. Parse JSON
//   const responseBody = await response.json();
 
//   // 4. Validate that the response matches our input
//   expect(responseBody.name).toBe(requestData.name);
//   expect(responseBody.job).toBe(requestData.job);
 
//   // 5. Validate dynamic fields exist (ID and Timestamp)
//   expect(responseBody).toHaveProperty('id');
//   expect(responseBody).toHaveProperty('createdAt');
// });