const fs = require("fs");
const data = JSON.parse(fs.readFileSync("PhaseOfDay_Quotes.json", "utf-8"));

// Function to count quotes in a specific category
function countQuotes(category, data) {
	if (data && data[category]) {
		const quotes = data[category];

		// Count the total number of quotes
		const totalQuotesCount = quotes.length;

		// Count the number of quotes with blank authors
		const quotesWithBlankAuthors = quotes.filter(
			(quote) => !quote.author.trim()
		);
		const quotesCountWithBlankAuthors = quotesWithBlankAuthors.length;

		// Calculate the number of quotes with authors
		const quotesCountWithAuthors =
			totalQuotesCount - quotesCountWithBlankAuthors;

		console.log(`Category: ${category}`);
		console.log(`Total Quotes: ${totalQuotesCount}`);
		console.log(`Quotes with Authors: ${quotesCountWithAuthors}`);
		console.log(`Quotes without Authors: ${quotesCountWithBlankAuthors}`);
		console.log();
	} else {
		console.log(`No "${category}" category found in the JSON data.`);
	}
}

// Call the function for "morning," "afternoon," and "evening" categories
countQuotes("morning", data);
countQuotes("afternoon", data);
countQuotes("evening", data);
