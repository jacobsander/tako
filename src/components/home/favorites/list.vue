<template>
    <div class="list">
        <div 
            v-for="(group, groupIndex) in cities"
            :key="groupIndex"
            class="list-group">
            <div 
                @click="groupHeaderWasClicked(groupIndex)"
                class="list-group__header">
                <div class="list-group__title">{{group.name}}</div>
                <div class="list-group__collapse">
                    <i class="material-icons">
                        <template v-if="group.isCollapsed">keyboard_arrow_down</template>
                        <template v-else-if="!group.isCollapsed">keyboard_arrow_up</template>
                    </i>
                </div>
            </div>
            <div 
            v-if="!group.isCollapsed"
            class="list-group__rows">
                <div 
                    v-for="(row, rowIndex) in group.savedCards"
                    :key="rowIndex"
                    class="row"
                    @click="rowWasClicked">
                    <div class="row__image">
                        <img :src="row.imageUrl" alt="">
                    </div>
                    <div class="row__title">{{ row.title }}</div>
                </div>
            </div>
            
        </div>
        
    </div>
</template>

<script>
export default {
    data: () => {
        return {

            cities: [
                {
                    name: "Los Angeles",
                    isCollapsed: false,
                    savedCards: [
                        {
                            title: 'Santa Monica Pier',
                            imageUrl: 'https://images.unsplash.com/photo-1551574210-10831cdf882d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
                            description: ''
                        },
                        {
                            title: 'Griffith Observatory',
                            imageUrl: 'https://images.unsplash.com/photo-1505785000-69d4eef30489?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
                            description: ''
                        },
                        {
                            title: 'Venice Beach Walk',
                            imageUrl: 'https://images.unsplash.com/photo-1448542146881-1d78dfb2f674?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1140&q=80',
                            description: ''
                        }
                    ]
                },
                {
                    name: "Copenhagen",
                    isCollapsed: false,
                    savedCards: [
                        {
                            title: 'Rundetårn',
                            imageUrl: 'https://images.unsplash.com/photo-1551574210-10831cdf882d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
                            description: ''
                        },
                        {
                            title: 'Reffen',
                            imageUrl: 'https://images.unsplash.com/photo-1505785000-69d4eef30489?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
                            description: ''
                        },
                        {
                            title: 'Havfrue',
                            imageUrl: 'https://images.unsplash.com/photo-1448542146881-1d78dfb2f674?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1140&q=80',
                            description: ''
                        }
                    ]
                },
                {
                    name: "Stockholm",
                    isCollapsed: false,
                    savedCards: [
                        {
                            title: 'Gamla Stan',
                            imageUrl: 'https://images.unsplash.com/photo-1551574210-10831cdf882d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
                            description: ''
                        },
                        {
                            title: 'Vassa Museum',
                            imageUrl: 'https://images.unsplash.com/photo-1505785000-69d4eef30489?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
                            description: ''
                        }
                    ]
                },
                {
                    name: "Tokyo",
                    isCollapsed: false,
                    savedCards: [
                        {
                            title: 'Senso-ji',
                            imageUrl: 'https://images.unsplash.com/photo-1551574210-10831cdf882d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
                            description: ''
                        }
                    ]
                }

            ], 
        }
    },
    methods: {
        groupHeaderWasClicked(groupIndex) {
            const group = this.cities[groupIndex];
            group.isCollapsed = !group.isCollapsed;
        },

        rowWasClicked() {
            this.$router.push('/favorite/asdasdas');
        }
    }
}
</script>


<style>

.list {
    width: 100%;
}

.list-group__header {
    display: flex;
    align-items: center;
    background: #efefef;
    height: 40px;
    padding: 0 16px;
    cursor: pointer;
}

.list-group__header:hover .list-group__title,
.list-group__header:hover .list-group__collapse
{
    opacity: 0.5;
}






.list-group__collapse {
    margin-left: auto;
}

.row {
    display: flex;
    height: 100px;
    width: 100%;
    align-items: center;
    padding: 0 16px;
    border-bottom: 1px solid #efefef;
    cursor: pointer;
}

.row__image {
    height: 60px;
    width: 60px;
    overflow: hidden;
    border-radius: 50%;
    margin-right: 16px;
}

.row__image img {
    object-fit: cover;
    width: 100%;
    height: 100%;
}

</style>

