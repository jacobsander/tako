<template>
    <div class="search-page">
        <div class="search__background">
            <img src="https://images.unsplash.com/photo-1520985244272-9d0b8067a4ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="">
        </div>
        <div class="search__title">
            <h1>TAKO</h1>
        </div>
        <div class="search__content">
            <div class="search__input">
                <input 
                    v-model="search"
                    type="text" 
                    placeholder="Where are you going?"
                    @keyup.enter="enterWasPressed">
            </div>
        </div>
        
        
    </div>
</template>

<script>
export default {
    data: () => {
        return {
            search: ''
        }
    },
    methods: {
        enterWasPressed(){
            this.$router.push(`/search?q=${this.search}`);
        }
    },
    computed: {
    },
    mounted() {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.search-page {
    display: flex;
    position: relative;
    height: 100vh;
    align-items: center;
    justify-content: center;
}

.search__background {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
}

.search__background img {
    width: 100%;
    height: 100%;
    object-fit: cover;

}

.search__title {
    position: absolute;
    z-index: 3;
    top: 0;
}

.search__content {
    z-index: 2;
    flex: 1 0;
    margin: 0 16px;
}

h1 {
    text-align: center;
    color: #fff;
    font-size: 50px;
    margin-bottom: 10px;
}

.search__input {
    border: 1px solid #efefef;
    border-radius: 5px;
    overflow: hidden;
    height: 60px;
}

.search__input input {
    width: 100%;
    height: 100%;
    text-indent: 16px;
}



</style>
