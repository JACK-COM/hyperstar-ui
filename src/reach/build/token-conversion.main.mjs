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
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Token;
  return {
    balanceUpdated: [ctc0, ctc1, ctc0, ctc1],
    poolClosed: []
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc6 = stdlib.T_Struct([['largeBal', ctc2], ['smallBal', ctc2]]);
  const ctc7 = stdlib.T_Struct([['smallUnit', ctc1], ['largeUnit', ctc1], ['largeDecs', ctc2], ['conversion', ctc2], ['admin', ctc0]]);
  
  return {
    infos: {
      balances: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v2994, v2996, v2997, v2998, v2999, v3053, v3054, v3066, v3067, v3068] = svs;
            return (await ((async () => {
              
              const v3069 = {
                largeBal: v3066,
                smallBal: v3068
                };
              
              return v3069;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc6
        },
      info: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v2994, v2996, v2997, v2998, v2999, v3053, v3054, v3066, v3067, v3068] = svs;
            return (await ((async () => {
              
              const v3031 = {
                admin: v2994,
                conversion: v2998,
                largeDecs: v2999,
                largeUnit: v2997,
                smallUnit: v2996
                };
              
              return v3031;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc7
        }
      },
    views: {
      3: [ctc0, ctc1, ctc1, ctc2, ctc2, ctc5, ctc2, ctc2, ctc4, ctc2]
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
export async function Admin(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Admin expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Admin expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Contract;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Tuple([ctc1, ctc3]);
  const ctc5 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Tuple([ctc1]);
  const ctc8 = stdlib.T_Data({
    addLiquidity0_192: ctc5,
    closeTreasury0_192: ctc6,
    convertToLarge0_192: ctc7,
    convertToSmall0_192: ctc7,
    withdraw0_192: ctc5
    });
  
  
  const v2969 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v2970 = [v2969, v2969];
  const v2974 = stdlib.protect(ctc0, interact.announcer, 'for Admin\'s interact field announcer');
  const v2975 = stdlib.protect(ctc1, interact.conversion, 'for Admin\'s interact field conversion');
  const v2976 = stdlib.protect(ctc1, interact.largeDecs, 'for Admin\'s interact field largeDecs');
  const v2977 = stdlib.protect(ctc2, interact.largeUnit, 'for Admin\'s interact field largeUnit');
  const v2978 = stdlib.protect(ctc2, interact.smallUnit, 'for Admin\'s interact field smallUnit');
  
  const v2982 = stdlib.div(stdlib.UInt_max, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:63:34:decimal', stdlib.UInt_max, '2'));
  const v2983 = stdlib.lt(v2976, v2982);
  stdlib.assert(v2983, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./contracts/token-conversion.rsh:63:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/token-conversion.rsh:55:13:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:55:17:function exp)'],
    msg: 'Invalid largeDecs',
    who: 'Admin'
    });
  const v2985 = stdlib.gt(v2975, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:64:18:decimal', stdlib.UInt_max, '1'));
  let v2986;
  if (v2985) {
    const v2989 = stdlib.lt(v2975, v2982);
    v2986 = v2989;
    }
  else {
    v2986 = false;
    }
  stdlib.assert(v2986, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./contracts/token-conversion.rsh:64:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/token-conversion.rsh:55:13:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:55:17:function exp)'],
    msg: 'Invalid conversion rate',
    who: 'Admin'
    });
  const v2991 = stdlib.tokenEq(v2978, v2977);
  const v2992 = v2991 ? false : true;
  stdlib.assert(v2992, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./contracts/token-conversion.rsh:65:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/token-conversion.rsh:55:13:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:55:17:function exp)'],
    msg: 'Small and large units can\'t be the same',
    who: 'Admin'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v2974, v2978, v2977, v2975, v2976],
    evt_cnt: 5,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:68:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc2, ctc2, ctc1, ctc1],
    pay: [stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:68:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v2995, v2996, v2997, v2998, v2999], secs: v3001, time: v3000, didSend: v93, from: v2994 } = txn1;
      
      const v3004 = v2970[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:68:9:dot', stdlib.UInt_max, '0')];
      const v3006 = v3004[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:68:9:dot', stdlib.UInt_max, '1')];
      const v3007 = v3004[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:68:9:dot', stdlib.UInt_max, '2')];
      const v3008 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3006, v3007];
      const v3009 = stdlib.Array_set(v2970, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:68:9:dot', stdlib.UInt_max, '0'), v3008);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v2996
        });
      const v3011 = v3009[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:68:9:dot', stdlib.UInt_max, '1')];
      const v3013 = v3011[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:68:9:dot', stdlib.UInt_max, '1')];
      const v3014 = v3011[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:68:9:dot', stdlib.UInt_max, '2')];
      const v3015 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3013, v3014];
      const v3016 = stdlib.Array_set(v3009, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:68:9:dot', stdlib.UInt_max, '1'), v3015);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v2997
        });
      ;
      
      const v3033 = await ctc.getContractInfo();
      const v3036 = [stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:89:31:application', stdlib.UInt_max, '0'), ((sim_r.txns.push({
        kind: 'remote',
        obj: v2995,
        remote: ({
          accs: [],
          apps: [],
          bills: stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:89:31:application', stdlib.UInt_max, '0'),
          fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          pays: stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:89:31:application', stdlib.UInt_max, '0'),
          toks: []
          })
        })), undefined)];
      const v3037 = await txn1.getOutput('internal', 'v3036', ctc4, v3036);
      const v3039 = v3037[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:89:31:application', stdlib.UInt_max, '0')];
      const v3050 = true;
      const v3051 = v3000;
      const v3053 = v3016;
      const v3054 = v3039;
      
      if (await (async () => {
        
        return v3050;})()) {
        const v3065 = v3053[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:109:28:application', stdlib.UInt_max, '1')];
        const v3066 = v3065[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:109:28:application', stdlib.UInt_max, '0')];
        const v3067 = v3053[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:110:28:application', stdlib.UInt_max, '0')];
        const v3068 = v3067[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:110:28:application', stdlib.UInt_max, '0')];
        sim_r.isHalt = false;
        }
      else {
        const v5140 = v3053[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:109:28:application', stdlib.UInt_max, '1')];
        const v5141 = v5140[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:109:28:application', stdlib.UInt_max, '0')];
        const v5152 = stdlib.sub(v5141, v5141);
        const v5158 = v5140[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:238:45:application', stdlib.UInt_max, '1')];
        const v5159 = v5140[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:238:45:application', stdlib.UInt_max, '2')];
        const v5160 = [v5152, v5158, v5159];
        const v5161 = stdlib.Array_set(v3053, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:238:45:application', stdlib.UInt_max, '1'), v5160);
        sim_r.txns.push({
          kind: 'from',
          to: v2994,
          tok: v2997
          });
        const v5162 = v5161[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:239:19:application', stdlib.UInt_max, '0')];
        const v5163 = v5162[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:239:19:application', stdlib.UInt_max, '0')];
        sim_r.txns.push({
          kind: 'from',
          to: v2994,
          tok: v2996
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v2997
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: v2996
          })
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
    tys: [ctc0, ctc2, ctc2, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v2995, v2996, v2997, v2998, v2999], secs: v3001, time: v3000, didSend: v93, from: v2994 } = txn1;
  const v3002 = stdlib.tokenEq(v2996, v2997);
  const v3003 = v3002 ? false : true;
  stdlib.assert(v3003, {
    at: './contracts/token-conversion.rsh:68:9:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Admin'
    });
  const v3004 = v2970[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:68:9:dot', stdlib.UInt_max, '0')];
  const v3006 = v3004[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:68:9:dot', stdlib.UInt_max, '1')];
  const v3007 = v3004[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:68:9:dot', stdlib.UInt_max, '2')];
  const v3008 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3006, v3007];
  const v3009 = stdlib.Array_set(v2970, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:68:9:dot', stdlib.UInt_max, '0'), v3008);
  ;
  const v3011 = v3009[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:68:9:dot', stdlib.UInt_max, '1')];
  const v3013 = v3011[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:68:9:dot', stdlib.UInt_max, '1')];
  const v3014 = v3011[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:68:9:dot', stdlib.UInt_max, '2')];
  const v3015 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3013, v3014];
  const v3016 = stdlib.Array_set(v3009, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:68:9:dot', stdlib.UInt_max, '1'), v3015);
  ;
  ;
  const v3019 = stdlib.div(stdlib.UInt_max, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:69:32:decimal', stdlib.UInt_max, '2'));
  const v3020 = stdlib.lt(v2999, v3019);
  stdlib.assert(v3020, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./contracts/token-conversion.rsh:69:8:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'Invalid largeDecs',
    who: 'Admin'
    });
  const v3022 = stdlib.ge(v2998, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:70:17:decimal', stdlib.UInt_max, '1'));
  let v3023;
  if (v3022) {
    const v3026 = stdlib.lt(v2998, v3019);
    v3023 = v3026;
    }
  else {
    v3023 = false;
    }
  stdlib.assert(v3023, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./contracts/token-conversion.rsh:70:8:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'Invalid conversion rate',
    who: 'Admin'
    });
  stdlib.protect(ctc3, await interact.notifyComplete(), {
    at: './contracts/token-conversion.rsh:83:32:application',
    fs: ['at ./contracts/token-conversion.rsh:83:32:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:83:32:function exp)', 'at ./contracts/token-conversion.rsh:83:32:application call to "liftedInteract" (defined at: ./contracts/token-conversion.rsh:83:32:application)'],
    msg: 'notifyComplete',
    who: 'Admin'
    });
  
  const v3033 = await ctc.getContractInfo();
  const v3036 = undefined /* Remote */;
  const v3037 = await txn1.getOutput('internal', 'v3036', ctc4, v3036);
  const v3039 = v3037[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:89:31:application', stdlib.UInt_max, '0')];
  const v3045 = stdlib.le(v3039, stdlib.UInt_max);
  stdlib.assert(v3045, {
    at: './contracts/token-conversion.rsh:89:31:application',
    fs: [],
    msg: 'assume <= UInt.max',
    who: 'Admin'
    });
  const v3049 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3039);
  stdlib.assert(v3049, {
    at: './contracts/token-conversion.rsh:89:31:application',
    fs: [],
    msg: 'remote bill check',
    who: 'Admin'
    });
  let v3050 = true;
  let v3051 = v3000;
  let v3053 = v3016;
  let v3054 = v3039;
  
  while (await (async () => {
    
    return v3050;})()) {
    const v3065 = v3053[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:109:28:application', stdlib.UInt_max, '1')];
    const v3066 = v3065[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:109:28:application', stdlib.UInt_max, '0')];
    const v3067 = v3053[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:110:28:application', stdlib.UInt_max, '0')];
    const v3068 = v3067[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:110:28:application', stdlib.UInt_max, '0')];
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc8],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v3357], secs: v3359, time: v3358, didSend: v2170, from: v3356 } = txn2;
    switch (v3357[0]) {
      case 'addLiquidity0_192': {
        const v3360 = v3357[1];
        undefined /* setApiDetails */;
        const v3365 = v3360[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:138:9:spread', stdlib.UInt_max, '0')];
        const v3366 = v3360[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:138:9:spread', stdlib.UInt_max, '1')];
        const v3367 = stdlib.gt(v3365, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:146:23:decimal', stdlib.UInt_max, '0'));
        const v3368 = stdlib.gt(v3366, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:146:36:decimal', stdlib.UInt_max, '0'));
        const v3369 = v3367 ? true : v3368;
        stdlib.assert(v3369, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./contracts/token-conversion.rsh:146:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/token-conversion.rsh:145:22:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:145:22:function exp)', 'at ./contracts/token-conversion.rsh:104:37:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:145:22:function exp)', 'at ./contracts/token-conversion.rsh:104:37:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:104:37:function exp)', 'at ./contracts/token-conversion.rsh:114:14:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:114:14:function exp)'],
          msg: 'Invalid small and large deposit amounts',
          who: 'Admin'
          });
        const v3374 = stdlib.sub(stdlib.UInt_max, v3068);
        const v3375 = stdlib.le(v3365, v3374);
        stdlib.assert(v3375, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./contracts/token-conversion.rsh:147:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/token-conversion.rsh:145:22:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:145:22:function exp)', 'at ./contracts/token-conversion.rsh:104:37:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:145:22:function exp)', 'at ./contracts/token-conversion.rsh:104:37:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:104:37:function exp)', 'at ./contracts/token-conversion.rsh:114:14:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:114:14:function exp)'],
          msg: 'Invalid small deposit amount',
          who: 'Admin'
          });
        const v3380 = stdlib.sub(stdlib.UInt_max, v3066);
        const v3381 = stdlib.le(v3366, v3380);
        stdlib.assert(v3381, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./contracts/token-conversion.rsh:148:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/token-conversion.rsh:145:22:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:145:22:function exp)', 'at ./contracts/token-conversion.rsh:104:37:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:145:22:function exp)', 'at ./contracts/token-conversion.rsh:104:37:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:104:37:function exp)', 'at ./contracts/token-conversion.rsh:114:14:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:114:14:function exp)'],
          msg: 'Invalid large deposit amount',
          who: 'Admin'
          });
        const v3471 = stdlib.le(v3054, stdlib.UInt_max);
        stdlib.assert(v3471, {
          at: './contracts/token-conversion.rsh:104:37:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v3477 = stdlib.add(v3068, v3365);
        const v3478 = stdlib.le(v3477, stdlib.UInt_max);
        stdlib.assert(v3478, {
          at: './contracts/token-conversion.rsh:104:37:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        const v3484 = v3067[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '1')];
        const v3485 = v3067[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '2')];
        const v3486 = [v3477, v3484, v3485];
        const v3487 = stdlib.Array_set(v3053, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '0'), v3486);
        ;
        const v3488 = v3487[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '1')];
        const v3489 = v3488[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '0')];
        const v3490 = stdlib.add(v3489, v3366);
        const v3491 = stdlib.le(v3490, stdlib.UInt_max);
        stdlib.assert(v3491, {
          at: './contracts/token-conversion.rsh:104:37:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        const v3497 = v3488[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '1')];
        const v3498 = v3488[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '2')];
        const v3499 = [v3490, v3497, v3498];
        const v3500 = stdlib.Array_set(v3487, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '1'), v3499);
        ;
        const v3507 = v3500[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:156:23:application', stdlib.UInt_max, '0')];
        const v3508 = v3507[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:156:23:application', stdlib.UInt_max, '0')];
        const v3510 = v3500[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:157:23:application', stdlib.UInt_max, '1')];
        const v3511 = v3510[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:157:23:application', stdlib.UInt_max, '0')];
        const v3513 = null;
        await txn2.getOutput('addLiquidity', 'v3513', ctc3, v3513);
        null;
        const cv3050 = true;
        const cv3051 = v3358;
        const cv3053 = v3500;
        const cv3054 = v3054;
        
        v3050 = cv3050;
        v3051 = cv3051;
        v3053 = cv3053;
        v3054 = cv3054;
        
        continue;
        break;
        }
      case 'closeTreasury0_192': {
        const v3716 = v3357[1];
        undefined /* setApiDetails */;
        const v3827 = stdlib.le(v3054, stdlib.UInt_max);
        stdlib.assert(v3827, {
          at: './contracts/token-conversion.rsh:104:37:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v3834 = stdlib.le(v3068, stdlib.UInt_max);
        stdlib.assert(v3834, {
          at: './contracts/token-conversion.rsh:104:37:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        const v3840 = v3067[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '1')];
        const v3841 = v3067[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '2')];
        const v3842 = [v3068, v3840, v3841];
        const v3843 = stdlib.Array_set(v3053, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '0'), v3842);
        ;
        const v3844 = v3843[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '1')];
        const v3845 = v3844[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '0')];
        const v3847 = stdlib.le(v3845, stdlib.UInt_max);
        stdlib.assert(v3847, {
          at: './contracts/token-conversion.rsh:104:37:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        const v3853 = v3844[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '1')];
        const v3854 = v3844[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '2')];
        const v3855 = [v3845, v3853, v3854];
        const v3856 = stdlib.Array_set(v3843, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '1'), v3855);
        ;
        const v3883 = stdlib.addressEq(v3356, v2994);
        stdlib.assert(v3883, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./contracts/token-conversion.rsh:229:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/token-conversion.rsh:228:16:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:228:16:function exp)'],
          msg: 'Unauthorized user',
          who: 'Admin'
          });
        const v3885 = v3856[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:230:25:application', stdlib.UInt_max, '1')];
        const v3886 = v3885[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:230:25:application', stdlib.UInt_max, '0')];
        const v3892 = stdlib.sub(v3886, v3886);
        const v3893 = stdlib.ge(v3892, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:230:51:application', stdlib.UInt_max, '0'));
        stdlib.assert(v3893, {
          at: './contracts/token-conversion.rsh:230:51:application',
          fs: ['at ./contracts/token-conversion.rsh:228:16:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:228:16:function exp)'],
          msg: 'assume >= 0',
          who: 'Admin'
          });
        const v3898 = v3885[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:230:51:application', stdlib.UInt_max, '1')];
        const v3899 = v3885[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:230:51:application', stdlib.UInt_max, '2')];
        const v3900 = [v3892, v3898, v3899];
        const v3901 = stdlib.Array_set(v3856, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:230:51:application', stdlib.UInt_max, '1'), v3900);
        ;
        const v3902 = v3901[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:231:25:application', stdlib.UInt_max, '0')];
        const v3903 = v3902[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:231:25:application', stdlib.UInt_max, '0')];
        const v3909 = stdlib.sub(v3903, v3903);
        const v3910 = stdlib.ge(v3909, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:231:51:application', stdlib.UInt_max, '0'));
        stdlib.assert(v3910, {
          at: './contracts/token-conversion.rsh:231:51:application',
          fs: ['at ./contracts/token-conversion.rsh:228:16:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:228:16:function exp)'],
          msg: 'assume >= 0',
          who: 'Admin'
          });
        const v3915 = v3902[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:231:51:application', stdlib.UInt_max, '1')];
        const v3916 = v3902[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:231:51:application', stdlib.UInt_max, '2')];
        const v3917 = [v3909, v3915, v3916];
        const v3918 = stdlib.Array_set(v3901, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:231:51:application', stdlib.UInt_max, '0'), v3917);
        ;
        const v3919 = null;
        await txn2.getOutput('closeTreasury', 'v3919', ctc3, v3919);
        const cv3050 = false;
        const cv3051 = v3358;
        const cv3053 = v3918;
        const cv3054 = v3054;
        
        v3050 = cv3050;
        v3051 = cv3051;
        v3053 = cv3053;
        v3054 = cv3054;
        
        continue;
        break;
        }
      case 'convertToLarge0_192': {
        const v4072 = v3357[1];
        undefined /* setApiDetails */;
        const v4115 = v4072[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:194:9:spread', stdlib.UInt_max, '0')];
        const v4119 = stdlib.sub(stdlib.UInt_max, v3068);
        const v4120 = stdlib.le(v4115, v4119);
        stdlib.assert(v4120, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./contracts/token-conversion.rsh:206:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/token-conversion.rsh:205:15:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:205:15:function exp)', 'at ./contracts/token-conversion.rsh:104:37:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:205:15:function exp)', 'at ./contracts/token-conversion.rsh:104:37:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:104:37:function exp)', 'at ./contracts/token-conversion.rsh:114:14:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:114:14:function exp)'],
          msg: 'Pool is at capacity',
          who: 'Admin'
          });
        const v4183 = stdlib.le(v3054, stdlib.UInt_max);
        stdlib.assert(v4183, {
          at: './contracts/token-conversion.rsh:104:37:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v4189 = stdlib.add(v3068, v4115);
        const v4190 = stdlib.le(v4189, stdlib.UInt_max);
        stdlib.assert(v4190, {
          at: './contracts/token-conversion.rsh:104:37:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        const v4196 = v3067[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '1')];
        const v4197 = v3067[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '2')];
        const v4198 = [v4189, v4196, v4197];
        const v4199 = stdlib.Array_set(v3053, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '0'), v4198);
        ;
        const v4200 = v4199[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '1')];
        const v4201 = v4200[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '0')];
        const v4203 = stdlib.le(v4201, stdlib.UInt_max);
        stdlib.assert(v4203, {
          at: './contracts/token-conversion.rsh:104:37:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        const v4209 = v4200[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '1')];
        const v4210 = v4200[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '2')];
        const v4211 = [v4201, v4209, v4210];
        const v4212 = stdlib.Array_set(v4199, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '1'), v4211);
        ;
        const v4284 = stdlib.gt(v4115, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:210:26:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v4284, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./contracts/token-conversion.rsh:210:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/token-conversion.rsh:209:26:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:209:26:function exp)'],
          msg: 'Invalid amount',
          who: 'Admin'
          });
        const v4287 = stdlib.div(v4115, v2998);
        const v4288 = stdlib.mul(v4287, v2999);
        const v4290 = v4212[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:213:22:application', stdlib.UInt_max, '1')];
        const v4291 = v4290[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:213:22:application', stdlib.UInt_max, '0')];
        const v4292 = stdlib.gt(v4291, v4288);
        stdlib.assert(v4292, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./contracts/token-conversion.rsh:213:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/token-conversion.rsh:209:26:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:209:26:function exp)'],
          msg: 'Insufficient Pool Balance',
          who: 'Admin'
          });
        const v4299 = stdlib.sub(v4291, v4288);
        const v4300 = stdlib.ge(v4299, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:215:41:application', stdlib.UInt_max, '0'));
        stdlib.assert(v4300, {
          at: './contracts/token-conversion.rsh:215:41:application',
          fs: ['at ./contracts/token-conversion.rsh:209:26:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:209:26:function exp)'],
          msg: 'assume >= 0',
          who: 'Admin'
          });
        const v4305 = v4290[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:215:41:application', stdlib.UInt_max, '1')];
        const v4306 = v4290[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:215:41:application', stdlib.UInt_max, '2')];
        const v4307 = [v4299, v4305, v4306];
        const v4308 = stdlib.Array_set(v4212, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:215:41:application', stdlib.UInt_max, '1'), v4307);
        ;
        const v4309 = null;
        await txn2.getOutput('convertToLarge', 'v4309', ctc3, v4309);
        const v4316 = v4308[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:98:14:application', stdlib.UInt_max, '0')];
        const v4317 = v4316[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:98:14:application', stdlib.UInt_max, '0')];
        const v4318 = v4308[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:100:14:application', stdlib.UInt_max, '1')];
        const v4319 = v4318[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:100:14:application', stdlib.UInt_max, '0')];
        null;
        const cv3050 = true;
        const cv3051 = v3358;
        const cv3053 = v4308;
        const cv3054 = v3054;
        
        v3050 = cv3050;
        v3051 = cv3051;
        v3053 = cv3053;
        v3054 = cv3054;
        
        continue;
        break;
        }
      case 'convertToSmall0_192': {
        const v4428 = v3357[1];
        undefined /* setApiDetails */;
        const v4488 = v4428[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:165:9:spread', stdlib.UInt_max, '0')];
        const v4492 = stdlib.sub(stdlib.UInt_max, v3066);
        const v4493 = stdlib.le(v4488, v4492);
        stdlib.assert(v4493, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./contracts/token-conversion.rsh:177:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/token-conversion.rsh:176:13:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:176:13:function exp)', 'at ./contracts/token-conversion.rsh:104:37:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:176:13:function exp)', 'at ./contracts/token-conversion.rsh:104:37:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:104:37:function exp)', 'at ./contracts/token-conversion.rsh:114:14:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:114:14:function exp)'],
          msg: 'Pool is at capacity',
          who: 'Admin'
          });
        const v4539 = stdlib.le(v3054, stdlib.UInt_max);
        stdlib.assert(v4539, {
          at: './contracts/token-conversion.rsh:104:37:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v4546 = stdlib.le(v3068, stdlib.UInt_max);
        stdlib.assert(v4546, {
          at: './contracts/token-conversion.rsh:104:37:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        const v4552 = v3067[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '1')];
        const v4553 = v3067[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '2')];
        const v4554 = [v3068, v4552, v4553];
        const v4555 = stdlib.Array_set(v3053, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '0'), v4554);
        ;
        const v4556 = v4555[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '1')];
        const v4557 = v4556[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '0')];
        const v4558 = stdlib.add(v4557, v4488);
        const v4559 = stdlib.le(v4558, stdlib.UInt_max);
        stdlib.assert(v4559, {
          at: './contracts/token-conversion.rsh:104:37:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        const v4565 = v4556[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '1')];
        const v4566 = v4556[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '2')];
        const v4567 = [v4558, v4565, v4566];
        const v4568 = stdlib.Array_set(v4555, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '1'), v4567);
        ;
        const v4682 = stdlib.gt(v4488, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:182:26:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v4682, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./contracts/token-conversion.rsh:182:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/token-conversion.rsh:180:26:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:180:26:function exp)'],
          msg: 'Invalid amount',
          who: 'Admin'
          });
        const v4684 = stdlib.eq(v2999, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:92:41:decimal', stdlib.UInt_max, '0'));
        const v4685 = v4684 ? stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:92:45:decimal', stdlib.UInt_max, '1') : v2999;
        const v4687 = stdlib.div(v4488, v4685);
        const v4688 = stdlib.mul(v4687, v2998);
        const v4690 = v4568[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:185:22:application', stdlib.UInt_max, '0')];
        const v4691 = v4690[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:185:22:application', stdlib.UInt_max, '0')];
        const v4692 = stdlib.gt(v4691, v4688);
        stdlib.assert(v4692, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./contracts/token-conversion.rsh:185:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/token-conversion.rsh:180:26:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:180:26:function exp)'],
          msg: 'Insufficient Pool Balance',
          who: 'Admin'
          });
        const v4699 = stdlib.sub(v4691, v4688);
        const v4700 = stdlib.ge(v4699, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:187:41:application', stdlib.UInt_max, '0'));
        stdlib.assert(v4700, {
          at: './contracts/token-conversion.rsh:187:41:application',
          fs: ['at ./contracts/token-conversion.rsh:180:26:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:180:26:function exp)'],
          msg: 'assume >= 0',
          who: 'Admin'
          });
        const v4705 = v4690[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:187:41:application', stdlib.UInt_max, '1')];
        const v4706 = v4690[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:187:41:application', stdlib.UInt_max, '2')];
        const v4707 = [v4699, v4705, v4706];
        const v4708 = stdlib.Array_set(v4568, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:187:41:application', stdlib.UInt_max, '0'), v4707);
        ;
        const v4709 = null;
        await txn2.getOutput('convertToSmall', 'v4709', ctc3, v4709);
        const v4716 = v4708[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:98:14:application', stdlib.UInt_max, '0')];
        const v4717 = v4716[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:98:14:application', stdlib.UInt_max, '0')];
        const v4718 = v4708[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:100:14:application', stdlib.UInt_max, '1')];
        const v4719 = v4718[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:100:14:application', stdlib.UInt_max, '0')];
        null;
        const cv3050 = true;
        const cv3051 = v3358;
        const cv3053 = v4708;
        const cv3054 = v3054;
        
        v3050 = cv3050;
        v3051 = cv3051;
        v3053 = cv3053;
        v3054 = cv3054;
        
        continue;
        break;
        }
      case 'withdraw0_192': {
        const v4784 = v3357[1];
        undefined /* setApiDetails */;
        const v4895 = stdlib.le(v3054, stdlib.UInt_max);
        stdlib.assert(v4895, {
          at: './contracts/token-conversion.rsh:104:37:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v4902 = stdlib.le(v3068, stdlib.UInt_max);
        stdlib.assert(v4902, {
          at: './contracts/token-conversion.rsh:104:37:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        const v4908 = v3067[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '1')];
        const v4909 = v3067[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '2')];
        const v4910 = [v3068, v4908, v4909];
        const v4911 = stdlib.Array_set(v3053, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '0'), v4910);
        ;
        const v4912 = v4911[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '1')];
        const v4913 = v4912[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '0')];
        const v4915 = stdlib.le(v4913, stdlib.UInt_max);
        stdlib.assert(v4915, {
          at: './contracts/token-conversion.rsh:104:37:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        const v4921 = v4912[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '1')];
        const v4922 = v4912[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '2')];
        const v4923 = [v4913, v4921, v4922];
        const v4924 = stdlib.Array_set(v4911, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '1'), v4923);
        ;
        const v5078 = v4784[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:116:9:spread', stdlib.UInt_max, '0')];
        const v5079 = v4784[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:116:9:spread', stdlib.UInt_max, '1')];
        const v5080 = stdlib.addressEq(v3356, v2994);
        stdlib.assert(v5080, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./contracts/token-conversion.rsh:126:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/token-conversion.rsh:125:30:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:125:30:function exp)'],
          msg: 'Unauthorized user',
          who: 'Admin'
          });
        const v5082 = stdlib.gt(v5078, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:127:23:decimal', stdlib.UInt_max, '0'));
        const v5083 = stdlib.gt(v5079, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:127:36:decimal', stdlib.UInt_max, '0'));
        const v5084 = v5082 ? true : v5083;
        stdlib.assert(v5084, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./contracts/token-conversion.rsh:127:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/token-conversion.rsh:125:30:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:125:30:function exp)'],
          msg: 'Can\'t withdraw 0',
          who: 'Admin'
          });
        const v5086 = v4924[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:128:31:application', stdlib.UInt_max, '0')];
        const v5087 = v5086[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:128:31:application', stdlib.UInt_max, '0')];
        const v5088 = stdlib.le(v5078, v5087);
        stdlib.assert(v5088, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./contracts/token-conversion.rsh:128:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/token-conversion.rsh:125:30:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:125:30:function exp)'],
          msg: 'Invalid small withdrawal amount',
          who: 'Admin'
          });
        const v5090 = v4924[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:129:31:application', stdlib.UInt_max, '1')];
        const v5091 = v5090[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:129:31:application', stdlib.UInt_max, '0')];
        const v5092 = stdlib.le(v5079, v5091);
        stdlib.assert(v5092, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./contracts/token-conversion.rsh:129:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/token-conversion.rsh:125:30:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:125:30:function exp)'],
          msg: 'Invalid large withdrawal amount',
          who: 'Admin'
          });
        const v5099 = stdlib.sub(v5087, v5078);
        const v5100 = stdlib.ge(v5099, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:131:38:application', stdlib.UInt_max, '0'));
        stdlib.assert(v5100, {
          at: './contracts/token-conversion.rsh:131:38:application',
          fs: ['at ./contracts/token-conversion.rsh:125:30:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:125:30:function exp)'],
          msg: 'assume >= 0',
          who: 'Admin'
          });
        const v5105 = v5086[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:131:38:application', stdlib.UInt_max, '1')];
        const v5106 = v5086[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:131:38:application', stdlib.UInt_max, '2')];
        const v5107 = [v5099, v5105, v5106];
        const v5108 = stdlib.Array_set(v4924, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:131:38:application', stdlib.UInt_max, '0'), v5107);
        ;
        const v5109 = v5108[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:132:38:application', stdlib.UInt_max, '1')];
        const v5110 = v5109[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:132:38:application', stdlib.UInt_max, '0')];
        const v5114 = stdlib.sub(v5110, v5079);
        const v5115 = stdlib.ge(v5114, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:132:38:application', stdlib.UInt_max, '0'));
        stdlib.assert(v5115, {
          at: './contracts/token-conversion.rsh:132:38:application',
          fs: ['at ./contracts/token-conversion.rsh:125:30:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:125:30:function exp)'],
          msg: 'assume >= 0',
          who: 'Admin'
          });
        const v5120 = v5109[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:132:38:application', stdlib.UInt_max, '1')];
        const v5121 = v5109[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:132:38:application', stdlib.UInt_max, '2')];
        const v5122 = [v5114, v5120, v5121];
        const v5123 = stdlib.Array_set(v5108, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:132:38:application', stdlib.UInt_max, '1'), v5122);
        ;
        const v5124 = null;
        await txn2.getOutput('withdraw', 'v5124', ctc3, v5124);
        const v5132 = v5123[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:135:24:application', stdlib.UInt_max, '0')];
        const v5133 = v5132[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:135:24:application', stdlib.UInt_max, '0')];
        const v5134 = stdlib.gt(v5133, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:135:38:decimal', stdlib.UInt_max, '0'));
        const v5135 = v5123[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:135:50:application', stdlib.UInt_max, '1')];
        const v5136 = v5135[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:135:50:application', stdlib.UInt_max, '0')];
        const v5137 = stdlib.gt(v5136, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:135:64:decimal', stdlib.UInt_max, '0'));
        const v5138 = v5134 ? v5137 : false;
        const cv3050 = v5138;
        const cv3051 = v3358;
        const cv3053 = v5123;
        const cv3054 = v3054;
        
        v3050 = cv3050;
        v3051 = cv3051;
        v3053 = cv3053;
        v3054 = cv3054;
        
        continue;
        break;
        }
      }
    
    }
  const v5140 = v3053[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:109:28:application', stdlib.UInt_max, '1')];
  const v5141 = v5140[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:109:28:application', stdlib.UInt_max, '0')];
  const v5152 = stdlib.sub(v5141, v5141);
  const v5153 = stdlib.ge(v5152, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:238:45:application', stdlib.UInt_max, '0'));
  stdlib.assert(v5153, {
    at: './contracts/token-conversion.rsh:238:45:application',
    fs: [],
    msg: 'assume >= 0',
    who: 'Admin'
    });
  const v5158 = v5140[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:238:45:application', stdlib.UInt_max, '1')];
  const v5159 = v5140[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:238:45:application', stdlib.UInt_max, '2')];
  const v5160 = [v5152, v5158, v5159];
  const v5161 = stdlib.Array_set(v3053, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:238:45:application', stdlib.UInt_max, '1'), v5160);
  ;
  const v5162 = v5161[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:239:19:application', stdlib.UInt_max, '0')];
  const v5163 = v5162[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:239:19:application', stdlib.UInt_max, '0')];
  const v5169 = stdlib.sub(v5163, v5163);
  const v5170 = stdlib.ge(v5169, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:239:45:application', stdlib.UInt_max, '0'));
  stdlib.assert(v5170, {
    at: './contracts/token-conversion.rsh:239:45:application',
    fs: [],
    msg: 'assume >= 0',
    who: 'Admin'
    });
  ;
  return;
  
  
  };
export async function _addLiquidity3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _addLiquidity3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _addLiquidity3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc6 = stdlib.T_Tuple([ctc2, ctc2]);
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc2]);
  const ctc9 = stdlib.T_Data({
    addLiquidity0_192: ctc6,
    closeTreasury0_192: ctc7,
    convertToLarge0_192: ctc8,
    convertToSmall0_192: ctc8,
    withdraw0_192: ctc6
    });
  const ctc10 = stdlib.T_Null;
  
  
  const [v2994, v2996, v2997, v2998, v2999, v3053, v3054, v3066, v3067, v3068] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc1, ctc1, ctc2, ctc2, ctc5, ctc2, ctc2, ctc4, ctc2]);
  const v3100 = stdlib.protect(ctc6, await interact.in(), {
    at: './contracts/token-conversion.rsh:1:23:application',
    fs: ['at ./contracts/token-conversion.rsh:140:22:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:140:22:function exp)', 'at ./contracts/token-conversion.rsh:104:37:application call to "runaddLiquidity0_192" (defined at: ./contracts/token-conversion.rsh:138:9:function exp)', 'at ./contracts/token-conversion.rsh:104:37:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:104:37:function exp)'],
    msg: 'in',
    who: 'addLiquidity'
    });
  const v3101 = v3100[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v3102 = v3100[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v3106 = stdlib.gt(v3101, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:141:23:decimal', stdlib.UInt_max, '0'));
  const v3107 = stdlib.gt(v3102, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:141:36:decimal', stdlib.UInt_max, '0'));
  const v3108 = v3106 ? true : v3107;
  stdlib.assert(v3108, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./contracts/token-conversion.rsh:141:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/token-conversion.rsh:140:22:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:140:22:function exp)', 'at ./contracts/token-conversion.rsh:140:22:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:140:22:function exp)', 'at ./contracts/token-conversion.rsh:104:37:application call to "runaddLiquidity0_192" (defined at: ./contracts/token-conversion.rsh:138:9:function exp)', 'at ./contracts/token-conversion.rsh:104:37:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:104:37:function exp)'],
    msg: 'Invalid small and large deposit amounts',
    who: 'addLiquidity'
    });
  const v3113 = stdlib.sub(stdlib.UInt_max, v3068);
  const v3114 = stdlib.le(v3101, v3113);
  stdlib.assert(v3114, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./contracts/token-conversion.rsh:142:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/token-conversion.rsh:140:22:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:140:22:function exp)', 'at ./contracts/token-conversion.rsh:140:22:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:140:22:function exp)', 'at ./contracts/token-conversion.rsh:104:37:application call to "runaddLiquidity0_192" (defined at: ./contracts/token-conversion.rsh:138:9:function exp)', 'at ./contracts/token-conversion.rsh:104:37:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:104:37:function exp)'],
    msg: 'Invalid small deposit amount',
    who: 'addLiquidity'
    });
  const v3119 = stdlib.sub(stdlib.UInt_max, v3066);
  const v3120 = stdlib.le(v3102, v3119);
  stdlib.assert(v3120, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./contracts/token-conversion.rsh:143:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/token-conversion.rsh:140:22:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:140:22:function exp)', 'at ./contracts/token-conversion.rsh:140:22:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:140:22:function exp)', 'at ./contracts/token-conversion.rsh:104:37:application call to "runaddLiquidity0_192" (defined at: ./contracts/token-conversion.rsh:138:9:function exp)', 'at ./contracts/token-conversion.rsh:104:37:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:104:37:function exp)'],
    msg: 'Invalid large deposit amount',
    who: 'addLiquidity'
    });
  const v3126 = ['addLiquidity0_192', v3100];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2994, v2996, v2997, v2998, v2999, v3053, v3054, v3066, v3067, v3068, v3126],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:149:17:decimal', stdlib.UInt_max, '0'), [[v3101, v2996], [v3102, v2997]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v3357], secs: v3359, time: v3358, didSend: v2170, from: v3356 } = txn1;
      
      switch (v3357[0]) {
        case 'addLiquidity0_192': {
          const v3360 = v3357[1];
          sim_r.txns.push({
            kind: 'api',
            who: "addLiquidity"
            });
          const v3365 = v3360[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:138:9:spread', stdlib.UInt_max, '0')];
          const v3366 = v3360[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:138:9:spread', stdlib.UInt_max, '1')];
          ;
          const v3477 = stdlib.add(v3068, v3365);
          const v3484 = v3067[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '1')];
          const v3485 = v3067[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '2')];
          const v3486 = [v3477, v3484, v3485];
          const v3487 = stdlib.Array_set(v3053, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '0'), v3486);
          sim_r.txns.push({
            amt: v3365,
            kind: 'to',
            tok: v2996
            });
          const v3488 = v3487[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '1')];
          const v3489 = v3488[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '0')];
          const v3490 = stdlib.add(v3489, v3366);
          const v3497 = v3488[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '1')];
          const v3498 = v3488[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '2')];
          const v3499 = [v3490, v3497, v3498];
          const v3500 = stdlib.Array_set(v3487, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '1'), v3499);
          sim_r.txns.push({
            amt: v3366,
            kind: 'to',
            tok: v2997
            });
          const v3507 = v3500[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:156:23:application', stdlib.UInt_max, '0')];
          const v3508 = v3507[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:156:23:application', stdlib.UInt_max, '0')];
          const v3510 = v3500[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:157:23:application', stdlib.UInt_max, '1')];
          const v3511 = v3510[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:157:23:application', stdlib.UInt_max, '0')];
          const v3513 = null;
          const v3514 = await txn1.getOutput('addLiquidity', 'v3513', ctc10, v3513);
          
          null;
          const v5715 = v3500;
          const v5716 = v3054;
          sim_r.isHalt = false;
          
          break;
          }
        case 'closeTreasury0_192': {
          const v3716 = v3357[1];
          
          break;
          }
        case 'convertToLarge0_192': {
          const v4072 = v3357[1];
          
          break;
          }
        case 'convertToSmall0_192': {
          const v4428 = v3357[1];
          
          break;
          }
        case 'withdraw0_192': {
          const v4784 = v3357[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc2, ctc2, ctc5, ctc2, ctc2, ctc4, ctc2, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v3357], secs: v3359, time: v3358, didSend: v2170, from: v3356 } = txn1;
  switch (v3357[0]) {
    case 'addLiquidity0_192': {
      const v3360 = v3357[1];
      undefined /* setApiDetails */;
      const v3365 = v3360[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:138:9:spread', stdlib.UInt_max, '0')];
      const v3366 = v3360[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:138:9:spread', stdlib.UInt_max, '1')];
      const v3367 = stdlib.gt(v3365, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:146:23:decimal', stdlib.UInt_max, '0'));
      const v3368 = stdlib.gt(v3366, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:146:36:decimal', stdlib.UInt_max, '0'));
      const v3369 = v3367 ? true : v3368;
      stdlib.assert(v3369, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./contracts/token-conversion.rsh:146:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/token-conversion.rsh:145:22:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:145:22:function exp)', 'at ./contracts/token-conversion.rsh:104:37:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:145:22:function exp)', 'at ./contracts/token-conversion.rsh:104:37:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:104:37:function exp)', 'at ./contracts/token-conversion.rsh:114:14:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:114:14:function exp)'],
        msg: 'Invalid small and large deposit amounts',
        who: 'addLiquidity'
        });
      const v3374 = stdlib.sub(stdlib.UInt_max, v3068);
      const v3375 = stdlib.le(v3365, v3374);
      stdlib.assert(v3375, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./contracts/token-conversion.rsh:147:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/token-conversion.rsh:145:22:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:145:22:function exp)', 'at ./contracts/token-conversion.rsh:104:37:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:145:22:function exp)', 'at ./contracts/token-conversion.rsh:104:37:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:104:37:function exp)', 'at ./contracts/token-conversion.rsh:114:14:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:114:14:function exp)'],
        msg: 'Invalid small deposit amount',
        who: 'addLiquidity'
        });
      const v3380 = stdlib.sub(stdlib.UInt_max, v3066);
      const v3381 = stdlib.le(v3366, v3380);
      stdlib.assert(v3381, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./contracts/token-conversion.rsh:148:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/token-conversion.rsh:145:22:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:145:22:function exp)', 'at ./contracts/token-conversion.rsh:104:37:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:145:22:function exp)', 'at ./contracts/token-conversion.rsh:104:37:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:104:37:function exp)', 'at ./contracts/token-conversion.rsh:114:14:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:114:14:function exp)'],
        msg: 'Invalid large deposit amount',
        who: 'addLiquidity'
        });
      const v3471 = stdlib.le(v3054, stdlib.UInt_max);
      stdlib.assert(v3471, {
        at: './contracts/token-conversion.rsh:104:37:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'addLiquidity'
        });
      ;
      const v3477 = stdlib.add(v3068, v3365);
      const v3478 = stdlib.le(v3477, stdlib.UInt_max);
      stdlib.assert(v3478, {
        at: './contracts/token-conversion.rsh:104:37:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'addLiquidity'
        });
      const v3484 = v3067[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '1')];
      const v3485 = v3067[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '2')];
      const v3486 = [v3477, v3484, v3485];
      const v3487 = stdlib.Array_set(v3053, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '0'), v3486);
      ;
      const v3488 = v3487[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '1')];
      const v3489 = v3488[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '0')];
      const v3490 = stdlib.add(v3489, v3366);
      const v3491 = stdlib.le(v3490, stdlib.UInt_max);
      stdlib.assert(v3491, {
        at: './contracts/token-conversion.rsh:104:37:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'addLiquidity'
        });
      const v3497 = v3488[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '1')];
      const v3498 = v3488[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '2')];
      const v3499 = [v3490, v3497, v3498];
      const v3500 = stdlib.Array_set(v3487, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '1'), v3499);
      ;
      const v3507 = v3500[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:156:23:application', stdlib.UInt_max, '0')];
      const v3508 = v3507[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:156:23:application', stdlib.UInt_max, '0')];
      const v3510 = v3500[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:157:23:application', stdlib.UInt_max, '1')];
      const v3511 = v3510[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:157:23:application', stdlib.UInt_max, '0')];
      const v3513 = null;
      const v3514 = await txn1.getOutput('addLiquidity', 'v3513', ctc10, v3513);
      if (v2170) {
        stdlib.protect(ctc10, await interact.out(v3360, v3514), {
          at: './contracts/token-conversion.rsh:139:7:application',
          fs: ['at ./contracts/token-conversion.rsh:139:7:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:139:7:function exp)', 'at ./contracts/token-conversion.rsh:159:15:application call to "notify" (defined at: ./contracts/token-conversion.rsh:151:30:function exp)', 'at ./contracts/token-conversion.rsh:151:30:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:151:30:function exp)'],
          msg: 'out',
          who: 'addLiquidity'
          });
        }
      else {
        }
      
      null;
      const v5715 = v3500;
      const v5716 = v3054;
      return;
      
      break;
      }
    case 'closeTreasury0_192': {
      const v3716 = v3357[1];
      return;
      break;
      }
    case 'convertToLarge0_192': {
      const v4072 = v3357[1];
      return;
      break;
      }
    case 'convertToSmall0_192': {
      const v4428 = v3357[1];
      return;
      break;
      }
    case 'withdraw0_192': {
      const v4784 = v3357[1];
      return;
      break;
      }
    }
  
  
  };
export async function _closeTreasury3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _closeTreasury3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _closeTreasury3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Tuple([ctc2, ctc2]);
  const ctc8 = stdlib.T_Tuple([ctc2]);
  const ctc9 = stdlib.T_Data({
    addLiquidity0_192: ctc7,
    closeTreasury0_192: ctc6,
    convertToLarge0_192: ctc8,
    convertToSmall0_192: ctc8,
    withdraw0_192: ctc7
    });
  const ctc10 = stdlib.T_Null;
  
  
  const [v2994, v2996, v2997, v2998, v2999, v3053, v3054, v3066, v3067, v3068] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc1, ctc1, ctc2, ctc2, ctc5, ctc2, ctc2, ctc4, ctc2]);
  const v3192 = ctc.selfAddress();
  const v3194 = stdlib.protect(ctc6, await interact.in(), {
    at: './contracts/token-conversion.rsh:1:23:application',
    fs: ['at ./contracts/token-conversion.rsh:224:10:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:224:10:function exp)', 'at ./contracts/token-conversion.rsh:104:37:application call to "runcloseTreasury0_192" (defined at: ./contracts/token-conversion.rsh:222:9:function exp)', 'at ./contracts/token-conversion.rsh:104:37:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:104:37:function exp)'],
    msg: 'in',
    who: 'closeTreasury'
    });
  const v3196 = stdlib.addressEq(v3192, v2994);
  stdlib.assert(v3196, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./contracts/token-conversion.rsh:225:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/token-conversion.rsh:224:10:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:224:10:function exp)', 'at ./contracts/token-conversion.rsh:224:10:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:224:10:function exp)', 'at ./contracts/token-conversion.rsh:104:37:application call to "runcloseTreasury0_192" (defined at: ./contracts/token-conversion.rsh:222:9:function exp)', 'at ./contracts/token-conversion.rsh:104:37:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:104:37:function exp)'],
    msg: 'Unauthorized user',
    who: 'closeTreasury'
    });
  const v3200 = ['closeTreasury0_192', v3194];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2994, v2996, v2997, v2998, v2999, v3053, v3054, v3066, v3067, v3068, v3200],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:227:14:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:227:18:decimal', stdlib.UInt_max, '0'), v2996], [stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:227:34:decimal', stdlib.UInt_max, '0'), v2997]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v3357], secs: v3359, time: v3358, didSend: v2170, from: v3356 } = txn1;
      
      switch (v3357[0]) {
        case 'addLiquidity0_192': {
          const v3360 = v3357[1];
          
          break;
          }
        case 'closeTreasury0_192': {
          const v3716 = v3357[1];
          sim_r.txns.push({
            kind: 'api',
            who: "closeTreasury"
            });
          ;
          const v3840 = v3067[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '1')];
          const v3841 = v3067[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '2')];
          const v3842 = [v3068, v3840, v3841];
          const v3843 = stdlib.Array_set(v3053, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '0'), v3842);
          ;
          const v3844 = v3843[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '1')];
          const v3845 = v3844[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '0')];
          const v3853 = v3844[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '1')];
          const v3854 = v3844[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '2')];
          const v3855 = [v3845, v3853, v3854];
          const v3856 = stdlib.Array_set(v3843, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '1'), v3855);
          ;
          const v3885 = v3856[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:230:25:application', stdlib.UInt_max, '1')];
          const v3886 = v3885[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:230:25:application', stdlib.UInt_max, '0')];
          const v3892 = stdlib.sub(v3886, v3886);
          const v3898 = v3885[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:230:51:application', stdlib.UInt_max, '1')];
          const v3899 = v3885[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:230:51:application', stdlib.UInt_max, '2')];
          const v3900 = [v3892, v3898, v3899];
          const v3901 = stdlib.Array_set(v3856, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:230:51:application', stdlib.UInt_max, '1'), v3900);
          sim_r.txns.push({
            kind: 'from',
            to: v2994,
            tok: v2997
            });
          const v3902 = v3901[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:231:25:application', stdlib.UInt_max, '0')];
          const v3903 = v3902[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:231:25:application', stdlib.UInt_max, '0')];
          const v3909 = stdlib.sub(v3903, v3903);
          const v3915 = v3902[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:231:51:application', stdlib.UInt_max, '1')];
          const v3916 = v3902[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:231:51:application', stdlib.UInt_max, '2')];
          const v3917 = [v3909, v3915, v3916];
          const v3918 = stdlib.Array_set(v3901, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:231:51:application', stdlib.UInt_max, '0'), v3917);
          sim_r.txns.push({
            kind: 'from',
            to: v2994,
            tok: v2996
            });
          const v3919 = null;
          const v3920 = await txn1.getOutput('closeTreasury', 'v3919', ctc10, v3919);
          
          const v5853 = v3918[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:109:28:application', stdlib.UInt_max, '1')];
          const v5854 = v5853[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:109:28:application', stdlib.UInt_max, '0')];
          const v5857 = stdlib.sub(v5854, v5854);
          const v5859 = v5853[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:238:45:application', stdlib.UInt_max, '1')];
          const v5860 = v5853[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:238:45:application', stdlib.UInt_max, '2')];
          const v5861 = [v5857, v5859, v5860];
          const v5862 = stdlib.Array_set(v3918, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:238:45:application', stdlib.UInt_max, '1'), v5861);
          sim_r.txns.push({
            kind: 'from',
            to: v2994,
            tok: v2997
            });
          const v5863 = v5862[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:239:19:application', stdlib.UInt_max, '0')];
          const v5864 = v5863[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:239:19:application', stdlib.UInt_max, '0')];
          sim_r.txns.push({
            kind: 'from',
            to: v2994,
            tok: v2996
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v2997
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: v2996
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          break;
          }
        case 'convertToLarge0_192': {
          const v4072 = v3357[1];
          
          break;
          }
        case 'convertToSmall0_192': {
          const v4428 = v3357[1];
          
          break;
          }
        case 'withdraw0_192': {
          const v4784 = v3357[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc2, ctc2, ctc5, ctc2, ctc2, ctc4, ctc2, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v3357], secs: v3359, time: v3358, didSend: v2170, from: v3356 } = txn1;
  switch (v3357[0]) {
    case 'addLiquidity0_192': {
      const v3360 = v3357[1];
      return;
      break;
      }
    case 'closeTreasury0_192': {
      const v3716 = v3357[1];
      undefined /* setApiDetails */;
      const v3827 = stdlib.le(v3054, stdlib.UInt_max);
      stdlib.assert(v3827, {
        at: './contracts/token-conversion.rsh:104:37:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'closeTreasury'
        });
      ;
      const v3834 = stdlib.le(v3068, stdlib.UInt_max);
      stdlib.assert(v3834, {
        at: './contracts/token-conversion.rsh:104:37:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'closeTreasury'
        });
      const v3840 = v3067[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '1')];
      const v3841 = v3067[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '2')];
      const v3842 = [v3068, v3840, v3841];
      const v3843 = stdlib.Array_set(v3053, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '0'), v3842);
      ;
      const v3844 = v3843[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '1')];
      const v3845 = v3844[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '0')];
      const v3847 = stdlib.le(v3845, stdlib.UInt_max);
      stdlib.assert(v3847, {
        at: './contracts/token-conversion.rsh:104:37:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'closeTreasury'
        });
      const v3853 = v3844[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '1')];
      const v3854 = v3844[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '2')];
      const v3855 = [v3845, v3853, v3854];
      const v3856 = stdlib.Array_set(v3843, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '1'), v3855);
      ;
      const v3883 = stdlib.addressEq(v3356, v2994);
      stdlib.assert(v3883, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./contracts/token-conversion.rsh:229:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/token-conversion.rsh:228:16:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:228:16:function exp)'],
        msg: 'Unauthorized user',
        who: 'closeTreasury'
        });
      const v3885 = v3856[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:230:25:application', stdlib.UInt_max, '1')];
      const v3886 = v3885[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:230:25:application', stdlib.UInt_max, '0')];
      const v3892 = stdlib.sub(v3886, v3886);
      const v3893 = stdlib.ge(v3892, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:230:51:application', stdlib.UInt_max, '0'));
      stdlib.assert(v3893, {
        at: './contracts/token-conversion.rsh:230:51:application',
        fs: ['at ./contracts/token-conversion.rsh:228:16:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:228:16:function exp)'],
        msg: 'assume >= 0',
        who: 'closeTreasury'
        });
      const v3898 = v3885[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:230:51:application', stdlib.UInt_max, '1')];
      const v3899 = v3885[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:230:51:application', stdlib.UInt_max, '2')];
      const v3900 = [v3892, v3898, v3899];
      const v3901 = stdlib.Array_set(v3856, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:230:51:application', stdlib.UInt_max, '1'), v3900);
      ;
      const v3902 = v3901[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:231:25:application', stdlib.UInt_max, '0')];
      const v3903 = v3902[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:231:25:application', stdlib.UInt_max, '0')];
      const v3909 = stdlib.sub(v3903, v3903);
      const v3910 = stdlib.ge(v3909, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:231:51:application', stdlib.UInt_max, '0'));
      stdlib.assert(v3910, {
        at: './contracts/token-conversion.rsh:231:51:application',
        fs: ['at ./contracts/token-conversion.rsh:228:16:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:228:16:function exp)'],
        msg: 'assume >= 0',
        who: 'closeTreasury'
        });
      const v3915 = v3902[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:231:51:application', stdlib.UInt_max, '1')];
      const v3916 = v3902[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:231:51:application', stdlib.UInt_max, '2')];
      const v3917 = [v3909, v3915, v3916];
      const v3918 = stdlib.Array_set(v3901, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:231:51:application', stdlib.UInt_max, '0'), v3917);
      ;
      const v3919 = null;
      const v3920 = await txn1.getOutput('closeTreasury', 'v3919', ctc10, v3919);
      if (v2170) {
        stdlib.protect(ctc10, await interact.out(v3716, v3920), {
          at: './contracts/token-conversion.rsh:223:7:application',
          fs: ['at ./contracts/token-conversion.rsh:223:7:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:223:7:function exp)', 'at ./contracts/token-conversion.rsh:232:15:application call to "notify" (defined at: ./contracts/token-conversion.rsh:228:16:function exp)', 'at ./contracts/token-conversion.rsh:228:16:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:228:16:function exp)'],
          msg: 'out',
          who: 'closeTreasury'
          });
        }
      else {
        }
      
      const v5853 = v3918[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:109:28:application', stdlib.UInt_max, '1')];
      const v5854 = v5853[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:109:28:application', stdlib.UInt_max, '0')];
      const v5857 = stdlib.sub(v5854, v5854);
      const v5858 = stdlib.ge(v5857, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:238:45:application', stdlib.UInt_max, '0'));
      stdlib.assert(v5858, {
        at: './contracts/token-conversion.rsh:238:45:application',
        fs: [],
        msg: 'assume >= 0',
        who: 'closeTreasury'
        });
      const v5859 = v5853[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:238:45:application', stdlib.UInt_max, '1')];
      const v5860 = v5853[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:238:45:application', stdlib.UInt_max, '2')];
      const v5861 = [v5857, v5859, v5860];
      const v5862 = stdlib.Array_set(v3918, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:238:45:application', stdlib.UInt_max, '1'), v5861);
      ;
      const v5863 = v5862[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:239:19:application', stdlib.UInt_max, '0')];
      const v5864 = v5863[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:239:19:application', stdlib.UInt_max, '0')];
      const v5865 = stdlib.sub(v5864, v5864);
      const v5866 = stdlib.ge(v5865, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:239:45:application', stdlib.UInt_max, '0'));
      stdlib.assert(v5866, {
        at: './contracts/token-conversion.rsh:239:45:application',
        fs: [],
        msg: 'assume >= 0',
        who: 'closeTreasury'
        });
      ;
      return;
      
      break;
      }
    case 'convertToLarge0_192': {
      const v4072 = v3357[1];
      return;
      break;
      }
    case 'convertToSmall0_192': {
      const v4428 = v3357[1];
      return;
      break;
      }
    case 'withdraw0_192': {
      const v4784 = v3357[1];
      return;
      break;
      }
    }
  
  
  };
export async function _convertToLarge3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _convertToLarge3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _convertToLarge3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc6 = stdlib.T_Tuple([ctc2]);
  const ctc7 = stdlib.T_Tuple([ctc2, ctc2]);
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Data({
    addLiquidity0_192: ctc7,
    closeTreasury0_192: ctc8,
    convertToLarge0_192: ctc6,
    convertToSmall0_192: ctc6,
    withdraw0_192: ctc7
    });
  const ctc10 = stdlib.T_Null;
  
  
  const [v2994, v2996, v2997, v2998, v2999, v3053, v3054, v3066, v3067, v3068] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc1, ctc1, ctc2, ctc2, ctc5, ctc2, ctc2, ctc4, ctc2]);
  const v3163 = stdlib.protect(ctc6, await interact.in(), {
    at: './contracts/token-conversion.rsh:1:23:application',
    fs: ['at ./contracts/token-conversion.rsh:196:15:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:196:15:function exp)', 'at ./contracts/token-conversion.rsh:104:37:application call to "runconvertToLarge0_192" (defined at: ./contracts/token-conversion.rsh:194:9:function exp)', 'at ./contracts/token-conversion.rsh:104:37:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:104:37:function exp)'],
    msg: 'in',
    who: 'convertToLarge'
    });
  const v3164 = v3163[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v3169 = stdlib.gt(v3066, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:197:36:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v3169, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./contracts/token-conversion.rsh:197:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/token-conversion.rsh:196:15:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:196:15:function exp)', 'at ./contracts/token-conversion.rsh:196:15:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:196:15:function exp)', 'at ./contracts/token-conversion.rsh:104:37:application call to "runconvertToLarge0_192" (defined at: ./contracts/token-conversion.rsh:194:9:function exp)', 'at ./contracts/token-conversion.rsh:104:37:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:104:37:function exp)'],
    msg: 'Pool is empty',
    who: 'convertToLarge'
    });
  const v3171 = stdlib.gt(v3164, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:198:23:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v3171, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./contracts/token-conversion.rsh:198:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/token-conversion.rsh:196:15:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:196:15:function exp)', 'at ./contracts/token-conversion.rsh:196:15:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:196:15:function exp)', 'at ./contracts/token-conversion.rsh:104:37:application call to "runconvertToLarge0_192" (defined at: ./contracts/token-conversion.rsh:194:9:function exp)', 'at ./contracts/token-conversion.rsh:104:37:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:104:37:function exp)'],
    msg: 'Amount must be > 0',
    who: 'convertToLarge'
    });
  const v3176 = stdlib.sub(stdlib.UInt_max, v3068);
  const v3177 = stdlib.le(v3164, v3176);
  stdlib.assert(v3177, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./contracts/token-conversion.rsh:199:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/token-conversion.rsh:196:15:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:196:15:function exp)', 'at ./contracts/token-conversion.rsh:196:15:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:196:15:function exp)', 'at ./contracts/token-conversion.rsh:104:37:application call to "runconvertToLarge0_192" (defined at: ./contracts/token-conversion.rsh:194:9:function exp)', 'at ./contracts/token-conversion.rsh:104:37:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:104:37:function exp)'],
    msg: 'Pool is at capacity',
    who: 'convertToLarge'
    });
  const v3180 = stdlib.div(v3164, v2998);
  const v3181 = stdlib.mul(v3180, v2999);
  const v3185 = stdlib.gt(v3066, v3181);
  stdlib.assert(v3185, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./contracts/token-conversion.rsh:203:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/token-conversion.rsh:196:15:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:196:15:function exp)', 'at ./contracts/token-conversion.rsh:196:15:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:196:15:function exp)', 'at ./contracts/token-conversion.rsh:104:37:application call to "runconvertToLarge0_192" (defined at: ./contracts/token-conversion.rsh:194:9:function exp)', 'at ./contracts/token-conversion.rsh:104:37:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:104:37:function exp)'],
    msg: 'Insufficient Pool Balance',
    who: 'convertToLarge'
    });
  const v3190 = ['convertToLarge0_192', v3163];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2994, v2996, v2997, v2998, v2999, v3053, v3054, v3066, v3067, v3068, v3190],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:207:17:decimal', stdlib.UInt_max, '0'), [[v3164, v2996], [stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:207:41:decimal', stdlib.UInt_max, '0'), v2997]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v3357], secs: v3359, time: v3358, didSend: v2170, from: v3356 } = txn1;
      
      switch (v3357[0]) {
        case 'addLiquidity0_192': {
          const v3360 = v3357[1];
          
          break;
          }
        case 'closeTreasury0_192': {
          const v3716 = v3357[1];
          
          break;
          }
        case 'convertToLarge0_192': {
          const v4072 = v3357[1];
          sim_r.txns.push({
            kind: 'api',
            who: "convertToLarge"
            });
          const v4115 = v4072[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:194:9:spread', stdlib.UInt_max, '0')];
          ;
          const v4189 = stdlib.add(v3068, v4115);
          const v4196 = v3067[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '1')];
          const v4197 = v3067[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '2')];
          const v4198 = [v4189, v4196, v4197];
          const v4199 = stdlib.Array_set(v3053, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '0'), v4198);
          sim_r.txns.push({
            amt: v4115,
            kind: 'to',
            tok: v2996
            });
          const v4200 = v4199[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '1')];
          const v4201 = v4200[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '0')];
          const v4209 = v4200[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '1')];
          const v4210 = v4200[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '2')];
          const v4211 = [v4201, v4209, v4210];
          const v4212 = stdlib.Array_set(v4199, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '1'), v4211);
          ;
          const v4287 = stdlib.div(v4115, v2998);
          const v4288 = stdlib.mul(v4287, v2999);
          const v4290 = v4212[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:213:22:application', stdlib.UInt_max, '1')];
          const v4291 = v4290[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:213:22:application', stdlib.UInt_max, '0')];
          const v4299 = stdlib.sub(v4291, v4288);
          const v4305 = v4290[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:215:41:application', stdlib.UInt_max, '1')];
          const v4306 = v4290[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:215:41:application', stdlib.UInt_max, '2')];
          const v4307 = [v4299, v4305, v4306];
          const v4308 = stdlib.Array_set(v4212, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:215:41:application', stdlib.UInt_max, '1'), v4307);
          sim_r.txns.push({
            kind: 'from',
            to: v3356,
            tok: v2997
            });
          const v4309 = null;
          const v4310 = await txn1.getOutput('convertToLarge', 'v4309', ctc10, v4309);
          
          const v4316 = v4308[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:98:14:application', stdlib.UInt_max, '0')];
          const v4317 = v4316[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:98:14:application', stdlib.UInt_max, '0')];
          const v4318 = v4308[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:100:14:application', stdlib.UInt_max, '1')];
          const v4319 = v4318[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:100:14:application', stdlib.UInt_max, '0')];
          null;
          const v5979 = v4308;
          const v5980 = v3054;
          sim_r.isHalt = false;
          
          break;
          }
        case 'convertToSmall0_192': {
          const v4428 = v3357[1];
          
          break;
          }
        case 'withdraw0_192': {
          const v4784 = v3357[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc2, ctc2, ctc5, ctc2, ctc2, ctc4, ctc2, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v3357], secs: v3359, time: v3358, didSend: v2170, from: v3356 } = txn1;
  switch (v3357[0]) {
    case 'addLiquidity0_192': {
      const v3360 = v3357[1];
      return;
      break;
      }
    case 'closeTreasury0_192': {
      const v3716 = v3357[1];
      return;
      break;
      }
    case 'convertToLarge0_192': {
      const v4072 = v3357[1];
      undefined /* setApiDetails */;
      const v4115 = v4072[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:194:9:spread', stdlib.UInt_max, '0')];
      const v4119 = stdlib.sub(stdlib.UInt_max, v3068);
      const v4120 = stdlib.le(v4115, v4119);
      stdlib.assert(v4120, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./contracts/token-conversion.rsh:206:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/token-conversion.rsh:205:15:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:205:15:function exp)', 'at ./contracts/token-conversion.rsh:104:37:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:205:15:function exp)', 'at ./contracts/token-conversion.rsh:104:37:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:104:37:function exp)', 'at ./contracts/token-conversion.rsh:114:14:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:114:14:function exp)'],
        msg: 'Pool is at capacity',
        who: 'convertToLarge'
        });
      const v4183 = stdlib.le(v3054, stdlib.UInt_max);
      stdlib.assert(v4183, {
        at: './contracts/token-conversion.rsh:104:37:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'convertToLarge'
        });
      ;
      const v4189 = stdlib.add(v3068, v4115);
      const v4190 = stdlib.le(v4189, stdlib.UInt_max);
      stdlib.assert(v4190, {
        at: './contracts/token-conversion.rsh:104:37:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'convertToLarge'
        });
      const v4196 = v3067[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '1')];
      const v4197 = v3067[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '2')];
      const v4198 = [v4189, v4196, v4197];
      const v4199 = stdlib.Array_set(v3053, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '0'), v4198);
      ;
      const v4200 = v4199[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '1')];
      const v4201 = v4200[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '0')];
      const v4203 = stdlib.le(v4201, stdlib.UInt_max);
      stdlib.assert(v4203, {
        at: './contracts/token-conversion.rsh:104:37:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'convertToLarge'
        });
      const v4209 = v4200[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '1')];
      const v4210 = v4200[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '2')];
      const v4211 = [v4201, v4209, v4210];
      const v4212 = stdlib.Array_set(v4199, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '1'), v4211);
      ;
      const v4284 = stdlib.gt(v4115, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:210:26:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v4284, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./contracts/token-conversion.rsh:210:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/token-conversion.rsh:209:26:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:209:26:function exp)'],
        msg: 'Invalid amount',
        who: 'convertToLarge'
        });
      const v4287 = stdlib.div(v4115, v2998);
      const v4288 = stdlib.mul(v4287, v2999);
      const v4290 = v4212[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:213:22:application', stdlib.UInt_max, '1')];
      const v4291 = v4290[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:213:22:application', stdlib.UInt_max, '0')];
      const v4292 = stdlib.gt(v4291, v4288);
      stdlib.assert(v4292, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./contracts/token-conversion.rsh:213:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/token-conversion.rsh:209:26:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:209:26:function exp)'],
        msg: 'Insufficient Pool Balance',
        who: 'convertToLarge'
        });
      const v4299 = stdlib.sub(v4291, v4288);
      const v4300 = stdlib.ge(v4299, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:215:41:application', stdlib.UInt_max, '0'));
      stdlib.assert(v4300, {
        at: './contracts/token-conversion.rsh:215:41:application',
        fs: ['at ./contracts/token-conversion.rsh:209:26:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:209:26:function exp)'],
        msg: 'assume >= 0',
        who: 'convertToLarge'
        });
      const v4305 = v4290[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:215:41:application', stdlib.UInt_max, '1')];
      const v4306 = v4290[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:215:41:application', stdlib.UInt_max, '2')];
      const v4307 = [v4299, v4305, v4306];
      const v4308 = stdlib.Array_set(v4212, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:215:41:application', stdlib.UInt_max, '1'), v4307);
      ;
      const v4309 = null;
      const v4310 = await txn1.getOutput('convertToLarge', 'v4309', ctc10, v4309);
      if (v2170) {
        stdlib.protect(ctc10, await interact.out(v4072, v4310), {
          at: './contracts/token-conversion.rsh:195:7:application',
          fs: ['at ./contracts/token-conversion.rsh:195:7:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:195:7:function exp)', 'at ./contracts/token-conversion.rsh:216:15:application call to "notify" (defined at: ./contracts/token-conversion.rsh:209:26:function exp)', 'at ./contracts/token-conversion.rsh:209:26:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:209:26:function exp)'],
          msg: 'out',
          who: 'convertToLarge'
          });
        }
      else {
        }
      
      const v4316 = v4308[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:98:14:application', stdlib.UInt_max, '0')];
      const v4317 = v4316[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:98:14:application', stdlib.UInt_max, '0')];
      const v4318 = v4308[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:100:14:application', stdlib.UInt_max, '1')];
      const v4319 = v4318[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:100:14:application', stdlib.UInt_max, '0')];
      null;
      const v5979 = v4308;
      const v5980 = v3054;
      return;
      
      break;
      }
    case 'convertToSmall0_192': {
      const v4428 = v3357[1];
      return;
      break;
      }
    case 'withdraw0_192': {
      const v4784 = v3357[1];
      return;
      break;
      }
    }
  
  
  };
export async function _convertToSmall3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _convertToSmall3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _convertToSmall3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc6 = stdlib.T_Tuple([ctc2]);
  const ctc7 = stdlib.T_Tuple([ctc2, ctc2]);
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Data({
    addLiquidity0_192: ctc7,
    closeTreasury0_192: ctc8,
    convertToLarge0_192: ctc6,
    convertToSmall0_192: ctc6,
    withdraw0_192: ctc7
    });
  const ctc10 = stdlib.T_Null;
  
  
  const [v2994, v2996, v2997, v2998, v2999, v3053, v3054, v3066, v3067, v3068] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc1, ctc1, ctc2, ctc2, ctc5, ctc2, ctc2, ctc4, ctc2]);
  const v3130 = stdlib.protect(ctc6, await interact.in(), {
    at: './contracts/token-conversion.rsh:1:23:application',
    fs: ['at ./contracts/token-conversion.rsh:167:15:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:167:15:function exp)', 'at ./contracts/token-conversion.rsh:104:37:application call to "runconvertToSmall0_192" (defined at: ./contracts/token-conversion.rsh:165:9:function exp)', 'at ./contracts/token-conversion.rsh:104:37:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:104:37:function exp)'],
    msg: 'in',
    who: 'convertToSmall'
    });
  const v3131 = v3130[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v3136 = stdlib.gt(v3068, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:168:36:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v3136, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./contracts/token-conversion.rsh:168:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/token-conversion.rsh:167:15:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:167:15:function exp)', 'at ./contracts/token-conversion.rsh:167:15:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:167:15:function exp)', 'at ./contracts/token-conversion.rsh:104:37:application call to "runconvertToSmall0_192" (defined at: ./contracts/token-conversion.rsh:165:9:function exp)', 'at ./contracts/token-conversion.rsh:104:37:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:104:37:function exp)'],
    msg: 'Pool is empty',
    who: 'convertToSmall'
    });
  const v3138 = stdlib.gt(v3131, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:169:23:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v3138, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./contracts/token-conversion.rsh:169:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/token-conversion.rsh:167:15:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:167:15:function exp)', 'at ./contracts/token-conversion.rsh:167:15:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:167:15:function exp)', 'at ./contracts/token-conversion.rsh:104:37:application call to "runconvertToSmall0_192" (defined at: ./contracts/token-conversion.rsh:165:9:function exp)', 'at ./contracts/token-conversion.rsh:104:37:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:104:37:function exp)'],
    msg: 'Amount must be > 0',
    who: 'convertToSmall'
    });
  const v3143 = stdlib.sub(stdlib.UInt_max, v3066);
  const v3144 = stdlib.lt(v3131, v3143);
  stdlib.assert(v3144, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./contracts/token-conversion.rsh:170:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/token-conversion.rsh:167:15:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:167:15:function exp)', 'at ./contracts/token-conversion.rsh:167:15:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:167:15:function exp)', 'at ./contracts/token-conversion.rsh:104:37:application call to "runconvertToSmall0_192" (defined at: ./contracts/token-conversion.rsh:165:9:function exp)', 'at ./contracts/token-conversion.rsh:104:37:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:104:37:function exp)'],
    msg: 'Pool is at capacity',
    who: 'convertToSmall'
    });
  const v3146 = stdlib.eq(v2999, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:92:41:decimal', stdlib.UInt_max, '0'));
  const v3147 = v3146 ? stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:92:45:decimal', stdlib.UInt_max, '1') : v2999;
  const v3149 = stdlib.div(v3131, v3147);
  const v3150 = stdlib.mul(v3149, v2998);
  const v3154 = stdlib.gt(v3068, v3150);
  stdlib.assert(v3154, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./contracts/token-conversion.rsh:174:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/token-conversion.rsh:167:15:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:167:15:function exp)', 'at ./contracts/token-conversion.rsh:167:15:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:167:15:function exp)', 'at ./contracts/token-conversion.rsh:104:37:application call to "runconvertToSmall0_192" (defined at: ./contracts/token-conversion.rsh:165:9:function exp)', 'at ./contracts/token-conversion.rsh:104:37:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:104:37:function exp)'],
    msg: 'Insufficient Pool Balance',
    who: 'convertToSmall'
    });
  const v3159 = ['convertToSmall0_192', v3130];
  
  const v3305 = stdlib.le(v3131, v3143);
  stdlib.assert(v3305, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./contracts/token-conversion.rsh:177:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/token-conversion.rsh:176:13:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:176:13:function exp)', 'at ./contracts/token-conversion.rsh:104:37:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:176:13:function exp)', 'at ./contracts/token-conversion.rsh:104:37:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:104:37:function exp)', 'at ./contracts/token-conversion.rsh:114:14:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:114:14:function exp)'],
    msg: 'Pool is at capacity',
    who: 'convertToSmall'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v2994, v2996, v2997, v2998, v2999, v3053, v3054, v3066, v3067, v3068, v3159],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:178:17:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:178:21:decimal', stdlib.UInt_max, '0'), v2996], [v3131, v2997]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v3357], secs: v3359, time: v3358, didSend: v2170, from: v3356 } = txn1;
      
      switch (v3357[0]) {
        case 'addLiquidity0_192': {
          const v3360 = v3357[1];
          
          break;
          }
        case 'closeTreasury0_192': {
          const v3716 = v3357[1];
          
          break;
          }
        case 'convertToLarge0_192': {
          const v4072 = v3357[1];
          
          break;
          }
        case 'convertToSmall0_192': {
          const v4428 = v3357[1];
          sim_r.txns.push({
            kind: 'api',
            who: "convertToSmall"
            });
          const v4488 = v4428[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:165:9:spread', stdlib.UInt_max, '0')];
          ;
          const v4552 = v3067[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '1')];
          const v4553 = v3067[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '2')];
          const v4554 = [v3068, v4552, v4553];
          const v4555 = stdlib.Array_set(v3053, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '0'), v4554);
          ;
          const v4556 = v4555[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '1')];
          const v4557 = v4556[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '0')];
          const v4558 = stdlib.add(v4557, v4488);
          const v4565 = v4556[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '1')];
          const v4566 = v4556[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '2')];
          const v4567 = [v4558, v4565, v4566];
          const v4568 = stdlib.Array_set(v4555, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '1'), v4567);
          sim_r.txns.push({
            amt: v4488,
            kind: 'to',
            tok: v2997
            });
          const v4684 = stdlib.eq(v2999, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:92:41:decimal', stdlib.UInt_max, '0'));
          const v4685 = v4684 ? stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:92:45:decimal', stdlib.UInt_max, '1') : v2999;
          const v4687 = stdlib.div(v4488, v4685);
          const v4688 = stdlib.mul(v4687, v2998);
          const v4690 = v4568[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:185:22:application', stdlib.UInt_max, '0')];
          const v4691 = v4690[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:185:22:application', stdlib.UInt_max, '0')];
          const v4699 = stdlib.sub(v4691, v4688);
          const v4705 = v4690[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:187:41:application', stdlib.UInt_max, '1')];
          const v4706 = v4690[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:187:41:application', stdlib.UInt_max, '2')];
          const v4707 = [v4699, v4705, v4706];
          const v4708 = stdlib.Array_set(v4568, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:187:41:application', stdlib.UInt_max, '0'), v4707);
          sim_r.txns.push({
            kind: 'from',
            to: v3356,
            tok: v2996
            });
          const v4709 = null;
          const v4710 = await txn1.getOutput('convertToSmall', 'v4709', ctc10, v4709);
          
          const v4716 = v4708[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:98:14:application', stdlib.UInt_max, '0')];
          const v4717 = v4716[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:98:14:application', stdlib.UInt_max, '0')];
          const v4718 = v4708[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:100:14:application', stdlib.UInt_max, '1')];
          const v4719 = v4718[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:100:14:application', stdlib.UInt_max, '0')];
          null;
          const v6111 = v4708;
          const v6112 = v3054;
          sim_r.isHalt = false;
          
          break;
          }
        case 'withdraw0_192': {
          const v4784 = v3357[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc2, ctc2, ctc5, ctc2, ctc2, ctc4, ctc2, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v3357], secs: v3359, time: v3358, didSend: v2170, from: v3356 } = txn1;
  switch (v3357[0]) {
    case 'addLiquidity0_192': {
      const v3360 = v3357[1];
      return;
      break;
      }
    case 'closeTreasury0_192': {
      const v3716 = v3357[1];
      return;
      break;
      }
    case 'convertToLarge0_192': {
      const v4072 = v3357[1];
      return;
      break;
      }
    case 'convertToSmall0_192': {
      const v4428 = v3357[1];
      undefined /* setApiDetails */;
      const v4488 = v4428[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:165:9:spread', stdlib.UInt_max, '0')];
      const v4492 = stdlib.sub(stdlib.UInt_max, v3066);
      const v4493 = stdlib.le(v4488, v4492);
      stdlib.assert(v4493, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./contracts/token-conversion.rsh:177:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/token-conversion.rsh:176:13:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:176:13:function exp)', 'at ./contracts/token-conversion.rsh:104:37:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:176:13:function exp)', 'at ./contracts/token-conversion.rsh:104:37:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:104:37:function exp)', 'at ./contracts/token-conversion.rsh:114:14:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:114:14:function exp)'],
        msg: 'Pool is at capacity',
        who: 'convertToSmall'
        });
      const v4539 = stdlib.le(v3054, stdlib.UInt_max);
      stdlib.assert(v4539, {
        at: './contracts/token-conversion.rsh:104:37:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'convertToSmall'
        });
      ;
      const v4546 = stdlib.le(v3068, stdlib.UInt_max);
      stdlib.assert(v4546, {
        at: './contracts/token-conversion.rsh:104:37:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'convertToSmall'
        });
      const v4552 = v3067[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '1')];
      const v4553 = v3067[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '2')];
      const v4554 = [v3068, v4552, v4553];
      const v4555 = stdlib.Array_set(v3053, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '0'), v4554);
      ;
      const v4556 = v4555[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '1')];
      const v4557 = v4556[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '0')];
      const v4558 = stdlib.add(v4557, v4488);
      const v4559 = stdlib.le(v4558, stdlib.UInt_max);
      stdlib.assert(v4559, {
        at: './contracts/token-conversion.rsh:104:37:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'convertToSmall'
        });
      const v4565 = v4556[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '1')];
      const v4566 = v4556[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '2')];
      const v4567 = [v4558, v4565, v4566];
      const v4568 = stdlib.Array_set(v4555, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '1'), v4567);
      ;
      const v4682 = stdlib.gt(v4488, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:182:26:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v4682, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./contracts/token-conversion.rsh:182:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/token-conversion.rsh:180:26:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:180:26:function exp)'],
        msg: 'Invalid amount',
        who: 'convertToSmall'
        });
      const v4684 = stdlib.eq(v2999, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:92:41:decimal', stdlib.UInt_max, '0'));
      const v4685 = v4684 ? stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:92:45:decimal', stdlib.UInt_max, '1') : v2999;
      const v4687 = stdlib.div(v4488, v4685);
      const v4688 = stdlib.mul(v4687, v2998);
      const v4690 = v4568[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:185:22:application', stdlib.UInt_max, '0')];
      const v4691 = v4690[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:185:22:application', stdlib.UInt_max, '0')];
      const v4692 = stdlib.gt(v4691, v4688);
      stdlib.assert(v4692, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./contracts/token-conversion.rsh:185:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/token-conversion.rsh:180:26:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:180:26:function exp)'],
        msg: 'Insufficient Pool Balance',
        who: 'convertToSmall'
        });
      const v4699 = stdlib.sub(v4691, v4688);
      const v4700 = stdlib.ge(v4699, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:187:41:application', stdlib.UInt_max, '0'));
      stdlib.assert(v4700, {
        at: './contracts/token-conversion.rsh:187:41:application',
        fs: ['at ./contracts/token-conversion.rsh:180:26:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:180:26:function exp)'],
        msg: 'assume >= 0',
        who: 'convertToSmall'
        });
      const v4705 = v4690[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:187:41:application', stdlib.UInt_max, '1')];
      const v4706 = v4690[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:187:41:application', stdlib.UInt_max, '2')];
      const v4707 = [v4699, v4705, v4706];
      const v4708 = stdlib.Array_set(v4568, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:187:41:application', stdlib.UInt_max, '0'), v4707);
      ;
      const v4709 = null;
      const v4710 = await txn1.getOutput('convertToSmall', 'v4709', ctc10, v4709);
      if (v2170) {
        stdlib.protect(ctc10, await interact.out(v4428, v4710), {
          at: './contracts/token-conversion.rsh:166:7:application',
          fs: ['at ./contracts/token-conversion.rsh:166:7:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:166:7:function exp)', 'at ./contracts/token-conversion.rsh:188:15:application call to "notify" (defined at: ./contracts/token-conversion.rsh:180:26:function exp)', 'at ./contracts/token-conversion.rsh:180:26:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:180:26:function exp)'],
          msg: 'out',
          who: 'convertToSmall'
          });
        }
      else {
        }
      
      const v4716 = v4708[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:98:14:application', stdlib.UInt_max, '0')];
      const v4717 = v4716[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:98:14:application', stdlib.UInt_max, '0')];
      const v4718 = v4708[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:100:14:application', stdlib.UInt_max, '1')];
      const v4719 = v4718[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:100:14:application', stdlib.UInt_max, '0')];
      null;
      const v6111 = v4708;
      const v6112 = v3054;
      return;
      
      break;
      }
    case 'withdraw0_192': {
      const v4784 = v3357[1];
      return;
      break;
      }
    }
  
  
  };
export async function _withdraw3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _withdraw3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _withdraw3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc6 = stdlib.T_Tuple([ctc2, ctc2]);
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc2]);
  const ctc9 = stdlib.T_Data({
    addLiquidity0_192: ctc6,
    closeTreasury0_192: ctc7,
    convertToLarge0_192: ctc8,
    convertToSmall0_192: ctc8,
    withdraw0_192: ctc6
    });
  const ctc10 = stdlib.T_Null;
  
  
  const [v2994, v2996, v2997, v2998, v2999, v3053, v3054, v3066, v3067, v3068] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc1, ctc1, ctc2, ctc2, ctc5, ctc2, ctc2, ctc4, ctc2]);
  const v3070 = ctc.selfAddress();
  const v3072 = stdlib.protect(ctc6, await interact.in(), {
    at: './contracts/token-conversion.rsh:1:23:application',
    fs: ['at ./contracts/token-conversion.rsh:118:22:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:118:22:function exp)', 'at ./contracts/token-conversion.rsh:104:37:application call to "runwithdraw0_192" (defined at: ./contracts/token-conversion.rsh:116:9:function exp)', 'at ./contracts/token-conversion.rsh:104:37:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:104:37:function exp)'],
    msg: 'in',
    who: 'withdraw'
    });
  const v3073 = v3072[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v3074 = v3072[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v3078 = stdlib.addressEq(v3070, v2994);
  stdlib.assert(v3078, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./contracts/token-conversion.rsh:119:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/token-conversion.rsh:118:22:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:118:22:function exp)', 'at ./contracts/token-conversion.rsh:118:22:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:118:22:function exp)', 'at ./contracts/token-conversion.rsh:104:37:application call to "runwithdraw0_192" (defined at: ./contracts/token-conversion.rsh:116:9:function exp)', 'at ./contracts/token-conversion.rsh:104:37:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:104:37:function exp)'],
    msg: 'Unauthorized user',
    who: 'withdraw'
    });
  const v3080 = stdlib.gt(v3073, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:120:23:decimal', stdlib.UInt_max, '0'));
  const v3081 = stdlib.gt(v3074, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:120:36:decimal', stdlib.UInt_max, '0'));
  const v3082 = v3080 ? true : v3081;
  stdlib.assert(v3082, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./contracts/token-conversion.rsh:120:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/token-conversion.rsh:118:22:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:118:22:function exp)', 'at ./contracts/token-conversion.rsh:118:22:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:118:22:function exp)', 'at ./contracts/token-conversion.rsh:104:37:application call to "runwithdraw0_192" (defined at: ./contracts/token-conversion.rsh:116:9:function exp)', 'at ./contracts/token-conversion.rsh:104:37:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:104:37:function exp)'],
    msg: 'Can\'t withdraw 0',
    who: 'withdraw'
    });
  const v3086 = stdlib.le(v3073, v3068);
  stdlib.assert(v3086, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./contracts/token-conversion.rsh:121:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/token-conversion.rsh:118:22:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:118:22:function exp)', 'at ./contracts/token-conversion.rsh:118:22:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:118:22:function exp)', 'at ./contracts/token-conversion.rsh:104:37:application call to "runwithdraw0_192" (defined at: ./contracts/token-conversion.rsh:116:9:function exp)', 'at ./contracts/token-conversion.rsh:104:37:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:104:37:function exp)'],
    msg: 'Invalid small withdrawal amount',
    who: 'withdraw'
    });
  const v3090 = stdlib.le(v3074, v3066);
  stdlib.assert(v3090, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./contracts/token-conversion.rsh:122:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/token-conversion.rsh:118:22:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:118:22:function exp)', 'at ./contracts/token-conversion.rsh:118:22:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:118:22:function exp)', 'at ./contracts/token-conversion.rsh:104:37:application call to "runwithdraw0_192" (defined at: ./contracts/token-conversion.rsh:116:9:function exp)', 'at ./contracts/token-conversion.rsh:104:37:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:104:37:function exp)'],
    msg: 'Invalid large withdrawal amount',
    who: 'withdraw'
    });
  const v3096 = ['withdraw0_192', v3072];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2994, v2996, v2997, v2998, v2999, v3053, v3054, v3066, v3067, v3068, v3096],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:124:18:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:124:22:decimal', stdlib.UInt_max, '0'), v2996], [stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:124:38:decimal', stdlib.UInt_max, '0'), v2997]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v3357], secs: v3359, time: v3358, didSend: v2170, from: v3356 } = txn1;
      
      switch (v3357[0]) {
        case 'addLiquidity0_192': {
          const v3360 = v3357[1];
          
          break;
          }
        case 'closeTreasury0_192': {
          const v3716 = v3357[1];
          
          break;
          }
        case 'convertToLarge0_192': {
          const v4072 = v3357[1];
          
          break;
          }
        case 'convertToSmall0_192': {
          const v4428 = v3357[1];
          
          break;
          }
        case 'withdraw0_192': {
          const v4784 = v3357[1];
          sim_r.txns.push({
            kind: 'api',
            who: "withdraw"
            });
          ;
          const v4908 = v3067[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '1')];
          const v4909 = v3067[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '2')];
          const v4910 = [v3068, v4908, v4909];
          const v4911 = stdlib.Array_set(v3053, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '0'), v4910);
          ;
          const v4912 = v4911[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '1')];
          const v4913 = v4912[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '0')];
          const v4921 = v4912[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '1')];
          const v4922 = v4912[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '2')];
          const v4923 = [v4913, v4921, v4922];
          const v4924 = stdlib.Array_set(v4911, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '1'), v4923);
          ;
          const v5078 = v4784[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:116:9:spread', stdlib.UInt_max, '0')];
          const v5079 = v4784[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:116:9:spread', stdlib.UInt_max, '1')];
          const v5086 = v4924[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:128:31:application', stdlib.UInt_max, '0')];
          const v5087 = v5086[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:128:31:application', stdlib.UInt_max, '0')];
          const v5099 = stdlib.sub(v5087, v5078);
          const v5105 = v5086[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:131:38:application', stdlib.UInt_max, '1')];
          const v5106 = v5086[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:131:38:application', stdlib.UInt_max, '2')];
          const v5107 = [v5099, v5105, v5106];
          const v5108 = stdlib.Array_set(v4924, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:131:38:application', stdlib.UInt_max, '0'), v5107);
          sim_r.txns.push({
            kind: 'from',
            to: v3356,
            tok: v2996
            });
          const v5109 = v5108[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:132:38:application', stdlib.UInt_max, '1')];
          const v5110 = v5109[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:132:38:application', stdlib.UInt_max, '0')];
          const v5114 = stdlib.sub(v5110, v5079);
          const v5120 = v5109[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:132:38:application', stdlib.UInt_max, '1')];
          const v5121 = v5109[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:132:38:application', stdlib.UInt_max, '2')];
          const v5122 = [v5114, v5120, v5121];
          const v5123 = stdlib.Array_set(v5108, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:132:38:application', stdlib.UInt_max, '1'), v5122);
          sim_r.txns.push({
            kind: 'from',
            to: v3356,
            tok: v2997
            });
          const v5124 = null;
          const v5125 = await txn1.getOutput('withdraw', 'v5124', ctc10, v5124);
          
          const v5132 = v5123[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:135:24:application', stdlib.UInt_max, '0')];
          const v5133 = v5132[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:135:24:application', stdlib.UInt_max, '0')];
          const v5134 = stdlib.gt(v5133, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:135:38:decimal', stdlib.UInt_max, '0'));
          const v5135 = v5123[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:135:50:application', stdlib.UInt_max, '1')];
          const v5136 = v5135[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:135:50:application', stdlib.UInt_max, '0')];
          const v5137 = stdlib.gt(v5136, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:135:64:decimal', stdlib.UInt_max, '0'));
          const v5138 = v5134 ? v5137 : false;
          const v6243 = v5123;
          const v6244 = v3054;
          if (v5138) {
            sim_r.isHalt = false;
            }
          else {
            const v6253 = stdlib.sub(v5136, v5136);
            const v6255 = v5135[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:238:45:application', stdlib.UInt_max, '1')];
            const v6256 = v5135[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:238:45:application', stdlib.UInt_max, '2')];
            const v6257 = [v6253, v6255, v6256];
            const v6258 = stdlib.Array_set(v5123, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:238:45:application', stdlib.UInt_max, '1'), v6257);
            sim_r.txns.push({
              kind: 'from',
              to: v2994,
              tok: v2997
              });
            const v6259 = v6258[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:239:19:application', stdlib.UInt_max, '0')];
            const v6260 = v6259[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:239:19:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v2994,
              tok: v2996
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v2997
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: v2996
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc2, ctc2, ctc5, ctc2, ctc2, ctc4, ctc2, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v3357], secs: v3359, time: v3358, didSend: v2170, from: v3356 } = txn1;
  switch (v3357[0]) {
    case 'addLiquidity0_192': {
      const v3360 = v3357[1];
      return;
      break;
      }
    case 'closeTreasury0_192': {
      const v3716 = v3357[1];
      return;
      break;
      }
    case 'convertToLarge0_192': {
      const v4072 = v3357[1];
      return;
      break;
      }
    case 'convertToSmall0_192': {
      const v4428 = v3357[1];
      return;
      break;
      }
    case 'withdraw0_192': {
      const v4784 = v3357[1];
      undefined /* setApiDetails */;
      const v4895 = stdlib.le(v3054, stdlib.UInt_max);
      stdlib.assert(v4895, {
        at: './contracts/token-conversion.rsh:104:37:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'withdraw'
        });
      ;
      const v4902 = stdlib.le(v3068, stdlib.UInt_max);
      stdlib.assert(v4902, {
        at: './contracts/token-conversion.rsh:104:37:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'withdraw'
        });
      const v4908 = v3067[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '1')];
      const v4909 = v3067[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '2')];
      const v4910 = [v3068, v4908, v4909];
      const v4911 = stdlib.Array_set(v3053, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '0'), v4910);
      ;
      const v4912 = v4911[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '1')];
      const v4913 = v4912[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '0')];
      const v4915 = stdlib.le(v4913, stdlib.UInt_max);
      stdlib.assert(v4915, {
        at: './contracts/token-conversion.rsh:104:37:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'withdraw'
        });
      const v4921 = v4912[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '1')];
      const v4922 = v4912[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '2')];
      const v4923 = [v4913, v4921, v4922];
      const v4924 = stdlib.Array_set(v4911, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:104:37:dot', stdlib.UInt_max, '1'), v4923);
      ;
      const v5078 = v4784[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:116:9:spread', stdlib.UInt_max, '0')];
      const v5079 = v4784[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:116:9:spread', stdlib.UInt_max, '1')];
      const v5080 = stdlib.addressEq(v3356, v2994);
      stdlib.assert(v5080, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./contracts/token-conversion.rsh:126:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/token-conversion.rsh:125:30:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:125:30:function exp)'],
        msg: 'Unauthorized user',
        who: 'withdraw'
        });
      const v5082 = stdlib.gt(v5078, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:127:23:decimal', stdlib.UInt_max, '0'));
      const v5083 = stdlib.gt(v5079, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:127:36:decimal', stdlib.UInt_max, '0'));
      const v5084 = v5082 ? true : v5083;
      stdlib.assert(v5084, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./contracts/token-conversion.rsh:127:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/token-conversion.rsh:125:30:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:125:30:function exp)'],
        msg: 'Can\'t withdraw 0',
        who: 'withdraw'
        });
      const v5086 = v4924[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:128:31:application', stdlib.UInt_max, '0')];
      const v5087 = v5086[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:128:31:application', stdlib.UInt_max, '0')];
      const v5088 = stdlib.le(v5078, v5087);
      stdlib.assert(v5088, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./contracts/token-conversion.rsh:128:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/token-conversion.rsh:125:30:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:125:30:function exp)'],
        msg: 'Invalid small withdrawal amount',
        who: 'withdraw'
        });
      const v5090 = v4924[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:129:31:application', stdlib.UInt_max, '1')];
      const v5091 = v5090[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:129:31:application', stdlib.UInt_max, '0')];
      const v5092 = stdlib.le(v5079, v5091);
      stdlib.assert(v5092, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./contracts/token-conversion.rsh:129:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/token-conversion.rsh:125:30:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:125:30:function exp)'],
        msg: 'Invalid large withdrawal amount',
        who: 'withdraw'
        });
      const v5099 = stdlib.sub(v5087, v5078);
      const v5100 = stdlib.ge(v5099, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:131:38:application', stdlib.UInt_max, '0'));
      stdlib.assert(v5100, {
        at: './contracts/token-conversion.rsh:131:38:application',
        fs: ['at ./contracts/token-conversion.rsh:125:30:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:125:30:function exp)'],
        msg: 'assume >= 0',
        who: 'withdraw'
        });
      const v5105 = v5086[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:131:38:application', stdlib.UInt_max, '1')];
      const v5106 = v5086[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:131:38:application', stdlib.UInt_max, '2')];
      const v5107 = [v5099, v5105, v5106];
      const v5108 = stdlib.Array_set(v4924, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:131:38:application', stdlib.UInt_max, '0'), v5107);
      ;
      const v5109 = v5108[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:132:38:application', stdlib.UInt_max, '1')];
      const v5110 = v5109[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:132:38:application', stdlib.UInt_max, '0')];
      const v5114 = stdlib.sub(v5110, v5079);
      const v5115 = stdlib.ge(v5114, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:132:38:application', stdlib.UInt_max, '0'));
      stdlib.assert(v5115, {
        at: './contracts/token-conversion.rsh:132:38:application',
        fs: ['at ./contracts/token-conversion.rsh:125:30:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:125:30:function exp)'],
        msg: 'assume >= 0',
        who: 'withdraw'
        });
      const v5120 = v5109[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:132:38:application', stdlib.UInt_max, '1')];
      const v5121 = v5109[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:132:38:application', stdlib.UInt_max, '2')];
      const v5122 = [v5114, v5120, v5121];
      const v5123 = stdlib.Array_set(v5108, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:132:38:application', stdlib.UInt_max, '1'), v5122);
      ;
      const v5124 = null;
      const v5125 = await txn1.getOutput('withdraw', 'v5124', ctc10, v5124);
      if (v2170) {
        stdlib.protect(ctc10, await interact.out(v4784, v5125), {
          at: './contracts/token-conversion.rsh:117:7:application',
          fs: ['at ./contracts/token-conversion.rsh:117:7:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:117:7:function exp)', 'at ./contracts/token-conversion.rsh:133:15:application call to "notify" (defined at: ./contracts/token-conversion.rsh:125:30:function exp)', 'at ./contracts/token-conversion.rsh:125:30:application call to [unknown function] (defined at: ./contracts/token-conversion.rsh:125:30:function exp)'],
          msg: 'out',
          who: 'withdraw'
          });
        }
      else {
        }
      
      const v5132 = v5123[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:135:24:application', stdlib.UInt_max, '0')];
      const v5133 = v5132[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:135:24:application', stdlib.UInt_max, '0')];
      const v5134 = stdlib.gt(v5133, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:135:38:decimal', stdlib.UInt_max, '0'));
      const v5135 = v5123[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:135:50:application', stdlib.UInt_max, '1')];
      const v5136 = v5135[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:135:50:application', stdlib.UInt_max, '0')];
      const v5137 = stdlib.gt(v5136, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:135:64:decimal', stdlib.UInt_max, '0'));
      const v5138 = v5134 ? v5137 : false;
      const v6243 = v5123;
      const v6244 = v3054;
      if (v5138) {
        return;
        }
      else {
        const v6253 = stdlib.sub(v5136, v5136);
        const v6254 = stdlib.ge(v6253, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:238:45:application', stdlib.UInt_max, '0'));
        stdlib.assert(v6254, {
          at: './contracts/token-conversion.rsh:238:45:application',
          fs: [],
          msg: 'assume >= 0',
          who: 'withdraw'
          });
        const v6255 = v5135[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:238:45:application', stdlib.UInt_max, '1')];
        const v6256 = v5135[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:238:45:application', stdlib.UInt_max, '2')];
        const v6257 = [v6253, v6255, v6256];
        const v6258 = stdlib.Array_set(v5123, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:238:45:application', stdlib.UInt_max, '1'), v6257);
        ;
        const v6259 = v6258[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:239:19:application', stdlib.UInt_max, '0')];
        const v6260 = v6259[stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:239:19:application', stdlib.UInt_max, '0')];
        const v6261 = stdlib.sub(v6260, v6260);
        const v6262 = stdlib.ge(v6261, stdlib.checkedBigNumberify('./contracts/token-conversion.rsh:239:45:application', stdlib.UInt_max, '0'));
        stdlib.assert(v6262, {
          at: './contracts/token-conversion.rsh:239:45:application',
          fs: [],
          msg: 'assume >= 0',
          who: 'withdraw'
          });
        ;
        return;
        }
      break;
      }
    }
  
  
  };
export async function addLiquidity(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for addLiquidity expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for addLiquidity expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _addLiquidity3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function closeTreasury(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for closeTreasury expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for closeTreasury expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _closeTreasury3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function convertToLarge(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for convertToLarge expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for convertToLarge expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _convertToLarge3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function convertToSmall(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for convertToSmall expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for convertToSmall expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _convertToSmall3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function withdraw(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for withdraw expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for withdraw expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _withdraw3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`addLiquidity(uint64,uint64)byte[0]`, `closeTreasury()byte[0]`, `convertToLarge(uint64)byte[0]`, `convertToSmall(uint64)byte[0]`, `withdraw(uint64,uint64)byte[0]`],
    pure: [`balances()(uint64,uint64)`, `info()(uint64,uint64,uint64,uint64,address)`],
    sigs: [`addLiquidity(uint64,uint64)byte[0]`, `balances()(uint64,uint64)`, `closeTreasury()byte[0]`, `convertToLarge(uint64)byte[0]`, `convertToSmall(uint64)byte[0]`, `info()(uint64,uint64,uint64,uint64,address)`, `withdraw(uint64,uint64)byte[0]`]
    },
  appApproval: `BiAQAP///////////wEEAQgDAqCNBq6Y0OgH6ou0mg/doM79D5eR06wN6InU5AXUuIGQBhAgJgQAAQABAQRG9ebHIjUAMRhBCUUoZEkiWzUBIQRbNQI2GgAXSUEA7iI1BCU1BkkhCAxAAJNJIQkMQABPSSEKDEAAFiEKEkQ2GgE2GgJQNf+AAQQ0/1BCANUhCRJENAEhBRJEKWQqZFBJNQNXIAg0A1coCFA0A1c4CFA0A1cwCFA0A1cAIFA1B0IIxkkhCwxAACAhCxJENAEhBRJEKWQqZFBJNQNXagg0A1eDCFA1B0IInyEIEkQ2GgE1/4ABAjT/UCEEr1BCAGZJIQwMQAAvSSENDEAAEiENEkQoNf8qNP9QIQ6vUEIARiEMEkQ2GgE1/4ABAzT/UCEEr1BCADCBj5C0wQQSRDYaATYaAlA1/yk0/1BCABg2GgIXNQQ2GgM2GgEXSSEGDEAFbCEGEkQhBTQBEkQ0BEkiEkw0AhIRRClkKmRQSTUDSUpKSkpXACA1/yEPWzX+gShbNf2BMFs1/IE4WzX7V0AiNfqBYls1+YFqWzX4V3IRNfeBgwFbNfZJNQU19YAEioos3DT1ULA09SJVSSEGDEADPkkhBQxAAjpJJAxAATQkEkQ09VcBEDX0NPkjDkQ09iMORDT2FjT3VwgIUDT3VxABUDT6VxERUDXzNPNXERFJNfIiW0k18SMORDTzVwARNPEWNPJXCAhQNPJXEAFQUDXwNPQiWzXvNPQhBFs17jEANP8SRDTvIg007iINEUQ08FcAEUk17SJbNew07zTsDkQ07jTwVxERIlsORDTsNO8JSTXrIg9ENOsWNO1XCAhQNO1XEAFQNPBXERFQNeqxIrIBNO+yEiSyEDEAshQ0/rIRszTqVxERSTXpIls07glJNegiD0Q06lcAETToFjTpVwgIUDTpVxABUFA157EisgE07rISJLIQMQCyFDT9shGzgAgAAAAAAAAUBLAoNQc0/zT+NP00/DT7NOdXABEiWyINNOdXEREiWyINEDIGNOc0+UIFNUg09VcBCDX0NPQXSTXzIzT4CQ5ENPkjDkQ09iMORDT2FjT3VwgIUDT3VxABUDT6VxERUDXyNPJXERFJNfEiWzTzCEk18CMORDTyVwARNPAWNPFXCAhQNPFXEAFQUDXvNPM0/YgGTzTzIg1ENPM0+yU0+yISTQo0/As17jTvVwARSTXtIltJNew07g1ENOw07glJNesiD0Q06xY07VcICFA07VcQAVA071cREVA16rEisgE07rISJLIQMQCyFDT+shGzgAgAAAAAAAASZbAoNQcrNOpXABFXAAhQNP4WUDTqVxERVwAIUDT9FlCwNP80/jT9NPw0+yUyBjTqNPlCBDVINPVXAQg19DT0F0k18yM09gkORDT5Iw5ENPY08whJNfIjDkQ08hY091cICFA091cQAVA0+lcREVA18TTzNP6IBXM08VcREUk18CJbSTXvIw5ENPFXABE07xY08FcICFA08FcQAVBQNe408yINRDTzNPwKNPsLNe007lcREUk17CJbSTXrNO0NRDTrNO0JSTXqIg9ENO5XABE06hY07FcICFA07FcQAVBQNemxIrIBNO2yEiSyEDEAshQ0/bIRs4AIAAAAAAAAENWwKDUHKzTpVwARVwAIUDT+FlA06VcREVcACFA0/RZQsDT/NP40/TT8NPslMgY06TT5QgM4SSUMQADtSDT5Iw5ENPYjDkQ09hY091cICFA091cQAVA0+lcREVA19DT0VxERSTXzIltJNfIjDkQ09FcAETTyFjTzVwgIUDTzVxABUFA18TEANP8SRDTxVxERSTXwIltJNe9JCUk17iIPRDTxVwARNO4WNPBXCAhQNPBXEAFQUDXtsSKyATTvshIkshA0/7IUNP2yEbM07VcAEUk17CJbSTXrSQlJNeoiD0SxIrIBNOuyEiSyEDT/shQ0/rIRs4AIAAAAAAAAD0+wKDUHNP80/jT9NPw0+yIyBjTqFjTsVwgIUDTsVxABUDTtVxERUDT5QgJFSDT1VwEQNfQ09CJbNfM09CEEWzXyNPMiDTTyIg0RRDTzIzT2CQ5ENPIjNPgJDkQ0+SMORDT2NPMISTXxIw5ENPEWNPdXCAhQNPdXEAFQNPpXERFQNfA08zT+iANoNPBXERFJNe8iWzTyCEk17iMORDTwVwARNO4WNO9XCAhQNO9XEAFQUDXtNPI0/YgDN4AIAAAAAAAADbmwKDUHKzTtVwARVwAIUDT+FlA07VcREVcACFA0/RZQsDT/NP40/TT8NPslMgY07TT5QgF5IhJEIQeIAtkiNAESRDQESSISTDQCEhFESTUFSUpJIls1/yEEWzX+IQ5bNf2BGFs1/CEPWzX7gARNfgcnNP8WUDT+FlA0/RZQNPwWUDT7FlCwgRGvSTX6SVA1+TT+NP0TRDT5VwARNfghBK80+FcICFA0+FcQAVA0+VcREVA19yEHiAJdsSKyASKyEiSyEDIKshQ0/rIRszT3VxERNfYhB4gCPrEisgEishIkshAyCrIUNP2yEbMjIQYKNfU0+zT1DEQ0/CUPQQAKNPw09Qw19EIAAyI19DT0RIAFYXBwSUQ0/xZQAzXyMgp4NfEyCmA08QkWNfCxIrIBgQayEDT/shiABOYDM6KyGjEYFrIaNP4Wsho0/RayGjT8FrIaszIKYDTxCTTwFwkWtwA+VwQAUDXzgAgAAAAAAAAL3DTzULA080k18iJbSTXxIw5EIjTxEkQxADT+NP00/DT7JTIGNPdXABEhBK809lcICFA09lcQAVBQNPFCAAA1/zX+Nf01/DX7Nfo1+TX4Nfc0/EEAUzT+VxERIls19jT+VwARSTX1Ils19DT3NPgWUDT5FlA0+hZQNPsWUDT+UDT/FlA09hZQNPVQNPQWUClLAVcAf2cqSwFXfwxnSCEFNQEyBjUCQgCsNP5XERFJNfYiW0k19UkJSTX0Ig9EsSKyATT1shIkshA097IUNPmyEbM0/lcAETT0FjT2VwgIUDT2VxABUFBXABEiW0k180kJIg9EsSKyATTzshIkshA097IUNPiyEbOxIrIBIrISJLIQMgmyFTIKshQ0+bIRs7EisgEishIkshAyCbIVMgqyFDT4shGzQgAAMRmBBRJEsSKyASKyCCWyEDIJsgkyCrIHs0IABTEZIhJEKDQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJJQgyBBJEMRYSRCVDMRkiEkRC/98iMTQSRCEFMTUSRCIxNhJEIjE3EkQiNQEiNQJC/640AElKJQg1ADgHMgoSRDgQJRJEOAgSRIk0AElKSSUINQA4FDIKEkQ4ECQSRDgRTwISRDgSEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 1,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 139,
  unsupported: [],
  version: 10,
  warnings: [`Step 0 calls a remote object at /app/contracts/token-conversion.rsh:89:31:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`]
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
            "components": [
              {
                "internalType": "address payable",
                "name": "v2995",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v2996",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v2997",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v2998",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v2999",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T10",
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
            "components": [
              {
                "internalType": "address payable",
                "name": "v2995",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v2996",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v2997",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v2998",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v2999",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
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
                    "internalType": "enum _enum_T14",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem1",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T11",
                    "name": "_addLiquidity0_192",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_closeTreasury0_192",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T13",
                    "name": "_convertToLarge0_192",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T13",
                    "name": "_convertToSmall0_192",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem1",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T11",
                    "name": "_withdraw0_192",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T14",
                "name": "v3357",
                "type": "tuple"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
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
        "components": [
          {
            "internalType": "uint256",
            "name": "elem0",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "elem1",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v3036",
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
    "name": "_reach_oe_v3513",
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
    "name": "_reach_oe_v3919",
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
    "name": "_reach_oe_v4309",
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
    "name": "_reach_oe_v4709",
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
    "name": "_reach_oe_v5124",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v0",
        "type": "uint256"
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
        "internalType": "address payable",
        "name": "v3",
        "type": "address"
      }
    ],
    "name": "balanceUpdated",
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
                    "internalType": "enum _enum_T14",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem1",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T11",
                    "name": "_addLiquidity0_192",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_closeTreasury0_192",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T13",
                    "name": "_convertToLarge0_192",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T13",
                    "name": "_convertToSmall0_192",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem1",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T11",
                    "name": "_withdraw0_192",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T14",
                "name": "v3357",
                "type": "tuple"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T16",
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
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_a1",
        "type": "uint256"
      }
    ],
    "name": "addLiquidity",
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
    "inputs": [],
    "name": "balances",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "largeBal",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "smallBal",
            "type": "uint256"
          }
        ],
        "internalType": "struct T0",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "closeTreasury",
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
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "convertToLarge",
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
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "convertToSmall",
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
    "inputs": [],
    "name": "info",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address payable",
            "name": "smallUnit",
            "type": "address"
          },
          {
            "internalType": "address payable",
            "name": "largeUnit",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "largeDecs",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "conversion",
            "type": "uint256"
          },
          {
            "internalType": "address payable",
            "name": "admin",
            "type": "address"
          }
        ],
        "internalType": "struct T4",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_a1",
        "type": "uint256"
      }
    ],
    "name": "withdraw",
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
  Bytecode: `0x608060405260405162003b9838038062003b98833981016040819052620000269162000db3565b600080554360035562000038620009e7565b6040805133815283516020808301919091528085015180516001600160a01b0390811684860152918101518216606080850191909152818501519092166080808501919091529181015160a0840152015160c082015290517f139102968877d4670a85e6fc64b11a457d3eab67421789108be2bc5e1dec2fbb9181900360e00190a1805160009081905281516020908101829052825160409081019290925282518184018051919091528351905182015283810151918201519101516200011f916001600160a01b039182169116146200011457600162000117565b60005b600962000506565b60408181018051600090819052602080850180515182015184519092019190915280515184015183519015159401939093529151905162000161929062000531565b6060820190815260808201805160009052815160209081015181015182518201529151909101516040908101519151911515910152620001a43415600a62000506565b620001b3600260001962000e8d565b60a08201819052602083015160800151620001d19111600b62000506565b600182602001516060015110620001fc5760a08101516020830151606001511060c082015262000204565b600060c08201525b60c08101516200021690600c62000506565b620002376200023483602001516020015130620005b460201b60201c565b90565b6101408201526020820151604001516200025790620002349030620005b4565b61018082015247610120820152602082810180518083015160408083015160609093015181513060248201526001600160a01b03938416604482015293831660648501526084808501919091528151808503909101815260a4909301815293820180516001600160e01b0316636ab38ab760e01b1790529151519251909260009283929116908290620002ec90869062000eb0565b60006040518083038185875af1925050503d80600081146200032b576040519150601f19603f3d011682016040523d82523d6000602084013e62000330565b606091505b509092509050620003448282600f6200068e565b506200036e6200036386602001516020015130620005b460201b60201c565b610140860151900390565b6101608501819052620003849015600d62000506565b620003ad620003a286602001516040015130620005b460201b60201c565b610180860151900390565b6101a08501819052620003c39015600e62000506565b620003da478561012001516200068960201b60201c565b60e0850180519190915251610100850181905260408051825181526020928301511515928101929092527f46829996b7025b7a1d98498f8401dd71d9c5c4e8975af181c545fada125eb7119450019150620004329050565b60405180910390a1620004486001601062000506565b610100810151516200045d9015601162000506565b6200046762000af0565b80513390526020808401805182015183516001600160a01b0391821690840152815160409081015185519216910152805160609081015184518201529051608090810151845182015282840180516001908190529051439401939093529084015190840151620004d8929062000531565b6020820180516040019190915261010083015151905160600152620004fd81620006d4565b50505062001099565b816200052d5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b6200053b62000b35565b60005b600281101562000591578481600281106200055d576200055d62000e77565b602002015182826002811062000577576200057762000e77565b602002015280620005888162000eee565b9150506200053e565b5081818460028110620005a857620005a862000e77565b60200201529392505050565b604080516001600160a01b0383811660248084019190915283518084039091018152604490920183526020820180516001600160e01b03166370a0823160e01b179052915160009283928392918716918391620006119162000eb0565b60006040518083038185875af1925050503d806000811462000650576040519150601f19603f3d011682016040523d82523d6000602084013e62000655565b606091505b50909250905062000669828260066200068e565b508080602001905181019062000680919062000f18565b95945050505050565b900390565b606083156200069f575081620006cd565b825115620006b05782518084602001fd5b60405163100960cb60e01b81526004810183905260240162000524565b9392505050565b620006de62000b82565b60208201515115620007bc57620006f462000bbb565b8251516001600160a01b0390811682528351602090810151821681840152845160409081015190921682840152845160609081015181850152855160809081015190850152818601805184015160a086015280519091015160c085015280518301518201515160e08501528051830151516101008501525182015151516101208401526003600055436001559051620007909183910162000f79565b60405160208183030381529060405260029080519060200190620007b692919062000c56565b50505050565b602082810151604001519081015151620007de9160015b602002015151900390565b8152620007ee6001601262000506565b805160208083018051929092528381018051604090810151830151830151845184015281518101519092015182015192519215159282019290925283518082015190519251909101516200084c929060015b602002015151620008f1565b620008a760006200089d62000876856020015160400151600186602001516200053160201b60201c565b5151602086810151604001519086015162000895919060019062000531565b6000620007d3565b1015601362000506565b81516020808201519151818501516040015191840151620008d99392620008d19160019062000531565b600062000840565b600080805560018190556200052d9060029062000ce5565b620008fe8383836200090d565b6200090857600080fd5b505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b1790529151600092839283929188169183916200096e9162000eb0565b60006040518083038185875af1925050503d8060008114620009ad576040519150601f19603f3d011682016040523d82523d6000602084013e620009b2565b606091505b509092509050620009c6828260026200068e565b5080806020019051810190620009dd919062001038565b9695505050505050565b60408051610220810190915260006101c082018181526101e0830182905261020083019190915281526020810162000a1e62000b35565b8152604080516060810182526000808252602082810182905292820152910190815260200162000a4d62000b35565b815260408051606081018252600080825260208281018290529282015291019081526020016000815260200160001515815260200162000aa26040518060400160405280600081526020016000151581525090565b815260200162000ac76040518060400160405280600081526020016000151581525090565b815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040805160e0810182526000918101828152606082018390526080820183905260a0820183905260c08201929092529081526020810162000b3062000d27565b905290565b60405180604001604052806002905b62000b6b604051806060016040528060008152602001600081526020016000151581525090565b81526020019060019003908162000b445790505090565b60405180604001604052806000815260200162000b30604051806060016040528060008152602001600081526020016000151581525090565b60405180610140016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200162000c0f62000b35565b8152602001600081526020016000815260200162000c49604051806060016040528060008152602001600081526020016000151581525090565b8152602001600081525090565b82805462000c64906200105c565b90600052602060002090601f01602090048101928262000c88576000855562000cd3565b82601f1062000ca357805160ff191683800117855562000cd3565b8280016001018555821562000cd3579182015b8281111562000cd357825182559160200191906001019062000cb6565b5062000ce192915062000d48565b5090565b50805462000cf3906200105c565b6000825580601f1062000d04575050565b601f01602090049060005260206000209081019062000d24919062000d48565b50565b604080516080810182526000808252602082015290810162000c4962000b35565b5b8082111562000ce1576000815560010162000d49565b60405160a081016001600160401b038111828210171562000d9057634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b038116811462000dae57600080fd5b919050565b600081830360c081121562000dc757600080fd5b604080519081016001600160401b038111828210171562000df857634e487b7160e01b600052604160045260246000fd5b6040528351815260a0601f198301121562000e1257600080fd5b62000e1c62000d5f565b915062000e2c6020850162000d96565b825262000e3c6040850162000d96565b602083015262000e4f6060850162000d96565b6040830152608084810151606084015260a09094015193820193909352602083015250919050565b634e487b7160e01b600052603260045260246000fd5b60008262000eab57634e487b7160e01b600052601260045260246000fd5b500490565b6000825160005b8181101562000ed3576020818601810151858301520162000eb7565b8181111562000ee3576000828501525b509190910192915050565b600060001982141562000f1157634e487b7160e01b600052601160045260246000fd5b5060010190565b60006020828403121562000f2b57600080fd5b5051919050565b8060005b6002811015620007b65762000f6284835180518252602080820151908301526040908101511515910152565b606093909301926020919091019060010162000f36565b81516001600160a01b031681526102208101602083015162000fa660208401826001600160a01b03169052565b50604083015162000fc260408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015162000feb60a084018262000f32565b5060c083015161016083015260e083015161018083015261010083015180516101a084015260208101516101c08401526040015115156101e0830152610120909201516102009091015290565b6000602082840312156200104b57600080fd5b81518015158114620006cd57600080fd5b600181811c908216806200107157607f821691505b602082108114156200109357634e487b7160e01b600052602260045260246000fd5b50919050565b612aef80620010a96000396000f3fe60806040526004361061009a5760003560e01c806357f4455e1161006157806357f4455e146101705780637bb98a681461018357806383230757146101a55780639cd441da146101ba578063ab53f2c6146101cd578063eda52c61146101f057005b806310a1bf8e146100a35780631e93b0f1146100b6578063370158ea146100da578063441a3e701461013a5780634c6762931461015d57005b366100a157005b005b6100a16100b13660046123a8565b6101f8565b3480156100c257600080fd5b506003545b6040519081526020015b60405180910390f35b3480156100e657600080fd5b506100ef61021c565b6040516100d1919081516001600160a01b0390811682526020808401518216908301526040808401519083015260608084015190830152608092830151169181019190915260a00190565b61014d6101483660046123c1565b610389565b60405190151581526020016100d1565b61014d61016b3660046123e3565b6103d4565b61014d61017e3660046123e3565b61040f565b34801561018f57600080fd5b5061019861044a565b6040516100d191906123fc565b3480156101b157600080fd5b506001546100c7565b61014d6101c83660046123c1565b610552565b3480156101d957600080fd5b506101e2610595565b6040516100d192919061243f565b61014d610632565b610200611c7c565b610218610212368490038401846125a2565b82610662565b5050565b6040805160a081018252600080825260208201819052918101829052606081018290526080810182905290546003141561037a5760006002805461025f90612667565b80601f016020809104026020016040519081016040528092919081815260200182805461028b90612667565b80156102d85780601f106102ad576101008083540402835291602001916102d8565b820191906000526020600020905b8154815290600101906020018083116102bb57829003601f168201915b50505050508060200190518101906102f09190612796565b90506103276040805160c081018252600060208201818152928201819052606082018190526080820181905260a082015290815290565b60208083015182516001600160a01b039182169052604080850151845190831693019290925260808085015184519093019290925260608085015184519091015292518251931692019190915251919050565b610386600060086117e4565b90565b6000610393611caf565b60208181018051516004905280515160a0908101518790529051510151018390526103bc611c7c565b6103c68282610662565b608001519150505b92915050565b60006103de611caf565b60208101805151600290525151606001518390526103fa611c7c565b6104048282610662565b604001519392505050565b6000610419611caf565b6020810180515160039052515160800151839052610435611c7c565b61043f8282610662565b606001519392505050565b6040805180820190915260008082526020820152600360005414156105465760006002805461047890612667565b80601f01602080910402602001604051908101604052809291908181526020018280546104a490612667565b80156104f15780601f106104c6576101008083540402835291602001916104f1565b820191906000526020600020905b8154815290600101906020018083116104d457829003601f168201915b50505050508060200190518101906105099190612796565b905061052b604080516060810182526000602082018181529282015290815290565b60e08201518151526101209091015181516020015251919050565b610386600060076117e4565b600061055c611caf565b602081810180515160009052805151820151869052515181015101839052610582611c7c565b61058c8282610662565b51949350505050565b6000606060005460028080546105aa90612667565b80601f01602080910402602001604051908101604052809291908181526020018280546105d690612667565b80156106235780601f106105f857610100808354040283529160200191610623565b820191906000526020600020905b81548152906001019060200180831161060657829003601f168201915b50505050509050915091509091565b600061063c611caf565b6020810151516001905261064e611c7c565b6106588282610662565b6020015192915050565b61067260036000541460466117e4565b815161068d90158061068657508251600154145b60476117e4565b60008080556002805461069f90612667565b80601f01602080910402602001604051908101604052809291908181526020018280546106cb90612667565b80156107185780601f106106ed57610100808354040283529160200191610718565b820191906000526020600020905b8154815290600101906020018083116106fb57829003601f168201915b50505050508060200190518101906107309190612796565b905061073a611cc9565b7fc4cf4ac29f5b7a1b9340974ecb54955be3b6e4c4c228bdc8a39100a27fa96017338560405161076b929190612858565b60405180910390a1600060208501515151600481111561078d5761078d612842565b1415610a3457602080850151510151808252516107bf906107b55781516020015115156107b8565b60015b60146117e4565b6101208201516107d69019825151111560156117e4565b60e08201516107ef9019825160200151111560166117e4565b6107fb600160176117e4565b610807341560186117e4565b610120820151815151016020820152610822600160196117e4565b6020808201516040808401805192909252610100850180518401518351909401939093529151820151815190151592019190915260a0830151905161086a919060009061180a565b6060820152602082015181515161088e916108879133919061187e565b601a6117e4565b6060810151602090810151518251909101510160808201526108b26001601b6117e4565b608081015160a0820180519190915260608201805160209081015181015183518201528151015160409081015183519015159101525190516108f7919060019061180a565b60c0820152604082015181516020015161091e916109179133919061187e565b601c6117e4565b604051600081527f3b2074874d41615876e1e2c6a9f998e9dd97d6e68b35b963f9318bfaa467006c9060200160405180910390a16000835260c081015180515160208401517fb9167d2c8b85613c3d5df6004fac6a3f9f68b899fe346ac0c52fd464796ed76a92600160200201515160408087015190516109a2949392919061290f565b60405180910390a16109b26120b6565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518451931692810192909252606080860151845182015260808087015185519091015281840180516001905280514393019290925260c08086015183519094019390935291850151905190910152610a2e81611896565b506117de565b6001602085015151516004811115610a4e57610a4e612842565b1415610d5a57610a606001601d6117e4565b610a6c3415601e6117e4565b610a786001601f6117e4565b61012082015160e082018051919091526101008301805160209081015183519091015251604090810151825190151591015260a08301519051610abe919060009061180a565b816101000181905250610ae1610ada338460200151600061187e565b60206117e4565b610aed600160216117e4565b6101008101805160209081015151610120840180519190915282518201518201518151830152825190910151604090810151825190151591015290519051610b38919060019061180a565b816101400181905250610b5b610b54338460400151600061187e565b60226117e4565b8151610b73906001600160a01b0316331460236117e4565b610140810151602081015151610b919160015b602002015151900390565b610160820152610ba3600160246117e4565b6101608101516101808201805191909152610140820180516020908101518101518351820152815101516040908101518351901515910152519051610beb919060019061180a565b6101a082015260408201518251610140830151610c1292919060015b602002015151611a7d565b6101a0810151805151610c26916000610b86565b6101c0820152610c38600160256117e4565b6101c08101516101e082018051919091526101a08201805151602090810151835182015281515160409081015193519315159301929092529083015183519151610c8492906000610c07565b604051600081527f50e606f082c99550ae2bb56c37e2c3c569b78e519575750f6db0fdee6d5c103d9060200160405180910390a160006020840152610cc76120b6565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518451931692019190915260608085015183519091015260808085015183519091015280820180516000908190529051439201919091526101a08301516101e0840151610d39929061180a565b6020820180516040019190915260c0840151905160600152610a2e81611896565b6002602085015151516004811115610d7457610d74612842565b14156110bb5760208401515160600151610200820152610120820151610da5901961020083015151111560266117e4565b610db1600160276117e4565b610dbd341560286117e4565b6101208201516102008201515101610220820152610ddd600160296117e4565b61022081015161024082018051919091526101008301805160209081015183519091015251604090810151825190151591015260a08301519051610e24919060009061180a565b610260820152602082015161020082015151610e4d91610e469133919061187e565b602a6117e4565b610e596001602b6117e4565b6102608101805160209081015151610280840180519190915282518201518201518151830152825190910151604090810151825190151591015290519051610ea4919060019061180a565b816102a00181905250610ec7610ec0338460400151600061187e565b602c6117e4565b61020081015151610edb901515602d6117e4565b606082015161020082015151610efd91610ef491612936565b83608001510290565b6102c082018190526102a08201516020015151610f1c9110602e6117e4565b6102a081015160200151516102c082015190036102e0820152610f416001602f6117e4565b6102e081015161030082018051919091526102a0820180516020908101518101518351820152815101516040908101518351901515910152519051610f89919060019061180a565b816103200181905250610fa6826040015133836102c00151611a7d565b604051600081527f844d5f35a6e7cccad4f8497b4fec75dc124f403b4a72d3cf9121dfc8bd6b86fb9060200160405180910390a16000604084015261032081015180515160208401517fb9167d2c8b85613c3d5df6004fac6a3f9f68b899fe346ac0c52fd464796ed76a926001602002015151604080870151905161102e949392919061290f565b60405180910390a161103e6120b6565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518451931692810192909252606080860151845182015260808087015185519091015281840180516001905280514393019290925261032085015182519093019290925260c0850151905190910152610a2e81611896565b60036020850151515160048111156110d5576110d5612842565b1415611429576020840151516080015161034082015260e0820151611105901961034083015151111560306117e4565b611111600160316117e4565b61111d341560326117e4565b611129600160336117e4565b61012082015161036082018051919091526101008301805160209081015183519091015251604090810151825190151591015260a08301519051611170919060009061180a565b81610380018190525061119361118c338460200151600061187e565b60346117e4565b610380810151602001515161034082015151016103a08201526111b8600160356117e4565b6103a08101516103c08201805191909152610380820180516020908101518101518351820152815101516040908101518351901515910152519051611200919060019061180a565b6103e0820152604082015161034082015151611229916112229133919061187e565b60366117e4565b6103408101515161123d90151560376117e4565b6112736000836080015114611256578260800151611259565b60015b6103408301515161126a9190612936565b83606001510290565b61040082018190526103e0820151515161128f911060386117e4565b6103e0810151515161040082015190036104208201526112b1600160396117e4565b61042081015161044082018051919091526103e0820180515160209081015183519091015280515160409081015183519015159101525190516112f7919060009061180a565b816104600181905250611314826020015133836104000151611a7d565b604051600081527f646bd28dd448523b7a14d7854a7a3816dc8ce0c15606b82a2b6b9f429971430d9060200160405180910390a16000606084015261046081015180515160208401517fb9167d2c8b85613c3d5df6004fac6a3f9f68b899fe346ac0c52fd464796ed76a926001602002015151604080870151905161139c949392919061290f565b60405180910390a16113ac6120b6565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518451931692810192909252606080860151845182015260808087015185519091015281840180516001905280514393019290925261046085015182519093019290925260c0850151905190910152610a2e81611896565b600460208501515151600481111561144357611443612842565b14156117de5760208401515160a001516104808201526114656001603a6117e4565b6114713415603b6117e4565b61147d6001603c6117e4565b6101208201516104a082018051919091526101008301805160209081015183519091015251604090810151825190151591015260a083015190516114c4919060009061180a565b816104c001819052506114e76114e0338460200151600061187e565b603d6117e4565b6114f36001603e6117e4565b6104c081018051602090810151516104e084018051919091528251820151820151815183015282519091015160409081015182519015159101529051905161153e919060019061180a565b81610500018190525061156161155a338460400151600061187e565b603f6117e4565b8151611579906001600160a01b0316331460406117e4565b610480810151516115a49061159a576000826104800151602001511161159d565b60015b60416117e4565b6105008101515151610480820151516115c091101560426117e4565b6105008101516115e890600160200201516000015182610480015160200151111560436117e4565b610500810151515161048082015151900361052082015261160b600160446117e4565b610520810151610540820180519190915261050082018051516020908101518351909101528051516040908101518351901515910152519051611651919060009061180a565b61056082015260208201516104808201515161166f91903390611a7d565b6105608101516020908101515161048083015190910151900361058082015261169a600160456117e4565b6105808101516105a082018051919091526105608201805160209081015181015183518201528151015160409081015183519015159101525190516116e2919060019061180a565b816105c0018190525061170382604001513383610480015160200151611a7d565b604051600081527f05c49283690cb629248925f507204ec134e2f2600beadaceead8f3b0e0bd3c639060200160405180910390a1600060808401526117466120b6565b825181516001600160a01b0391821690526020808501518351908316910152604080850151835192169101526060808401518251909101526080808401518251909101526105c0820151515161179d5760006117ab565b6105c0820151602001515115155b602080830180519215159092528151439101526105c083015181516040015260c0840151905160600152610a2e81611896565b50505050565b816102185760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6118126120f4565b60005b600281101561185e57848160028110611830576118306128f9565b6020020151828260028110611847576118476128f9565b60200201528061185681612958565b915050611815565b5081818460028110611872576118726128f9565b60200201529392505050565b600061188c83853085611a96565b90505b9392505050565b61189e61213f565b6020820151511561196f576118b1612177565b8251516001600160a01b0390811682528351602090810151821681840152845160409081015190921682840152845160609081015181850152855160809081015190850152818601805184015160a086015280519091015160c085015280518301518201515160e0850152805183015151610100850152518201515151610120840152600360005543600155905161194b918391016129c5565b604051602081830303815290604052600290805190602001906117de92919061220f565b602082810151604001519081015151611989916001610b86565b8152611997600160126117e4565b805160208083018051929092528381018051604090810151830151830151845184015281518101519092015182015192519215159282019290925283518082015190519251909101516119ec92906001610c07565b611a396000611a30611a0c8560200151604001516001866020015161180a565b51516020868101516040015190860151611a29919060019061180a565b6000610b86565b101560136117e4565b81516020808201519151818501516040015191840151611a679392611a609160019061180a565b6000610c07565b6000808055600181905561021890600290612293565b611a88838383611b70565b611a9157600080fd5b505050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391611afd91612a80565b60006040518083038185875af1925050503d8060008114611b3a576040519150601f19603f3d011682016040523d82523d6000602084013e611b3f565b606091505b5091509150611b5082826001611c41565b5080806020019051810190611b659190612a9c565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391611bcf91612a80565b60006040518083038185875af1925050503d8060008114611c0c576040519150601f19603f3d011682016040523d82523d6000602084013e611c11565b606091505b5091509150611c2282826002611c41565b5080806020019051810190611c379190612a9c565b9695505050505050565b60608315611c5057508161188f565b825115611c605782518084602001fd5b60405163100960cb60e01b815260048101839052602401611801565b6040805160a08101825260008082526020820181905291810182905260608101829052608081019190915290565b905290565b604051806040016040528060008152602001611caa6122d0565b604080516106208101825260006105e082018181526106008301829052825260208083018290528351606080820186528382529181018390528085019290925292820152908101611d186120f4565b815260200160008152602001611d4a604051806060016040528060008152602001600081526020016000151581525090565b8152602001611d576120f4565b81526040805160608101825260008082526020828101829052928201529101908152602001611d846120f4565b81526040805160608101825260008082526020828101829052928201529101908152602001611db16120f4565b815260200160008152602001611de3604051806060016040528060008152602001600081526020016000151581525090565b8152602001611df06120f4565b815260200160008152602001611e22604051806060016040528060008152602001600081526020016000151581525090565b8152602001611e3d6040518060200160405280600081525090565b815260200160008152602001611e6f604051806060016040528060008152602001600081526020016000151581525090565b8152602001611e7c6120f4565b81526040805160608101825260008082526020828101829052928201529101908152602001611ea96120f4565b81526020016000815260200160008152602001611ee2604051806060016040528060008152602001600081526020016000151581525090565b8152602001611eef6120f4565b8152602001611f0a6040518060200160405280600081525090565b81526040805160608101825260008082526020828101829052928201529101908152602001611f376120f4565b815260200160008152602001611f69604051806060016040528060008152602001600081526020016000151581525090565b8152602001611f766120f4565b81526020016000815260200160008152602001611faf604051806060016040528060008152602001600081526020016000151581525090565b8152602001611fbc6120f4565b8152602001611fde604051806040016040528060008152602001600081525090565b8152604080516060810182526000808252602082810182905292820152910190815260200161200b6120f4565b815260408051606081018252600080825260208281018290529282015291019081526020016120386120f4565b81526020016000815260200161206a604051806060016040528060008152602001600081526020016000151581525090565b81526020016120776120f4565b8152602001600081526020016120a9604051806060016040528060008152602001600081526020016000151581525090565b8152602001611caa6120f4565b6040805160e0810182526000918101828152606082018390526080820183905260a0820183905260c082019290925290815260208101611caa6122e3565b60405180604001604052806002905b612129604051806060016040528060008152602001600081526020016000151581525090565b8152602001906001900390816121035790505090565b604051806040016040528060008152602001611caa604051806060016040528060008152602001600081526020016000151581525090565b60405180610140016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001600081526020016121c96120f4565b81526020016000815260200160008152602001612202604051806060016040528060008152602001600081526020016000151581525090565b8152602001600081525090565b82805461221b90612667565b90600052602060002090601f01602090048101928261223d5760008555612283565b82601f1061225657805160ff1916838001178555612283565b82800160010185558215612283579182015b82811115612283578251825591602001919060010190612268565b5061228f929150612302565b5090565b50805461229f90612667565b6000825580601f106122af575050565b601f0160209004906000526020600020908101906122cd9190612302565b50565b6040518060200160405280611caa612317565b60408051608081018252600080825260208201529081016122026120f4565b5b8082111561228f5760008155600101612303565b6040805160c081019091528060008152602001612347604051806040016040528060008152602001600081525090565b815260200160001515815260200161236b6040518060200160405280600081525090565b81526020016123866040518060200160405280600081525090565b8152602001611caa604051806040016040528060008152602001600081525090565b600061012082840312156123bb57600080fd5b50919050565b600080604083850312156123d457600080fd5b50508035926020909101359150565b6000602082840312156123f557600080fd5b5035919050565b8151815260208083015190820152604081016103ce565b60005b8381101561242e578181015183820152602001612416565b838111156117de5750506000910152565b8281526040602082015260008251806040840152612464816060850160208701612413565b601f01601f1916919091016060019392505050565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff811182821017156124b2576124b2612479565b60405290565b6040516020810167ffffffffffffffff811182821017156124b2576124b2612479565b60405160c0810167ffffffffffffffff811182821017156124b2576124b2612479565b604051610140810167ffffffffffffffff811182821017156124b2576124b2612479565b60006040828403121561253457600080fd5b61253c61248f565b9050813581526020820135602082015292915050565b80151581146122cd57600080fd5b60006020828403121561257257600080fd5b6040516020810181811067ffffffffffffffff8211171561259557612595612479565b6040529135825250919050565b60008183036101208112156125b657600080fd5b6125be61248f565b83358152610100601f19830112156125d557600080fd5b6125dd6124b8565b91506125e76124db565b6020850135600581106125f957600080fd5b81526126088660408701612522565b6020820152608085013561261b81612552565b604082015261262d8660a08701612560565b606082015261263f8660c08701612560565b60808201526126518660e08701612522565b60a0820152825260208101919091529392505050565b600181811c9082168061267b57607f821691505b602082108114156123bb57634e487b7160e01b600052602260045260246000fd5b80516001600160a01b03811681146126b357600080fd5b919050565b6000606082840312156126ca57600080fd5b6040516060810181811067ffffffffffffffff821117156126ed576126ed612479565b80604052508091508251815260208301516020820152604083015161271181612552565b6040919091015292915050565b600082601f83011261272f57600080fd5b6040516040810181811067ffffffffffffffff8211171561275257612752612479565b6040528060c084018581111561276757600080fd5b845b8181101561278b5761277b87826126b8565b8352602090920191606001612769565b509195945050505050565b600061022082840312156127a957600080fd5b6127b16124fe565b6127ba8361269c565b81526127c86020840161269c565b60208201526127d96040840161269c565b604082015260608301516060820152608083015160808201526127ff8460a0850161271e565b60a082015261016083015160c082015261018083015160e0820152612828846101a085016126b8565b610100820152610200929092015161012083015250919050565b634e487b7160e01b600052602160045260246000fd5b6001600160a01b03831681528151602080830191909152820151518051610140830191906005811061289a57634e487b7160e01b600052602160045260246000fd5b604084015260208181015180516060860152908101516080850152506040810151151560a084015260608101515160c08401526080810151805160e08501525060a0015180516101008401526020810151610120840152509392505050565b634e487b7160e01b600052603260045260246000fd5b9384526001600160a01b039283166020850152604084019190915216606082015260800190565b60008261295357634e487b7160e01b600052601260045260246000fd5b500490565b600060001982141561297a57634e487b7160e01b600052601160045260246000fd5b5060010190565b8060005b60028110156117de576129af84835180518252602080820151908301526040908101511515910152565b6060939093019260209190910190600101612985565b81516001600160a01b03168152610220810160208301516129f160208401826001600160a01b03169052565b506040830151612a0c60408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a0830151612a3360a0840182612981565b5060c083015161016083015260e083015161018083015261010083015180516101a084015260208101516101c08401526040015115156101e0830152610120909201516102009091015290565b60008251612a92818460208701612413565b9190910192915050565b600060208284031215612aae57600080fd5b815161188f8161255256fea264697066735822122068e16f9565cc757e9ecccd92b8763729d8ac76657347398d489d225e7dfd74d564736f6c634300080c0033`,
  BytecodeLen: 15256,
  Which: `oD`,
  version: 7,
  views: {
    balances: `balances`,
    info: `info`
    }
  };
export const _stateSourceMap = {
  2: {
    at: './contracts/token-conversion.rsh:240:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './contracts/token-conversion.rsh:104:37:after expr stmt semicolon',
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
  "Admin": Admin,
  "addLiquidity": addLiquidity,
  "closeTreasury": closeTreasury,
  "convertToLarge": convertToLarge,
  "convertToSmall": convertToSmall,
  "withdraw": withdraw
  };
export const _APIs = {
  addLiquidity: addLiquidity,
  closeTreasury: closeTreasury,
  convertToLarge: convertToLarge,
  convertToSmall: convertToSmall,
  withdraw: withdraw
  };
