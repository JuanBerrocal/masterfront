
var game = () => {
    // Properties.
    var dice1, dice2;

    // Methods.
    
    return {
        reset: function () {
            dice1 = null;
            dice2 = null;
        },
        play: function () {
            dice1 = (Math.floor(Math.random() * 6)) + 1;
            dice2 = (Math.floor(Math.random() * 6)) + 1;
            console.log("Primer dado: " + dice1 + ", Segundo dado: " + dice2 + ((dice1 === 6 && dice2 === 6) ? (" Premio!!") : ("")));
        }
    };
}


