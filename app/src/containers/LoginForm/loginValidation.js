import * as validation from '../../utils/validator';
import memoize from 'lru-memoize';

// Compose validation functions for all input fields
const passwordInput = [
  validation.minLength(8),
  validation.maxLength(20),
  validation.containsNumber,
  validation.valueRequired,
];

const emailInput = [
  validation.isEmail,
  validation.valueRequired
];

// Create the validator
const loginValidation = validation.createValidator({
  passwordInput,
  emailInput
});

/* Memoize and export */
const validator = memoize(10)(loginValidation);
export default validator;
