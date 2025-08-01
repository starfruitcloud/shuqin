package handler

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

// Home
// 首页
//
//	@Description:
//	@param c
func Home(c *gin.Context) {
	// 渲染模板，传递数据
	c.HTML(200, "index.html", gin.H{
		"title": "首页",
	})
}

// About
// 关于我们
//
//	@Description:
//	@param c
func About(c *gin.Context) {
	c.HTML(http.StatusOK, "about.html", nil)
}

// Contact
// 联系我们
//
//	@Description:
//	@param c
func Contact(c *gin.Context) {
	c.HTML(http.StatusOK, "contact.html", nil)
}

// Product
// 产品中心
//
//	@Description:
//	@param c
func Product(c *gin.Context) {
	c.HTML(http.StatusOK, "product.html", nil)
}

// Solutions
// 解决方案
//
//	@Description:
//	@param c
func Solutions(c *gin.Context) {
	c.HTML(http.StatusOK, "solutions.html", nil)
}

// Customer
// 客户案例
//
//	@Description:
//	@param c
func Customer(c *gin.Context) {
	c.HTML(http.StatusOK, "customer.html", nil)
}
