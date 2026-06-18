import { useEffect, useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";


function AdminDashboard(){

const [events,setEvents]=useState([]);

const navigate = useNavigate();


useEffect(()=>{

loadEvents();

},[]);



const loadEvents = async()=>{

try{

const res = await API.get("/events");

setEvents(res.data);

}
catch(error){

console.log(error);

}

};





const deleteEvent = async(id)=>{


const confirmDelete =
window.confirm("Delete this event?");


if(confirmDelete){


await API.delete(`/events/${id}`);


loadEvents();


}


};





return(

<div className="min-h-screen bg-gray-100 p-8">


<div className="
max-w-6xl
mx-auto
">


<div className="
flex
justify-between
items-center
mb-8
">


<h1 className="
text-4xl
font-bold
text-blue-700
">

Admin Dashboard

</h1>


<button

onClick={()=>navigate("/create-event")}

className="
bg-blue-600
text-white
px-5
py-3
rounded-lg
hover:bg-blue-700
"

>

+ Create Event

</button>


</div>




<div className="
grid
md:grid-cols-3
gap-6
mb-10
">


<div className="
bg-white
p-6
rounded-xl
shadow
">

<h2 className="text-gray-500">
Total Events
</h2>

<p className="
text-4xl
font-bold
">

{events.length}

</p>

</div>



<div className="
bg-white
p-6
rounded-xl
shadow
">

<h2 className="text-gray-500">
Upcoming
</h2>

<p className="
text-4xl
font-bold
text-green-600
">

{
events.filter(
event=>new Date(event.date)>new Date()
).length
}

</p>

</div>



<div className="
bg-white
p-6
rounded-xl
shadow
">

<h2 className="text-gray-500">
Categories
</h2>

<p className="
text-4xl
font-bold
text-purple-600
">

{
new Set(
events.map(e=>e.category)
).size
}

</p>

</div>


</div>





<div className="
bg-white
rounded-xl
shadow
p-6
">


<h2 className="
text-2xl
font-bold
mb-5
">

Manage Events

</h2>



{

events.map(event=>(


<div

key={event.id}

className="
border-b
py-4
flex
justify-between
items-center
"


>


<div>


<h3 className="
text-xl
font-semibold
">

{event.title}

</h3>


<p className="text-gray-500">

{event.category}

</p>


</div>



<div className="space-x-3">


<button

onClick={()=>navigate(`/edit-event/${event.id}`)}

className="
bg-yellow-500
text-white
px-4
py-2
rounded
"

>

Edit

</button>



<button

onClick={()=>deleteEvent(event.id)}

className="
bg-red-600
text-white
px-4
py-2
rounded
"

>

Delete

</button>


</div>


</div>


))


}



</div>


</div>


</div>


)

}


export default AdminDashboard;