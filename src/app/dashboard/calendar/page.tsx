'use client';

import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, Plus, CheckCircle2, Edit, Trash2 } from 'lucide-react';
import Calendar from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent,  DialogHeader,  DialogTitle,  DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select";
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { events, tasks, Task, Event, TaskPriority } from '@/data/dummyData';
import { useToast } from '@/hooks/use-toast';

import styles from "@/styles/pages/calendar.module.scss"

const CalendarPage = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [tasksList, setTasksList] = useState<Task[]>(tasks);
  const [eventsList, setEventsList] = useState<Event[]>(events);
  const [isNewTaskDialogOpen, setIsNewTaskDialogOpen] = useState(false);
  const [isNewEventDialogOpen, setIsNewEventDialogOpen] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState<Task | null>(null);
  const [eventToEdit, setEventToEdit] = useState<Event | null>(null);
  const { toast } = useToast();
  
  // New task form state
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    dueDate: new Date().toISOString(),
    priority: 'medium' as TaskPriority,
    category: '',
  });
  
  // New event form state
  const [newEvent, setNewEvent] = useState({
    title: '',
    description: '',
    startDate: new Date().toISOString(),
    endDate: new Date().toISOString(),
    location: '',
    type: 'study' as Event['type'],
  });
  
  // Handle task form change
  const handleTaskFormChange = (field: string, value: string) => {
    if (taskToEdit) {
      setTaskToEdit({
        ...taskToEdit,
        [field]: value,
      });
    } else {
      setNewTask({
        ...newTask,
        [field]: value,
      });
    }
  };
  
  // Handle event form change
  const handleEventFormChange = (field: string, value: string) => {
    if (eventToEdit) {
      setEventToEdit({
        ...eventToEdit,
        [field]: value,
      });
    } else {
      setNewEvent({
        ...newEvent,
        [field]: value,
      });
    }
  };
  
  // Save new task
  const saveTask = () => {
    if (taskToEdit) {
      // Update existing task
      setTasksList(prev => 
        prev.map(t => t.id === taskToEdit.id ? taskToEdit : t)
      );
      
      toast({
        title: "Task updated",
        description: `"${taskToEdit.title}" has been updated successfully.`,
      });
      
      setTaskToEdit(null);
    } else {
      // Add new task
      const newTaskItem: Task = {
        id: `task-${Date.now()}`,
        title: newTask.title,
        description: newTask.description,
        dueDate: newTask.dueDate,
        priority: newTask.priority,
        status: 'pending',
        category: newTask.category,
        points: newTask.priority === 'high' ? 50 : newTask.priority === 'medium' ? 30 : 20,
      };
      
      setTasksList(prev => [...prev, newTaskItem]);
      
      toast({
        title: "Task added",
        description: `"${newTask.title}" has been added to your tasks.`,
      });
      
      setNewTask({
        title: '',
        description: '',
        dueDate: new Date().toISOString(),
        priority: 'medium',
        category: '',
      });
    }
    
    setIsNewTaskDialogOpen(false);
  };
  
  // Save new event
  const saveEvent = () => {
    if (eventToEdit) {
      // Update existing event
      setEventsList(prev => 
        prev.map(e => e.id === eventToEdit.id ? eventToEdit : e)
      );
      
      toast({
        title: "Event updated",
        description: `"${eventToEdit.title}" has been updated successfully.`,
      });
      
      setEventToEdit(null);
    } else {
      // Add new event
      const newEventItem: Event = {
        id: `event-${Date.now()}`,
        title: newEvent.title,
        description: newEvent.description,
        startDate: newEvent.startDate,
        endDate: newEvent.endDate,
        location: newEvent.location,
        type: newEvent.type,
      };
      
      setEventsList(prev => [...prev, newEventItem]);
      
      toast({
        title: "Event added",
        description: `"${newEvent.title}" has been added to your calendar.`,
      });
      
      setNewEvent({
        title: '',
        description: '',
        startDate: new Date().toISOString(),
        endDate: new Date().toISOString(),
        location: '',
        type: 'study',
      });
    }
    
    setIsNewEventDialogOpen(false);
  };
  
  // Delete task
  const deleteTask = (task: Task) => {
    setTasksList(prev => prev.filter(t => t.id !== task.id));
    
    toast({
      title: "Task deleted",
      description: `"${task.title}" has been deleted.`,
    });
  };
  
  // Delete event
  const deleteEvent = (event: Event) => {
    setEventsList(prev => prev.filter(e => e.id !== event.id));
    
    toast({
      title: "Event deleted",
      description: `"${event.title}" has been deleted.`,
    });
  };
  
  // Complete task
  const completeTask = (task: Task) => {
    setTasksList(prev =>
      prev.map(t => 
        t.id === task.id 
          ? { ...t, status: t.status === 'completed' ? 'pending' : 'completed' } 
          : t
      )
    );
    
    if (task.status !== 'completed') {
      toast({
        title: "Task completed",
        description: `Great job! You've completed "${task.title}".`,
      });
    }
  };
  
  // Find tasks and events for selected date
  const getTasksForSelectedDate = () => {
    if (!date) return [];
    const selectedDate = new Date(date).setHours(0, 0, 0, 0);
    
    return tasksList.filter(task => {
      const taskDate = new Date(task.dueDate).setHours(0, 0, 0, 0);
      return taskDate === selectedDate;
    });
  };
  
  const getEventsForSelectedDate = () => {
    if (!date) return [];
    const selectedDate = new Date(date).setHours(0, 0, 0, 0);
    
    return eventsList.filter(event => {
      const eventDate = new Date(event.startDate).setHours(0, 0, 0, 0);
      return eventDate === selectedDate;
    });
  };
  
  // Format date for display
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };
  
  // Edit task
  const editTask = (task: Task) => {
    setTaskToEdit(task);
    setIsNewTaskDialogOpen(true);
  };
  
  // Edit event
  const editEvent = (event: Event) => {
    setEventToEdit(event);
    setIsNewEventDialogOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className={styles.taskHeaderWrapper}>
        {/* <h1 className="taskHeaderTitle">Schedule & Tasks</h1> */}
        <h1 className={styles.taskHeaderTitle}></h1>
        <div className={styles.taskHeaderButtons}>
          <Button 
            onClick={() => {
              setTaskToEdit(null);
              setIsNewTaskDialogOpen(true);
            }}
            className={styles.addTaskButton}
          >
            <Plus className={styles.plusIcon} />
            Add Task
          </Button>
          <Button 
            onClick={() => {
              setEventToEdit(null);
              setIsNewEventDialogOpen(true);
            }}
            variant="outline"
            className={styles.addEventButton}
          >
            <CalendarIcon className={styles.calendarIcony} />
            Add Event
          </Button>
        </div>
      </div>
      
      <div className={styles.container}>
        {/* Calendar */}
        <Card className={styles.calendarCard}>
          <CardHeader>
            <CardTitle>Calendar</CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar selected={date} onSelect={setDate} />
          </CardContent>
        </Card>

        {/* Tasks and Events for Selected Date */}
        <Card className={styles.taskCard}>
          <CardHeader className={styles.cardHeader}>
            <CardTitle>
              {date ? date.toLocaleDateString('en-US', {
                weekday: 'long',
                month: 'long',
                day: 'numeric',
                year: 'numeric'
              }) : 'Select a date'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="tasks">
              <TabsList className={styles.tabsList}>
                <TabsTrigger value="tasks">Tasks</TabsTrigger>
                <TabsTrigger value="events">Events</TabsTrigger>
              </TabsList>

              <TabsContent value="tasks">
                {getTasksForSelectedDate().length > 0 ? (
                  <ul className={styles.listSpacing}>
                    {getTasksForSelectedDate().map(task => (
                      <li key={task.id} className={styles[`taskItem_${task.status}_${task.priority}`]}>
                        <div className={styles.itemHeader}>
                          <div className={styles.itemMain}>
                            <Button
                              variant="ghost"
                              size="icon"
                              className={styles[`completeButton_${task.status}`]}
                              onClick={() => completeTask(task)}
                            >
                              <CheckCircle2 className={styles.iconSmall} />
                            </Button>
                            <div>
                              <h3 className={styles[`taskTitle_${task.status}`]}>
                                {task.title}
                              </h3>
                              {task.description && (
                                <p className={styles.taskDescription}>{task.description}</p>
                              )}
                              <div className={styles.taskMeta}>
                                <span className={styles.taskTime}>
                                  <Clock className={styles.clockIcon} />
                                  {formatDate(task.dueDate)}
                                </span>
                                {task.category && (
                                  <span className={styles.taskCategory}>{task.category}</span>
                                )}
                                <span className={styles[`priority_${task.priority}`]}>
                                  {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className={styles.actionButtons}>
                            <Button variant="ghost" size="icon" className={styles.iconButton} onClick={() => editTask(task)}>
                              <Edit className={styles.iconSmall} />
                            </Button>
                            <Button variant="ghost" size="icon" className={styles.deleteButton} onClick={() => deleteTask(task)}>
                              <Trash2 className={styles.iconSmall} />
                            </Button>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className={styles.emptyState}>
                    <p>No tasks for this date</p>
                    <Button variant="link" onClick={() => {
                      setTaskToEdit(null);
                      setIsNewTaskDialogOpen(true);
                    }} className={styles.addButton}>
                      + Add a task
                    </Button>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="events">
                {getEventsForSelectedDate().length > 0 ? (
                  <ul className={styles.listSpacing}>
                    {getEventsForSelectedDate().map(event => (
                      <li key={event.id} className={styles[`eventItem_${event.type}`]}>
                        <div className={styles.itemHeader}>
                          <div>
                            <div className={styles.eventMain}>
                              <div className={styles[`eventType_${event.type}`]}>
                                {event.type.charAt(0).toUpperCase()}
                              </div>
                              <h3 className={styles.eventTitle}>{event.title}</h3>
                            </div>
                            {event.description && (
                              <p className={styles.eventDescription}>{event.description}</p>
                            )}
                            <div className={styles.eventMeta}>
                              <span className={styles.eventTime}>
                                <Clock className={styles.clockIcon} />
                                {formatDate(event.startDate)} - {formatDate(event.endDate)}
                              </span>
                              {event.location && (
                                <span className={styles.eventLocation}>{event.location}</span>
                              )}
                              <span className={styles[`eventTypeTag_${event.type}`]}>
                                {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                              </span>
                            </div>
                          </div>
                          <div className={styles.actionButtons}>
                            <Button variant="ghost" size="icon" className={styles.iconButton} onClick={() => editEvent(event)}>
                              <Edit className={styles.iconSmall} />
                            </Button>
                            <Button variant="ghost" size="icon" className={styles.deleteButton} onClick={() => deleteEvent(event)}>
                              <Trash2 className={styles.iconSmall} />
                            </Button>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className={styles.emptyState}>
                    <p>No events for this date</p>
                    <Button variant="link" onClick={() => {
                      setEventToEdit(null);
                      setIsNewEventDialogOpen(true);
                    }} className={styles.addButton}>
                      + Add an event
                    </Button>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
      
      {/* New Task Dialog */}
      <Dialog open={isNewTaskDialogOpen} onOpenChange={setIsNewTaskDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{taskToEdit ? 'Edit Task' : 'Add New Task'}</DialogTitle>
            <DialogDescription>
              {taskToEdit 
                ? 'Edit the task details below.' 
                : 'Create a new task by filling out the form below.'}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="title">Task Title</Label>
              <Input 
                id="title" 
                value={taskToEdit ? taskToEdit.title : newTask.title} 
                onChange={(e) => handleTaskFormChange('title', e.target.value)}
                placeholder="E.g., Complete assignment"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description (Optional)</Label>
              <Textarea 
                id="description" 
                value={taskToEdit ? taskToEdit.description : newTask.description} 
                onChange={(e) => handleTaskFormChange('description', e.target.value)}
                placeholder="Add details about this task"
                rows={3}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="dueDate">Due Date</Label>
                <Input 
                  id="dueDate" 
                  type="datetime-local" 
                  value={taskToEdit 
                    ? new Date(taskToEdit.dueDate).toISOString().slice(0, 16) 
                    : new Date(newTask.dueDate).toISOString().slice(0, 16)} 
                  onChange={(e) => handleTaskFormChange('dueDate', new Date(e.target.value).toISOString())}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="priority">Priority</Label>
                <Select 
                  value={taskToEdit ? taskToEdit.priority : newTask.priority}
                  onValueChange={(value) => handleTaskFormChange('priority', value as TaskPriority)}
                >
                  <SelectTrigger id="priority">
                    <SelectValue placeholder="Select priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Input 
                id="category" 
                value={taskToEdit ? taskToEdit.category : newTask.category} 
                onChange={(e) => handleTaskFormChange('category', e.target.value)}
                placeholder="E.g., Math, Computer Science"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsNewTaskDialogOpen(false)}>
              Cancel
            </Button>
            <Button className="bg-edvantage-blue hover:bg-edvantage-dark-blue" onClick={saveTask}>
              {taskToEdit ? 'Update Task' : 'Add Task'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* New Event Dialog */}
      <Dialog open={isNewEventDialogOpen} onOpenChange={setIsNewEventDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>{eventToEdit ? 'Edit Event' : 'Add New Event'}</DialogTitle>
            <DialogDescription>
              {eventToEdit 
                ? 'Edit the event details below.' 
                : 'Create a new event by filling out the form below.'}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="event-title">Event Title</Label>
              <Input 
                id="event-title" 
                value={eventToEdit ? eventToEdit.title : newEvent.title} 
                onChange={(e) => handleEventFormChange('title', e.target.value)}
                placeholder="E.g., Study Group Meeting"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="event-description">Description (Optional)</Label>
              <Textarea 
                id="event-description" 
                value={eventToEdit ? eventToEdit.description : newEvent.description} 
                onChange={(e) => handleEventFormChange('description', e.target.value)}
                placeholder="Add details about this event"
                rows={3}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="event-start">Start Time</Label>
                <Input 
                  id="event-start" 
                  type="datetime-local" 
                  value={eventToEdit 
                    ? new Date(eventToEdit.startDate).toISOString().slice(0, 16) 
                    : new Date(newEvent.startDate).toISOString().slice(0, 16)} 
                  onChange={(e) => handleEventFormChange('startDate', new Date(e.target.value).toISOString())}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="event-end">End Time</Label>
                <Input 
                  id="event-end" 
                  type="datetime-local" 
                  value={eventToEdit 
                    ? new Date(eventToEdit.endDate).toISOString().slice(0, 16) 
                    : new Date(newEvent.endDate).toISOString().slice(0, 16)} 
                  onChange={(e) => handleEventFormChange('endDate', new Date(e.target.value).toISOString())}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="event-location">Location (Optional)</Label>
                <Input 
                  id="event-location" 
                  value={eventToEdit ? eventToEdit.location || '' : newEvent.location} 
                  onChange={(e) => handleEventFormChange('location', e.target.value)}
                  placeholder="E.g., Library, Room 101"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="event-type">Event Type</Label>
                <Select 
                  value={eventToEdit ? eventToEdit.type : newEvent.type}
                  onValueChange={(value) => handleEventFormChange('type', value as Event['type'])}
                >
                  <SelectTrigger id="event-type">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="class">Class</SelectItem>
                    <SelectItem value="exam">Exam</SelectItem>
                    <SelectItem value="study">Study</SelectItem>
                    <SelectItem value="group">Group</SelectItem>
                    <SelectItem value="personal">Personal</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsNewEventDialogOpen(false)}>
              Cancel
            </Button>
            <Button className="bg-edvantage-blue hover:bg-edvantage-dark-blue" onClick={saveEvent}>
              {eventToEdit ? 'Update Event' : 'Add Event'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CalendarPage;
