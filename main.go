package main

import (
  "models"
  "encoding/json"
  "log"
  "net/http"
)

func index(w http.ResponseWriter, r *http.Request){

    payload := models.User{
      Name : "Loris",
      Age : 23,
    }

    err := json.NewEncoder(w).Encode(payload)
  	if err != nil {
  		log.Println(err)
  	}

    w.Header().Set("Content-Type","application/json")
    w.WriteHeader(http.StatusOK)

}

func main(){
  http.HandleFunc("/",index)
  http.ListenAndServe(":8080",nil)
}
