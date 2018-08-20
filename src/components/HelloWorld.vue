<template>
    <!--<el-dialog title="收货地址" :visible.sync="value" :open="visibleChange" :close="visibleChange">-->
    <!--<editor v-model="text" :init="tinymceInit"></editor>-->
    <!--</el-dialog>-->
    <Modal :value="value" @on-visible-change="visibleChange" :transfer=false>
        <editor v-model="text" :init="tinymceInit"></editor>
    </Modal>
</template>

<script lang="ts">
    import {Component, Vue, Inject, Prop, Watch} from 'vue-property-decorator';
    import tinymce from 'tinymce';
    import 'tinymce/themes/modern/theme';
    import Editor from '@tinymce/tinymce-vue';

    @Component({
        components: {'editor': Editor}
    })
    export default class HelloWorld extends Vue {
        @Prop({default: false}) value!: boolean;

        visibleChange(value: boolean) {
            if (!value) {
                this.$emit('input', value);
            }
            tinymce.init(this.tinymceInit);
        }

        text = 'This is text';

        tinymceInit = {
            skin_url: '/tinymce/skins/lightgray',
            height: 300
        };

        mounted() {
            tinymce.init(this.tinymceInit);
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
