const unroll = require("./unroll");

describe("#unroll", function () {

  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });

  test('square', () => {
    const square = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16]
    ];
    let response = unroll(square)
    expect(response).toEqual([1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]);
  })

  test('smallerSquare', () => {
    const smallerSquare = [
      ["a", "b", "c"],
      ["d", "e", "f"],
      ["g", "h", "i"]
    ];
    let response = unroll(smallerSquare)
    expect(response).toEqual(["a", "b", "c", "f", "i", "h", "g", "d", "e"]);
  })
  test('1 arr square', () => {
    const oneSquare = [[1]];
    let response = unroll(oneSquare)
    expect(response).toEqual([1]);
  })
  test('2x2', () => {
    const twoSquare = [
      ["a", "b"],
      ["d", "e"]
    ];
    let response = unroll(twoSquare)
    expect(response).toEqual(["a", "b", "e", "d"]);
  })
})