import { useState } from 'react';
import './Home.css'

const contacts = [
    {
        id: 1,
        name: "Budi Santoso",
        phone: "081234567890",
        email: "budi@email.com",
        photo: "https://i.pravatar.cc/100?u=2"
    },
    {
        id: 2,
        name: "Ani Wijaya",
        phone: "089876543210",
        email: "ani@email.com",
        photo: "https://i.pravatar.cc/100?u=1"
    }
];

const ContactCard = ({ contact }) => {
    return (
        <div className="contact-card">
            <img src={contact.photo} alt={contact.name} />

            <div className="contact-info">
                <h3>{contact.name}</h3>
                <p><strong>ID:</strong> {contact.id}</p>
                <p><strong>Phone:</strong> {contact.phone}</p>
                <p><strong>Email:</strong> {contact.email}</p>
            </div>

        </div>
    );
}

const ContactList = ({ addContact }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !phone || !email) return

        addContact({ id: Date.now(), name, phone, email, photo: `https://i.pravatar.cc/100?u=${Date.now()}` })

        setName("")
        setPhone("")
        setEmail("")
    };

    return (
        <form onSubmit={handleSubmit} className='contact-form'>
            <input placeholder='Nama' value={name} onChange={(e) => setName(e.target.value)} type='text' />
            <input placeholder='phone' value={phone} onChange={(e) => setPhone(e.target.value)} type='text' />
            <input placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} type='email' />

            <button type='submit'>Save</button>
        </form>
    );
}
function Home() {

    const [dataContacts, setDataContacts] = useState(contacts);
    const handleAddContact = (newContact) => {
        setDataContacts([...dataContacts, newContact]);
    };


    return (
        <div className='home-container'>
            <h1>Contact List</h1>

            <ContactList addContact={handleAddContact} />

            <div className="contact-list">
                {dataContacts.map((c) => (
                    <ContactCard key={c.id} contact={c} />
                ))}
            </div>

        </div>
    );
}

export default Home