<template>
  <div class="home">
    <img src="../assets/logo.png"><br/>
    <Button @click="show">show-editor</Button><br/>
    <p>Every time if you refresh the whole page, tinymce can work normally.<br/>But if you switch to about page, then switch back home page. <br/>You will not be able to enter anything in tinymce and tinymce body content will become blank.</p>
    <HelloWorld v-model="isShow"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
    isShow:boolean=false;
    show(){
        this.isShow=true;
    }
}
</script>
