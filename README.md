# 个人主页

一个使用 React 构建的现代化个人主页，展示个人信息、学历背景、工作经历等。

## 功能特性

- 🎨 现代化的 UI 设计
- 📱 响应式布局，支持移动端
- 🎯 清晰的个人信息展示
- 📚 学历背景时间线
- 💼 工作经历时间线
- 🔗 Banner 导航链接（Publications、Blog、GitHub）

## 安装和运行

### 前置要求

- Node.js (版本 14 或更高)
- npm 或 yarn

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

应用将在 [http://localhost:5173](http://localhost:5173) 打开（Vite 默认端口）

### 构建生产版本

```bash
npm run build
```

### 预览生产构建

```bash
npm run preview
```

## 自定义内容

编辑 `src/components/Profile.js` 文件中的 `profileData` 对象来自定义您的个人信息：

- 个人照片 URL
- 姓名和职位
- 个人简介
- 学历背景
- 工作经历

编辑 `src/components/Banner.js` 文件中的 `links` 数组来自定义 Banner 上的链接。

## 技术栈

- React 18
- Vite 5
- CSS3

## 许可证

MIT

