import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Button } from "semantic-ui-react";
import cuid from 'cuid';
import EventList from "../EventList/EventList";
import EventForm from "../EventForm/EventForm";
import { createEvent, deleteEvent, updateEvent } from '../eventActions'
import LoadingComponent from '../../../app/layouts/LoadingComponent';

const mapState = state => ({
  events: state.events,
  loading: state.loading
})

const actions = {
  createEvent,
  deleteEvent,
  updateEvent
}

class EventDashboard extends Component {
  state = {
    isOpen: false,
    selectedEvent: null
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



  handleUpdateEvent = (updatedEvent) =>  {
    this.props.updateEvent(updatedEvent)
    this.setState({
      isOpen: false,
      selectedEvent: null
    }) 
  };

  handleDeleteEvent = (eventId) => () => {
    this.props.deleteEvent(eventId)
  };

  handleCreateEvent = (newEvent) => {
    newEvent.id = cuid()
    newEvent.hostPhotoURL = '/assets/user.png'
    this.props.createEvent(newEvent)
    this.setState({
      isOpen: false
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
    const {events, loading} = this.props
    if (loading) return LoadingComponent
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList events={events} onEventOpen={this.handleOpenEvent} deleteEvent={this.handleDeleteEvent} />
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

export default connect(mapState, actions)(EventDashboard);
