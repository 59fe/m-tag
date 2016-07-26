# m-tag

---

进行标记和分类的小标签。

## 何时使用

- 用于标记事物的属性和维度。
- 进行分类。

## API
### Tag
| 参数           | 说明                           | 类型       |  可选值 | 默认值 |
|----------------|--------------------------------|------------|---------|--------|
| href           | 链接的地址，会传给 a 标签      | string     |         | false  |
| checkable       | 标签是否可以勾选              | boolean    |         | true  |
| closable       | 标签是否可以关闭               | boolean    |         | false  |
| defaultSelect       | 标签是否可以默认选中 （背景高亮）        | boolean    |         | false  |
| defaultChecked       | 标签是否可以默认勾选上         | boolean    |         | false  |
| readOnly      | 标签状态是否只读，即不可操作 | boolean | | false |
| onChange        | 标签选中状态改变的回调（仅当Tag不为closable时有效）      | function   |         | 无     |
| onClose        | 标签关闭时的回调（仅当Tag为closable时有效）      | function   |         | 无     |

### TagGroup
－TagGroup中的操作属性(selectable, checkable, closable)会让子Tag强继承，并且TagGroup优先级高于Tag,当TagGroup上有操作属性时，Tag上的操作属性全部失效。

| 参数           | 说明                           | 类型       |  可选值 | 默认值 |
|----------------|--------------------------------|------------|---------|--------|
| selectable           | 标签是否可以选择         | boolean     |         |  无 |
| checkable       | 标签是否可以勾选             | boolean    |         | 无  |
| radio           | 在标签组selectable的基础上，是否是单选模式  | boolean     |         |  无 |
| closable       | 标签是否可以关闭               | boolean    |         | 无  |
