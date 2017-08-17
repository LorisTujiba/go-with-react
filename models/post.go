package models

import (
	mgo "gopkg.in/mgo.v2"
	"gopkg.in/mgo.v2/bson"
)

var Posts *mgo.Collection

type Post struct {
	ID       bson.ObjectId `json:"id" bson:"_id"`
	Title    string        `json:"title" bson:"title"`
	Body     string        `json:"body" bson:"body"`
	Tag      string        `json:"tag" bson:"Tag"`
	Username string        `json:"username" bson:"username"`
}

func AllPosts() ([]Post, error) {
	s, err := mgo.Dial("mongodb://localhost/go-with-react")
	if err != nil {
		panic(err)
	}

	if err = s.Ping(); err != nil {
		panic(err)
	}

	DB = s.DB("go-with-react")
	Posts = DB.C("posts")

	posts := []Post{}
	err = Posts.Find(bson.M{}).All(&posts)
	if err != nil {
		return nil, err
	}
	return posts, nil
}
