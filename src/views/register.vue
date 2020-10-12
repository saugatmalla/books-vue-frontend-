<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
  >
    <div
      class="max-w-md w-full bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2"
    >
      <div>
        <h2
          class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900"
        >
          Create an account
        </h2>
      </div>
      <form @submit.prevent="register" class="mt-8" action="#" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div>
          <label
            for="name"
            class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
            >Name</label
          >
          <input
            type="text"
            v-model.trim="name"
            placeholder="Full Name"
            id="name"
            required
            class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
            @blur="$v.name.$touch()"
          />
          <div v-if="$v.name.$dirty" class="mb-2">
            <p v-if="!$v.name.required" class="text-red-500 text-xs italic">
              Please fill out this field.
            </p>
          </div>
        </div>

        <div>
          <label
            for="email"
            class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
            >Email</label
          >
          <input
            type="text"
            v-model.trim="email"
            placeholder="Email"
            id="email"
            required
            class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
            @blur="$v.email.$touch()"
          />
          <div v-if="$v.email.$dirty" class="mb-2">
            <p v-if="!$v.email.required" class="text-red-500 text-xs italic">
              Please fill out this field.
            </p>
            <p v-else-if="!$v.email.email" class="text-red-500 text-xs italic">
              Email must be valid.
            </p>
          </div>
        </div>

        <div>
          <label
            for="password"
            class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
            >Password</label
          >
          <input
            type="password"
            v-model="password"
            placeholder="Password"
            id="password"
            required
            class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
            @blur="$v.password.$touch()"
          />
          <div v-if="$v.password.$dirty" class="mb-2">
            <p v-if="!$v.password.required" class="text-red-500 text-xs italic">
              Please fill out this field.
            </p>
            <p
              v-else-if="
                !$v.password.lowercase ||
                !$v.password.uppercase ||
                !$v.password.number ||
                !$v.password.special
              "
              class="text-red-500 text-xs italic"
            >
              Password must contain at least one lowercase, uppercase, number
              and special character.
            </p>
            <p
              v-else-if="!$v.password.minLength"
              class="text-red-500 text-xs italic"
            >
              Password must be min 8 length
            </p>
          </div>
        </div>

        <div>
          <label
            for="confirmPassword"
            class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
            >Confirm Password</label
          >
          <input
            type="password"
            v-model="confirmPassword"
            placeholder="Confirm Password"
            id="confirmPassword"
            required
            class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
            @blur="$v.confirmPassword.$touch()"
          />
          <div v-if="$v.confirmPassword.$dirty" class="mb-2">
            <p
              v-if="!$v.confirmPassword.required"
              class="text-red-500 text-xs italic"
            >
              Please fill out this field.
            </p>
            <p
              v-else-if="!$v.confirmPassword.sameAs"
              class="text-red-500 text-xs italic"
            >
              Password doesn't match.
            </p>
          </div>
        </div>

        <div class="mt-6">
          <button
            type="submit"
            @click.prevent="register"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
          >
            Sign up
          </button>
        </div>
      </form>

      <div class="mt-6">
        Already have account?
        <router-link :to="{ name: 'Login' }"
          ><span><u>Login</u></span></router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";

function initialData() {
  return {
    name: null,
    email: null,
    password: null,
    confirmPassword: null,
  };
}

export default {
  name: "Register",
  data() {
    return initialData();
  },

  validations: {
    name: { required },
    email: { email, required },
    password: {
      required,
      minLength: minLength(8),
      uppercase: function (value) {
        return /[A-Z]/.test(value);
      },
      lowercase: function (value) {
        return /[a-z]/.test(value);
      },
      number: function (value) {
        return /[0-9]/.test(value);
      },
      special: function (value) {
        return /[#?!@$%^&*-]/.test(value);
      },
    },
    confirmPassword: {
      required,
      sameAs: sameAs(function () {
        return this.password;
      }),
    },
  },

  computed: {},

  methods: {
    register() {
      const { name, email, password } = this;
      const data = { name, email, password };

      if (!this.$v.$invalid) {
        this.$router.push({ name: "Dashboard" });
      } else {
        this.$v.$touch();
      }
    },
  },
};
</script>

<style>
</style>