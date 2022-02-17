const hasNumber = (string) => (string.search(/\d/) !== -1);

class PasswordValidator {
  constructor(options) {
    const defaultOptions = {
      containNumbers: true,
      minLength: 8,
    };

    this.options = { ...defaultOptions, ...options };
  }

  validate(password) {
    const errors = {};

    if (this.options.containNumbers) {
      if (!hasNumber(password)) {
        errors.containNumbers = 'should contain at least one number';
      }
    }

    if (password.length < this.options.minLength) {
      errors.minLength = 'too small';
    }

    return errors;
  }
}

const validator = new PasswordValidator({ containNumbers: false });
validator.validate('qwertyui'); // {}
console.log('validator.validate(\'qwertyui\')', validator.validate('qwertyui'));

validator.validate('qwerty'); // { minLength: 'too small' }
console.log('validator.validate(\'qwerty\')', validator.validate('qwerty'));
