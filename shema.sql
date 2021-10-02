CREATE TABLE Notifications (
  message CHAR(100),
  orgID INTEGER REFERENCES Organization(orgID),
  timestamp TIME
  notificationID INTEGER PRIMARY KEY, 
  isRead BOOLEAN DEFAULT "FALSE"
);

CREATE TABLE Users (
  useremail varchar(40) not null,
  username varchar(20) not null,
  userpword varchar(20) not null,
  userType char(1) not null,
  userID int primary key
);

CREATE TABLE Organization (
  orgemail varchar(40) not null,
  orgname varchar(20) not null,
  orgpword varchar(20) not null,
  orgCause varChar(50) not null,
  orgZip INTEGER,
  orgID int primary key
);

CREATE TABLE Volunteers ( 
  volemail varchar(40) not null,
  volname varchar(20) not null,
  volPword varchar(20) not null,
  userID int primary key
);

create table Event (
  eventName varchar(30) not null,
  eventTime time not null,
  eventDate date not null,
  eventDesc char(200) not null,
  eventLocation varchar (20) not null,
  eventCapLimit INTEGER,
  hostID int,
  FOREIGN KEY (hostID) references Organization(orgID)
);

INSERT INTO Volunteers(volemail, volname, volPword, userID) 
VALUES("jcool@gmail.com", "kjasdlkjsal", 1),
("jcool@gmail.com", "Joe Cool", "ljljoisadas", 2),
("jdoe@gmail.com", "John Doe", "asldjasdpi", 3),
("jquick@gmail.com", "Jack Quick", "asdjpaosd", 4),
("smay@gmail.com", "Sally May", "asdjpaosd", 5),
("aapples@gmail.com", "Abby Apples", "asjdasdjj", 6),
("lnote@gmail.com", "Lyrik Note", "ijonasdlp", 7),
("llake@gmail.com", "Loch Lake", "aslidkjlk", 8),
("bbuilder@gmail.com", "Bob Builder", "Jashldjk", 9),
("swild@gmail.com", "Savannah Wild", "opioeihasd", 10),
("lsweets@gmail.com", "Latte Sweets", "asdguijp", 11),
("lcroft@gmail.com", "Lara Croft", "asywu8qas", 12),
("alevy@gmail.com", "Avril Levy", "piuoiyhb8", 13);

insert into Users (userID,username,userpword, userType, useremail) 
VALUES(1,"Joe Cool","kjasdlkjsal", "V", "jcool@gmail.com"),
      (2,"John Doe","ljljoisadas", "V", "jdoe@gmail.com"),
      (3,"Jack Quick","asldjasdpi", "V", "jquick@gmail.com"),
      (4,"Sally May","asdjpaosd", "V", "smay@gmail.com"),
      (5,"Abby Apples","asjdasdjj", "V", "aapples@gmail.com"),
      (6,"Lyrik Note","ijonasdlp", "V", "lnote@gmail.com"),
      (7,"Bob Builder","Jashldjk", "V", "bbuilder@gmail.com"),
      (8,"Daisy Fields","askdjhuc", "V", "dfields@gmail.com"),
      (9,"Loch Lake","aslidkjlk", "V", "llake@gmail.com"),
      (10,"Savannah Wild","opioeihasd", "O", "swild@gmail.com"),
      (11,"Latte Sweets","asdguijp[ d", "V", "lsweets@gmail.com"),
      (12,"Ruby Rose","mpugkjoqw.,w", "O", "rrose@gmail.com"),
      (13,"Onyx Kingston","iyuigshmb;", "O", "okingston@gmail.com"),
      (14,"Lara Croft","asywu8qas", "V", "lcroft@gmail.com"),
      (15,"Angel Benevolence","bnmbxzip", "V", "abenevolence@gmail.com"),
      (16,"Check Gecko","asjhk9y7gk", "V", "cgeck@gmail.com"),
      (17,"Avril Levy","piuoiyhb8", "V", "alevy@gmail.com"),
      (18,"Amethyst Connors","jpoipoua", "V", "aconnors@gmail.com"),
      (19,"Eloise Capello","aspoiuqmn", "V", "ecapello@gmail.com"),
      (20,"Summer Anderson","tuewp921jk", "O", "sanderson@gmail.com");

insert into Organization (orgID,orgname,orgpword, orgCause, orgZip orgemail) 
VALUES(1,"Red Cross","skfdlj", "Environment", 95303, "rcross@gmail.com"),
      (2,"Healthy House","ekljl", "Community", 95312, "hh@gmail.com"),
      (3,"Food Bank","asfffds", "Animal Shelter", 95315, "foodbank@gmail.com"),
      (4,"Bobcat Pantry","fdsfaf", "Crisis", 93620, "bpantry@gmail.com"),
      (5,"United Way of Merced","kuighg", "Homelessness", 95317, "uwaymerced@gmail.com"),
      (6,"Salvation Army","bdeytrrt", "Seniors", 95317, "sarmy@gmail.com");
      


insert into Event (eventName, eventTime, eventDate, eventDesc, eventLocation, eventCapLimit INTEGER, hostID) 
VALUES("Food Donation Frenzy", '12:00:00', '3-19-2021', "Come help us give out food", "Merced, CA", 10, 3),
      ("We Love Nature", '4:00:00', '3-22-2021', "Help us plant new trees and bushes", "Merced, CA", 20, 5);
      




--update Users
--set password = newpassword
--where name = this.user
update Users
set userpword = 'coolpassword'
where username = 'Joe Cool';

update Organization
set orgpword = 'food is good'
where orgname = 'Food Bank';

--delete from Users
--where name = this.user
delete from Users
where username = 'Ruby Rose';



--To filter and customize searches:
SELECT orgname, orgCause FROM Organization WHERE orgCause = 'VALUE';

SELECT orgname, orgZip FROM Organization WHERE orgZip = VALUE;

SELECT * FROM Event WHERE eventDate = 'VALUE';

SELECT eventName FROM eventDate WHERE eventName = 'VALUE';


--Signing in:
SELECT orgemail, orgpword FROM Organization WHERE orgemail = 'VALUE' AND orgpword = 'VALUE';

SELECT volemail, volPword FROM Organization WHERE volemail= 'VALUE' AND volPword = 'VALUE';

--Volunteer viewing home page events:
SELECT orgname, orgCause, orgZip, eventDate, eventTime, eventDescription FROM Event, Organization 
WHERE orgID = hostID;

--Volunteer viewing profile page:
SELECT * FROM Volunteer WHERE userID = VALUE

--User updating/changing email, password,  profile information (need to add volunteer information attribute) (NOTE: 2 updates need to be executed as a 'transaction' to reflect changes both in user table and volunteer/or organization table [single update can be achieved with triggers):
UPDATE Volunteer SET user_information = "new value" WHERE userID = VALUE

UPDATE Volunteer SET volPword = "new value" WHERE userID = VALUE
UPDATE User SET userpword = "new value" WHERE userID = VALUE

UPDATE Volunteer SET volemail = "new value" WHERE userID = VALUE
UPDATE User SET useremail= "new value" WHERE userID = VALUE

-- Some notes:
--Repeat above query UPDATEs regarding organizers…

-- Need SQL query for user to view events which they are associated to, be it a volunteer or an organizer. 

-- Need view and sql query to extract relevant notification information.

--Might need an extra attribute to represent 'interested/not interested' from UI design.

-- To represent a messaging system in regards to databases, we are missing an entire message table
