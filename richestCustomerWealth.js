# Richest customer wealth

var maximumWealth = function(accounts) {
    var richestCustomer = 0

    // iterate over the customers
    for (var i = 0; i < accounts.length; i++) {
      // assign customer an alias
        var currentCustomer = accounts[i];
        var currentCustomerWealth = 0;
        for (var j = 0; j < currentCustomer.length; j++) {
            // for each customer, add up all their money
            currentCustomerWealth += currentCustomer[j];
            // if current customer wealth is greater than richest customer, richest = current

        }
         if (currentCustomerWealth > richestCustomer) {
                richestCustomer = currentCustomerWealth;
            }

    }
    // return richest customer
    return richestCustomer;
};