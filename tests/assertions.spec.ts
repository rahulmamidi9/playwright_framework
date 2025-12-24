import {test, expect} from '@playwright/test'

test('validate the titile of letkodeit page',async({page})=>{
    await page.goto('https://www.letskodeit.com/practice/')
    await expect(page).toHaveTitle('Practice Page')

    // await page.locator("//input[@name='enter-name']//following-sibling::input[2]").click()

  //     // Click the get started link.
  // await page.getByRole('link', { name: 'Get started' }).click();

  // // Expects page to have a heading with the name of Installation.
  // await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();

    //To validate "Hide/Show Example" text box is visible
    await page.locator("//input[@name='show-hide']").click();
    await expect(page.getByPlaceholder('Hide/Show Example')).toBeVisible();

    //To validate "Hide/Show Example" text box is hidden after clicking Hide button
    await page.locator("//input[@value='Hide']").click();
    await expect(page.getByPlaceholder('Hide/Show Example')).toBeHidden();

    //To validate "Hide/Show Example" text box is visible after clicking show button
    await page.locator("//input[@value='Show']").click();
    await expect(page.getByPlaceholder('Hide/Show Example')).toBeVisible();

    //To validate "BMW" Radio button is selected
    let bmwRadioButton =  page.locator("//input[@id='bmwradio']");
    await bmwRadioButton.click();
    await expect(bmwRadioButton).toBeChecked();
    // await page.locator("//input[@id='bmwradio']").click();
    // await expect(page.getByLabel('bmw')).toBeDefined();

    //To validate "Benz" check box is selected
    await page.locator("//input[@id='benzcheck']").click();
    await expect(page.locator("//input[@id='benzcheck']")).toBeChecked();

    await expect(page).toHaveURL('https://www.letskodeit.com/practice/');

    //&& (AND) OR can be used for in the XPATH
    

    //To validate "Honda" option selected from dropdown list
    // await page.locator("//select[@id='carselect']").click();
    // await expect(page.getByLabel('benz')).toBeDefined();   


});

test('validate delete button',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/add_remove_elements/')
    //await page.locator("//button[@class='added-manually']").
    await expect(page.locator("//button[@class='added-manually']")).not.toHaveCount(1);
    
    
});