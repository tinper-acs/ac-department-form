## app-component-templ

---

ac-tools init 时模版文件，用于react组件开发的模版

<b>开始之前确保安装了 ac-tools的全局包</b>

### 目录结构

```bash
.
├── config
│   ├── webpack.base.js
│   ├── webpack.config.dev.js       # 开发环境配置
│   ├── webpack.config.ghpages.js   # 打包放到github.io环境配置
│   ├── webpack.config.prod.js      # 发布组件环境配置
├── demo
│   ├── demolist
│   │   └── Demo1.js                # 实例1，调用src中的组件，进行展示
│   ├── demo.scss                   # demo中需要的基础样式
│   ├── index-demo-base.js          # demo模版文件
│   └── index.js                    # ac-tools sample生成的文件
├── package.json
├── docs
│   ├── demolist
│   │   └── Demo1.js                # 实例1，调用src中的组件，进行展示
│   ├── demo.scss                   # demo中需要的基础样式
│   ├── index-demo-base.js          # demo模版文件
│   └── index.js                    # ac-tools sample生成的文件
├── ghpages                         # 实例打包文件
├── mock                            # mock数据 
├── src
│   ├── assets                      # ac-tools md需要的静态文件
│   ├── temp                        
│   │   └── index.js                # 组件js逻辑 
│   │   └── style.scss  			   # 组件样式
│   └── index.js                    # 组件出口
├── static                          # 模版静态文件
├── .babelrc    
├── .editorconfig                   # 给编辑器的规范  
├── .eslitrc                        # 代码规范(采用airbnb规范，默认不打开的，在webpack.config.dev.js 中注释部分放开就启用)                      
├── .package.json                  
└── .postcss.config.js
```

##效果
 ![image](https://raw.githubusercontent.com/tinper-acs/ac-department-form/master/static/images/1.jpg)
 

## API

|参数|说明|类型|默认值|
|:--|:---:|:--:|---:|
|className|样式|string|default|
|changeTypeFun|变动类型 change回调函数|function|---:|
|changeReasonFun|变动原因 change回调函数|function|---:|


### 常用命令

将 demo合并到demolist的实例中

```
ac-tools sample 
```

启动开发环境

```
npm run dev
```

实例代码打包

```
npm run deploy
```

将markdown 文件转为静态文件，并上传github.io网站

```
ac-tools md
```

生成组件

```
npm run build
```

上传ynpm或者npm

```
ynpm publish      # npm publish
```

