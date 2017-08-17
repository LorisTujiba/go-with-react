package controllers

import (
	"encoding/json"
	"net/http"

	"github.com/LorisTujiba/go-with-react/models"
	"github.com/julienschmidt/httprouter"

	"gopkg.in/mgo.v2"
	"gopkg.in/mgo.v2/bson"
)

type UserController struct {
	session *mgo.Session
}

func NewUserController(s *mgo.Session) *UserController {
	return &UserController{s}
}

func (uc UserController) CreateUser(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {
	newUser := models.User{}
	json.NewDecoder(r.Body).Decode(&newUser)
	newUser.ID = bson.NewObjectId()
}

func (uc UserController) GetUsers(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {

	users, err := models.AllUsers()
	if err != nil {
		http.Error(w, http.StatusText(500)+err.Error(), http.StatusInternalServerError)
		return
	}

	json.NewEncoder(w).Encode(users)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
}
