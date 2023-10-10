import { FormEvent, useState } from "react"
import DefaultLayout from "../layouts/Default.layout"
import { useAuth } from "../auth/AuthProvider"
import { Navigate } from "react-router-dom"
import { gql, useMutation, useQuery } from "@apollo/client"

const LOGGIN = gql`
mutation{
    login(input:{email:"test1@correo.com", password:"mypass"})
      {
      message
      accessToken
      data {
        id
        name
      }
    }
  }
`;

export default function Login() {
    const [user, setName] = useState('')
    const [password, setPassoword] = useState('')
    const auth = useAuth()

    if (auth.isAuthenticated){
        return <Navigate to='/dashboard'/>
    }

    const [log_user] = useMutation(LOGGIN, {
        variables: {
          email: user,
          passwors: password
        },
        refetchQueries: ['Get']
      });


    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        // auth.setIsAuthenticated(true);
        const a = await log_user();
 
        console.log(a)

        try {

        } catch (error) {
          console.log(error);
        }
      }

      
    return (
        <DefaultLayout>
            <form className="form" onSubmit={handleSubmit}>
                <h1>Login</h1>
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

                <button>Login</button>
            </form>
        </DefaultLayout>
    )
}