<template>
    <div class="profile">
        <div class="profile__header">
          <div class="header__container">
            <div class="header__img"><img src="https://images.unsplash.com/photo-1493106819501-66d381c466f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt=""></div>
            <div class="header__name">Jacob Sander</div>
          </div>
          
        </div>
        <div class="profile__content">
          <div class="content__header">Profile information</div>
          <div 
            v-for="(row, rowIndex) in infoRows"
            :key="'info-' + rowIndex"
            class="profile__row">
            <div class="row__label">{{row.label}}</div>
            <div class="row__value">{{row.value}}</div>
          </div>
          <div class="content__header">Actions</div>
          <div 
            v-for="(row, rowIndex) in actionRows"
            :key="'action-' + rowIndex"
            class="profile__row">
            <div class="row__action">{{row.label}}</div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  data: () => {
    return {
      infoRows: [
        {
          label: "Name",
          value: "Jacob Sander"
        },
        {
          label: "Email",
          value: "jacob@sander.dk"
        },
        {
          label: "Hometown",
          value: "Copenhagen"
        },
        {
          label: "Phone",
          value: "28409711"
        },
      ],
      actionRows: [
        {
          label: "Log out"
        },
        {
          label: "Change Password"
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.profile {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: scroll;
}

.profile__header {
  display: flex;
  background:#2c3e50;
  flex: 250px 0;
  min-height: 250px;
  justify-content: center;
  align-items: center;
}

.profile__content {
  flex: 1 0;
  width: 100%;
}

.header__container {
  display: flex;
  flex-direction: column;
  align-items: center;
}


.header__img {
  background: yellow; 
  height: 100px;
  width: 100px;
  border-radius: 50%;
  overflow: hidden;
}

.header__img img {
  object-fit: cover;
  height: 100%;
  width: 100%;
}

.header__name {
  color: white;
  margin-top: 10px;
}

.content__header {
  display: flex;
  background: #efefef;
  height: 40px;
  align-items: center;
  padding: 0 16px;
}

.profile__row {
  display: flex;
  background: white; 
  width: 100%;
  height: 70px;
  border-bottom: 1px solid #efefef;
  align-items: center;
  padding: 0 16px;
}

.row__label {
  flex: 150px 0; 
  min-width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-right: 16px;
}

.row__value {
  flex: 1 0;
  text-align: right;
}



</style>
