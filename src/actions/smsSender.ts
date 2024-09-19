import { ActionHandler } from './actionHandler';

export class SMSSender implements ActionHandler {
  async execute(data: any): Promise<void> {
    // Send SMS (mock implementation)
    console.log(`Sending SMS to site supervisor: User ${data.userId} has exited.`);
  }
}
