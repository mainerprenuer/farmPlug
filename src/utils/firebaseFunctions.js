import {doc, setDoc } from 'firebase/firestore';
import { firestore } from '../firebase.config';

//saving new item
export const saveItem = async (data) => {
    await setDoc(doc(firestore, "farmItems", `${Date.now()}`), data, { 
        merge: true,
     });
};
