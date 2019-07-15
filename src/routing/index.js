import Home from '../components/home/_root.vue';
import Start from '../components/start/_root.vue'
import Search from '../components/home/search/_root.vue';
import Favorites from '../components/home/favorites/_root.vue';
import Profile from '../components/home/profile/_root.vue';
import FavoritesList from '../components/home/favorites/list.vue';
import FavoritesMap from '../components/home/favorites/map.vue';
import FavoritesDetail from '../components/home/favorites/detail.vue';


export default [
    {
        path: '/start', 
        component: Start, 
    },
    { 
        path: '/', 
        component: Home, 
        children: [
            // {
            //     path: 'search',
            //     component: Search,
            // },
            {
                path: 'search',
                component: Search,
            },
            {
                path: 'favorites',
                redirect: '/favorites/list',
                component: Favorites, 
                children: [
                    {
                        path: 'list',
                        component: FavoritesList,
                    },
                    {
                        path: 'map',
                        component: FavoritesMap,
                    }
                    
                ]
            },
            {
                path: 'favorite/:id',
                component: FavoritesDetail,
            },
            {
                path: 'profile',
                component: Profile, 
            }
        
        ]
    },
];