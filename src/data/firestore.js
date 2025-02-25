// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  getDocs,
  collection,
  doc,
  setDoc,
  Timestamp,
  getDoc,
  deleteDoc,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGE_SENDER_ID,
  appId: process.env.APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const fetchedTodos = [];

export const fetchTodos = async () => {
  const querySnapshot = await getDocs(collection(db, "todos"));
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());

    const aTodo = {
      id: doc.id,
      title: doc.data()["title"],
      is_done: doc.data()["is_done"],
      created_at: doc.data()["created_at"].toDate(),
    };

    fetchedTodos.push(aTodo);
  });

  return fetchedTodos;
};

export const addTodo = async (title) => {
  // Add a new document with a generated id
  const newTodoRef = await doc(collection(db, "todos"));

  const createdAtTimestamp = Timestamp.fromDate(new Date());
  const newTodo = {
    id: newTodoRef.id,
    title: title,
    is_done: false,
    created_at: createdAtTimestamp,
  };
  // later...
  await setDoc(newTodoRef, newTodo);

  return newTodoRef;
};

// 단일 할일 조회
export const fetchATodo = async (id) => {
  if (id === null) {
    return null;
  }

  const todoDocRef = doc(db, "todos", id);
  const todoDocSnap = await getDoc(todoDocRef);

  if (todoDocSnap.exists()) {
    console.log("Document data:", todoDocSnap.data());

    return {
      id: doc.id,
      title: todoDocSnap.data()["title"],
      is_done: todoDocSnap.data()["is_done"],
      created_at: todoDocSnap.data()["created_at"].toDate(),
    };
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
    return null;
  }
};

// 단일 할일 삭제
export const deleteATodo = async (id) => {
  const fetchedATodo = fetchATodo(id);
  if (fetchedATodo === null) {
    return null;
  }

  await deleteDoc(doc(db, "todos", id));

  return fetchedATodo;
};
