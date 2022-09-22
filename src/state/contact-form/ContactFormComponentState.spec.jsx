import React from "react";
import {act, renderHook} from "@testing-library/react";
import ContactFormComponentState from "./ContactFormComponentState";
import {useAtom, Provider, useAtomValue} from "jotai";


describe('Contact form component state', () => {
  it('should get and set name', () => {
    const { result } = render();

    expect(result.current.name).toBe("")

    const newName = "john";

    act(() => result.current.setName(newName));

    expect(result.current.name).toBe(newName);
  });

  // TODO: Automate testing empty string validation for required fields (name, phone, email)
  // Note: There are two approaches that can work here
  //  1) Write and test an abstraction for the creation of a validation
  //  2) Write an abstraction to automate the testing of a validation
  it('should validate that name is not empty', () => {
    const { result } = render();

    expect(result.current.missingName).toBe(true);

    act(() => result.current.setName("asdf"));

    expect(result.current.missingName).toBe(false);
  });

  it('should find the failed validation', () => {
    // TODO
  });
});

const {
  FormFieldState: {
    nameAtom,
    emailAtom,
    phoneNumberAtom,
  },
  FormValidationState: {
    missingNameAtom,
    missingPhoneAtom,
    missingEmailAtom,
    failedValidationAtom,
  }
} = ContactFormComponentState;

function render() {
  return renderHook(
    () => {
      const [name, setName] = useAtom(nameAtom);
      const [phone, setPhone] = useAtom(phoneNumberAtom);
      const [email, setEmail] = useAtom(emailAtom);

      const missingName = useAtomValue(missingNameAtom);
      const missingPhone = useAtomValue(missingPhoneAtom);
      const missingEmail = useAtomValue(missingEmailAtom);

      const failedValidation = useAtomValue(failedValidationAtom);

      return {
        name, setName,
        phone, setPhone,
        email, setEmail,

        missingName,
        missingPhone,
        missingEmail,

        failedValidation,
      }
    },
    { wrapper: props => <Provider>{props.children}</Provider>})
}
