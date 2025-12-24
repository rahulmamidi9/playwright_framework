import {test,expect} from '@playwright/test'

test.describe('sprint1',async()=>{

test.beforeAll('Database connection setup', async()=>{
    console.log(`Database connection setup`);

})

test.beforeEach('clearing the cookies', async()=>{
    console.log(`clearing the cookies`);

})


test.afterEach('cache removal', async()=>{
    console.log(`cache removal`);

})

test.afterAll('Database disconnect', async()=>{
    console.log(`Database disconnect`);

})



test('Payment Page @Functional', async()=>{
    console.log(`I'm on the Payment Page`);

})

test('Logout Page @smoke', async()=>{
    console.log(`I'm on the Logout Page`);

})

})


test('outside Describe section - first', async()=>{
    console.log(`outside Describe section - first`);

})

test('outside Describe section - second', async()=>{
    console.log(`outside Describe section - second`);

})