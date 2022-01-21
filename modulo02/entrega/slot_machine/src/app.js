
function SlotMachine() {
    // Properties.
    this.roulette1 = false, this.roulette2 = false, this.roulette3 = false;
    this.coins = 0;
}
    
// Methods.

 SlotMachine.prototype.play = function () {
            this.coins++;
            this.roulette1 = (Math.random() <= 0.5) ? false : true; 
            this.roulette2 = (Math.random() <= 0.5) ? false : true; 
            this.roulette3 = (Math.random() <= 0.5) ? false : true; 
            
            if (this.roulette1 && this.roulette2 && this.roulette3) {
                console.log("Congratulations!! You won " + this.coins + " coins!!");
                this.coins = 0;
            }
            else {
                console.log("Good luck next time!!");
            }
}

const slotMachine = new SlotMachine;


