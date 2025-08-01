package handler

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func Home(c *gin.Context) {
	// 渲染模板，传递数据
	c.HTML(200, "index.html", gin.H{
		"title": "首页",
	})
}

func About(c *gin.Context) {
	c.HTML(http.StatusOK, "about.html", nil)
}
