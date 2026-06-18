import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import EventCard from "../components/EventCard";
function Home() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetchEvents();
  }, []);
  const fetchEvents = async () => {
    try {
      const res = await API.get("/events");
      setEvents(res.data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };
  return (
    <>
      <Navbar />
      <Hero />
      <section className="p-10 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-10">
          Upcoming Events
        </h2>
        {events.length === 0 ? (
          <p className="text-center text-gray-500">
            No events available.
          </p>
        ) : (
          <div className="
          grid 
          md:grid-cols-3 
          gap-8
          max-w-7xl
          mx-auto
          ">
            {events.map((event) => (
              <EventCard
                key={event.id}
                event={event}
              />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
export default Home;