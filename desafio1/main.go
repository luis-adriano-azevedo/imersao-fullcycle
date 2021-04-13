package main

import (
	"fmt"
	"html/template"
	"log"
	"net/http"
)

func index(w http.ResponseWriter, r *http.Request) {
	t, _ := template.ParseFiles("index.html")
	dados := map[string]string{
		"Titulo":   "Imersão Full Cycle - Desafio 1",
		"Tituloh1": "Imersão Full Cycle",
	}
	w.WriteHeader(http.StatusOK)
	t.Execute(w, dados)
}

func main() {
	http.HandleFunc("/", index)
	fmt.Println("Servidor rodando http://localhost:8000")
	log.Fatal(http.ListenAndServe(":8000", nil))
}
