import React from 'react'
import { DeleteButton, Wrapper } from './Contactitem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operation';



const ContactItem = ({item}) => {
  const dispatch = useDispatch();
  
   const handleDeleteContact = () => {
    dispatch(deleteContact(item.id));
  };
  return (
    <Wrapper>
      <p> {`${item.name} : ${item.phone}`}</p>

      <DeleteButton onClick={handleDeleteContact} type="click">
        delete
      </DeleteButton>
    </Wrapper>
  );
};

export default ContactItem