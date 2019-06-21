describe("whatCanIDrink function", function() {
    beforeEach(function() {
        drink = new whatCanIDrink();
    });

    describe("age tests", function() {
        it("should give an error if the age is a negative number", function() {
            expect(whatCanIDrink(-5)).toBe("Error");
        });
        it("should return 'Drink Toddy'", function() {
            expect(whatCanIDrink(13)).toBe("Drink Toddy");
        });
        it("should return 'Drink Coke'", function() {
            expect(whatCanIDrink(17)).toBe("Drink Coke");
        });
        it("should return 'Drink Beer'", function() {
            expect(whatCanIDrink(18)).toBe("Drink Beer");
        });
        it("should return 'Drink Whisky'", function() {
            expect(whatCanIDrink(100)).toBe("Drink Whisky");
        });
        it("should return an error if the age is higher or equal to 130", function() {
            expect(whatCanIDrink(140)).toBe("Error2");
        });
    });
});
