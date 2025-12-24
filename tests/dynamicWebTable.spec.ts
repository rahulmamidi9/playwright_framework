import {test, expect} from '@playwright/test'


test('Handling Dynamic Web Table', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    await expect(page).toHaveTitle('Automation Testing Practice');

    const rows = await page.locator('//table[@id = "taskTable"]/tbody/tr');
    const header = await page.locator('//table[@id = "taskTable"]/thead/tr/th');

    const rowCount = await rows.count()
    const headerCount = await header.count()

    console.log(`Dynamic Table Row Count is ${rowCount}`);
    console.log(`Dynamic Table Column Count is ${headerCount}`);

    let systemRowCount = -1;
    let cpuColumnCount = -1;

    
    for (let i= 0;i<rowCount;i++)
    {
        const rowText = await rows.nth(i).innerText();
        if (rowText.includes('System'))
        {
            systemRowCount  = i + 1;
            break;
        }

    }

    console.log(`System Row Number is ${systemRowCount}`);

    for (let j= 0;j<headerCount;j++)
    {
        const colText = await header.nth(j).innerText();
        if (colText.includes('CPU (%)'))
        {
            cpuColumnCount  = j ;
            break;
        }

    }

    console.log(`CPU Column Number is ${cpuColumnCount}`);
      
    const systemRow = await rows.nth(systemRowCount)

    const cpuValue = await systemRow.locator('td').nth(cpuColumnCount).innerText();

    console.log(`CPU Value is ${cpuValue}`);

    
})