
import {test, expect} from '@playwright/test'


//1st Way of Handling the Frames
// test('Handling iFrames', async({page})=>{
//     await page.goto('https://ui.vision/demo/webtest/frames/')

//        await expect(page).toHaveTitle('Frames - Web Automation Test')
//        const allFrames = page.frames()
//        console.log(allFrames.length);
//        const frame1 = page.frameLocator("//frame[@src='frame_1.html']")
//        await frame1?.locator("//input[@name='mytext1']").fill('Test')
//         await page.waitForTimeout(3000)
    


// });

//2nd way to handle the Frames
test('Handling iFrames', async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/')

       await expect(page).toHaveTitle('Frames - Web Automation Test')
       const allFrames = page.frames()
       console.log(allFrames.length);
       const frame1 = page.frame({url: 'https://ui.vision/demo/webtest/frames/frame_1.html'})
        await frame1?.locator("//input[@name='mytext1']").fill('Test')
        await page.waitForTimeout(3000)
 


});


