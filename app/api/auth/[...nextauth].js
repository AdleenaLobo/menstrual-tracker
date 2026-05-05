import axios from 'axios';
import NextAuth from "next-auth";
import Credentials from 'next-auth/providers/credentials';
import CredentialsProvider from 'next-auth/providers/credentials';



const providers = [
    CredentialsProvider({
        name:'Credentials',
        authorize: async (credentials)=>{
            try{
                const user = await axios.post("API URL"+'auth/login',{
                    password:credentials.password,
                    email:credentials.email
                });

                if(user.data.accessToken){
                    return user.data;
                }
                return null;
            }catch(e){
                throw new Error(e);
            }
        }
    })
]

export const options = {
    providers
}

const Auth = (req , res)=>NextAuth(req , res, options)

export default Auth;