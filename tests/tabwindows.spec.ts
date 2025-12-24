
import {test, expect} from '@playwright/test'

test('Handling Tab & Windows', async({page})=>{
    await page.goto('https://demo.automationtesting.in/Windows.html')
    await expect(page).toHaveTitle('Frames & windows')

    const [newTab] = await Promise.all([
         page.waitForEvent('popup'), await page.locator("(//button[@class='btn btn-info'])[1]").click()

        ])

    await newTab.waitForLoadState()    
    await expect(newTab.locator("//a[@href='/documentation']")).toBeVisible()
    // await newTab.close()
    await page.waitForTimeout(3000)
    await page.close()
    // await expect(page).toHaveTitle('Frames & windows')
    await newTab.waitForTimeout(3000)
    await expect(newTab.locator("//a[@href='/documentation']")).toBeVisible()


    // await page.locator("//a[@href='#Tabbed']").click();
    // await page.locator("(//button[@class='btn btn-info'])[1]").click();
    // await page.waitForTimeout(3000)

    // console.log(newTab.context().pages().length)


});


