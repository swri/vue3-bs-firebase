<template>
  <div class="card m-4">
    <form @submit.prevent="onSubmit">
      <div class="card-body">
        <label class="form-label">Name</label>
        <input class="form-control" type="text" v-model="form.name" required />
      </div>

      <div class="card-body">
        <label class="form-label">Email</label>
        <input
          class="form-control"
          type="email"
          v-model="form.email"
          required
        />
      </div>

      <button type="submit" class="btn btn-success m-3">Create User</button>
    </form>
  </div>
</template>

<script setup>
import { createUser } from "@/firebase";
import { reactive } from "vue";

const form = reactive({ name: "", email: "" });

const onSubmit = async () => {
  await createUser({ ...form });
  form.name = "";
  form.email = "";
};
</script>