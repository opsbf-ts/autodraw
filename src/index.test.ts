import Opsbf from './index';

const opsbf: Opsbf = new Opsbf();
test('first test', () => {
   expect(opsbf.test()).toBe(true);
});
