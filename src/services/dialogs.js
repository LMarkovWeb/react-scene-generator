import { FireStoreDB } from "./firebase";

const getDialogsFromServer = async () => {
  let arr = [];
  await FireStoreDB.collection("dialog_1")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        arr.push(doc.data());
      });
    });

  return arr;
};

export { getDialogsFromServer };
