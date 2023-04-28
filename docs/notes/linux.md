## `df` 查看磁盘信息

```bash
# 用法
df [OPTION] [FILE]

# 显示磁盘空间使用情况
df
# 显示命令帮助
df --help
# 显示文件系统类型
df -T
# 在最后一行显示统计
df --total
# 显示 inode 信息
df -i
# 以人类可读方式显示磁盘使用情况
df -h
```

## `du` 测量文件 / 目录磁盘占用情况

```bash
# 语法
du [option] [file]

# 显示为人类可读
du -h
# 只打印 total size
du -s
# 自定义块大小
du -B [number]
```
