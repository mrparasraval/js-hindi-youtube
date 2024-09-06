const accountId = 12456
let accountEmail = "kohli18@gmail.com"
var accountPassword = "12456"
accountCity = "jaipur"
let accountState;

// accountId = 2 // Note  : Const is Not Changeble Object

accountEmail = "hc@hc.com"
accountPassword = "2345"
accountCity = "ladol"

console.log(accountId);

/*
Prefer Not Use Var
Bacause of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])