<template>
  <div class="home">
    <van-tabs>
        <van-tab v-for="index in 8" :title="'标签 ' + index" :key="index">
            内容 {{ index }}
        </van-tab>
    </van-tabs>
    购物车{{message}}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';


export default class Home extends Vue {
    private message = 'Hello';

}
</script>
