// API url with data
const url = 'https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json'

// Fetch the JSON data and console log it
d3.json(url).then(function (data) {
    console.log(data);
});

// Initialize the page
function init() {

    // Select dropdown menu using d3
    let dropdownMenu = d3.select("#selDataset");

    // Fetch the JSON data and populate dropdown using d3
    d3.json(url).then((data) => {

        // Set variable for sample names
        let names = data.names;

        // Add the samples to dropdown menu
        names.forEach((id) => {

            // Console log id values for each iteration
            console.log(id);
            dropdownMenu
                .append("option")
                .text(id)
                .property("value", id);
        });

        // Set sample 1
        let sample_one = names[0];

        // Console log value of sample 1
        console.log(sample_one);

        // Construct initital plots
        buildMetadata(sample_one);
        buildBarChart(sample_one);
        buildBubbleChart(sample_one);
        buildGaugeChart(sample_one);

    });
};

// Create function to populate metadata
function buildMetadata(sample) {

    // Retrieve data using d3
    d3.json(url).then((data) => {

        // Get metadata
        let metadata = data.metadata;

        // Set filter based on values in the sample
        let value = metadata.filter(result => result.id == sample);

        // Console log an array of metadata objects for after they've been filtered
        console.log(value)

        // From the array, find the first index 
        let valueData = value[0];

        // Clear the metadata
        d3.select("#sample-metadata").html("");

        // Add key/value pairs to the panel
        Object.entries(valueData).forEach(([key, value]) => {

            // Console log individual key/value pairs as they're appended to metadata panel
            console.log(key, value);
            d3.select("#sample-metadata").append("h5").text(`${key}: ${value}`);
        });
    });

};

// Create function to build bar chart
function buildBarChart(sample) {

    // Fetch JSON data using d3
    d3.json(url).then((data) => {

        // Find sample data
        let sampleInfo = data.samples;

        // Set filter based on value of sample
        let value = sampleInfo.filter(result => result.id == sample);

        // Get the first value from array
        let valueData = value[0];

        // Get the otu_ids, lables, and sample values
        let otu_ids = valueData.otu_ids;
        let otu_labels = valueData.otu_labels;
        let sample_values = valueData.sample_values;

        // Console log this data
        console.log(otu_ids, otu_labels, sample_values);

        // Put top ten items in descending order
        let yticks = otu_ids.slice(0, 10).map(id => `OTU ${id}`).reverse();
        let xticks = sample_values.slice(0, 10).reverse();
        let labels = otu_labels.slice(0, 10).reverse();

        // Set up the trace for bar chart
        let trace = {
            x: xticks,
            y: yticks,
            text: labels,
            type: "bar",
            orientation: "h"
        };

        // Construct the layout
        let layout = {
            title: "Top 10 OTUs Present"
        };

        // Plot bar chart with Plotly
        Plotly.newPlot("bar", [trace], layout)
    });
};

// Create function to build the bubble chart
function buildBubbleChart(sample) {

    // Fetch JSON data using d3
    d3.json(url).then((data) => {

        // Find sample data
        let sampleInfo = data.samples;

        // Set filter based on value of sample
        let value = sampleInfo.filter(result => result.id == sample);

        // Get the first value from array
        let valueData = value[0];

        // Get the otu_ids, lables, and sample values
        let otu_ids = valueData.otu_ids;
        let otu_labels = valueData.otu_labels;
        let sample_values = valueData.sample_values;

        // Console log this data
        console.log(otu_ids, otu_labels, sample_values);

        // Set up the trace for bubble chart
        let trace1 = {
            x: otu_ids,
            y: sample_values,
            text: otu_labels,
            mode: "markers",
            marker: {
                size: sample_values,
                color: otu_ids,
                colorscale: "Earth"
            }
        };

        // Construct the layout
        let layout = {
            title: "Bacteria Per Sample",
            hovermode: "closest",
            xaxis: { title: "OTU ID" },
        };

        // Plot bubble chart with Plotly
        Plotly.newPlot("bubble", [trace1], layout)
    });
};

// Create function that updates dashboard when a sample changes
function optionChanged(value) {

    // Console log for a new value
    console.log(value);

    // Call all of the functions 
    buildMetadata(value);
    buildBarChart(value);
    buildBubbleChart(value);
    buildGaugeChart(value);
};

// Call the initial function
init();
