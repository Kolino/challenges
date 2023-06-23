import { sum } from "./sum-tdd.js";

const noArgsError = new Error("At least one argument must be given");
const invalidArgsError = new Error("All arguments given must be numbers");

describe("Test cases for sum function", () => {
    it("Should throw an error if an incorrect number of arguments are given", () => {
        expect(() => {
            sum();
        }).toThrow(noArgsError);
    });

    it("Should throw an error if the given arguments are of incorrect type", () => {
        expect(() => {
            sum("potato");
        }).toThrow(invalidArgsError);
        expect(() => {
            sum(1, "cat");
        }).toThrow(invalidArgsError);
        expect(() => {
            sum(1, "dog", 3);
        }).toThrow(invalidArgsError);
    });

    it("Should correctly sum numbers given", () => {
        expect(sum(21)).toBe(21);
        expect(sum("21")).toBe(21);
        expect(sum(-1)).toBe(-1);
        expect(sum(2, 5)).toBe(7);
        expect(sum(-2, 5)).toBe(3);
        expect(sum(2, "5", 7)).toBe(14);
        expect(sum(2, "-5", 7)).toBe(4);
    })
});