const Spacecraft = require('./spacecraft');

describe('Spacecraft Control', () => {
    let spacecraft;

    beforeEach(() => {
        spacecraft = new Spacecraft(0, 0, 0, 'N');
    });
    //for instruction 'f'
    test('Move Forward', () => {
        spacecraft.moveForward();
        expect(spacecraft.getPosition()).toEqual({ x: 0, y: 1, z: 0 });
    });
    //for instruction 'b'
    test('Move Backward', () => {
        spacecraft.moveBackward();
        expect(spacecraft.getPosition()).toEqual({ x: 0, y: -1, z: 0 });
    });
}
