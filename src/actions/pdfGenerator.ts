import { ActionHandler } from './actionHandler';

export class PDFGenerator implements ActionHandler {
  async execute(data: any): Promise<void> {
    // Generate PDF and send email (mock implementation)
    console.log(`Generating PDF for user: ${data.userId}`);
    console.log(`Emailing PDF to site supervisor.`);
  }
}
