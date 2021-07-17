import React,{useState} from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { nanoid } from 'nanoid';
import data from './data.json'

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: "50%",
    left: "50%",
      transform: `translate(-${top}%)`,
      transform: `translate(-${left}%)`,
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      width: '100%',
    backgroundColor:'white',
      border: 'none',
      borderBottom: '2px solid blue',
      borderTop: '2px solid blue',
      padding: theme.spacing(2, 4, 3),
      minHeight:'200px',
      flexWrap: 'wrap',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems:'center'
    },
    form: {
      display: 'flex',
      flexWrap:'wrap',
    }
  }),
);

export default function Modals() {
  const [addFormData, setAddFormData] = useState({
    name: '',
    adress: '',
    number: '',
    email:''
  });
  const handleaddform = (event) => {
    event.preventDefault();
  
    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
  };

  const handleaddformsubmit = (event) => {
    event.preventDefault();
    const newContact = {
      id: nanoid(),
      name: addFormData.name,
      adress: addFormData.adress,
      number: addFormData.number,
      email: addFormData.email,
    };
    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  
}



  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Add new contac</h2>
      <form onSubmit={handleaddformsubmit} className={classes.form}>
        <input type="text"
          name="name"
          required="required"
          placeholder="Full name"
          onChange={handleaddform}
        />
         <input type="text"
          name="adress"
          required="required"
          placeholder="Adress"
          onChange={handleaddform}
        />
         <input type="number"
          name="number"
          required="required"
          placeholder="Phone number"
          onChange={handleaddform}
        />
         <input type="email"
          name="email"
          required="required"
          placeholder="your mail adress"
          onChange={handleaddform}
        />
        <button type="submit">Add</button>
     </form>
      
    </div>
  );
const [contacts, setContacts] = useState(data);
  return (
    <div>
      <div className='container'>
            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>adress</th>
                        <th>phone number</th>
                        <th>@mail</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact) => (
                        <tr>
                            <td>{contact.name}</td>
                            <td>{contact.adress}</td>
                            <td>{contact.number}</td>
                            <td>{contact.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
           
        </div>
      <button type="button" onClick={handleOpen}>
        New contact
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}