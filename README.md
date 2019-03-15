# reducer-in-action-todos-demo

## reducer-in-action:

   抛开对于写原生redux相对比其他封装的redux库的复杂程度的这个梗, 对原生redux的书写, 如何简化写法成为一个思考, 而`reducer-in-action`的这种写法改善或改进了redux的写法,其核心代码为reduce的书写:

```
todoStates =  (state = initialState, action) => {
  if(typeof action.reducer === 'function') {
    return action.reducer(state,action)
  }
  return state;
}
```

- 其思想在于将复杂的数据处理函数提到`actions`中, 且不用关心各种的`type`是什么, 也就不用写冗余的`switch`;
- `reducer`中只需要关心`state`的合理数据结构, 其中数据结构层级为: **Root--page--card--element**, 合理规划好`card`层数据无疑是写好一个`reducer`的重要前提;
- 定义不同初始化数据结构, 以`card`为颗粒度切断`reducers`;
- 数据处理, 无非为**CRUD**,
