import { Locator,Page } from "@playwright/test";
import { LoginPage } from "./loginPage";
import BasePage from "./basePage";
 
export class HomePage extends BasePage{
  
 
   private readonly backpack:Locator
   private readonly fleeceJacket:Locator
   private readonly redTshirt:Locator
   private readonly addToCart:Locator
 
   constructor(page:Page) {
    super(page)
    this.backpack = page.locator("//button[@id='add-to-cart-sauce-labs-backpack']")
    this.fleeceJacket = page.locator("//button[@id='add-to-cart-sauce-labs-fleece-jacket']")
    this.redTshirt = page.locator("//button[@id='add-to-cart-test.allthethings()-t-shirt-(red)']")
    this.addToCart = page.locator("//a[@class='shopping_cart_link']")
   }


     
   async clickSubmit(){

    await this.clickElement(this.backpack)
    
   
   }

   async clickSubmit(){

   await this.clickElement(this.fleeceJacket)
  
   }

   async clickSubmit(){

   await this.clickElement(this.redTshirt)
  
   }
    
   
   async clickSubmit(){

   await this.clickElement(this.addToCart)
   
   }
    
 
 
 
}