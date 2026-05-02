import {create} from 'zustand';


interface UserDataType {
 useremail: string;
 userid: string;
 setUserEmail : (useremail: string)=> void
 setUserId:(userid: string)=> void
} 

 const userData = create<UserDataType>((set)=>({
    useremail: '',
    userid:'',
    setUserEmail:(useremail:string)=>set({useremail: useremail}),
    setUserId:(userid:string) => set({userid: userid}),
 }));

 export default userData;