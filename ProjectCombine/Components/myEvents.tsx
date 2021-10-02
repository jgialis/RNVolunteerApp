import fb from "../fb";

export var eventdata: [string,string,string,string,string,string,string][] = [];

export default async function LoadEventData() {
  var data;
  eventdata = [];
  var db = fb.firestore();
  await db.collection("users").doc(fb.auth().currentUser.uid)
    .get()
    .then((doc) => {
      var temp = doc.data();
      data = temp["myEvents"];

      for(var i = 0; i < data.length; i++){
        db.collection("events").doc(data[i]).get().then((doc) => {
          var tempdata = doc.data();
          eventdata.push([
            tempdata["name"],
            tempdata["desc"],
            tempdata["contactinfo"],
            tempdata["location"],
            tempdata["time"],
            doc.id,
            tempdata["OrgID"],
          ]);
        })
      }
    });
    

}
