import {test, expect} from '@playwright/test'


test('validate the titile of letkodeit page',async({page})=>{
    await page.goto('https://www.letskodeit.com/practice/')
    await expect(page).toHaveTitle('Practice Page')

   //To validate "Honda" option selected from dropdown list
    await page.locator("//select[@id='carselect']").click();
    await page.selectOption("//select[@id='carselect']",{value: 'honda'})

    //index 
    //value0
    //label0
    // await expect(page.getByLabel('benz')).toBeDefined();   

    


});