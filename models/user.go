package models

import (
	_ "github.com/lib/pq"
	mgo "gopkg.in/mgo.v2"
	"gopkg.in/mgo.v2/bson"
)

var DB *mgo.Database
var Users *mgo.Collection

//User model
type User struct {
	ID               bson.ObjectId `json:"id" bson:"_id"`
	Username         string        `json:"username" bson:"username"`
	Password         string        `json:"password" bson:"password"`
	CreditCardNumber string        `json:"creditcardnumber" bson:"creditcardnumber"`
}

func AllUsers() ([]User, error) {

	s, err := mgo.Dial("mongodb://localhost/go-with-react")
	if err != nil {
		panic(err)
	}

	if err = s.Ping(); err != nil {
		panic(err)
	}

	DB = s.DB("go-with-react")
	Users = DB.C("users")

	users := []User{}
	err = Users.Find(bson.M{}).All(&users)
	if err != nil {
		return nil, err
	}
	return users, nil
}
