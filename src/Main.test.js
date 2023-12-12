import { initializeTimes } from './components/Main';


// Describe block for the test suite
describe('initializeTimes function', () => {

    // Test case
    test('should return the correct array of initial times', () => {
        // Call the function
        const times = initializeTimes();

        // Define the expected result
        const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

        // Assert that the function's output matches the expected result
        expect(times).toEqual(expectedTimes);
    });

});
