const fs = require("fs");

// Set up data files to store number of visits to the API
const dataFilePath = "/data/visits.txt";
if (!fs.existsSync("/data")) {
    fs.mkdirSync("/data");
    fs.writeFileSync(dataFilePath, "0");
}

// Updates the number of visits to the API and returns the updated value
function updateVisits() {
    let visits;
    try {
        // Read previous number of visits from a file
        visits = parseInt(fs.readFileSync(dataFilePath));
    } catch (e) {
        // Just in case visits.txt does not exist
        console.log(e);
        visits = 0;
    }

    // Updates the number of visits to the API and saves the result to a file
    visits += 1;
    fs.writeFileSync(dataFilePath, visits.toString());

    return visits;
}

module.exports = updateVisits;
