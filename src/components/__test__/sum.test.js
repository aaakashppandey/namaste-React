import { sum } from "../sum";
test("Sum of 2 values", () => {
  const result = sum(3, 4);
  // Assertion
  expect(result).toBe(7);
});
