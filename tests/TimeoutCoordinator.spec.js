const TimeoutCoordinator = require('../consumers/TimeoutCoordinator');

it('constructor defaults currentTimeout to zero', () => {
  const timeoutCoordinator = new TimeoutCoordinator();
  expect(timeoutCoordinator.currentTimeout).toEqual(0);
});

it('resetCurrentTimeout resets currentTimeout to zero', () => {
  const timeoutCoordinator = new TimeoutCoordinator();
  timeoutCoordinator.currentTimeout = 100;

  timeoutCoordinator.resetCurrentTimeout();

  expect(timeoutCoordinator.currentTimeout).toEqual(0);
});

it('waitForTimeout increments timeSinceLastMessage until maxTimeout is reached', async () => {
  const timeoutCoordinator = new TimeoutCoordinator();
  const checkRateInMillis = 1;
  const maxTimeoutMillis = 15;

  await timeoutCoordinator.waitForTimeout(checkRateInMillis, maxTimeoutMillis);

  expect(timeoutCoordinator.currentTimeout).toEqual(maxTimeoutMillis);
});