# module

module 是 angular 的一种模块化的组件.  
用来把一个大的网站区分为不同的部分, 通过 routing 进行组合和连接.  

在 root 也就是 app.module 中进行组合. 
表现在网页上就是 app.component.html 中加入 `<router-outlet></router-outlet>` 
这样在载入不同的 module 的时候就会在这个 tag 的部分显示载入的 module 的网页了. 
同时一些基础的模块也会在 app.module中进行载入. 

- 用法是在 terminal 中, 在项目的根目录中执行
```
$ n g m <模块名> --routing
```

- 在 app-routing.module 中 通过添加路径来指向 module
- 通过使用 `loadChildren` 来进行 lazy loding 

```
const routes: Routes = [
  {
    path: 'products',
    loadChildren: () => import('../app/products/products.module').then(f => f.ProductsModule)
  }
];
```
