<template>
<div>
    <div class="center-container">
        <div class="center-content">
            Login
        </div>
    </div>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class Login extends Vue {

}
</script>
<style>
.center-container {
    height: 100vh;
    position: relative;
}
.center-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>
