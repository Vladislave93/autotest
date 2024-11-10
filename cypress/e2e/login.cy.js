describe('проверка авторизации', function () {

    // 1.Проверка на позитивный кейс авторизации
    it('верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/'); // зашли на сайт 
         cy.get('#forgotEmailButton').should('have.css','color','rgb(0, 85, 152)'); // цвет кнопки 'восстановить пароль'
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.wait(5000);
         cy.get('#messageHeader').contains('Авторизация прошла успешно');
         cy.get('#messageHeader').should('be.visible'); // видно пользователю 
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя 
     })
     // 3.Проверка на негативный кейс авторизации
     it('неверный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт 
        cy.get('#forgotEmailButton').should('have.css','color','rgb(0, 85, 152)'); // цвет кнопки 'восстановить пароль'
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqast1udio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#messageHeader').should('be.visible'); // видно пользователю 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя 
    })
    // 5.Проверка на негативный кейс валидации
    it('Проверка валидации ', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт 
        cy.get('#forgotEmailButton').should('have.css','color','rgb(0, 85, 152)'); // цвет кнопки 'восстановить пароль'
        cy.get('#mail').type('germandolnikov.ru'); // логин без @
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
        cy.get('#messageHeader').should('be.visible'); // видно пользователю 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя 
    })
    // 2.Проверка логики восстановления пароля
    it('Проверка восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт 
        cy.get('#forgotEmailButton').should('have.css','color','rgb(0, 85, 152)'); // цвет кнопки 'восстановить пароль'

        cy.get('#forgotEmailButton').click(); // нажимаю восс. пароль 
        cy.get('#mailForgot').type('german@dolnikov.ru');
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //  проверка текста 
        cy.get('#messageHeader').should('be.visible'); // видно пользователю 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя 
    })
    // 4. Проверка на негативный кейс авторизации
    it('верный пароль и неверный логин', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт 
        cy.get('#forgotEmailButton').should('have.css','color','rgb(0, 85, 152)'); // цвет кнопки 'восстановить пароль'
        cy.get('#mail').type('german@dolnikovv.ru'); // неверная почта 
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#messageHeader').should('be.visible'); // видно пользователю 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя 
    })
    //6.Проверка на приведение к строчным буквам в логине
    it('верный пароль и верный логин 2', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт 
        cy.get('#forgotEmailButton').should('have.css','color','rgb(0, 85, 152)'); // цвет кнопки 'восстановить пароль'
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#messageHeader').should('be.visible'); // видно пользователю 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя 
    })
 }) 
  