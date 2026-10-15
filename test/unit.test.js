// Unit tests: small, fast checks of logic
import assert from 'node:assert/strict';

const testEnv = process.env.TEST_ENV || 'local';
console.log(`Running unit tests (TEST_ENV=${testEnv})`);

// Test 1: basic sanity check
assert.equal(1 + 1, 2);
console.log('✔ 1 + 1 equals 2');

// Test 2: release tags follow the pipeline format (e.g. dev-v1.5)
const tag = 'dev-v1.5';
assert.match(tag, /^dev-v\d+\.\d+$/);
console.log('✔ Release tag format is valid');

// Test 3: TEST_ENV has an allowed value
assert.ok(['local', 'staging', 'prod'].includes(testEnv), `Unknown TEST_ENV: ${testEnv}`);
console.log('✔ TEST_ENV is a valid value');

console.log('All unit tests passed');
