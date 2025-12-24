import {test, expect} from '@playwright/test'
import  * as myTestData from './testData/sauceDemoLoginCredentails.json'

//With hooks we check pre & post conditions
//They are 4 types of hooks
//beforeAll - 
//afterAll
//beforeEach
//afterEach


//launching the URL
test.beforeAll('Open the Website',async({page})=>{

    //Open the Saucedemo Page
    await page.goto('https://www.saucedemo.com/');

    //Validate Saucedemo Page has opened
    await page.waitForLoadState();
    await expect(page).toHaveTitle('Swag Labs');
    await page.waitForTimeout(3000)

});

test.beforeEach('Provide login Credentials',async({page})=>{
    //Provide the Login Credentials
    await page.locator("//input[@placeholder='Username']").focus();
    await page.locator("//input[@placeholder='Username']").fill(myTestData.validUserName);
    await page.locator("//input[@placeholder='Password']").fill(myTestData.validPassword);
    await page.waitForTimeout(3000)
    await page.locator("//input[@type='submit']").click();

});

test.afterEach('Validate the Home Page',async({page})=>{

    //Validate the Header on HomePage
    await page.waitForLoadState();
    await expect(page.locator("//div[text()='Swag Labs']")).toBeVisible();
    await page.waitForTimeout(3000)

});

test('Add items to the Cart',async({page})=>{
    //select the required products - 1st item added to the cart
    await page.locator("//button[@id='add-to-cart-sauce-labs-backpack']").click();
    await page.waitForTimeout(3000)


    //select the required products - 2nd item added to the cart
    await page.locator("//button[@id='add-to-cart-sauce-labs-fleece-jacket']").click();
    await page.waitForTimeout(3000)

    //select the required products - 3rd item added to the cart
    await page.locator("//button[@id='add-to-cart-test.allthethings()-t-shirt-(red)']").click();
    await page.waitForTimeout(3000)
});

test.afterAll('Validate the Items in Cart', async({page})=>{
    //Click on Cart
    await page.locator("//a[@class='shopping_cart_link']").click();
    await page.waitForTimeout(3000)

    //Validate "Your Cart" Page 
    await expect(page.locator("//span[text()='Your Cart']")).toBeVisible();
    await page.waitForTimeout(3000)

    //Validate cart has 3 items
    await expect(page.locator("//span[text()='3']")).toBeVisible();
    // await page.waitForTimeout(3000)

    
    //Remove an item from the cart
    await page.locator("//button[@id='remove-test.allthethings()-t-shirt-(red)']").click();
    // await page.waitForTimeout(3000)

    //Validate cart has 2 items
    await expect(page.locator("//span[text()='2']")).toBeVisible();
    // await page.waitForTimeout(3000)

    //Click on Continue shopping 
    await page.locator("//button[@id='continue-shopping']").click();
    // await page.waitForTimeout(3000)

    //Add one more item to the cart
    await page.locator("//button[@name='add-to-cart-sauce-labs-bolt-t-shirt']").click();
    // await page.waitForTimeout(3000)
    
    //Click on Cart
    await page.locator("//a[@class='shopping_cart_link']").click();
    // await page.waitForTimeout(3000)

    //Validate cart has 3 items
    await expect(page.locator("//span[text()='3']")).toBeVisible();
    // await page.waitForTimeout(3000)

    //Click on Checkout
    await page.waitForLoadState()
    await page.locator("//button[@id='checkout']").click();
    // await page.waitForTimeout(3000)

    //Validate the Your Information Page
    await page.waitForLoadState()
    await page.locator("//span[text()='Checkout: Your Information']").click();
    // await page.waitForTimeout(3000)


    //provide Customer Details
    await page.locator("//input[@id='first-name']").fill('TestFName');
    await page.locator("//input[@id='last-name']").fill('TestLName');
    await page.locator("//input[@id='postal-code']").fill('43016');
    await page.locator("//input[@id='continue']").click();

    //Validate the Checkout - Overview Page
    await page.waitForLoadState()
    await page.locator("//span[text()='Checkout: Overview']").click();

    
    //Complete the order placement
    await page.waitForLoadState()
    await page.locator("//button[@id='finish']").click();

    //Validate the Message "Thank you for your order!"
    await expect(page.locator("//h2[text()='Thank you for your order!']")).toBeVisible();

       
        
        
});

    


