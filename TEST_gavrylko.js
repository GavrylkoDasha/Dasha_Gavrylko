const {Builder, By, Key, util, Actions, List, WebElement} = require("selenium-webdriver");

async function Func(){
    var driver = await new Builder().forBrowser("chrome").build();
    await driver.get('https://opensource-demo.orangehrmlive.com/');
    await driver.findElement(By.id("txtUsername")).sendKeys("Admin", Key.ENTER);
    await driver.findElement(By.id("txtPassword")).sendKeys("admin123", Key.ENTER);
    await driver.findElement(By.id("menu_admin_viewAdminModule")).click();
   
    await driver.findElement(By.id("menu_admin_Job")).click();
   
    await driver.findElement(By.id("menu_admin_viewJobTitleList")).click();
    
    await driver.findElement(By.id("btnAdd")).click();
    await driver.findElement(By.id("jobTitle_jobTitle")).sendKeys("JobTitle");
    await driver.findElement(By.id("jobTitle_jobDescription")).sendKeys("JobDescr");
    await driver.findElement(By.id("jobTitle_note")).sendKeys("Note");
    await driver.findElement(By.id("btnSave")).click();
   
    const i = await driver.findElement(By.xpath("//td[@class='left']/a[text()='JobTitle']"));  
    const row = await i.findElement(By.xpath("./../.."));
    await row.findElement(By.xpath('td[text()="JobDescr"]'));
    await row.findElement(By.xpath('td[2]/a')).click();
    await driver.findElement(By.id("btnSave")).click();
    await driver.findElement(By.id("jobTitle_jobDescription")).clear();
    await driver.findElement(By.id("jobTitle_jobDescription")).sendKeys("JobDescr_NEW");
    await driver.findElement(By.id("btnSave")).click();
    const inew = await driver.findElement(By.xpath("//td[@class='left']/a[text()='JobTitle']"));
    const rownew = await inew.findElement(By.xpath("./../.."));
    await rownew.findElement(By.xpath('td[1]/input')).click();
    await driver.findElement(By.id("btnDelete")).click();
    await driver.findElement(By.id("dialogDeleteBtn")).click();
};
Func();