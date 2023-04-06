# Module 14 Assignment: belly-button-challenge

<img width="862" alt="Screenshot 2023-04-06 at 8 56 27 AM" src="https://user-images.githubusercontent.com/119274891/230385027-091830cd-1e1d-40a6-a3b0-eb26ae8696b9.png">

## Background

In this assignment, you will build an interactive dashboard to explore the Belly Button Biodiversity dataset Links to an external site., which catalogs the microbes that colonize human navels.
The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

## Before You Begin

1. Create a new repository for this project called `belly-button-challenge`. Do not add this Challenge to an existing repository.

2. Clone the new repository to your computer.

3. Inside your local git repository, copy the files from in the `StarterCode` folder contained within the Module 14 Challenge zip file. i.e. `index.html`, `samples.json`, and the `static` folder.

**_NOTE:_**

You will not be required to access the samples.json file locally, but it is provided for reference.

4. Push the above changes to GitHub.

5. Deploy the new repository to GitHub Pages.

## Instructions

Complete the following steps:

1. Use the D3 library to read in `samples.json` from the URL `https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json.`

2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

  * Use `sample_values` as the values for the bar chart.
  
  * Use `otu_ids` as the labels for the bar chart.
  
  * Use `otu_labels` as the hovertext for the chart.
  
  
  <img width="490" alt="Screenshot 2023-04-06 at 8 51 13 AM" src="https://user-images.githubusercontent.com/119274891/230383780-868d480f-8e93-4c6d-bc04-7b251234b5c9.png">
  

3. Create a bubble chart that displays each sample.

  * Use `otu_ids` for the x values.

  * Use `sample_values` for the y values.

  * Use `sample_values` for the marker size.

  * Use `otu_ids` for the marker colors.

  * Use `otu_labels` for the text values.


<img width="518" alt="Screenshot 2023-04-06 at 8 51 55 AM" src="https://user-images.githubusercontent.com/119274891/230383941-9657bad4-07d1-49e3-8a72-288339605f6f.png">


4. Display the sample metadata, i.e., an individual's demographic information.

5. Display each key-value pair from the metadata JSON object somewhere on the page.


<img width="207" alt="Screenshot 2023-04-06 at 8 52 49 AM" src="https://user-images.githubusercontent.com/119274891/230384169-aca5892d-7dec-4f7c-ba37-1ed901495886.png">


6. Update all the plots when a new sample is selected. Additionally, you are welcome to create any layout that you would like for your dashboard. An example dashboard is shown as follows:


<img width="517" alt="Screenshot 2023-04-06 at 8 53 19 AM" src="https://user-images.githubusercontent.com/119274891/230384252-e0e710e3-3059-4088-aede-ddaa9ee84e58.png">


7. Deploy your app to a free static page hosting service, such as GitHub Pages. Submit the links to your deployment and your GitHub repo. Ensure that your repository has regular commits and a thorough README.md file

#### *Hints*

* *Use `console.log' inside of your JavaScript code to see what your data looks like at each step.
* Refer to the Plotly.js documentation Links to an external site. when building the plots.*
