import { useEffect, useState } from "react";
import API from "../services/api";
import { useNavigate, useParams } from "react-router-dom";


function EditEvent(){

const {id}=useParams();

const navigate=useNavigate();


const [event,setEvent]=useState({

title:"",
description:"",
category:"",
date:"",
venue:"",
registration_link:"",
poster_url:""

});



useEffect(()=>{

loadEvent();

},[]);



const loadEvent=async()=>{

const res=await API.get(`/events/${id}`);

setEvent(res.data);

};



const handleChange=(e)=>{

setEvent({

...event,

[e.target.name]:e.target.value

});

};



const updateEvent=async(e)=>{

e.preventDefault();


await API.put(`/events/${id}`,event);


alert("Event updated");


navigate("/admin");

};



return(

<div className="min-h-screen bg-gray-100 p-8">


<div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow">


<h1 className="text-3xl font-bold mb-6 text-blue-700">

Edit Event

</h1>


<form 
onSubmit={updateEvent}
className="space-y-4"
>


<input
name="title"
value={event.title}
onChange={handleChange}
className="input"
/>


<textarea

name="description"

value={event.description}

onChange={handleChange}

className="input h-32"

/>


<input

name="category"

value={event.category}

onChange={handleChange}

className="input"

/>


<input

type="date"

name="date"

value={event.date?.slice(0,10)}

onChange={handleChange}

className="input"

/>


<input

name="venue"

value={event.venue}

onChange={handleChange}

className="input"

/>


<input

name="registration_link"

value={event.registration_link}

onChange={handleChange}

className="input"

/>


<input

name="poster_url"

value={event.poster_url}

onChange={handleChange}

className="input"

/>


<button

className="
bg-green-600
text-white
px-6
py-3
rounded-lg
"

>

Save Changes

</button>


</form>


</div>


</div>

)

}


export default EditEvent;