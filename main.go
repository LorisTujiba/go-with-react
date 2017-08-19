package main

import (
	"net/http"

	mgo "gopkg.in/mgo.v2"

	"github.com/LorisTujiba/go-with-react/controllers"
	"github.com/julienschmidt/httprouter"
	"github.com/rs/cors"
)

func getSession() *mgo.Session {
	s, err := mgo.Dial("mongodb://localhost")
	if err != nil {
		panic(err)
	}
	return s
}

func main() {
	r := httprouter.New()
	uc := controllers.NewUserController(getSession())
	pc := controllers.NewPostController(getSession())
	r.GET("/users", uc.GetUsers)
	r.POST("/users", uc.CreateUser)
	r.GET("/posts", pc.GetPosts)
	r.GET("/posts/:offset", pc.GetPartialPost)
	handler := cors.Default().Handler(r)
	http.ListenAndServe(":8080", handler)
}
