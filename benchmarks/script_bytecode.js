/**
 * Copyright (c) 2017-present, BlockCollider developers, All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
const Benchmark = require('benchmark')

const { toASM } = require('../dist/script/bytecode')

// 1G34qSE1kaU9D4XHknTG9fM8T5tHwULpxE
const binary = Buffer.from([
  // preamble v1 (0b, B, C, 1)
  0x00, 0x2a, 0x2b, 0x01,
  // OP_MONOID
  0x01,
  // 2 - ascii encoded
  0x94, 0x01, 0x32,
  // 3 - ascii encoded
  0x94, 0x01, 0x33,
  // 100 - ascii encoded
  0x94, 0x03, 0x31, 0x30, 0x30,
  // 100 - ascii encoded
  0x94, 0x03, 0x31, 0x30, 0x30,
  // OP_DEPSET OP_0 OP_IFEQ OP_RETURN OP_ENDIFEQ OP_2 OP_IFEQ
  0x05, 0x06, 0x0f, 0x16, 0x10, 0x0a, 0x0f,
  // OP_TAKERPAIR OP_2 OP_0 OP_MINUNITVALUE OP_RETURN_RESULT OP_ENDIFEQ OP_3 OP_IFEQ OP_RETURN
  0x47, 0x0a, 0x06, 0x3d, 0x15, 0x10, 0x0b, 0x0f, 0x16,
  // OP_ENDIFEQ OP_DROP eth dai
  0x10, 0x24, 0x7f, 0x83,
  // 0x7efbb13383757ca1f581dd5e20cb2e9f24448608
  0x02, 0x14, 0x7e, 0xfb, 0xb1, 0x33, 0x83, 0x75, 0x7c, 0xa1, 0xf5, 0x81, 0xdd, 0x5e, 0x20, 0xcb, 0x2e, 0x9f, 0x24, 0x44, 0x86, 0x08,
  // 0x7efbb13383757ca1f581dd5e20cb2e9f24448608
  0x02, 0x14, 0x7e, 0xfb, 0xb1, 0x33, 0x83, 0x75, 0x7c, 0xa1, 0xf5, 0x81, 0xdd, 0x5e, 0x20, 0xcb, 0x2e, 0x9f, 0x24, 0x44, 0x86, 0x08,
  // 0.1 - ascii encoded
  0x94, 0x03, 0x30, 0x2e, 0x31,
  // 10 - ascii encoded
  0x94, 0x02, 0x31, 0x30,
  // OP_MAKERCOLL OP_3 OP_IFEQ OP_BLAKE2BL
  0x73, 0x0b, 0x0f, 0x59,
  // 0x3266bbec0ac0899e8a42a264465e0d04a576e57192382f63b74434c2a65277c2
  0x02, 0x20, 0x32, 0x66, 0xbb, 0xec, 0x0a, 0xc0, 0x89, 0x9e, 0x8a, 0x42, 0xa2, 0x64, 0x46, 0x5e, 0x0d, 0x04, 0xa5, 0x76, 0xe5, 0x71, 0x92, 0x38, 0x2f, 0x63, 0xb7, 0x44, 0x34, 0xc2, 0xa6, 0x52, 0x77, 0xc2,
  // OP_EQUALVERIFY OP_CHECKSIGVERIFY OP_RETURN_RESULT OP_ENDIFEQ OP_2 OP_IFEQ
  0x18, 0x19, 0x15, 0x10, 0x0a, 0x0f,
  // 1 - ascii encoded
  0x94, 0x01, 0x31,
  // OP_MONADSPLIT OP_MONAD OP_BLAKE2BL
  0x79, 0x77, 0x59,
  // 0x3266bbec0ac0899e8a42a264465e0d04a576e57192382f63b74434c2a65277c2
  0x02, 0x20, 0x32, 0x66, 0xbb, 0xec, 0x0a, 0xc0, 0x89, 0x9e, 0x8a, 0x42, 0xa2, 0x64, 0x46, 0x5e, 0x0d, 0x04, 0xa5, 0x76, 0xe5, 0x71, 0x92, 0x38, 0x2f, 0x63, 0xb7, 0x44, 0x34, 0xc2, 0xa6, 0x52, 0x77, 0xc2,
  // OP_EQUALVERIFY OP_CHECKSIGVERIFY OP_ENDMONAD OP_ENDIFEQ
  0x18, 0x19, 0x78, 0x10,
])
/* tslint:enable:max-line-length */
// add tests
const suite = new Benchmark.Suite()
suite.add('bytecode#toASM', function() {
    const asm = toASM(binary, 0x01)
})
// add listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
// run async
.run();