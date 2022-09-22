import {atom} from "jotai";

const nameAtom = atom("");

const missingNameAtom = atom(get => get(nameAtom).length);

export default {
  FormFieldState: {
    nameAtom,
  },
  FormValidationState: {
    missingNameAtom
  }
}