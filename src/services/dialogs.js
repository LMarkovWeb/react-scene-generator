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

    if(Boolean(arr.length)) {
        const obj = arr[0];

        let dialogs = [];

        for (const key in obj) {
            dialogs.push(obj[key])
        }

        return dialogs;

    }

};

export { getDialogsFromServer };
