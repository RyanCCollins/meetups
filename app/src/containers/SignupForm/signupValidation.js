import * as validation from '../../utils/validator';
import memoize from 'lru-memoize';

// Compose validation functions for all input fields
const password = [
  validation.containsLowercase,
  validation.containsUppercase,
  validation.minLength(8),
  validation.containsNumber,
  validation.valueRequired
];

const fullname = [
  validation.containsTwoWords,
  validation.valueRequired
];

const email = [
  validation.isEmail,
  validation.valueRequired
];

// Create the validator
const signupValidation = validation.createValidator({
  password,
  fullname,
  email
});

/* Memoize and export */
const validator = memoize(10)(signupValidation);
export default validator;
