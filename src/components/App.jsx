import React from 'react'
import Section from './Section/Section';
import  ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

const App = () => {
 return (
   <>
     <Section title="Phonebook">
       <ContactForm/>
     </Section>
     <Section title="Contacts">
       <Filter />
       <ContactList />
     </Section>
   </>
 );

}

export default App




