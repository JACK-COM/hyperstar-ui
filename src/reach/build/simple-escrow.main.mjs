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
  return {
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
  const ctc6 = stdlib.T_Struct([['id', ctc1], ['amount', ctc2]]);
  const ctc7 = stdlib.T_Struct([['item', ctc6], ['exchangeFor', ctc6], ['purchaseFor', ctc2]]);
  
  return {
    infos: {
      details: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v976, v977, v978, v979, v980, v981, v998] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
            const [v976, v977, v978, v979, v980, v981, v1041, v1042] = svs;
            return (await ((async () => {
              
              const v1049 = {
                amount: v978,
                id: v977
                };
              const v1050 = {
                amount: v981,
                id: v980
                };
              const v1051 = {
                exchangeFor: v1050,
                item: v1049,
                purchaseFor: v979
                };
              
              return v1051;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc7
        }
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc2, ctc1, ctc2, ctc5],
      4: [ctc0, ctc1, ctc2, ctc2, ctc1, ctc2, ctc5, ctc2]
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
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Tuple([]);
  const ctc4 = stdlib.T_Data({
    buy0_221: ctc3,
    close0_221: ctc3,
    exchange0_221: ctc3
    });
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc0, ctc0, ctc6]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  
  
  const v949 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v950 = [v949, v949];
  const v954 = stdlib.protect(ctc0, interact.amount, 'for Admin\'s interact field amount');
  const v955 = stdlib.protect(ctc0, interact.buyNowPrice, 'for Admin\'s interact field buyNowPrice');
  const v956 = stdlib.protect(ctc1, interact.item, 'for Admin\'s interact field item');
  const v957 = stdlib.protect(ctc0, interact.wantsAmount, 'for Admin\'s interact field wantsAmount');
  const v958 = stdlib.protect(ctc1, interact.wantsItem, 'for Admin\'s interact field wantsItem');
  
  const v961 = stdlib.tokenEq(v956, v958);
  const v962 = v961 ? false : true;
  stdlib.assert(v962, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./contracts/simple-escrow.rsh:47:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/simple-escrow.rsh:38:13:application call to [unknown function] (defined at: ./contracts/simple-escrow.rsh:38:17:function exp)'],
    msg: 'Cannot trade gold for gold!',
    who: 'Admin'
    });
  const v964 = stdlib.gt(v954, stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:35:44:decimal', stdlib.UInt_max, '0'));
  const v965 = stdlib.lt(v954, stdlib.UInt_max);
  const v966 = v964 ? v965 : false;
  stdlib.assert(v966, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./contracts/simple-escrow.rsh:48:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/simple-escrow.rsh:38:13:application call to [unknown function] (defined at: ./contracts/simple-escrow.rsh:38:17:function exp)'],
    msg: 'invalid amount',
    who: 'Admin'
    });
  const v968 = stdlib.ge(v957, stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:36:40:decimal', stdlib.UInt_max, '0'));
  const v969 = stdlib.lt(v957, stdlib.UInt_max);
  const v970 = v968 ? v969 : false;
  stdlib.assert(v970, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./contracts/simple-escrow.rsh:49:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/simple-escrow.rsh:38:13:application call to [unknown function] (defined at: ./contracts/simple-escrow.rsh:38:17:function exp)'],
    msg: 'Invalid exchange amount',
    who: 'Admin'
    });
  const v972 = stdlib.ge(v955, stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:36:40:decimal', stdlib.UInt_max, '0'));
  const v973 = stdlib.lt(v955, stdlib.UInt_max);
  const v974 = v972 ? v973 : false;
  stdlib.assert(v974, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./contracts/simple-escrow.rsh:50:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/simple-escrow.rsh:38:13:application call to [unknown function] (defined at: ./contracts/simple-escrow.rsh:38:17:function exp)'],
    msg: 'invalid buy-now price',
    who: 'Admin'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v956, v954, v955, v958, v957],
    evt_cnt: 5,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:53:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc1, ctc0, ctc0, ctc1, ctc0],
    pay: [stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:53:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v977, v978, v979, v980, v981], secs: v983, time: v982, didSend: v112, from: v976 } = txn1;
      
      const v986 = v950[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:53:9:dot', stdlib.UInt_max, '0')];
      const v988 = v986[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:53:9:dot', stdlib.UInt_max, '1')];
      const v989 = v986[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:53:9:dot', stdlib.UInt_max, '2')];
      const v990 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v988, v989];
      const v991 = stdlib.Array_set(v950, stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:53:9:dot', stdlib.UInt_max, '0'), v990);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v977
        });
      const v993 = v991[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:53:9:dot', stdlib.UInt_max, '1')];
      const v995 = v993[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:53:9:dot', stdlib.UInt_max, '1')];
      const v996 = v993[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:53:9:dot', stdlib.UInt_max, '2')];
      const v997 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v995, v996];
      const v998 = stdlib.Array_set(v991, stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:53:9:dot', stdlib.UInt_max, '1'), v997);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v980
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc0, ctc0, ctc1, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v977, v978, v979, v980, v981], secs: v983, time: v982, didSend: v112, from: v976 } = txn1;
  const v984 = stdlib.tokenEq(v977, v980);
  const v985 = v984 ? false : true;
  stdlib.assert(v985, {
    at: './contracts/simple-escrow.rsh:53:9:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Admin'
    });
  const v986 = v950[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:53:9:dot', stdlib.UInt_max, '0')];
  const v988 = v986[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:53:9:dot', stdlib.UInt_max, '1')];
  const v989 = v986[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:53:9:dot', stdlib.UInt_max, '2')];
  const v990 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v988, v989];
  const v991 = stdlib.Array_set(v950, stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:53:9:dot', stdlib.UInt_max, '0'), v990);
  ;
  const v993 = v991[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:53:9:dot', stdlib.UInt_max, '1')];
  const v995 = v993[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:53:9:dot', stdlib.UInt_max, '1')];
  const v996 = v993[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:53:9:dot', stdlib.UInt_max, '2')];
  const v997 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v995, v996];
  const v998 = stdlib.Array_set(v991, stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:53:9:dot', stdlib.UInt_max, '1'), v997);
  ;
  ;
  const v1000 = stdlib.gt(v978, stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:35:44:decimal', stdlib.UInt_max, '0'));
  const v1001 = stdlib.lt(v978, stdlib.UInt_max);
  const v1002 = v1000 ? v1001 : false;
  stdlib.assert(v1002, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./contracts/simple-escrow.rsh:55:8:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'invalid amount',
    who: 'Admin'
    });
  const v1004 = stdlib.ge(v981, stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:36:40:decimal', stdlib.UInt_max, '0'));
  const v1005 = stdlib.lt(v981, stdlib.UInt_max);
  const v1006 = v1004 ? v1005 : false;
  stdlib.assert(v1006, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./contracts/simple-escrow.rsh:56:8:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'Invalid exchange amount',
    who: 'Admin'
    });
  const v1008 = stdlib.ge(v979, stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:36:40:decimal', stdlib.UInt_max, '0'));
  const v1009 = stdlib.lt(v979, stdlib.UInt_max);
  const v1010 = v1008 ? v1009 : false;
  stdlib.assert(v1010, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./contracts/simple-escrow.rsh:57:8:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'invalid buy-now price',
    who: 'Admin'
    });
  const txn2 = await (ctc.sendrecv({
    args: [v976, v977, v978, v979, v980, v981, v998],
    evt_cnt: 0,
    funcNum: 1,
    lct: v982,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:60:24:decimal', stdlib.UInt_max, '0'), [[v978, v977]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v1014, time: v1013, didSend: v180, from: v1012 } = txn2;
      
      ;
      const v1015 = v998[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:60:9:dot', stdlib.UInt_max, '0')];
      const v1016 = v1015[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:60:9:dot', stdlib.UInt_max, '0')];
      const v1017 = stdlib.add(v1016, v978);
      const v1024 = v1015[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:60:9:dot', stdlib.UInt_max, '1')];
      const v1025 = v1015[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:60:9:dot', stdlib.UInt_max, '2')];
      const v1026 = [v1017, v1024, v1025];
      const v1027 = stdlib.Array_set(v998, stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:60:9:dot', stdlib.UInt_max, '0'), v1026);
      sim_r.txns.push({
        amt: v978,
        kind: 'to',
        tok: v977
        });
      const v1032 = await ctc.getContractInfo();
      
      const v1034 = true;
      const v1035 = v1013;
      const v1041 = v1027;
      const v1042 = stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:33:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v1045 = v1041[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:97:33:application', stdlib.UInt_max, '0')];
        const v1046 = v1045[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:97:33:application', stdlib.UInt_max, '0')];
        const v1047 = stdlib.gt(v1046, stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:97:42:decimal', stdlib.UInt_max, '0'));
        const v1048 = v1034 ? v1047 : false;
        
        return v1048;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v1853 = stdlib.sub(v1042, v1042);
        sim_r.txns.push({
          kind: 'from',
          to: v976,
          tok: undefined /* Nothing */
          });
        const v1858 = (stdlib.le(await ctc.getBalance(), v1853) ? stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:121:29:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(), v1853));
        sim_r.txns.push({
          kind: 'from',
          to: v976,
          tok: undefined /* Nothing */
          });
        const v1867 = v1041[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:122:19:application', stdlib.UInt_max, '0')];
        const v1868 = v1867[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:122:19:application', stdlib.UInt_max, '0')];
        const v1874 = stdlib.sub(v1868, v1868);
        const v1880 = v1867[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:122:35:application', stdlib.UInt_max, '1')];
        const v1881 = v1867[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:122:35:application', stdlib.UInt_max, '2')];
        const v1882 = [v1874, v1880, v1881];
        const v1883 = stdlib.Array_set(v1041, stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:122:35:application', stdlib.UInt_max, '0'), v1882);
        sim_r.txns.push({
          kind: 'from',
          to: v976,
          tok: v977
          });
        const v1884 = v1883[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:123:19:application', stdlib.UInt_max, '1')];
        const v1885 = v1884[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:123:19:application', stdlib.UInt_max, '0')];
        sim_r.txns.push({
          kind: 'from',
          to: v976,
          tok: v980
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v980
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: v977
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
    tys: [ctc5, ctc1, ctc0, ctc0, ctc1, ctc0, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1014, time: v1013, didSend: v180, from: v1012 } = txn2;
  ;
  const v1015 = v998[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:60:9:dot', stdlib.UInt_max, '0')];
  const v1016 = v1015[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:60:9:dot', stdlib.UInt_max, '0')];
  const v1017 = stdlib.add(v1016, v978);
  const v1018 = stdlib.le(v1017, stdlib.UInt_max);
  stdlib.assert(v1018, {
    at: './contracts/simple-escrow.rsh:60:9:dot',
    fs: [],
    msg: 'assume <= UInt.max',
    who: 'Admin'
    });
  const v1024 = v1015[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:60:9:dot', stdlib.UInt_max, '1')];
  const v1025 = v1015[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:60:9:dot', stdlib.UInt_max, '2')];
  const v1026 = [v1017, v1024, v1025];
  const v1027 = stdlib.Array_set(v998, stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:60:9:dot', stdlib.UInt_max, '0'), v1026);
  ;
  const v1028 = stdlib.addressEq(v976, v1012);
  stdlib.assert(v1028, {
    at: './contracts/simple-escrow.rsh:60:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Admin'
    });
  const v1032 = await ctc.getContractInfo();
  stdlib.protect(ctc2, await interact.notifyDone(v1032), {
    at: './contracts/simple-escrow.rsh:63:28:application',
    fs: ['at ./contracts/simple-escrow.rsh:63:28:application call to [unknown function] (defined at: ./contracts/simple-escrow.rsh:63:28:function exp)', 'at ./contracts/simple-escrow.rsh:63:28:application call to "liftedInteract" (defined at: ./contracts/simple-escrow.rsh:63:28:application)'],
    msg: 'notifyDone',
    who: 'Admin'
    });
  
  let v1034 = true;
  let v1035 = v1013;
  let v1041 = v1027;
  let v1042 = stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:33:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v1045 = v1041[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:97:33:application', stdlib.UInt_max, '0')];
    const v1046 = v1045[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:97:33:application', stdlib.UInt_max, '0')];
    const v1047 = stdlib.gt(v1046, stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:97:42:decimal', stdlib.UInt_max, '0'));
    const v1048 = v1034 ? v1047 : false;
    
    return v1048;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc4],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1129], secs: v1131, time: v1130, didSend: v530, from: v1128 } = txn3;
    switch (v1129[0]) {
      case 'buy0_221': {
        const v1132 = v1129[1];
        undefined /* setApiDetails */;
        const v1139 = stdlib.sub(stdlib.UInt_max, v979);
        const v1140 = stdlib.lt(v1042, v1139);
        stdlib.assert(v1140, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./contracts/simple-escrow.rsh:89:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/simple-escrow.rsh:103:23:application call to "protectBuy" (defined at: ./contracts/simple-escrow.rsh:88:29:function exp)', 'at ./contracts/simple-escrow.rsh:103:10:application call to [unknown function] (defined at: ./contracts/simple-escrow.rsh:103:10:function exp)', 'at ./contracts/simple-escrow.rsh:65:38:application call to [unknown function] (defined at: ./contracts/simple-escrow.rsh:103:10:function exp)', 'at ./contracts/simple-escrow.rsh:65:38:application call to [unknown function] (defined at: ./contracts/simple-escrow.rsh:65:38:function exp)', 'at ./contracts/simple-escrow.rsh:67:14:application call to [unknown function] (defined at: ./contracts/simple-escrow.rsh:67:14:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v1180 = stdlib.add(v1042, v979);
        const v1181 = stdlib.le(v1180, stdlib.UInt_max);
        stdlib.assert(v1181, {
          at: './contracts/simple-escrow.rsh:65:38:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v1185 = v1041[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:65:38:dot', stdlib.UInt_max, '1')];
        const v1186 = v1185[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:65:38:dot', stdlib.UInt_max, '0')];
        const v1188 = stdlib.le(v1186, stdlib.UInt_max);
        stdlib.assert(v1188, {
          at: './contracts/simple-escrow.rsh:65:38:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        const v1194 = v1185[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:65:38:dot', stdlib.UInt_max, '1')];
        const v1195 = v1185[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:65:38:dot', stdlib.UInt_max, '2')];
        const v1196 = [v1186, v1194, v1195];
        const v1197 = stdlib.Array_set(v1041, stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:65:38:dot', stdlib.UInt_max, '1'), v1196);
        ;
        const v1199 = v1197[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:81:25:application', stdlib.UInt_max, '0')];
        const v1200 = v1199[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:81:25:application', stdlib.UInt_max, '0')];
        const v1206 = stdlib.sub(v1200, v1200);
        const v1207 = stdlib.ge(v1206, stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:81:41:application', stdlib.UInt_max, '0'));
        stdlib.assert(v1207, {
          at: './contracts/simple-escrow.rsh:81:41:application',
          fs: ['at ./contracts/simple-escrow.rsh:104:35:application call to [unknown function] (defined at: ./contracts/simple-escrow.rsh:80:45:function exp)', 'at ./contracts/simple-escrow.rsh:104:16:application call to [unknown function] (defined at: ./contracts/simple-escrow.rsh:104:16:function exp)'],
          msg: 'assume >= 0',
          who: 'Admin'
          });
        const v1212 = v1199[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:81:41:application', stdlib.UInt_max, '1')];
        const v1213 = v1199[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:81:41:application', stdlib.UInt_max, '2')];
        const v1214 = [v1206, v1212, v1213];
        const v1215 = stdlib.Array_set(v1197, stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:81:41:application', stdlib.UInt_max, '0'), v1214);
        ;
        const v1216 = v1215[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:82:25:application', stdlib.UInt_max, '1')];
        const v1217 = v1216[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:82:25:application', stdlib.UInt_max, '0')];
        const v1223 = stdlib.sub(v1217, v1217);
        const v1224 = stdlib.ge(v1223, stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:82:51:application', stdlib.UInt_max, '0'));
        stdlib.assert(v1224, {
          at: './contracts/simple-escrow.rsh:82:51:application',
          fs: ['at ./contracts/simple-escrow.rsh:104:35:application call to [unknown function] (defined at: ./contracts/simple-escrow.rsh:80:45:function exp)', 'at ./contracts/simple-escrow.rsh:104:16:application call to [unknown function] (defined at: ./contracts/simple-escrow.rsh:104:16:function exp)'],
          msg: 'assume >= 0',
          who: 'Admin'
          });
        const v1229 = v1216[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:82:51:application', stdlib.UInt_max, '1')];
        const v1230 = v1216[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:82:51:application', stdlib.UInt_max, '2')];
        const v1231 = [v1223, v1229, v1230];
        const v1232 = stdlib.Array_set(v1215, stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:82:51:application', stdlib.UInt_max, '1'), v1231);
        ;
        const v1235 = (stdlib.le(await ctc.getBalance(), v1180) ? stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:83:47:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(), v1180));
        const v1236 = stdlib.add(v1235, v1180);
        const v1239 = stdlib.add(v1180, v1235);
        const v1243 = stdlib.sub(v1236, v1239);
        const v1244 = stdlib.ge(v1243, stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:83:53:application', stdlib.UInt_max, '0'));
        stdlib.assert(v1244, {
          at: './contracts/simple-escrow.rsh:83:53:application',
          fs: ['at ./contracts/simple-escrow.rsh:104:35:application call to [unknown function] (defined at: ./contracts/simple-escrow.rsh:80:45:function exp)', 'at ./contracts/simple-escrow.rsh:104:16:application call to [unknown function] (defined at: ./contracts/simple-escrow.rsh:104:16:function exp)'],
          msg: 'assume >= 0',
          who: 'Admin'
          });
        ;
        const v1247 = null;
        await txn3.getOutput('buy', 'v1247', ctc2, v1247);
        const cv1034 = false;
        const cv1035 = v1130;
        const cv1041 = v1232;
        const cv1042 = v1243;
        
        v1034 = cv1034;
        v1035 = cv1035;
        v1041 = cv1041;
        v1042 = cv1042;
        
        continue;
        break;
        }
      case 'close0_221': {
        const v1369 = v1129[1];
        undefined /* setApiDetails */;
        const v1418 = stdlib.le(v1042, stdlib.UInt_max);
        stdlib.assert(v1418, {
          at: './contracts/simple-escrow.rsh:65:38:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v1422 = v1041[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:65:38:dot', stdlib.UInt_max, '1')];
        const v1423 = v1422[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:65:38:dot', stdlib.UInt_max, '0')];
        const v1425 = stdlib.le(v1423, stdlib.UInt_max);
        stdlib.assert(v1425, {
          at: './contracts/simple-escrow.rsh:65:38:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        const v1431 = v1422[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:65:38:dot', stdlib.UInt_max, '1')];
        const v1432 = v1422[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:65:38:dot', stdlib.UInt_max, '2')];
        const v1433 = [v1423, v1431, v1432];
        const v1434 = stdlib.Array_set(v1041, stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:65:38:dot', stdlib.UInt_max, '1'), v1433);
        ;
        const v1493 = v1434[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:81:25:application', stdlib.UInt_max, '0')];
        const v1494 = v1493[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:81:25:application', stdlib.UInt_max, '0')];
        const v1500 = stdlib.sub(v1494, v1494);
        const v1501 = stdlib.ge(v1500, stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:81:41:application', stdlib.UInt_max, '0'));
        stdlib.assert(v1501, {
          at: './contracts/simple-escrow.rsh:81:41:application',
          fs: ['at ./contracts/simple-escrow.rsh:117:35:application call to [unknown function] (defined at: ./contracts/simple-escrow.rsh:80:45:function exp)', 'at ./contracts/simple-escrow.rsh:117:16:application call to [unknown function] (defined at: ./contracts/simple-escrow.rsh:117:16:function exp)'],
          msg: 'assume >= 0',
          who: 'Admin'
          });
        const v1506 = v1493[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:81:41:application', stdlib.UInt_max, '1')];
        const v1507 = v1493[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:81:41:application', stdlib.UInt_max, '2')];
        const v1508 = [v1500, v1506, v1507];
        const v1509 = stdlib.Array_set(v1434, stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:81:41:application', stdlib.UInt_max, '0'), v1508);
        ;
        const v1510 = v1509[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:82:25:application', stdlib.UInt_max, '1')];
        const v1511 = v1510[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:82:25:application', stdlib.UInt_max, '0')];
        const v1517 = stdlib.sub(v1511, v1511);
        const v1518 = stdlib.ge(v1517, stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:82:51:application', stdlib.UInt_max, '0'));
        stdlib.assert(v1518, {
          at: './contracts/simple-escrow.rsh:82:51:application',
          fs: ['at ./contracts/simple-escrow.rsh:117:35:application call to [unknown function] (defined at: ./contracts/simple-escrow.rsh:80:45:function exp)', 'at ./contracts/simple-escrow.rsh:117:16:application call to [unknown function] (defined at: ./contracts/simple-escrow.rsh:117:16:function exp)'],
          msg: 'assume >= 0',
          who: 'Admin'
          });
        const v1523 = v1510[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:82:51:application', stdlib.UInt_max, '1')];
        const v1524 = v1510[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:82:51:application', stdlib.UInt_max, '2')];
        const v1525 = [v1517, v1523, v1524];
        const v1526 = stdlib.Array_set(v1509, stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:82:51:application', stdlib.UInt_max, '1'), v1525);
        ;
        const v1529 = (stdlib.le(await ctc.getBalance(), v1042) ? stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:83:47:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(), v1042));
        const v1530 = stdlib.add(v1529, v1042);
        const v1533 = stdlib.add(v1042, v1529);
        const v1537 = stdlib.sub(v1530, v1533);
        const v1538 = stdlib.ge(v1537, stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:83:53:application', stdlib.UInt_max, '0'));
        stdlib.assert(v1538, {
          at: './contracts/simple-escrow.rsh:83:53:application',
          fs: ['at ./contracts/simple-escrow.rsh:117:35:application call to [unknown function] (defined at: ./contracts/simple-escrow.rsh:80:45:function exp)', 'at ./contracts/simple-escrow.rsh:117:16:application call to [unknown function] (defined at: ./contracts/simple-escrow.rsh:117:16:function exp)'],
          msg: 'assume >= 0',
          who: 'Admin'
          });
        ;
        const v1541 = null;
        await txn3.getOutput('close', 'v1541', ctc2, v1541);
        const cv1034 = false;
        const cv1035 = v1130;
        const cv1041 = v1526;
        const cv1042 = v1537;
        
        v1034 = cv1034;
        v1035 = cv1035;
        v1041 = cv1041;
        v1042 = cv1042;
        
        continue;
        break;
        }
      case 'exchange0_221': {
        const v1606 = v1129[1];
        undefined /* setApiDetails */;
        const v1632 = v1041[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:93:22:application', stdlib.UInt_max, '1')];
        const v1633 = v1632[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:93:22:application', stdlib.UInt_max, '0')];
        const v1635 = stdlib.sub(stdlib.UInt_max, v981);
        const v1636 = stdlib.lt(v1633, v1635);
        stdlib.assert(v1636, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./contracts/simple-escrow.rsh:93:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/simple-escrow.rsh:108:28:application call to "protectExchange" (defined at: ./contracts/simple-escrow.rsh:92:34:function exp)', 'at ./contracts/simple-escrow.rsh:108:10:application call to [unknown function] (defined at: ./contracts/simple-escrow.rsh:108:10:function exp)', 'at ./contracts/simple-escrow.rsh:65:38:application call to [unknown function] (defined at: ./contracts/simple-escrow.rsh:108:10:function exp)', 'at ./contracts/simple-escrow.rsh:65:38:application call to [unknown function] (defined at: ./contracts/simple-escrow.rsh:65:38:function exp)', 'at ./contracts/simple-escrow.rsh:67:14:application call to [unknown function] (defined at: ./contracts/simple-escrow.rsh:67:14:function exp)'],
          msg: null,
          who: 'Admin'
          });
        const v1655 = stdlib.le(v1042, stdlib.UInt_max);
        stdlib.assert(v1655, {
          at: './contracts/simple-escrow.rsh:65:38:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v1661 = stdlib.add(v1633, v981);
        const v1662 = stdlib.le(v1661, stdlib.UInt_max);
        stdlib.assert(v1662, {
          at: './contracts/simple-escrow.rsh:65:38:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        const v1668 = v1632[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:65:38:dot', stdlib.UInt_max, '1')];
        const v1669 = v1632[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:65:38:dot', stdlib.UInt_max, '2')];
        const v1670 = [v1661, v1668, v1669];
        const v1671 = stdlib.Array_set(v1041, stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:65:38:dot', stdlib.UInt_max, '1'), v1670);
        ;
        const v1787 = v1671[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:81:25:application', stdlib.UInt_max, '0')];
        const v1788 = v1787[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:81:25:application', stdlib.UInt_max, '0')];
        const v1794 = stdlib.sub(v1788, v1788);
        const v1795 = stdlib.ge(v1794, stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:81:41:application', stdlib.UInt_max, '0'));
        stdlib.assert(v1795, {
          at: './contracts/simple-escrow.rsh:81:41:application',
          fs: ['at ./contracts/simple-escrow.rsh:109:35:application call to [unknown function] (defined at: ./contracts/simple-escrow.rsh:80:45:function exp)', 'at ./contracts/simple-escrow.rsh:109:16:application call to [unknown function] (defined at: ./contracts/simple-escrow.rsh:109:16:function exp)'],
          msg: 'assume >= 0',
          who: 'Admin'
          });
        const v1800 = v1787[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:81:41:application', stdlib.UInt_max, '1')];
        const v1801 = v1787[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:81:41:application', stdlib.UInt_max, '2')];
        const v1802 = [v1794, v1800, v1801];
        const v1803 = stdlib.Array_set(v1671, stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:81:41:application', stdlib.UInt_max, '0'), v1802);
        ;
        const v1804 = v1803[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:82:25:application', stdlib.UInt_max, '1')];
        const v1805 = v1804[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:82:25:application', stdlib.UInt_max, '0')];
        const v1811 = stdlib.sub(v1805, v1805);
        const v1812 = stdlib.ge(v1811, stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:82:51:application', stdlib.UInt_max, '0'));
        stdlib.assert(v1812, {
          at: './contracts/simple-escrow.rsh:82:51:application',
          fs: ['at ./contracts/simple-escrow.rsh:109:35:application call to [unknown function] (defined at: ./contracts/simple-escrow.rsh:80:45:function exp)', 'at ./contracts/simple-escrow.rsh:109:16:application call to [unknown function] (defined at: ./contracts/simple-escrow.rsh:109:16:function exp)'],
          msg: 'assume >= 0',
          who: 'Admin'
          });
        const v1817 = v1804[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:82:51:application', stdlib.UInt_max, '1')];
        const v1818 = v1804[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:82:51:application', stdlib.UInt_max, '2')];
        const v1819 = [v1811, v1817, v1818];
        const v1820 = stdlib.Array_set(v1803, stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:82:51:application', stdlib.UInt_max, '1'), v1819);
        ;
        const v1823 = (stdlib.le(await ctc.getBalance(), v1042) ? stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:83:47:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(), v1042));
        const v1824 = stdlib.add(v1823, v1042);
        const v1827 = stdlib.add(v1042, v1823);
        const v1831 = stdlib.sub(v1824, v1827);
        const v1832 = stdlib.ge(v1831, stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:83:53:application', stdlib.UInt_max, '0'));
        stdlib.assert(v1832, {
          at: './contracts/simple-escrow.rsh:83:53:application',
          fs: ['at ./contracts/simple-escrow.rsh:109:35:application call to [unknown function] (defined at: ./contracts/simple-escrow.rsh:80:45:function exp)', 'at ./contracts/simple-escrow.rsh:109:16:application call to [unknown function] (defined at: ./contracts/simple-escrow.rsh:109:16:function exp)'],
          msg: 'assume >= 0',
          who: 'Admin'
          });
        ;
        const v1835 = null;
        await txn3.getOutput('exchange', 'v1835', ctc2, v1835);
        const cv1034 = false;
        const cv1035 = v1130;
        const cv1041 = v1820;
        const cv1042 = v1831;
        
        v1034 = cv1034;
        v1035 = cv1035;
        v1041 = cv1041;
        v1042 = cv1042;
        
        continue;
        break;
        }
      }
    
    }
  const v1853 = stdlib.sub(v1042, v1042);
  const v1854 = stdlib.ge(v1853, stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:120:25:application', stdlib.UInt_max, '0'));
  stdlib.assert(v1854, {
    at: './contracts/simple-escrow.rsh:120:25:application',
    fs: [],
    msg: 'assume >= 0',
    who: 'Admin'
    });
  ;
  const v1858 = (stdlib.le(await ctc.getBalance(), v1853) ? stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:121:29:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(), v1853));
  const v1859 = stdlib.add(v1858, v1853);
  const v1863 = stdlib.sub(v1859, v1858);
  const v1864 = stdlib.ge(v1863, stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:121:35:application', stdlib.UInt_max, '0'));
  stdlib.assert(v1864, {
    at: './contracts/simple-escrow.rsh:121:35:application',
    fs: [],
    msg: 'assume >= 0',
    who: 'Admin'
    });
  ;
  const v1867 = v1041[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:122:19:application', stdlib.UInt_max, '0')];
  const v1868 = v1867[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:122:19:application', stdlib.UInt_max, '0')];
  const v1874 = stdlib.sub(v1868, v1868);
  const v1875 = stdlib.ge(v1874, stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:122:35:application', stdlib.UInt_max, '0'));
  stdlib.assert(v1875, {
    at: './contracts/simple-escrow.rsh:122:35:application',
    fs: [],
    msg: 'assume >= 0',
    who: 'Admin'
    });
  const v1880 = v1867[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:122:35:application', stdlib.UInt_max, '1')];
  const v1881 = v1867[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:122:35:application', stdlib.UInt_max, '2')];
  const v1882 = [v1874, v1880, v1881];
  const v1883 = stdlib.Array_set(v1041, stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:122:35:application', stdlib.UInt_max, '0'), v1882);
  ;
  const v1884 = v1883[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:123:19:application', stdlib.UInt_max, '1')];
  const v1885 = v1884[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:123:19:application', stdlib.UInt_max, '0')];
  const v1891 = stdlib.sub(v1885, v1885);
  const v1892 = stdlib.ge(v1891, stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:123:45:application', stdlib.UInt_max, '0'));
  stdlib.assert(v1892, {
    at: './contracts/simple-escrow.rsh:123:45:application',
    fs: [],
    msg: 'assume >= 0',
    who: 'Admin'
    });
  ;
  return;
  
  
  
  
  };
export async function _buy4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _buy4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _buy4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Data({
    buy0_221: ctc6,
    close0_221: ctc6,
    exchange0_221: ctc6
    });
  const ctc8 = stdlib.T_Null;
  
  
  const [v976, v977, v978, v979, v980, v981, v1041, v1042] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc2, ctc2, ctc1, ctc2, ctc5, ctc2]);
  const v1057 = stdlib.protect(ctc6, await interact.in(), {
    at: './contracts/simple-escrow.rsh:1:23:application',
    fs: ['at ./contracts/simple-escrow.rsh:100:10:application call to [unknown function] (defined at: ./contracts/simple-escrow.rsh:100:10:function exp)', 'at ./contracts/simple-escrow.rsh:65:38:application call to "runbuy0_221" (defined at: ./contracts/simple-escrow.rsh:98:9:function exp)', 'at ./contracts/simple-escrow.rsh:65:38:application call to [unknown function] (defined at: ./contracts/simple-escrow.rsh:65:38:function exp)'],
    msg: 'in',
    who: 'buy'
    });
  const v1059 = stdlib.gt(v979, stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:101:29:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v1059, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./contracts/simple-escrow.rsh:101:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/simple-escrow.rsh:100:10:application call to [unknown function] (defined at: ./contracts/simple-escrow.rsh:100:10:function exp)', 'at ./contracts/simple-escrow.rsh:100:10:application call to [unknown function] (defined at: ./contracts/simple-escrow.rsh:100:10:function exp)', 'at ./contracts/simple-escrow.rsh:65:38:application call to "runbuy0_221" (defined at: ./contracts/simple-escrow.rsh:98:9:function exp)', 'at ./contracts/simple-escrow.rsh:65:38:application call to [unknown function] (defined at: ./contracts/simple-escrow.rsh:65:38:function exp)'],
    msg: 'No buy-now price',
    who: 'buy'
    });
  const v1063 = ['buy0_221', v1057];
  
  const v1086 = stdlib.sub(stdlib.UInt_max, v979);
  const v1087 = stdlib.lt(v1042, v1086);
  stdlib.assert(v1087, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./contracts/simple-escrow.rsh:89:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/simple-escrow.rsh:103:23:application call to "protectBuy" (defined at: ./contracts/simple-escrow.rsh:88:29:function exp)', 'at ./contracts/simple-escrow.rsh:103:10:application call to [unknown function] (defined at: ./contracts/simple-escrow.rsh:103:10:function exp)', 'at ./contracts/simple-escrow.rsh:65:38:application call to [unknown function] (defined at: ./contracts/simple-escrow.rsh:103:10:function exp)', 'at ./contracts/simple-escrow.rsh:65:38:application call to [unknown function] (defined at: ./contracts/simple-escrow.rsh:65:38:function exp)', 'at ./contracts/simple-escrow.rsh:67:14:application call to [unknown function] (defined at: ./contracts/simple-escrow.rsh:67:14:function exp)'],
    msg: null,
    who: 'buy'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v976, v977, v978, v979, v980, v981, v1041, v1042, v1063],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7],
    pay: [v979, [[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:90:31:decimal', stdlib.UInt_max, '0'), v980]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1129], secs: v1131, time: v1130, didSend: v530, from: v1128 } = txn1;
      
      switch (v1129[0]) {
        case 'buy0_221': {
          const v1132 = v1129[1];
          sim_r.txns.push({
            kind: 'api',
            who: "buy"
            });
          const v1180 = stdlib.add(v1042, v979);
          sim_r.txns.push({
            amt: v979,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v1185 = v1041[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:65:38:dot', stdlib.UInt_max, '1')];
          const v1186 = v1185[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:65:38:dot', stdlib.UInt_max, '0')];
          const v1194 = v1185[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:65:38:dot', stdlib.UInt_max, '1')];
          const v1195 = v1185[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:65:38:dot', stdlib.UInt_max, '2')];
          const v1196 = [v1186, v1194, v1195];
          const v1197 = stdlib.Array_set(v1041, stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:65:38:dot', stdlib.UInt_max, '1'), v1196);
          ;
          const v1199 = v1197[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:81:25:application', stdlib.UInt_max, '0')];
          const v1200 = v1199[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:81:25:application', stdlib.UInt_max, '0')];
          const v1206 = stdlib.sub(v1200, v1200);
          const v1212 = v1199[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:81:41:application', stdlib.UInt_max, '1')];
          const v1213 = v1199[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:81:41:application', stdlib.UInt_max, '2')];
          const v1214 = [v1206, v1212, v1213];
          const v1215 = stdlib.Array_set(v1197, stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:81:41:application', stdlib.UInt_max, '0'), v1214);
          sim_r.txns.push({
            kind: 'from',
            to: v1128,
            tok: v977
            });
          const v1216 = v1215[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:82:25:application', stdlib.UInt_max, '1')];
          const v1217 = v1216[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:82:25:application', stdlib.UInt_max, '0')];
          const v1223 = stdlib.sub(v1217, v1217);
          const v1229 = v1216[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:82:51:application', stdlib.UInt_max, '1')];
          const v1230 = v1216[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:82:51:application', stdlib.UInt_max, '2')];
          const v1231 = [v1223, v1229, v1230];
          const v1232 = stdlib.Array_set(v1215, stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:82:51:application', stdlib.UInt_max, '1'), v1231);
          sim_r.txns.push({
            kind: 'from',
            to: v976,
            tok: v980
            });
          const v1235 = (stdlib.le(await ctc.getBalance(), v1180) ? stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:83:47:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(), v1180));
          const v1236 = stdlib.add(v1235, v1180);
          const v1239 = stdlib.add(v1180, v1235);
          const v1243 = stdlib.sub(v1236, v1239);
          sim_r.txns.push({
            kind: 'from',
            to: v976,
            tok: undefined /* Nothing */
            });
          const v1247 = null;
          const v1248 = await txn1.getOutput('buy', 'v1247', ctc8, v1247);
          
          const v2187 = v1232[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:97:33:application', stdlib.UInt_max, '0')];
          const v2188 = v2187[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:97:33:application', stdlib.UInt_max, '0')];
          const v2191 = stdlib.sub(v1243, v1243);
          sim_r.txns.push({
            kind: 'from',
            to: v976,
            tok: undefined /* Nothing */
            });
          const v2193 = (stdlib.le(await ctc.getBalance(), v2191) ? stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:121:29:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(), v2191));
          sim_r.txns.push({
            kind: 'from',
            to: v976,
            tok: undefined /* Nothing */
            });
          const v2199 = stdlib.sub(v2188, v2188);
          const v2201 = v2187[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:122:35:application', stdlib.UInt_max, '1')];
          const v2202 = v2187[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:122:35:application', stdlib.UInt_max, '2')];
          const v2203 = [v2199, v2201, v2202];
          const v2204 = stdlib.Array_set(v1232, stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:122:35:application', stdlib.UInt_max, '0'), v2203);
          sim_r.txns.push({
            kind: 'from',
            to: v976,
            tok: v977
            });
          const v2205 = v2204[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:123:19:application', stdlib.UInt_max, '1')];
          const v2206 = v2205[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:123:19:application', stdlib.UInt_max, '0')];
          sim_r.txns.push({
            kind: 'from',
            to: v976,
            tok: v980
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v980
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: v977
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          break;
          }
        case 'close0_221': {
          const v1369 = v1129[1];
          
          break;
          }
        case 'exchange0_221': {
          const v1606 = v1129[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc2, ctc1, ctc2, ctc5, ctc2, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v1129], secs: v1131, time: v1130, didSend: v530, from: v1128 } = txn1;
  switch (v1129[0]) {
    case 'buy0_221': {
      const v1132 = v1129[1];
      undefined /* setApiDetails */;
      const v1139 = stdlib.sub(stdlib.UInt_max, v979);
      const v1140 = stdlib.lt(v1042, v1139);
      stdlib.assert(v1140, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./contracts/simple-escrow.rsh:89:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/simple-escrow.rsh:103:23:application call to "protectBuy" (defined at: ./contracts/simple-escrow.rsh:88:29:function exp)', 'at ./contracts/simple-escrow.rsh:103:10:application call to [unknown function] (defined at: ./contracts/simple-escrow.rsh:103:10:function exp)', 'at ./contracts/simple-escrow.rsh:65:38:application call to [unknown function] (defined at: ./contracts/simple-escrow.rsh:103:10:function exp)', 'at ./contracts/simple-escrow.rsh:65:38:application call to [unknown function] (defined at: ./contracts/simple-escrow.rsh:65:38:function exp)', 'at ./contracts/simple-escrow.rsh:67:14:application call to [unknown function] (defined at: ./contracts/simple-escrow.rsh:67:14:function exp)'],
        msg: null,
        who: 'buy'
        });
      const v1180 = stdlib.add(v1042, v979);
      const v1181 = stdlib.le(v1180, stdlib.UInt_max);
      stdlib.assert(v1181, {
        at: './contracts/simple-escrow.rsh:65:38:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'buy'
        });
      ;
      const v1185 = v1041[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:65:38:dot', stdlib.UInt_max, '1')];
      const v1186 = v1185[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:65:38:dot', stdlib.UInt_max, '0')];
      const v1188 = stdlib.le(v1186, stdlib.UInt_max);
      stdlib.assert(v1188, {
        at: './contracts/simple-escrow.rsh:65:38:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'buy'
        });
      const v1194 = v1185[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:65:38:dot', stdlib.UInt_max, '1')];
      const v1195 = v1185[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:65:38:dot', stdlib.UInt_max, '2')];
      const v1196 = [v1186, v1194, v1195];
      const v1197 = stdlib.Array_set(v1041, stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:65:38:dot', stdlib.UInt_max, '1'), v1196);
      ;
      const v1199 = v1197[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:81:25:application', stdlib.UInt_max, '0')];
      const v1200 = v1199[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:81:25:application', stdlib.UInt_max, '0')];
      const v1206 = stdlib.sub(v1200, v1200);
      const v1207 = stdlib.ge(v1206, stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:81:41:application', stdlib.UInt_max, '0'));
      stdlib.assert(v1207, {
        at: './contracts/simple-escrow.rsh:81:41:application',
        fs: ['at ./contracts/simple-escrow.rsh:104:35:application call to [unknown function] (defined at: ./contracts/simple-escrow.rsh:80:45:function exp)', 'at ./contracts/simple-escrow.rsh:104:16:application call to [unknown function] (defined at: ./contracts/simple-escrow.rsh:104:16:function exp)'],
        msg: 'assume >= 0',
        who: 'buy'
        });
      const v1212 = v1199[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:81:41:application', stdlib.UInt_max, '1')];
      const v1213 = v1199[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:81:41:application', stdlib.UInt_max, '2')];
      const v1214 = [v1206, v1212, v1213];
      const v1215 = stdlib.Array_set(v1197, stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:81:41:application', stdlib.UInt_max, '0'), v1214);
      ;
      const v1216 = v1215[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:82:25:application', stdlib.UInt_max, '1')];
      const v1217 = v1216[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:82:25:application', stdlib.UInt_max, '0')];
      const v1223 = stdlib.sub(v1217, v1217);
      const v1224 = stdlib.ge(v1223, stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:82:51:application', stdlib.UInt_max, '0'));
      stdlib.assert(v1224, {
        at: './contracts/simple-escrow.rsh:82:51:application',
        fs: ['at ./contracts/simple-escrow.rsh:104:35:application call to [unknown function] (defined at: ./contracts/simple-escrow.rsh:80:45:function exp)', 'at ./contracts/simple-escrow.rsh:104:16:application call to [unknown function] (defined at: ./contracts/simple-escrow.rsh:104:16:function exp)'],
        msg: 'assume >= 0',
        who: 'buy'
        });
      const v1229 = v1216[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:82:51:application', stdlib.UInt_max, '1')];
      const v1230 = v1216[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:82:51:application', stdlib.UInt_max, '2')];
      const v1231 = [v1223, v1229, v1230];
      const v1232 = stdlib.Array_set(v1215, stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:82:51:application', stdlib.UInt_max, '1'), v1231);
      ;
      const v1235 = (stdlib.le(await ctc.getBalance(), v1180) ? stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:83:47:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(), v1180));
      const v1236 = stdlib.add(v1235, v1180);
      const v1239 = stdlib.add(v1180, v1235);
      const v1243 = stdlib.sub(v1236, v1239);
      const v1244 = stdlib.ge(v1243, stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:83:53:application', stdlib.UInt_max, '0'));
      stdlib.assert(v1244, {
        at: './contracts/simple-escrow.rsh:83:53:application',
        fs: ['at ./contracts/simple-escrow.rsh:104:35:application call to [unknown function] (defined at: ./contracts/simple-escrow.rsh:80:45:function exp)', 'at ./contracts/simple-escrow.rsh:104:16:application call to [unknown function] (defined at: ./contracts/simple-escrow.rsh:104:16:function exp)'],
        msg: 'assume >= 0',
        who: 'buy'
        });
      ;
      const v1247 = null;
      const v1248 = await txn1.getOutput('buy', 'v1247', ctc8, v1247);
      if (v530) {
        stdlib.protect(ctc8, await interact.out(v1132, v1248), {
          at: './contracts/simple-escrow.rsh:99:7:application',
          fs: ['at ./contracts/simple-escrow.rsh:99:7:application call to [unknown function] (defined at: ./contracts/simple-escrow.rsh:99:7:function exp)', 'at ./contracts/simple-escrow.rsh:84:15:application call to "notify" (defined at: ./contracts/simple-escrow.rsh:104:16:function exp)', 'at ./contracts/simple-escrow.rsh:104:35:application call to [unknown function] (defined at: ./contracts/simple-escrow.rsh:80:45:function exp)', 'at ./contracts/simple-escrow.rsh:104:16:application call to [unknown function] (defined at: ./contracts/simple-escrow.rsh:104:16:function exp)'],
          msg: 'out',
          who: 'buy'
          });
        }
      else {
        }
      
      const v2187 = v1232[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:97:33:application', stdlib.UInt_max, '0')];
      const v2188 = v2187[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:97:33:application', stdlib.UInt_max, '0')];
      const v2191 = stdlib.sub(v1243, v1243);
      const v2192 = stdlib.ge(v2191, stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:120:25:application', stdlib.UInt_max, '0'));
      stdlib.assert(v2192, {
        at: './contracts/simple-escrow.rsh:120:25:application',
        fs: [],
        msg: 'assume >= 0',
        who: 'buy'
        });
      ;
      const v2193 = (stdlib.le(await ctc.getBalance(), v2191) ? stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:121:29:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(), v2191));
      const v2194 = stdlib.add(v2193, v2191);
      const v2195 = stdlib.sub(v2194, v2193);
      const v2196 = stdlib.ge(v2195, stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:121:35:application', stdlib.UInt_max, '0'));
      stdlib.assert(v2196, {
        at: './contracts/simple-escrow.rsh:121:35:application',
        fs: [],
        msg: 'assume >= 0',
        who: 'buy'
        });
      ;
      const v2199 = stdlib.sub(v2188, v2188);
      const v2200 = stdlib.ge(v2199, stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:122:35:application', stdlib.UInt_max, '0'));
      stdlib.assert(v2200, {
        at: './contracts/simple-escrow.rsh:122:35:application',
        fs: [],
        msg: 'assume >= 0',
        who: 'buy'
        });
      const v2201 = v2187[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:122:35:application', stdlib.UInt_max, '1')];
      const v2202 = v2187[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:122:35:application', stdlib.UInt_max, '2')];
      const v2203 = [v2199, v2201, v2202];
      const v2204 = stdlib.Array_set(v1232, stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:122:35:application', stdlib.UInt_max, '0'), v2203);
      ;
      const v2205 = v2204[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:123:19:application', stdlib.UInt_max, '1')];
      const v2206 = v2205[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:123:19:application', stdlib.UInt_max, '0')];
      const v2207 = stdlib.sub(v2206, v2206);
      const v2208 = stdlib.ge(v2207, stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:123:45:application', stdlib.UInt_max, '0'));
      stdlib.assert(v2208, {
        at: './contracts/simple-escrow.rsh:123:45:application',
        fs: [],
        msg: 'assume >= 0',
        who: 'buy'
        });
      ;
      return;
      
      break;
      }
    case 'close0_221': {
      const v1369 = v1129[1];
      return;
      break;
      }
    case 'exchange0_221': {
      const v1606 = v1129[1];
      return;
      break;
      }
    }
  
  
  };
export async function _close4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _close4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _close4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Data({
    buy0_221: ctc6,
    close0_221: ctc6,
    exchange0_221: ctc6
    });
  const ctc8 = stdlib.T_Null;
  
  
  const [v976, v977, v978, v979, v980, v981, v1041, v1042] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc2, ctc2, ctc1, ctc2, ctc5, ctc2]);
  const v1073 = ctc.selfAddress();
  const v1075 = stdlib.protect(ctc6, await interact.in(), {
    at: './contracts/simple-escrow.rsh:1:23:application',
    fs: ['at ./contracts/simple-escrow.rsh:113:10:application call to [unknown function] (defined at: ./contracts/simple-escrow.rsh:113:10:function exp)', 'at ./contracts/simple-escrow.rsh:65:38:application call to "runclose0_221" (defined at: ./contracts/simple-escrow.rsh:111:9:function exp)', 'at ./contracts/simple-escrow.rsh:65:38:application call to [unknown function] (defined at: ./contracts/simple-escrow.rsh:65:38:function exp)'],
    msg: 'in',
    who: 'close'
    });
  const v1077 = stdlib.addressEq(v1073, v976);
  stdlib.assert(v1077, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./contracts/simple-escrow.rsh:114:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/simple-escrow.rsh:113:10:application call to [unknown function] (defined at: ./contracts/simple-escrow.rsh:113:10:function exp)', 'at ./contracts/simple-escrow.rsh:113:10:application call to [unknown function] (defined at: ./contracts/simple-escrow.rsh:113:10:function exp)', 'at ./contracts/simple-escrow.rsh:65:38:application call to "runclose0_221" (defined at: ./contracts/simple-escrow.rsh:111:9:function exp)', 'at ./contracts/simple-escrow.rsh:65:38:application call to [unknown function] (defined at: ./contracts/simple-escrow.rsh:65:38:function exp)'],
    msg: 'Only Admin can close contract',
    who: 'close'
    });
  const v1081 = ['close0_221', v1075];
  
  const txn1 = await (ctc.sendrecv({
    args: [v976, v977, v978, v979, v980, v981, v1041, v1042, v1081],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7],
    pay: [stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:116:14:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:116:18:decimal', stdlib.UInt_max, '0'), v980]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1129], secs: v1131, time: v1130, didSend: v530, from: v1128 } = txn1;
      
      switch (v1129[0]) {
        case 'buy0_221': {
          const v1132 = v1129[1];
          
          break;
          }
        case 'close0_221': {
          const v1369 = v1129[1];
          sim_r.txns.push({
            kind: 'api',
            who: "close"
            });
          ;
          const v1422 = v1041[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:65:38:dot', stdlib.UInt_max, '1')];
          const v1423 = v1422[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:65:38:dot', stdlib.UInt_max, '0')];
          const v1431 = v1422[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:65:38:dot', stdlib.UInt_max, '1')];
          const v1432 = v1422[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:65:38:dot', stdlib.UInt_max, '2')];
          const v1433 = [v1423, v1431, v1432];
          const v1434 = stdlib.Array_set(v1041, stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:65:38:dot', stdlib.UInt_max, '1'), v1433);
          ;
          const v1493 = v1434[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:81:25:application', stdlib.UInt_max, '0')];
          const v1494 = v1493[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:81:25:application', stdlib.UInt_max, '0')];
          const v1500 = stdlib.sub(v1494, v1494);
          const v1506 = v1493[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:81:41:application', stdlib.UInt_max, '1')];
          const v1507 = v1493[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:81:41:application', stdlib.UInt_max, '2')];
          const v1508 = [v1500, v1506, v1507];
          const v1509 = stdlib.Array_set(v1434, stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:81:41:application', stdlib.UInt_max, '0'), v1508);
          sim_r.txns.push({
            kind: 'from',
            to: v1128,
            tok: v977
            });
          const v1510 = v1509[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:82:25:application', stdlib.UInt_max, '1')];
          const v1511 = v1510[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:82:25:application', stdlib.UInt_max, '0')];
          const v1517 = stdlib.sub(v1511, v1511);
          const v1523 = v1510[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:82:51:application', stdlib.UInt_max, '1')];
          const v1524 = v1510[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:82:51:application', stdlib.UInt_max, '2')];
          const v1525 = [v1517, v1523, v1524];
          const v1526 = stdlib.Array_set(v1509, stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:82:51:application', stdlib.UInt_max, '1'), v1525);
          sim_r.txns.push({
            kind: 'from',
            to: v976,
            tok: v980
            });
          const v1529 = (stdlib.le(await ctc.getBalance(), v1042) ? stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:83:47:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(), v1042));
          const v1530 = stdlib.add(v1529, v1042);
          const v1533 = stdlib.add(v1042, v1529);
          const v1537 = stdlib.sub(v1530, v1533);
          sim_r.txns.push({
            kind: 'from',
            to: v976,
            tok: undefined /* Nothing */
            });
          const v1541 = null;
          const v1542 = await txn1.getOutput('close', 'v1541', ctc8, v1541);
          
          const v2291 = v1526[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:97:33:application', stdlib.UInt_max, '0')];
          const v2292 = v2291[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:97:33:application', stdlib.UInt_max, '0')];
          const v2295 = stdlib.sub(v1537, v1537);
          sim_r.txns.push({
            kind: 'from',
            to: v976,
            tok: undefined /* Nothing */
            });
          const v2297 = (stdlib.le(await ctc.getBalance(), v2295) ? stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:121:29:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(), v2295));
          sim_r.txns.push({
            kind: 'from',
            to: v976,
            tok: undefined /* Nothing */
            });
          const v2303 = stdlib.sub(v2292, v2292);
          const v2305 = v2291[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:122:35:application', stdlib.UInt_max, '1')];
          const v2306 = v2291[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:122:35:application', stdlib.UInt_max, '2')];
          const v2307 = [v2303, v2305, v2306];
          const v2308 = stdlib.Array_set(v1526, stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:122:35:application', stdlib.UInt_max, '0'), v2307);
          sim_r.txns.push({
            kind: 'from',
            to: v976,
            tok: v977
            });
          const v2309 = v2308[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:123:19:application', stdlib.UInt_max, '1')];
          const v2310 = v2309[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:123:19:application', stdlib.UInt_max, '0')];
          sim_r.txns.push({
            kind: 'from',
            to: v976,
            tok: v980
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v980
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: v977
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          break;
          }
        case 'exchange0_221': {
          const v1606 = v1129[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc2, ctc1, ctc2, ctc5, ctc2, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v1129], secs: v1131, time: v1130, didSend: v530, from: v1128 } = txn1;
  switch (v1129[0]) {
    case 'buy0_221': {
      const v1132 = v1129[1];
      return;
      break;
      }
    case 'close0_221': {
      const v1369 = v1129[1];
      undefined /* setApiDetails */;
      const v1418 = stdlib.le(v1042, stdlib.UInt_max);
      stdlib.assert(v1418, {
        at: './contracts/simple-escrow.rsh:65:38:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'close'
        });
      ;
      const v1422 = v1041[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:65:38:dot', stdlib.UInt_max, '1')];
      const v1423 = v1422[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:65:38:dot', stdlib.UInt_max, '0')];
      const v1425 = stdlib.le(v1423, stdlib.UInt_max);
      stdlib.assert(v1425, {
        at: './contracts/simple-escrow.rsh:65:38:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'close'
        });
      const v1431 = v1422[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:65:38:dot', stdlib.UInt_max, '1')];
      const v1432 = v1422[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:65:38:dot', stdlib.UInt_max, '2')];
      const v1433 = [v1423, v1431, v1432];
      const v1434 = stdlib.Array_set(v1041, stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:65:38:dot', stdlib.UInt_max, '1'), v1433);
      ;
      const v1493 = v1434[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:81:25:application', stdlib.UInt_max, '0')];
      const v1494 = v1493[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:81:25:application', stdlib.UInt_max, '0')];
      const v1500 = stdlib.sub(v1494, v1494);
      const v1501 = stdlib.ge(v1500, stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:81:41:application', stdlib.UInt_max, '0'));
      stdlib.assert(v1501, {
        at: './contracts/simple-escrow.rsh:81:41:application',
        fs: ['at ./contracts/simple-escrow.rsh:117:35:application call to [unknown function] (defined at: ./contracts/simple-escrow.rsh:80:45:function exp)', 'at ./contracts/simple-escrow.rsh:117:16:application call to [unknown function] (defined at: ./contracts/simple-escrow.rsh:117:16:function exp)'],
        msg: 'assume >= 0',
        who: 'close'
        });
      const v1506 = v1493[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:81:41:application', stdlib.UInt_max, '1')];
      const v1507 = v1493[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:81:41:application', stdlib.UInt_max, '2')];
      const v1508 = [v1500, v1506, v1507];
      const v1509 = stdlib.Array_set(v1434, stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:81:41:application', stdlib.UInt_max, '0'), v1508);
      ;
      const v1510 = v1509[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:82:25:application', stdlib.UInt_max, '1')];
      const v1511 = v1510[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:82:25:application', stdlib.UInt_max, '0')];
      const v1517 = stdlib.sub(v1511, v1511);
      const v1518 = stdlib.ge(v1517, stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:82:51:application', stdlib.UInt_max, '0'));
      stdlib.assert(v1518, {
        at: './contracts/simple-escrow.rsh:82:51:application',
        fs: ['at ./contracts/simple-escrow.rsh:117:35:application call to [unknown function] (defined at: ./contracts/simple-escrow.rsh:80:45:function exp)', 'at ./contracts/simple-escrow.rsh:117:16:application call to [unknown function] (defined at: ./contracts/simple-escrow.rsh:117:16:function exp)'],
        msg: 'assume >= 0',
        who: 'close'
        });
      const v1523 = v1510[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:82:51:application', stdlib.UInt_max, '1')];
      const v1524 = v1510[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:82:51:application', stdlib.UInt_max, '2')];
      const v1525 = [v1517, v1523, v1524];
      const v1526 = stdlib.Array_set(v1509, stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:82:51:application', stdlib.UInt_max, '1'), v1525);
      ;
      const v1529 = (stdlib.le(await ctc.getBalance(), v1042) ? stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:83:47:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(), v1042));
      const v1530 = stdlib.add(v1529, v1042);
      const v1533 = stdlib.add(v1042, v1529);
      const v1537 = stdlib.sub(v1530, v1533);
      const v1538 = stdlib.ge(v1537, stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:83:53:application', stdlib.UInt_max, '0'));
      stdlib.assert(v1538, {
        at: './contracts/simple-escrow.rsh:83:53:application',
        fs: ['at ./contracts/simple-escrow.rsh:117:35:application call to [unknown function] (defined at: ./contracts/simple-escrow.rsh:80:45:function exp)', 'at ./contracts/simple-escrow.rsh:117:16:application call to [unknown function] (defined at: ./contracts/simple-escrow.rsh:117:16:function exp)'],
        msg: 'assume >= 0',
        who: 'close'
        });
      ;
      const v1541 = null;
      const v1542 = await txn1.getOutput('close', 'v1541', ctc8, v1541);
      if (v530) {
        stdlib.protect(ctc8, await interact.out(v1369, v1542), {
          at: './contracts/simple-escrow.rsh:112:7:application',
          fs: ['at ./contracts/simple-escrow.rsh:112:7:application call to [unknown function] (defined at: ./contracts/simple-escrow.rsh:112:7:function exp)', 'at ./contracts/simple-escrow.rsh:84:15:application call to "notify" (defined at: ./contracts/simple-escrow.rsh:117:16:function exp)', 'at ./contracts/simple-escrow.rsh:117:35:application call to [unknown function] (defined at: ./contracts/simple-escrow.rsh:80:45:function exp)', 'at ./contracts/simple-escrow.rsh:117:16:application call to [unknown function] (defined at: ./contracts/simple-escrow.rsh:117:16:function exp)'],
          msg: 'out',
          who: 'close'
          });
        }
      else {
        }
      
      const v2291 = v1526[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:97:33:application', stdlib.UInt_max, '0')];
      const v2292 = v2291[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:97:33:application', stdlib.UInt_max, '0')];
      const v2295 = stdlib.sub(v1537, v1537);
      const v2296 = stdlib.ge(v2295, stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:120:25:application', stdlib.UInt_max, '0'));
      stdlib.assert(v2296, {
        at: './contracts/simple-escrow.rsh:120:25:application',
        fs: [],
        msg: 'assume >= 0',
        who: 'close'
        });
      ;
      const v2297 = (stdlib.le(await ctc.getBalance(), v2295) ? stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:121:29:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(), v2295));
      const v2298 = stdlib.add(v2297, v2295);
      const v2299 = stdlib.sub(v2298, v2297);
      const v2300 = stdlib.ge(v2299, stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:121:35:application', stdlib.UInt_max, '0'));
      stdlib.assert(v2300, {
        at: './contracts/simple-escrow.rsh:121:35:application',
        fs: [],
        msg: 'assume >= 0',
        who: 'close'
        });
      ;
      const v2303 = stdlib.sub(v2292, v2292);
      const v2304 = stdlib.ge(v2303, stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:122:35:application', stdlib.UInt_max, '0'));
      stdlib.assert(v2304, {
        at: './contracts/simple-escrow.rsh:122:35:application',
        fs: [],
        msg: 'assume >= 0',
        who: 'close'
        });
      const v2305 = v2291[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:122:35:application', stdlib.UInt_max, '1')];
      const v2306 = v2291[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:122:35:application', stdlib.UInt_max, '2')];
      const v2307 = [v2303, v2305, v2306];
      const v2308 = stdlib.Array_set(v1526, stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:122:35:application', stdlib.UInt_max, '0'), v2307);
      ;
      const v2309 = v2308[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:123:19:application', stdlib.UInt_max, '1')];
      const v2310 = v2309[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:123:19:application', stdlib.UInt_max, '0')];
      const v2311 = stdlib.sub(v2310, v2310);
      const v2312 = stdlib.ge(v2311, stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:123:45:application', stdlib.UInt_max, '0'));
      stdlib.assert(v2312, {
        at: './contracts/simple-escrow.rsh:123:45:application',
        fs: [],
        msg: 'assume >= 0',
        who: 'close'
        });
      ;
      return;
      
      break;
      }
    case 'exchange0_221': {
      const v1606 = v1129[1];
      return;
      break;
      }
    }
  
  
  };
export async function _exchange4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _exchange4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _exchange4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Data({
    buy0_221: ctc6,
    close0_221: ctc6,
    exchange0_221: ctc6
    });
  const ctc8 = stdlib.T_Null;
  
  
  const [v976, v977, v978, v979, v980, v981, v1041, v1042] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc2, ctc2, ctc1, ctc2, ctc5, ctc2]);
  const v1067 = stdlib.protect(ctc6, await interact.in(), {
    at: './contracts/simple-escrow.rsh:1:23:application',
    fs: ['at ./contracts/simple-escrow.rsh:106:9:application call to [unknown function] (defined at: ./contracts/simple-escrow.rsh:106:9:function exp)', 'at ./contracts/simple-escrow.rsh:65:38:application call to "runexchange0_221" (defined at: ./contracts/simple-escrow.rsh:106:9:function exp)', 'at ./contracts/simple-escrow.rsh:65:38:application call to [unknown function] (defined at: ./contracts/simple-escrow.rsh:65:38:function exp)'],
    msg: 'in',
    who: 'exchange'
    });
  const v1071 = ['exchange0_221', v1067];
  
  const v1111 = v1041[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:93:22:application', stdlib.UInt_max, '1')];
  const v1112 = v1111[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:93:22:application', stdlib.UInt_max, '0')];
  const v1114 = stdlib.sub(stdlib.UInt_max, v981);
  const v1115 = stdlib.lt(v1112, v1114);
  stdlib.assert(v1115, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./contracts/simple-escrow.rsh:93:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/simple-escrow.rsh:108:28:application call to "protectExchange" (defined at: ./contracts/simple-escrow.rsh:92:34:function exp)', 'at ./contracts/simple-escrow.rsh:108:10:application call to [unknown function] (defined at: ./contracts/simple-escrow.rsh:108:10:function exp)', 'at ./contracts/simple-escrow.rsh:65:38:application call to [unknown function] (defined at: ./contracts/simple-escrow.rsh:108:10:function exp)', 'at ./contracts/simple-escrow.rsh:65:38:application call to [unknown function] (defined at: ./contracts/simple-escrow.rsh:65:38:function exp)', 'at ./contracts/simple-escrow.rsh:67:14:application call to [unknown function] (defined at: ./contracts/simple-escrow.rsh:67:14:function exp)'],
    msg: null,
    who: 'exchange'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v976, v977, v978, v979, v980, v981, v1041, v1042, v1071],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7],
    pay: [stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:94:17:decimal', stdlib.UInt_max, '0'), [[v981, v980]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1129], secs: v1131, time: v1130, didSend: v530, from: v1128 } = txn1;
      
      switch (v1129[0]) {
        case 'buy0_221': {
          const v1132 = v1129[1];
          
          break;
          }
        case 'close0_221': {
          const v1369 = v1129[1];
          
          break;
          }
        case 'exchange0_221': {
          const v1606 = v1129[1];
          sim_r.txns.push({
            kind: 'api',
            who: "exchange"
            });
          const v1632 = v1041[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:93:22:application', stdlib.UInt_max, '1')];
          const v1633 = v1632[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:93:22:application', stdlib.UInt_max, '0')];
          ;
          const v1661 = stdlib.add(v1633, v981);
          const v1668 = v1632[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:65:38:dot', stdlib.UInt_max, '1')];
          const v1669 = v1632[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:65:38:dot', stdlib.UInt_max, '2')];
          const v1670 = [v1661, v1668, v1669];
          const v1671 = stdlib.Array_set(v1041, stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:65:38:dot', stdlib.UInt_max, '1'), v1670);
          sim_r.txns.push({
            amt: v981,
            kind: 'to',
            tok: v980
            });
          const v1787 = v1671[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:81:25:application', stdlib.UInt_max, '0')];
          const v1788 = v1787[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:81:25:application', stdlib.UInt_max, '0')];
          const v1794 = stdlib.sub(v1788, v1788);
          const v1800 = v1787[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:81:41:application', stdlib.UInt_max, '1')];
          const v1801 = v1787[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:81:41:application', stdlib.UInt_max, '2')];
          const v1802 = [v1794, v1800, v1801];
          const v1803 = stdlib.Array_set(v1671, stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:81:41:application', stdlib.UInt_max, '0'), v1802);
          sim_r.txns.push({
            kind: 'from',
            to: v1128,
            tok: v977
            });
          const v1804 = v1803[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:82:25:application', stdlib.UInt_max, '1')];
          const v1805 = v1804[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:82:25:application', stdlib.UInt_max, '0')];
          const v1811 = stdlib.sub(v1805, v1805);
          const v1817 = v1804[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:82:51:application', stdlib.UInt_max, '1')];
          const v1818 = v1804[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:82:51:application', stdlib.UInt_max, '2')];
          const v1819 = [v1811, v1817, v1818];
          const v1820 = stdlib.Array_set(v1803, stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:82:51:application', stdlib.UInt_max, '1'), v1819);
          sim_r.txns.push({
            kind: 'from',
            to: v976,
            tok: v980
            });
          const v1823 = (stdlib.le(await ctc.getBalance(), v1042) ? stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:83:47:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(), v1042));
          const v1824 = stdlib.add(v1823, v1042);
          const v1827 = stdlib.add(v1042, v1823);
          const v1831 = stdlib.sub(v1824, v1827);
          sim_r.txns.push({
            kind: 'from',
            to: v976,
            tok: undefined /* Nothing */
            });
          const v1835 = null;
          const v1836 = await txn1.getOutput('exchange', 'v1835', ctc8, v1835);
          
          const v2395 = v1820[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:97:33:application', stdlib.UInt_max, '0')];
          const v2396 = v2395[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:97:33:application', stdlib.UInt_max, '0')];
          const v2399 = stdlib.sub(v1831, v1831);
          sim_r.txns.push({
            kind: 'from',
            to: v976,
            tok: undefined /* Nothing */
            });
          const v2401 = (stdlib.le(await ctc.getBalance(), v2399) ? stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:121:29:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(), v2399));
          sim_r.txns.push({
            kind: 'from',
            to: v976,
            tok: undefined /* Nothing */
            });
          const v2407 = stdlib.sub(v2396, v2396);
          const v2409 = v2395[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:122:35:application', stdlib.UInt_max, '1')];
          const v2410 = v2395[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:122:35:application', stdlib.UInt_max, '2')];
          const v2411 = [v2407, v2409, v2410];
          const v2412 = stdlib.Array_set(v1820, stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:122:35:application', stdlib.UInt_max, '0'), v2411);
          sim_r.txns.push({
            kind: 'from',
            to: v976,
            tok: v977
            });
          const v2413 = v2412[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:123:19:application', stdlib.UInt_max, '1')];
          const v2414 = v2413[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:123:19:application', stdlib.UInt_max, '0')];
          sim_r.txns.push({
            kind: 'from',
            to: v976,
            tok: v980
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v980
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: v977
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc2, ctc1, ctc2, ctc5, ctc2, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v1129], secs: v1131, time: v1130, didSend: v530, from: v1128 } = txn1;
  switch (v1129[0]) {
    case 'buy0_221': {
      const v1132 = v1129[1];
      return;
      break;
      }
    case 'close0_221': {
      const v1369 = v1129[1];
      return;
      break;
      }
    case 'exchange0_221': {
      const v1606 = v1129[1];
      undefined /* setApiDetails */;
      const v1632 = v1041[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:93:22:application', stdlib.UInt_max, '1')];
      const v1633 = v1632[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:93:22:application', stdlib.UInt_max, '0')];
      const v1635 = stdlib.sub(stdlib.UInt_max, v981);
      const v1636 = stdlib.lt(v1633, v1635);
      stdlib.assert(v1636, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./contracts/simple-escrow.rsh:93:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/simple-escrow.rsh:108:28:application call to "protectExchange" (defined at: ./contracts/simple-escrow.rsh:92:34:function exp)', 'at ./contracts/simple-escrow.rsh:108:10:application call to [unknown function] (defined at: ./contracts/simple-escrow.rsh:108:10:function exp)', 'at ./contracts/simple-escrow.rsh:65:38:application call to [unknown function] (defined at: ./contracts/simple-escrow.rsh:108:10:function exp)', 'at ./contracts/simple-escrow.rsh:65:38:application call to [unknown function] (defined at: ./contracts/simple-escrow.rsh:65:38:function exp)', 'at ./contracts/simple-escrow.rsh:67:14:application call to [unknown function] (defined at: ./contracts/simple-escrow.rsh:67:14:function exp)'],
        msg: null,
        who: 'exchange'
        });
      const v1655 = stdlib.le(v1042, stdlib.UInt_max);
      stdlib.assert(v1655, {
        at: './contracts/simple-escrow.rsh:65:38:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'exchange'
        });
      ;
      const v1661 = stdlib.add(v1633, v981);
      const v1662 = stdlib.le(v1661, stdlib.UInt_max);
      stdlib.assert(v1662, {
        at: './contracts/simple-escrow.rsh:65:38:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'exchange'
        });
      const v1668 = v1632[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:65:38:dot', stdlib.UInt_max, '1')];
      const v1669 = v1632[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:65:38:dot', stdlib.UInt_max, '2')];
      const v1670 = [v1661, v1668, v1669];
      const v1671 = stdlib.Array_set(v1041, stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:65:38:dot', stdlib.UInt_max, '1'), v1670);
      ;
      const v1787 = v1671[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:81:25:application', stdlib.UInt_max, '0')];
      const v1788 = v1787[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:81:25:application', stdlib.UInt_max, '0')];
      const v1794 = stdlib.sub(v1788, v1788);
      const v1795 = stdlib.ge(v1794, stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:81:41:application', stdlib.UInt_max, '0'));
      stdlib.assert(v1795, {
        at: './contracts/simple-escrow.rsh:81:41:application',
        fs: ['at ./contracts/simple-escrow.rsh:109:35:application call to [unknown function] (defined at: ./contracts/simple-escrow.rsh:80:45:function exp)', 'at ./contracts/simple-escrow.rsh:109:16:application call to [unknown function] (defined at: ./contracts/simple-escrow.rsh:109:16:function exp)'],
        msg: 'assume >= 0',
        who: 'exchange'
        });
      const v1800 = v1787[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:81:41:application', stdlib.UInt_max, '1')];
      const v1801 = v1787[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:81:41:application', stdlib.UInt_max, '2')];
      const v1802 = [v1794, v1800, v1801];
      const v1803 = stdlib.Array_set(v1671, stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:81:41:application', stdlib.UInt_max, '0'), v1802);
      ;
      const v1804 = v1803[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:82:25:application', stdlib.UInt_max, '1')];
      const v1805 = v1804[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:82:25:application', stdlib.UInt_max, '0')];
      const v1811 = stdlib.sub(v1805, v1805);
      const v1812 = stdlib.ge(v1811, stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:82:51:application', stdlib.UInt_max, '0'));
      stdlib.assert(v1812, {
        at: './contracts/simple-escrow.rsh:82:51:application',
        fs: ['at ./contracts/simple-escrow.rsh:109:35:application call to [unknown function] (defined at: ./contracts/simple-escrow.rsh:80:45:function exp)', 'at ./contracts/simple-escrow.rsh:109:16:application call to [unknown function] (defined at: ./contracts/simple-escrow.rsh:109:16:function exp)'],
        msg: 'assume >= 0',
        who: 'exchange'
        });
      const v1817 = v1804[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:82:51:application', stdlib.UInt_max, '1')];
      const v1818 = v1804[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:82:51:application', stdlib.UInt_max, '2')];
      const v1819 = [v1811, v1817, v1818];
      const v1820 = stdlib.Array_set(v1803, stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:82:51:application', stdlib.UInt_max, '1'), v1819);
      ;
      const v1823 = (stdlib.le(await ctc.getBalance(), v1042) ? stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:83:47:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(), v1042));
      const v1824 = stdlib.add(v1823, v1042);
      const v1827 = stdlib.add(v1042, v1823);
      const v1831 = stdlib.sub(v1824, v1827);
      const v1832 = stdlib.ge(v1831, stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:83:53:application', stdlib.UInt_max, '0'));
      stdlib.assert(v1832, {
        at: './contracts/simple-escrow.rsh:83:53:application',
        fs: ['at ./contracts/simple-escrow.rsh:109:35:application call to [unknown function] (defined at: ./contracts/simple-escrow.rsh:80:45:function exp)', 'at ./contracts/simple-escrow.rsh:109:16:application call to [unknown function] (defined at: ./contracts/simple-escrow.rsh:109:16:function exp)'],
        msg: 'assume >= 0',
        who: 'exchange'
        });
      ;
      const v1835 = null;
      const v1836 = await txn1.getOutput('exchange', 'v1835', ctc8, v1835);
      if (v530) {
        stdlib.protect(ctc8, await interact.out(v1606, v1836), {
          at: './contracts/simple-escrow.rsh:107:7:application',
          fs: ['at ./contracts/simple-escrow.rsh:107:7:application call to [unknown function] (defined at: ./contracts/simple-escrow.rsh:107:7:function exp)', 'at ./contracts/simple-escrow.rsh:84:15:application call to "notify" (defined at: ./contracts/simple-escrow.rsh:109:16:function exp)', 'at ./contracts/simple-escrow.rsh:109:35:application call to [unknown function] (defined at: ./contracts/simple-escrow.rsh:80:45:function exp)', 'at ./contracts/simple-escrow.rsh:109:16:application call to [unknown function] (defined at: ./contracts/simple-escrow.rsh:109:16:function exp)'],
          msg: 'out',
          who: 'exchange'
          });
        }
      else {
        }
      
      const v2395 = v1820[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:97:33:application', stdlib.UInt_max, '0')];
      const v2396 = v2395[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:97:33:application', stdlib.UInt_max, '0')];
      const v2399 = stdlib.sub(v1831, v1831);
      const v2400 = stdlib.ge(v2399, stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:120:25:application', stdlib.UInt_max, '0'));
      stdlib.assert(v2400, {
        at: './contracts/simple-escrow.rsh:120:25:application',
        fs: [],
        msg: 'assume >= 0',
        who: 'exchange'
        });
      ;
      const v2401 = (stdlib.le(await ctc.getBalance(), v2399) ? stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:121:29:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(), v2399));
      const v2402 = stdlib.add(v2401, v2399);
      const v2403 = stdlib.sub(v2402, v2401);
      const v2404 = stdlib.ge(v2403, stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:121:35:application', stdlib.UInt_max, '0'));
      stdlib.assert(v2404, {
        at: './contracts/simple-escrow.rsh:121:35:application',
        fs: [],
        msg: 'assume >= 0',
        who: 'exchange'
        });
      ;
      const v2407 = stdlib.sub(v2396, v2396);
      const v2408 = stdlib.ge(v2407, stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:122:35:application', stdlib.UInt_max, '0'));
      stdlib.assert(v2408, {
        at: './contracts/simple-escrow.rsh:122:35:application',
        fs: [],
        msg: 'assume >= 0',
        who: 'exchange'
        });
      const v2409 = v2395[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:122:35:application', stdlib.UInt_max, '1')];
      const v2410 = v2395[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:122:35:application', stdlib.UInt_max, '2')];
      const v2411 = [v2407, v2409, v2410];
      const v2412 = stdlib.Array_set(v1820, stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:122:35:application', stdlib.UInt_max, '0'), v2411);
      ;
      const v2413 = v2412[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:123:19:application', stdlib.UInt_max, '1')];
      const v2414 = v2413[stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:123:19:application', stdlib.UInt_max, '0')];
      const v2415 = stdlib.sub(v2414, v2414);
      const v2416 = stdlib.ge(v2415, stdlib.checkedBigNumberify('./contracts/simple-escrow.rsh:123:45:application', stdlib.UInt_max, '0'));
      stdlib.assert(v2416, {
        at: './contracts/simple-escrow.rsh:123:45:application',
        fs: [],
        msg: 'assume >= 0',
        who: 'exchange'
        });
      ;
      return;
      
      break;
      }
    }
  
  
  };
export async function buy(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for buy expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for buy expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _buy4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function close(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for close expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for close expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _close4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function exchange(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for exchange expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for exchange expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _exchange4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`buy()byte[0]`, `close()byte[0]`, `exchange()byte[0]`],
    pure: [`details()((uint64,uint64),(uint64,uint64),uint64)`],
    sigs: [`buy()byte[0]`, `close()byte[0]`, `details()((uint64,uint64),(uint64,uint64),uint64)`, `exchange()byte[0]`]
    },
  appApproval: `BiAQAAEE////////////AQggAqCNBvPen+4EztCTugmaqqfZAgMoMDhAJgIAAQAiNQAxGEEHOihkSSJbNQEhBFs1AjYaABdJQQB6IjUEIzUGSSEIDEAARUkhCQxAAC4hCRJENAEkEkQpZEk1A1cgCDQDVygIUDQDVzgINANXQAhQUDQDVzAIUDUHQgbcIQgSRCg1/4ABAjT/UEIARkkhCgxAAA4hChJEKDX/KTT/UEIAMYH1uIgwEkQoNf+AAQE0/1BCAB42GgIXNQQ2GgM2GgEXSSMMQAQXSSELDEADiiELEkQkNAESRDQESSISTDQCEhFEKWRJNQNJSkpKVwAgNf8hBVs1/iEMWzX9IQ1bNfwhDls1+yEPWzX6V0giNfmBals1+Ek1BTX3gAQuRcYBNPdQsDT3IlVJIwxAAhtJIQYMQAEWIQYSRDT5VxERSTX2IltJNfUlNPoJDEQ0+CUORDT1NPoISTX0JQ5ENPlXABE09BY09lcICFA09lcQAVBQNfM0+jT7iAYeNPNXABFJNfIiW0k18UkJSTXwIg9ENPAWNPJXCAhQNPJXEAFQNPNXERFQNe+xIrIBNPGyEiSyEDEAshQ0/rIRszTvVxERSTXuIltJNe1JCUk17CIPRLEisgE07bISJLIQNP+yFDT7shGzMgpgMgp4CTT4CTXrNPg06wg16jTrNPgINOoJSTXpIg9EsSKyATTqsggjshA0/7IHs4AIAAAAAAAAByuwKDUHNP80/jT9NPw0+zT6IjIGNO9XABE07BY07lcICFA07lcQAVBQNOlCA6lINPglDkQ0+VcREUk19iJbSTX1JQ5ENPlXABE09RY09lcICFA09lcQAVBQNfQ09FcAEUk18yJbSTXySQlJNfEiD0Q08RY081cICFA081cQAVA09FcREVA18LEisgE08rISJLIQMQCyFDT+shGzNPBXERFJNe8iW0k17kkJSTXtIg9EsSKyATTushIkshA0/7IUNPuyEbMyCmAyCngJNPgJNew0+DTsCDXrNOw0+Ag06wlJNeoiD0SxIrIBNOuyCCOyEDT/sgezgAgAAAAAAAAGBbAoNQc0/zT+NP00/DT7NPoiMgY08FcAETTtFjTvVwgIUDTvVxABUFA06kICq0g0+CU0/AkMRDT4NPwISTX2JQ5ENPyIBB40+VcREUk19SJbSTX0JQ5ENPlXABE09BY09VcICFA09VcQAVBQNfM081cAEUk18iJbSTXxSQlJNfAiD0Q08BY08lcICFA08lcQAVA081cREVA177EisgE08bISJLIQMQCyFDT+shGzNO9XERFJNe4iW0k17UkJSTXsIg9EsSKyATTtshIkshA0/7IUNPuyEbMyCmAyCngJNPYJNes09jTrCDXqNOs09gg06glJNekiD0SxIrIBNOqyCCOyEDT/sgezgAgAAAAAAAAE37AoNQc0/zT+NP00/DT7NPoiMgY071cAETTsFjTuVwgIUDTuVxABUFA06UIBmiMSRCM0ARJENARJIhJMNAISEUQpZEk1A0lKVwAgNf8hBVs1/iEMWzX9V0giNfyABJqLkXSwNPxXABFJNfsiWzT9CEk1+iUORDT9NP6IAu80/zEAEkQ0/zT+NP00AyENWzQDIQ5bNAMhD1sjMgY0+hY0+1cICFA0+1cQAVA0/FcREVAiQgEUSCEHiAKaIjQBEkQ0BEkiEkw0AhIRREk1BUlKSSJbNf8hBFs1/oEQWzX9gRhbNfwhBVs1+4AETX4HJzT/FlA0/hZQNP0WUDT8FlA0+xZQsIERr0k1+klQNfk0/zT8E0Q0+VcAETX4IQSvNPhXCAhQNPhXEAFQNPlXERFQNfchB4gCHrEisgEishIkshAyCrIUNP+yEbM091cRETX2NPdXABEhBK809lcICFA09lcQAVBQNfUhB4gB6LEisgEishIkshAyCrIUNPyyEbM0/iINNP4lDBBENPsiDzT7JQwQRDT9Ig80/SUMEEQxADT/FlA0/hZQNP0WUDT8FlA0+xZQNPVQKUsBVwBqZ0gjNQEyBjUCQgE6Nf81/jX9Nfw1+zX6Nfk1+DX3NfY0/lcAEUk19SJbNfQ0/DT0Ig0QQQAvNPY09xZQNPgWUDT5FlA0+hZQNPsWUDT+UDT/FlApSwFXAHJnSCQ1ATIGNQJCAOE0/0kJSTXzIg9EsSKyATT/sggjshA09rIHszIKYDIKeAk08wlJNfI08wg08gkiD0SxIrIBNPKyCCOyEDT2sgezNPRJCUk18SIPRLEisgE09LISJLIQNPayFDT3shGzNPEWNPVXCAhQNPVXEAFQNP5XERFQVxERIltJNfBJCSIPRLEisgE08LISJLIQNPayFDT6shGzsSKyASKyEiSyEDIJshUyCrIUNPqyEbOxIrIBIrISJLIQMgmyFTIKshQ097IRs0IAADEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCg0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQhBjE1EkQiMTYSRCIxNxJEIjUBIjUCQv+uNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJNABJSkkjCDUAOBQyChJEOBAkEkQ4EU8CEkQ4EhJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 114,
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
            "components": [
              {
                "internalType": "address payable",
                "name": "v977",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v978",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v979",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v980",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v981",
                "type": "uint256"
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
                "name": "v977",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v978",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v979",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v980",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v981",
                "type": "uint256"
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
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
                    "internalType": "bool",
                    "name": "_buy0_221",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_close0_221",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_exchange0_221",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T14",
                "name": "v1129",
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
    "name": "_reach_e3",
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
    "name": "_reach_oe_v1247",
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
    "name": "_reach_oe_v1541",
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
    "name": "_reach_oe_v1835",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
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
                    "internalType": "bool",
                    "name": "_buy0_221",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_close0_221",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_exchange0_221",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T14",
                "name": "v1129",
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
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "buy",
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
    "name": "close",
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
    "name": "details",
    "outputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "id",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "item",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "id",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "exchangeFor",
            "type": "tuple"
          },
          {
            "internalType": "uint256",
            "name": "purchaseFor",
            "type": "uint256"
          }
        ],
        "internalType": "struct T1",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "exchange",
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
  Bytecode: `0x608060405260405162002af138038062002af18339810160408190526200002691620005b0565b60008055436003556200003862000377565b6040805133815283516020808301919091528085015180516001600160a01b039081168486015291810151606080850191909152818501516080808601919091529082015190921660a0840152015160c082015290517f423c1ddfa8f2515339f8fa24c8fd28b8cc7d9de80661c129e84e5232dd0091339181900360e00190a1805160009081905281516020908101829052825160400191909152815181830180519190915282519051820152820151606081015190516200011a916001600160a01b039182169116146200010f57600162000112565b60005b6008620002ca565b6040818101805160009081905260208085018051518201518451909201919091528051518401518351901515940193909352915190516200015c9290620002f4565b60608201908152608082018051600090528151602090810151810151825182015282510151604090810151825190151591015290519051620001a29190600190620002f4565b60a0820152620001b534156009620002ca565b620001e8600083602001516020015111620001d2576000620001e0565b600019836020015160200151105b600a620002ca565b6200020160001983602001516080015110600b620002ca565b6200021a60001983602001516040015110600c620002ca565b620002246200040f565b33815260208084018051516001600160a01b0390811683850152815183015160408086019190915282518101516060808701919091528351015190911660808086019190915291519091015160a08085019190915284015160c084015260016000819055439055516200029a918391016200067f565b60405160208183030381529060405260029080519060200190620002c092919062000469565b505050506200077e565b81620002f05760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b620002fe620004f8565b60005b6002811015620003545784816002811062000320576200032062000669565b60200201518282600281106200033a576200033a62000669565b6020020152806200034b8162000717565b91505062000301565b50818184600281106200036b576200036b62000669565b60200201529392505050565b604080516101208101909152600060c0820181815260e08301829052610100830191909152815260208101620003ac620004f8565b81526040805160608101825260008082526020828101829052928201529101908152602001620003db620004f8565b815260408051606081018252600080825260208281018290529282015291019081526020016200040a620004f8565b905290565b6040518060e0016040528060006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081526020016200040a620004f8565b828054620004779062000741565b90600052602060002090601f0160209004810192826200049b5760008555620004e6565b82601f10620004b657805160ff1916838001178555620004e6565b82800160010185558215620004e6579182015b82811115620004e6578251825591602001919060010190620004c9565b50620004f492915062000545565b5090565b60405180604001604052806002905b6200052e604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620005075790505090565b5b80821115620004f4576000815560010162000546565b60405160a081016001600160401b03811182821017156200058d57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b0381168114620005ab57600080fd5b919050565b600081830360c0811215620005c457600080fd5b604080519081016001600160401b0381118282101715620005f557634e487b7160e01b600052604160045260246000fd5b6040528351815260a0601f19830112156200060f57600080fd5b620006196200055c565b9150620006296020850162000593565b825260408401516020830152606084015160408301526200064d6080850162000593565b606083015260a093909301516080820152602083015250919050565b634e487b7160e01b600052603260045260246000fd5b60006101808201905060018060a01b03808451168352602081818601511681850152604080860151818601526060808701518187015283608088015116608087015260a087015160a087015260c0870151935060c0860160005b60028110156200070b5785518051835285810151868401528401511515848301529484019490820190600101620006d9565b50505050505092915050565b60006000198214156200073a57634e487b7160e01b600052601160045260246000fd5b5060010190565b600181811c908216806200075657607f821691505b602082108114156200077857634e487b7160e01b600052602260045260246000fd5b50919050565b612363806200078e6000396000f3fe6080604052600436106100845760003560e01c806383230757116100565780638323075714610134578063a6f2ae3a14610149578063ab53f2c614610151578063d2f7265a14610174578063dfbd58701461017c57005b80631e93b0f11461008d5780632c10a159146100b157806343d726d6146100c4578063565974d3146100dc57005b3661008b57005b005b34801561009957600080fd5b506003545b6040519081526020015b60405180910390f35b61008b6100bf366004611d4a565b61018f565b6100cc6101c8565b60405190151581526020016100a8565b3480156100e857600080fd5b506100f161020d565b60408051825180516001600160a01b039081168352602091820151828401528185015180519091168385015201516060820152910151608082015260a0016100a8565b34801561014057600080fd5b5060015461009e565b6100cc6103f9565b34801561015d57600080fd5b50610166610437565b6040516100a8929190611d8e565b6100cc6104d4565b61008b61018a366004611dc8565b610519565b60408051606081018252600080825260208201819052918101919091526101c46101be36849003840184611e90565b8261054e565b5050565b60006101d26117bf565b60208181015151600190526040805160608101825260008082529281018390529081019190915261020382826107a1565b6020015192915050565b610215611804565b600160005414156102d05760006002805461022f90611ede565b80601f016020809104026020016040519081016040528092919081815260200182805461025b90611ede565b80156102a85780601f1061027d576101008083540402835291602001916102a8565b820191906000526020600020905b81548152906001019060200180831161028b57829003601f168201915b50505050508060200190518101906102c09190611fb8565b90506102ce60006007611266565b505b600460005414156103ea576000600280546102ea90611ede565b80601f016020809104026020016040519081016040528092919081815260200182805461031690611ede565b80156103635780601f1061033857610100808354040283529160200191610363565b820191906000526020600020905b81548152906001019060200180831161034657829003601f168201915b505050505080602001905181019061037b9190612055565b905061038561184e565b60208083015182516001600160a01b03918216905260408085015184518401526080850151848401805191909316905260a085015182518401528351938101805194909452905183519092019190915260609092015181519092019190915251919050565b6103f660006007611266565b90565b60006104036117bf565b602081810151516000908190526040805160608101825282815292830182905282015261043082826107a1565b5192915050565b60006060600054600280805461044c90611ede565b80601f016020809104026020016040519081016040528092919081815260200182805461047890611ede565b80156104c55780601f1061049a576101008083540402835291602001916104c5565b820191906000526020600020905b8154815290600101906020018083116104a857829003601f168201915b50505050509050915091509091565b60006104de6117bf565b60208181015151600290526040805160608101825260008082529281018390529081019190915261050f82826107a1565b6040015192915050565b60408051606081018252600080825260208201819052918101919091526101c4610548368490038401846120ff565b826107a1565b61055e6001600054146011611266565b815161057990158061057257508251600154145b6012611266565b60008080556002805461058b90611ede565b80601f01602080910402602001604051908101604052809291908181526020018280546105b790611ede565b80156106045780601f106105d957610100808354040283529160200191610604565b820191906000526020600020905b8154815290600101906020018083116105e757829003601f168201915b505050505080602001905181019061061c9190611fb8565b9050610626611898565b60408051338152855160208083019190915286015115158183015290517f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f19181900360600190a16106793415600d611266565b60c0820151515160408301510181526106946001600e611266565b8051602080830180519290925260c0840180515182015183518301525151604090810151925192151592810192909252830151908301516106e2916106db9133919061128c565b600f611266565b81516106fa906001600160a01b031633146010611266565b6107026118d0565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518451909101526060808601518451909101526080808601518451931692019190915260a08085015183519091015280820180516001905251439082015260c08401519083015161077b91906000906112a4565b6020820180516040019190915251600060609091015261079a81611318565b5050505050565b6107b1600460005414602e611266565b81516107cc9015806107c557508251600154145b602f611266565b6000808055600280546107de90611ede565b80601f016020809104026020016040519081016040528092919081815260200182805461080a90611ede565b80156108575780601f1061082c57610100808354040283529160200191610857565b820191906000526020600020905b81548152906001019060200180831161083a57829003601f168201915b505050505080602001905181019061086f9190612055565b9050610879611916565b7f12913e8949e4383922151b030812d84a4cff339730aa3fc3bb2cc9554cc9348c33856040516108aa9291906121b6565b60405180910390a160006020850151515160028111156108cc576108cc611ec8565b1415610bec5760608201516108e990198360e00151106017611266565b60e0820151606083015101815261090260016018611266565b610913826060015134146019611266565b61091f6001601a611266565b60c082018051602090810151518382018051919091528251820151820151815183015282519091015160409081015182519015159101529051905161096791906001906112a4565b8160400181905250610989610982338460800151600061128c565b601b611266565b60408101518051516109a39160005b602002015151900390565b60608201526109b46001601c611266565b606081015160808201805191909152604080830180515160209081015184519091015280515182015183519015159201919091525190516109f891906000906112a4565b60a082015260208201516040820151610a1c9190339060005b6020020151516115c0565b60a0810151602081015151610a32916001610998565b60c0820152610a436001601d611266565b60c081015160e0820180519190915260a0820180516020908101518101518351820152815101516040908101519251921515920191909152608083015183519151610a9092906001610a11565b805147908110610aa35781518103610aa6565b60005b6101008301819052825101610120830152506000610140820152610acc6001601e611266565b81516101208201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610b0a573d6000803e3d6000fd5b50604051600081527f3efa548e097e974c27e342285613ce8c0d729ca73ba2afef0ba9487b6c7925c49060200160405180910390a160008352610b4b6118d0565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518451909101526060808601518451909101526080808601518451931692019190915260a0808501518351820152818301805160009052514392019190915282015160e0830151610bc491906001906112a4565b60208201805160400191909152610140830151905160600152610be681611318565b50611260565b6001602085015151516002811115610c0657610c06611ec8565b1415610f0d57610c186001601f611266565b610c2434156020611266565b610c3060016021611266565b60c08201805160209081015151610160840180519190915282518201518201518151830152825190910151604090810151825190151591015290519051610c7a91906001906112a4565b816101800181905250610c9d610c96338460800151600061128c565b6022611266565b610180810151805151610cb1916000610998565b6101a0820152610cc360016023611266565b6101a08101516101c0820180519190915261018082018051516020908101518351909101528051516040908101518351901515910152519051610d0991906000906112a4565b6101e08201526020820151610180820151610d28919033906000610a11565b6101e0810151602081015151610d3f916001610998565b610200820152610d5160016024611266565b61020081015161022082018051919091526101e0820180516020908101518101518351820152815101516040908101519251921515920191909152608083015183519151610da192906001610a11565b60e082015147908110610dba5760e08301518103610dbd565b60005b610240830181905260e0840180518201610260850181905290519091010361028083015250610dee60016025611266565b81516102608201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610e2c573d6000803e3d6000fd5b50604051600081527fe0cdfd55f846d5d8d4cc1378a174a94934c5658140f37de9174f5d57de6cd1409060200160405180910390a160006020840152610e706118d0565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518451909101526060808601518451909101526080808601518451931692019190915260a08085015183519091015280820180516000905251439101526101e0820151610220830151610eeb91906001906112a4565b60208201805160400191909152610280830151905160600152610be681611318565b6002602085015151516002811115610f2757610f27611ec8565b14156112605760a0820151610f49901960c08401516020015151106026611266565b610f5560016027611266565b610f6134156028611266565b60c0820151602001515160a0830151016102a0820152610f8360016029611266565b6102a08101516102c0820180519190915260c0830180516020908101518101518351820152815101516040908101518351901515910152519051610fca91906001906112a4565b816102e00181905250610ff0610fe93384608001518560a0015161128c565b602a611266565b6102e0810151805151611004916000610998565b6103008201526110166001602b611266565b61030081015161032082018051919091526102e08201805151602090810151835190910152805151604090810151835190151591015251905161105c91906000906112a4565b61034082015260208201516102e082015161107b919033906000610a11565b610340810151602081015151611092916001610998565b6103608201526110a46001602c611266565b61036081015161038082018051919091526103408201805160209081015181015183518201528151015160409081015192519215159201919091526080830151835191516110f492906001610a11565b60e08201514790811061110d5760e08301518103611110565b60005b6103a0830181905260e08401805182016103c085018190529051909101036103e0830152506111416001602d611266565b81516103c08201516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561117f573d6000803e3d6000fd5b50604051600081527f4dce0c54b045b0e2ec5bf430375a374de48d350a9a656e90422842b29e6864ba9060200160405180910390a1600060408401526111c36118d0565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518451909101526060808601518451909101526080808601518451931692019190915260a080850151835190910152808201805160009052514391015261034082015161038083015161123e91906001906112a4565b602082018051604001919091526103e0830151905160600152610be681611318565b50505050565b816101c45760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b600061129a838530856115d9565b90505b9392505050565b6112ac611b6b565b60005b60028110156112f8578481600281106112ca576112ca6121a0565b60200201518282600281106112e1576112e16121a0565b6020020152806112f08161222a565b9150506112af565b508181846002811061130c5761130c6121a0565b60200201529392505050565b611320611bb6565b60208201515161133157600061133f565b602082015160400151515115155b156113f25761134c611bfc565b8251516001600160a01b0390811682528351602090810151821681840152845160409081015181850152855160609081015181860152865160809081015190941693850193909352855160a09081015190850152818601805182015160c0860152519092015160e084015260046000554360015590516113ce91839101612253565b60405160208183030381529060405260029080519060200190611260929190611c55565b6000815261140260016013611266565b8151516020830151606001516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015611444573d6000803e3d6000fd5b50805147908110611458578151810361145b565b60005b60208301525061146d60016014611266565b81515160208201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156114ab573d6000803e3d6000fd5b506020820151604001518051516114c3916000610998565b60408201526114d460016015611266565b604081810151606083018051919091526020848101805184015151820151835183015280518401515184015192519215159284019290925284519081015190519151909201516115279291906000610a11565b61157a6000611571611547856020015160400151600086606001516112a4565b600160200201516000015161156a866020015160400151600087606001516112a4565b6001610998565b10156016611266565b81516080810151905160208401516040015160608401516115aa9392916115a3916000906112a4565b6001610a11565b600080805560018190556101c490600290611cd9565b6115cb8383836116b3565b6115d457600080fd5b505050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391611640916122f4565b60006040518083038185875af1925050503d806000811461167d576040519150601f19603f3d011682016040523d82523d6000602084013e611682565b606091505b509150915061169382826001611784565b50808060200190518101906116a89190612310565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391611712916122f4565b60006040518083038185875af1925050503d806000811461174f576040519150601f19603f3d011682016040523d82523d6000602084013e611754565b606091505b509150915061176582826002611784565b508080602001905181019061177a9190612310565b9695505050505050565b6060831561179357508161129d565b8251156117a35782518084602001fd5b60405163100960cb60e01b815260048101839052602401611283565b6040518060400160405280600081526020016117ff6040805160a08101825260006020820181815292820181905260608201819052608082015290815290565b905290565b6040805160a08101909152600060608201818152608083019190915281908152602001611841604080518082019091526000808252602082015290565b8152602001600081525090565b6040805160a0810190915260006060820181815260808301919091528190815260200161188b604080518082019091526000808252602082015290565b81526020016117ff611804565b6040518060400160405280600081526020016117ff604051806060016040528060008152602001600081526020016000151581525090565b60408051610100810182526000918101828152606082018390526080820183905260a0820183905260c0820183905260e0820192909252908152602081016117ff611d16565b6040518061040001604052806000815260200161194f604051806060016040528060008152602001600081526020016000151581525090565b815260200161195c611b6b565b81526020016000815260200161198e604051806060016040528060008152602001600081526020016000151581525090565b815260200161199b611b6b565b8152602001600081526020016119cd604051806060016040528060008152602001600081526020016000151581525090565b8152602001600081526020016000815260200160008152602001611a0d604051806060016040528060008152602001600081526020016000151581525090565b8152602001611a1a611b6b565b815260200160008152602001611a4c604051806060016040528060008152602001600081526020016000151581525090565b8152602001611a59611b6b565b815260200160008152602001611a8b604051806060016040528060008152602001600081526020016000151581525090565b815260200160008152602001600081526020016000815260200160008152602001611ad2604051806060016040528060008152602001600081526020016000151581525090565b8152602001611adf611b6b565b815260200160008152602001611b11604051806060016040528060008152602001600081526020016000151581525090565b8152602001611b1e611b6b565b815260200160008152602001611b50604051806060016040528060008152602001600081526020016000151581525090565b81526020016000815260200160008152602001600081525090565b60405180604001604052806002905b611ba0604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081611b7a5790505090565b60405180608001604052806000815260200160008152602001600081526020016117ff604051806060016040528060008152602001600081526020016000151581525090565b60405180610100016040528060006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001611841611b6b565b828054611c6190611ede565b90600052602060002090601f016020900481019282611c835760008555611cc9565b82601f10611c9c57805160ff1916838001178555611cc9565b82800160010185558215611cc9579182015b82811115611cc9578251825591602001919060010190611cae565b50611cd5929150611d35565b5090565b508054611ce590611ede565b6000825580601f10611cf5575050565b601f016020900490600052602060002090810190611d139190611d35565b50565b6040805160808101825260008082526020820152908101611841611b6b565b5b80821115611cd55760008155600101611d36565b600060408284031215611d5c57600080fd5b50919050565b60005b83811015611d7d578181015183820152602001611d65565b838111156112605750506000910152565b8281526040602082015260008251806040840152611db3816060850160208701611d62565b601f01601f1916919091016060019392505050565b600060a08284031215611d5c57600080fd5b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff81118282101715611e1357611e13611dda565b60405290565b6040516060810167ffffffffffffffff81118282101715611e1357611e13611dda565b6040516020810167ffffffffffffffff81118282101715611e1357611e13611dda565b6040516080810167ffffffffffffffff81118282101715611e1357611e13611dda565b8015158114611d1357600080fd5b600060408284031215611ea257600080fd5b611eaa611df0565b823581526020830135611ebc81611e82565b60208201529392505050565b634e487b7160e01b600052602160045260246000fd5b600181811c90821680611ef257607f821691505b60208210811415611d5c57634e487b7160e01b600052602260045260246000fd5b80516001600160a01b0381168114611f2a57600080fd5b919050565b600082601f830112611f4057600080fd5b611f48611df0565b8060c0840185811115611f5a57600080fd5b845b81811015611fad5760608188031215611f755760008081fd5b611f7d611e19565b8151815260208083015181830152604080840151611f9a81611e82565b9083015290855290930192606001611f5c565b509095945050505050565b60006101808284031215611fcb57600080fd5b60405160e0810181811067ffffffffffffffff82111715611fee57611fee611dda565b604052611ffa83611f13565b815261200860208401611f13565b6020820152604083015160408201526060830151606082015261202d60808401611f13565b608082015260a083015160a08201526120498460c08501611f2f565b60c08201529392505050565b60006101a0828403121561206857600080fd5b604051610100810181811067ffffffffffffffff8211171561208c5761208c611dda565b60405261209883611f13565b81526120a660208401611f13565b602082015260408301516040820152606083015160608201526120cb60808401611f13565b608082015260a083015160a08201526120e78460c08501611f2f565b60c0820152610180929092015160e083015250919050565b600081830360a081121561211257600080fd5b61211a611df0565b833581526080601f198301121561213057600080fd5b612138611e3c565b9150612142611e5f565b60208501356003811061215457600080fd5b8152604085013561216481611e82565b6020820152606085013561217781611e82565b6040820152608085013561218a81611e82565b6060820152825260208101919091529392505050565b634e487b7160e01b600052603260045260246000fd5b6001600160a01b0383168152815160208083019190915282015151805160c083019190600381106121f757634e487b7160e01b600052602160045260246000fd5b806040850152506020810151151560608401526040810151151560808401526060810151151560a0840152509392505050565b600060001982141561224c57634e487b7160e01b600052601160045260246000fd5b5060010190565b60006101a08201905060018060a01b03808451168352602081818601511681850152604080860151818601526060808701518187015283608088015116608087015260a087015160a087015260c0870151935060c0860160005b60028110156122dd57855180518352858101518684015284015115158483015294840194908201906001016122ad565b50505050505060e083015161018083015292915050565b60008251612306818460208701611d62565b9190910192915050565b60006020828403121561232257600080fd5b815161129d81611e8256fea26469706673582212200a825c5acfc1695b9ccaeba5dd50b8d8e4413f3ff5d935c7501181fc803dcbef64736f6c634300080c0033`,
  BytecodeLen: 10993,
  Which: `oD`,
  version: 7,
  views: {
    details: `details`
    }
  };
export const _stateSourceMap = {
  1: {
    at: './contracts/simple-escrow.rsh:58:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './contracts/simple-escrow.rsh:124:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './contracts/simple-escrow.rsh:65:38:after expr stmt semicolon',
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
  "buy": buy,
  "close": close,
  "exchange": exchange
  };
export const _APIs = {
  buy: buy,
  close: close,
  exchange: exchange
  };
