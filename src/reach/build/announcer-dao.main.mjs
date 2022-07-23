// Automatically generated with Reach 0.1.11 (a9f7613d)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (a9f7613d)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Contract;
  return {
    DaoClosed: [ctc0],
    DaoCreated: [ctc0]
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  
  return {
    infos: {
      },
    views: {
      3: []
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Deployer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Deployer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Deployer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Contract;
  const ctc2 = stdlib.T_Tuple([ctc1]);
  const ctc3 = stdlib.T_Data({
    daoClosed0_36: ctc2,
    daoCreated0_36: ctc2
    });
  
  
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./contracts/announcer-dao.rsh:20:12:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./contracts/announcer-dao.rsh:20:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v159, time: v158, didSend: v22, from: v157 } = txn1;
      
      ;
      const v160 = await ctc.getContractInfo();
      
      const v162 = true;
      const v163 = v158;
      
      if (await (async () => {
        
        return v162;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v159, time: v158, didSend: v22, from: v157 } = txn1;
  ;
  const v160 = await ctc.getContractInfo();
  stdlib.protect(ctc0, await interact.done(v160), {
    at: './contracts/announcer-dao.rsh:21:25:application',
    fs: ['at ./contracts/announcer-dao.rsh:21:25:application call to [unknown function] (defined at: ./contracts/announcer-dao.rsh:21:25:function exp)', 'at ./contracts/announcer-dao.rsh:21:25:application call to "liftedInteract" (defined at: ./contracts/announcer-dao.rsh:21:25:application)'],
    msg: 'done',
    who: 'Deployer'
    });
  
  let v162 = true;
  let v163 = v158;
  
  while (await (async () => {
    
    return v162;})()) {
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc3],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v196], secs: v198, time: v197, didSend: v115, from: v195 } = txn2;
    switch (v196[0]) {
      case 'daoClosed0_36': {
        const v199 = v196[1];
        undefined /* setApiDetails */;
        ;
        const v206 = v199[stdlib.checkedBigNumberify('./contracts/announcer-dao.rsh:35:10:spread', stdlib.UInt_max, '0')];
        const v208 = null;
        await txn2.getOutput('daoClosed', 'v208', ctc0, v208);
        null;
        const cv162 = true;
        const cv163 = v197;
        
        v162 = cv162;
        v163 = cv163;
        
        continue;
        break;
        }
      case 'daoCreated0_36': {
        const v227 = v196[1];
        undefined /* setApiDetails */;
        ;
        const v245 = v227[stdlib.checkedBigNumberify('./contracts/announcer-dao.rsh:26:10:spread', stdlib.UInt_max, '0')];
        const v247 = null;
        await txn2.getOutput('daoCreated', 'v247', ctc0, v247);
        null;
        const cv162 = true;
        const cv163 = v197;
        
        v162 = cv162;
        v163 = cv163;
        
        continue;
        break;
        }
      }
    
    }
  return;
  
  
  };
export async function _daoClosed3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _daoClosed3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _daoClosed3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Contract;
  const ctc1 = stdlib.T_Tuple([ctc0]);
  const ctc2 = stdlib.T_Data({
    daoClosed0_36: ctc1,
    daoCreated0_36: ctc1
    });
  const ctc3 = stdlib.T_Null;
  
  
  const [] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), []);
  const v183 = stdlib.protect(ctc1, await interact.in(), {
    at: './contracts/announcer-dao.rsh:1:23:application',
    fs: ['at ./contracts/announcer-dao.rsh:35:41:application call to [unknown function] (defined at: ./contracts/announcer-dao.rsh:35:41:function exp)', 'at ./contracts/announcer-dao.rsh:23:33:application call to "rundaoClosed0_36" (defined at: ./contracts/announcer-dao.rsh:35:10:function exp)', 'at ./contracts/announcer-dao.rsh:23:33:application call to [unknown function] (defined at: ./contracts/announcer-dao.rsh:23:33:function exp)'],
    msg: 'in',
    who: 'daoClosed'
    });
  const v191 = ['daoClosed0_36', v183];
  
  const txn1 = await (ctc.sendrecv({
    args: [v191],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc2],
    pay: [stdlib.checkedBigNumberify('./contracts/announcer-dao.rsh:35:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v196], secs: v198, time: v197, didSend: v115, from: v195 } = txn1;
      
      switch (v196[0]) {
        case 'daoClosed0_36': {
          const v199 = v196[1];
          sim_r.txns.push({
            kind: 'api',
            who: "daoClosed"
            });
          ;
          const v206 = v199[stdlib.checkedBigNumberify('./contracts/announcer-dao.rsh:35:10:spread', stdlib.UInt_max, '0')];
          const v208 = null;
          const v209 = await txn1.getOutput('daoClosed', 'v208', ctc3, v208);
          
          null;
          sim_r.isHalt = false;
          
          break;
          }
        case 'daoCreated0_36': {
          const v227 = v196[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v196], secs: v198, time: v197, didSend: v115, from: v195 } = txn1;
  switch (v196[0]) {
    case 'daoClosed0_36': {
      const v199 = v196[1];
      undefined /* setApiDetails */;
      ;
      const v206 = v199[stdlib.checkedBigNumberify('./contracts/announcer-dao.rsh:35:10:spread', stdlib.UInt_max, '0')];
      const v208 = null;
      const v209 = await txn1.getOutput('daoClosed', 'v208', ctc3, v208);
      if (v115) {
        stdlib.protect(ctc3, await interact.out(v199, v209), {
          at: './contracts/announcer-dao.rsh:35:11:application',
          fs: ['at ./contracts/announcer-dao.rsh:35:11:application call to [unknown function] (defined at: ./contracts/announcer-dao.rsh:35:11:function exp)', 'at ./contracts/announcer-dao.rsh:38:12:application call to "k" (defined at: ./contracts/announcer-dao.rsh:37:13:function exp)', 'at ./contracts/announcer-dao.rsh:37:13:application call to [unknown function] (defined at: ./contracts/announcer-dao.rsh:37:13:function exp)'],
          msg: 'out',
          who: 'daoClosed'
          });
        }
      else {
        }
      
      null;
      return;
      
      break;
      }
    case 'daoCreated0_36': {
      const v227 = v196[1];
      return;
      break;
      }
    }
  
  
  };
export async function _daoCreated3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _daoCreated3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _daoCreated3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Contract;
  const ctc1 = stdlib.T_Tuple([ctc0]);
  const ctc2 = stdlib.T_Data({
    daoClosed0_36: ctc1,
    daoCreated0_36: ctc1
    });
  const ctc3 = stdlib.T_Null;
  
  
  const [] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), []);
  const v171 = stdlib.protect(ctc1, await interact.in(), {
    at: './contracts/announcer-dao.rsh:1:23:application',
    fs: ['at ./contracts/announcer-dao.rsh:26:42:application call to [unknown function] (defined at: ./contracts/announcer-dao.rsh:26:42:function exp)', 'at ./contracts/announcer-dao.rsh:23:33:application call to "rundaoCreated0_36" (defined at: ./contracts/announcer-dao.rsh:26:10:function exp)', 'at ./contracts/announcer-dao.rsh:23:33:application call to [unknown function] (defined at: ./contracts/announcer-dao.rsh:23:33:function exp)'],
    msg: 'in',
    who: 'daoCreated'
    });
  const v179 = ['daoCreated0_36', v171];
  
  const txn1 = await (ctc.sendrecv({
    args: [v179],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc2],
    pay: [stdlib.checkedBigNumberify('./contracts/announcer-dao.rsh:26:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v196], secs: v198, time: v197, didSend: v115, from: v195 } = txn1;
      
      switch (v196[0]) {
        case 'daoClosed0_36': {
          const v199 = v196[1];
          
          break;
          }
        case 'daoCreated0_36': {
          const v227 = v196[1];
          sim_r.txns.push({
            kind: 'api',
            who: "daoCreated"
            });
          ;
          const v245 = v227[stdlib.checkedBigNumberify('./contracts/announcer-dao.rsh:26:10:spread', stdlib.UInt_max, '0')];
          const v247 = null;
          const v248 = await txn1.getOutput('daoCreated', 'v247', ctc3, v247);
          
          null;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v196], secs: v198, time: v197, didSend: v115, from: v195 } = txn1;
  switch (v196[0]) {
    case 'daoClosed0_36': {
      const v199 = v196[1];
      return;
      break;
      }
    case 'daoCreated0_36': {
      const v227 = v196[1];
      undefined /* setApiDetails */;
      ;
      const v245 = v227[stdlib.checkedBigNumberify('./contracts/announcer-dao.rsh:26:10:spread', stdlib.UInt_max, '0')];
      const v247 = null;
      const v248 = await txn1.getOutput('daoCreated', 'v247', ctc3, v247);
      if (v115) {
        stdlib.protect(ctc3, await interact.out(v227, v248), {
          at: './contracts/announcer-dao.rsh:26:11:application',
          fs: ['at ./contracts/announcer-dao.rsh:26:11:application call to [unknown function] (defined at: ./contracts/announcer-dao.rsh:26:11:function exp)', 'at ./contracts/announcer-dao.rsh:29:12:application call to "k" (defined at: ./contracts/announcer-dao.rsh:28:13:function exp)', 'at ./contracts/announcer-dao.rsh:28:13:application call to [unknown function] (defined at: ./contracts/announcer-dao.rsh:28:13:function exp)'],
          msg: 'out',
          who: 'daoCreated'
          });
        }
      else {
        }
      
      null;
      return;
      
      break;
      }
    }
  
  
  };
export async function daoClosed(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for daoClosed expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for daoClosed expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _daoClosed3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function daoCreated(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for daoCreated expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for daoCreated expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _daoCreated3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`daoClosed(uint64)byte[0]`, `daoCreated(uint64)byte[0]`],
    pure: [],
    sigs: [`daoClosed(uint64)byte[0]`, `daoCreated(uint64)byte[0]`]
    },
  appApproval: `BiAFAAHZ9cznDgIDJgEAIjUAMRhBAVsoZEkiWzUBgQhbNQI2GgAXSUEAMyI1BCM1BkkkDEAAESQSRDYaATX/gAEANP9QQgAsgeXhq7MGEkQ2GgE1/4ABATT/UEIAFjYaAhc1BDYaAzYaARdJJQxAAHQlEkQhBDQBEkQ0BEkiEkw0AhIRREk1BTX/gAQeBuawNP9QsDT/IlVAACU0/1cBCDX+gAgAAAAAAAAA0LAoNQeABJAd/p80/lCwIzIGQgBMNP9XAQg1/oAIAAAAAAAAAPewKDUHgARBvOb2NP5QsCMyBkIAJyISRIGgjQaIAKAiNAESRDQESSISTDQCEhFEgARfDav6sCMyBkIAADX/STX+QQALIQQ1ATIGNQJCAB9CAAAxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQoNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEIzE1EkQiMTYSRCIxNxJEIjUBIjUCQv+vNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 0,
  stateSize: 0,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v0",
        "type": "address"
      }
    ],
    "name": "DaoClosed",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v0",
        "type": "address"
      }
    ],
    "name": "DaoCreated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T5",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T4",
                    "name": "_daoClosed0_36",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T4",
                    "name": "_daoCreated0_36",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T5",
                "name": "v196",
                "type": "tuple"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v208",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v247",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T5",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T4",
                    "name": "_daoClosed0_36",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T4",
                    "name": "_daoCreated0_36",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T5",
                "name": "v196",
                "type": "tuple"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "_a0",
        "type": "address"
      }
    ],
    "name": "daoClosed",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "_a0",
        "type": "address"
      }
    ],
    "name": "daoCreated",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162000d7438038062000d74833981016040819052620000269162000257565b600080554360035560408051338152825160208083019190915283015115158183015290517faf3102e4a96b239a2811210526ca19adcde1af3e2876a2c9a5886a5a887a2dcb9181900360600190a16200008334156007620000b0565b6200008d6200013e565b60208082018051600190525143910152620000a881620000da565b5050620002ff565b81620000d65760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b602081015151156200012357600360009081554360015560408051602080820184905282518083038201815291830190925280516200011e92600292019062000177565b505050565b600080805560018190556200013b9060029062000206565b50565b6040518060400160405280600015158152602001620001726040518060400160405280600015158152602001600081525090565b905290565b8280546200018590620002c2565b90600052602060002090601f016020900481019282620001a95760008555620001f4565b82601f10620001c457805160ff1916838001178555620001f4565b82800160010185558215620001f4579182015b82811115620001f4578251825591602001919060010190620001d7565b506200020292915062000240565b5090565b5080546200021490620002c2565b6000825580601f1062000225575050565b601f0160209004906000526020600020908101906200013b91905b5b8082111562000202576000815560010162000241565b6000604082840312156200026a57600080fd5b604080519081016001600160401b03811182821017156200029b57634e487b7160e01b600052604160045260246000fd5b6040528251815260208301518015158114620002b657600080fd5b60208201529392505050565b600181811c90821680620002d757607f821691505b60208210811415620002f957634e487b7160e01b600052602260045260246000fd5b50919050565b610a65806200030f6000396000f3fe6080604052600436106100565760003560e01c80631e93b0f11461005f5780635888a862146100835780636b3894c5146100a657806383230757146100b95780638db976cb146100ce578063ab53f2c6146100e157005b3661005d57005b005b34801561006b57600080fd5b506003545b6040519081526020015b60405180910390f35b610096610091366004610744565b610104565b604051901515815260200161007a565b6100966100b4366004610744565b610157565b3480156100c557600080fd5b50600154610070565b61005d6100dc366004610766565b6101a4565b3480156100ed57600080fd5b506100f66101d4565b60405161007a92919061077e565b600061010e61059a565b60208181018051516001905251516040908101516001600160a01b0386169052805180820190915260008082529181019190915261014c8282610271565b602001519392505050565b600061016161059a565b60208181018051516000908190529051518201516001600160a01b0386169052604080518082019091528181529182015261019c8282610271565b519392505050565b60408051808201909152600080825260208201526101d06101ca368490038401846108b3565b82610271565b5050565b6000606060005460028080546101e99061096b565b80601f01602080910402602001604051908101604052809291908181526020018280546102159061096b565b80156102625780601f1061023757610100808354040283529160200191610262565b820191906000526020600020905b81548152906001019060200180831161024557829003601f168201915b50505050509050915091509091565b610281600360005414600a610516565b815161029c90158061029557508251600154145b600b610516565b6000808055600280546102ae9061096b565b80601f01602080910402602001604051908101604052809291908181526020018280546102da9061096b565b80156103275780601f106102fc57610100808354040283529160200191610327565b820191906000526020600020905b81548152906001019060200180831161030a57829003601f168201915b505050505080602001905181019061033f91906109a0565b90506103496105b9565b7f38f80604f98596d0f9a64be857c0268158881eeb9115ae21b6702dab30d9825f338560405161037a9291906109c2565b60405180910390a1600060208501515151600181111561039c5761039c6107db565b14156104595760208085015151015181526103b934156008610516565b604051600081527f20ee102e5e8954037239e5346d6d6ce853bbeb51e139e80167b39b0d2d561de69060200160405180910390a1600083528051516040516001600160a01b0390911681527fe678738fe843d92a7249779a6d64856b441ff65c36d79e810d78d9bb72230817906020015b60405180910390a161043a6105e7565b602080820180516001905251439101526104538161053b565b50610510565b6001602085015151516001811115610473576104736107db565b14156105105760208085015151604001519082015261049434156009610516565b604051600081527fcac56ed9e019324e3f7172aa5c91dba6da5256eac823493a656da2c2b85b9fc19060200160405180910390a1600060208481019190915281810151516040516001600160a01b0390911681527f87fc1796dbc913ab997ce574688bcad88f5eb317373be9ec71de2bde33e5c830910161042a565b50505050565b816101d05760405163100960cb60e01b81526004810182905260240160405180910390fd5b60208101515115610581576003600090815543600155604080516020808201849052825180830382018152918301909252805161057c92600292019061061a565b505050565b600080805560018190556105979060029061069e565b50565b6040518060400160405280600081526020016105b46106d8565b905290565b6040805160608101825260009181019182529081905b81526040805160208181019092526000815291015290565b60405180604001604052806000151581526020016105b46040518060400160405280600015158152602001600081525090565b8280546106269061096b565b90600052602060002090601f016020900481019282610648576000855561068e565b82601f1061066157805160ff191683800117855561068e565b8280016001018555821561068e579182015b8281111561068e578251825591602001919060010190610673565b5061069a9291506106eb565b5090565b5080546106aa9061096b565b6000825580601f106106ba575050565b601f01602090049060005260206000209081019061059791906106eb565b60405180602001604052806105b4610700565b5b8082111561069a57600081556001016106ec565b60408051606081019091528060008152604080516020818101909252600081529101906105cf565b80356001600160a01b038116811461073f57600080fd5b919050565b60006020828403121561075657600080fd5b61075f82610728565b9392505050565b60006080828403121561077857600080fd5b50919050565b82815260006020604081840152835180604085015260005b818110156107b257858101830151858201606001528201610796565b818111156107c4576000606083870101525b50601f01601f191692909201606001949350505050565b634e487b7160e01b600052602160045260246000fd5b6040516020810167ffffffffffffffff8111828210171561082257634e487b7160e01b600052604160045260246000fd5b60405290565b6040516060810167ffffffffffffffff8111828210171561082257634e487b7160e01b600052604160045260246000fd5b60006020828403121561086b57600080fd5b6040516020810181811067ffffffffffffffff8211171561089c57634e487b7160e01b600052604160045260246000fd5b6040529050806108ab83610728565b905292915050565b600081830360808112156108c657600080fd5b6040516040810181811067ffffffffffffffff821117156108f757634e487b7160e01b600052604160045260246000fd5b604052833581526060601f198301121561091057600080fd5b6109186107f1565b9150610922610828565b60208501356002811061093457600080fd5b81526109438660408701610859565b60208201526109558660608701610859565b6040820152825260208101919091529392505050565b600181811c9082168061097f57607f821691505b6020821081141561077857634e487b7160e01b600052602260045260246000fd5b6000602082840312156109b257600080fd5b8151801515811461075f57600080fd5b6001600160a01b038381168252825160208084019190915283015151805160a0840192919060028110610a0557634e487b7160e01b600052602160045260246000fd5b8060408601525081602082015151166060850152816040820151511660808501525050939250505056fea26469706673582212204adc45fb7a20c97e32e301cbed4f0c818b959d4fe6a37a39d7614ddf19b662e164736f6c634300080c0033`,
  BytecodeLen: 3444,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  2: {
    at: './contracts/announcer-dao.rsh:46:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './contracts/announcer-dao.rsh:23:33:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Deployer": Deployer,
  "daoClosed": daoClosed,
  "daoCreated": daoCreated
  };
export const _APIs = {
  daoClosed: daoClosed,
  daoCreated: daoCreated
  };
