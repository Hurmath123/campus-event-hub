import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";


function CreateEvent(){

const navigate = useNavigate();


const [event,setEvent] = useState({

title:"",
description:"",
category:"",
date:"",
venue:"",
registration_link:"",
poster_url:""

});



const handleChange=(e)=>{

setEvent({

...event,

[e.target.name]:e.target.value

});

};




const handleSubmit=async(e)=>{

e.preventDefault();


try{

await API.post("/events",event);


alert("Event created successfully");


navigate("/admin");


}

catch(error){

console.log(error);

alert("Failed to create event");

}


};



return(

<div className="
min-h-screen
bg-gray-100
p-8
">


<div className="
max-w-3xl
mx-auto
bg-white
p-8
rounded-2xl
shadow-lg
">


<h1 className="
text-3xl
font-bold
text-blue-700
mb-6
">

Create New Event

</h1>



<form onSubmit={handleSubmit}
className="space-y-4"
>



<input

name="title"

placeholder="Event Title"

className="input"

onChange={handleChange}

/>



<textarea

name="description"

placeholder="Description"

className="input h-32"

onChange={handleChange}

/>



<input

name="category"

placeholder="Category (Technology, Sports etc.)"

className="input"

onChange={handleChange}

/>



<input

type="date"

name="date"

className="input"

onChange={handleChange}

/>



<input

name="venue"

placeholder="Venue"

className="input"

onChange={handleChange}

/>



<input

name="registration_link"

placeholder="Registration Link"

className="input"

onChange={handleChange}

/>



<input

name="poster_url"

placeholder="Poster Image URL"

className="input"

onChange={handleChange}

/>




<button

className="
bg-blue-600
text-white
px-6
py-3
rounded-lg
hover:bg-blue-700
"

>

Create Event

</button>



</form>


</div>


</div>


)

}


export default CreateEvent;