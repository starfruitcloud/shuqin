package handler

import "github.com/gin-gonic/gin"

func HomePage(c *gin.Context) {
	// 渲染模板，传递数据
	c.HTML(200, "index.html", gin.H{
		"title": "首页",
	})
}
