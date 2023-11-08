
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik,   ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { StylefForm , Label, StyleField, ButtonSubmit} from './ContactForm.styled';
import { addContact } from 'redux/contactsSlice';




const initialValues = {
  name: '',
  number: '',
};

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(15, 'Too Long!')
    .required('Required'),
  number: Yup.string().min(2, 'Too Short!').required('Required'),
});

const formNameId = nanoid();
const formNumberId = nanoid();

const ContactForm = () => {
  
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items)
  
  const handleSubmit = (values, actions) => {
     const sameContacts = contacts.find(
       contact => contact.name.toLowerCase() === values.name.toLowerCase()
     );

     if (sameContacts)
      return alert(`${sameContacts.name} is already in contact`);
    
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };

    dispatch(addContact(newContact));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignupSchema}
      onSubmit={handleSubmit}
    >
      <StylefForm>
        <Label htmlFor={formNameId}>Name</Label>
        <StyleField id={formNameId} name="name" placeholder="Jack" />
        <ErrorMessage name="name" component="div" />
        <Label htmlFor={formNumberId}>Number</Label>
        <StyleField id={formNumberId} name="number" placeholder="431-21-22" />
        <ErrorMessage name="number" component="div" />
        <ButtonSubmit type="submit">Submit</ButtonSubmit>
      </StylefForm>
    </Formik>
  );
};

export default ContactForm;




