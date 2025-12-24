import {test} from '@playwright/test'
import {LoginPage} from './pages/loginPage'
import {HomePage} from './pages/homePage'
import  * as myTestData from './testData/sauceDemoLoginCredentails.json'

// test('Handling Login Scenario for SauceDemo', async({page})=>{

//     const loginPage = new LoginPage(page) 

//     await loginPage.launchUrl('https://www.saucedemo.com/')
//     await loginPage.enterUserName(myTestData.validUserName)
//     await loginPage.enterPassword(myTestData.validPassword)
//     await loginPage.clickSubmit()

// })

test('Add Products from HomePage', async({page})=>{

    const loginPage = new LoginPage(page) 
    const homePage = new HomePage(page)

    await loginPage.launchUrl('https://www.saucedemo.com/')
    await loginPage.enterUserName(myTestData.validUserName)
    await loginPage.enterPassword(myTestData.validPassword)
    await loginPage.clickSubmit()

     
     await homePage.clickSubmit()
     await homePage.clickSubmit()
     await homePage.clickSubmit()
     await homePage.clickSubmit()

})



