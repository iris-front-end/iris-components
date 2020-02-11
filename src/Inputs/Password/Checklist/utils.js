export const checklistUtils = {
  charactersMax: val => val.lenth >= 6,
  hasSmallLetters: val => val.search(/[a-zç]/) !== -1,
  hasUppercaseLetters: val => val.search(/[A-ZÇ]/) !== -1,
  hasSpecialCharacter: val => val.search(/[^\wçÇ\s]/) !== -1,
  hasNumber: val => val.search(/\d/) !== -1,
  items: [
    {
      label: 'login.recoverPassword.checklist.min.label',
      title: 'login.recoverPassword.checklist.min.title',
      valid: val => val.length >= 6,
    },
    {
      label: 'login.recoverPassword.checklist.uppercase.label',
      title: 'login.recoverPassword.checklist.uppercase.title',
      valid: val => val.search(/[A-ZÇ]/) !== -1,
    },
    {
      label: 'login.recoverPassword.checklist.lowercase.label',
      title: 'login.recoverPassword.checklist.lowercase.title',
      valid: val => val.search(/[a-zç]/) !== -1,
    },
    {
      label: 'login.recoverPassword.checklist.special.label',
      title: 'login.recoverPassword.checklist.special.title',
      valid: val => val.search(/[^\wçÇ\s]/) !== -1,
    },
    {
      label: 'login.recoverPassword.checklist.number.label',
      title: 'login.recoverPassword.checklist.number.title',
      valid: val => val.search(/\d/) !== -1,
    },
  ],
  samePassword: {
    label: 'login.recoverPassword.checklist.equals.label',
    title: 'login.recoverPassword.checklist.equals.title',
  },
};
