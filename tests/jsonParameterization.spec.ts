import {test, expect} from '@playwright/test'
import  * as myTestData from './testData/loginPage.json'

test('Validate the OrangeHRM website - Login Profile and Logout the page',async({page})=>{

    //Validate the OrangeHRM Demo Webpage is opened
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page).toHaveTitle('OrangeHRM');

    //Provide the Login Credentials
    await page.locator("//input[@name='username']").click();
    await page.locator("//input[@name='username']").fill(myTestData.validUserName);
    await page.locator("//input[@name='password']").fill(myTestData.validPassword);
    await page.locator("//button[@type='submit']").click();

    //Validate the Dashboard Header on HomePage
    await expect(page.locator("//h6[text()='Dashboard']")).toBeVisible();

    //Validate the User Profile on HomePage
    await expect(page.locator("(//img[@alt='profile picture'])[1]")).toHaveCount(1);

    //img[@alt='profile picture' or @class='oxd-userdropdown-img'])[1] -- combining 2 attributes in XPath
    //img[@alt='profile picture' and @class='oxd-userdropdown-img'] - using and operator 
    //h6[contains(text(),'Time')] -- contains method
 


    //Validate the Logout the OrangeHRM Webpage
    await page.locator("//img[@class='oxd-userdropdown-img']").click();
    await page.locator("//a[@href='/web/index.php/auth/logout']").click();
    await expect(page).toHaveTitle('OrangeHRM');
    
        
});

    


