<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">
      <svg t="1571908053229" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2275" width="10" height="10"><path d="M822.575 931.219H206.106l-5.373-355.173L327.6 533.089l175.491 65.997 178.491 6 140.993 65.997zM584.882 210.369a77.403 77.403 0 0 0-1.541 15.333v152.186c0 37.948 27.336 68.997 60.747 68.997s60.747-31.048 60.747-68.997V225.702a77.41 77.41 0 0 0-1.541-15.333H584.882z" fill="#1296db" p-id="2276"></path><path d="M758.965 958.065H265.234c-48.86 0-87.134-25.649-87.134-58.393V250.357c0-22.594 25.175-40.292 57.314-40.292h523.551c48.86 0 87.135 25.649 87.135 58.393v631.215c0 32.743-38.275 58.392-87.135 58.392z m-523.551-720c-19.042 0-29.314 8.725-29.314 12.292v649.315c0 14.347 25.289 30.393 59.134 30.393h493.731c33.846 0 59.135-16.046 59.135-30.393V268.458c0-14.347-25.289-30.393-59.135-30.393H235.414z" fill="#1296db" p-id="2277"></path><path d="M206.378 245.765h-28c0-37.007 10.019-65.679 29.778-85.219 22.448-22.199 63.736-30.108 94.891-30.108v28c-25.497 0-59.906 6.89-75.203 22.017-14.244 14.086-21.466 36.059-21.466 65.31z" fill="#1296db" p-id="2278"></path><path d="M302.711 130.438h480v28h-480z" fill="#1296db" p-id="2279"></path><path d="M829.949 239.024h-28v-60.753c0-10.936-8.897-19.833-19.833-19.833v-28c26.375 0 47.833 21.458 47.833 47.833v60.753z" fill="#1296db" p-id="2280"></path><path d="M772.804 158.238l19.999-0.324 1.068 65.968-19.999 0.324z" fill="#1296db" p-id="2281"></path></svg>
       书架</router-link>
      <router-link to="/shoppe">书城</router-link>
      <router-link to="/center">我的</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}
#nav {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background: #ffffff;
  box-shadow: 0px -1px 4px 0px rgba(0, 0, 0, 0.15);
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  width: 33.33%;
  display: inline-block;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
