mapboxgl.accessToken = 'pk.eyJ1IjoiamFrb2J6aGFvIiwiYSI6ImNpcms2YWsyMzAwMmtmbG5icTFxZ3ZkdncifQ.P9MBej1xacybKcDN_jehvw';
let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    zoom: 3,
    minZoom: 2,
    center: [-96, 37.8]
});
const grades = [4, 25, 50, 100, 200],
colors = ['rgb(254,229,217)', 'rgb(252,174,145)', 'rgb(251,106,74)', 'rgb(222,45,38)', 'rgb(165,15,21)'];
map.on('load', () => {
    map.addSource('covid-rates', {
        type: 'geojson',
        data: 'assets/us-covid-2020-rates.json'
    });
    map.addLayer({
            'id': 'covid-rates-fill',
            'type': 'fill',
            'source': 'covid-rates',
            'paint': {
                'fill-color': {
                    'property': 'rates',
                    'stops': [
                        [grades[0], colors[0]],
                        [grades[1], colors[1]],
                        [grades[2], colors[2]],
                        [grades[3], colors[3]],
                        [grades[4], colors[4]]
                    ]
                },
                'fill-opacity': 0.6
            }
        }
    );
    map.on('click', 'covid-rates-fill', (event) => {
        new mapboxgl.Popup()
            .setLngLat(event.lngLat)
            .setHTML(`<strong>Case Rate:</strong> ${event.features[0].properties.rates}`)
            .addTo(map);
    });
});
// create legend
const legend = document.getElementById('legend');
var labels = ['<strong>Cases</strong>'],
    vbreak;
for (var i = 0; i < grades.length; i++) {
    vbreak = grades[i];
    labels.push(
        '<p class="break"><i class="dot" style="background:' + colors[i] + '; width: 10px; height: 10px; "></i> <span class="dot-label" style="top: 5px;">' + vbreak +
        '</span></p>');
}
const source =
    '<p style="text-align: right; font-size:10pt">Source: <a href="https://github.com/nytimes/covid-19-data/blob/43d32dde2f87bd4dafbb7d23f5d9e878124018b8/live/us-counties.csv">NY Times</a></p>';
legend.innerHTML = labels.join('') + source;
