import {atom} from "jotai";

/**
 * This file contains platform-agnostic code that manages the state of a contact form. The state is divided into two
 * pieces:
 *  1) Input values
 *  2) Validation
 *
 *  This type of file allows component and business logic to be defined and tested in one place, and then shared
 *  across multiple React applications that share similar functionality or interact with the same apis. This can be seen
 *  throughout the Rhombus frontend repository; the web console is a React app, and there are mobile, ipad, and appletv
 *  apps running React Native.
 *
 *  This allows for dramatic decreases in development time for features that are implemented across multiple applications,
 *  as well as increasing the robustness of the code. Dependency on slow, heavy testing frameworks that rely on analyzing
 *  rendered content is also greatly reduced.
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

const failedValidationAtom = atom(get => undefined) // TODO: Iterate over validations and find failure(s) (so that we can notify the user)

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