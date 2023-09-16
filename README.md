## Morning, Afternoon, and Evening Quotes for JSON-Quotes

This repository contains a JSON data file containing inspirational quotes categorized into "morning," "afternoon," and "evening." Additionally, there is JavaScript code provided to analyze and count the quotes within each category.

### JSON Data

The JSON data file (`PhaseOfDay_Quotes.json`) consists of the following structure:

```json
{
	"category": [
		{
			"quote": "*Insert words of affirmation*",
			"author": ""
		},
		{
			"quote": "*Insert highly aclaimed quote*",
			"author": "*Insert Noteable Author*"
		}
	]
}
```

This data file contains a collection of motivational quotes to inspire your day.

### JavaScript Code

The JavaScript code provided (`quoteCount.js`) is designed to count and analyze the quotes within each category. It calculates:

- The total number of quotes.
- The number of quotes with authors.
- The number of quotes without authors (blank authors).

You can use this code to gain insights into the quotes in each category.

#### Usage

To count and analyze the quotes, follow these steps:

1. Make sure you have Node.js installed on your system.

2. Open a terminal or command prompt and navigate to the project directory.

3. Run the following command to execute the JavaScript code:

   ```
   node quoteCount.js
   ```

   This will display the counts and analysis for "morning," "afternoon," and "evening" categories.

Feel free to use this data and code for your inspirational purposes or customize it further to suit your needs. Enjoy the quotes and stay motivated!
