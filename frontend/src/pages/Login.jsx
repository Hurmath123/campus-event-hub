import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";


function Login(){

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

const navigate = useNavigate();



const handleLogin = async(e)=>{

e.preventDefault();


try{

const res = await API.post("/auth/login",{

email,
password

});


localStorage.setItem(
"token",
res.data.token
);


localStorage.setItem(
"user",
JSON.stringify(res.data.user)
);


if(res.data.user.role==="admin"){

navigate("/admin");

}
else{

navigate("/dashboard");

}


}
catch(error){

alert("Invalid login details");

}


};



return(

<div className="
min-h-screen
flex
items-center
justify-center
bg-gray-100
">


<div className="
bg-white
p-8
rounded-2xl
shadow-xl
w-96
">


<h1 className="
text-3xl
font-bold
text-center
text-blue-600
mb-6
">

Campus Event Hub

</h1>


<form onSubmit={handleLogin}>


<input

type="email"

placeholder="Email"

className="
w-full
border
p-3
rounded
mb-4
"

onChange={(e)=>setEmail(e.target.value)}

/>


<input

type="password"

placeholder="Password"

className="
w-full
border
p-3
rounded
mb-4
"

onChange={(e)=>setPassword(e.target.value)}

/>


<button

className="
w-full
bg-blue-600
text-white
p-3
rounded-lg
hover:bg-blue-700
"

>

Login

</button>


</form>


</div>


</div>


)

}


export default Login;