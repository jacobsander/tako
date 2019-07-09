<template>
    <div class="home-page">
        <div class="home-page__content">
            <router-view></router-view>
        </div>
        <div class="home-page__footer">
            <router-link
                to="/search"
                class="home-page__link">
                <i class="material-icons">search</i>
            </router-link>
            <router-link 
                to="/favorites"
                class="home-page__link">
                <i class="material-icons">favorite_border</i>
            </router-link>
            <router-link 
                to="/profile"
                class="home-page__link">
                <i class="material-icons-outlined">person</i>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home-page {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
}

.home-page__content {
    width: 100%;
    flex: 1 0;
    overflow: hidden;
}

.home-page__footer {
    display: flex;
    width: 100%;
    flex: 80px 0;
    min-height: 80px;
    border-top: 1px solid #efefef;
}

.home-page__link {
    display: flex;
    height: 100%;
    flex: 1 0;
    justify-content: center;
    align-items: center;
}

.home-page__link.router-link-active {
    border-top: 1px solid blue;
    color: blue;
}

</style>
