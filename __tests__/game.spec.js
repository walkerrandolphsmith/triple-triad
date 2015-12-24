describe("Game", () => {
    let sut;
    beforeEach(() => {
        sut = function(a, b){ return a + b}
    });

    describe("Given two integers", () => {

        let a, b;
        beforeEach(() => {
            a = 5;
            b = 5;
        });

        it("sums them", () => {
            expect(sut(a, b)).toEqual(10);
        })
    })
});