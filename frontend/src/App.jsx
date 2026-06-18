import {
BrowserRouter,
Routes,
Route
} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import CreateEvent from "./pages/CreateEvent";
import EditEvent from "./pages/EditEvent";
import EventDetails from "./pages/EventDetails";

function App(){

return(

<BrowserRouter>

<Routes>

<Route path="/" element={<Home/>}/>

<Route path="/login" element={<Login/>}/>

<Route path="/admin" element={<AdminDashboard/>}/>
<Route path="/create-event" element={<CreateEvent/>}/>
<Route path="/edit-event/:id" element={<EditEvent/>}/>
<Route path="/event/:id" element={<EventDetails/>}/>
</Routes>

</BrowserRouter>

)

}


export default App;