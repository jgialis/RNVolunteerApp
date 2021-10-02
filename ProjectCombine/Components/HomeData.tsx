import { SegmentedControlIOSComponent } from "react-native";
import fb from "../fb";

export var homedata: [
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string[]
][] = [];

export default async function LoadData() {
  //homedata.push(["name:t","test"]);
  var data;
  //console.log("Before Load:");
  homedata = [];
  var db = fb.firestore().collection("events");
  await db.get().then((querySnapshot) => {
    // console.log("Event Size:", querySnapshot.size);
    
    querySnapshot.forEach((documentSnapshot) => {
      //console.log("Event ID:",documentSnapshot.id, documentSnapshot.data());
      data = documentSnapshot.data();

      var voltemp = data["Volunteers"];
      //console.log("voltemp;", voltemp);
      var dataref;
      var name;
      var contact;
      var temp = [];
      for (var i = 0; i < voltemp.length; i++) {
        dataref = fb.firestore().collection("users").doc(voltemp[i]);
        dataref.get().then((doc) => {
          
          var tempdata = doc.data();
          name = tempdata["name"];
          contact = tempdata["email"];
          //console.log("doc data", doc.data());
          temp.push(tempdata["name"], tempdata["email"],doc.id);
        });
      }
      //console.log("TTETEETT", data);

      homedata.push([
        data["name"],
        data["desc"],
        data["contactinfo"],
        data["location"],
        data["time"],
        documentSnapshot.id,
        data["OrgID"],
        temp,
      ]);

      //console.log("Event Name:", data['name']);
      //console.log("Event Desc:", data['desc']);
      //console.log("Got Data:");
    });
  });
  //name = data['name'];
  // console.log("After Load:", name);
}
