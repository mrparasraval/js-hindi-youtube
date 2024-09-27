// Immidiately Invoked Function  Expression ( IIFE )

(function Chai() {
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
    
}) ('Paras');
