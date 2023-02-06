import * as yup from 'yup';

const nameRegExp = RegExp(
  /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/
);

const numberRegExp = RegExp(/[0-9]/);

export const contactSchema = yup.object().shape({
  name: yup.string().matches(nameRegExp, "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan").min(2).required(),
  number: yup.string().matches(numberRegExp, 'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +').required(),
});

export const registerSchema = yup.object().shape({
  name: yup.string().matches(nameRegExp, "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan").min(2).required(),
  email: yup.string().email().required(),
  password: yup.string().min(4).required(),
});

export const logSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(4).required(),
});