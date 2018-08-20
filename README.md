# Description

I put the tinymce in the sub page，and put it in iview modal , every time I refresh the whole page, tinymce can work normally.
But if I switch to another child router, then switch back. I will not be able to enter anything in tinymce and tinymce body content will become blank.
And there is no any error information.
And all element id in the tinymce of the modal will change

# FIX
:transfer=false
`
<Modal :value="value" @on-visible-change="visibleChange" :transfer=false>
        <editor v-model="text" :init="tinymceInit"></editor>
</Modal>
`

# Use
npm install
npm run serve

# Critical code
src/components/HelloWorld.vue
