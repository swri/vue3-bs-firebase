import { initializeApp } from "firebase/app";
import { ref, onUnmounted } from "vue";

const firebaseConfig = {
  apiKey: "AIzaSyCyr2bJG8UxH--k7njHMlRMkAFRuAVKBTU",
  authDomain: "vue-firebase-dd856.firebaseapp.com",
  projectId: "vue-firebase-dd856",
  storageBucket: "vue-firebase-dd856.appspot.com",
  messagingSenderId: "459160463496",
  appId: "1:459160463496:web:973929cb4cba8be90dd73d",
};

const app = initializeApp(firebaseConfig);

const db = app.firestore();
const query = db.collection("users");

export const createUser = (user) => {
  return query.add(user);
};

export const getUser = async (id) => {
  const user = await query.doc(id).get();
  return user.exists ? user.data() : null;
};

export const updateUser = (id, user) => {
  return query.doc(id).update(user);
};

export const deleteUser = (id) => {
  return query.doc(id).delete();
};

export const useLoadUsers = () => {
  const users = ref([]);
  const close = query.onSnapshot((snapshot) => {
    users.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  });
  onUnmounted(close);
  return param;
};
