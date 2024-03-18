const fetch = require('node-fetch');

// Step 1: Create Investment Account
const createAccount = async() => {
    const accountCreationUrl = "https://customer-analytics-34146.my.salesforce-sites.com/services/apexrest/createAccount";
    const headers = { "Content-Type": "application/json" };
    const accountData = {
        "name": "Varun Kumar",
        "email": "varun1525.be21@chitkara.edu.in",
        "rollNumber": 2110991525, // Your roll number
        "phone": 7707908940 // Your phone number
    };

    try {
        const response = await fetch(accountCreationUrl, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(accountData)
        });

        const accountInfo = await response.json();
        const accountNumber = accountInfo.accountNumber;
        return accountNumber;
    } catch (error) {
        console.error('Error creating account:', error);
        throw error;
    }
};

// Step 2: Research Bajaj Finserv
const currentStockPrice = 5000; 

// Step 3: Buy Stocks
const buyStocks = async(accountNumber) => {
    const buyStocksUrl = "https://customer-analytics-34146.my.salesforce-sites.com/services/apexrest/buyStocks";
    const headers = {
        "Content-Type": "application/json",
        "bfhl-auth": "2110991525" 
    };
    const buyData = {
        "company": "Bajaj Finserv",
        "currentPrice": currentStockPrice,
        "accountNumber": accountNumber,
        "githubRepoLink": "https://github.com/varunXkumar/bajaj-api" 
    };

    try {
        const response = await fetch(buyStocksUrl, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(buyData)
        });

        const responseData = await response.json();
        console.log(responseData);
    } catch (error) {
        console.error('Error buying stocks:', error);
        throw error;
    }
};
(async() => {
    try {
        const accountNumber = await createAccount();
        await buyStocks(accountNumber);
    } catch (error) {
        console.error('Error:', error);
    }
})();
