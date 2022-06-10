<template>
  <div class="container mx-auto">
    <form @submit.prevent="onsubmit">
      <div class="form-group">
        <label class="mr-10">Name</label>
        <input
          class="rounded text-pink-500"
          type="text"
          v-model="form.name"
          required
        />
      </div>

      <div class="form-group mt-3">
        <label>Email</label>
        <input
          class="form-control"
          type="email"
          v-model="form.email"
          required
        />
      </div>

      <button
        type="submit"
        class="bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700"
      >
        Create User
      </button>
    </form>
  </div>
</template>

<script setup>
// import { createUser } from "@/firebase";
import { reactive } from "vue";

const form = reactive({ name: "", email: "" });

const onsubmit = async () => {
  await createUser({ ...form });
  form.name = "";
  form.email = "";
};
</script>