package main

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"html/template"
	"path/filepath"
	"shuqin.cc/handler"
)

func staticFuncGenerator(base string) func(string) string {
	return func(path string) string {
		fmt.Println(path)
		return base + path
	}
}

// 可抽出为配置项或环境变量
const staticBase = "https://cdn.shuqin.cc/shuqin/static"

// 返回一个 *template.Template，或在 main 中使用 template.Must 包装
// LoadTemplates
// 加载静态模板

func LoadTemplates() (*template.Template, error) {
	funcMap := template.FuncMap{
		"static": staticFuncGenerator(staticBase),
	}

	// 匹配所有模板文件
	pattern := filepath.Join("templates", "*.html")

	// 返回模板和错误
	return template.New("").Funcs(funcMap).ParseGlob(pattern)
}

func main() {
	var err error
	r := gin.Default()

	tmpl := template.Must(LoadTemplates())

	r.SetHTMLTemplate(tmpl)

	r.GET("/", handler.Home)
	r.GET("/about", handler.About)
	r.GET("/contact", handler.Contact)
	r.GET("/product", handler.Product)
	r.GET("/customer", handler.Customer)
	r.GET("/solutions", handler.Solutions)

	// 监听并在 0.0.0.0:8080 上启动服务
	err = r.Run(":8082")
	if err != nil {
		panic(err)
	}
}
