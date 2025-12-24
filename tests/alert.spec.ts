import {test, expect} from '@playwright/test'

//Validate the alerts -popup window 
test('Validate the Alerts - Popup Window',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    await expect(page).toHaveTitle('The Internet');

    await page.locator("//button[@onclick='jsAlert()']").click();
    await expect(page.locator("//p[@id='result']")).toContainText('You successfully clicked an alert');

 

});


//Validate the alerts - Pass value in Popup window - 1st way
test('Validate the Alerts - Pass value in Popup window',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    await expect(page).toHaveTitle('The Internet');

    page.on('dialog',async(alert)=>{
        let alertmsg = alert.message();
        expect(alertmsg).toEqual('I am a JS Alert');
        await page.waitForTimeout(9000);
        await alert.accept();
        await alert.message('Hello guys');
         await expect(page.locator("//p[@id='result']")).toContainText('You successfully clicked an alert');    
         })

    await page.locator("//button[@onclick='jsAlert()']").click();
   
  });


//Validate the alerts - Pass value in Popup window - 2nd way
test('Enter the Message in Dialog text box',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    await expect(page).toHaveTitle('The Internet');

    page.on('dialog',async(alert)=>{
        //let alertmsg = alert.message();
        // expect(alertmsg).toEqual('I am a JS Alert');
        await page.waitForTimeout(9000);
        let text = 'Hello Guys';
        await alert.accept(text);
        await expect(page.locator("//p[@id='result']")).toContainText(`You entered: ${text}`);    
    });

    await page.locator("//button[@onclick='jsPrompt()']").click();

});

//Validate the alerts - Based on Selection value will reflect in Result
test('Alert Message Accept Popup Window', async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    await expect(page).toHaveTitle('The Internet');

     page.on('dialog',async(alert)=>{
    await alert.accept();
    await expect(page.locator("//p[@id='result']")).toHaveText('You clicked: Ok')
    });


    await page.locator("//button[@onclick='jsConfirm()']").click();


});