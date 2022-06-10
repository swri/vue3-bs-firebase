import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  collection,
  onSnapshot,
} from "firebase/firestore";

import { ref, onUnmounted } from "vue";

initializeApp({
  apiKey: "AIzaSyCyr2bJG8UxH--k7njHMlRMkAFRuAVKBTU",
  authDomain: "vue-firebase-dd856.firebaseapp.com",
  projectId: "vue-firebase-dd856",
  storageBucket: "vue-firebase-dd856.appspot.com",
  messagingSenderId: "459160463496",
  appId: "1:459160463496:web:973929cb4cba8be90dd73d",
});

const db = getFirestore();

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

const random = () => {
  let result = "";
  for (var i = 20; i > 0; --i)
    result += chars[Math.floor(Math.random() * chars.length)];
  return result;
};

const users = (id = random()) => {
  return doc(db, "users", id);
};

export const createUser = async (user) => {
  return await setDoc(users(), user);
};

export const getUser = async (id) => {
  const docSnap = await getDoc(users("9mn8yjrcv28.v9o4p04u978"));
  console.log(docSnap.data());
  return docSnap.exists() ? docSnap.data() : null;
};

export const updateUser = async (id, user) => {
  return await updateDoc(users(id), user);
};

export const deleteUser = async (id) => {
  return await deleteDoc(users(id));
};

export const useLoadUsers = () => {
  const users = ref([]);
  const close = onSnapshot(collection(db, "users"), (snapshot) => {
    users.value = snapshot.docs.map((result) => ({
      id: result.id,
      ...result.data(),
    }));
  });
  onUnmounted(close);
  return users;
};
