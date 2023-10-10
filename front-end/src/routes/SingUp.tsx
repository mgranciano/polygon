import { useState } from "react";
import DefaultLayout from "../layouts/Default.layout";

export default function SignUp(){

    const [user, setName] = useState('')
    const [password, setPassoword] = useState('')
    const [email, setEmail] = useState('')

    return (
        <DefaultLayout>
            <form className="form">
                <h1>Sing up</h1>
                <label>user</label>
                <input 
                    type="text" 
                    value={user}
                    onChange={ (e) => setName(e.target.value)}
                />
                <label>Password</label>
                <input 
                    type="password" 
                    value={password}
                    onChange={ (e) => setPassoword(e.target.value)}
                />
                <label>email</label>
                <input 
                    type="text" 
                    value={email}
                    onChange={ (e) => setEmail(e.target.value)}
                />

                <button>Ok</button>
            </form>
        </DefaultLayout>
    )
}