   import {test, expect} from '@playwright/test'
   
   test('Handling Child Frames', async({page})=>{
   await page.goto('https://ui.vision/demo/webtest/frames/')
 
    const allFrames = page.frames()
    console.log(allFrames.length)
    const frame1 = page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
 
    //when we r not sure about the locator position
    await frame1?.locator("//input[@name='mytext3']").fill('Admin')
    await page.waitForTimeout(2000);  

      
    const fillText = frame1?.childFrames()[0];
    //To select the radio button and pass the value in the text
    // await fillText?.locator("//input[@class='Hvn9fb zHQkBf']").fill("All good");
    // await page.waitForTimeout(3000);  
    await fillText?.locator("//span[text()='I am a human']").click();
    await page.waitForTimeout(3000);  

    //Select the checkbox 
    await fillText?.locator("(//span[@class='aDTYNe snByac n5vBHf OIC90c'])[2]").click();
    await page.waitForTimeout(3000);  

    
    
    

    });