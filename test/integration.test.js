// Integration tests: check that the built artifact works as a GitHub Action
import assert from 'node:assert/strict';
import { existsSync, readFileSync, statSync } from 'node:fs';

const testEnv = process.env.TEST_ENV || 'local';
console.log(`Running integration tests (TEST_ENV=${testEnv})`);

// Test 1: the build produced dist/index.js
assert.ok(existsSync('dist/index.js'), 'dist/index.js is missing');
console.log('✔ dist/index.js exists');

// Test 2: the built file is not empty
assert.ok(statSync('dist/index.js').size > 1000, 'dist/index.js is too small');
console.log('✔ dist/index.js has content');

// Test 3: action.yml points to the built file
const actionYml = readFileSync('action.yml', 'utf8');
assert.ok(actionYml.includes('dist/index.js'), 'action.yml does not point to dist/index.js');
console.log('✔ action.yml points to dist/index.js');

console.log('All integration tests passed');
