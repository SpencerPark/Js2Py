// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 13.1-39-s
description: >
    StrictMode - SyntaxError is thrown if 'arguments' occurs as the
    function name of a FunctionDeclaration in strict eval code
flags: [onlyStrict]
includes: [runTestCase.js]
---*/

function testcase() {

        try {
            eval("'use strict'; function arguments() { };")
            return false;
        } catch (e) {
            return e instanceof SyntaxError;
        }
    }
runTestCase(testcase);
