declare namespace jasmineTheories {
	interface jasmineTheoriesStatic {
		/**
		 * Runs the jasmine test function with each of the given arguments in the list
		 * @param description the description of the test
		 * @param args argunments passed to the test
		 * @param testFunction the test
		 */
		it(description: string, args: any[], testFunction: (testedValue: any) => void): void;
 
		/**
		 * Ignored version of the "it" test (the x means excluded)
		 * @param description the description of the test
		 * @param args argunments passed to the test
		 * @param testFunction the test
		 */
		xit(description: string, args: any[], testFunction: (testedValue: any) => void): void;
	}
 }
 declare var jsminTheories: jasmineTheories.jasmineTheoriesStatic;
 export default jsminTheories;