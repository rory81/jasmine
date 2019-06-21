describe("fizzBuzz function", function() {
    beforeEach(function() {
        fb = new fizzBuzz();
    });
    describe("division by 3 or 5", function() {
        it("should return FizzBuzz", function() {
            expect(fizzBuzz(15)).toBe("FizzBuzz");
        });
        it("should return Fizz", function() {
            expect(fizzBuzz(9)).toBe("Fizz");
        });
        it("should return Buzz", function() {
            expect(fizzBuzz(40)).toBe("Buzz");
        });
        it("should return the given value if it can not be divided by 3 or 5", function() {
            expect(fizzBuzz("test")).toBe("test");
        });
    });
});
