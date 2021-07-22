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

  console.log("arr = ", arr);

  if (Boolean(arr.length)) {
    const obj = arr[0];

    let dialogs = [];

    for (const key in obj) {
      !!obj[key][0] && dialogs.push(obj[key][0]);
      !!obj[key][1] && dialogs.push(obj[key][1]);
    }

    console.log("dialogs = ", dialogs);
    return dialogs;
  }
};

export { getDialogsFromServer };
