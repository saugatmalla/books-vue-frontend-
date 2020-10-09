<template>
  <div>
    <section class="hero is-fullheight has-text-centered">
      <div class="hero-body">
        <div class="container">
          <p class="is-size-1" style="margin-bottom: 40px">Login</p>
          <section>
            <b-field label="Email">
              <b-input
                type="email"
                placeholder="Email"
                v-model="user.email"
                required
              >
              </b-input>
            </b-field>

            <b-field label="Password">
              <b-input
                type="password"
                placeholder="Password"
                v-model="user.password"
                required
                password-reveal
              >
              </b-input>
            </b-field>

            <b-button
              type="is-primary is-light"
              rounded
              class="mr4"
              @click="login"
            >
              Login
            </b-button>
            <div>
              Don't have an account? <span><u>Sign up</u></span>
            </div>
          </section>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { UserLogin } from "@/models/models";
@Component
export default class Login extends Vue {
  user: UserLogin = {
    email: "",
    password: "",
  };

  login(): void {}
}
</script>
<style>
</style>
