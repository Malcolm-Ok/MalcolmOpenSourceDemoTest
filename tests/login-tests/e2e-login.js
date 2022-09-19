import config from '../../config.json';
import LoginPage from '../../helpers/page-objects/login-page/loginPage';
import credential from '../../helpers/credentials.json'

fixture`login test`
    .page`${config.baseUrl}`;

test('login to site successfully', async t => {
    await LoginPage.login(credential.Username, credential.Password)
    //await LoginPage.menuOptions()
    await LoginPage.menuOptionsText()
});