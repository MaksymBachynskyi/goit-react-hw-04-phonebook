import { StyledBtn, Wrapper } from './contactList.styled';
export const ContactList = ({ contacts, onDelete }) => {
  return (
    <div>
      {contacts.map(item => {
        return (
          <Wrapper key={item.id}>
            {item.name}: {item.number}
            <StyledBtn
              onClick={() => {
                onDelete(item.id);
              }}
            >
              Delete
            </StyledBtn>
          </Wrapper>
        );
      })}
    </div>
  );
};
