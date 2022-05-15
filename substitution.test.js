const expect = require("chai").expect;
const {substitution} = require("../src/substitution");

describe("substitution", () => {
  it("should return false if the given alphabet isn't exactly 26 characters long", () => {
    let input = "a";
    let alphabet = "abc";
    let actual = substitution(input, alphabet, (encode = true));
    expect(actual).to.be.false;
  });
  it("should correctly translate the given phrase, based on the alphabet given to the function", () => {
    let input = "Look At Me";
    let alphabet = "xoyqmcgrukswaflnthdjpzibev";
    let expected = "wlls xj am";
    let actual = substitution(input, alphabet, (encode = true));
    expect(actual).to.equal(expected);
  });
  it("should return false if there are any duplicate characters in the given alphabet", () => {
    let input = "Look";
    let alphabet = "xxyqmcgrukswaflnthdjpzibev";

    let actual = substitution(input, alphabet, (encode = true));
    expect(actual).to.be.false;
  });
  it("should maintain spaces when decoding", () => {
    let expected = "look at me now";
    let alphabet = "xoyqmcgrukswaflnthdjpzibev";
    let input = "wlls xj am fli";
    let encode = false;
    let actual = substitution(input, alphabet, encode);
    expect(actual).to.equal(expected);
  });
  it("should maintain spaces when encoding", () => {
    let input = "look at me now";
    let alphabet = "xoyqmcgrukswaflnthdjpzibev";
    let expected = "wlls xj am fli";
    let actual = substitution(input, alphabet, (encode = true));
    expect(actual).to.equal(expected);
  });
  it("should ignore capitalization", () => {
    let input1 = "look at me now";
    let alphabet = "xoyqmcgrukswaflnthdjpzibev";
    input2 = "LooK AT me NOw";
    let actual = substitution(input1, alphabet, (encode = true));
    let expected = substitution(input2, alphabet, (encode = true));

    expect(actual).to.equal(expected);
  });
});
