// Copyright 2011 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.3.4.2_A12
description: >
    The Function.prototype.toString function is not generic; it throws
    a TypeError exception if its this value is not a Function object.
negative: TypeError
---*/

Function.prototype.toString.call(undefined);
