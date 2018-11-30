import React, { Component } from "react";
import { Grid, Button } from "semantic-ui-react";
import cuid from 'cuid';
import EventList from "../EventList/EventList";
import EventForm from "../EventForm/EventForm";

const eventsDS = [
  {
    id: "1",
    title: "Trip to Tower of London",
    date: "2018-03-27",
    category: "culture",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "London, UK",
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: "Bob",
    hostPhotoURL: "https://randomuser.me/api/portraits/men/20.jpg",
    attendees: [
      {
        id: "a",
        name: "Bob",
        photoURL: "https://randomuser.me/api/portraits/men/20.jpg"
      },
      {
        id: "b",
        name: "Tom",
        photoURL: "https://randomuser.me/api/portraits/men/22.jpg"
      }
    ]
  },
  {
    id: "2",
    title: "Trip to Punch and Judy Pub",
    date: "2018-03-28",
    category: "drinks",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "London, UK",
    venue: "Punch & Judy, Henrietta Street, London, UK",
    hostedBy: "Tom",
    hostPhotoURL: "https://randomuser.me/api/portraits/men/22.jpg",
    attendees: [
      {
        id: "c",
        name: "Samantha",
        photoURL: "https://randomuser.me/api/portraits/women/23.jpg"
      },
      {
        id: "d",
        name: "Bob",
        photoURL: "https://randomuser.me/api/portraits/men/20.jpg"
      }
    ]
  }
];

class EventDashboard extends Component {
  state = {
    events: eventsDS,
    isOpen: false
  };

  handleFormOpen = () => {
    this.setState({
      isOpen: true
    });
  };

  handleCancel = () => {
    this.setState({
      isOpen: false
    });
  };



  handleUpdateEvent = (updatedEvent) => {
    this.setState({
      events: this.state.events.map(event => {
        if (event.id === updatedEvent.id) {
          return Object.assign({}, updatedEvent)
        } else {
          return event
        }
      }),
      isOpen: false,
      selectedEvent: null
    })   
  };

  handleDeleteEvent = (eventId) => () => {
    if (eventId) {
      const updatedEvents = this.state.events.filter(e => e.id !== eventId);
      this.setState({
        events: updatedEvents
      })
    }
  };

  handleCreateEvent = (newEvent) => {
    newEvent.id = cuid()
    newEvent.hostPhotoURL = '/assets/user.png';
    const updatedEvents = [...this.state.events, newEvent];
    this.setState({
      events: updatedEvents,
      isOpen: false,
      selectedEvent: null
    })
  };

  handleOpenEvent = (eventToOpen) => () => {
    this.setState({
      selectedEvent: eventToOpen,
      isOpen: true
    })
  }

  render() {
    const {selectedEvent} = this.state
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList events={this.state.events} onEventOpen={this.handleOpenEvent} deleteEvent={this.handleDeleteEvent} />
        </Grid.Column>
        <Grid.Column width={6}>
          <Button
            positive
            content="Create event"
            onClick={this.handleFormOpen}
          />
          {this.state.isOpen && <EventForm updateEvent={this.handleUpdateEvent} createEvent={this.handleCreateEvent} selectedEvent={selectedEvent} handleCancel={this.handleCancel}/>}
        </Grid.Column>
      </Grid>
    );
  }
}

export default EventDashboard;
