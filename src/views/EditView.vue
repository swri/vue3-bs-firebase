<template>
  <div class="card card-body mt-4">
    <h3>Edit Users</h3>
    <form @submit.prevent="update">
      <div class="form-group">
        <label>Name</label>
        <input v-model="form.name" class="form-control" required />
      </div>

      <div class="form-group mt-3">
        <label>Email</label>
        <input
          type="email"
          v-model="form.email"
          class="form-control"
          required
        />
      </div>

      <button type="submit" class="btn btn-primary m-3">Update</button>
    </form>
  </div>
</template>

<script setup>
import { reactive, computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getUser, updateUser } from "@/firebase";

const router = useRouter();
const route = useRoute();
const idUser = computed(() => route.params.id);
onMounted(async () => {
  const user = await getUser(idUser.value);
  form.name = user.name;
  form.email = user.email;
});

const form = reactive({ name: "", email: "" });
const update = async () => {
  await updateUser(idUser.value, { ...form });
  router.push("/");
  form.name = "";
  form.email = "";
};
</script>
