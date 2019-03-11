// "use-strict";

// These test cases are all unfinished. We will finish them together.
describe("tests for change-handler", function() {

    // Set up a test below...
    it("insertCoin()", function() {
        // Remember, you can arrange, act, and assert...start small
        // Arrange
        // let changeHandler = new ChangeHandler ({
        //     amountDue: 20,
        //     cashTendered: 21
        // });
        let changeHandler = new ChangeHandler(0,0);
        // Assert & Act
        expect(changeHandler.insertCoin('quarter')).toBe(25);
    });

    it("isPaymentSufficient()", function() {
        // Arrage
        // let changeHandler = new ChangeHandler ({
        //     amountDue: 10,
        //     cashTendered: 2
        // });
        let changeHandler = new ChangeHandler(20,30);
        // Assert & Act
        expect(changeHandler.isPaymentSufficient()).toBe(true);
    });

    it("giveChange()", function() {
        // Arrange
        // let changeHandler = new ChangeHandler ({
        //     amountDue: 100,
        //     cashTendered: 126
        // });
        let changeHandler = new ChangeHandler(100,120);
        // Assert
        expect(changeHandler.giveChange()).toEqual({quarters: 0, dimes: 2, nickels: 0, pennies: 0
        });
    });
});
