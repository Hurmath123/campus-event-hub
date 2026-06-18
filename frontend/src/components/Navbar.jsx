import { CalendarDays } from "lucide-react";

function Navbar(){

return(

<nav className="bg-white shadow-md p-4">

<div className="max-w-7xl mx-auto flex justify-between items-center">


<div className="flex items-center gap-2">

<CalendarDays 
className="text-blue-600"
/>

<h1 className="text-2xl font-bold text-blue-600">
Campus Event Hub
</h1>

</div>


<div className="space-x-6">

<a className="hover:text-blue-600">
Home
</a>

<a className="hover:text-blue-600">
Events
</a>


<button className="
bg-blue-600 
text-white 
px-4 
py-2 
rounded-lg
hover:bg-blue-700">

Admin Login

</button>


</div>


</div>

</nav>

)

}

export default Navbar;