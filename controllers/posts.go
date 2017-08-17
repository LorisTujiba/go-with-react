package controllers

import (
	"encoding/json"
	"net/http"

	"github.com/LorisTujiba/go-with-react/models"
	"github.com/julienschmidt/httprouter"

	"gopkg.in/mgo.v2"
)

type PostController struct {
	session *mgo.Session
}

func NewPostController(s *mgo.Session) *PostController {
	return &PostController{s}
}

func (pc PostController) GetPosts(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {

	posts, err := models.AllPosts()
	if err != nil {
		http.Error(w, http.StatusText(500)+err.Error(), http.StatusInternalServerError)
		return
	}

	json.NewEncoder(w).Encode(posts)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
}
