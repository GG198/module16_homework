const getPercents = require('./persentage');
describe("test function getPercents", () => {
    const num = 40;
    const persent = 200;
    const result = 80;
    it("determine the percentage of the given number", () => {
        expect(getPercents(num, persent)).toBe(result);
    });
    it("incorrect data entered!", () => {
        expect(getPercents(-4, 200)).toBe("number & percent  должны быть положительными числами и > 0!");
    });
    it("test for corner case", () => {
        expect(getPercents(40, 0)).toBe(0);
    });

});