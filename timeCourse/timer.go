package main

import (
	"fmt"
	"net/http"
	"time"
)

func main() {
	http.HandleFunc("/time", func(w http.ResponseWriter, r *http.Request) {
		currentHour := time.Now().Hour()
		quote := fmt.Sprintf("Current Hour: %d", currentHour)
		w.Write([]byte(quote))
	})
	http.ListenAndServe(":8080", nil)
}
