import {test, expect} from '@playwright/test'


test('Handling Child Frames', async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/')

       await expect(page).toHaveTitle('Frames - Web Automation Test')
       const allFrames = page.frames()
       console.log(allFrames.length);
       const frame3 = page.frame({url: 'https://ui.vision/demo/webtest/frames/frame_3.html'})
       await frame3?.locator("//input[@name='mytext3']").fill('Test')
       await page.waitForTimeout(3000)

           
            
        //Assigning child frames to a variable
        const cFrames = frame3?.childFrames();
        console.log(`Found ${cFrames.length} child frames`);

        //To check child has frames or not
        // if (cFrames.length > 0) {
        // // Click the radio button inside the first child frame
        // await cFrames[0].locator('span:text("I am a human")').click();
        // await page.waitForTimeout(3000);
        // } else {
        // console.log('No child frames found inside frame3');
        // }


        //select the radio button
        await cFrames[0]?.locator("//span[text()='I am a human']").click();
        await page.waitForTimeout(3000);  


        //select the checkbox 
        await cFrames[0]?.locator("(//span[@class='aDTYNe snByac n5vBHf OIC90c'])[2]").click();
        await page.waitForTimeout(3000);  

        //select a value from dropdown box
        await cFrames[0]?.locator("//span[text()='Choose']").click();
        await cFrames[0]?.locator("(//div[@data-value='Yes'])[2]").click();
        await page.waitForTimeout(3000);  

        //click on Next button
        await cFrames[0]?.locator("//span[text()='Next']").click();
        await page.waitForTimeout(3000);  

        await cFrames[0]?.locator("//textarea[@class='KHxj8b tL9Q4c']").click();
        await cFrames[0]?.locator("//textarea[@class='KHxj8b tL9Q4c']").fill("Entered the value in next page");
        await page.waitForTimeout(3000); 


        await cFrames[0]?.locator("//span[text()='Submit']").click();
        await page.waitForTimeout(3000); 

        

});
