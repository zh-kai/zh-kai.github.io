# Ethereum

## Ethash 算法
1. 开始挖掘前，使用 `block headers` 创建 `seed`
2. 使用该 `seed` 创建 16M 伪随机 `cache`
3. 使用 `cache` 生成超过 4G 的数据集（`DAG`），数据集是半永久性的，每 3w 个块更新一次
4. 生成 `DAG` 后，开始挖掘，过程中从 `DAG` 获取随机数据，并结合网络中提供的数据 & 待验证的交易
5. 最后验证通过一个进程完成，跟进程使用 `cache` 重新生成部分 `DAG` 来加快验证

![ethash-dagger-hashimoto](/ethereum/ethash-dagger-hashimoto.jpeg)

## 单位
|        单位         |  wei值   |            Wei            |
| :-----------------: | :------: | :-----------------------: |
|         wei         |    1     |           1 wei           |
|   Kwei (babbage)    | 1e3 wei  |           1,000           |
|   Mwei (lovelace)   | 1e6 wei  |         1,000,000         |
|   Gwei (shannon)    | 1e9 wei  |       1,000,000,000       |
| microether (szabo)  | 1e12 wei |     1,000,000,000,000     |
| milliether (finney) | 1e15 wei |   1,000,000,000,000,000   |
|        ether        | 1e18 wei | 1,000,000,000,000,000,000 |

## 难度炸弹

### 相关更新
- 2017: Byzantium update 拜占庭更新
- 2019: Constantinople update 君士坦丁堡更新
- 2020: Muir Glacier update 缪尔冰川更新（仅难度炸弹）
- 2021: London update 伦敦更新
- 2021: Arrow Glacier update 箭冰河更新 （仅难度炸弹）