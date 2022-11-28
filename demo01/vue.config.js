module.exports = {
    devServer:{
         
        open:true,
        proxy: {
            '/api': {
              target: 'http://1.116.64.64:5004/api2/',// 后端接口
              changeOrigin: true, // 是否跨域
              pathRewrite: {
                '^/api': ''
              }
            }
          }
    },
    
}