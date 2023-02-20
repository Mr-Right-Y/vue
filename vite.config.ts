import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { resolve } from 'path'  //引用解决别名

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
    //下面解决暴露本地地址和端口：Network: use `--host` to expose
    server: {
      host: '0.0.0.0',
      port: 8079,   //可以指定新的端口访问
      open: true
    },
    //解决暴露地址
    //下面别名,可以使用‘@’来代替src目录了
    resolve:{
      alias:[
        {
          find:'@',
          replacement:resolve(__dirname,'src')
        }
      ]
    }

})