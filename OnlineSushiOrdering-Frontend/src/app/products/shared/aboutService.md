# Service

用来对数据进行一些操作. 不涉及到网页的显示, 而是与后端的通信. 

### 创建

```Bash
$ ng g s products/shared/products 
```
 
### 标识

这个表示可以 进行 dependency injection 在 root 之内的任何地方. 

```ts
@Injectable({
  providedIn: 'root'
})
```

### 用法

在 products.module 中添加 `HttpClientModule`
这样才可以使用 `Http` 通信. 

```ts
@NgModule({
  declarations: [
    ProductsListComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule
  ]
})
```

在 productsService 类中创建构造器, 使用 private 关键字来知名只能在 Service 中使用这个构造器. 
HttpClient module 提供了所有的 get, put, post 等方法. 


```ts
export class ProductsService {

  constructor(private _http: HttpClient) {
    _http.get();
  }
}

```

在 products-list.component 类中添加构造起并且插入 productservice 作为参数.

```ts
export class ProductsListComponent {

  constructor(private _productsService:ProductsService) {}
  ngOnInit():void {}
}
```
