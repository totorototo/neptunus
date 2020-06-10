import { calculateDistance, Position } from '../../src/index';

describe('helper', () => {
  it('compute distance between Paris and Moscow', () => {
    const origin: Position = [37.618423, 55.751244];
    const destination: Position = [2.3488, 48.8534];

    const distance = calculateDistance(origin, destination);
    expect(distance).toMatchSnapshot();
  });
});