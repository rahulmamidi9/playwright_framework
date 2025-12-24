import {test, expect} from '@playwright/test'

test('validate the titile of letkodeit page',async({page})=>{
    await page.goto('https://www.letskodeit.com/practice/')
    await expect(page).toHaveTitle('Practice Page')

    //To validate "Benz" check box is selected
    // await page.locator("//input[@id='benzcheck']").click();
    // await expect(page.locator("//input[@id='benzcheck']")).toBeChecked();


    await page.locator("//input[@id='benzcheck']").check();
    await expect(page.locator("//input[@id='benzcheck']")).toBeChecked();
    await expect(page.locator("//input[@id='bmvcheck']")).not.toBeChecked();

    await expect(page).toHaveURL('https://www.letskodeit.com/practice/');

    


});