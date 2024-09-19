import { ActionHandler } from './../actions/actionHandler';
import { PDFGenerator } from './../actions/pdfGenerator';
import { SMSSender } from './../actions/smsSender';

export enum EventType {
  USER_ENTRY = 'USER_ENTRY',
  USER_EXIT = 'USER_EXIT',
}

export class EventManager {
  private handlers: Map<EventType, ActionHandler[]> = new Map();

  constructor() {
    // Initialize action handlers
    this.handlers.set(EventType.USER_ENTRY, [new PDFGenerator()]);
    this.handlers.set(EventType.USER_EXIT, [new SMSSender()]);
  }

  public async handleEvent(eventType: EventType, data: any): Promise<void> {
    const handlers = this.handlers.get(eventType);
    if (handlers) {
      for (const handler of handlers) {
        await handler.execute(data);
      }
    }
  }
}
