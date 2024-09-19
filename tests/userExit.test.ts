import { EventManager, EventType } from '../src/events/eventManager';
import { SMSSender } from '../src/actions/smsSender';

jest.mock('../src/actions/smsSender');
const mockSMSSender = SMSSender as jest.MockedClass<typeof SMSSender>;

describe('User Exit Event', () => {
  it('should send SMS on user exit', async () => {
    const eventManager = new EventManager();
    const data = { userId: '123' };
    await eventManager.handleEvent(EventType.USER_EXIT, data);
    expect(mockSMSSender.prototype.execute).toHaveBeenCalledWith(data);
  });
});
