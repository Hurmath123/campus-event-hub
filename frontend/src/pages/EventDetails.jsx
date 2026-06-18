import { useEffect, useState } from "react";
import API from "../services/api";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";


function EventDetails(){

const {id}=useParams();

const [event,setEvent]=useState(null);



useEffect(()=>{

loadEvent();

},[]);



const loadEvent=async()=>{

try{

const res=await API.get(`/events/${id}`);

setEvent(res.data);

}

catch(error){

console.log(error);

}

};



if(!event){

return (

<div className="p-10 text-center">

Loading...

</div>

)

}



return(

<>

<Navbar/>


<div className="
min-h-screen
bg-gray-100
p-8
">


<div className="
max-w-4xl
mx-auto
bg-white
rounded-2xl
shadow-xl
overflow-hidden
">


<img

src={event.poster_url}

alt={event.title}

className="
w-full
h-80
object-cover
"

/>



<div className="p-8">


<h1 className="
text-4xl
font-bold
text-blue-700
">

{event.title}

</h1>



<p className="
text-blue-600
font-semibold
mt-3
">

{event.category}

</p>



<p className="
text-gray-600
mt-5
text-lg
">

{event.description}

</p>



<div className="
mt-6
space-y-3
text-lg
">


<p>
📅 {new Date(event.date).toLocaleDateString()}
</p>


<p>
📍 {event.venue}
</p>


</div>




<a

href={event.registration_link}

target="_blank"

rel="noreferrer"

className="
inline-block
mt-8
bg-blue-600
text-white
px-8
py-3
rounded-lg
hover:bg-blue-700
"

>

Register For Event

</a>



</div>


</div>


</div>


</>

)

}


export default EventDetails;