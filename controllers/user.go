package controllers

type UserController struct{}

func NewUserController() *UserController{
  return &UserController{};
}

func(uc UserController) getUsers(w http.ResponseWriter, r *http.Request){
    
}
