import React from "react";
import {renderHook} from "@testing-library/react";
import ContactFormComponentState from "./ContactFormComponentState";
import {useAtom, Provider} from "jotai";

const {
  FormFieldState: {
    nameAtom
  },
} = ContactFormComponentState;

describe('Contact form component state', () => {
  it('should get and set name', () => {
    const { result } = render();

    const initialName = result.current.name;

    expect(initialName).toBe("")
  });
});

function render() {
  return renderHook(
    () => {
      const [name, setName] = useAtom(nameAtom);

      return {
        name, setName
      }
    },
    { wrapper: props => <Provider>{props.children}</Provider>})
}
