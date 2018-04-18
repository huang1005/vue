<template>
    <div>
        <Input v-model="value14" placeholder="Enter something..." clearable style="width: 200px">
        </Input>
        <Icon type="arrow-up-a" slot="prepend"></Icon>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                value14: 'Hello World'
            }
        }
    }
</script>

<style>

</style>
