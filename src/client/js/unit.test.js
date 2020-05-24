const {GeonamesEntry} = require('./ui');

describe('GeonamesEntry',  () => {
    test('should return an empty array', () => {
        const expected = GeonamesEntry([]);

        expect(expected).toBeInstanceOf(Array);
        expect(expected.length).toEqual(0);
    });

    test('should return and empty array when undefined is passed', () => {
        const expected = GeonamesEntry(undefined);

        expect(expected).toBeInstanceOf(Array);
        expect(expected.length).toEqual(0);
    });

    test('should return an array with one element', () => {
        const data = [
            {
                countryCode: 'test',
                lat: 11.2341324,
                lng: 12.3003408
            }
        ]
        const expected = GeonamesEntry(data);

        expect(expected).toBeInstanceOf(Array);
        expect(expected.length).toEqual(data.length);
        expect(expected[0]).toMatchSnapshot();
    });

});

