/**
 * @fileoverview check sensitive symbol
 * @author yaofangchao
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/sensitive-symbol-check"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("sensitive-symbol-check", rule, {
  valid: ["function test(d, e, f) {}"],
  invalid: [
    {
        code: "function test(a, b, c, d) {let temp = '¥'}",
        errors: [{
            message: "symbol ¥ can't be used in this project",
        }]
    },
  ],
});
