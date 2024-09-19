import { EventManager, EventType } from '../src/events/eventManager';
import { PDFGenerator } from '../src/actions/pdfGenerator';

jest.mock('../src/actions/pdfGenerator');
const mockPDFGenerator = PDFGenerator as jest.MockedClass<typeof PDFGenerator>;

describe('User Entry Event', () => {
  it('should generate and email PDF on user entry', async () => {
    const eventManager = new EventManager();
    const data = { userId: '123' };
    await eventManager.handleEvent(EventType.USER_ENTRY, data);
    expect(mockPDFGenerator.prototype.execute).toHaveBeenCalledWith(data);
  });
});
