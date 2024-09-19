import { EventManager, EventType } from './events/eventManager';

const eventManager = new EventManager();

eventManager.handleEvent(EventType.USER_ENTRY, { userId: '123' });
eventManager.handleEvent(EventType.USER_EXIT, { userId: '123' });
