import {test,expect} from '@playwright/test'

//npx playwright test --grep "smoke" 

test('Login Test @smoke', async({})=>{
    console.log(`open the login page`);

})

test('Home Page @Regression', async({})=>{
    console.log(`I'm on the Home Page`);

})



test('Payment Page @Functional', async({})=>{
    console.log(`I'm on the Payment Page`);

})

test('Logout Page @smoke', async({})=>{
    console.log(`I'm on the Logout Page`);

})