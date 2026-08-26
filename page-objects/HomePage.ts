import { Locator, Page } from '@playwright/test'

export class HomePage {
    page: Page;
    menu: Locator;
    title: Locator;
    item: Locator;
    addToCart: Locator;
    cartBadge: Locator;

    constructor(page: Page) {
        this.page = page;
        this.menu = page.locator('#reac-burger-menu-btn');  // to je idcko z inspect elementu
        this.title = page.getByText('#Swag Labs'); // nema ziadne idcko, mozeme identifikovat podla textu
        this.item = page.locator('#item_4_title_link');
        this.addToCart = page.locator('#add-to-cart-sauce-labs-backpack');
        // toto cez inspect element, klikol dole do toho vyhladavania span
        this.cartBadge = page.locator('//span[@class="shopping_cart_badge"]');
    }

    // Definovanie metody

    async clickOnMenu() {
        await this.menu.click();
    }

    async clickOnItem() {
        await this.item.click();
    }

    async clickOnAddToCard() {
        await this.addToCart.click();
    }





}