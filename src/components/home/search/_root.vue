<template>
    <div class="search-page">
        <div class="search-page__header">
            <input 
                type="text" 
                class="search-page__input"
                placeholder="e.g. Los Angeles"
                v-model="search"
                @change="inputWasChanged">

            <div
                class="search-page__filter"
                @click="filterIsOpen = true">
                <i class="material-icons">filter_list</i>
            </div>
        </div>



        <div class="search-page__counter">
            <p>Showing <strong>{{currentCardIndex + 1}}</strong> out of <strong>{{cards.length}}</strong> suggestions for you</p>
        </div>

        <div class="search-page__content">
            <div class="card">
                <div class="card__image-container">
                    <img 
                        class="card__image"
                        :src="currentCard.imageUrl">
                </div>
                <div class="card__title">
                    {{currentCard.title}}
                </div>
            </div>
        </div>

        <div class="search-page__actions actions">
            <div 
                class="actions__button actions__previous"
                :class="{
                    'is-disabled': this.currentCardIndex === 0
                }"
                @click="previousWasPressed">
                <i class="material-icons">arrow_back</i>
            </div>
            <div 
                class="actions__button actions__like"
                @click="likeWasPressed">
                <i class="material-icons">favorite_border</i>
            </div>
            <div
                class="actions__button actions__next"
                :class="{
                    'is-disabled': this.currentCardIndex === this.cards.length - 1
                }"
                @click="nextWasPressed">
                <i class="material-icons">arrow_forward</i>
            </div>
        </div>

        <div
            class="popover-overlay"
            @click="filterIsOpen = false"
            v-if="filterIsOpen">
        </div>

        <div
            class="filter-popover"
            v-if="filterIsOpen">

            <div class="filter-popover__header">
                <div
                    class="filter-popover__close"
                    @click="filterIsOpen = false">Close</div>
                <div class="filter-popover__title">Profiles</div>
                <div 
                    class="filter-popover__apply"
                    @click="filterIsOpen = false">Apply</div>
            </div>
            <div class="filter-popover__content">
                <ul>
                    <li 
                        v-for="(row, rowIndex) in filters"
                        :key="rowIndex"
                        class="filter-row"
                        @click="rowWasPressed(rowIndex)">
                        <div class="filter-row__left">
                            {{row.name}}
                        </div>
                        <div class="filter-row__right">
                            <div 
                            :class="{
                                'is-selected': row.isSelected
                            }"
                            class="filter-row__check">
                                <i 
                                    v-if="row.isSelected" 
                                class="material-icons">done</i>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    data: () => {
        return {
            search: '',
            isLoading: false,
            currentCardIndex: 0,
            filterIsOpen: false,
            cards: [
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
            ],
            filters: [
                {
                    name: "Culture",
                    isSelected: false
                },
                {
                    name: "Sports",
                    isSelected: false
                },
                {
                    name: "Romantic",
                    isSelected: false
                },
                {
                    name: "Shopping",
                    isSelected: false
                },
                {
                    name: "Adventure",
                    isSelected: false
                },
                {
                    name: "Party",
                    isSelected: false
                },
                {
                    name: "Nature",
                    isSelected: false
                },
                {
                    name: "Photography",
                    isSelected: false
                },
                {
                    name: "Food",
                    isSelected: false
                },
                {
                    name: "Luxury",
                    isSelected: false
                },
            ]
        }
    },
    methods: {
        inputWasChanged() {
            this.$router.push('/search/?' + this.search);
            this.getResults();
        },
        getResults() {
            this.isLoading = true;

            // Get some data from the database

            // setTimeout(d => {
            //     this.isLoading = false
            // }, 2000)
        },
        previousWasPressed() {
            if (this.currentCardIndex > 0) {
                this.currentCardIndex -= 1;
            }
        },
        likeWasPressed() {

        },
        nextWasPressed() {
            if (this.currentCardIndex < this.cards.length - 1) {
                this.currentCardIndex += 1;
            }   
        },
        rowWasPressed(rowIndex) {
            const selectedRow = this.filters[rowIndex];
            selectedRow.isSelected = !selectedRow.isSelected; 
        }
        
    },
    computed: {
        currentCard() {
            return this.cards[this.currentCardIndex] || {}
        }
    },
    mounted() {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.search-page {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
}

.search-page__header {
    display: flex;
    margin: 24px;
    flex: 60px 0;
}

.search-page__input {
    box-shadow: 0 0 12px rgba(0,0,0,0.15);
}

input {
    width: 100%;
    height: 100%;
    border: none;
    text-indent: 24px;
}

.search-page__filter {
    display: flex;
    margin-left: 10px;
    box-shadow: 0 0 12px rgba(0,0,0,0.15);
    flex: 60px 0;
    border-radius: 50%;
    align-items: center;
    justify-content: center; 
    min-width: 60px;
}

.card__image-container {
    position: absolute;
    height: 100%;
    overflow: hidden;
}

.card__image {
    object-fit: cover;
    height: 100%;
    width: 100%;
}


.next-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    right: 24px;
    background: black;
    color: white;

}

.previous-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    left: 24px;
    background:black;
    color: white;
}

.search-page__counter {
    text-align: center; 
}

.search-page__content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1 0;
    flex-direction: column;
    min-height: 0
}

.card {
    position: relative;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    flex: 1 0;
    width: 60%;
    border-radius: 30px;
    box-shadow: 0 10px 20px 5px rgba(0,0,0,0.1);
}

.card__title {
    background: white;;
    margin: auto 20px 20px 20px;
    padding: 10px;
    text-align: center;
    border-radius: 10px;
    z-index: 2;
}

.search-page__actions {
    display: flex;
    flex: 100px 0;
    margin: auto;
    justify-content: space-between;
    align-items: center;
}

.actions__button {
    display: flex;
    background: white;
    height: 65px;
    width: 65px;
    border-radius: 50%;
    box-shadow: 0 0 12px rgba(0,0,0,0.15);
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.actions__button.is-disabled {
    cursor: not-allowed;
}

.actions__button:hover {
    color: #808080
}

.actions__like {
    margin: 0 24px;
}

.popover-overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0,0,0,0.2);
    z-index: 3;
}


.filter-popover {
    display: flex;
    position: fixed;
    flex-direction: column;
    width: 100%;
    bottom: 0;
    height: 80%;
    background: #FFF;
    box-shadow: 0 0 12px rgba(0,0,0,0.15);
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    z-index: 3;
    overflow: hidden;
}

.filter-popover__header {
    display: flex;
    width: 100%;
    flex: 60px 0;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    min-height: 60px;
}

.filter-popover__content {
    width: 100%;
    flex: 1 0;
    overflow: scroll;
}

.filter-row {
    display: flex;
    align-items: center;
    height: 65px;
    padding: 0 20px;
    margin: 0;
    border-bottom: 1px solid;
}

.filter-row:hover {
    background: #efefef;
}

.filter-row__left {
    
}

.filter-row__right {
    margin-left: auto;
}

.filter-row__check {
    height: 32px;
    width: 32px;
    border-radius: 50%;
    border: 1px solid; 
}

.filter-row__check.is-selected {
    background-color: green;

}

.filter-row__check.is-selected .material-icons {
    color: #fff;
    
}


</style>
