
import {test, expect} from '@playwright/test'

test('Handling Tab & Windows', async({page})=>{
    await page.goto('https://demo.automationtesting.in/Windows.html')
    await expect(page).toHaveTitle('Frames & windows')

    await page.locator("//a[@href='#Multiple']").click();

    const [newTab] = await Promise.all([
         page.waitForEvent('popup'), await page.locator("(//button[@class='btn btn-info'])[2]").click()
         ])

    await page.waitForTimeout(2000)

    //To see length of the page
    console.log(page.context().pages().length)

    //Will give the count of new tabs opened and assigned to a variable 
    const newWindows = newTab.context().pages();

    //To see the Length of the new abs opened
    console.log(newWindows.length)
 
    // Assigning each page to a variable
    const newTab1 = newWindows[1];
    const newTab2 = newWindows[2];

    //To get the URL of the each page
    const newTab1Url = newTab1.url();
    const newTab2Url = newTab2.url();

    //how to get the title of each pages ??

    //To display the URLs of each page
    console.log("Tab1 URL", newTab1Url);
    console.log("Tab2 URL", newTab2Url);

   
    //Performing actions on Selenium - New Tab Page
    await newTab2.waitForLoadState()
    await expect(newTab2.locator("//a[@href='/documentation']")).toBeVisible()
    await newTab2.close()
    await page.waitForTimeout(3000)

    //Performing actions on Index - New Tab Page
    await newTab1.waitForLoadState()
    await expect(newTab2.locator("//input[@placeholder='Email id for Sign Up']")).toBeTruthy();
    await newTab1.close()

    //Finally close the Home Page
    await page.waitForTimeout(5000)


});