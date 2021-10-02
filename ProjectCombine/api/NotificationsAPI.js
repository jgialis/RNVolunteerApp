//Store all firebase related code.

import firebase from "../fb.js";

export function addNotification() {}

export async function getNotification(notificationsRetrieved) {
  var notificationList = [];
  var snapshot = await firebase
    .firestore()
    .collection("notifications")
    .where(
      "id",
      "==",
      firebase
        .firestore()
        .collection("users")
        .doc(firebase.auth().currentUser.uid).id
    )
    .orderBy("time", "desc")
    .get();

  snapshot.forEach((doc) => {
    const notification = doc.data();
    notificationList.push(notification);
  });

  notificationsRetrieved(notificationList);
}
