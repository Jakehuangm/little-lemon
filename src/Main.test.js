import { initializeTimes, updateTimes } from './components/Main';


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

describe('updateTimes function', () => {
    it('should return the current state when action type is not UPDATE_TIMES', () => {
      const initialState = ['10:00', '11:00', '12:00'];
      const action = { type: 'SOME_OTHER_ACTION', date: '2023-01-01' };

      const result = updateTimes(initialState, action);

      expect(result).toEqual(initialState);
    });
  });
