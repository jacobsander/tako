<template>
    <div class="trip-page">
      <div class="trip-page__header">
        Your favorites
      </div>
      <div class="trip-page__tab">
        <router-link
          to="/favorites/list" class="tab-item">
          List View
        </router-link>
        <router-link 
          to="/favorites/map"
          class="tab-item">
          Map View
        </router-link>
      </div>
      <div class="trip-page__content">
        <router-view></router-view>
      </div>
    </div>
</template>

<script>

</script>


<style scoped>

.trip-page {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.trip-page__header{
  display: flex;
  flex: 80px 0;
  min-height: 40px;
  width: 100%;
  background: #2c3e50;
  align-items: center;
  color: #FFF;
  padding: 0 16px;
  font-size: 24px;
}

.trip-page__tab{
  display: flex;
  flex: 80px 0;
  min-height: 80px;
  width: 100%;
  border-bottom: 1px solid #efefef;
  
}

.tab-item {
  display: flex;
  flex: 1 0;
  justify-content: center;
  align-items: center;
}

.trip-page__content{
  display: flex;
  flex: 1 0;
  width: 100%;
  overflow: scroll;
}

.overview {
  padding: 20px 20px;
}

.tab-item.router-link-active {
  color: blue;
  border-bottom: 1px solid blue;
}



</style>
