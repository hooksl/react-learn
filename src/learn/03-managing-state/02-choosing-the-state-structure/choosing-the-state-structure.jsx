import { useState } from 'react';

export default function Form() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const fullName = firstName + ' ' + lastName;

    function handleFirstNameChange(e) {
        setFirstName(e.target.value);
    }

    function handleLastNameChange(e) {
        setLastName(e.target.value);
    }

    return (
        <>
            <h2>让我们帮你登记</h2>
            <label>
                名：{' '}
                <input
                    value={firstName}
                    onChange={handleFirstNameChange}
                />
            </label>
            <label>
                姓：{' '}
                <input
                    value={lastName}
                    onChange={handleLastNameChange}
                />
            </label>
            <p>
                你的票将发给：<b>{fullName}</b>
            </p>
        </>
    );
}

