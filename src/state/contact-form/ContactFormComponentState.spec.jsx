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

  it('should validate that name is not empty', () => {
    const { result } = render();

    expect(result.current.missingName).toBe(true);

    act(() => result.current.setName("asdf"));

    expect(result.current.missingName).toBe(false);
  });
});

const {
  FormFieldState: {
    nameAtom
  },
  FormValidationState: {
    missingNameAtom
  }
} = ContactFormComponentState;

function render() {
  return renderHook(
    () => {
      const [name, setName] = useAtom(nameAtom);
      const missingName = useAtomValue(missingNameAtom);

      return {
        name, setName,
        missingName
      }
    },
    { wrapper: props => <Provider>{props.children}</Provider>})
}
