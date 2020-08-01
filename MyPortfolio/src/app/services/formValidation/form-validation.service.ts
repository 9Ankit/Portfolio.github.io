import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormValidationService {

  constructor() { }
  static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {

    let config = {
      'required': 'Required',
      'invalidCreditCard': 'Is invalid credit card number',
      'invalidEmailAddress': 'Invalid email address',
      'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number and a special character.',
      'minlength': `Minimum length ${validatorValue.requiredLength}`,
      'invalidName': 'Only characters allowed',
      'invalidAddress': 'Not a valid Address',
      'invalidNumber': 'Not a valid Number',
      'invalidPhoneNumber': 'Not a valid Phone Number',
      'invalidDOB': 'Please enter the date of birth in mm/dd/yyyy format.',
      'invalidZipCode': 'Not a valid Zip Code'

    };
    return config[validatorName];
  }

  validateEmail(c: FormControl) {

    let EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
    return EMAIL_REGEXP.test(c.value) ? null : {
      invalidEmailAddress: true
    };
  }
  validateName(c: FormControl) {
    let NAME_REGEXP = /^[a-z A-Z]+$/;
    return NAME_REGEXP.test(c.value) ? null : {
      invalidName: true
    };
  }
  validateAddress(c: FormControl) {
    let ADDRESS_REGEXP = /[0-9a-zA-Z #,-]+/
    return ADDRESS_REGEXP.test(c.value) ? null : {
      invalidAddress: true
    };
  }
  validateNumber(c: FormControl) {
    let NUMBER_REGEXP = /^[0-9]+$/;
    return NUMBER_REGEXP.test(c.value) ? null : {
      invalidNumber: true
    };
  }
  validatePhoneNumber(c: FormControl) {
    let PHONE_REGEXP = /^\d{10}$/;
    return PHONE_REGEXP.test(c.value) ? null : {
      invalidPhoneNumber: true
    };
  }
  validatePassword(c: FormControl) {
    let PASSWORD_REGEXP = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    return PASSWORD_REGEXP.test(c.value) ? null : {
      invalidPassword: true
    };
  }
  validateDOB(c: FormControl) {
    let DOB_REGEXP = /^((0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2})*$/;
    return DOB_REGEXP.test(c.value) ? null : {
      invalidDOB: true
    };
  }
  validateCreditCardNumber(c: FormControl) {
    let CREDITCARD_REGEXP = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
    return CREDITCARD_REGEXP.test(c.value) ? null : {
      invalidCreditCard: true
    };
  }
  validateZipCode(c: FormControl) {
    let ZIPCODE_REGEXP = /(^\d{6}$)|(^\d{5}-\d{4}$)/;
    return ZIPCODE_REGEXP.test(c.value) ? null : {
      invalidZipCode: true
    };
  }


}
