import { useNavigate } from "react-router-dom";
function EventCard({event}){


return(

<div className="
bg-white
rounded-2xl
shadow-lg
overflow-hidden
hover:-translate-y-2
transition
">


<img

src={event.poster_url}

alt="poster"

className="
h-48
w-full
object-cover
"

/>


<div className="p-5">


<h2 className="
text-xl
font-bold
">

{event.title}

</h2>


<p className="
text-blue-600
font-semibold
">

{event.category}

</p>


<p className="text-gray-600 mt-2">

{event.description}

</p>


<div className="mt-4">

<p>
📅 {new Date(event.date).toLocaleDateString()}
</p>


<p>
📍 {event.venue}
</p>


</div>


<button

onClick={()=>navigate(`/event/${event.id}`)}

className="
mt-5
bg-blue-600
text-white
px-5
py-2
rounded-lg
"

>

View Details

</button>


</div>


</div>

)

}


export default EventCard;