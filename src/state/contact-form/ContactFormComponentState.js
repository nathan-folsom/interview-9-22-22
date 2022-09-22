import {atom} from "jotai";

/**
 * This file contains platform-agnostic code that manages the state of a contact form. The state is divided into two
 * pieces:
 *  1) Input values
 *  2) Validation
 */

// Input values
const nameAtom = atom("");

const phoneNumberAtom = atom("");

const emailAtom = atom("");

// Validation
const missingNameAtom = atom(get => get(nameAtom).length);

const missingPhoneAtom = atom( get => get(phoneNumberAtom).length);

const missingEmailAtom = atom( get => get(emailAtom).length);

// TODO validate the format of the email
// const invalidEmailAtom = atom(get => {
//   const email = get(emailAtom);
// });

const validations = [
  {
    conditionAtom: missingNameAtom,
    message: "Name is required"
  },
  {
    conditionAtom: missingEmailAtom,
    message: "Email is required"
  },
  {
    conditionAtom: missingPhoneAtom,
    message: "Phone is required"
  }
]

const failedValidationAtom = atom(get => undefined) // TODO: Iterate over validations and find failure(s) that can be shown to the user

export default {
  FormFieldState: {
    nameAtom,
    phoneNumberAtom,
    emailAtom,
  },
  FormValidationState: {
    missingNameAtom,
    missingPhoneAtom,
    missingEmailAtom,
    failedValidationAtom,
  }
}