package models

import (
	mgo "gopkg.in/mgo.v2"
	"gopkg.in/mgo.v2/bson"
	"fmt"
)

var Posts *mgo.Collection

type Post struct {
	ID       bson.ObjectId `json:"id" bson:"_id"`
	Title    string        `json:"title" bson:"title"`
	Body     string        `json:"body" bson:"body"`
	Tag      string        `json:"tag" bson:"Tag"`
	Username string        `json:"username" bson:"username"`		
}

type PostBundle struct {
	Posts []Post
	Next_data bool
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

func PartialPosts(offset int) (PostBundle, error) {
	
	var nd bool
	var pb PostBundle

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
	err = Posts.Find(bson.M{}).Skip(offset).Limit(5).All(&posts)
	if err != nil {
		return pb, err
	}	

	if(len(posts) == 5){
		nd = true
	}else {
		nd = false
	}
	
	pb = PostBundle{
		Posts : posts,
		Next_data : nd,
	}

	fmt.Print("PostBundle :",pb)
	
	return pb, nil
}
