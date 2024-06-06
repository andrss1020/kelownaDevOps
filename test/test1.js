const { By, Key, Builder } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

async function test_case() {

    //Set Chrome option
    let options = new chrome.Options();
    options.addArguments('headless');
    options.addArguments('disable-gpu');
    options.setChromeBinaryPath('/usr/bin/google-chrome');

    // Create a Driver
    let driver = await new Builder().forBrowser("chrome").setChromeOptions(options).build();

    try {
        //Send driver to website
        await driver.get("https://testingenvandressalguero.web.app/");

        //Grab an element from the page
        await driver.findElement(By.id('deleteMemberBtn')).click();

        // Wait for the alert to be displayed and store it in a variable
        let alert = await driver.switchTo().alert();

        // Get the text of the alert
        let alertText = await alert.getText();

        // Print the alert text to the console
        const contieneError = /ERROR/.test(alertText);
        if (contieneError){
            console.log('Test Failed');
        }else{
            console.log('Test Success');
        }

        // Accept the alert (close it)
        await alert.accept();

    } catch (error) {
        console.log('An error occurred:', error);
    } finally {
        await driver.quit();
    }

}
test_case();
