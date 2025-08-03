# 第一阶段：构建阶段（多阶段构建）
FROM golang:1.22-alpine AS builder

# 设置工作目录
WORKDIR /app

# 拷贝 go.mod 和 go.sum（提高缓存效率）
COPY go.mod go.sum ./
RUN go mod download

# 拷贝全部源代码
COPY . .

# 编译 Go 项目
RUN CGO_ENABLED=0 GOOS=linux go build -o app .

# 第二阶段：运行阶段（小镜像）
FROM alpine:latest

WORKDIR /root/

# 复制构建好的二进制文件和其他资源
COPY --from=builder /app/app .
COPY --from=builder /app/templates ./templates

# 暴露端口
EXPOSE 8082

# 启动应用
CMD ["./app"]
