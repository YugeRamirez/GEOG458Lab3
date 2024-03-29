# GEOG458Lab3

The lab mainly focused on Web Map Application by creating two maps(one choropleth and one proportional symbol) to display the US COVID-19 case counts and case rates

## Project Description

This project uses Mapbox GL JS to create an interactive choropleth map. The map is colored based on COVID-19 case rates, with data sourced from the New York Times. The data include all the cases in 2020. The population data used for calculating the case rates are from the 2018 ACS 5 year estimates. Both data are at the county level. The U.S. county boundary shapefile was downloaded from the U.S. Census Bureau. The data have been processed by us in order to suit the purpose of this lab. The case rate is calculated as cases per thousand residents.

### Map1 (Chorolepth Map for COVID-19 Case Counts in US, 2020)
[Map1](https://yugeramirez.github.io/GEOG458Lab3/map1.html)

### Map2 (Porpotional Symbol Map for COVID-19 Case Rates in US, 2020)
[Map2](https://yugeramirez.github.io/GEOG458Lab3/map2.html)

## Function & Library

Main functions and libraries are from MapBoxGL

## Credits
[MapBoxGL](https://docs.mapbox.com/mapbox-gl-js/guides/)

[DataScource:NYT](https://github.com/nytimes/covid-19-data/blob/43d32dde2f87bd4dafbb7d23f5d9e878124018b8/live/us-counties.csv)

[DataScource:CensusBureau](https://www.census.gov/geographies/mapping-files/time-series/geo/carto-boundary-file.html)

## Acknowledgement
Thanks Prof.Zhao for creating and TA Liz Peng for reviewing this, and also thanks my self for finishing this assignment on time
