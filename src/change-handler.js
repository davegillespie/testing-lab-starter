/**
 * This class handles change for a vending machine.
 *
 * IMPORTANT: All amounts are in cents. E.g. $1.35 = 135. This will help with rounding errors.
 */
class ChangeHandler {

    constructor(amountDue, cashTendered) {
        this.amountDue = amountDue;
        this.cashTendered = cashTendered;
    }

    /**
     * The customer inserts a coin, increasing the cashTendered.
     * The parameter "type" is a string that is either quarter, dime, nickel, or penny
     */

    insertCoin(type) {
      if (type === "penny") {
        return this.cashTendered + 1;
      }
      else if (type === "nickel") {
        return this.cashTendered + 5;
      }
      else if (type === "dime") {
        return this.cashTendered + 10;
      }
      else if (type === "quarter") {
        return this.cashTendered + 25;
      }
    }

    /**
     * Returns true if enough coins have been inserted to at least meet the amountDue
     */
    isPaymentSufficient() {
      if (this.cashTendered > this.amountDue) {
        return true;
      }
      else {
        return false;
      }
    }

    giveChange() {
        // TODO return the correct change in the following format...
        let pennyPieces = 0;
        let nickelPieces = 0;
        let dimePieces = 0;
        let quarterPieces = 0;
        let change = this.cashTendered - this.amountDue;

        while (change > 0) {
            if (change >= 25) {
                change -= 25;
                quarterPieces += 1;
            }
            else if (change >= 10) {
                change -= 10;
                dimePieces += 1;
            }
            else if (change >= 5) {
                change -= 5;
                nickelPieces += 1;
            }
            else if (change >= 1) {
                change -= 1;
                pennyPieces += 1;
            }
        }

        // This does not work for some reason...
        // while (change > 0) {
        //     if (change >= 1) {
        //         change -= 1;
        //         pennyPieces += 1;
        //     }
        //     else if (change >= 5) {
        //         change -= 5;
        //         nickelPieces += 1;
        //     }
        //     else if (change >= 10) {
        //         change -= 10;
        //         dimePieces += 1;
        //     }
        //     else if (change >= 25) {
        //         change -= 25;
        //         quarterPieces += 1;
        //     }
        // }

        return {
            quarters: quarterPieces,
            dimes: dimePieces,
            nickels: nickelPieces,
            pennies: pennyPieces
        }
    }
}
