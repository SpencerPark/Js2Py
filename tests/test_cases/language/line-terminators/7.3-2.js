// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 7.3-2
description: >
    7.3 - ES5 recognizes the character <PS> (\u2029) as line
    terminators when parsing statements
includes: [runTestCase.js]
---*/

function testcase() {
        eval("var test7_3_2\u2029prop = 66;");
        return (prop===66) && ((typeof test7_3_2) === "undefined");
    }
runTestCase(testcase);
