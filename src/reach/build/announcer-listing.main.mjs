// Automatically generated with Reach 0.1.11 (578589af)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (578589af)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Contract;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  return {
    announce: [ctc0, ctc1, ctc2, ctc3]
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
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc1, ctc2, ctc3, ctc4]);
  
  
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./contracts/announcer-listing.rsh:22:12:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./contracts/announcer-listing.rsh:22:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v76, time: v75, didSend: v22, from: v74 } = txn1;
      
      ;
      
      const v78 = v75;
      
      if (await (async () => {
        
        return true;})()) {
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
  const {data: [], secs: v76, time: v75, didSend: v22, from: v74 } = txn1;
  ;
  stdlib.protect(ctc0, await interact.done(), {
    at: './contracts/announcer-listing.rsh:23:25:application',
    fs: ['at ./contracts/announcer-listing.rsh:23:25:application call to [unknown function] (defined at: ./contracts/announcer-listing.rsh:23:25:function exp)', 'at ./contracts/announcer-listing.rsh:23:25:application call to "liftedInteract" (defined at: ./contracts/announcer-listing.rsh:23:25:application)'],
    msg: 'done',
    who: 'Deployer'
    });
  
  let v78 = v75;
  
  while (await (async () => {
    
    return true;})()) {
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc5],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v92], secs: v94, time: v93, didSend: v44, from: v91 } = txn2;
    undefined /* setApiDetails */;
    ;
    const v95 = v92[stdlib.checkedBigNumberify('./contracts/announcer-listing.rsh:30:12:array', stdlib.UInt_max, '0')];
    const v96 = v92[stdlib.checkedBigNumberify('./contracts/announcer-listing.rsh:30:12:array', stdlib.UInt_max, '1')];
    const v97 = v92[stdlib.checkedBigNumberify('./contracts/announcer-listing.rsh:30:12:array', stdlib.UInt_max, '2')];
    const v98 = v92[stdlib.checkedBigNumberify('./contracts/announcer-listing.rsh:30:12:array', stdlib.UInt_max, '3')];
    const v99 = null;
    await txn2.getOutput('publishValues', 'v99', ctc0, v99);
    null;
    const cv78 = v93;
    
    v78 = cv78;
    
    continue;
    
    }
  return;
  
  
  };
export async function _publishValues3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _publishValues3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _publishValues3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Contract;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc0, ctc1, ctc2, ctc3]);
  const ctc5 = stdlib.T_Null;
  
  
  const [] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), []);
  const v86 = stdlib.protect(ctc4, await interact.in(), {
    at: './contracts/announcer-listing.rsh:30:5:application',
    fs: ['at ./contracts/announcer-listing.rsh:30:5:application call to [unknown function] (defined at: ./contracts/announcer-listing.rsh:30:5:function exp)'],
    msg: 'in',
    who: 'publishValues'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v86],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4],
    pay: [stdlib.checkedBigNumberify('./contracts/announcer-listing.rsh:30:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v92], secs: v94, time: v93, didSend: v44, from: v91 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "publishValues"
        });
      ;
      const v95 = v92[stdlib.checkedBigNumberify('./contracts/announcer-listing.rsh:30:12:array', stdlib.UInt_max, '0')];
      const v96 = v92[stdlib.checkedBigNumberify('./contracts/announcer-listing.rsh:30:12:array', stdlib.UInt_max, '1')];
      const v97 = v92[stdlib.checkedBigNumberify('./contracts/announcer-listing.rsh:30:12:array', stdlib.UInt_max, '2')];
      const v98 = v92[stdlib.checkedBigNumberify('./contracts/announcer-listing.rsh:30:12:array', stdlib.UInt_max, '3')];
      const v99 = null;
      const v100 = await txn1.getOutput('publishValues', 'v99', ctc5, v99);
      
      null;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v92], secs: v94, time: v93, didSend: v44, from: v91 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v95 = v92[stdlib.checkedBigNumberify('./contracts/announcer-listing.rsh:30:12:array', stdlib.UInt_max, '0')];
  const v96 = v92[stdlib.checkedBigNumberify('./contracts/announcer-listing.rsh:30:12:array', stdlib.UInt_max, '1')];
  const v97 = v92[stdlib.checkedBigNumberify('./contracts/announcer-listing.rsh:30:12:array', stdlib.UInt_max, '2')];
  const v98 = v92[stdlib.checkedBigNumberify('./contracts/announcer-listing.rsh:30:12:array', stdlib.UInt_max, '3')];
  const v99 = null;
  const v100 = await txn1.getOutput('publishValues', 'v99', ctc5, v99);
  stdlib.protect(ctc5, await interact.out(v92, v100), {
    at: './contracts/announcer-listing.rsh:30:5:application',
    fs: ['at ./contracts/announcer-listing.rsh:30:5:application call to [unknown function] (defined at: ./contracts/announcer-listing.rsh:30:5:function exp)', 'at ./contracts/announcer-listing.rsh:33:13:application call to "complete" (defined at: ./contracts/announcer-listing.rsh:30:5:function exp)'],
    msg: 'out',
    who: 'publishValues'
    });
  
  null;
  return;
  
  
  
  };
export async function publishValues(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for publishValues expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for publishValues expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _publishValues3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`publishValues(uint64,uint64,uint64,byte)byte[0]`],
    pure: [],
    sigs: [`publishValues(uint64,uint64,uint64,byte)byte[0]`]
    },
  appApproval: `BiAEAAECAyYBACI1ADEYQQEdKGRJIls1AYEIWzUCNhoAF0lBACAiNQQjNQaB1PrG3gQSRDYaATYaAlA2GgNQNhoEUEIAFjYaAhc1BDYaAzYaARdJJAxAAFQkEkQlNAESRDQESSISTDQCEhFESTUFNf+ABBrEiJw0/1CwgAgAAAAAAAAAY7AoNQeABL5mrlA0/1cACFA0/1cICFA0/1cQCFA0/1cYAVCwMgZCACYiEkSBoI0GiACVIjQBEkQ0BEkiEkw0AhIRRIAEXw2r+rAyBkIAADX/JTUBMgY1AkIAHDEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCg0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQjMTUSRCIxNhJEIjE3EkQiNQEiNQJC/680AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
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
                    "internalType": "address payable",
                    "name": "elem0",
                    "type": "address"
                  },
                  {
                    "internalType": "address payable",
                    "name": "elem1",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "elem2",
                    "type": "uint256"
                  },
                  {
                    "internalType": "bool",
                    "name": "elem3",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T4",
                "name": "v92",
                "type": "tuple"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T6",
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
    "name": "_reach_oe_v99",
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
      },
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v1",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v2",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v3",
        "type": "bool"
      }
    ],
    "name": "announce",
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
                    "internalType": "address payable",
                    "name": "elem0",
                    "type": "address"
                  },
                  {
                    "internalType": "address payable",
                    "name": "elem1",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "elem2",
                    "type": "uint256"
                  },
                  {
                    "internalType": "bool",
                    "name": "elem3",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T4",
                "name": "v92",
                "type": "tuple"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T6",
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
      },
      {
        "internalType": "address payable",
        "name": "_a1",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_a2",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "_a3",
        "type": "bool"
      }
    ],
    "name": "publishValues",
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
  Bytecode: `0x608060405260405162000ad038038062000ad08339810160408190526200002691620001e5565b600080554360035560408051338152825160208083019190915283015115158183015290517faf3102e4a96b239a2811210526ca19adcde1af3e2876a2c9a5886a5a887a2dcb9181900360600190a16200008334156007620000a8565b6200008d6200010f565b6020810151439052620000a081620000d2565b50506200028d565b81620000ce5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b600360009081554360015560408051602080820184905282518083038201815291830190925280516200010a9260029201906200013f565b505050565b60405180604001604052806000151581526020016200013a6040518060200160405280600081525090565b905290565b8280546200014d9062000250565b90600052602060002090601f016020900481019282620001715760008555620001bc565b82601f106200018c57805160ff1916838001178555620001bc565b82800160010185558215620001bc579182015b82811115620001bc5782518255916020019190600101906200019f565b50620001ca929150620001ce565b5090565b5b80821115620001ca5760008155600101620001cf565b600060408284031215620001f857600080fd5b604080519081016001600160401b03811182821017156200022957634e487b7160e01b600052604160045260246000fd5b60405282518152602083015180151581146200024457600080fd5b60208201529392505050565b600181811c908216806200026557607f821691505b602082108114156200028757634e487b7160e01b600052602260045260246000fd5b50919050565b610833806200029d6000396000f3fe60806040526004361061004b5760003560e01c80631e93b0f11461005457806356218d1b14610078578063832307571461008b578063ab53f2c6146100a0578063dbd0bf1f146100c357005b3661005257005b005b34801561006057600080fd5b506003545b6040519081526020015b60405180910390f35b61005261008636600461058f565b6100e6565b34801561009757600080fd5b50600154610065565b3480156100ac57600080fd5b506100b5610111565b60405161006f9291906105a7565b6100d66100d1366004610631565b6101ae565b604051901515815260200161006f565b60408051602081019091526000815261010d610107368490038401846106e8565b8261020f565b5050565b600060606000546002808054610126906107a4565b80601f0160208091040260200160405190810160405280929190818152602001828054610152906107a4565b801561019f5780601f106101745761010080835404028352916020019161019f565b820191906000526020600020905b81548152906001019060200180831161018257829003601f168201915b50505050509050915091509091565b60006101b8610487565b60208082018051516001600160a01b03808a169091528151519088169083015280515160409081018790529051518515156060909101528051918201905260008152610204828261020f565b519695505050505050565b61021f6003600054146009610427565b815161023a90158061023357508251600154145b600a610427565b60008080556002805461024c906107a4565b80601f0160208091040260200160405190810160405280929190818152602001828054610278906107a4565b80156102c55780601f1061029a576101008083540402835291602001916102c5565b820191906000526020600020905b8154815290600101906020018083116102a857829003601f168201915b50505050508060200190518101906102dd91906107d9565b604080513381528551602080830191909152808701515180516001600160a01b0390811684860152918101519091166060808401919091528184015160808401520151151560a082015290519192507ff831b6b32d9133cdb8266e9812d4a67568939b339fc1afe8f10994b53da860ef919081900360c00190a161036334156008610427565b604051600081527fa325cb1739d559343fa8dee396f4ccf94ba3bbfa54b3fed3e4e6e7817fd824899060200160405180910390a1600082526020838101515180518183015160408084015160609485015182516001600160a01b0395861681529490931695840195909552820193909352911515908201527f3845d71242b1c5232c306d44843be732c76e6d1dd9ac5b54dab2946a9e681c949060800160405180910390a16104106104cc565b60208101514390526104218161044c565b50505050565b8161010d5760405163100960cb60e01b81526004810182905260240160405180910390fd5b600360009081554360015560408051602080820184905282518083038201815291830190925280516104829260029201906104f6565b505050565b6040518060400160405280600081526020016104c76040805160a08101825260006020820181815292820181905260608201819052608082015290815290565b905290565b60405180604001604052806000151581526020016104c76040518060200160405280600081525090565b828054610502906107a4565b90600052602060002090601f016020900481019282610524576000855561056a565b82601f1061053d57805160ff191683800117855561056a565b8280016001018555821561056a579182015b8281111561056a57825182559160200191906001019061054f565b5061057692915061057a565b5090565b5b80821115610576576000815560010161057b565b600060a082840312156105a157600080fd5b50919050565b82815260006020604081840152835180604085015260005b818110156105db578581018301518582016060015282016105bf565b818111156105ed576000606083870101525b50601f01601f191692909201606001949350505050565b80356001600160a01b038116811461061b57600080fd5b919050565b801515811461062e57600080fd5b50565b6000806000806080858703121561064757600080fd5b61065085610604565b935061065e60208601610604565b925060408501359150606085013561067581610620565b939692955090935050565b6040516020810167ffffffffffffffff811182821017156106b157634e487b7160e01b600052604160045260246000fd5b60405290565b6040516080810167ffffffffffffffff811182821017156106b157634e487b7160e01b600052604160045260246000fd5b600081830360a08112156106fb57600080fd5b6040516040810181811067ffffffffffffffff8211171561072c57634e487b7160e01b600052604160045260246000fd5b604052833581526080601f198301121561074557600080fd5b61074d610680565b91506107576106b7565b61076360208601610604565b815261077160408601610604565b602082015260608501356040820152608085013561078e81610620565b6060820152825260208101919091529392505050565b600181811c908216806107b857607f821691505b602082108114156105a157634e487b7160e01b600052602260045260246000fd5b6000602082840312156107eb57600080fd5b81516107f681610620565b939250505056fea26469706673582212208872a654b1365a3f0e4379022f9d3b13758093e4e3944d795900d6b62ca1a7b764736f6c634300080c0033`,
  BytecodeLen: 2768,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  2: {
    at: './contracts/announcer-listing.rsh:39:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './contracts/announcer-listing.rsh:28:13:after expr stmt semicolon',
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
  "publishValues": publishValues
  };
export const _APIs = {
  publishValues: publishValues
  };
