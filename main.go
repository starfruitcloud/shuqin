package main

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"html/template"
	"shuqin.cc/handler"
)

func staticFuncGenerator(base string) func(string) string {
	return func(path string) string {
		fmt.Println(path)
		return base + path
	}
}

func main() {
	var err error
	r := gin.Default()

	const staticBase = "https://cdn.shuqin.cc/shuqin/static"
	// 加载templates目录下所有html文件
	tmpl := template.Must(template.New("").Funcs(template.FuncMap{
		"static": staticFuncGenerator(staticBase),
	}).ParseGlob("templates/*.html"))

	r.SetHTMLTemplate(tmpl)

	r.GET("/", handler.Home)
	r.GET("/about", handler.About)
	r.GET("/contact", handler.Contact)
	r.GET("/product", handler.Product)
	r.GET("customer", handler.Customer)
	r.GET("/solutions", handler.Solutions)

	// 监听并在 0.0.0.0:8080 上启动服务
	err = r.Run(":8002")
	if err != nil {
		panic(err)
	}
}
