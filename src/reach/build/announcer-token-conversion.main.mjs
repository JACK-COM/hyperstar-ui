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
  return {
    announce: [ctc0, ctc1, ctc1, ctc2]
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
  const ctc4 = stdlib.T_Tuple([ctc1, ctc2, ctc2, ctc3]);
  
  
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./contracts/announcer-token-conversion.rsh:19:12:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./contracts/announcer-token-conversion.rsh:19:12:decimal', stdlib.UInt_max, '0'), []],
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
    at: './contracts/announcer-token-conversion.rsh:20:25:application',
    fs: ['at ./contracts/announcer-token-conversion.rsh:20:25:application call to [unknown function] (defined at: ./contracts/announcer-token-conversion.rsh:20:25:function exp)', 'at ./contracts/announcer-token-conversion.rsh:20:25:application call to "liftedInteract" (defined at: ./contracts/announcer-token-conversion.rsh:20:25:application)'],
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
      out_tys: [ctc4],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v92], secs: v94, time: v93, didSend: v44, from: v91 } = txn2;
    undefined /* setApiDetails */;
    ;
    const v95 = v92[stdlib.checkedBigNumberify('./contracts/announcer-token-conversion.rsh:27:12:array', stdlib.UInt_max, '0')];
    const v96 = v92[stdlib.checkedBigNumberify('./contracts/announcer-token-conversion.rsh:27:12:array', stdlib.UInt_max, '1')];
    const v97 = v92[stdlib.checkedBigNumberify('./contracts/announcer-token-conversion.rsh:27:12:array', stdlib.UInt_max, '2')];
    const v98 = v92[stdlib.checkedBigNumberify('./contracts/announcer-token-conversion.rsh:27:12:array', stdlib.UInt_max, '3')];
    const v99 = null;
    await txn2.getOutput('contractCreated', 'v99', ctc0, v99);
    null;
    const cv78 = v93;
    
    v78 = cv78;
    
    continue;
    
    }
  return;
  
  
  };
export async function _contractCreated3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _contractCreated3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _contractCreated3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Contract;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Tuple([ctc0, ctc1, ctc1, ctc2]);
  const ctc4 = stdlib.T_Null;
  
  
  const [] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), []);
  const v86 = stdlib.protect(ctc3, await interact.in(), {
    at: './contracts/announcer-token-conversion.rsh:27:5:application',
    fs: ['at ./contracts/announcer-token-conversion.rsh:27:5:application call to [unknown function] (defined at: ./contracts/announcer-token-conversion.rsh:27:5:function exp)'],
    msg: 'in',
    who: 'contractCreated'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v86],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3],
    pay: [stdlib.checkedBigNumberify('./contracts/announcer-token-conversion.rsh:27:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v92], secs: v94, time: v93, didSend: v44, from: v91 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "contractCreated"
        });
      ;
      const v95 = v92[stdlib.checkedBigNumberify('./contracts/announcer-token-conversion.rsh:27:12:array', stdlib.UInt_max, '0')];
      const v96 = v92[stdlib.checkedBigNumberify('./contracts/announcer-token-conversion.rsh:27:12:array', stdlib.UInt_max, '1')];
      const v97 = v92[stdlib.checkedBigNumberify('./contracts/announcer-token-conversion.rsh:27:12:array', stdlib.UInt_max, '2')];
      const v98 = v92[stdlib.checkedBigNumberify('./contracts/announcer-token-conversion.rsh:27:12:array', stdlib.UInt_max, '3')];
      const v99 = null;
      const v100 = await txn1.getOutput('contractCreated', 'v99', ctc4, v99);
      
      null;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v92], secs: v94, time: v93, didSend: v44, from: v91 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v95 = v92[stdlib.checkedBigNumberify('./contracts/announcer-token-conversion.rsh:27:12:array', stdlib.UInt_max, '0')];
  const v96 = v92[stdlib.checkedBigNumberify('./contracts/announcer-token-conversion.rsh:27:12:array', stdlib.UInt_max, '1')];
  const v97 = v92[stdlib.checkedBigNumberify('./contracts/announcer-token-conversion.rsh:27:12:array', stdlib.UInt_max, '2')];
  const v98 = v92[stdlib.checkedBigNumberify('./contracts/announcer-token-conversion.rsh:27:12:array', stdlib.UInt_max, '3')];
  const v99 = null;
  const v100 = await txn1.getOutput('contractCreated', 'v99', ctc4, v99);
  stdlib.protect(ctc4, await interact.out(v92, v100), {
    at: './contracts/announcer-token-conversion.rsh:27:5:application',
    fs: ['at ./contracts/announcer-token-conversion.rsh:27:5:application call to [unknown function] (defined at: ./contracts/announcer-token-conversion.rsh:27:5:function exp)', 'at ./contracts/announcer-token-conversion.rsh:30:11:application call to "notify" (defined at: ./contracts/announcer-token-conversion.rsh:27:5:function exp)'],
    msg: 'out',
    who: 'contractCreated'
    });
  
  null;
  return;
  
  
  
  };
export async function contractCreated(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for contractCreated expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for contractCreated expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _contractCreated3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`contractCreated(uint64,uint64,uint64,uint64)byte[0]`],
    pure: [],
    sigs: [`contractCreated(uint64,uint64,uint64,uint64)byte[0]`]
    },
  appApproval: `BiAEAAECAyYBACI1ADEYQQEdKGRJIls1AYEIWzUCNhoAF0lBACAiNQQjNQaBoueMsA4SRDYaATYaAlA2GgNQNhoEUEIAFjYaAhc1BDYaAzYaARdJJAxAAFQkEkQlNAESRDQESSISTDQCEhFESTUFNf+ABAn41/40/1CwgAgAAAAAAAAAY7AoNQeABOnDpXg0/1cACFA0/1cICFA0/1cQCFA0/1cYCFCwMgZCACYiEkSBoI0GiACVIjQBEkQ0BEkiEkw0AhIRRIAEXw2r+rAyBkIAADX/JTUBMgY1AkIAHDEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCg0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQjMTUSRCIxNhJEIjE3EkQiNQEiNQJC/680AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
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
                    "internalType": "address payable",
                    "name": "elem2",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "elem3",
                    "type": "uint256"
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
        "internalType": "address payable",
        "name": "v2",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v3",
        "type": "uint256"
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
                    "internalType": "address payable",
                    "name": "elem2",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "elem3",
                    "type": "uint256"
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
        "internalType": "address payable",
        "name": "_a2",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_a3",
        "type": "uint256"
      }
    ],
    "name": "contractCreated",
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
  Bytecode: `0x608060405260405162000aa738038062000aa7833981016040819052610024916101cb565b600080554360035560408051338152825160208083019190915283015115158183015290517faf3102e4a96b239a2811210526ca19adcde1af3e2876a2c9a5886a5a887a2dcb9181900360600190a161007f3415600761009f565b610087610103565b6020810151439052610098816100c8565b505061026e565b816100c45760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b600360009081554360015560408051602080820184905282518083038201815291830190925280516100fe926002920190610132565b505050565b604051806040016040528060001515815260200161012d6040518060200160405280600081525090565b905290565b82805461013e90610233565b90600052602060002090601f01602090048101928261016057600085556101a6565b82601f1061017957805160ff19168380011785556101a6565b828001600101855582156101a6579182015b828111156101a657825182559160200191906001019061018b565b506101b29291506101b6565b5090565b5b808211156101b257600081556001016101b7565b6000604082840312156101dd57600080fd5b604080519081016001600160401b038111828210171561020d57634e487b7160e01b600052604160045260246000fd5b604052825181526020830151801515811461022757600080fd5b60208201529392505050565b600181811c9082168061024757607f821691505b6020821081141561026857634e487b7160e01b600052602260045260246000fd5b50919050565b610829806200027e6000396000f3fe60806040526004361061004b5760003560e01c80631e93b0f1146100545780636ab38ab714610078578063832307571461009b578063ab53f2c6146100b0578063e2619f4e146100d357005b3661005257005b005b34801561006057600080fd5b506003545b6040519081526020015b60405180910390f35b61008b6100863660046105b4565b6100e6565b604051901515815260200161006f565b3480156100a757600080fd5b50600154610065565b3480156100bc57600080fd5b506100c5610145565b60405161006f9291906105ff565b6100526100e136600461065c565b6101e2565b60006100f0610490565b60208082018051516001600160a01b03808a1690915281515188821690840152815151908716604091820152905151606001859052805191820190526000815261013a828261020d565b519695505050505050565b60006060600054600280805461015a90610674565b80601f016020809104026020016040519081016040528092919081815260200182805461018690610674565b80156101d35780601f106101a8576101008083540402835291602001916101d3565b820191906000526020600020905b8154815290600101906020018083116101b657829003601f168201915b50505050509050915091509091565b60408051602081019091526000815261020961020336849003840184610711565b8261020d565b5050565b61021d6003600054146009610430565b815161023890158061023157508251600154145b600a610430565b60008080556002805461024a90610674565b80601f016020809104026020016040519081016040528092919081815260200182805461027690610674565b80156102c35780601f10610298576101008083540402835291602001916102c3565b820191906000526020600020905b8154815290600101906020018083116102a657829003601f168201915b50505050508060200190518101906102db91906107ca565b604080513381528551602080830191909152808701515180516001600160a01b0390811684860152918101518216606080850191909152818501519092166080840152015160a082015290519192507fdab055f1dec2ddee659ca1e0e5a322bad28e87086a57b513c907154b5d204765919081900360c00190a161036134156008610430565b604051600081527fa325cb1739d559343fa8dee396f4ccf94ba3bbfa54b3fed3e4e6e7817fd824899060200160405180910390a1600082526020808401515180519181015160408083015160609093015190517fe358eb29696245dd88601e6383ab9c674e98ffda82cb2e3b2c9e61d03f016306946104099490939290916001600160a01b039485168152928416602084015292166040820152606081019190915260800190565b60405180910390a16104196104d5565b602081015143905261042a81610455565b50505050565b816102095760405163100960cb60e01b81526004810182905260240160405180910390fd5b6003600090815543600155604080516020808201849052825180830382018152918301909252805161048b9260029201906104ff565b505050565b6040518060400160405280600081526020016104d06040805160a08101825260006020820181815292820181905260608201819052608082015290815290565b905290565b60405180604001604052806000151581526020016104d06040518060200160405280600081525090565b82805461050b90610674565b90600052602060002090601f01602090048101928261052d5760008555610573565b82601f1061054657805160ff1916838001178555610573565b82800160010185558215610573579182015b82811115610573578251825591602001919060010190610558565b5061057f929150610583565b5090565b5b8082111561057f5760008155600101610584565b80356001600160a01b03811681146105af57600080fd5b919050565b600080600080608085870312156105ca57600080fd5b6105d385610598565b93506105e160208601610598565b92506105ef60408601610598565b9396929550929360600135925050565b82815260006020604081840152835180604085015260005b8181101561063357858101830151858201606001528201610617565b81811115610645576000606083870101525b50601f01601f191692909201606001949350505050565b600060a0828403121561066e57600080fd5b50919050565b600181811c9082168061068857607f821691505b6020821081141561066e57634e487b7160e01b600052602260045260246000fd5b6040516020810167ffffffffffffffff811182821017156106da57634e487b7160e01b600052604160045260246000fd5b60405290565b6040516080810167ffffffffffffffff811182821017156106da57634e487b7160e01b600052604160045260246000fd5b600081830360a081121561072457600080fd5b6040516040810181811067ffffffffffffffff8211171561075557634e487b7160e01b600052604160045260246000fd5b604052833581526080601f198301121561076e57600080fd5b6107766106a9565b91506107806106e0565b61078c60208601610598565b815261079a60408601610598565b60208201526107ab60608601610598565b6040820152608094909401356060850152928152602083015250919050565b6000602082840312156107dc57600080fd5b815180151581146107ec57600080fd5b939250505056fea2646970667358221220ad104a2667b138fec9e385254d39e8afebe2c6556ef7c0dffd7f6e54954452f064736f6c634300080c0033`,
  BytecodeLen: 2727,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  2: {
    at: './contracts/announcer-token-conversion.rsh:36:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './contracts/announcer-token-conversion.rsh:25:13:after expr stmt semicolon',
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
  "contractCreated": contractCreated
  };
export const _APIs = {
  contractCreated: contractCreated
  };
