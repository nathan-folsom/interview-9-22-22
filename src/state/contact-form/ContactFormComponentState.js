import {atom} from "jotai";

const nameAtom = atom("");

const hasNameAtom = atom(get => get(nameAtom).length);

export default {
  FormFieldState: {
    nameAtom,
  },
  FormValidationState: {
    hasNameAtom
  }
}