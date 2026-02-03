// js/firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
    getFirestore, collection, addDoc, query, where, getDocs, 
    Timestamp, getDoc, doc, updateDoc, deleteDoc, orderBy, setDoc,
    onSnapshot // 👈 [추가됨] 실시간 감지를 위해 꼭 필요합니다!
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAalHhoEK-ko55Jep-7k8ULHeaWWU99oh8",
    authDomain: "dream-meal-support.firebaseapp.com",
    projectId: "dream-meal-support",
    storageBucket: "dream-meal-support.firebasestorage.app",
    messagingSenderId: "230720243044",
    appId: "1:230720243044:web:eb38ecc28353a1c70aa671"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Export utilities for use in other modules
export { 
    db, 
    collection, 
    addDoc, 
    query, 
    where, 
    getDocs, 
    getDoc,
    setDoc,
    updateDoc, 
    deleteDoc, 
    doc, 
    orderBy,
    Timestamp,
    onSnapshot // 👈 [추가됨] 이제 index.html에서 가져다 쓸 수 있습니다.
};
