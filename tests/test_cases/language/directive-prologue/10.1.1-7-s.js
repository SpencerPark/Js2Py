// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 10.1.1-7-s
description: >
    Strict Mode - Use Strict Directive Prologue is ''use strict';'
    which appears at the end of the block
flags: [noStrict]
includes: [runTestCase.js]
---*/

function testcase() {
        var public = 1;
        return public === 1;
        "use strict";
    }
runTestCase(testcase);
