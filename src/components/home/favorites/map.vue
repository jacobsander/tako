<template>
    <div class="map-view">
        <div id="map"></div>
    </div>
</template>

<script>
export default {
    data: () => {
        return {
            savedCards: [
                {
                    title: 'Santa Monica Pier',
                    imageUrl: 'https://images.unsplash.com/photo-1551574210-10831cdf882d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
                    description: '',
                    coordinates: [-121.414, 36.776],
                    icon: "pin_drop",
                    color: "#16a085"
                },
                {
                    title: 'Griffith Observatory',
                    imageUrl: 'https://images.unsplash.com/photo-1505785000-69d4eef30489?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
                    description: '',
                    coordinates: [-119.414, 34.776],
                    icon: "fastfood",
                    color: "#2c3e50"
                },
                {
                    title: 'Venice Beach Walk',
                    imageUrl: 'https://images.unsplash.com/photo-1448542146881-1d78dfb2f674?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1140&q=80',
                    description: '',
                    coordinates: [-122.414, 37.776],
                    icon: "local_pizza",
                    color: "#e74c3c"
                }
            ]
        }
    },
    methods: {
        markerWasClicked() {
            this.$router.push('/favorite/asdasdasd');
        }
    },
    mounted(){

        const vm = this;
        mapboxgl.accessToken = "pk.eyJ1IjoiamFjb2JzYW5kZXIiLCJhIjoiY2p4dzRyb3JwMGF2NDNtbWxxMzE2MmV1ZiJ9.-8-4DsszUv2sIvJdhjJ4tA";

        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/light-v9',
            center: [-121.414, 36.776],
            zoom: 6
        })

        map.addControl(new mapboxgl.NavigationControl());

        this.savedCards.forEach(function(card, cardIndex) {

            // create a HTML element for each feature
            var el = document.createElement('div');
            el.innerHTML = `
                <i class="material-icons">${card.icon}</i>
            `
            el.className = 'marker';
            el.style.background = card.color;

            // // make a marker for each feature and add to the map
            new mapboxgl.Marker(el)
                .setLngLat(card.coordinates)
                .addTo(map);

            el.addEventListener('click', () => {
                console.log('clicked!!;')
                vm.$router.push('/favorite/asdasdasda?returnTo=map')
            })
        });
    },
    methods: {}
}
</script>

<style>
.map-view {
    width: 100%;
    height: 100%;
}

#map {
    width: 100%;
    height: 100%;
}

.marker {
    display: flex;
    color: #FFF;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: blue;
    margin-left: -25px;
    margin-top: -25px;
    overflow: hidden;
}

/* .marker img {
    width: 100%;
    height: 100%;
    object-fit: cover;
} */
</style>

