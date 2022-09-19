import { t, Selector } from 'testcafe';
import { menuDataList } from '../../testData/testDetailFile';

class LoginPage {
    constructor() {
        this.usernameInput = Selector('[name="username"]');
        this.passwordInput = Selector('[name="password"]');
        this.loginButton = Selector('[type="submit"]');
        this.menuButtons = Selector('a[class="oxd-topbar-body-nav-tab-item"]');
    }

    async login(username, password) {
        await t
            .typeText(this.usernameInput, username)
            .typeText(this.passwordInput, password)
            .click(this.loginButton);
    }

    async menuOptions() {
        // console.log(await this.menuButtons.textContent)
        const menuCount = await this.menuButtons.count
        // console.log(menuCount)
        for (let index = 0; index < menuCount; index++) {
            // console.log(await this.menuButtons.nth(index).textContent)
            await t
                .expect(this.menuButtons.nth(index).textContent)
                .eql(menuDataList.menuOptionData[index])
        }
    }


    async menuOptionsText() {
        // console.log(await this.menuButtons.textContent)
        const menuTextCount = await this.menuButtons.count
        const menuText = await this.menuButtons.textContent
        console.log(menuTextCount)
        console.log(menuText)


        let arrayOfButtons = []
        for (let index = 0; index < menuTextCount; index++) {
            arrayOfButtons[index] = (await this.menuButtons.nth(index).textContent).slice(0, -4)
            menuDataList.menuOptionData.includes(arrayOfButtons[index])
        }
    }
}

export default new LoginPage();