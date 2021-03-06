const Mock = require('mockjs')

const Random = Mock.Random

const loginData = {
  status: true,
  data: {
    reqKey: Random.guid()
  },
  errmsg: Random.string()
}

const pwdcData = {
  status: true,
  errmsg: Random.string()
}

const myInfoData = {
  status: true,
  data: {
    balance: Random.integer(10, 1000),
    miningAward: Random.integer(1, 100)
  },
  errmsg: Random.string()
}

const globalData = {
  status: true,
  data: {
    height: Random.integer(30000, 60000),
    transection: Random.integer(10, 50),
    averageBlockTime: Random.integer(1000, 20000),
    nodeCount: Random.integer(3000, 5000),
    version: Random.float(0, 0.01, 0, 2),
    relayedTransactions: Random.integer(100, 500),
    connectedClient: Random.integer(10, 50),
    NKNprice: Random.float(0.01, 1, 0, 6),
    priceToUSTD: Random.float(0.01, 0.1, 0, 6),
    priceToETH: Random.float(0.01, 0.1, 0, 6)
  },
  errmsg: Random.string()
}

const myNodeData = {
  status: true,
  data: {
    myNodeCount: Random.integer(1, 10),
    SyncStarted: Random.integer(1, 10),
    SyncFinished: Random.integer(1, 10),
    PersistFinished: Random.integer(1, 10),
    Stopped: Random.integer(1, 10)
  },
  errmsg: Random.string()
}

const nodeTypeStatus = function (idx) {
  let types = ['SyncStarted', 'SyncFinished', 'PersistFinished', 'Stopped']
  return types[idx]
}

const nodeList = function () {
  let array = []
  for (let i = 0; i < 5; i++) {
    let node = {
      name: 'Node#' + Random.integer(1, 10),
      id: Random.guid(),
      status: nodeTypeStatus(Random.integer(0, 3))
    }
    array.push(node)
  }
  return array
}

const myNodeList = {
  status: true,
  data: nodeList(),
  errmsg: Random.string()
}

const transactionList = function () {
  let array = []
  for (let i = 0; i < 8; i++) {
    let node = {
      from: Random.guid(),
      to: Random.guid(),
      count: Random.integer(10, 1000),
      time: Random.date('yyyy/MM/dd')
    }
    array.push(node)
  }
  return array
}

const miningList = function () {
  let array = []
  for (let i = 0; i < 8; i++) {
    let node = {
      height: Random.integer(20000, 60000),
      hash: Random.guid(),
      count: Random.integer(10, 1000),
      time: Random.date('yyyy/MM/dd')
    }
    array.push(node)
  }
  return array
}

const nodeWalletInfo = {
  status: true,
  data: {
    balance: Random.integer(10, 1000),
    miningAward: Random.integer(10, 1000),
    walletAddr: Random.guid()
  },
  errmsg: Random.string()
}

const nodeWalletTransaction = {
  status: true,
  data: {
    sum: 8,
    transactionList: transactionList()
  },
  errmsg: Random.string()
}

const nodeWalletMining = {
  status: true,
  data: {
    sum: 8,
    miningList: miningList()
  },
  errmsg: Random.string()
}

const walletTransfer = {
  status: true,
  data: '转账成功',
  errmsg: Random.string()
}

const neighborNodeData = function () {
  let array = []
  for (let i = 0; i < 20; i++) {
    let node = {
      id: Random.guid(),
      ip: Random.ip(),
      port: Random.ip()
    }
    array.push(node)
  }
  return array
}

const nodeDetail = {
  status: true,
  data: {
    nodeIP: Random.ip(),
    chordIP: Random.ip(),
    chordID: Random.guid(),
    webSocket: Random.integer(100, 150),
    jsonrpc: Random.integer(1, 10),
    neighborNode: neighborNodeData(),
    neighborChrod: neighborNodeData()
  },
  errmsg: Random.string()
}

const caculator = {
  status: true,
  data: {
    dailyToken: Random.integer(1, 100),
    monthToken: Random.integer(1, 100),
    NKNToken: Random.integer(10000, 60000),
    dailyProfit: Random.float(1, 2, 3),
    monthProfit: Random.float(2, 5, 3)
  },
  errmsg: Random.string()
}

const logDataList = function () {
  let array = []
  for (let i = 0; i < 20; i++) {
    let node = Random.guid() + Random.guid() + Random.guid()
    array.push(node)
  }
  return array
}

const logData = {
  status: true,
  data: logDataList(),
  errmsg: Random.string()
}

const addNode = {
  status: true,
  data: {
    node: {
      id: Random.guid(),
      name: 'Node#' + Random.integer(0, 10),
      status: 'Stopped'
    }
  },
  errmsg: Random.string()
}

const delNode = {
  status: true,
  errmsg: Random.string()
}

Mock.mock('/login', 'post', loginData)
Mock.mock('/pwdc', 'post', pwdcData)
Mock.mock('/myInfo', 'post', myInfoData)
Mock.mock('/globalInfo', 'post', globalData)
Mock.mock('/nodeInfo', 'post', myNodeData)
Mock.mock('/myNodeList', 'post', myNodeList)
Mock.mock('/nodeWallet', 'post', nodeWalletInfo)
Mock.mock('/nodeWalletTransaction', 'post', nodeWalletTransaction)
Mock.mock('/nodeWalletMining', 'post', nodeWalletMining)
Mock.mock('/walletTransfer', 'post', walletTransfer)
Mock.mock('/nodeDetail', 'post', nodeDetail)
Mock.mock('/dataCompute', 'post', caculator)
Mock.mock('/log', 'post', logData)
Mock.mock('/addNode', 'post', addNode)
Mock.mock('/delNode', 'post', delNode)
