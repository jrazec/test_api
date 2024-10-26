import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

const Calendar = () => {
    const [events, setEvents] = useState([]);

    // Handle event creation with start and end time selection
    const handleDateSelect = (selectInfo) => {
        let title = prompt('Enter Event Title');
        let calendarApi = selectInfo.view.calendar;
        calendarApi.unselect(); // Clear date selection

        if (title) {
            let newEvent = {
                id: String(events.length + 1),
                title,
                start: selectInfo.startStr,
                end: selectInfo.endStr,
                allDay: selectInfo.allDay,
            };
            setEvents([...events, newEvent]);
        }
    };

    return (
        <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="timeGridWeek"
            selectable={true}
            selectMirror={true}
            select={handleDateSelect} // Call when user selects time range
            events={events} // Display events on calendar
            editable={true}
            eventClick={(info) => alert(`Event: ${info.event.title}`)} // Optional: handle clicks on events
        />
    );
};

export default Calendar;
