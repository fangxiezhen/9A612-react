## 项目介绍

一个基于 TDesign 的 react 组件库，demo 版

### 站点

- 域名: https://fangxiezhen.github.io/9A612-react/#/9A612-react/
- 目前部署在 github 上

## 快速上手

### 框架介绍

基于 [dumi](https://d.umijs.org/zh-CN/guide) 简历站点的 react 组件库，内置导出 TDesign 组件库，在此基础上做了一些额外的组件以及原有组件的新增功能

### 安装依赖

```
npm i
```

### 本地开发

- 建议使用 vscode 插件

  - Code Spell Checker 检查英语单词拼写错误
  - CodeMetrics 检查圈复杂度
  - ESLint 最通用的代码格式化工具
  - GitLens 代码提交记录查看
  - Markdown Preview Enhanced MD 文件预览
  - Prettier 代码格式化工具
  - StyleLint 样式格式化工具
  - TS in Markdown MD 文件使用 ts

- 本地开发启动命令

```
npm run start
```

### 测试部署

1. master 提交自动部署

### 组件结构目录

```shell
├── src
│   ├── Button                                                  // 组件的名字，以大写开头
│   │   ├── index.ts                                            // 组件导出
│   │   ├── Button.tsx                                          // 组件的主要代码
│   │   ├── type.ts                                             // 组件的类型文件
│   │   ├── index.md                                            // 组件的文档
│   │   ├── style                                               // 组件的样式存放
│   │   │   ├── index.less                                      // 样式文件
│   │   ├── _example                                            // 组件的 demo
│   │   │   ├── demo.tsx                                        // 样式 demo 文件
```

## 常见问题

1. 我在开发组件时，应该如何将文档 props 写的更合适？ A：可以新建 api.tsx 文件，然后导出需要生成文档的类型（见 BaseEditTable 目录下 demo），在 MD 文件中使用 API 组件引用

## 行为准则

- 代码应由完全的 typescript 编写，不应出现大量模糊定义的变量
- 单个组件文件不应过于复杂，应进行合理的拆分规划
- 应按照代码规范（见 standard.md powered by tencent）编写代码
- 提交规范：

```
feat:新功能

fix:修复一个bug

docs:只改了文档

style:修改不涉及代码的主要逻辑(如格式化了代码)

refactor:改动了代码，既不是新功能也不是修复bug

perf:优化了代码，提升了性能

test:增加或修改了代码测试

build:更改了构建流程相关的配置文件和包(如glup, npm)

ci:更改了CI配置文件或脚本等(如Travis, Circle, BrowserStack, SauceLabs)

chore:其它不涉及源代码和测试代码的修改

revert: git revert一次提交
```

## 如何加入

如果您使用过程中发现 Bug，请通过 [issues](https://github.com/fangxiezhen/9A612-react/issues) 来提交并描述相关的问题。
