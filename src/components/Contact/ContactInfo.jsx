import React from 'react';

export default function AddToContactsButton() {

    const addToContacts = () => {
        const contactData = {
            "name": "Carol Wargo",
            "title": "Full Stack Web Developer",
            "email": "carolwargo@gmail.com",
            "phone": "(443)771-1726"
        };

        const contactString = "BEGIN:VCARD\n" +
            "VERSION:3.0\n" +
            "FN:" + contactData.name + "\n" +
            "EMAIL:" + contactData.email + "\n" +
            "TEL:" + contactData.phone + "\n" +
            "END:VCARD";

        const blob = new Blob([contactString], { type: "text/vcard" });
        const url = window.URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = 'contact.vcf';
        a.click();

        window.URL.revokeObjectURL(url);
    }

    return (
        <div className='mt-3'
        >
            <h6>Click To Add Me To Your Contacts!</h6>
            <button
                onClick={addToContacts}
                style={{
                   
                    borderRadius: '5px',
                    padding: '3px 40px',
                    backgroundColor: 'black',
                    color: 'white',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    transition: 'background-color 0.3s, box-shadow 0.3s'
                }}
                className="custom-hover"
            >
                ADD TO CONTACTS
            </button>
        </div>
    );
}
