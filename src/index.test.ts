import Autodraw from './index';

const autodraw: Autodraw = new Autodraw();
test('first test', () => {
   expect(autodraw.test()).toBe(true);
});


