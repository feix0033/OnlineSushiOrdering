# Component

是在 module 下创建的组件, 包含基本 MVC 结构.
也就是 
- Model --> html
- View --> css
- Control --> typeScript

### 创建

```
$ n g c products/products-list
```

### Routing

通过在 `products-routing.module` 中添加路径,
这里因为是 product module 的 component, 所以并不用添加具体地址.
但是路径必须要有, 才能载入网页. 

```
const routes: Routes = [
  {path: '',
  component: ProductsListComponent}
];
```
