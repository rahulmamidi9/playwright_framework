import { Locator,Page } from "@playwright/test";
//export - utilize by other classes
export default class BasePage {

    //page is a variable 
    //Page is a datatype for that variable
    readonly page: Page
    //Constructor is the very first portion  which will run before the class is called
    constructor(page: Page){
        this.page = page

    }

    async navigateTo(url: string){
        await this.page.goto(url)
    }

    async clickElement(element: Locator){
        await element.click()
    }

    async fillText(element: Locator, value: string){
        await element.fill(value)
    }



    // Common method to retrieve text from an element
    async getElementText(element: Locator): Promise<string> {
        return element.innerText();
    }
 
    // Common method to wait for an element to be visible
    async waitForElementVisible(element: Locator | string) {
        if (typeof element === 'string') {
            await this.page.waitForSelector(element, { state: 'visible' });
        } else {
            await element.waitFor({ state: 'visible' });
        }
    }
 
    // Common method to wait for an element to be hidden
    async waitForElementHidden(element: Locator) {
        if (typeof element === 'string') {
            await this.page.waitForSelector(element, { state: 'hidden' });
        } else {
            await element.waitFor({ state: 'hidden' });
        }
    }
 
    // Common method to take a screenshot
    async takeScreenshot(fileName: string) {
        await this.page.screenshot({ path: fileName });
    }
 

}

