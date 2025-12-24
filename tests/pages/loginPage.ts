import { Locator,Page } from "@playwright/test";
import BasePage from "./basePage";
 
export class LoginPage extends BasePage{
 
   private readonly userNameTb:Locator
   private readonly passwordTb:Locator
   private readonly submitBtn:Locator
 
   constructor(page:Page) {
    super(page)//whenever extends is used super is used to retrieve the form Basepage
    this.userNameTb = page.locator("#user-name")
    this.passwordTb = page.locator("#password")
    this.submitBtn = page.locator("#login-button")
   }

   async launchUrl(url: string){

    await this.navigateTo(url)
   }

   async enterUserName(userName: string){

    await this.fillText(this.userNameTb, userName)
   }

   async enterPassword(password: string){

    await this.fillText(this.passwordTb,password)
   }

   async clickSubmit(){

    await this.clickElement(this.submitBtn)
   }
 
 
}
 