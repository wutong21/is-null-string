try {
  var isNullString = require("is-null-str")
} catch (e) {
  var isNullString = require("..")
}

var assert = require("assert");

describe('is-null-str', function () {
  describe("valid", function () {
    it('空字符串', function () {
      assert(isNullString(''))
    })
    it('null', function () {
      assert(isNullString(JSON.parse('null')))
    })
    it('undefined', function () {
      assert(isNullString(undefined))
    })
  })
})
