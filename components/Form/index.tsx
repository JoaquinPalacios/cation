import { ChangeEvent, FormEvent, useState } from 'react';

const Form = () => {
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [place, setPlace] = useState('');
    const [message, setMessage] = useState('');

    async function sendEmail(event: FormEvent) {
        event.preventDefault();

        setLoading(true);

        try {
            if (!name.trim()) {
                throw new Error('Por favor ingrese su nombre.');
            }

            if (!email.trim()) {
                throw new Error('Por favor ingrese una direccion de correo valida.');
            }

            if (!mobile.trim()) {
                throw new Error('Por favor ingrese un un numero de telefono valido.');
            }

            if (!message.trim()) {
                throw new Error('Por favor ingrese su mensaje.');
            }

            const response = await fetch('/api/nodemailer', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, mobile, message }),
            });

            const responseData = await response.json();

            if (responseData.error) {
                throw new Error(responseData.error);
            }

            setName('');
            setEmail('');
            setMobile('');
            setMessage('');
        } catch (error) {
        } finally {
            setLoading(false);
        }
    }
    return (
        <div>
            <h1>Form</h1>
            <form onSubmit={sendEmail}>
                <div className='left-column'>
                    <label htmlFor='name'>Nombre*</label>
                    <input type='text' id='name' name='name' value={name} onChange={({ target }: ChangeEvent) => setName((target as HTMLInputElement).value)} required />
                    <label htmlFor='email'>Email*</label>
                    <input type='email' id='email' name='email' pattern='.+@.+\..+' value={email} onChange={({ target }: ChangeEvent) => setEmail((target as HTMLInputElement).value)} required />
                    <label htmlFor='phone'>Teléfono*</label>
                    <input type='tel' id='phone' name='phone' value={mobile} onChange={({ target }: ChangeEvent) => setMobile((target as HTMLInputElement).value)} required />
                    <label htmlFor='place'>Localidad*</label>
                    <input type='text' id='place' name='place' value={place} onChange={({ target }: ChangeEvent) => setPlace((target as HTMLInputElement).value)} required />
                </div>
                <div className='right-column'>
                    <label htmlFor='message'>Mensaje*</label>
                    <textarea id='message' name='message' rows={10} value={message} maxLength={1000} onChange={({ target }: ChangeEvent) => setMessage((target as HTMLInputElement).value)} required />
                </div>
                {!loading ? (
                    <button type='submit'>Send</button>
                ) : (
                    <button type='submit' disabled>
                        Sending...
                    </button>
                )}
            </form>
        </div>
    );
};

export default Form;
