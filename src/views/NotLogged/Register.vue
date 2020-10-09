<template>
  <div>
    <section class="hero is-fullheight has-text-centered">
      <div class="hero-body">
        <div class="container">
          <p class="is-size-1" style="margin-bottom: 40px">Sign Up</p>
          <section>
            <b-field label="Name">
              <b-input type="text" placeholder="Full Name" v-model="user.name" required>
              </b-input>
            </b-field>
            <b-field label="Email">
              <b-input type="email" placeholder="Email" v-model="user.email" required>
              </b-input>
            </b-field>

            <b-field label="Password">
              <b-input
                type="password"
                placeholder="Password"
                v-model="user.password"
                :min="8"
                required
                password-reveal
              >
              </b-input>
            </b-field>

            <b-button
              type="is-primary is-light"
              rounded
              class="mr4"
              @click="signup"
            >
              Signup
            </b-button>
            <div>
              Already have an account? <span><u>Login</u></span>
            </div>
          </section>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Login extends Vue {
  user: object = {
    name: null,
    email: null,
    password: null,
  };

  signup(): void {
    this;
  }
}
</script>
<style>
</style>
