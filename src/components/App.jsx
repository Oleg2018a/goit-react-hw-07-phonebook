import React, { useEffect } from 'react'
import Section from './Section/Section';
import  ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operation';
 



const App = () => {
const loading = useSelector(state => state.contacts.isLoading);
const error = useSelector(state => state.contacts.error);
  const dispatch = useDispatch()
  
    useEffect(() => {
      dispatch(fetchContacts());
    }, [dispatch]);
  
 return (
   <>
     <Section title="Phonebook">
       <ContactForm />
     </Section>
     <Section title="Contacts">
       <Filter />
       {loading && !error && <b>Request in progress...</b>}
       <ContactList />
     </Section>
   </>
 );

}

export default App




