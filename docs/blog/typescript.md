# 编程与类型系统

## 类型简介

:::info 类型
类型是对数据做的一种分类，定义了能够对数据执行的操作、数据的意义，以及允许数据接受的值的集合。编译器和运行时会检查类型，以确保数据的完整性，实施访问限制，以及按照开发人员的意图来解释数据。
:::

:::info 类型系统
类型系统是一组规则，为编程语言的元素分配和实施类型。这些元素可以是变量、函数、其他高级结构。类型系统通过两种方式分配类型：程序员在代码中制定类型；类型系统根据上下文，隐式推断出某个元素的类型。类型系统允许在类型之间进行某些转换，而阻止其他类型的转换。
:::

:::info 类型检查
类型检查确保程序遵守类型系统的规则。编译器在转化代码时进行类型检查，而运行时在执行代码时进行类型检查。编译器中负责实施类型规则的组件叫类型检查器。
:::