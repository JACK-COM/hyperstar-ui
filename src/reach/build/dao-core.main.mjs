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
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Tuple([ctc0, ctc1]);
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Struct([['admin', ctc0], ['registerSelf', ctc3], ['fee', ctc1], ['quorum', ctc1], ['openTreasury', ctc3]]);
  const ctc5 = stdlib.T_Null;
  const ctc6 = stdlib.T_Data({
    AllocateFunds: ctc2,
    ChangeAdmin: ctc4,
    EjectMember: ctc0,
    None: ctc5,
    Stop: ctc5
    });
  return {
    MemberExited: [ctc0],
    MemberJoined: [ctc0],
    MotionCreated: [ctc6, ctc0],
    MotionEnacted: [ctc1, ctc6],
    MotionFailed: [ctc1, ctc6],
    MotionRejected: [ctc1, ctc6]
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc2 = stdlib.T_Contract;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Tuple([ctc0, ctc3]);
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Struct([['admin', ctc0], ['registerSelf', ctc5], ['fee', ctc3], ['quorum', ctc3], ['openTreasury', ctc5]]);
  const ctc7 = stdlib.T_Null;
  const ctc8 = stdlib.T_Data({
    AllocateFunds: ctc4,
    ChangeAdmin: ctc6,
    EjectMember: ctc0,
    None: ctc7,
    Stop: ctc7
    });
  const ctc9 = stdlib.T_Object({
    admin: ctc0,
    fee: ctc3,
    openTreasury: ctc5,
    quorum: ctc3,
    registerSelf: ctc5
    });
  const ctc10 = stdlib.T_Object({
    Against: ctc3,
    For: ctc3,
    action: ctc8,
    index: ctc3
    });
  const ctc11 = stdlib.T_Struct([['name', ctc1], ['founder', ctc0], ['admin', ctc0], ['fee', ctc3], ['registerSelf', ctc5], ['quorum', ctc3], ['openTreasury', ctc5]]);
  const ctc12 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc13 = stdlib.T_Data({
    None: ctc7,
    Some: ctc12
    });
  const map0_ctc = ctc13;
  
  
  return {
    infos: {
      Proposal: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v3833, v3834, v3839, v3848, v3851, v3872, v3874, v3876, v3880, v3949, v3950, v3951, v3952, v3953, v3955, v3984, v3985, v3986] = svs;
            return (await ((async () => {
              
              
              return v3955;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc8
        },
      currentVotes: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v3833, v3834, v3839, v3848, v3851, v3872, v3874, v3876, v3880, v3949, v3950, v3951, v3952, v3953, v3955, v3984, v3985, v3986] = svs;
            return (await ((async () => {
              
              const v3968 = v3876.For;
              const v3969 = v3876.Against;
              const v3972 = stdlib.add(v3968, v3969);
              
              return v3972;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc3
        },
      info: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v3833, v3834, v3839, v3848, v3851, v3872, v3874, v3876, v3880, v3949, v3950, v3951, v3952, v3953, v3955, v3984, v3985, v3986] = svs;
            return (await ((async () => {
              
              const v3954 = {
                admin: v3949,
                fee: v3950,
                founder: v3833,
                name: v3834,
                openTreasury: v3951,
                quorum: v3952,
                registerSelf: v3953
                };
              
              return v3954;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc11
        },
      isMember: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v3833, v3834, v3839, v3848, v3851, v3872, v3874, v3876, v3880, v3949, v3950, v3951, v3952, v3953, v3955, v3984, v3985, v3986] = svs;
            return (await ((async (_v3973 ) => {
                const v3973 = stdlib.protect(ctc0, _v3973, null);
              
              const v3974 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v3973), null);
              let v3975;
              switch (v3974[0]) {
                case 'None': {
                  const v3976 = v3974[1];
                  v3975 = false;
                  
                  break;
                  }
                case 'Some': {
                  const v3977 = v3974[1];
                  v3975 = true;
                  
                  break;
                  }
                }
              
              return v3975;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc5
        },
      myRank: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v3833, v3834, v3839, v3848, v3851, v3872, v3874, v3876, v3880, v3949, v3950, v3951, v3952, v3953, v3955, v3984, v3985, v3986] = svs;
            return (await ((async (_v3978 ) => {
                const v3978 = stdlib.protect(ctc0, _v3978, null);
              
              const v3979 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v3978), null);
              const v3980 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
              const v3981 = stdlib.fromSome(v3979, v3980);
              const v3982 = v3981[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:115:11:array', stdlib.UInt_max, '0')];
              
              return v3982;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc3
        }
      },
    views: {
      3: [ctc0, ctc1, ctc2, ctc3, ctc2, ctc8, ctc9, ctc10, ctc3, ctc0, ctc3, ctc5, ctc3, ctc5, ctc8, ctc3, ctc5, ctc3]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Tuple([ctc3]);
  return {
    mapDataTy: ctc4
    };
  };
export async function Founder(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Founder expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Founder expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Contract;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc1, ctc0]);
  const ctc8 = stdlib.T_Address;
  const ctc9 = stdlib.T_Tuple([ctc8]);
  const ctc10 = stdlib.T_Tuple([ctc1]);
  const ctc11 = stdlib.T_Tuple([ctc6]);
  const ctc12 = stdlib.T_Tuple([ctc8, ctc1]);
  const ctc13 = stdlib.T_Struct([['admin', ctc8], ['registerSelf', ctc6], ['fee', ctc1], ['quorum', ctc1], ['openTreasury', ctc6]]);
  const ctc14 = stdlib.T_Data({
    AllocateFunds: ctc12,
    ChangeAdmin: ctc13,
    EjectMember: ctc8,
    None: ctc0,
    Stop: ctc0
    });
  const ctc15 = stdlib.T_Tuple([ctc14]);
  const ctc16 = stdlib.T_Data({
    Against: ctc0,
    For: ctc0
    });
  const ctc17 = stdlib.T_Tuple([ctc16]);
  const ctc18 = stdlib.T_Data({
    addMember0_352: ctc9,
    donate0_352: ctc10,
    eject0_352: ctc9,
    joinLeave0_352: ctc11,
    registerProposal0_352: ctc15,
    voteProposal0_352: ctc17
    });
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v3816 = stdlib.protect(ctc4, interact.announcerCtc, 'for Founder\'s interact field announcerCtc');
  const v3817 = stdlib.protect(ctc1, interact.fee, 'for Founder\'s interact field fee');
  const v3818 = stdlib.protect(ctc5, interact.name, 'for Founder\'s interact field name');
  const v3819 = stdlib.protect(ctc6, interact.openTreasury, 'for Founder\'s interact field openTreasury');
  const v3820 = stdlib.protect(ctc1, interact.quorum, 'for Founder\'s interact field quorum');
  const v3821 = stdlib.protect(ctc6, interact.registerSelf, 'for Founder\'s interact field registerSelf');
  
  const v3824 = stdlib.gt(stdlib.UInt_max, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:85:22:decimal', stdlib.UInt_max, '1000000000'));
  stdlib.assert(v3824, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./dao/contracts/dao-core.rsh:85:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:74:15:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:74:19:function exp)'],
    msg: 'Invalid consensus state',
    who: 'Founder'
    });
  const v3827 = stdlib.ge(v3820, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:70:18:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v3827, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./dao/contracts/dao-core.rsh:70:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:86:24:application call to "checkValidateQuorum" (defined at: ./dao/contracts/dao-core.rsh:69:37:function exp)', 'at ./dao/contracts/dao-core.rsh:74:15:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:74:19:function exp)'],
    msg: 'Quorum cannot be 0',
    who: 'Founder'
    });
  const v3830 = stdlib.div(stdlib.UInt_max, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:71:28:decimal', stdlib.UInt_max, '10'));
  const v3831 = stdlib.lt(v3820, v3830);
  stdlib.assert(v3831, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./dao/contracts/dao-core.rsh:71:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:86:24:application call to "checkValidateQuorum" (defined at: ./dao/contracts/dao-core.rsh:69:37:function exp)', 'at ./dao/contracts/dao-core.rsh:74:15:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:74:19:function exp)'],
    msg: 'Quorum seems worryingly large',
    who: 'Founder'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v3818, v3821, v3820, v3819, v3817, v3816],
    evt_cnt: 6,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:89:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5, ctc6, ctc1, ctc6, ctc1, ctc4],
    pay: [stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:89:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v3834, v3835, v3836, v3837, v3838, v3839], secs: v3841, time: v3840, didSend: v91, from: v3833 } = txn1;
      
      ;
      const v3848 = stdlib.div(stdlib.UInt_max, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:71:28:decimal', stdlib.UInt_max, '10'));
      const v3851 = await ctc.getContractInfo();
      const v3852 = [stdlib.UInt_max, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      await stdlib.simMapSet(sim_r, 0, v3833, v3852);
      const v3855 = [stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:109:23:application', stdlib.UInt_max, '0'), ((sim_r.txns.push({
        kind: 'remote',
        obj: v3839,
        remote: ({
          accs: [],
          apps: [],
          bills: stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:109:23:application', stdlib.UInt_max, '0'),
          fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          pays: stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:109:23:application', stdlib.UInt_max, '0'),
          toks: []
          })
        })), undefined)];
      const v3856 = await txn1.getOutput('internal', 'v3855', ctc7, v3855);
      const v3858 = v3856[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:109:23:application', stdlib.UInt_max, '0')];
      
      const v3870 = {
        admin: v3833,
        fee: v3838,
        openTreasury: v3837,
        quorum: v3836,
        registerSelf: v3835
        };
      const v3872 = ['None', null];
      const v3873 = {
        Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        action: v3872,
        index: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v3874 = v3870;
      const v3875 = true;
      const v3876 = v3873;
      const v3877 = v3840;
      const v3880 = v3858;
      
      if (await (async () => {
        
        return v3875;})()) {
        const v3949 = v3874.admin;
        const v3950 = v3874.fee;
        const v3951 = v3874.openTreasury;
        const v3952 = v3874.quorum;
        const v3953 = v3874.registerSelf;
        const v3955 = v3876.action;
        const v3984 = v3876.index;
        const v3985 = stdlib.ge(v3984, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
        let v3986;
        if (v3985) {
          const v3988 = stdlib.mod(v3984, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
          const v3990 = stdlib.sub(v3984, v3988);
          const v3992 = stdlib.div(v3990, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
          v3986 = v3992;
          }
        else {
          v3986 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
          }
        sim_r.isHalt = false;
        }
      else {
        const v12263 = v3874.admin;
        const v12312 = stdlib.sub(v3880, v3880);
        sim_r.txns.push({
          kind: 'from',
          to: v12263,
          tok: undefined /* Nothing */
          });
        const v12317 = (stdlib.le(await ctc.getBalance(), v12312) ? stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:373:29:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(), v12312));
        sim_r.txns.push({
          kind: 'from',
          to: v12263,
          tok: undefined /* Nothing */
          });
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
    tys: [ctc5, ctc6, ctc1, ctc6, ctc1, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v3834, v3835, v3836, v3837, v3838, v3839], secs: v3841, time: v3840, didSend: v91, from: v3833 } = txn1;
  ;
  const v3842 = stdlib.gt(stdlib.UInt_max, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:97:20:decimal', stdlib.UInt_max, '1000000000'));
  stdlib.assert(v3842, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./dao/contracts/dao-core.rsh:97:8:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'Invalid consensus state',
    who: 'Founder'
    });
  const v3845 = stdlib.ge(v3836, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:70:18:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v3845, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./dao/contracts/dao-core.rsh:70:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:98:22:application call to "checkValidateQuorum" (defined at: ./dao/contracts/dao-core.rsh:69:37:function exp)'],
    msg: 'Quorum cannot be 0',
    who: 'Founder'
    });
  const v3848 = stdlib.div(stdlib.UInt_max, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:71:28:decimal', stdlib.UInt_max, '10'));
  const v3849 = stdlib.lt(v3836, v3848);
  stdlib.assert(v3849, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./dao/contracts/dao-core.rsh:71:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:98:22:application call to "checkValidateQuorum" (defined at: ./dao/contracts/dao-core.rsh:69:37:function exp)'],
    msg: 'Quorum seems worryingly large',
    who: 'Founder'
    });
  const v3851 = await ctc.getContractInfo();
  const v3852 = [stdlib.UInt_max, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  await stdlib.mapSet(map0, v3833, v3852);
  const v3855 = undefined /* Remote */;
  const v3856 = await txn1.getOutput('internal', 'v3855', ctc7, v3855);
  const v3858 = v3856[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:109:23:application', stdlib.UInt_max, '0')];
  const v3864 = stdlib.le(v3858, stdlib.UInt_max);
  stdlib.assert(v3864, {
    at: './dao/contracts/dao-core.rsh:109:23:application',
    fs: [],
    msg: 'assume <= UInt.max',
    who: 'Founder'
    });
  const v3868 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3858);
  stdlib.assert(v3868, {
    at: './dao/contracts/dao-core.rsh:109:23:application',
    fs: [],
    msg: 'remote bill check',
    who: 'Founder'
    });
  stdlib.protect(ctc0, await interact.done(v3851), {
    at: './dao/contracts/dao-core.rsh:110:24:application',
    fs: ['at ./dao/contracts/dao-core.rsh:110:24:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:110:24:function exp)', 'at ./dao/contracts/dao-core.rsh:110:24:application call to "liftedInteract" (defined at: ./dao/contracts/dao-core.rsh:110:24:application)'],
    msg: 'done',
    who: 'Founder'
    });
  
  const v3870 = {
    admin: v3833,
    fee: v3838,
    openTreasury: v3837,
    quorum: v3836,
    registerSelf: v3835
    };
  const v3872 = ['None', null];
  const v3873 = {
    Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    action: v3872,
    index: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  let v3874 = v3870;
  let v3875 = true;
  let v3876 = v3873;
  let v3877 = v3840;
  let v3880 = v3858;
  
  while (await (async () => {
    
    return v3875;})()) {
    const v3949 = v3874.admin;
    const v3950 = v3874.fee;
    const v3951 = v3874.openTreasury;
    const v3952 = v3874.quorum;
    const v3953 = v3874.registerSelf;
    const v3955 = v3876.action;
    const v3984 = v3876.index;
    const v3985 = stdlib.ge(v3984, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
    let v3986;
    if (v3985) {
      const v3988 = stdlib.mod(v3984, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
      const v3990 = stdlib.sub(v3984, v3988);
      const v3992 = stdlib.div(v3990, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
      v3986 = v3992;
      }
    else {
      v3986 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
      }
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc18],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v4508], secs: v4510, time: v4509, didSend: v2529, from: v4507 } = txn2;
    switch (v4508[0]) {
      case 'addMember0_352': {
        const v4511 = v4508[1];
        undefined /* setApiDetails */;
        const v4516 = v4511[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:216:10:spread', stdlib.UInt_max, '0')];
        const v4517 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4516), null);
        const v4518 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v4519 = stdlib.fromSome(v4517, v4518);
        const v4520 = v4519[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:115:11:array', stdlib.UInt_max, '0')];
        const v4522 = stdlib.ge(v4520, v3986);
        stdlib.assert(v4522, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./dao/contracts/dao-core.rsh:217:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:216:36:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:216:36:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:216:36:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:189:50:function exp)'],
          msg: 'User is below Citizen Rank threshold',
          who: 'Founder'
          });
        let v4525;
        switch (v4517[0]) {
          case 'None': {
            const v4526 = v4517[1];
            v4525 = true;
            
            break;
            }
          case 'Some': {
            const v4527 = v4517[1];
            v4525 = false;
            
            break;
            }
          }
        stdlib.assert(v4525, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./dao/contracts/dao-core.rsh:218:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:216:36:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:216:36:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:216:36:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:189:50:function exp)'],
          msg: 'Address is already a member',
          who: 'Founder'
          });
        const v4562 = stdlib.add(v3880, v3950);
        const v4563 = stdlib.le(v4562, stdlib.UInt_max);
        stdlib.assert(v4563, {
          at: './dao/contracts/dao-core.rsh:189:50:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Founder'
          });
        ;
        let v4577;
        switch (v4517[0]) {
          case 'None': {
            const v4578 = v4517[1];
            v4577 = true;
            
            break;
            }
          case 'Some': {
            const v4579 = v4517[1];
            v4577 = false;
            
            break;
            }
          }
        stdlib.assert(v4577, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./dao/contracts/dao-core.rsh:218:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:223:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:223:13:function exp)'],
          msg: 'Address is already a member',
          who: 'Founder'
          });
        const v4582 = [v3986, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        await stdlib.mapSet(map0, v4516, v4582);
        null;
        const v4584 = null;
        await txn2.getOutput('addMember', 'v4584', ctc0, v4584);
        const cv3874 = v3874;
        const cv3875 = true;
        const cv3876 = v3876;
        const cv3877 = v4509;
        const cv3880 = v4562;
        
        v3874 = cv3874;
        v3875 = cv3875;
        v3876 = cv3876;
        v3877 = cv3877;
        v3880 = cv3880;
        
        continue;
        break;
        }
      case 'donate0_352': {
        const v5803 = v4508[1];
        undefined /* setApiDetails */;
        const v5823 = v5803[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:232:10:spread', stdlib.UInt_max, '0')];
        const v5826 = stdlib.sub(stdlib.UInt_max, v5823);
        const v5827 = stdlib.lt(v3880, v5826);
        stdlib.assert(v5827, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./dao/contracts/dao-core.rsh:233:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:232:33:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:232:33:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:232:33:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:189:50:function exp)'],
          msg: 'Donation is too generous',
          who: 'Founder'
          });
        const v5854 = stdlib.add(v3880, v5823);
        const v5855 = stdlib.le(v5854, stdlib.UInt_max);
        stdlib.assert(v5855, {
          at: './dao/contracts/dao-core.rsh:189:50:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Founder'
          });
        ;
        const v5889 = stdlib.lt(v5854, v5826);
        stdlib.assert(v5889, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./dao/contracts/dao-core.rsh:233:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:238:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:238:13:function exp)'],
          msg: 'Donation is too generous',
          who: 'Founder'
          });
        const v5892 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4507), null);
        let v5893;
        switch (v5892[0]) {
          case 'None': {
            const v5894 = v5892[1];
            v5893 = false;
            
            break;
            }
          case 'Some': {
            const v5895 = v5892[1];
            v5893 = true;
            
            break;
            }
          }
        if (v5893) {
          const v5897 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v5898 = stdlib.fromSome(v5892, v5897);
          const v5899 = v5898[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:240:19:array', stdlib.UInt_max, '0')];
          const v5900 = v5898[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:240:19:array', stdlib.UInt_max, '1')];
          const v5902 = stdlib.sub(stdlib.UInt_max, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:242:36:decimal', stdlib.UInt_max, '1'));
          const v5903 = stdlib.lt(v5899, v5902);
          let v5904;
          if (v5903) {
            const v5907 = stdlib.add(v5899, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:243:30:decimal', stdlib.UInt_max, '1'));
            const v5908 = [v5907, v5900];
            v5904 = v5908;
            }
          else {
            const v5909 = stdlib.ge(v5899, v3986);
            const v5910 = v5909 ? v5899 : v3986;
            const v5911 = [v5910, v5900];
            v5904 = v5911;
            }
          await stdlib.mapSet(map0, v4507, v5904);
          const v5912 = null;
          await txn2.getOutput('donate', 'v5912', ctc0, v5912);
          const cv3874 = v3874;
          const cv3875 = true;
          const cv3876 = v3876;
          const cv3877 = v4509;
          const cv3880 = v5854;
          
          v3874 = cv3874;
          v3875 = cv3875;
          v3876 = cv3876;
          v3877 = cv3877;
          v3880 = cv3880;
          
          continue;}
        else {
          const v5920 = null;
          await txn2.getOutput('donate', 'v5920', ctc0, v5920);
          const cv3874 = v3874;
          const cv3875 = true;
          const cv3876 = v3876;
          const cv3877 = v4509;
          const cv3880 = v5854;
          
          v3874 = cv3874;
          v3875 = cv3875;
          v3876 = cv3876;
          v3877 = cv3877;
          v3880 = cv3880;
          
          continue;}
        break;
        }
      case 'eject0_352': {
        const v7095 = v4508[1];
        undefined /* setApiDetails */;
        const v7147 = stdlib.le(v3880, stdlib.UInt_max);
        stdlib.assert(v7147, {
          at: './dao/contracts/dao-core.rsh:189:50:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Founder'
          });
        ;
        const v7221 = v7095[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:253:10:spread', stdlib.UInt_max, '0')];
        const v7222 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v7221), null);
        let v7223;
        switch (v7222[0]) {
          case 'None': {
            const v7224 = v7222[1];
            v7223 = false;
            
            break;
            }
          case 'Some': {
            const v7225 = v7222[1];
            v7223 = true;
            
            break;
            }
          }
        const v7227 = stdlib.addressEq(v7221, v3949);
        const v7228 = v7227 ? false : true;
        const v7229 = v7223 ? v7228 : false;
        const v7230 = stdlib.addressEq(v4507, v7221);
        const v7231 = v7230 ? false : true;
        stdlib.assert(v7231, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./dao/contracts/dao-core.rsh:256:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:270:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:270:13:function exp)'],
          msg: 'Use \'Leave\' API to exit',
          who: 'Founder'
          });
        let v7234;
        switch (v7222[0]) {
          case 'None': {
            const v7235 = v7222[1];
            v7234 = false;
            
            break;
            }
          case 'Some': {
            const v7236 = v7222[1];
            v7234 = true;
            
            break;
            }
          }
        stdlib.assert(v7234, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./dao/contracts/dao-core.rsh:257:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:270:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:270:13:function exp)'],
          msg: 'Address is not a member',
          who: 'Founder'
          });
        stdlib.assert(v7229, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./dao/contracts/dao-core.rsh:258:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:270:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:270:13:function exp)'],
          msg: 'Requires ChangeAdmin proposal',
          who: 'Founder'
          });
        const v7240 = stdlib.addressEq(v4507, v3949);
        if (v7240) {
          const v7333 = null;
          await txn2.getOutput('eject', 'v7333', ctc0, v7333);
          await stdlib.mapSet(map0, v7221, undefined /* Nothing */);
          null;
          const cv3874 = v3874;
          const cv3875 = true;
          const cv3876 = v3876;
          const cv3877 = v4509;
          const cv3880 = v3880;
          
          v3874 = cv3874;
          v3875 = cv3875;
          v3876 = cv3876;
          v3877 = cv3877;
          v3880 = cv3880;
          
          continue;}
        else {
          const v7245 = stdlib.sub(stdlib.UInt_max, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:262:35:decimal', stdlib.UInt_max, '1'));
          const v7246 = stdlib.le(v3984, v7245);
          stdlib.assert(v7246, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./dao/contracts/dao-core.rsh:262:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:270:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:270:13:function exp)'],
            msg: 'Proposals Limit reached',
            who: 'Founder'
            });
          let v7248;
          switch (v3955[0]) {
            case 'AllocateFunds': {
              const v7249 = v3955[1];
              const v7250 = v7249[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:76:21:array', stdlib.UInt_max, '0')];
              const v7251 = v7249[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:76:21:array', stdlib.UInt_max, '1')];
              const v7253 = stdlib.lt(v7251, v3880);
              const v7254 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v7250), null);
              let v7255;
              switch (v7254[0]) {
                case 'None': {
                  const v7256 = v7254[1];
                  v7255 = false;
                  
                  break;
                  }
                case 'Some': {
                  const v7257 = v7254[1];
                  v7255 = true;
                  
                  break;
                  }
                }
              const v7258 = v7255 ? v7253 : false;
              const v7260 = v3951 ? v7253 : v7258;
              v7248 = v7260;
              
              break;
              }
            case 'ChangeAdmin': {
              const v7261 = v3955[1];
              const v7262 = v7261.admin;
              const v7263 = v7261.fee;
              const v7265 = v7261.quorum;
              const v7267 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v7262), null);
              const v7268 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
              const v7269 = stdlib.fromSome(v7267, v7268);
              const v7270 = v7269[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:84:13:array', stdlib.UInt_max, '0')];
              let v7273;
              switch (v7267[0]) {
                case 'None': {
                  const v7274 = v7267[1];
                  v7273 = false;
                  
                  break;
                  }
                case 'Some': {
                  const v7275 = v7267[1];
                  v7273 = true;
                  
                  break;
                  }
                }
              const v7276 = stdlib.gt(v7270, v3986);
              const v7277 = v7273 ? v7276 : false;
              const v7278 = stdlib.gt(v7265, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:86:34:decimal', stdlib.UInt_max, '0'));
              let v7279;
              if (v7278) {
                const v7282 = stdlib.lt(v7265, v3848);
                v7279 = v7282;
                }
              else {
                v7279 = false;
                }
              const v7283 = stdlib.ge(v7263, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:87:34:decimal', stdlib.UInt_max, '0'));
              const v7284 = stdlib.lt(v7263, stdlib.UInt_max);
              const v7285 = v7283 ? v7284 : false;
              const v7286 = v7277 ? v7279 : false;
              const v7287 = v7286 ? v7285 : false;
              v7248 = v7287;
              
              break;
              }
            case 'EjectMember': {
              const v7288 = v3955[1];
              const v7289 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v7288), null);
              let v7290;
              switch (v7289[0]) {
                case 'None': {
                  const v7291 = v7289[1];
                  v7290 = false;
                  
                  break;
                  }
                case 'Some': {
                  const v7292 = v7289[1];
                  v7290 = true;
                  
                  break;
                  }
                }
              const v7294 = stdlib.addressEq(v7288, v3949);
              const v7295 = v7294 ? false : true;
              const v7296 = v7290 ? v7295 : false;
              v7248 = v7296;
              
              break;
              }
            case 'None': {
              const v7297 = v3955[1];
              v7248 = false;
              
              break;
              }
            case 'Stop': {
              const v7298 = v3955[1];
              v7248 = true;
              
              break;
              }
            }
          stdlib.assert(v7248, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./dao/contracts/dao-core.rsh:263:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:270:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:270:13:function exp)'],
            msg: 'A Proposal is already active.',
            who: 'Founder'
            });
          const v7301 = null;
          await txn2.getOutput('eject', 'v7301', ctc0, v7301);
          const v7319 = stdlib.add(v3984, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:183:30:decimal', stdlib.UInt_max, '1'));
          const v7320 = ['EjectMember', v7221];
          const v7321 = {
            Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            action: v7320,
            index: v7319
            };
          const cv3874 = v3874;
          const cv3875 = true;
          const cv3876 = v7321;
          const cv3877 = v4509;
          const cv3880 = v3880;
          
          v3874 = cv3874;
          v3875 = cv3875;
          v3876 = cv3876;
          v3877 = cv3877;
          v3880 = cv3880;
          
          continue;}
        break;
        }
      case 'joinLeave0_352': {
        const v8387 = v4508[1];
        undefined /* setApiDetails */;
        const v8415 = v8387[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:284:10:spread', stdlib.UInt_max, '0')];
        if (v8415) {
          const v8416 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4507), null);
          let v8417;
          switch (v8416[0]) {
            case 'None': {
              const v8418 = v8416[1];
              v8417 = false;
              
              break;
              }
            case 'Some': {
              const v8419 = v8416[1];
              v8417 = true;
              
              break;
              }
            }
          stdlib.assert(v8417, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./dao/contracts/dao-core.rsh:286:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:284:40:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:284:40:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:284:40:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:189:50:function exp)'],
            msg: 'Address is not a member',
            who: 'Founder'
            });
          }
        else {
          stdlib.assert(v3953, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./dao/contracts/dao-core.rsh:288:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:284:40:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:284:40:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:284:40:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:189:50:function exp)'],
            msg: 'An existing user has to add you to this DAO',
            who: 'Founder'
            });
          const v8423 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4507), null);
          let v8424;
          switch (v8423[0]) {
            case 'None': {
              const v8425 = v8423[1];
              v8424 = true;
              
              break;
              }
            case 'Some': {
              const v8426 = v8423[1];
              v8424 = false;
              
              break;
              }
            }
          stdlib.assert(v8424, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./dao/contracts/dao-core.rsh:289:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:284:40:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:284:40:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:284:40:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:189:50:function exp)'],
            msg: 'Address is already a member',
            who: 'Founder'
            });
          }
        const v8429 = v8415 ? stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:292:35:decimal', stdlib.UInt_max, '0') : v3950;
        const v8432 = stdlib.sub(stdlib.UInt_max, v3880);
        const v8433 = stdlib.lt(v8429, v8432);
        stdlib.assert(v8433, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./dao/contracts/dao-core.rsh:293:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:284:40:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:284:40:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:284:40:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:189:50:function exp)'],
          msg: 'Membership is at maximum capacity',
          who: 'Founder'
          });
        const v8438 = stdlib.add(v3880, v8429);
        const v8439 = stdlib.le(v8438, stdlib.UInt_max);
        stdlib.assert(v8439, {
          at: './dao/contracts/dao-core.rsh:189:50:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Founder'
          });
        ;
        if (v8415) {
          const v8658 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4507), null);
          let v8659;
          switch (v8658[0]) {
            case 'None': {
              const v8660 = v8658[1];
              v8659 = false;
              
              break;
              }
            case 'Some': {
              const v8661 = v8658[1];
              v8659 = true;
              
              break;
              }
            }
          stdlib.assert(v8659, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./dao/contracts/dao-core.rsh:286:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:298:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:298:13:function exp)'],
            msg: 'Address is not a member',
            who: 'Founder'
            });
          }
        else {
          stdlib.assert(v3953, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./dao/contracts/dao-core.rsh:288:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:298:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:298:13:function exp)'],
            msg: 'An existing user has to add you to this DAO',
            who: 'Founder'
            });
          const v8665 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4507), null);
          let v8666;
          switch (v8665[0]) {
            case 'None': {
              const v8667 = v8665[1];
              v8666 = true;
              
              break;
              }
            case 'Some': {
              const v8668 = v8665[1];
              v8666 = false;
              
              break;
              }
            }
          stdlib.assert(v8666, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./dao/contracts/dao-core.rsh:289:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:298:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:298:13:function exp)'],
            msg: 'Address is already a member',
            who: 'Founder'
            });
          }
        const v8674 = stdlib.sub(stdlib.UInt_max, v8438);
        const v8675 = stdlib.lt(v8429, v8674);
        stdlib.assert(v8675, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./dao/contracts/dao-core.rsh:293:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:298:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:298:13:function exp)'],
          msg: 'Membership is at maximum capacity',
          who: 'Founder'
          });
        const v8678 = null;
        await txn2.getOutput('joinLeave', 'v8678', ctc0, v8678);
        if (v8415) {
          await stdlib.mapSet(map0, v4507, undefined /* Nothing */);
          null;
          const cv3874 = v3874;
          const cv3875 = true;
          const cv3876 = v3876;
          const cv3877 = v4509;
          const cv3880 = v8438;
          
          v3874 = cv3874;
          v3875 = cv3875;
          v3876 = cv3876;
          v3877 = cv3877;
          v3880 = cv3880;
          
          continue;}
        else {
          const v8687 = [v3986, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          await stdlib.mapSet(map0, v4507, v8687);
          null;
          const cv3874 = v3874;
          const cv3875 = true;
          const cv3876 = v3876;
          const cv3877 = v4509;
          const cv3880 = v8438;
          
          v3874 = cv3874;
          v3875 = cv3875;
          v3876 = cv3876;
          v3877 = cv3877;
          v3880 = cv3880;
          
          continue;}
        break;
        }
      case 'registerProposal0_352': {
        const v9679 = v4508[1];
        undefined /* setApiDetails */;
        const v9731 = stdlib.le(v3880, stdlib.UInt_max);
        stdlib.assert(v9731, {
          at: './dao/contracts/dao-core.rsh:189:50:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Founder'
          });
        ;
        const v9983 = v9679[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:311:10:spread', stdlib.UInt_max, '0')];
        let v9987;
        if (v3985) {
          const v9989 = stdlib.mod(v3984, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
          const v9991 = stdlib.sub(v3984, v9989);
          const v9993 = stdlib.div(v9991, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
          v9987 = v9993;
          }
        else {
          v9987 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
          }
        const v9994 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4507), null);
        const v9995 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v9996 = stdlib.fromSome(v9994, v9995);
        const v9997 = v9996[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:120:11:array', stdlib.UInt_max, '0')];
        const v9999 = stdlib.ge(v9997, v9987);
        stdlib.assert(v9999, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./dao/contracts/dao-core.rsh:121:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:312:22:application call to "requireIsMember" (defined at: ./dao/contracts/dao-core.rsh:118:36:function exp)', 'at ./dao/contracts/dao-core.rsh:324:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:324:13:function exp)'],
          msg: 'THIEF! SEIZE THEM!',
          who: 'Founder'
          });
        const v10006 = stdlib.ge(v9997, v3986);
        stdlib.assert(v10006, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./dao/contracts/dao-core.rsh:313:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:324:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:324:13:function exp)'],
          msg: 'User is below Citizen Rank threshold',
          who: 'Founder'
          });
        let v10010;
        switch (v3955[0]) {
          case 'AllocateFunds': {
            const v10011 = v3955[1];
            const v10012 = v10011[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:76:21:array', stdlib.UInt_max, '0')];
            const v10013 = v10011[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:76:21:array', stdlib.UInt_max, '1')];
            const v10015 = stdlib.lt(v10013, v3880);
            const v10016 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v10012), null);
            let v10017;
            switch (v10016[0]) {
              case 'None': {
                const v10018 = v10016[1];
                v10017 = false;
                
                break;
                }
              case 'Some': {
                const v10019 = v10016[1];
                v10017 = true;
                
                break;
                }
              }
            const v10020 = v10017 ? v10015 : false;
            const v10022 = v3951 ? v10015 : v10020;
            v10010 = v10022;
            
            break;
            }
          case 'ChangeAdmin': {
            const v10023 = v3955[1];
            const v10024 = v10023.admin;
            const v10025 = v10023.fee;
            const v10027 = v10023.quorum;
            const v10029 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v10024), null);
            const v10031 = stdlib.fromSome(v10029, v9995);
            const v10032 = v10031[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:84:13:array', stdlib.UInt_max, '0')];
            let v10035;
            switch (v10029[0]) {
              case 'None': {
                const v10036 = v10029[1];
                v10035 = false;
                
                break;
                }
              case 'Some': {
                const v10037 = v10029[1];
                v10035 = true;
                
                break;
                }
              }
            const v10038 = stdlib.gt(v10032, v3986);
            const v10039 = v10035 ? v10038 : false;
            const v10040 = stdlib.gt(v10027, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:86:34:decimal', stdlib.UInt_max, '0'));
            let v10041;
            if (v10040) {
              const v10044 = stdlib.lt(v10027, v3848);
              v10041 = v10044;
              }
            else {
              v10041 = false;
              }
            const v10045 = stdlib.ge(v10025, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:87:34:decimal', stdlib.UInt_max, '0'));
            const v10046 = stdlib.lt(v10025, stdlib.UInt_max);
            const v10047 = v10045 ? v10046 : false;
            const v10048 = v10039 ? v10041 : false;
            const v10049 = v10048 ? v10047 : false;
            v10010 = v10049;
            
            break;
            }
          case 'EjectMember': {
            const v10050 = v3955[1];
            const v10051 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v10050), null);
            let v10052;
            switch (v10051[0]) {
              case 'None': {
                const v10053 = v10051[1];
                v10052 = false;
                
                break;
                }
              case 'Some': {
                const v10054 = v10051[1];
                v10052 = true;
                
                break;
                }
              }
            const v10056 = stdlib.addressEq(v10050, v3949);
            const v10057 = v10056 ? false : true;
            const v10058 = v10052 ? v10057 : false;
            v10010 = v10058;
            
            break;
            }
          case 'None': {
            const v10059 = v3955[1];
            v10010 = false;
            
            break;
            }
          case 'Stop': {
            const v10060 = v3955[1];
            v10010 = true;
            
            break;
            }
          }
        const v10061 = v10010 ? false : true;
        stdlib.assert(v10061, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./dao/contracts/dao-core.rsh:315:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:324:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:324:13:function exp)'],
          msg: 'A Proposal is already active.',
          who: 'Founder'
          });
        const v10064 = stdlib.sub(stdlib.UInt_max, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:320:32:decimal', stdlib.UInt_max, '1'));
        const v10065 = stdlib.lt(v3984, v10064);
        stdlib.assert(v10065, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./dao/contracts/dao-core.rsh:320:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:324:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:324:13:function exp)'],
          msg: 'Governance limit reached',
          who: 'Founder'
          });
        let v10067;
        switch (v9983[0]) {
          case 'AllocateFunds': {
            const v10068 = v9983[1];
            const v10069 = v10068[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:76:21:array', stdlib.UInt_max, '0')];
            const v10070 = v10068[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:76:21:array', stdlib.UInt_max, '1')];
            const v10072 = stdlib.lt(v10070, v3880);
            const v10073 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v10069), null);
            let v10074;
            switch (v10073[0]) {
              case 'None': {
                const v10075 = v10073[1];
                v10074 = false;
                
                break;
                }
              case 'Some': {
                const v10076 = v10073[1];
                v10074 = true;
                
                break;
                }
              }
            const v10077 = v10074 ? v10072 : false;
            const v10079 = v3951 ? v10072 : v10077;
            v10067 = v10079;
            
            break;
            }
          case 'ChangeAdmin': {
            const v10080 = v9983[1];
            const v10081 = v10080.admin;
            const v10082 = v10080.fee;
            const v10084 = v10080.quorum;
            const v10086 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v10081), null);
            const v10088 = stdlib.fromSome(v10086, v9995);
            const v10089 = v10088[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:84:13:array', stdlib.UInt_max, '0')];
            let v10092;
            switch (v10086[0]) {
              case 'None': {
                const v10093 = v10086[1];
                v10092 = false;
                
                break;
                }
              case 'Some': {
                const v10094 = v10086[1];
                v10092 = true;
                
                break;
                }
              }
            const v10095 = stdlib.gt(v10089, v3986);
            const v10096 = v10092 ? v10095 : false;
            const v10097 = stdlib.gt(v10084, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:86:34:decimal', stdlib.UInt_max, '0'));
            let v10098;
            if (v10097) {
              const v10101 = stdlib.lt(v10084, v3848);
              v10098 = v10101;
              }
            else {
              v10098 = false;
              }
            const v10102 = stdlib.ge(v10082, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:87:34:decimal', stdlib.UInt_max, '0'));
            const v10103 = stdlib.lt(v10082, stdlib.UInt_max);
            const v10104 = v10102 ? v10103 : false;
            const v10105 = v10096 ? v10098 : false;
            const v10106 = v10105 ? v10104 : false;
            v10067 = v10106;
            
            break;
            }
          case 'EjectMember': {
            const v10107 = v9983[1];
            const v10108 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v10107), null);
            let v10109;
            switch (v10108[0]) {
              case 'None': {
                const v10110 = v10108[1];
                v10109 = false;
                
                break;
                }
              case 'Some': {
                const v10111 = v10108[1];
                v10109 = true;
                
                break;
                }
              }
            const v10113 = stdlib.addressEq(v10107, v3949);
            const v10114 = v10113 ? false : true;
            const v10115 = v10109 ? v10114 : false;
            v10067 = v10115;
            
            break;
            }
          case 'None': {
            const v10116 = v9983[1];
            v10067 = false;
            
            break;
            }
          case 'Stop': {
            const v10117 = v9983[1];
            v10067 = true;
            
            break;
            }
          }
        stdlib.assert(v10067, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./dao/contracts/dao-core.rsh:321:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:324:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:324:13:function exp)'],
          msg: 'Bad suggestion is bad. Apologize to everyone.',
          who: 'Founder'
          });
        const v10120 = null;
        await txn2.getOutput('registerProposal', 'v10120', ctc0, v10120);
        null;
        const v10154 = stdlib.add(v3984, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:183:30:decimal', stdlib.UInt_max, '1'));
        const v10155 = {
          Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          action: v9983,
          index: v10154
          };
        const cv3874 = v3874;
        const cv3875 = true;
        const cv3876 = v10155;
        const cv3877 = v4509;
        const cv3880 = v3880;
        
        v3874 = cv3874;
        v3875 = cv3875;
        v3876 = cv3876;
        v3877 = cv3877;
        v3880 = cv3880;
        
        continue;
        break;
        }
      case 'voteProposal0_352': {
        const v10971 = v4508[1];
        undefined /* setApiDetails */;
        const v11023 = stdlib.le(v3880, stdlib.UInt_max);
        stdlib.assert(v11023, {
          at: './dao/contracts/dao-core.rsh:189:50:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Founder'
          });
        ;
        const v11454 = v10971[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:333:10:spread', stdlib.UInt_max, '0')];
        let v11458;
        if (v3985) {
          const v11460 = stdlib.mod(v3984, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
          const v11462 = stdlib.sub(v3984, v11460);
          const v11464 = stdlib.div(v11462, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
          v11458 = v11464;
          }
        else {
          v11458 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
          }
        const v11465 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4507), null);
        const v11466 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v11467 = stdlib.fromSome(v11465, v11466);
        const v11468 = v11467[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:120:11:array', stdlib.UInt_max, '0')];
        const v11469 = v11467[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:120:11:array', stdlib.UInt_max, '1')];
        const v11470 = stdlib.ge(v11468, v11458);
        stdlib.assert(v11470, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./dao/contracts/dao-core.rsh:121:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:334:22:application call to "requireIsMember" (defined at: ./dao/contracts/dao-core.rsh:118:36:function exp)', 'at ./dao/contracts/dao-core.rsh:361:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:361:13:function exp)'],
          msg: 'THIEF! SEIZE THEM!',
          who: 'Founder'
          });
        const v11472 = v3876.For;
        const v11473 = v3876.Against;
        let v11476;
        switch (v3955[0]) {
          case 'AllocateFunds': {
            const v11477 = v3955[1];
            const v11478 = v11477[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:76:21:array', stdlib.UInt_max, '0')];
            const v11479 = v11477[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:76:21:array', stdlib.UInt_max, '1')];
            const v11481 = stdlib.lt(v11479, v3880);
            const v11482 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v11478), null);
            let v11483;
            switch (v11482[0]) {
              case 'None': {
                const v11484 = v11482[1];
                v11483 = false;
                
                break;
                }
              case 'Some': {
                const v11485 = v11482[1];
                v11483 = true;
                
                break;
                }
              }
            const v11486 = v11483 ? v11481 : false;
            const v11488 = v3951 ? v11481 : v11486;
            v11476 = v11488;
            
            break;
            }
          case 'ChangeAdmin': {
            const v11489 = v3955[1];
            const v11490 = v11489.admin;
            const v11491 = v11489.fee;
            const v11493 = v11489.quorum;
            const v11495 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v11490), null);
            const v11497 = stdlib.fromSome(v11495, v11466);
            const v11498 = v11497[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:84:13:array', stdlib.UInt_max, '0')];
            let v11501;
            switch (v11495[0]) {
              case 'None': {
                const v11502 = v11495[1];
                v11501 = false;
                
                break;
                }
              case 'Some': {
                const v11503 = v11495[1];
                v11501 = true;
                
                break;
                }
              }
            const v11504 = stdlib.gt(v11498, v3986);
            const v11505 = v11501 ? v11504 : false;
            const v11506 = stdlib.gt(v11493, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:86:34:decimal', stdlib.UInt_max, '0'));
            let v11507;
            if (v11506) {
              const v11510 = stdlib.lt(v11493, v3848);
              v11507 = v11510;
              }
            else {
              v11507 = false;
              }
            const v11511 = stdlib.ge(v11491, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:87:34:decimal', stdlib.UInt_max, '0'));
            const v11512 = stdlib.lt(v11491, stdlib.UInt_max);
            const v11513 = v11511 ? v11512 : false;
            const v11514 = v11505 ? v11507 : false;
            const v11515 = v11514 ? v11513 : false;
            v11476 = v11515;
            
            break;
            }
          case 'EjectMember': {
            const v11516 = v3955[1];
            const v11517 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v11516), null);
            let v11518;
            switch (v11517[0]) {
              case 'None': {
                const v11519 = v11517[1];
                v11518 = false;
                
                break;
                }
              case 'Some': {
                const v11520 = v11517[1];
                v11518 = true;
                
                break;
                }
              }
            const v11522 = stdlib.addressEq(v11516, v3949);
            const v11523 = v11522 ? false : true;
            const v11524 = v11518 ? v11523 : false;
            v11476 = v11524;
            
            break;
            }
          case 'None': {
            const v11525 = v3955[1];
            v11476 = false;
            
            break;
            }
          case 'Stop': {
            const v11526 = v3955[1];
            v11476 = true;
            
            break;
            }
          }
        stdlib.assert(v11476, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./dao/contracts/dao-core.rsh:336:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:361:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:361:13:function exp)'],
          msg: 'No Proposal is currently active',
          who: 'Founder'
          });
        const v11528 = stdlib.gt(v11472, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:341:17:decimal', stdlib.UInt_max, '0'));
        if (v11528) {
          const v11530 = stdlib.sub(stdlib.UInt_max, v11473);
          const v11531 = stdlib.lt(v11472, v11530);
          stdlib.assert(v11531, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./dao/contracts/dao-core.rsh:342:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:361:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:361:13:function exp)'],
            msg: 'Voting limit reached',
            who: 'Founder'
            });
          }
        else {
          }
        const v11533 = stdlib.gt(v11473, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:344:21:decimal', stdlib.UInt_max, '0'));
        if (v11533) {
          const v11535 = stdlib.sub(stdlib.UInt_max, v11472);
          const v11536 = stdlib.lt(v11473, v11535);
          stdlib.assert(v11536, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./dao/contracts/dao-core.rsh:345:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:361:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:361:13:function exp)'],
            msg: 'Voting limit reached',
            who: 'Founder'
            });
          }
        else {
          }
        const v11540 = stdlib.add(v11472, v11473);
        const v11542 = stdlib.lt(v11540, v3952);
        stdlib.assert(v11542, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./dao/contracts/dao-core.rsh:348:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:361:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:361:13:function exp)'],
          msg: 'Quorum reached',
          who: 'Founder'
          });
        const v11549 = stdlib.lt(v11469, v3984);
        stdlib.assert(v11549, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./dao/contracts/dao-core.rsh:351:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:361:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:361:13:function exp)'],
          msg: 'Address has already voted in this session',
          who: 'Founder'
          });
        let v11551;
        switch (v11454[0]) {
          case 'Against': {
            const v11552 = v11454[1];
            const v11555 = stdlib.add(v11473, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:355:40:decimal', stdlib.UInt_max, '1'));
            const v11556 = [v11472, v11555];
            v11551 = v11556;
            
            break;
            }
          case 'For': {
            const v11558 = v11454[1];
            const v11561 = stdlib.add(v11472, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:354:27:decimal', stdlib.UInt_max, '1'));
            const v11562 = [v11561, v11473];
            v11551 = v11562;
            
            break;
            }
          }
        const v11564 = v11551[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:353:13:array', stdlib.UInt_max, '0')];
        const v11565 = v11551[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:353:13:array', stdlib.UInt_max, '1')];
        const v11567 = stdlib.sub(stdlib.UInt_max, v11565);
        const v11568 = stdlib.lt(v11564, v11567);
        stdlib.assert(v11568, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./dao/contracts/dao-core.rsh:357:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:361:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:361:13:function exp)'],
          msg: 'Voting limit reached (2)',
          who: 'Founder'
          });
        const v11571 = stdlib.sub(stdlib.UInt_max, v11564);
        const v11572 = stdlib.lt(v11565, v11571);
        stdlib.assert(v11572, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./dao/contracts/dao-core.rsh:358:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:361:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:361:13:function exp)'],
          msg: 'Voting limit reached (2)',
          who: 'Founder'
          });
        const v11575 = null;
        await txn2.getOutput('voteProposal', 'v11575', ctc0, v11575);
        const v11584 = stdlib.lt(v11468, stdlib.UInt_max);
        let v11585;
        if (v11584) {
          const v11588 = stdlib.add(v11468, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:365:45:decimal', stdlib.UInt_max, '1'));
          const v11589 = [v11588, v3984];
          v11585 = v11589;
          }
        else {
          const v11590 = [v11468, v3984];
          v11585 = v11590;
          }
        await stdlib.mapSet(map0, v4507, v11585);
        const v11597 = stdlib.add(v11564, v11565);
        const v11599 = stdlib.ge(v11597, v3952);
        let v11601;
        if (v3985) {
          const v11603 = stdlib.mod(v3984, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
          const v11605 = stdlib.sub(v3984, v11603);
          const v11607 = stdlib.div(v11605, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
          v11601 = v11607;
          }
        else {
          v11601 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
          }
        let v11608;
        switch (v3955[0]) {
          case 'AllocateFunds': {
            const v11609 = v3955[1];
            const v11610 = v11609[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:76:21:array', stdlib.UInt_max, '0')];
            const v11611 = v11609[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:76:21:array', stdlib.UInt_max, '1')];
            const v11613 = stdlib.lt(v11611, v3880);
            const v11614 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v11610), null);
            let v11615;
            switch (v11614[0]) {
              case 'None': {
                const v11616 = v11614[1];
                v11615 = false;
                
                break;
                }
              case 'Some': {
                const v11617 = v11614[1];
                v11615 = true;
                
                break;
                }
              }
            const v11618 = v11615 ? v11613 : false;
            const v11620 = v3951 ? v11613 : v11618;
            v11608 = v11620;
            
            break;
            }
          case 'ChangeAdmin': {
            const v11621 = v3955[1];
            const v11622 = v11621.admin;
            const v11623 = v11621.fee;
            const v11625 = v11621.quorum;
            const v11627 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v11622), null);
            const v11629 = stdlib.fromSome(v11627, v11466);
            const v11630 = v11629[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:84:13:array', stdlib.UInt_max, '0')];
            let v11633;
            switch (v11627[0]) {
              case 'None': {
                const v11634 = v11627[1];
                v11633 = false;
                
                break;
                }
              case 'Some': {
                const v11635 = v11627[1];
                v11633 = true;
                
                break;
                }
              }
            const v11636 = stdlib.gt(v11630, v11601);
            const v11637 = v11633 ? v11636 : false;
            const v11638 = stdlib.gt(v11625, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:86:34:decimal', stdlib.UInt_max, '0'));
            let v11639;
            if (v11638) {
              const v11642 = stdlib.lt(v11625, v3848);
              v11639 = v11642;
              }
            else {
              v11639 = false;
              }
            const v11643 = stdlib.ge(v11623, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:87:34:decimal', stdlib.UInt_max, '0'));
            const v11644 = stdlib.lt(v11623, stdlib.UInt_max);
            const v11645 = v11643 ? v11644 : false;
            const v11646 = v11637 ? v11639 : false;
            const v11647 = v11646 ? v11645 : false;
            v11608 = v11647;
            
            break;
            }
          case 'EjectMember': {
            const v11648 = v3955[1];
            const v11649 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v11648), null);
            let v11650;
            switch (v11649[0]) {
              case 'None': {
                const v11651 = v11649[1];
                v11650 = false;
                
                break;
                }
              case 'Some': {
                const v11652 = v11649[1];
                v11650 = true;
                
                break;
                }
              }
            const v11654 = stdlib.addressEq(v11648, v3949);
            const v11655 = v11654 ? false : true;
            const v11656 = v11650 ? v11655 : false;
            v11608 = v11656;
            
            break;
            }
          case 'None': {
            const v11657 = v3955[1];
            v11608 = false;
            
            break;
            }
          case 'Stop': {
            const v11658 = v3955[1];
            v11608 = true;
            
            break;
            }
          }
        if (v11599) {
          const v11659 = stdlib.gt(v11564, v11565);
          const v11660 = v11608 ? v11659 : false;
          if (v11660) {
            switch (v3955[0]) {
              case 'AllocateFunds': {
                const v11661 = v3955[1];
                const v11662 = v11661[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:150:32:application', stdlib.UInt_max, '0')];
                const v11663 = v11661[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:150:32:application', stdlib.UInt_max, '1')];
                null;
                const v11670 = stdlib.sub(v3880, v11663);
                const v11671 = stdlib.ge(v11670, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:154:29:application', stdlib.UInt_max, '0'));
                stdlib.assert(v11671, {
                  at: './dao/contracts/dao-core.rsh:154:29:application',
                  fs: ['at ./dao/contracts/dao-core.rsh:152:28:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:153:44:function exp)', 'at ./dao/contracts/dao-core.rsh:152:28:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:152:28:function exp)', 'at ./dao/contracts/dao-core.rsh:367:28:application call to "doProposal" (defined at: ./dao/contracts/dao-core.rsh:132:51:function exp)', 'at ./dao/contracts/dao-core.rsh:361:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:361:13:function exp)'],
                  msg: 'assume >= 0',
                  who: 'Founder'
                  });
                ;
                const v11675 = {
                  Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  action: v3872,
                  index: v3984
                  };
                const cv3874 = v3874;
                const cv3875 = true;
                const cv3876 = v11675;
                const cv3877 = v4509;
                const cv3880 = v11670;
                
                v3874 = cv3874;
                v3875 = cv3875;
                v3876 = cv3876;
                v3877 = cv3877;
                v3880 = cv3880;
                
                continue;
                break;
                }
              case 'ChangeAdmin': {
                const v11762 = v3955[1];
                const v11763 = v11762.admin;
                const v11764 = v11762.registerSelf;
                const v11765 = v11762.fee;
                const v11766 = v11762.quorum;
                const v11767 = v11762.openTreasury;
                null;
                const v11801 = {
                  Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  action: v3872,
                  index: v3984
                  };
                const v11802 = {
                  admin: v11763,
                  fee: v11765,
                  openTreasury: v11767,
                  quorum: v11766,
                  registerSelf: v11764
                  };
                const cv3874 = v11802;
                const cv3875 = true;
                const cv3876 = v11801;
                const cv3877 = v4509;
                const cv3880 = v3880;
                
                v3874 = cv3874;
                v3875 = cv3875;
                v3876 = cv3876;
                v3877 = cv3877;
                v3880 = cv3880;
                
                continue;
                break;
                }
              case 'EjectMember': {
                const v11866 = v3955[1];
                null;
                const v11912 = v11866;
                await stdlib.mapSet(map0, v11866, undefined /* Nothing */);
                null;
                const v11915 = {
                  Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  action: v3872,
                  index: v3984
                  };
                const cv3874 = v3874;
                const cv3875 = true;
                const cv3876 = v11915;
                const cv3877 = v4509;
                const cv3880 = v3880;
                
                v3874 = cv3874;
                v3875 = cv3875;
                v3876 = cv3876;
                v3877 = cv3877;
                v3880 = cv3880;
                
                continue;
                break;
                }
              case 'None': {
                const v11965 = v3955[1];
                null;
                const v12026 = {
                  Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  action: v3872,
                  index: v3984
                  };
                const cv3874 = v3874;
                const cv3875 = true;
                const cv3876 = v12026;
                const cv3877 = v4509;
                const cv3880 = v3880;
                
                v3874 = cv3874;
                v3875 = cv3875;
                v3876 = cv3876;
                v3877 = cv3877;
                v3880 = cv3880;
                
                continue;
                break;
                }
              case 'Stop': {
                const v12064 = v3955[1];
                null;
                const v12138 = undefined /* Remote */;
                const v12139 = await txn2.getOutput('internal', 'v12138', ctc7, v12138);
                const v12141 = v12139[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:168:33:application', stdlib.UInt_max, '0')];
                const v12146 = stdlib.add(v3880, v12141);
                const v12147 = stdlib.le(v12146, stdlib.UInt_max);
                stdlib.assert(v12147, {
                  at: './dao/contracts/dao-core.rsh:168:33:application',
                  fs: ['at ./dao/contracts/dao-core.rsh:152:28:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:167:20:function exp)', 'at ./dao/contracts/dao-core.rsh:152:28:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:152:28:function exp)', 'at ./dao/contracts/dao-core.rsh:367:28:application call to "doProposal" (defined at: ./dao/contracts/dao-core.rsh:132:51:function exp)', 'at ./dao/contracts/dao-core.rsh:361:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:361:13:function exp)'],
                  msg: 'assume <= UInt.max',
                  who: 'Founder'
                  });
                const v12151 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v12141);
                stdlib.assert(v12151, {
                  at: './dao/contracts/dao-core.rsh:168:33:application',
                  fs: ['at ./dao/contracts/dao-core.rsh:152:28:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:167:20:function exp)', 'at ./dao/contracts/dao-core.rsh:152:28:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:152:28:function exp)', 'at ./dao/contracts/dao-core.rsh:367:28:application call to "doProposal" (defined at: ./dao/contracts/dao-core.rsh:132:51:function exp)', 'at ./dao/contracts/dao-core.rsh:361:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:361:13:function exp)'],
                  msg: 'remote bill check',
                  who: 'Founder'
                  });
                const v12153 = {
                  Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  action: v3872,
                  index: v3984
                  };
                const cv3874 = v3874;
                const cv3875 = false;
                const cv3876 = v12153;
                const cv3877 = v4509;
                const cv3880 = v12146;
                
                v3874 = cv3874;
                v3875 = cv3875;
                v3876 = cv3876;
                v3877 = cv3877;
                v3880 = cv3880;
                
                continue;
                break;
                }
              }}
          else {
            if (v11659) {
              switch (v3955[0]) {
                case 'AllocateFunds': {
                  const v12163 = v3955[1];
                  null;
                  const v12167 = {
                    Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    action: v3872,
                    index: v3984
                    };
                  const cv3874 = v3874;
                  const cv3875 = true;
                  const cv3876 = v12167;
                  const cv3877 = v4509;
                  const cv3880 = v3880;
                  
                  v3874 = cv3874;
                  v3875 = cv3875;
                  v3876 = cv3876;
                  v3877 = cv3877;
                  v3880 = cv3880;
                  
                  continue;
                  break;
                  }
                case 'ChangeAdmin': {
                  const v12173 = v3955[1];
                  null;
                  const v12180 = {
                    Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    action: v3872,
                    index: v3984
                    };
                  const cv3874 = v3874;
                  const cv3875 = true;
                  const cv3876 = v12180;
                  const cv3877 = v4509;
                  const cv3880 = v3880;
                  
                  v3874 = cv3874;
                  v3875 = cv3875;
                  v3876 = cv3876;
                  v3877 = cv3877;
                  v3880 = cv3880;
                  
                  continue;
                  break;
                  }
                case 'EjectMember': {
                  const v12186 = v3955[1];
                  null;
                  const v12188 = {
                    Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    action: v3872,
                    index: v3984
                    };
                  const cv3874 = v3874;
                  const cv3875 = true;
                  const cv3876 = v12188;
                  const cv3877 = v4509;
                  const cv3880 = v3880;
                  
                  v3874 = cv3874;
                  v3875 = cv3875;
                  v3876 = cv3876;
                  v3877 = cv3877;
                  v3880 = cv3880;
                  
                  continue;
                  break;
                  }
                case 'None': {
                  const v12194 = v3955[1];
                  null;
                  const v12196 = {
                    Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    action: v3872,
                    index: v3984
                    };
                  const cv3874 = v3874;
                  const cv3875 = true;
                  const cv3876 = v12196;
                  const cv3877 = v4509;
                  const cv3880 = v3880;
                  
                  v3874 = cv3874;
                  v3875 = cv3875;
                  v3876 = cv3876;
                  v3877 = cv3877;
                  v3880 = cv3880;
                  
                  continue;
                  break;
                  }
                case 'Stop': {
                  const v12202 = v3955[1];
                  null;
                  const v12204 = {
                    Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    action: v3872,
                    index: v3984
                    };
                  const cv3874 = v3874;
                  const cv3875 = true;
                  const cv3876 = v12204;
                  const cv3877 = v4509;
                  const cv3880 = v3880;
                  
                  v3874 = cv3874;
                  v3875 = cv3875;
                  v3876 = cv3876;
                  v3877 = cv3877;
                  v3880 = cv3880;
                  
                  continue;
                  break;
                  }
                }}
            else {
              switch (v3955[0]) {
                case 'AllocateFunds': {
                  const v12210 = v3955[1];
                  null;
                  const v12214 = {
                    Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    action: v3872,
                    index: v3984
                    };
                  const cv3874 = v3874;
                  const cv3875 = true;
                  const cv3876 = v12214;
                  const cv3877 = v4509;
                  const cv3880 = v3880;
                  
                  v3874 = cv3874;
                  v3875 = cv3875;
                  v3876 = cv3876;
                  v3877 = cv3877;
                  v3880 = cv3880;
                  
                  continue;
                  break;
                  }
                case 'ChangeAdmin': {
                  const v12220 = v3955[1];
                  null;
                  const v12227 = {
                    Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    action: v3872,
                    index: v3984
                    };
                  const cv3874 = v3874;
                  const cv3875 = true;
                  const cv3876 = v12227;
                  const cv3877 = v4509;
                  const cv3880 = v3880;
                  
                  v3874 = cv3874;
                  v3875 = cv3875;
                  v3876 = cv3876;
                  v3877 = cv3877;
                  v3880 = cv3880;
                  
                  continue;
                  break;
                  }
                case 'EjectMember': {
                  const v12233 = v3955[1];
                  null;
                  const v12235 = {
                    Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    action: v3872,
                    index: v3984
                    };
                  const cv3874 = v3874;
                  const cv3875 = true;
                  const cv3876 = v12235;
                  const cv3877 = v4509;
                  const cv3880 = v3880;
                  
                  v3874 = cv3874;
                  v3875 = cv3875;
                  v3876 = cv3876;
                  v3877 = cv3877;
                  v3880 = cv3880;
                  
                  continue;
                  break;
                  }
                case 'None': {
                  const v12241 = v3955[1];
                  null;
                  const v12243 = {
                    Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    action: v3872,
                    index: v3984
                    };
                  const cv3874 = v3874;
                  const cv3875 = true;
                  const cv3876 = v12243;
                  const cv3877 = v4509;
                  const cv3880 = v3880;
                  
                  v3874 = cv3874;
                  v3875 = cv3875;
                  v3876 = cv3876;
                  v3877 = cv3877;
                  v3880 = cv3880;
                  
                  continue;
                  break;
                  }
                case 'Stop': {
                  const v12249 = v3955[1];
                  null;
                  const v12251 = {
                    Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    action: v3872,
                    index: v3984
                    };
                  const cv3874 = v3874;
                  const cv3875 = true;
                  const cv3876 = v12251;
                  const cv3877 = v4509;
                  const cv3880 = v3880;
                  
                  v3874 = cv3874;
                  v3875 = cv3875;
                  v3876 = cv3876;
                  v3877 = cv3877;
                  v3880 = cv3880;
                  
                  continue;
                  break;
                  }
                }}}}
        else {
          const v12257 = {
            Against: v11565,
            For: v11564,
            action: v3955,
            index: v3984
            };
          const cv3874 = v3874;
          const cv3875 = true;
          const cv3876 = v12257;
          const cv3877 = v4509;
          const cv3880 = v3880;
          
          v3874 = cv3874;
          v3875 = cv3875;
          v3876 = cv3876;
          v3877 = cv3877;
          v3880 = cv3880;
          
          continue;}
        break;
        }
      }
    
    }
  const v12263 = v3874.admin;
  const v12312 = stdlib.sub(v3880, v3880);
  const v12313 = stdlib.ge(v12312, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:372:25:application', stdlib.UInt_max, '0'));
  stdlib.assert(v12313, {
    at: './dao/contracts/dao-core.rsh:372:25:application',
    fs: [],
    msg: 'assume >= 0',
    who: 'Founder'
    });
  ;
  const v12317 = (stdlib.le(await ctc.getBalance(), v12312) ? stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:373:29:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(), v12312));
  const v12318 = stdlib.add(v12317, v12312);
  const v12323 = stdlib.sub(v12318, v12317);
  const v12324 = stdlib.ge(v12323, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:373:35:application', stdlib.UInt_max, '0'));
  stdlib.assert(v12324, {
    at: './dao/contracts/dao-core.rsh:373:35:application',
    fs: [],
    msg: 'assume >= 0',
    who: 'Founder'
    });
  ;
  return;
  
  
  };
export async function _addMember3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _addMember3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _addMember3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc6 = stdlib.T_Contract;
  const ctc7 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Struct([['admin', ctc4], ['registerSelf', ctc8], ['fee', ctc1], ['quorum', ctc1], ['openTreasury', ctc8]]);
  const ctc10 = stdlib.T_Data({
    AllocateFunds: ctc7,
    ChangeAdmin: ctc9,
    EjectMember: ctc4,
    None: ctc0,
    Stop: ctc0
    });
  const ctc11 = stdlib.T_Object({
    admin: ctc4,
    fee: ctc1,
    openTreasury: ctc8,
    quorum: ctc1,
    registerSelf: ctc8
    });
  const ctc12 = stdlib.T_Object({
    Against: ctc1,
    For: ctc1,
    action: ctc10,
    index: ctc1
    });
  const ctc13 = stdlib.T_Tuple([ctc4]);
  const ctc14 = stdlib.T_Tuple([ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc8]);
  const ctc16 = stdlib.T_Tuple([ctc10]);
  const ctc17 = stdlib.T_Data({
    Against: ctc0,
    For: ctc0
    });
  const ctc18 = stdlib.T_Tuple([ctc17]);
  const ctc19 = stdlib.T_Data({
    addMember0_352: ctc13,
    donate0_352: ctc14,
    eject0_352: ctc13,
    joinLeave0_352: ctc15,
    registerProposal0_352: ctc16,
    voteProposal0_352: ctc18
    });
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v3833, v3834, v3839, v3848, v3851, v3872, v3874, v3876, v3880, v3949, v3950, v3951, v3952, v3953, v3955, v3984, v3985, v3986] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc6, ctc1, ctc6, ctc10, ctc11, ctc12, ctc1, ctc4, ctc1, ctc8, ctc1, ctc8, ctc10, ctc1, ctc8, ctc1]);
  const v3995 = stdlib.protect(ctc13, await interact.in(), {
    at: './dao/contracts/dao-core.rsh:1:23:application',
    fs: ['at ./dao/contracts/dao-core.rsh:216:36:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:216:36:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to "runaddMember0_352" (defined at: ./dao/contracts/dao-core.rsh:216:10:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:189:50:function exp)'],
    msg: 'in',
    who: 'addMember'
    });
  const v3996 = v3995[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v3998 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v3996), null);
  const v3999 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v4000 = stdlib.fromSome(v3998, v3999);
  const v4001 = v4000[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:115:11:array', stdlib.UInt_max, '0')];
  const v4003 = stdlib.ge(v4001, v3986);
  stdlib.assert(v4003, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./dao/contracts/dao-core.rsh:217:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:216:36:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:216:36:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to "runaddMember0_352" (defined at: ./dao/contracts/dao-core.rsh:216:10:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:189:50:function exp)'],
    msg: 'User is below Citizen Rank threshold',
    who: 'addMember'
    });
  let v4006;
  switch (v3998[0]) {
    case 'None': {
      const v4007 = v3998[1];
      v4006 = true;
      
      break;
      }
    case 'Some': {
      const v4008 = v3998[1];
      v4006 = false;
      
      break;
      }
    }
  stdlib.assert(v4006, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./dao/contracts/dao-core.rsh:218:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:216:36:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:216:36:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to "runaddMember0_352" (defined at: ./dao/contracts/dao-core.rsh:216:10:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:189:50:function exp)'],
    msg: 'Address is already a member',
    who: 'addMember'
    });
  const v4015 = ['addMember0_352', v3995];
  
  let v4471;
  switch (v3998[0]) {
    case 'None': {
      const v4472 = v3998[1];
      v4471 = true;
      
      break;
      }
    case 'Some': {
      const v4473 = v3998[1];
      v4471 = false;
      
      break;
      }
    }
  stdlib.assert(v4471, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./dao/contracts/dao-core.rsh:218:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:216:36:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:216:36:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:216:36:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:189:50:function exp)'],
    msg: 'Address is already a member',
    who: 'addMember'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v3833, v3834, v3839, v3848, v3851, v3872, v3874, v3876, v3880, v3949, v3950, v3951, v3952, v3953, v3955, v3984, v3985, v3986, v4015],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc19],
    pay: [v3950, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v4508], secs: v4510, time: v4509, didSend: v2529, from: v4507 } = txn1;
      
      switch (v4508[0]) {
        case 'addMember0_352': {
          const v4511 = v4508[1];
          sim_r.txns.push({
            kind: 'api',
            who: "addMember"
            });
          const v4516 = v4511[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:216:10:spread', stdlib.UInt_max, '0')];
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v4516), null);
          const v4562 = stdlib.add(v3880, v3950);
          sim_r.txns.push({
            amt: v3950,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v4582 = [v3986, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 0, v4516, v4582);
          null;
          const v4584 = null;
          const v4585 = await txn1.getOutput('addMember', 'v4584', ctc0, v4584);
          
          const v19054 = v3874;
          const v19056 = v3876;
          const v19058 = v4562;
          const v19059 = v3874.admin;
          const v19060 = v3874.fee;
          const v19061 = v3874.openTreasury;
          const v19062 = v3874.quorum;
          const v19063 = v3874.registerSelf;
          const v19064 = v3876.action;
          const v19065 = v3876.index;
          const v19066 = stdlib.ge(v19065, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
          let v19067;
          if (v19066) {
            const v19068 = stdlib.mod(v19065, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
            const v19069 = stdlib.sub(v19065, v19068);
            const v19070 = stdlib.div(v19069, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
            v19067 = v19070;
            }
          else {
            v19067 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
            }
          sim_r.isHalt = false;
          
          break;
          }
        case 'donate0_352': {
          const v5803 = v4508[1];
          
          break;
          }
        case 'eject0_352': {
          const v7095 = v4508[1];
          
          break;
          }
        case 'joinLeave0_352': {
          const v8387 = v4508[1];
          
          break;
          }
        case 'registerProposal0_352': {
          const v9679 = v4508[1];
          
          break;
          }
        case 'voteProposal0_352': {
          const v10971 = v4508[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc6, ctc1, ctc6, ctc10, ctc11, ctc12, ctc1, ctc4, ctc1, ctc8, ctc1, ctc8, ctc10, ctc1, ctc8, ctc1, ctc19],
    waitIfNotPresent: false
    }));
  const {data: [v4508], secs: v4510, time: v4509, didSend: v2529, from: v4507 } = txn1;
  switch (v4508[0]) {
    case 'addMember0_352': {
      const v4511 = v4508[1];
      undefined /* setApiDetails */;
      const v4516 = v4511[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:216:10:spread', stdlib.UInt_max, '0')];
      const v4517 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4516), null);
      const v4518 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v4519 = stdlib.fromSome(v4517, v4518);
      const v4520 = v4519[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:115:11:array', stdlib.UInt_max, '0')];
      const v4522 = stdlib.ge(v4520, v3986);
      stdlib.assert(v4522, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./dao/contracts/dao-core.rsh:217:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:216:36:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:216:36:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:216:36:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:189:50:function exp)'],
        msg: 'User is below Citizen Rank threshold',
        who: 'addMember'
        });
      let v4525;
      switch (v4517[0]) {
        case 'None': {
          const v4526 = v4517[1];
          v4525 = true;
          
          break;
          }
        case 'Some': {
          const v4527 = v4517[1];
          v4525 = false;
          
          break;
          }
        }
      stdlib.assert(v4525, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./dao/contracts/dao-core.rsh:218:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:216:36:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:216:36:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:216:36:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:189:50:function exp)'],
        msg: 'Address is already a member',
        who: 'addMember'
        });
      const v4562 = stdlib.add(v3880, v3950);
      const v4563 = stdlib.le(v4562, stdlib.UInt_max);
      stdlib.assert(v4563, {
        at: './dao/contracts/dao-core.rsh:189:50:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'addMember'
        });
      ;
      let v4577;
      switch (v4517[0]) {
        case 'None': {
          const v4578 = v4517[1];
          v4577 = true;
          
          break;
          }
        case 'Some': {
          const v4579 = v4517[1];
          v4577 = false;
          
          break;
          }
        }
      stdlib.assert(v4577, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./dao/contracts/dao-core.rsh:218:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:223:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:223:13:function exp)'],
        msg: 'Address is already a member',
        who: 'addMember'
        });
      const v4582 = [v3986, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      await stdlib.mapSet(map0, v4516, v4582);
      null;
      const v4584 = null;
      const v4585 = await txn1.getOutput('addMember', 'v4584', ctc0, v4584);
      if (v2529) {
        stdlib.protect(ctc0, await interact.out(v4511, v4585), {
          at: './dao/contracts/dao-core.rsh:216:11:application',
          fs: ['at ./dao/contracts/dao-core.rsh:216:11:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:216:11:function exp)', 'at ./dao/contracts/dao-core.rsh:225:12:application call to "k" (defined at: ./dao/contracts/dao-core.rsh:223:13:function exp)', 'at ./dao/contracts/dao-core.rsh:223:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:223:13:function exp)'],
          msg: 'out',
          who: 'addMember'
          });
        }
      else {
        }
      
      const v19054 = v3874;
      const v19056 = v3876;
      const v19058 = v4562;
      const v19059 = v3874.admin;
      const v19060 = v3874.fee;
      const v19061 = v3874.openTreasury;
      const v19062 = v3874.quorum;
      const v19063 = v3874.registerSelf;
      const v19064 = v3876.action;
      const v19065 = v3876.index;
      const v19066 = stdlib.ge(v19065, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
      let v19067;
      if (v19066) {
        const v19068 = stdlib.mod(v19065, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
        const v19069 = stdlib.sub(v19065, v19068);
        const v19070 = stdlib.div(v19069, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
        v19067 = v19070;
        }
      else {
        v19067 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
        }
      return;
      
      break;
      }
    case 'donate0_352': {
      const v5803 = v4508[1];
      return;
      break;
      }
    case 'eject0_352': {
      const v7095 = v4508[1];
      return;
      break;
      }
    case 'joinLeave0_352': {
      const v8387 = v4508[1];
      return;
      break;
      }
    case 'registerProposal0_352': {
      const v9679 = v4508[1];
      return;
      break;
      }
    case 'voteProposal0_352': {
      const v10971 = v4508[1];
      return;
      break;
      }
    }
  
  
  };
export async function _donate3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _donate3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _donate3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc6 = stdlib.T_Contract;
  const ctc7 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Struct([['admin', ctc4], ['registerSelf', ctc8], ['fee', ctc1], ['quorum', ctc1], ['openTreasury', ctc8]]);
  const ctc10 = stdlib.T_Data({
    AllocateFunds: ctc7,
    ChangeAdmin: ctc9,
    EjectMember: ctc4,
    None: ctc0,
    Stop: ctc0
    });
  const ctc11 = stdlib.T_Object({
    admin: ctc4,
    fee: ctc1,
    openTreasury: ctc8,
    quorum: ctc1,
    registerSelf: ctc8
    });
  const ctc12 = stdlib.T_Object({
    Against: ctc1,
    For: ctc1,
    action: ctc10,
    index: ctc1
    });
  const ctc13 = stdlib.T_Tuple([ctc1]);
  const ctc14 = stdlib.T_Tuple([ctc4]);
  const ctc15 = stdlib.T_Tuple([ctc8]);
  const ctc16 = stdlib.T_Tuple([ctc10]);
  const ctc17 = stdlib.T_Data({
    Against: ctc0,
    For: ctc0
    });
  const ctc18 = stdlib.T_Tuple([ctc17]);
  const ctc19 = stdlib.T_Data({
    addMember0_352: ctc14,
    donate0_352: ctc13,
    eject0_352: ctc14,
    joinLeave0_352: ctc15,
    registerProposal0_352: ctc16,
    voteProposal0_352: ctc18
    });
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v3833, v3834, v3839, v3848, v3851, v3872, v3874, v3876, v3880, v3949, v3950, v3951, v3952, v3953, v3955, v3984, v3985, v3986] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc6, ctc1, ctc6, ctc10, ctc11, ctc12, ctc1, ctc4, ctc1, ctc8, ctc1, ctc8, ctc10, ctc1, ctc8, ctc1]);
  const v4019 = stdlib.protect(ctc13, await interact.in(), {
    at: './dao/contracts/dao-core.rsh:1:23:application',
    fs: ['at ./dao/contracts/dao-core.rsh:232:33:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:232:33:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to "rundonate0_352" (defined at: ./dao/contracts/dao-core.rsh:232:10:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:189:50:function exp)'],
    msg: 'in',
    who: 'donate'
    });
  const v4020 = v4019[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v4024 = stdlib.sub(stdlib.UInt_max, v4020);
  const v4025 = stdlib.lt(v3880, v4024);
  stdlib.assert(v4025, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./dao/contracts/dao-core.rsh:233:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:232:33:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:232:33:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to "rundonate0_352" (defined at: ./dao/contracts/dao-core.rsh:232:10:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:189:50:function exp)'],
    msg: 'Donation is too generous',
    who: 'donate'
    });
  const v4032 = ['donate0_352', v4019];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3833, v3834, v3839, v3848, v3851, v3872, v3874, v3876, v3880, v3949, v3950, v3951, v3952, v3953, v3955, v3984, v3985, v3986, v4032],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc19],
    pay: [v4020, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v4508], secs: v4510, time: v4509, didSend: v2529, from: v4507 } = txn1;
      
      switch (v4508[0]) {
        case 'addMember0_352': {
          const v4511 = v4508[1];
          
          break;
          }
        case 'donate0_352': {
          const v5803 = v4508[1];
          sim_r.txns.push({
            kind: 'api',
            who: "donate"
            });
          const v5823 = v5803[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:232:10:spread', stdlib.UInt_max, '0')];
          const v5854 = stdlib.add(v3880, v5823);
          sim_r.txns.push({
            amt: v5823,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v5892 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v4507), null);
          let v5893;
          switch (v5892[0]) {
            case 'None': {
              const v5894 = v5892[1];
              v5893 = false;
              
              break;
              }
            case 'Some': {
              const v5895 = v5892[1];
              v5893 = true;
              
              break;
              }
            }
          if (v5893) {
            const v5897 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
            const v5898 = stdlib.fromSome(v5892, v5897);
            const v5899 = v5898[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:240:19:array', stdlib.UInt_max, '0')];
            const v5900 = v5898[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:240:19:array', stdlib.UInt_max, '1')];
            const v5902 = stdlib.sub(stdlib.UInt_max, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:242:36:decimal', stdlib.UInt_max, '1'));
            const v5903 = stdlib.lt(v5899, v5902);
            let v5904;
            if (v5903) {
              const v5907 = stdlib.add(v5899, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:243:30:decimal', stdlib.UInt_max, '1'));
              const v5908 = [v5907, v5900];
              v5904 = v5908;
              }
            else {
              const v5909 = stdlib.ge(v5899, v3986);
              const v5910 = v5909 ? v5899 : v3986;
              const v5911 = [v5910, v5900];
              v5904 = v5911;
              }
            await stdlib.simMapSet(sim_r, 0, v4507, v5904);
            const v5912 = null;
            const v5913 = await txn1.getOutput('donate', 'v5912', ctc0, v5912);
            
            const v19779 = v3874;
            const v19781 = v3876;
            const v19783 = v5854;
            const v19784 = v3874.admin;
            const v19785 = v3874.fee;
            const v19786 = v3874.openTreasury;
            const v19787 = v3874.quorum;
            const v19788 = v3874.registerSelf;
            const v19789 = v3876.action;
            const v19790 = v3876.index;
            const v19791 = stdlib.ge(v19790, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
            let v19792;
            if (v19791) {
              const v19793 = stdlib.mod(v19790, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
              const v19794 = stdlib.sub(v19790, v19793);
              const v19795 = stdlib.div(v19794, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
              v19792 = v19795;
              }
            else {
              v19792 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
              }
            sim_r.isHalt = false;
            }
          else {
            const v5920 = null;
            const v5921 = await txn1.getOutput('donate', 'v5920', ctc0, v5920);
            
            const v19808 = v3874;
            const v19810 = v3876;
            const v19812 = v5854;
            const v19813 = v3874.admin;
            const v19814 = v3874.fee;
            const v19815 = v3874.openTreasury;
            const v19816 = v3874.quorum;
            const v19817 = v3874.registerSelf;
            const v19818 = v3876.action;
            const v19819 = v3876.index;
            const v19820 = stdlib.ge(v19819, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
            let v19821;
            if (v19820) {
              const v19822 = stdlib.mod(v19819, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
              const v19823 = stdlib.sub(v19819, v19822);
              const v19824 = stdlib.div(v19823, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
              v19821 = v19824;
              }
            else {
              v19821 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
              }
            sim_r.isHalt = false;
            }
          break;
          }
        case 'eject0_352': {
          const v7095 = v4508[1];
          
          break;
          }
        case 'joinLeave0_352': {
          const v8387 = v4508[1];
          
          break;
          }
        case 'registerProposal0_352': {
          const v9679 = v4508[1];
          
          break;
          }
        case 'voteProposal0_352': {
          const v10971 = v4508[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc6, ctc1, ctc6, ctc10, ctc11, ctc12, ctc1, ctc4, ctc1, ctc8, ctc1, ctc8, ctc10, ctc1, ctc8, ctc1, ctc19],
    waitIfNotPresent: false
    }));
  const {data: [v4508], secs: v4510, time: v4509, didSend: v2529, from: v4507 } = txn1;
  switch (v4508[0]) {
    case 'addMember0_352': {
      const v4511 = v4508[1];
      return;
      break;
      }
    case 'donate0_352': {
      const v5803 = v4508[1];
      undefined /* setApiDetails */;
      const v5823 = v5803[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:232:10:spread', stdlib.UInt_max, '0')];
      const v5826 = stdlib.sub(stdlib.UInt_max, v5823);
      const v5827 = stdlib.lt(v3880, v5826);
      stdlib.assert(v5827, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./dao/contracts/dao-core.rsh:233:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:232:33:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:232:33:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:232:33:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:189:50:function exp)'],
        msg: 'Donation is too generous',
        who: 'donate'
        });
      const v5854 = stdlib.add(v3880, v5823);
      const v5855 = stdlib.le(v5854, stdlib.UInt_max);
      stdlib.assert(v5855, {
        at: './dao/contracts/dao-core.rsh:189:50:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'donate'
        });
      ;
      const v5889 = stdlib.lt(v5854, v5826);
      stdlib.assert(v5889, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./dao/contracts/dao-core.rsh:233:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:238:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:238:13:function exp)'],
        msg: 'Donation is too generous',
        who: 'donate'
        });
      const v5892 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4507), null);
      let v5893;
      switch (v5892[0]) {
        case 'None': {
          const v5894 = v5892[1];
          v5893 = false;
          
          break;
          }
        case 'Some': {
          const v5895 = v5892[1];
          v5893 = true;
          
          break;
          }
        }
      if (v5893) {
        const v5897 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v5898 = stdlib.fromSome(v5892, v5897);
        const v5899 = v5898[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:240:19:array', stdlib.UInt_max, '0')];
        const v5900 = v5898[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:240:19:array', stdlib.UInt_max, '1')];
        const v5902 = stdlib.sub(stdlib.UInt_max, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:242:36:decimal', stdlib.UInt_max, '1'));
        const v5903 = stdlib.lt(v5899, v5902);
        let v5904;
        if (v5903) {
          const v5907 = stdlib.add(v5899, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:243:30:decimal', stdlib.UInt_max, '1'));
          const v5908 = [v5907, v5900];
          v5904 = v5908;
          }
        else {
          const v5909 = stdlib.ge(v5899, v3986);
          const v5910 = v5909 ? v5899 : v3986;
          const v5911 = [v5910, v5900];
          v5904 = v5911;
          }
        await stdlib.mapSet(map0, v4507, v5904);
        const v5912 = null;
        const v5913 = await txn1.getOutput('donate', 'v5912', ctc0, v5912);
        if (v2529) {
          stdlib.protect(ctc0, await interact.out(v5803, v5913), {
            at: './dao/contracts/dao-core.rsh:232:11:application',
            fs: ['at ./dao/contracts/dao-core.rsh:232:11:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:232:11:function exp)', 'at ./dao/contracts/dao-core.rsh:246:12:application call to "k" (defined at: ./dao/contracts/dao-core.rsh:238:13:function exp)', 'at ./dao/contracts/dao-core.rsh:238:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:238:13:function exp)'],
            msg: 'out',
            who: 'donate'
            });
          }
        else {
          }
        
        const v19779 = v3874;
        const v19781 = v3876;
        const v19783 = v5854;
        const v19784 = v3874.admin;
        const v19785 = v3874.fee;
        const v19786 = v3874.openTreasury;
        const v19787 = v3874.quorum;
        const v19788 = v3874.registerSelf;
        const v19789 = v3876.action;
        const v19790 = v3876.index;
        const v19791 = stdlib.ge(v19790, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
        let v19792;
        if (v19791) {
          const v19793 = stdlib.mod(v19790, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
          const v19794 = stdlib.sub(v19790, v19793);
          const v19795 = stdlib.div(v19794, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
          v19792 = v19795;
          }
        else {
          v19792 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
          }
        return;
        }
      else {
        const v5920 = null;
        const v5921 = await txn1.getOutput('donate', 'v5920', ctc0, v5920);
        if (v2529) {
          stdlib.protect(ctc0, await interact.out(v5803, v5921), {
            at: './dao/contracts/dao-core.rsh:232:11:application',
            fs: ['at ./dao/contracts/dao-core.rsh:232:11:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:232:11:function exp)', 'at ./dao/contracts/dao-core.rsh:246:12:application call to "k" (defined at: ./dao/contracts/dao-core.rsh:238:13:function exp)', 'at ./dao/contracts/dao-core.rsh:238:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:238:13:function exp)'],
            msg: 'out',
            who: 'donate'
            });
          }
        else {
          }
        
        const v19808 = v3874;
        const v19810 = v3876;
        const v19812 = v5854;
        const v19813 = v3874.admin;
        const v19814 = v3874.fee;
        const v19815 = v3874.openTreasury;
        const v19816 = v3874.quorum;
        const v19817 = v3874.registerSelf;
        const v19818 = v3876.action;
        const v19819 = v3876.index;
        const v19820 = stdlib.ge(v19819, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
        let v19821;
        if (v19820) {
          const v19822 = stdlib.mod(v19819, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
          const v19823 = stdlib.sub(v19819, v19822);
          const v19824 = stdlib.div(v19823, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
          v19821 = v19824;
          }
        else {
          v19821 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
          }
        return;
        }
      break;
      }
    case 'eject0_352': {
      const v7095 = v4508[1];
      return;
      break;
      }
    case 'joinLeave0_352': {
      const v8387 = v4508[1];
      return;
      break;
      }
    case 'registerProposal0_352': {
      const v9679 = v4508[1];
      return;
      break;
      }
    case 'voteProposal0_352': {
      const v10971 = v4508[1];
      return;
      break;
      }
    }
  
  
  };
export async function _eject3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _eject3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _eject3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc6 = stdlib.T_Contract;
  const ctc7 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Struct([['admin', ctc4], ['registerSelf', ctc8], ['fee', ctc1], ['quorum', ctc1], ['openTreasury', ctc8]]);
  const ctc10 = stdlib.T_Data({
    AllocateFunds: ctc7,
    ChangeAdmin: ctc9,
    EjectMember: ctc4,
    None: ctc0,
    Stop: ctc0
    });
  const ctc11 = stdlib.T_Object({
    admin: ctc4,
    fee: ctc1,
    openTreasury: ctc8,
    quorum: ctc1,
    registerSelf: ctc8
    });
  const ctc12 = stdlib.T_Object({
    Against: ctc1,
    For: ctc1,
    action: ctc10,
    index: ctc1
    });
  const ctc13 = stdlib.T_Tuple([ctc4]);
  const ctc14 = stdlib.T_Tuple([ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc8]);
  const ctc16 = stdlib.T_Tuple([ctc10]);
  const ctc17 = stdlib.T_Data({
    Against: ctc0,
    For: ctc0
    });
  const ctc18 = stdlib.T_Tuple([ctc17]);
  const ctc19 = stdlib.T_Data({
    addMember0_352: ctc13,
    donate0_352: ctc14,
    eject0_352: ctc13,
    joinLeave0_352: ctc15,
    registerProposal0_352: ctc16,
    voteProposal0_352: ctc18
    });
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v3833, v3834, v3839, v3848, v3851, v3872, v3874, v3876, v3880, v3949, v3950, v3951, v3952, v3953, v3955, v3984, v3985, v3986] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc6, ctc1, ctc6, ctc10, ctc11, ctc12, ctc1, ctc4, ctc1, ctc8, ctc1, ctc8, ctc10, ctc1, ctc8, ctc1]);
  const v4034 = ctc.selfAddress();
  const v4036 = stdlib.protect(ctc13, await interact.in(), {
    at: './dao/contracts/dao-core.rsh:1:23:application',
    fs: ['at ./dao/contracts/dao-core.rsh:253:32:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:253:32:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to "runeject0_352" (defined at: ./dao/contracts/dao-core.rsh:253:10:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:189:50:function exp)'],
    msg: 'in',
    who: 'eject'
    });
  const v4037 = v4036[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v4039 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4037), null);
  let v4040;
  switch (v4039[0]) {
    case 'None': {
      const v4041 = v4039[1];
      v4040 = false;
      
      break;
      }
    case 'Some': {
      const v4042 = v4039[1];
      v4040 = true;
      
      break;
      }
    }
  const v4044 = stdlib.addressEq(v4037, v3949);
  const v4045 = v4044 ? false : true;
  const v4046 = v4040 ? v4045 : false;
  const v4047 = stdlib.addressEq(v4034, v4037);
  const v4048 = v4047 ? false : true;
  stdlib.assert(v4048, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./dao/contracts/dao-core.rsh:256:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:253:32:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:253:32:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to "runeject0_352" (defined at: ./dao/contracts/dao-core.rsh:253:10:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:189:50:function exp)'],
    msg: 'Use \'Leave\' API to exit',
    who: 'eject'
    });
  let v4051;
  switch (v4039[0]) {
    case 'None': {
      const v4052 = v4039[1];
      v4051 = false;
      
      break;
      }
    case 'Some': {
      const v4053 = v4039[1];
      v4051 = true;
      
      break;
      }
    }
  stdlib.assert(v4051, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./dao/contracts/dao-core.rsh:257:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:253:32:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:253:32:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to "runeject0_352" (defined at: ./dao/contracts/dao-core.rsh:253:10:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:189:50:function exp)'],
    msg: 'Address is not a member',
    who: 'eject'
    });
  stdlib.assert(v4046, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./dao/contracts/dao-core.rsh:258:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:253:32:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:253:32:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to "runeject0_352" (defined at: ./dao/contracts/dao-core.rsh:253:10:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:189:50:function exp)'],
    msg: 'Requires ChangeAdmin proposal',
    who: 'eject'
    });
  const v4057 = stdlib.addressEq(v4034, v3949);
  if (v4057) {
    }
  else {
    const v4062 = stdlib.sub(stdlib.UInt_max, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:262:35:decimal', stdlib.UInt_max, '1'));
    const v4063 = stdlib.le(v3984, v4062);
    stdlib.assert(v4063, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./dao/contracts/dao-core.rsh:262:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:253:32:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:253:32:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to "runeject0_352" (defined at: ./dao/contracts/dao-core.rsh:253:10:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:189:50:function exp)'],
      msg: 'Proposals Limit reached',
      who: 'eject'
      });
    let v4065;
    switch (v3955[0]) {
      case 'AllocateFunds': {
        const v4066 = v3955[1];
        const v4067 = v4066[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:76:21:array', stdlib.UInt_max, '0')];
        const v4068 = v4066[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:76:21:array', stdlib.UInt_max, '1')];
        const v4070 = stdlib.lt(v4068, v3880);
        const v4071 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4067), null);
        let v4072;
        switch (v4071[0]) {
          case 'None': {
            const v4073 = v4071[1];
            v4072 = false;
            
            break;
            }
          case 'Some': {
            const v4074 = v4071[1];
            v4072 = true;
            
            break;
            }
          }
        const v4075 = v4072 ? v4070 : false;
        const v4077 = v3951 ? v4070 : v4075;
        v4065 = v4077;
        
        break;
        }
      case 'ChangeAdmin': {
        const v4078 = v3955[1];
        const v4079 = v4078.admin;
        const v4080 = v4078.fee;
        const v4082 = v4078.quorum;
        const v4084 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4079), null);
        const v4085 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v4086 = stdlib.fromSome(v4084, v4085);
        const v4087 = v4086[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:84:13:array', stdlib.UInt_max, '0')];
        let v4090;
        switch (v4084[0]) {
          case 'None': {
            const v4091 = v4084[1];
            v4090 = false;
            
            break;
            }
          case 'Some': {
            const v4092 = v4084[1];
            v4090 = true;
            
            break;
            }
          }
        const v4093 = stdlib.gt(v4087, v3986);
        const v4094 = v4090 ? v4093 : false;
        const v4095 = stdlib.gt(v4082, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:86:34:decimal', stdlib.UInt_max, '0'));
        let v4096;
        if (v4095) {
          const v4099 = stdlib.lt(v4082, v3848);
          v4096 = v4099;
          }
        else {
          v4096 = false;
          }
        const v4100 = stdlib.ge(v4080, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:87:34:decimal', stdlib.UInt_max, '0'));
        const v4101 = stdlib.lt(v4080, stdlib.UInt_max);
        const v4102 = v4100 ? v4101 : false;
        const v4103 = v4094 ? v4096 : false;
        const v4104 = v4103 ? v4102 : false;
        v4065 = v4104;
        
        break;
        }
      case 'EjectMember': {
        const v4105 = v3955[1];
        const v4106 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4105), null);
        let v4107;
        switch (v4106[0]) {
          case 'None': {
            const v4108 = v4106[1];
            v4107 = false;
            
            break;
            }
          case 'Some': {
            const v4109 = v4106[1];
            v4107 = true;
            
            break;
            }
          }
        const v4111 = stdlib.addressEq(v4105, v3949);
        const v4112 = v4111 ? false : true;
        const v4113 = v4107 ? v4112 : false;
        v4065 = v4113;
        
        break;
        }
      case 'None': {
        const v4114 = v3955[1];
        v4065 = false;
        
        break;
        }
      case 'Stop': {
        const v4115 = v3955[1];
        v4065 = true;
        
        break;
        }
      }
    stdlib.assert(v4065, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./dao/contracts/dao-core.rsh:263:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:253:32:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:253:32:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to "runeject0_352" (defined at: ./dao/contracts/dao-core.rsh:253:10:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:189:50:function exp)'],
      msg: 'A Proposal is already active.',
      who: 'eject'
      });
    }
  const v4122 = ['eject0_352', v4036];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3833, v3834, v3839, v3848, v3851, v3872, v3874, v3876, v3880, v3949, v3950, v3951, v3952, v3953, v3955, v3984, v3985, v3986, v4122],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc19],
    pay: [stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:253:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v4508], secs: v4510, time: v4509, didSend: v2529, from: v4507 } = txn1;
      
      switch (v4508[0]) {
        case 'addMember0_352': {
          const v4511 = v4508[1];
          
          break;
          }
        case 'donate0_352': {
          const v5803 = v4508[1];
          
          break;
          }
        case 'eject0_352': {
          const v7095 = v4508[1];
          sim_r.txns.push({
            kind: 'api',
            who: "eject"
            });
          ;
          const v7221 = v7095[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:253:10:spread', stdlib.UInt_max, '0')];
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v7221), null);
          const v7240 = stdlib.addressEq(v4507, v3949);
          if (v7240) {
            const v7333 = null;
            const v7334 = await txn1.getOutput('eject', 'v7333', ctc0, v7333);
            
            await stdlib.simMapSet(sim_r, 0, v7221, undefined /* Nothing */);
            null;
            const v20533 = v3874;
            const v20535 = v3876;
            const v20537 = v3880;
            const v20538 = v3874.admin;
            const v20539 = v3874.fee;
            const v20540 = v3874.openTreasury;
            const v20541 = v3874.quorum;
            const v20542 = v3874.registerSelf;
            const v20543 = v3876.action;
            const v20544 = v3876.index;
            const v20545 = stdlib.ge(v20544, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
            let v20546;
            if (v20545) {
              const v20547 = stdlib.mod(v20544, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
              const v20548 = stdlib.sub(v20544, v20547);
              const v20549 = stdlib.div(v20548, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
              v20546 = v20549;
              }
            else {
              v20546 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
              }
            sim_r.isHalt = false;
            }
          else {
            switch (v3955[0]) {
              case 'AllocateFunds': {
                const v7249 = v3955[1];
                const v7250 = v7249[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:76:21:array', stdlib.UInt_max, '0')];
                stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v7250), null);
                
                break;
                }
              case 'ChangeAdmin': {
                const v7261 = v3955[1];
                const v7262 = v7261.admin;
                stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v7262), null);
                
                break;
                }
              case 'EjectMember': {
                const v7288 = v3955[1];
                stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v7288), null);
                
                break;
                }
              case 'None': {
                const v7297 = v3955[1];
                
                break;
                }
              case 'Stop': {
                const v7298 = v3955[1];
                
                break;
                }
              }
            const v7301 = null;
            const v7302 = await txn1.getOutput('eject', 'v7301', ctc0, v7301);
            
            const v7319 = stdlib.add(v3984, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:183:30:decimal', stdlib.UInt_max, '1'));
            const v7320 = ['EjectMember', v7221];
            const v7321 = {
              Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
              For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
              action: v7320,
              index: v7319
              };
            const v20562 = v3874;
            const v20564 = v7321;
            const v20566 = v3880;
            const v20567 = v3874.admin;
            const v20568 = v3874.fee;
            const v20569 = v3874.openTreasury;
            const v20570 = v3874.quorum;
            const v20571 = v3874.registerSelf;
            const v20572 = v7321.action;
            const v20573 = v7321.index;
            const v20574 = stdlib.ge(v20573, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
            let v20575;
            if (v20574) {
              const v20576 = stdlib.mod(v20573, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
              const v20577 = stdlib.sub(v20573, v20576);
              const v20578 = stdlib.div(v20577, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
              v20575 = v20578;
              }
            else {
              v20575 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
              }
            sim_r.isHalt = false;
            }
          break;
          }
        case 'joinLeave0_352': {
          const v8387 = v4508[1];
          
          break;
          }
        case 'registerProposal0_352': {
          const v9679 = v4508[1];
          
          break;
          }
        case 'voteProposal0_352': {
          const v10971 = v4508[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc6, ctc1, ctc6, ctc10, ctc11, ctc12, ctc1, ctc4, ctc1, ctc8, ctc1, ctc8, ctc10, ctc1, ctc8, ctc1, ctc19],
    waitIfNotPresent: false
    }));
  const {data: [v4508], secs: v4510, time: v4509, didSend: v2529, from: v4507 } = txn1;
  switch (v4508[0]) {
    case 'addMember0_352': {
      const v4511 = v4508[1];
      return;
      break;
      }
    case 'donate0_352': {
      const v5803 = v4508[1];
      return;
      break;
      }
    case 'eject0_352': {
      const v7095 = v4508[1];
      undefined /* setApiDetails */;
      const v7147 = stdlib.le(v3880, stdlib.UInt_max);
      stdlib.assert(v7147, {
        at: './dao/contracts/dao-core.rsh:189:50:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'eject'
        });
      ;
      const v7221 = v7095[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:253:10:spread', stdlib.UInt_max, '0')];
      const v7222 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v7221), null);
      let v7223;
      switch (v7222[0]) {
        case 'None': {
          const v7224 = v7222[1];
          v7223 = false;
          
          break;
          }
        case 'Some': {
          const v7225 = v7222[1];
          v7223 = true;
          
          break;
          }
        }
      const v7227 = stdlib.addressEq(v7221, v3949);
      const v7228 = v7227 ? false : true;
      const v7229 = v7223 ? v7228 : false;
      const v7230 = stdlib.addressEq(v4507, v7221);
      const v7231 = v7230 ? false : true;
      stdlib.assert(v7231, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./dao/contracts/dao-core.rsh:256:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:270:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:270:13:function exp)'],
        msg: 'Use \'Leave\' API to exit',
        who: 'eject'
        });
      let v7234;
      switch (v7222[0]) {
        case 'None': {
          const v7235 = v7222[1];
          v7234 = false;
          
          break;
          }
        case 'Some': {
          const v7236 = v7222[1];
          v7234 = true;
          
          break;
          }
        }
      stdlib.assert(v7234, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./dao/contracts/dao-core.rsh:257:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:270:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:270:13:function exp)'],
        msg: 'Address is not a member',
        who: 'eject'
        });
      stdlib.assert(v7229, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./dao/contracts/dao-core.rsh:258:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:270:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:270:13:function exp)'],
        msg: 'Requires ChangeAdmin proposal',
        who: 'eject'
        });
      const v7240 = stdlib.addressEq(v4507, v3949);
      if (v7240) {
        const v7333 = null;
        const v7334 = await txn1.getOutput('eject', 'v7333', ctc0, v7333);
        if (v2529) {
          stdlib.protect(ctc0, await interact.out(v7095, v7334), {
            at: './dao/contracts/dao-core.rsh:253:11:application',
            fs: ['at ./dao/contracts/dao-core.rsh:253:11:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:253:11:function exp)', 'at ./dao/contracts/dao-core.rsh:271:12:application call to "k" (defined at: ./dao/contracts/dao-core.rsh:270:13:function exp)', 'at ./dao/contracts/dao-core.rsh:270:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:270:13:function exp)'],
            msg: 'out',
            who: 'eject'
            });
          }
        else {
          }
        
        await stdlib.mapSet(map0, v7221, undefined /* Nothing */);
        null;
        const v20533 = v3874;
        const v20535 = v3876;
        const v20537 = v3880;
        const v20538 = v3874.admin;
        const v20539 = v3874.fee;
        const v20540 = v3874.openTreasury;
        const v20541 = v3874.quorum;
        const v20542 = v3874.registerSelf;
        const v20543 = v3876.action;
        const v20544 = v3876.index;
        const v20545 = stdlib.ge(v20544, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
        let v20546;
        if (v20545) {
          const v20547 = stdlib.mod(v20544, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
          const v20548 = stdlib.sub(v20544, v20547);
          const v20549 = stdlib.div(v20548, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
          v20546 = v20549;
          }
        else {
          v20546 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
          }
        return;
        }
      else {
        const v7245 = stdlib.sub(stdlib.UInt_max, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:262:35:decimal', stdlib.UInt_max, '1'));
        const v7246 = stdlib.le(v3984, v7245);
        stdlib.assert(v7246, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./dao/contracts/dao-core.rsh:262:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:270:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:270:13:function exp)'],
          msg: 'Proposals Limit reached',
          who: 'eject'
          });
        let v7248;
        switch (v3955[0]) {
          case 'AllocateFunds': {
            const v7249 = v3955[1];
            const v7250 = v7249[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:76:21:array', stdlib.UInt_max, '0')];
            const v7251 = v7249[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:76:21:array', stdlib.UInt_max, '1')];
            const v7253 = stdlib.lt(v7251, v3880);
            const v7254 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v7250), null);
            let v7255;
            switch (v7254[0]) {
              case 'None': {
                const v7256 = v7254[1];
                v7255 = false;
                
                break;
                }
              case 'Some': {
                const v7257 = v7254[1];
                v7255 = true;
                
                break;
                }
              }
            const v7258 = v7255 ? v7253 : false;
            const v7260 = v3951 ? v7253 : v7258;
            v7248 = v7260;
            
            break;
            }
          case 'ChangeAdmin': {
            const v7261 = v3955[1];
            const v7262 = v7261.admin;
            const v7263 = v7261.fee;
            const v7265 = v7261.quorum;
            const v7267 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v7262), null);
            const v7268 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
            const v7269 = stdlib.fromSome(v7267, v7268);
            const v7270 = v7269[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:84:13:array', stdlib.UInt_max, '0')];
            let v7273;
            switch (v7267[0]) {
              case 'None': {
                const v7274 = v7267[1];
                v7273 = false;
                
                break;
                }
              case 'Some': {
                const v7275 = v7267[1];
                v7273 = true;
                
                break;
                }
              }
            const v7276 = stdlib.gt(v7270, v3986);
            const v7277 = v7273 ? v7276 : false;
            const v7278 = stdlib.gt(v7265, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:86:34:decimal', stdlib.UInt_max, '0'));
            let v7279;
            if (v7278) {
              const v7282 = stdlib.lt(v7265, v3848);
              v7279 = v7282;
              }
            else {
              v7279 = false;
              }
            const v7283 = stdlib.ge(v7263, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:87:34:decimal', stdlib.UInt_max, '0'));
            const v7284 = stdlib.lt(v7263, stdlib.UInt_max);
            const v7285 = v7283 ? v7284 : false;
            const v7286 = v7277 ? v7279 : false;
            const v7287 = v7286 ? v7285 : false;
            v7248 = v7287;
            
            break;
            }
          case 'EjectMember': {
            const v7288 = v3955[1];
            const v7289 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v7288), null);
            let v7290;
            switch (v7289[0]) {
              case 'None': {
                const v7291 = v7289[1];
                v7290 = false;
                
                break;
                }
              case 'Some': {
                const v7292 = v7289[1];
                v7290 = true;
                
                break;
                }
              }
            const v7294 = stdlib.addressEq(v7288, v3949);
            const v7295 = v7294 ? false : true;
            const v7296 = v7290 ? v7295 : false;
            v7248 = v7296;
            
            break;
            }
          case 'None': {
            const v7297 = v3955[1];
            v7248 = false;
            
            break;
            }
          case 'Stop': {
            const v7298 = v3955[1];
            v7248 = true;
            
            break;
            }
          }
        stdlib.assert(v7248, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./dao/contracts/dao-core.rsh:263:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:270:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:270:13:function exp)'],
          msg: 'A Proposal is already active.',
          who: 'eject'
          });
        const v7301 = null;
        const v7302 = await txn1.getOutput('eject', 'v7301', ctc0, v7301);
        if (v2529) {
          stdlib.protect(ctc0, await interact.out(v7095, v7302), {
            at: './dao/contracts/dao-core.rsh:253:11:application',
            fs: ['at ./dao/contracts/dao-core.rsh:253:11:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:253:11:function exp)', 'at ./dao/contracts/dao-core.rsh:271:12:application call to "k" (defined at: ./dao/contracts/dao-core.rsh:270:13:function exp)', 'at ./dao/contracts/dao-core.rsh:270:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:270:13:function exp)'],
            msg: 'out',
            who: 'eject'
            });
          }
        else {
          }
        
        const v7319 = stdlib.add(v3984, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:183:30:decimal', stdlib.UInt_max, '1'));
        const v7320 = ['EjectMember', v7221];
        const v7321 = {
          Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          action: v7320,
          index: v7319
          };
        const v20562 = v3874;
        const v20564 = v7321;
        const v20566 = v3880;
        const v20567 = v3874.admin;
        const v20568 = v3874.fee;
        const v20569 = v3874.openTreasury;
        const v20570 = v3874.quorum;
        const v20571 = v3874.registerSelf;
        const v20572 = v7321.action;
        const v20573 = v7321.index;
        const v20574 = stdlib.ge(v20573, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
        let v20575;
        if (v20574) {
          const v20576 = stdlib.mod(v20573, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
          const v20577 = stdlib.sub(v20573, v20576);
          const v20578 = stdlib.div(v20577, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
          v20575 = v20578;
          }
        else {
          v20575 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
          }
        return;
        }
      break;
      }
    case 'joinLeave0_352': {
      const v8387 = v4508[1];
      return;
      break;
      }
    case 'registerProposal0_352': {
      const v9679 = v4508[1];
      return;
      break;
      }
    case 'voteProposal0_352': {
      const v10971 = v4508[1];
      return;
      break;
      }
    }
  
  
  };
export async function _joinLeave3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _joinLeave3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _joinLeave3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc6 = stdlib.T_Contract;
  const ctc7 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Struct([['admin', ctc4], ['registerSelf', ctc8], ['fee', ctc1], ['quorum', ctc1], ['openTreasury', ctc8]]);
  const ctc10 = stdlib.T_Data({
    AllocateFunds: ctc7,
    ChangeAdmin: ctc9,
    EjectMember: ctc4,
    None: ctc0,
    Stop: ctc0
    });
  const ctc11 = stdlib.T_Object({
    admin: ctc4,
    fee: ctc1,
    openTreasury: ctc8,
    quorum: ctc1,
    registerSelf: ctc8
    });
  const ctc12 = stdlib.T_Object({
    Against: ctc1,
    For: ctc1,
    action: ctc10,
    index: ctc1
    });
  const ctc13 = stdlib.T_Tuple([ctc8]);
  const ctc14 = stdlib.T_Tuple([ctc4]);
  const ctc15 = stdlib.T_Tuple([ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc10]);
  const ctc17 = stdlib.T_Data({
    Against: ctc0,
    For: ctc0
    });
  const ctc18 = stdlib.T_Tuple([ctc17]);
  const ctc19 = stdlib.T_Data({
    addMember0_352: ctc14,
    donate0_352: ctc15,
    eject0_352: ctc14,
    joinLeave0_352: ctc13,
    registerProposal0_352: ctc16,
    voteProposal0_352: ctc18
    });
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v3833, v3834, v3839, v3848, v3851, v3872, v3874, v3876, v3880, v3949, v3950, v3951, v3952, v3953, v3955, v3984, v3985, v3986] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc6, ctc1, ctc6, ctc10, ctc11, ctc12, ctc1, ctc4, ctc1, ctc8, ctc1, ctc8, ctc10, ctc1, ctc8, ctc1]);
  const v4124 = ctc.selfAddress();
  const v4126 = stdlib.protect(ctc13, await interact.in(), {
    at: './dao/contracts/dao-core.rsh:1:23:application',
    fs: ['at ./dao/contracts/dao-core.rsh:284:40:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:284:40:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to "runjoinLeave0_352" (defined at: ./dao/contracts/dao-core.rsh:284:10:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:189:50:function exp)'],
    msg: 'in',
    who: 'joinLeave'
    });
  const v4127 = v4126[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:1:23:application', stdlib.UInt_max, '0')];
  if (v4127) {
    const v4129 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4124), null);
    let v4130;
    switch (v4129[0]) {
      case 'None': {
        const v4131 = v4129[1];
        v4130 = false;
        
        break;
        }
      case 'Some': {
        const v4132 = v4129[1];
        v4130 = true;
        
        break;
        }
      }
    stdlib.assert(v4130, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./dao/contracts/dao-core.rsh:286:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:284:40:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:284:40:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to "runjoinLeave0_352" (defined at: ./dao/contracts/dao-core.rsh:284:10:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:189:50:function exp)'],
      msg: 'Address is not a member',
      who: 'joinLeave'
      });
    }
  else {
    stdlib.assert(v3953, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./dao/contracts/dao-core.rsh:288:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:284:40:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:284:40:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to "runjoinLeave0_352" (defined at: ./dao/contracts/dao-core.rsh:284:10:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:189:50:function exp)'],
      msg: 'An existing user has to add you to this DAO',
      who: 'joinLeave'
      });
    const v4136 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4124), null);
    let v4137;
    switch (v4136[0]) {
      case 'None': {
        const v4138 = v4136[1];
        v4137 = true;
        
        break;
        }
      case 'Some': {
        const v4139 = v4136[1];
        v4137 = false;
        
        break;
        }
      }
    stdlib.assert(v4137, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./dao/contracts/dao-core.rsh:289:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:284:40:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:284:40:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to "runjoinLeave0_352" (defined at: ./dao/contracts/dao-core.rsh:284:10:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:189:50:function exp)'],
      msg: 'Address is already a member',
      who: 'joinLeave'
      });
    }
  const v4142 = v4127 ? stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:292:35:decimal', stdlib.UInt_max, '0') : v3950;
  const v4145 = stdlib.sub(stdlib.UInt_max, v3880);
  const v4146 = stdlib.lt(v4142, v4145);
  stdlib.assert(v4146, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./dao/contracts/dao-core.rsh:293:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:284:40:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:284:40:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to "runjoinLeave0_352" (defined at: ./dao/contracts/dao-core.rsh:284:10:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:189:50:function exp)'],
    msg: 'Membership is at maximum capacity',
    who: 'joinLeave'
    });
  const v4153 = ['joinLeave0_352', v4126];
  
  if (v4127) {
    const v4486 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4124), null);
    let v4487;
    switch (v4486[0]) {
      case 'None': {
        const v4488 = v4486[1];
        v4487 = false;
        
        break;
        }
      case 'Some': {
        const v4489 = v4486[1];
        v4487 = true;
        
        break;
        }
      }
    stdlib.assert(v4487, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./dao/contracts/dao-core.rsh:286:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:284:40:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:284:40:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:284:40:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:189:50:function exp)'],
      msg: 'Address is not a member',
      who: 'joinLeave'
      });
    }
  else {
    stdlib.assert(v3953, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./dao/contracts/dao-core.rsh:288:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:284:40:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:284:40:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:284:40:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:189:50:function exp)'],
      msg: 'An existing user has to add you to this DAO',
      who: 'joinLeave'
      });
    const v4493 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4124), null);
    let v4494;
    switch (v4493[0]) {
      case 'None': {
        const v4495 = v4493[1];
        v4494 = true;
        
        break;
        }
      case 'Some': {
        const v4496 = v4493[1];
        v4494 = false;
        
        break;
        }
      }
    stdlib.assert(v4494, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./dao/contracts/dao-core.rsh:289:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:284:40:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:284:40:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:284:40:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:189:50:function exp)'],
      msg: 'Address is already a member',
      who: 'joinLeave'
      });
    }
  
  const txn1 = await (ctc.sendrecv({
    args: [v3833, v3834, v3839, v3848, v3851, v3872, v3874, v3876, v3880, v3949, v3950, v3951, v3952, v3953, v3955, v3984, v3985, v3986, v4153],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc19],
    pay: [v4142, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v4508], secs: v4510, time: v4509, didSend: v2529, from: v4507 } = txn1;
      
      switch (v4508[0]) {
        case 'addMember0_352': {
          const v4511 = v4508[1];
          
          break;
          }
        case 'donate0_352': {
          const v5803 = v4508[1];
          
          break;
          }
        case 'eject0_352': {
          const v7095 = v4508[1];
          
          break;
          }
        case 'joinLeave0_352': {
          const v8387 = v4508[1];
          sim_r.txns.push({
            kind: 'api',
            who: "joinLeave"
            });
          const v8415 = v8387[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:284:10:spread', stdlib.UInt_max, '0')];
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v4507), null);
          const v8429 = v8415 ? stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:292:35:decimal', stdlib.UInt_max, '0') : v3950;
          const v8438 = stdlib.add(v3880, v8429);
          sim_r.txns.push({
            amt: v8429,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v4507), null);
          const v8678 = null;
          const v8679 = await txn1.getOutput('joinLeave', 'v8678', ctc0, v8678);
          
          if (v8415) {
            await stdlib.simMapSet(sim_r, 0, v4507, undefined /* Nothing */);
            null;
            const v21287 = v3874;
            const v21289 = v3876;
            const v21291 = v8438;
            const v21292 = v3874.admin;
            const v21293 = v3874.fee;
            const v21294 = v3874.openTreasury;
            const v21295 = v3874.quorum;
            const v21296 = v3874.registerSelf;
            const v21297 = v3876.action;
            const v21298 = v3876.index;
            const v21299 = stdlib.ge(v21298, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
            let v21300;
            if (v21299) {
              const v21301 = stdlib.mod(v21298, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
              const v21302 = stdlib.sub(v21298, v21301);
              const v21303 = stdlib.div(v21302, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
              v21300 = v21303;
              }
            else {
              v21300 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
              }
            sim_r.isHalt = false;
            }
          else {
            const v8687 = [v3986, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
            await stdlib.simMapSet(sim_r, 0, v4507, v8687);
            null;
            const v21316 = v3874;
            const v21318 = v3876;
            const v21320 = v8438;
            const v21321 = v3874.admin;
            const v21322 = v3874.fee;
            const v21323 = v3874.openTreasury;
            const v21324 = v3874.quorum;
            const v21325 = v3874.registerSelf;
            const v21326 = v3876.action;
            const v21327 = v3876.index;
            const v21328 = stdlib.ge(v21327, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
            let v21329;
            if (v21328) {
              const v21330 = stdlib.mod(v21327, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
              const v21331 = stdlib.sub(v21327, v21330);
              const v21332 = stdlib.div(v21331, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
              v21329 = v21332;
              }
            else {
              v21329 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
              }
            sim_r.isHalt = false;
            }
          break;
          }
        case 'registerProposal0_352': {
          const v9679 = v4508[1];
          
          break;
          }
        case 'voteProposal0_352': {
          const v10971 = v4508[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc6, ctc1, ctc6, ctc10, ctc11, ctc12, ctc1, ctc4, ctc1, ctc8, ctc1, ctc8, ctc10, ctc1, ctc8, ctc1, ctc19],
    waitIfNotPresent: false
    }));
  const {data: [v4508], secs: v4510, time: v4509, didSend: v2529, from: v4507 } = txn1;
  switch (v4508[0]) {
    case 'addMember0_352': {
      const v4511 = v4508[1];
      return;
      break;
      }
    case 'donate0_352': {
      const v5803 = v4508[1];
      return;
      break;
      }
    case 'eject0_352': {
      const v7095 = v4508[1];
      return;
      break;
      }
    case 'joinLeave0_352': {
      const v8387 = v4508[1];
      undefined /* setApiDetails */;
      const v8415 = v8387[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:284:10:spread', stdlib.UInt_max, '0')];
      if (v8415) {
        const v8416 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4507), null);
        let v8417;
        switch (v8416[0]) {
          case 'None': {
            const v8418 = v8416[1];
            v8417 = false;
            
            break;
            }
          case 'Some': {
            const v8419 = v8416[1];
            v8417 = true;
            
            break;
            }
          }
        stdlib.assert(v8417, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./dao/contracts/dao-core.rsh:286:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:284:40:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:284:40:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:284:40:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:189:50:function exp)'],
          msg: 'Address is not a member',
          who: 'joinLeave'
          });
        }
      else {
        stdlib.assert(v3953, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./dao/contracts/dao-core.rsh:288:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:284:40:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:284:40:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:284:40:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:189:50:function exp)'],
          msg: 'An existing user has to add you to this DAO',
          who: 'joinLeave'
          });
        const v8423 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4507), null);
        let v8424;
        switch (v8423[0]) {
          case 'None': {
            const v8425 = v8423[1];
            v8424 = true;
            
            break;
            }
          case 'Some': {
            const v8426 = v8423[1];
            v8424 = false;
            
            break;
            }
          }
        stdlib.assert(v8424, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./dao/contracts/dao-core.rsh:289:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:284:40:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:284:40:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:284:40:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:189:50:function exp)'],
          msg: 'Address is already a member',
          who: 'joinLeave'
          });
        }
      const v8429 = v8415 ? stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:292:35:decimal', stdlib.UInt_max, '0') : v3950;
      const v8432 = stdlib.sub(stdlib.UInt_max, v3880);
      const v8433 = stdlib.lt(v8429, v8432);
      stdlib.assert(v8433, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./dao/contracts/dao-core.rsh:293:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:284:40:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:284:40:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:284:40:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:189:50:function exp)'],
        msg: 'Membership is at maximum capacity',
        who: 'joinLeave'
        });
      const v8438 = stdlib.add(v3880, v8429);
      const v8439 = stdlib.le(v8438, stdlib.UInt_max);
      stdlib.assert(v8439, {
        at: './dao/contracts/dao-core.rsh:189:50:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'joinLeave'
        });
      ;
      if (v8415) {
        const v8658 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4507), null);
        let v8659;
        switch (v8658[0]) {
          case 'None': {
            const v8660 = v8658[1];
            v8659 = false;
            
            break;
            }
          case 'Some': {
            const v8661 = v8658[1];
            v8659 = true;
            
            break;
            }
          }
        stdlib.assert(v8659, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./dao/contracts/dao-core.rsh:286:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:298:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:298:13:function exp)'],
          msg: 'Address is not a member',
          who: 'joinLeave'
          });
        }
      else {
        stdlib.assert(v3953, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./dao/contracts/dao-core.rsh:288:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:298:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:298:13:function exp)'],
          msg: 'An existing user has to add you to this DAO',
          who: 'joinLeave'
          });
        const v8665 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4507), null);
        let v8666;
        switch (v8665[0]) {
          case 'None': {
            const v8667 = v8665[1];
            v8666 = true;
            
            break;
            }
          case 'Some': {
            const v8668 = v8665[1];
            v8666 = false;
            
            break;
            }
          }
        stdlib.assert(v8666, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./dao/contracts/dao-core.rsh:289:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:298:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:298:13:function exp)'],
          msg: 'Address is already a member',
          who: 'joinLeave'
          });
        }
      const v8674 = stdlib.sub(stdlib.UInt_max, v8438);
      const v8675 = stdlib.lt(v8429, v8674);
      stdlib.assert(v8675, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./dao/contracts/dao-core.rsh:293:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:298:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:298:13:function exp)'],
        msg: 'Membership is at maximum capacity',
        who: 'joinLeave'
        });
      const v8678 = null;
      const v8679 = await txn1.getOutput('joinLeave', 'v8678', ctc0, v8678);
      if (v2529) {
        stdlib.protect(ctc0, await interact.out(v8387, v8679), {
          at: './dao/contracts/dao-core.rsh:284:11:application',
          fs: ['at ./dao/contracts/dao-core.rsh:284:11:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:284:11:function exp)', 'at ./dao/contracts/dao-core.rsh:299:12:application call to "k" (defined at: ./dao/contracts/dao-core.rsh:298:13:function exp)', 'at ./dao/contracts/dao-core.rsh:298:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:298:13:function exp)'],
          msg: 'out',
          who: 'joinLeave'
          });
        }
      else {
        }
      
      if (v8415) {
        await stdlib.mapSet(map0, v4507, undefined /* Nothing */);
        null;
        const v21287 = v3874;
        const v21289 = v3876;
        const v21291 = v8438;
        const v21292 = v3874.admin;
        const v21293 = v3874.fee;
        const v21294 = v3874.openTreasury;
        const v21295 = v3874.quorum;
        const v21296 = v3874.registerSelf;
        const v21297 = v3876.action;
        const v21298 = v3876.index;
        const v21299 = stdlib.ge(v21298, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
        let v21300;
        if (v21299) {
          const v21301 = stdlib.mod(v21298, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
          const v21302 = stdlib.sub(v21298, v21301);
          const v21303 = stdlib.div(v21302, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
          v21300 = v21303;
          }
        else {
          v21300 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
          }
        return;
        }
      else {
        const v8687 = [v3986, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        await stdlib.mapSet(map0, v4507, v8687);
        null;
        const v21316 = v3874;
        const v21318 = v3876;
        const v21320 = v8438;
        const v21321 = v3874.admin;
        const v21322 = v3874.fee;
        const v21323 = v3874.openTreasury;
        const v21324 = v3874.quorum;
        const v21325 = v3874.registerSelf;
        const v21326 = v3876.action;
        const v21327 = v3876.index;
        const v21328 = stdlib.ge(v21327, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
        let v21329;
        if (v21328) {
          const v21330 = stdlib.mod(v21327, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
          const v21331 = stdlib.sub(v21327, v21330);
          const v21332 = stdlib.div(v21331, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
          v21329 = v21332;
          }
        else {
          v21329 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
          }
        return;
        }
      break;
      }
    case 'registerProposal0_352': {
      const v9679 = v4508[1];
      return;
      break;
      }
    case 'voteProposal0_352': {
      const v10971 = v4508[1];
      return;
      break;
      }
    }
  
  
  };
export async function _registerProposal3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _registerProposal3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _registerProposal3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc6 = stdlib.T_Contract;
  const ctc7 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Struct([['admin', ctc4], ['registerSelf', ctc8], ['fee', ctc1], ['quorum', ctc1], ['openTreasury', ctc8]]);
  const ctc10 = stdlib.T_Data({
    AllocateFunds: ctc7,
    ChangeAdmin: ctc9,
    EjectMember: ctc4,
    None: ctc0,
    Stop: ctc0
    });
  const ctc11 = stdlib.T_Object({
    admin: ctc4,
    fee: ctc1,
    openTreasury: ctc8,
    quorum: ctc1,
    registerSelf: ctc8
    });
  const ctc12 = stdlib.T_Object({
    Against: ctc1,
    For: ctc1,
    action: ctc10,
    index: ctc1
    });
  const ctc13 = stdlib.T_Tuple([ctc10]);
  const ctc14 = stdlib.T_Tuple([ctc4]);
  const ctc15 = stdlib.T_Tuple([ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc8]);
  const ctc17 = stdlib.T_Data({
    Against: ctc0,
    For: ctc0
    });
  const ctc18 = stdlib.T_Tuple([ctc17]);
  const ctc19 = stdlib.T_Data({
    addMember0_352: ctc14,
    donate0_352: ctc15,
    eject0_352: ctc14,
    joinLeave0_352: ctc16,
    registerProposal0_352: ctc13,
    voteProposal0_352: ctc18
    });
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v3833, v3834, v3839, v3848, v3851, v3872, v3874, v3876, v3880, v3949, v3950, v3951, v3952, v3953, v3955, v3984, v3985, v3986] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc6, ctc1, ctc6, ctc10, ctc11, ctc12, ctc1, ctc4, ctc1, ctc8, ctc1, ctc8, ctc10, ctc1, ctc8, ctc1]);
  const v4155 = ctc.selfAddress();
  const v4157 = stdlib.protect(ctc13, await interact.in(), {
    at: './dao/contracts/dao-core.rsh:1:23:application',
    fs: ['at ./dao/contracts/dao-core.rsh:311:44:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:311:44:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to "runregisterProposal0_352" (defined at: ./dao/contracts/dao-core.rsh:311:10:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:189:50:function exp)'],
    msg: 'in',
    who: 'registerProposal'
    });
  const v4158 = v4157[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:1:23:application', stdlib.UInt_max, '0')];
  let v4175;
  if (v3985) {
    const v4177 = stdlib.mod(v3984, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
    const v4179 = stdlib.sub(v3984, v4177);
    const v4181 = stdlib.div(v4179, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
    v4175 = v4181;
    }
  else {
    v4175 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
    }
  const v4182 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4155), null);
  const v4183 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v4184 = stdlib.fromSome(v4182, v4183);
  const v4185 = v4184[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:120:11:array', stdlib.UInt_max, '0')];
  const v4187 = stdlib.ge(v4185, v4175);
  stdlib.assert(v4187, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./dao/contracts/dao-core.rsh:121:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:312:22:application call to "requireIsMember" (defined at: ./dao/contracts/dao-core.rsh:118:36:function exp)', 'at ./dao/contracts/dao-core.rsh:311:44:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:311:44:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to "runregisterProposal0_352" (defined at: ./dao/contracts/dao-core.rsh:311:10:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:189:50:function exp)'],
    msg: 'THIEF! SEIZE THEM!',
    who: 'registerProposal'
    });
  const v4194 = stdlib.ge(v4185, v3986);
  stdlib.assert(v4194, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./dao/contracts/dao-core.rsh:313:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:311:44:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:311:44:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to "runregisterProposal0_352" (defined at: ./dao/contracts/dao-core.rsh:311:10:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:189:50:function exp)'],
    msg: 'User is below Citizen Rank threshold',
    who: 'registerProposal'
    });
  let v4198;
  switch (v3955[0]) {
    case 'AllocateFunds': {
      const v4199 = v3955[1];
      const v4200 = v4199[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:76:21:array', stdlib.UInt_max, '0')];
      const v4201 = v4199[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:76:21:array', stdlib.UInt_max, '1')];
      const v4203 = stdlib.lt(v4201, v3880);
      const v4204 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4200), null);
      let v4205;
      switch (v4204[0]) {
        case 'None': {
          const v4206 = v4204[1];
          v4205 = false;
          
          break;
          }
        case 'Some': {
          const v4207 = v4204[1];
          v4205 = true;
          
          break;
          }
        }
      const v4208 = v4205 ? v4203 : false;
      const v4210 = v3951 ? v4203 : v4208;
      v4198 = v4210;
      
      break;
      }
    case 'ChangeAdmin': {
      const v4211 = v3955[1];
      const v4212 = v4211.admin;
      const v4213 = v4211.fee;
      const v4215 = v4211.quorum;
      const v4217 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4212), null);
      const v4219 = stdlib.fromSome(v4217, v4183);
      const v4220 = v4219[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:84:13:array', stdlib.UInt_max, '0')];
      let v4223;
      switch (v4217[0]) {
        case 'None': {
          const v4224 = v4217[1];
          v4223 = false;
          
          break;
          }
        case 'Some': {
          const v4225 = v4217[1];
          v4223 = true;
          
          break;
          }
        }
      const v4226 = stdlib.gt(v4220, v3986);
      const v4227 = v4223 ? v4226 : false;
      const v4228 = stdlib.gt(v4215, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:86:34:decimal', stdlib.UInt_max, '0'));
      let v4229;
      if (v4228) {
        const v4232 = stdlib.lt(v4215, v3848);
        v4229 = v4232;
        }
      else {
        v4229 = false;
        }
      const v4233 = stdlib.ge(v4213, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:87:34:decimal', stdlib.UInt_max, '0'));
      const v4234 = stdlib.lt(v4213, stdlib.UInt_max);
      const v4235 = v4233 ? v4234 : false;
      const v4236 = v4227 ? v4229 : false;
      const v4237 = v4236 ? v4235 : false;
      v4198 = v4237;
      
      break;
      }
    case 'EjectMember': {
      const v4238 = v3955[1];
      const v4239 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4238), null);
      let v4240;
      switch (v4239[0]) {
        case 'None': {
          const v4241 = v4239[1];
          v4240 = false;
          
          break;
          }
        case 'Some': {
          const v4242 = v4239[1];
          v4240 = true;
          
          break;
          }
        }
      const v4244 = stdlib.addressEq(v4238, v3949);
      const v4245 = v4244 ? false : true;
      const v4246 = v4240 ? v4245 : false;
      v4198 = v4246;
      
      break;
      }
    case 'None': {
      const v4247 = v3955[1];
      v4198 = false;
      
      break;
      }
    case 'Stop': {
      const v4248 = v3955[1];
      v4198 = true;
      
      break;
      }
    }
  const v4249 = v4198 ? false : true;
  stdlib.assert(v4249, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./dao/contracts/dao-core.rsh:315:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:311:44:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:311:44:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to "runregisterProposal0_352" (defined at: ./dao/contracts/dao-core.rsh:311:10:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:189:50:function exp)'],
    msg: 'A Proposal is already active.',
    who: 'registerProposal'
    });
  const v4252 = stdlib.sub(stdlib.UInt_max, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:320:32:decimal', stdlib.UInt_max, '1'));
  const v4253 = stdlib.lt(v3984, v4252);
  stdlib.assert(v4253, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./dao/contracts/dao-core.rsh:320:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:311:44:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:311:44:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to "runregisterProposal0_352" (defined at: ./dao/contracts/dao-core.rsh:311:10:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:189:50:function exp)'],
    msg: 'Governance limit reached',
    who: 'registerProposal'
    });
  let v4255;
  switch (v4158[0]) {
    case 'AllocateFunds': {
      const v4256 = v4158[1];
      const v4257 = v4256[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:76:21:array', stdlib.UInt_max, '0')];
      const v4258 = v4256[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:76:21:array', stdlib.UInt_max, '1')];
      const v4260 = stdlib.lt(v4258, v3880);
      const v4261 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4257), null);
      let v4262;
      switch (v4261[0]) {
        case 'None': {
          const v4263 = v4261[1];
          v4262 = false;
          
          break;
          }
        case 'Some': {
          const v4264 = v4261[1];
          v4262 = true;
          
          break;
          }
        }
      const v4265 = v4262 ? v4260 : false;
      const v4267 = v3951 ? v4260 : v4265;
      v4255 = v4267;
      
      break;
      }
    case 'ChangeAdmin': {
      const v4268 = v4158[1];
      const v4269 = v4268.admin;
      const v4270 = v4268.fee;
      const v4272 = v4268.quorum;
      const v4274 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4269), null);
      const v4276 = stdlib.fromSome(v4274, v4183);
      const v4277 = v4276[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:84:13:array', stdlib.UInt_max, '0')];
      let v4280;
      switch (v4274[0]) {
        case 'None': {
          const v4281 = v4274[1];
          v4280 = false;
          
          break;
          }
        case 'Some': {
          const v4282 = v4274[1];
          v4280 = true;
          
          break;
          }
        }
      const v4283 = stdlib.gt(v4277, v3986);
      const v4284 = v4280 ? v4283 : false;
      const v4285 = stdlib.gt(v4272, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:86:34:decimal', stdlib.UInt_max, '0'));
      let v4286;
      if (v4285) {
        const v4289 = stdlib.lt(v4272, v3848);
        v4286 = v4289;
        }
      else {
        v4286 = false;
        }
      const v4290 = stdlib.ge(v4270, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:87:34:decimal', stdlib.UInt_max, '0'));
      const v4291 = stdlib.lt(v4270, stdlib.UInt_max);
      const v4292 = v4290 ? v4291 : false;
      const v4293 = v4284 ? v4286 : false;
      const v4294 = v4293 ? v4292 : false;
      v4255 = v4294;
      
      break;
      }
    case 'EjectMember': {
      const v4295 = v4158[1];
      const v4296 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4295), null);
      let v4297;
      switch (v4296[0]) {
        case 'None': {
          const v4298 = v4296[1];
          v4297 = false;
          
          break;
          }
        case 'Some': {
          const v4299 = v4296[1];
          v4297 = true;
          
          break;
          }
        }
      const v4301 = stdlib.addressEq(v4295, v3949);
      const v4302 = v4301 ? false : true;
      const v4303 = v4297 ? v4302 : false;
      v4255 = v4303;
      
      break;
      }
    case 'None': {
      const v4304 = v4158[1];
      v4255 = false;
      
      break;
      }
    case 'Stop': {
      const v4305 = v4158[1];
      v4255 = true;
      
      break;
      }
    }
  stdlib.assert(v4255, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./dao/contracts/dao-core.rsh:321:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:311:44:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:311:44:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to "runregisterProposal0_352" (defined at: ./dao/contracts/dao-core.rsh:311:10:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:189:50:function exp)'],
    msg: 'Bad suggestion is bad. Apologize to everyone.',
    who: 'registerProposal'
    });
  const v4324 = ['registerProposal0_352', v4157];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3833, v3834, v3839, v3848, v3851, v3872, v3874, v3876, v3880, v3949, v3950, v3951, v3952, v3953, v3955, v3984, v3985, v3986, v4324],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc19],
    pay: [stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:311:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v4508], secs: v4510, time: v4509, didSend: v2529, from: v4507 } = txn1;
      
      switch (v4508[0]) {
        case 'addMember0_352': {
          const v4511 = v4508[1];
          
          break;
          }
        case 'donate0_352': {
          const v5803 = v4508[1];
          
          break;
          }
        case 'eject0_352': {
          const v7095 = v4508[1];
          
          break;
          }
        case 'joinLeave0_352': {
          const v8387 = v4508[1];
          
          break;
          }
        case 'registerProposal0_352': {
          const v9679 = v4508[1];
          sim_r.txns.push({
            kind: 'api',
            who: "registerProposal"
            });
          ;
          const v9983 = v9679[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:311:10:spread', stdlib.UInt_max, '0')];
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v4507), null);
          switch (v3955[0]) {
            case 'AllocateFunds': {
              const v10011 = v3955[1];
              const v10012 = v10011[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:76:21:array', stdlib.UInt_max, '0')];
              stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v10012), null);
              
              break;
              }
            case 'ChangeAdmin': {
              const v10023 = v3955[1];
              const v10024 = v10023.admin;
              stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v10024), null);
              
              break;
              }
            case 'EjectMember': {
              const v10050 = v3955[1];
              stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v10050), null);
              
              break;
              }
            case 'None': {
              const v10059 = v3955[1];
              
              break;
              }
            case 'Stop': {
              const v10060 = v3955[1];
              
              break;
              }
            }
          switch (v9983[0]) {
            case 'AllocateFunds': {
              const v10068 = v9983[1];
              const v10069 = v10068[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:76:21:array', stdlib.UInt_max, '0')];
              stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v10069), null);
              
              break;
              }
            case 'ChangeAdmin': {
              const v10080 = v9983[1];
              const v10081 = v10080.admin;
              stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v10081), null);
              
              break;
              }
            case 'EjectMember': {
              const v10107 = v9983[1];
              stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v10107), null);
              
              break;
              }
            case 'None': {
              const v10116 = v9983[1];
              
              break;
              }
            case 'Stop': {
              const v10117 = v9983[1];
              
              break;
              }
            }
          const v10120 = null;
          const v10121 = await txn1.getOutput('registerProposal', 'v10120', ctc0, v10120);
          
          null;
          const v10154 = stdlib.add(v3984, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:183:30:decimal', stdlib.UInt_max, '1'));
          const v10155 = {
            Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            action: v9983,
            index: v10154
            };
          const v22041 = v3874;
          const v22043 = v10155;
          const v22045 = v3880;
          const v22046 = v3874.admin;
          const v22047 = v3874.fee;
          const v22048 = v3874.openTreasury;
          const v22049 = v3874.quorum;
          const v22050 = v3874.registerSelf;
          const v22051 = v10155.action;
          const v22052 = v10155.index;
          const v22053 = stdlib.ge(v22052, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
          let v22054;
          if (v22053) {
            const v22055 = stdlib.mod(v22052, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
            const v22056 = stdlib.sub(v22052, v22055);
            const v22057 = stdlib.div(v22056, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
            v22054 = v22057;
            }
          else {
            v22054 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
            }
          sim_r.isHalt = false;
          
          break;
          }
        case 'voteProposal0_352': {
          const v10971 = v4508[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc6, ctc1, ctc6, ctc10, ctc11, ctc12, ctc1, ctc4, ctc1, ctc8, ctc1, ctc8, ctc10, ctc1, ctc8, ctc1, ctc19],
    waitIfNotPresent: false
    }));
  const {data: [v4508], secs: v4510, time: v4509, didSend: v2529, from: v4507 } = txn1;
  switch (v4508[0]) {
    case 'addMember0_352': {
      const v4511 = v4508[1];
      return;
      break;
      }
    case 'donate0_352': {
      const v5803 = v4508[1];
      return;
      break;
      }
    case 'eject0_352': {
      const v7095 = v4508[1];
      return;
      break;
      }
    case 'joinLeave0_352': {
      const v8387 = v4508[1];
      return;
      break;
      }
    case 'registerProposal0_352': {
      const v9679 = v4508[1];
      undefined /* setApiDetails */;
      const v9731 = stdlib.le(v3880, stdlib.UInt_max);
      stdlib.assert(v9731, {
        at: './dao/contracts/dao-core.rsh:189:50:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'registerProposal'
        });
      ;
      const v9983 = v9679[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:311:10:spread', stdlib.UInt_max, '0')];
      let v9987;
      if (v3985) {
        const v9989 = stdlib.mod(v3984, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
        const v9991 = stdlib.sub(v3984, v9989);
        const v9993 = stdlib.div(v9991, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
        v9987 = v9993;
        }
      else {
        v9987 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
        }
      const v9994 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4507), null);
      const v9995 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v9996 = stdlib.fromSome(v9994, v9995);
      const v9997 = v9996[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:120:11:array', stdlib.UInt_max, '0')];
      const v9999 = stdlib.ge(v9997, v9987);
      stdlib.assert(v9999, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./dao/contracts/dao-core.rsh:121:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:312:22:application call to "requireIsMember" (defined at: ./dao/contracts/dao-core.rsh:118:36:function exp)', 'at ./dao/contracts/dao-core.rsh:324:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:324:13:function exp)'],
        msg: 'THIEF! SEIZE THEM!',
        who: 'registerProposal'
        });
      const v10006 = stdlib.ge(v9997, v3986);
      stdlib.assert(v10006, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./dao/contracts/dao-core.rsh:313:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:324:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:324:13:function exp)'],
        msg: 'User is below Citizen Rank threshold',
        who: 'registerProposal'
        });
      let v10010;
      switch (v3955[0]) {
        case 'AllocateFunds': {
          const v10011 = v3955[1];
          const v10012 = v10011[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:76:21:array', stdlib.UInt_max, '0')];
          const v10013 = v10011[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:76:21:array', stdlib.UInt_max, '1')];
          const v10015 = stdlib.lt(v10013, v3880);
          const v10016 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v10012), null);
          let v10017;
          switch (v10016[0]) {
            case 'None': {
              const v10018 = v10016[1];
              v10017 = false;
              
              break;
              }
            case 'Some': {
              const v10019 = v10016[1];
              v10017 = true;
              
              break;
              }
            }
          const v10020 = v10017 ? v10015 : false;
          const v10022 = v3951 ? v10015 : v10020;
          v10010 = v10022;
          
          break;
          }
        case 'ChangeAdmin': {
          const v10023 = v3955[1];
          const v10024 = v10023.admin;
          const v10025 = v10023.fee;
          const v10027 = v10023.quorum;
          const v10029 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v10024), null);
          const v10031 = stdlib.fromSome(v10029, v9995);
          const v10032 = v10031[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:84:13:array', stdlib.UInt_max, '0')];
          let v10035;
          switch (v10029[0]) {
            case 'None': {
              const v10036 = v10029[1];
              v10035 = false;
              
              break;
              }
            case 'Some': {
              const v10037 = v10029[1];
              v10035 = true;
              
              break;
              }
            }
          const v10038 = stdlib.gt(v10032, v3986);
          const v10039 = v10035 ? v10038 : false;
          const v10040 = stdlib.gt(v10027, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:86:34:decimal', stdlib.UInt_max, '0'));
          let v10041;
          if (v10040) {
            const v10044 = stdlib.lt(v10027, v3848);
            v10041 = v10044;
            }
          else {
            v10041 = false;
            }
          const v10045 = stdlib.ge(v10025, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:87:34:decimal', stdlib.UInt_max, '0'));
          const v10046 = stdlib.lt(v10025, stdlib.UInt_max);
          const v10047 = v10045 ? v10046 : false;
          const v10048 = v10039 ? v10041 : false;
          const v10049 = v10048 ? v10047 : false;
          v10010 = v10049;
          
          break;
          }
        case 'EjectMember': {
          const v10050 = v3955[1];
          const v10051 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v10050), null);
          let v10052;
          switch (v10051[0]) {
            case 'None': {
              const v10053 = v10051[1];
              v10052 = false;
              
              break;
              }
            case 'Some': {
              const v10054 = v10051[1];
              v10052 = true;
              
              break;
              }
            }
          const v10056 = stdlib.addressEq(v10050, v3949);
          const v10057 = v10056 ? false : true;
          const v10058 = v10052 ? v10057 : false;
          v10010 = v10058;
          
          break;
          }
        case 'None': {
          const v10059 = v3955[1];
          v10010 = false;
          
          break;
          }
        case 'Stop': {
          const v10060 = v3955[1];
          v10010 = true;
          
          break;
          }
        }
      const v10061 = v10010 ? false : true;
      stdlib.assert(v10061, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./dao/contracts/dao-core.rsh:315:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:324:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:324:13:function exp)'],
        msg: 'A Proposal is already active.',
        who: 'registerProposal'
        });
      const v10064 = stdlib.sub(stdlib.UInt_max, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:320:32:decimal', stdlib.UInt_max, '1'));
      const v10065 = stdlib.lt(v3984, v10064);
      stdlib.assert(v10065, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./dao/contracts/dao-core.rsh:320:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:324:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:324:13:function exp)'],
        msg: 'Governance limit reached',
        who: 'registerProposal'
        });
      let v10067;
      switch (v9983[0]) {
        case 'AllocateFunds': {
          const v10068 = v9983[1];
          const v10069 = v10068[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:76:21:array', stdlib.UInt_max, '0')];
          const v10070 = v10068[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:76:21:array', stdlib.UInt_max, '1')];
          const v10072 = stdlib.lt(v10070, v3880);
          const v10073 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v10069), null);
          let v10074;
          switch (v10073[0]) {
            case 'None': {
              const v10075 = v10073[1];
              v10074 = false;
              
              break;
              }
            case 'Some': {
              const v10076 = v10073[1];
              v10074 = true;
              
              break;
              }
            }
          const v10077 = v10074 ? v10072 : false;
          const v10079 = v3951 ? v10072 : v10077;
          v10067 = v10079;
          
          break;
          }
        case 'ChangeAdmin': {
          const v10080 = v9983[1];
          const v10081 = v10080.admin;
          const v10082 = v10080.fee;
          const v10084 = v10080.quorum;
          const v10086 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v10081), null);
          const v10088 = stdlib.fromSome(v10086, v9995);
          const v10089 = v10088[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:84:13:array', stdlib.UInt_max, '0')];
          let v10092;
          switch (v10086[0]) {
            case 'None': {
              const v10093 = v10086[1];
              v10092 = false;
              
              break;
              }
            case 'Some': {
              const v10094 = v10086[1];
              v10092 = true;
              
              break;
              }
            }
          const v10095 = stdlib.gt(v10089, v3986);
          const v10096 = v10092 ? v10095 : false;
          const v10097 = stdlib.gt(v10084, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:86:34:decimal', stdlib.UInt_max, '0'));
          let v10098;
          if (v10097) {
            const v10101 = stdlib.lt(v10084, v3848);
            v10098 = v10101;
            }
          else {
            v10098 = false;
            }
          const v10102 = stdlib.ge(v10082, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:87:34:decimal', stdlib.UInt_max, '0'));
          const v10103 = stdlib.lt(v10082, stdlib.UInt_max);
          const v10104 = v10102 ? v10103 : false;
          const v10105 = v10096 ? v10098 : false;
          const v10106 = v10105 ? v10104 : false;
          v10067 = v10106;
          
          break;
          }
        case 'EjectMember': {
          const v10107 = v9983[1];
          const v10108 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v10107), null);
          let v10109;
          switch (v10108[0]) {
            case 'None': {
              const v10110 = v10108[1];
              v10109 = false;
              
              break;
              }
            case 'Some': {
              const v10111 = v10108[1];
              v10109 = true;
              
              break;
              }
            }
          const v10113 = stdlib.addressEq(v10107, v3949);
          const v10114 = v10113 ? false : true;
          const v10115 = v10109 ? v10114 : false;
          v10067 = v10115;
          
          break;
          }
        case 'None': {
          const v10116 = v9983[1];
          v10067 = false;
          
          break;
          }
        case 'Stop': {
          const v10117 = v9983[1];
          v10067 = true;
          
          break;
          }
        }
      stdlib.assert(v10067, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./dao/contracts/dao-core.rsh:321:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:324:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:324:13:function exp)'],
        msg: 'Bad suggestion is bad. Apologize to everyone.',
        who: 'registerProposal'
        });
      const v10120 = null;
      const v10121 = await txn1.getOutput('registerProposal', 'v10120', ctc0, v10120);
      if (v2529) {
        stdlib.protect(ctc0, await interact.out(v9679, v10121), {
          at: './dao/contracts/dao-core.rsh:311:11:application',
          fs: ['at ./dao/contracts/dao-core.rsh:311:11:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:311:11:function exp)', 'at ./dao/contracts/dao-core.rsh:325:12:application call to "k" (defined at: ./dao/contracts/dao-core.rsh:324:13:function exp)', 'at ./dao/contracts/dao-core.rsh:324:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:324:13:function exp)'],
          msg: 'out',
          who: 'registerProposal'
          });
        }
      else {
        }
      
      null;
      const v10154 = stdlib.add(v3984, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:183:30:decimal', stdlib.UInt_max, '1'));
      const v10155 = {
        Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        action: v9983,
        index: v10154
        };
      const v22041 = v3874;
      const v22043 = v10155;
      const v22045 = v3880;
      const v22046 = v3874.admin;
      const v22047 = v3874.fee;
      const v22048 = v3874.openTreasury;
      const v22049 = v3874.quorum;
      const v22050 = v3874.registerSelf;
      const v22051 = v10155.action;
      const v22052 = v10155.index;
      const v22053 = stdlib.ge(v22052, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
      let v22054;
      if (v22053) {
        const v22055 = stdlib.mod(v22052, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
        const v22056 = stdlib.sub(v22052, v22055);
        const v22057 = stdlib.div(v22056, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
        v22054 = v22057;
        }
      else {
        v22054 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
        }
      return;
      
      break;
      }
    case 'voteProposal0_352': {
      const v10971 = v4508[1];
      return;
      break;
      }
    }
  
  
  };
export async function _voteProposal3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _voteProposal3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _voteProposal3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc6 = stdlib.T_Contract;
  const ctc7 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Struct([['admin', ctc4], ['registerSelf', ctc8], ['fee', ctc1], ['quorum', ctc1], ['openTreasury', ctc8]]);
  const ctc10 = stdlib.T_Data({
    AllocateFunds: ctc7,
    ChangeAdmin: ctc9,
    EjectMember: ctc4,
    None: ctc0,
    Stop: ctc0
    });
  const ctc11 = stdlib.T_Object({
    admin: ctc4,
    fee: ctc1,
    openTreasury: ctc8,
    quorum: ctc1,
    registerSelf: ctc8
    });
  const ctc12 = stdlib.T_Object({
    Against: ctc1,
    For: ctc1,
    action: ctc10,
    index: ctc1
    });
  const ctc13 = stdlib.T_Data({
    Against: ctc0,
    For: ctc0
    });
  const ctc14 = stdlib.T_Tuple([ctc13]);
  const ctc15 = stdlib.T_Tuple([ctc4]);
  const ctc16 = stdlib.T_Tuple([ctc1]);
  const ctc17 = stdlib.T_Tuple([ctc8]);
  const ctc18 = stdlib.T_Tuple([ctc10]);
  const ctc19 = stdlib.T_Data({
    addMember0_352: ctc15,
    donate0_352: ctc16,
    eject0_352: ctc15,
    joinLeave0_352: ctc17,
    registerProposal0_352: ctc18,
    voteProposal0_352: ctc14
    });
  const ctc20 = stdlib.T_Tuple([ctc1, ctc0]);
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v3833, v3834, v3839, v3848, v3851, v3872, v3874, v3876, v3880, v3949, v3950, v3951, v3952, v3953, v3955, v3984, v3985, v3986] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc6, ctc1, ctc6, ctc10, ctc11, ctc12, ctc1, ctc4, ctc1, ctc8, ctc1, ctc8, ctc10, ctc1, ctc8, ctc1]);
  const v4326 = ctc.selfAddress();
  const v4328 = stdlib.protect(ctc14, await interact.in(), {
    at: './dao/contracts/dao-core.rsh:1:23:application',
    fs: ['at ./dao/contracts/dao-core.rsh:333:38:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:333:38:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to "runvoteProposal0_352" (defined at: ./dao/contracts/dao-core.rsh:333:10:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:189:50:function exp)'],
    msg: 'in',
    who: 'voteProposal'
    });
  const v4329 = v4328[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:1:23:application', stdlib.UInt_max, '0')];
  let v4336;
  if (v3985) {
    const v4338 = stdlib.mod(v3984, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
    const v4340 = stdlib.sub(v3984, v4338);
    const v4342 = stdlib.div(v4340, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
    v4336 = v4342;
    }
  else {
    v4336 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
    }
  const v4343 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4326), null);
  const v4344 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v4345 = stdlib.fromSome(v4343, v4344);
  const v4346 = v4345[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:120:11:array', stdlib.UInt_max, '0')];
  const v4347 = v4345[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:120:11:array', stdlib.UInt_max, '1')];
  const v4348 = stdlib.ge(v4346, v4336);
  stdlib.assert(v4348, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./dao/contracts/dao-core.rsh:121:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:334:22:application call to "requireIsMember" (defined at: ./dao/contracts/dao-core.rsh:118:36:function exp)', 'at ./dao/contracts/dao-core.rsh:333:38:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:333:38:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to "runvoteProposal0_352" (defined at: ./dao/contracts/dao-core.rsh:333:10:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:189:50:function exp)'],
    msg: 'THIEF! SEIZE THEM!',
    who: 'voteProposal'
    });
  const v4350 = v3876.For;
  const v4351 = v3876.Against;
  let v4354;
  switch (v3955[0]) {
    case 'AllocateFunds': {
      const v4355 = v3955[1];
      const v4356 = v4355[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:76:21:array', stdlib.UInt_max, '0')];
      const v4357 = v4355[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:76:21:array', stdlib.UInt_max, '1')];
      const v4359 = stdlib.lt(v4357, v3880);
      const v4360 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4356), null);
      let v4361;
      switch (v4360[0]) {
        case 'None': {
          const v4362 = v4360[1];
          v4361 = false;
          
          break;
          }
        case 'Some': {
          const v4363 = v4360[1];
          v4361 = true;
          
          break;
          }
        }
      const v4364 = v4361 ? v4359 : false;
      const v4366 = v3951 ? v4359 : v4364;
      v4354 = v4366;
      
      break;
      }
    case 'ChangeAdmin': {
      const v4367 = v3955[1];
      const v4368 = v4367.admin;
      const v4369 = v4367.fee;
      const v4371 = v4367.quorum;
      const v4373 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4368), null);
      const v4375 = stdlib.fromSome(v4373, v4344);
      const v4376 = v4375[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:84:13:array', stdlib.UInt_max, '0')];
      let v4379;
      switch (v4373[0]) {
        case 'None': {
          const v4380 = v4373[1];
          v4379 = false;
          
          break;
          }
        case 'Some': {
          const v4381 = v4373[1];
          v4379 = true;
          
          break;
          }
        }
      const v4382 = stdlib.gt(v4376, v3986);
      const v4383 = v4379 ? v4382 : false;
      const v4384 = stdlib.gt(v4371, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:86:34:decimal', stdlib.UInt_max, '0'));
      let v4385;
      if (v4384) {
        const v4388 = stdlib.lt(v4371, v3848);
        v4385 = v4388;
        }
      else {
        v4385 = false;
        }
      const v4389 = stdlib.ge(v4369, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:87:34:decimal', stdlib.UInt_max, '0'));
      const v4390 = stdlib.lt(v4369, stdlib.UInt_max);
      const v4391 = v4389 ? v4390 : false;
      const v4392 = v4383 ? v4385 : false;
      const v4393 = v4392 ? v4391 : false;
      v4354 = v4393;
      
      break;
      }
    case 'EjectMember': {
      const v4394 = v3955[1];
      const v4395 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4394), null);
      let v4396;
      switch (v4395[0]) {
        case 'None': {
          const v4397 = v4395[1];
          v4396 = false;
          
          break;
          }
        case 'Some': {
          const v4398 = v4395[1];
          v4396 = true;
          
          break;
          }
        }
      const v4400 = stdlib.addressEq(v4394, v3949);
      const v4401 = v4400 ? false : true;
      const v4402 = v4396 ? v4401 : false;
      v4354 = v4402;
      
      break;
      }
    case 'None': {
      const v4403 = v3955[1];
      v4354 = false;
      
      break;
      }
    case 'Stop': {
      const v4404 = v3955[1];
      v4354 = true;
      
      break;
      }
    }
  stdlib.assert(v4354, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./dao/contracts/dao-core.rsh:336:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:333:38:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:333:38:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to "runvoteProposal0_352" (defined at: ./dao/contracts/dao-core.rsh:333:10:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:189:50:function exp)'],
    msg: 'No Proposal is currently active',
    who: 'voteProposal'
    });
  const v4406 = stdlib.gt(v4350, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:341:17:decimal', stdlib.UInt_max, '0'));
  if (v4406) {
    const v4408 = stdlib.sub(stdlib.UInt_max, v4351);
    const v4409 = stdlib.lt(v4350, v4408);
    stdlib.assert(v4409, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./dao/contracts/dao-core.rsh:342:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:333:38:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:333:38:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to "runvoteProposal0_352" (defined at: ./dao/contracts/dao-core.rsh:333:10:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:189:50:function exp)'],
      msg: 'Voting limit reached',
      who: 'voteProposal'
      });
    }
  else {
    }
  const v4411 = stdlib.gt(v4351, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:344:21:decimal', stdlib.UInt_max, '0'));
  if (v4411) {
    const v4413 = stdlib.sub(stdlib.UInt_max, v4350);
    const v4414 = stdlib.lt(v4351, v4413);
    stdlib.assert(v4414, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./dao/contracts/dao-core.rsh:345:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:333:38:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:333:38:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to "runvoteProposal0_352" (defined at: ./dao/contracts/dao-core.rsh:333:10:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:189:50:function exp)'],
      msg: 'Voting limit reached',
      who: 'voteProposal'
      });
    }
  else {
    }
  const v4418 = stdlib.add(v4350, v4351);
  const v4420 = stdlib.lt(v4418, v3952);
  stdlib.assert(v4420, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./dao/contracts/dao-core.rsh:348:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:333:38:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:333:38:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to "runvoteProposal0_352" (defined at: ./dao/contracts/dao-core.rsh:333:10:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:189:50:function exp)'],
    msg: 'Quorum reached',
    who: 'voteProposal'
    });
  const v4427 = stdlib.lt(v4347, v3984);
  stdlib.assert(v4427, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./dao/contracts/dao-core.rsh:351:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:333:38:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:333:38:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to "runvoteProposal0_352" (defined at: ./dao/contracts/dao-core.rsh:333:10:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:189:50:function exp)'],
    msg: 'Address has already voted in this session',
    who: 'voteProposal'
    });
  let v4429;
  switch (v4329[0]) {
    case 'Against': {
      const v4430 = v4329[1];
      const v4433 = stdlib.add(v4351, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:355:40:decimal', stdlib.UInt_max, '1'));
      const v4434 = [v4350, v4433];
      v4429 = v4434;
      
      break;
      }
    case 'For': {
      const v4436 = v4329[1];
      const v4439 = stdlib.add(v4350, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:354:27:decimal', stdlib.UInt_max, '1'));
      const v4440 = [v4439, v4351];
      v4429 = v4440;
      
      break;
      }
    }
  const v4442 = v4429[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:353:13:array', stdlib.UInt_max, '0')];
  const v4443 = v4429[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:353:13:array', stdlib.UInt_max, '1')];
  const v4445 = stdlib.sub(stdlib.UInt_max, v4443);
  const v4446 = stdlib.lt(v4442, v4445);
  stdlib.assert(v4446, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./dao/contracts/dao-core.rsh:357:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:333:38:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:333:38:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to "runvoteProposal0_352" (defined at: ./dao/contracts/dao-core.rsh:333:10:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:189:50:function exp)'],
    msg: 'Voting limit reached (2)',
    who: 'voteProposal'
    });
  const v4449 = stdlib.sub(stdlib.UInt_max, v4442);
  const v4450 = stdlib.lt(v4443, v4449);
  stdlib.assert(v4450, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./dao/contracts/dao-core.rsh:358:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:333:38:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:333:38:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to "runvoteProposal0_352" (defined at: ./dao/contracts/dao-core.rsh:333:10:function exp)', 'at ./dao/contracts/dao-core.rsh:189:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:189:50:function exp)'],
    msg: 'Voting limit reached (2)',
    who: 'voteProposal'
    });
  const v4459 = ['voteProposal0_352', v4328];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3833, v3834, v3839, v3848, v3851, v3872, v3874, v3876, v3880, v3949, v3950, v3951, v3952, v3953, v3955, v3984, v3985, v3986, v4459],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc19],
    pay: [stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:333:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v4508], secs: v4510, time: v4509, didSend: v2529, from: v4507 } = txn1;
      
      switch (v4508[0]) {
        case 'addMember0_352': {
          const v4511 = v4508[1];
          
          break;
          }
        case 'donate0_352': {
          const v5803 = v4508[1];
          
          break;
          }
        case 'eject0_352': {
          const v7095 = v4508[1];
          
          break;
          }
        case 'joinLeave0_352': {
          const v8387 = v4508[1];
          
          break;
          }
        case 'registerProposal0_352': {
          const v9679 = v4508[1];
          
          break;
          }
        case 'voteProposal0_352': {
          const v10971 = v4508[1];
          sim_r.txns.push({
            kind: 'api',
            who: "voteProposal"
            });
          ;
          const v11454 = v10971[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:333:10:spread', stdlib.UInt_max, '0')];
          const v11465 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v4507), null);
          const v11466 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v11467 = stdlib.fromSome(v11465, v11466);
          const v11468 = v11467[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:120:11:array', stdlib.UInt_max, '0')];
          const v11472 = v3876.For;
          const v11473 = v3876.Against;
          switch (v3955[0]) {
            case 'AllocateFunds': {
              const v11477 = v3955[1];
              const v11478 = v11477[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:76:21:array', stdlib.UInt_max, '0')];
              stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v11478), null);
              
              break;
              }
            case 'ChangeAdmin': {
              const v11489 = v3955[1];
              const v11490 = v11489.admin;
              stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v11490), null);
              
              break;
              }
            case 'EjectMember': {
              const v11516 = v3955[1];
              stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v11516), null);
              
              break;
              }
            case 'None': {
              const v11525 = v3955[1];
              
              break;
              }
            case 'Stop': {
              const v11526 = v3955[1];
              
              break;
              }
            }
          let v11551;
          switch (v11454[0]) {
            case 'Against': {
              const v11552 = v11454[1];
              const v11555 = stdlib.add(v11473, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:355:40:decimal', stdlib.UInt_max, '1'));
              const v11556 = [v11472, v11555];
              v11551 = v11556;
              
              break;
              }
            case 'For': {
              const v11558 = v11454[1];
              const v11561 = stdlib.add(v11472, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:354:27:decimal', stdlib.UInt_max, '1'));
              const v11562 = [v11561, v11473];
              v11551 = v11562;
              
              break;
              }
            }
          const v11564 = v11551[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:353:13:array', stdlib.UInt_max, '0')];
          const v11565 = v11551[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:353:13:array', stdlib.UInt_max, '1')];
          const v11575 = null;
          const v11576 = await txn1.getOutput('voteProposal', 'v11575', ctc0, v11575);
          
          const v11584 = stdlib.lt(v11468, stdlib.UInt_max);
          let v11585;
          if (v11584) {
            const v11588 = stdlib.add(v11468, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:365:45:decimal', stdlib.UInt_max, '1'));
            const v11589 = [v11588, v3984];
            v11585 = v11589;
            }
          else {
            const v11590 = [v11468, v3984];
            v11585 = v11590;
            }
          await stdlib.simMapSet(sim_r, 0, v4507, v11585);
          const v11597 = stdlib.add(v11564, v11565);
          const v11599 = stdlib.ge(v11597, v3952);
          let v11601;
          if (v3985) {
            const v11603 = stdlib.mod(v3984, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
            const v11605 = stdlib.sub(v3984, v11603);
            const v11607 = stdlib.div(v11605, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
            v11601 = v11607;
            }
          else {
            v11601 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
            }
          let v11608;
          switch (v3955[0]) {
            case 'AllocateFunds': {
              const v11609 = v3955[1];
              const v11610 = v11609[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:76:21:array', stdlib.UInt_max, '0')];
              const v11611 = v11609[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:76:21:array', stdlib.UInt_max, '1')];
              const v11613 = stdlib.lt(v11611, v3880);
              const v11614 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v11610), null);
              let v11615;
              switch (v11614[0]) {
                case 'None': {
                  const v11616 = v11614[1];
                  v11615 = false;
                  
                  break;
                  }
                case 'Some': {
                  const v11617 = v11614[1];
                  v11615 = true;
                  
                  break;
                  }
                }
              const v11618 = v11615 ? v11613 : false;
              const v11620 = v3951 ? v11613 : v11618;
              v11608 = v11620;
              
              break;
              }
            case 'ChangeAdmin': {
              const v11621 = v3955[1];
              const v11622 = v11621.admin;
              const v11623 = v11621.fee;
              const v11625 = v11621.quorum;
              const v11627 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v11622), null);
              const v11629 = stdlib.fromSome(v11627, v11466);
              const v11630 = v11629[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:84:13:array', stdlib.UInt_max, '0')];
              let v11633;
              switch (v11627[0]) {
                case 'None': {
                  const v11634 = v11627[1];
                  v11633 = false;
                  
                  break;
                  }
                case 'Some': {
                  const v11635 = v11627[1];
                  v11633 = true;
                  
                  break;
                  }
                }
              const v11636 = stdlib.gt(v11630, v11601);
              const v11637 = v11633 ? v11636 : false;
              const v11638 = stdlib.gt(v11625, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:86:34:decimal', stdlib.UInt_max, '0'));
              let v11639;
              if (v11638) {
                const v11642 = stdlib.lt(v11625, v3848);
                v11639 = v11642;
                }
              else {
                v11639 = false;
                }
              const v11643 = stdlib.ge(v11623, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:87:34:decimal', stdlib.UInt_max, '0'));
              const v11644 = stdlib.lt(v11623, stdlib.UInt_max);
              const v11645 = v11643 ? v11644 : false;
              const v11646 = v11637 ? v11639 : false;
              const v11647 = v11646 ? v11645 : false;
              v11608 = v11647;
              
              break;
              }
            case 'EjectMember': {
              const v11648 = v3955[1];
              const v11649 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v11648), null);
              let v11650;
              switch (v11649[0]) {
                case 'None': {
                  const v11651 = v11649[1];
                  v11650 = false;
                  
                  break;
                  }
                case 'Some': {
                  const v11652 = v11649[1];
                  v11650 = true;
                  
                  break;
                  }
                }
              const v11654 = stdlib.addressEq(v11648, v3949);
              const v11655 = v11654 ? false : true;
              const v11656 = v11650 ? v11655 : false;
              v11608 = v11656;
              
              break;
              }
            case 'None': {
              const v11657 = v3955[1];
              v11608 = false;
              
              break;
              }
            case 'Stop': {
              const v11658 = v3955[1];
              v11608 = true;
              
              break;
              }
            }
          if (v11599) {
            const v11659 = stdlib.gt(v11564, v11565);
            const v11660 = v11608 ? v11659 : false;
            if (v11660) {
              switch (v3955[0]) {
                case 'AllocateFunds': {
                  const v11661 = v3955[1];
                  const v11662 = v11661[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:150:32:application', stdlib.UInt_max, '0')];
                  const v11663 = v11661[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:150:32:application', stdlib.UInt_max, '1')];
                  null;
                  const v11670 = stdlib.sub(v3880, v11663);
                  sim_r.txns.push({
                    kind: 'from',
                    to: v11662,
                    tok: undefined /* Nothing */
                    });
                  const v11675 = {
                    Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    action: v3872,
                    index: v3984
                    };
                  const v22766 = v3874;
                  const v22768 = v11675;
                  const v22770 = v11670;
                  const v22771 = v3874.admin;
                  const v22772 = v3874.fee;
                  const v22773 = v3874.openTreasury;
                  const v22774 = v3874.quorum;
                  const v22775 = v3874.registerSelf;
                  const v22776 = v11675.action;
                  const v22777 = v11675.index;
                  const v22778 = stdlib.ge(v22777, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
                  let v22779;
                  if (v22778) {
                    const v22780 = stdlib.mod(v22777, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
                    const v22781 = stdlib.sub(v22777, v22780);
                    const v22782 = stdlib.div(v22781, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
                    v22779 = v22782;
                    }
                  else {
                    v22779 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
                    }
                  sim_r.isHalt = false;
                  
                  break;
                  }
                case 'ChangeAdmin': {
                  const v11762 = v3955[1];
                  const v11763 = v11762.admin;
                  const v11764 = v11762.registerSelf;
                  const v11765 = v11762.fee;
                  const v11766 = v11762.quorum;
                  const v11767 = v11762.openTreasury;
                  null;
                  const v11801 = {
                    Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    action: v3872,
                    index: v3984
                    };
                  const v11802 = {
                    admin: v11763,
                    fee: v11765,
                    openTreasury: v11767,
                    quorum: v11766,
                    registerSelf: v11764
                    };
                  const v22795 = v11802;
                  const v22797 = v11801;
                  const v22799 = v3880;
                  const v22800 = v11802.admin;
                  const v22801 = v11802.fee;
                  const v22802 = v11802.openTreasury;
                  const v22803 = v11802.quorum;
                  const v22804 = v11802.registerSelf;
                  const v22805 = v11801.action;
                  const v22806 = v11801.index;
                  const v22807 = stdlib.ge(v22806, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
                  let v22808;
                  if (v22807) {
                    const v22809 = stdlib.mod(v22806, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
                    const v22810 = stdlib.sub(v22806, v22809);
                    const v22811 = stdlib.div(v22810, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
                    v22808 = v22811;
                    }
                  else {
                    v22808 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
                    }
                  sim_r.isHalt = false;
                  
                  break;
                  }
                case 'EjectMember': {
                  const v11866 = v3955[1];
                  null;
                  const v11912 = v11866;
                  await stdlib.simMapSet(sim_r, 0, v11866, undefined /* Nothing */);
                  null;
                  const v11915 = {
                    Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    action: v3872,
                    index: v3984
                    };
                  const v22824 = v3874;
                  const v22826 = v11915;
                  const v22828 = v3880;
                  const v22829 = v3874.admin;
                  const v22830 = v3874.fee;
                  const v22831 = v3874.openTreasury;
                  const v22832 = v3874.quorum;
                  const v22833 = v3874.registerSelf;
                  const v22834 = v11915.action;
                  const v22835 = v11915.index;
                  const v22836 = stdlib.ge(v22835, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
                  let v22837;
                  if (v22836) {
                    const v22838 = stdlib.mod(v22835, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
                    const v22839 = stdlib.sub(v22835, v22838);
                    const v22840 = stdlib.div(v22839, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
                    v22837 = v22840;
                    }
                  else {
                    v22837 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
                    }
                  sim_r.isHalt = false;
                  
                  break;
                  }
                case 'None': {
                  const v11965 = v3955[1];
                  null;
                  const v12026 = {
                    Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    action: v3872,
                    index: v3984
                    };
                  const v22853 = v3874;
                  const v22855 = v12026;
                  const v22857 = v3880;
                  const v22858 = v3874.admin;
                  const v22859 = v3874.fee;
                  const v22860 = v3874.openTreasury;
                  const v22861 = v3874.quorum;
                  const v22862 = v3874.registerSelf;
                  const v22863 = v12026.action;
                  const v22864 = v12026.index;
                  const v22865 = stdlib.ge(v22864, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
                  let v22866;
                  if (v22865) {
                    const v22867 = stdlib.mod(v22864, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
                    const v22868 = stdlib.sub(v22864, v22867);
                    const v22869 = stdlib.div(v22868, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
                    v22866 = v22869;
                    }
                  else {
                    v22866 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
                    }
                  sim_r.isHalt = false;
                  
                  break;
                  }
                case 'Stop': {
                  const v12064 = v3955[1];
                  null;
                  const v12138 = [stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:168:33:application', stdlib.UInt_max, '0'), ((sim_r.txns.push({
                    kind: 'remote',
                    obj: v3839,
                    remote: ({
                      accs: [],
                      apps: [],
                      bills: stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:168:33:application', stdlib.UInt_max, '0'),
                      fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      pays: stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:168:33:application', stdlib.UInt_max, '0'),
                      toks: []
                      })
                    })), undefined)];
                  const v12139 = await txn1.getOutput('internal', 'v12138', ctc20, v12138);
                  const v12141 = v12139[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:168:33:application', stdlib.UInt_max, '0')];
                  const v12146 = stdlib.add(v3880, v12141);
                  const v22899 = v3874.admin;
                  const v22905 = stdlib.sub(v12146, v12146);
                  sim_r.txns.push({
                    kind: 'from',
                    to: v22899,
                    tok: undefined /* Nothing */
                    });
                  const v22907 = (stdlib.le(await ctc.getBalance(), v22905) ? stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:373:29:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(), v22905));
                  sim_r.txns.push({
                    kind: 'from',
                    to: v22899,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  
                  break;
                  }
                }}
            else {
              if (v11659) {
                switch (v3955[0]) {
                  case 'AllocateFunds': {
                    const v12163 = v3955[1];
                    null;
                    const v12167 = {
                      Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      action: v3872,
                      index: v3984
                      };
                    const v22911 = v3874;
                    const v22913 = v12167;
                    const v22915 = v3880;
                    const v22916 = v3874.admin;
                    const v22917 = v3874.fee;
                    const v22918 = v3874.openTreasury;
                    const v22919 = v3874.quorum;
                    const v22920 = v3874.registerSelf;
                    const v22921 = v12167.action;
                    const v22922 = v12167.index;
                    const v22923 = stdlib.ge(v22922, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
                    let v22924;
                    if (v22923) {
                      const v22925 = stdlib.mod(v22922, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
                      const v22926 = stdlib.sub(v22922, v22925);
                      const v22927 = stdlib.div(v22926, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
                      v22924 = v22927;
                      }
                    else {
                      v22924 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
                      }
                    sim_r.isHalt = false;
                    
                    break;
                    }
                  case 'ChangeAdmin': {
                    const v12173 = v3955[1];
                    null;
                    const v12180 = {
                      Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      action: v3872,
                      index: v3984
                      };
                    const v22940 = v3874;
                    const v22942 = v12180;
                    const v22944 = v3880;
                    const v22945 = v3874.admin;
                    const v22946 = v3874.fee;
                    const v22947 = v3874.openTreasury;
                    const v22948 = v3874.quorum;
                    const v22949 = v3874.registerSelf;
                    const v22950 = v12180.action;
                    const v22951 = v12180.index;
                    const v22952 = stdlib.ge(v22951, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
                    let v22953;
                    if (v22952) {
                      const v22954 = stdlib.mod(v22951, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
                      const v22955 = stdlib.sub(v22951, v22954);
                      const v22956 = stdlib.div(v22955, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
                      v22953 = v22956;
                      }
                    else {
                      v22953 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
                      }
                    sim_r.isHalt = false;
                    
                    break;
                    }
                  case 'EjectMember': {
                    const v12186 = v3955[1];
                    null;
                    const v12188 = {
                      Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      action: v3872,
                      index: v3984
                      };
                    const v22969 = v3874;
                    const v22971 = v12188;
                    const v22973 = v3880;
                    const v22974 = v3874.admin;
                    const v22975 = v3874.fee;
                    const v22976 = v3874.openTreasury;
                    const v22977 = v3874.quorum;
                    const v22978 = v3874.registerSelf;
                    const v22979 = v12188.action;
                    const v22980 = v12188.index;
                    const v22981 = stdlib.ge(v22980, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
                    let v22982;
                    if (v22981) {
                      const v22983 = stdlib.mod(v22980, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
                      const v22984 = stdlib.sub(v22980, v22983);
                      const v22985 = stdlib.div(v22984, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
                      v22982 = v22985;
                      }
                    else {
                      v22982 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
                      }
                    sim_r.isHalt = false;
                    
                    break;
                    }
                  case 'None': {
                    const v12194 = v3955[1];
                    null;
                    const v12196 = {
                      Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      action: v3872,
                      index: v3984
                      };
                    const v22998 = v3874;
                    const v23000 = v12196;
                    const v23002 = v3880;
                    const v23003 = v3874.admin;
                    const v23004 = v3874.fee;
                    const v23005 = v3874.openTreasury;
                    const v23006 = v3874.quorum;
                    const v23007 = v3874.registerSelf;
                    const v23008 = v12196.action;
                    const v23009 = v12196.index;
                    const v23010 = stdlib.ge(v23009, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
                    let v23011;
                    if (v23010) {
                      const v23012 = stdlib.mod(v23009, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
                      const v23013 = stdlib.sub(v23009, v23012);
                      const v23014 = stdlib.div(v23013, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
                      v23011 = v23014;
                      }
                    else {
                      v23011 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
                      }
                    sim_r.isHalt = false;
                    
                    break;
                    }
                  case 'Stop': {
                    const v12202 = v3955[1];
                    null;
                    const v12204 = {
                      Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      action: v3872,
                      index: v3984
                      };
                    const v23027 = v3874;
                    const v23029 = v12204;
                    const v23031 = v3880;
                    const v23032 = v3874.admin;
                    const v23033 = v3874.fee;
                    const v23034 = v3874.openTreasury;
                    const v23035 = v3874.quorum;
                    const v23036 = v3874.registerSelf;
                    const v23037 = v12204.action;
                    const v23038 = v12204.index;
                    const v23039 = stdlib.ge(v23038, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
                    let v23040;
                    if (v23039) {
                      const v23041 = stdlib.mod(v23038, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
                      const v23042 = stdlib.sub(v23038, v23041);
                      const v23043 = stdlib.div(v23042, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
                      v23040 = v23043;
                      }
                    else {
                      v23040 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
                      }
                    sim_r.isHalt = false;
                    
                    break;
                    }
                  }}
              else {
                switch (v3955[0]) {
                  case 'AllocateFunds': {
                    const v12210 = v3955[1];
                    null;
                    const v12214 = {
                      Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      action: v3872,
                      index: v3984
                      };
                    const v23056 = v3874;
                    const v23058 = v12214;
                    const v23060 = v3880;
                    const v23061 = v3874.admin;
                    const v23062 = v3874.fee;
                    const v23063 = v3874.openTreasury;
                    const v23064 = v3874.quorum;
                    const v23065 = v3874.registerSelf;
                    const v23066 = v12214.action;
                    const v23067 = v12214.index;
                    const v23068 = stdlib.ge(v23067, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
                    let v23069;
                    if (v23068) {
                      const v23070 = stdlib.mod(v23067, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
                      const v23071 = stdlib.sub(v23067, v23070);
                      const v23072 = stdlib.div(v23071, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
                      v23069 = v23072;
                      }
                    else {
                      v23069 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
                      }
                    sim_r.isHalt = false;
                    
                    break;
                    }
                  case 'ChangeAdmin': {
                    const v12220 = v3955[1];
                    null;
                    const v12227 = {
                      Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      action: v3872,
                      index: v3984
                      };
                    const v23085 = v3874;
                    const v23087 = v12227;
                    const v23089 = v3880;
                    const v23090 = v3874.admin;
                    const v23091 = v3874.fee;
                    const v23092 = v3874.openTreasury;
                    const v23093 = v3874.quorum;
                    const v23094 = v3874.registerSelf;
                    const v23095 = v12227.action;
                    const v23096 = v12227.index;
                    const v23097 = stdlib.ge(v23096, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
                    let v23098;
                    if (v23097) {
                      const v23099 = stdlib.mod(v23096, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
                      const v23100 = stdlib.sub(v23096, v23099);
                      const v23101 = stdlib.div(v23100, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
                      v23098 = v23101;
                      }
                    else {
                      v23098 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
                      }
                    sim_r.isHalt = false;
                    
                    break;
                    }
                  case 'EjectMember': {
                    const v12233 = v3955[1];
                    null;
                    const v12235 = {
                      Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      action: v3872,
                      index: v3984
                      };
                    const v23114 = v3874;
                    const v23116 = v12235;
                    const v23118 = v3880;
                    const v23119 = v3874.admin;
                    const v23120 = v3874.fee;
                    const v23121 = v3874.openTreasury;
                    const v23122 = v3874.quorum;
                    const v23123 = v3874.registerSelf;
                    const v23124 = v12235.action;
                    const v23125 = v12235.index;
                    const v23126 = stdlib.ge(v23125, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
                    let v23127;
                    if (v23126) {
                      const v23128 = stdlib.mod(v23125, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
                      const v23129 = stdlib.sub(v23125, v23128);
                      const v23130 = stdlib.div(v23129, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
                      v23127 = v23130;
                      }
                    else {
                      v23127 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
                      }
                    sim_r.isHalt = false;
                    
                    break;
                    }
                  case 'None': {
                    const v12241 = v3955[1];
                    null;
                    const v12243 = {
                      Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      action: v3872,
                      index: v3984
                      };
                    const v23143 = v3874;
                    const v23145 = v12243;
                    const v23147 = v3880;
                    const v23148 = v3874.admin;
                    const v23149 = v3874.fee;
                    const v23150 = v3874.openTreasury;
                    const v23151 = v3874.quorum;
                    const v23152 = v3874.registerSelf;
                    const v23153 = v12243.action;
                    const v23154 = v12243.index;
                    const v23155 = stdlib.ge(v23154, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
                    let v23156;
                    if (v23155) {
                      const v23157 = stdlib.mod(v23154, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
                      const v23158 = stdlib.sub(v23154, v23157);
                      const v23159 = stdlib.div(v23158, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
                      v23156 = v23159;
                      }
                    else {
                      v23156 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
                      }
                    sim_r.isHalt = false;
                    
                    break;
                    }
                  case 'Stop': {
                    const v12249 = v3955[1];
                    null;
                    const v12251 = {
                      Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      action: v3872,
                      index: v3984
                      };
                    const v23172 = v3874;
                    const v23174 = v12251;
                    const v23176 = v3880;
                    const v23177 = v3874.admin;
                    const v23178 = v3874.fee;
                    const v23179 = v3874.openTreasury;
                    const v23180 = v3874.quorum;
                    const v23181 = v3874.registerSelf;
                    const v23182 = v12251.action;
                    const v23183 = v12251.index;
                    const v23184 = stdlib.ge(v23183, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
                    let v23185;
                    if (v23184) {
                      const v23186 = stdlib.mod(v23183, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
                      const v23187 = stdlib.sub(v23183, v23186);
                      const v23188 = stdlib.div(v23187, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
                      v23185 = v23188;
                      }
                    else {
                      v23185 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
                      }
                    sim_r.isHalt = false;
                    
                    break;
                    }
                  }}}}
          else {
            const v12257 = {
              Against: v11565,
              For: v11564,
              action: v3955,
              index: v3984
              };
            const v23201 = v3874;
            const v23203 = v12257;
            const v23205 = v3880;
            const v23206 = v3874.admin;
            const v23207 = v3874.fee;
            const v23208 = v3874.openTreasury;
            const v23209 = v3874.quorum;
            const v23210 = v3874.registerSelf;
            const v23211 = v12257.action;
            const v23212 = v12257.index;
            const v23213 = stdlib.ge(v23212, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
            let v23214;
            if (v23213) {
              const v23215 = stdlib.mod(v23212, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
              const v23216 = stdlib.sub(v23212, v23215);
              const v23217 = stdlib.div(v23216, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
              v23214 = v23217;
              }
            else {
              v23214 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
              }
            sim_r.isHalt = false;
            }
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc6, ctc1, ctc6, ctc10, ctc11, ctc12, ctc1, ctc4, ctc1, ctc8, ctc1, ctc8, ctc10, ctc1, ctc8, ctc1, ctc19],
    waitIfNotPresent: false
    }));
  const {data: [v4508], secs: v4510, time: v4509, didSend: v2529, from: v4507 } = txn1;
  switch (v4508[0]) {
    case 'addMember0_352': {
      const v4511 = v4508[1];
      return;
      break;
      }
    case 'donate0_352': {
      const v5803 = v4508[1];
      return;
      break;
      }
    case 'eject0_352': {
      const v7095 = v4508[1];
      return;
      break;
      }
    case 'joinLeave0_352': {
      const v8387 = v4508[1];
      return;
      break;
      }
    case 'registerProposal0_352': {
      const v9679 = v4508[1];
      return;
      break;
      }
    case 'voteProposal0_352': {
      const v10971 = v4508[1];
      undefined /* setApiDetails */;
      const v11023 = stdlib.le(v3880, stdlib.UInt_max);
      stdlib.assert(v11023, {
        at: './dao/contracts/dao-core.rsh:189:50:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'voteProposal'
        });
      ;
      const v11454 = v10971[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:333:10:spread', stdlib.UInt_max, '0')];
      let v11458;
      if (v3985) {
        const v11460 = stdlib.mod(v3984, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
        const v11462 = stdlib.sub(v3984, v11460);
        const v11464 = stdlib.div(v11462, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
        v11458 = v11464;
        }
      else {
        v11458 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
        }
      const v11465 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4507), null);
      const v11466 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v11467 = stdlib.fromSome(v11465, v11466);
      const v11468 = v11467[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:120:11:array', stdlib.UInt_max, '0')];
      const v11469 = v11467[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:120:11:array', stdlib.UInt_max, '1')];
      const v11470 = stdlib.ge(v11468, v11458);
      stdlib.assert(v11470, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./dao/contracts/dao-core.rsh:121:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:334:22:application call to "requireIsMember" (defined at: ./dao/contracts/dao-core.rsh:118:36:function exp)', 'at ./dao/contracts/dao-core.rsh:361:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:361:13:function exp)'],
        msg: 'THIEF! SEIZE THEM!',
        who: 'voteProposal'
        });
      const v11472 = v3876.For;
      const v11473 = v3876.Against;
      let v11476;
      switch (v3955[0]) {
        case 'AllocateFunds': {
          const v11477 = v3955[1];
          const v11478 = v11477[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:76:21:array', stdlib.UInt_max, '0')];
          const v11479 = v11477[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:76:21:array', stdlib.UInt_max, '1')];
          const v11481 = stdlib.lt(v11479, v3880);
          const v11482 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v11478), null);
          let v11483;
          switch (v11482[0]) {
            case 'None': {
              const v11484 = v11482[1];
              v11483 = false;
              
              break;
              }
            case 'Some': {
              const v11485 = v11482[1];
              v11483 = true;
              
              break;
              }
            }
          const v11486 = v11483 ? v11481 : false;
          const v11488 = v3951 ? v11481 : v11486;
          v11476 = v11488;
          
          break;
          }
        case 'ChangeAdmin': {
          const v11489 = v3955[1];
          const v11490 = v11489.admin;
          const v11491 = v11489.fee;
          const v11493 = v11489.quorum;
          const v11495 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v11490), null);
          const v11497 = stdlib.fromSome(v11495, v11466);
          const v11498 = v11497[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:84:13:array', stdlib.UInt_max, '0')];
          let v11501;
          switch (v11495[0]) {
            case 'None': {
              const v11502 = v11495[1];
              v11501 = false;
              
              break;
              }
            case 'Some': {
              const v11503 = v11495[1];
              v11501 = true;
              
              break;
              }
            }
          const v11504 = stdlib.gt(v11498, v3986);
          const v11505 = v11501 ? v11504 : false;
          const v11506 = stdlib.gt(v11493, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:86:34:decimal', stdlib.UInt_max, '0'));
          let v11507;
          if (v11506) {
            const v11510 = stdlib.lt(v11493, v3848);
            v11507 = v11510;
            }
          else {
            v11507 = false;
            }
          const v11511 = stdlib.ge(v11491, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:87:34:decimal', stdlib.UInt_max, '0'));
          const v11512 = stdlib.lt(v11491, stdlib.UInt_max);
          const v11513 = v11511 ? v11512 : false;
          const v11514 = v11505 ? v11507 : false;
          const v11515 = v11514 ? v11513 : false;
          v11476 = v11515;
          
          break;
          }
        case 'EjectMember': {
          const v11516 = v3955[1];
          const v11517 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v11516), null);
          let v11518;
          switch (v11517[0]) {
            case 'None': {
              const v11519 = v11517[1];
              v11518 = false;
              
              break;
              }
            case 'Some': {
              const v11520 = v11517[1];
              v11518 = true;
              
              break;
              }
            }
          const v11522 = stdlib.addressEq(v11516, v3949);
          const v11523 = v11522 ? false : true;
          const v11524 = v11518 ? v11523 : false;
          v11476 = v11524;
          
          break;
          }
        case 'None': {
          const v11525 = v3955[1];
          v11476 = false;
          
          break;
          }
        case 'Stop': {
          const v11526 = v3955[1];
          v11476 = true;
          
          break;
          }
        }
      stdlib.assert(v11476, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./dao/contracts/dao-core.rsh:336:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:361:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:361:13:function exp)'],
        msg: 'No Proposal is currently active',
        who: 'voteProposal'
        });
      const v11528 = stdlib.gt(v11472, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:341:17:decimal', stdlib.UInt_max, '0'));
      if (v11528) {
        const v11530 = stdlib.sub(stdlib.UInt_max, v11473);
        const v11531 = stdlib.lt(v11472, v11530);
        stdlib.assert(v11531, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./dao/contracts/dao-core.rsh:342:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:361:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:361:13:function exp)'],
          msg: 'Voting limit reached',
          who: 'voteProposal'
          });
        }
      else {
        }
      const v11533 = stdlib.gt(v11473, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:344:21:decimal', stdlib.UInt_max, '0'));
      if (v11533) {
        const v11535 = stdlib.sub(stdlib.UInt_max, v11472);
        const v11536 = stdlib.lt(v11473, v11535);
        stdlib.assert(v11536, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./dao/contracts/dao-core.rsh:345:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:361:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:361:13:function exp)'],
          msg: 'Voting limit reached',
          who: 'voteProposal'
          });
        }
      else {
        }
      const v11540 = stdlib.add(v11472, v11473);
      const v11542 = stdlib.lt(v11540, v3952);
      stdlib.assert(v11542, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./dao/contracts/dao-core.rsh:348:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:361:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:361:13:function exp)'],
        msg: 'Quorum reached',
        who: 'voteProposal'
        });
      const v11549 = stdlib.lt(v11469, v3984);
      stdlib.assert(v11549, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./dao/contracts/dao-core.rsh:351:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:361:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:361:13:function exp)'],
        msg: 'Address has already voted in this session',
        who: 'voteProposal'
        });
      let v11551;
      switch (v11454[0]) {
        case 'Against': {
          const v11552 = v11454[1];
          const v11555 = stdlib.add(v11473, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:355:40:decimal', stdlib.UInt_max, '1'));
          const v11556 = [v11472, v11555];
          v11551 = v11556;
          
          break;
          }
        case 'For': {
          const v11558 = v11454[1];
          const v11561 = stdlib.add(v11472, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:354:27:decimal', stdlib.UInt_max, '1'));
          const v11562 = [v11561, v11473];
          v11551 = v11562;
          
          break;
          }
        }
      const v11564 = v11551[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:353:13:array', stdlib.UInt_max, '0')];
      const v11565 = v11551[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:353:13:array', stdlib.UInt_max, '1')];
      const v11567 = stdlib.sub(stdlib.UInt_max, v11565);
      const v11568 = stdlib.lt(v11564, v11567);
      stdlib.assert(v11568, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./dao/contracts/dao-core.rsh:357:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:361:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:361:13:function exp)'],
        msg: 'Voting limit reached (2)',
        who: 'voteProposal'
        });
      const v11571 = stdlib.sub(stdlib.UInt_max, v11564);
      const v11572 = stdlib.lt(v11565, v11571);
      stdlib.assert(v11572, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./dao/contracts/dao-core.rsh:358:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:361:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:361:13:function exp)'],
        msg: 'Voting limit reached (2)',
        who: 'voteProposal'
        });
      const v11575 = null;
      const v11576 = await txn1.getOutput('voteProposal', 'v11575', ctc0, v11575);
      if (v2529) {
        stdlib.protect(ctc0, await interact.out(v10971, v11576), {
          at: './dao/contracts/dao-core.rsh:333:11:application',
          fs: ['at ./dao/contracts/dao-core.rsh:333:11:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:333:11:function exp)', 'at ./dao/contracts/dao-core.rsh:362:12:application call to "k" (defined at: ./dao/contracts/dao-core.rsh:361:13:function exp)', 'at ./dao/contracts/dao-core.rsh:361:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:361:13:function exp)'],
          msg: 'out',
          who: 'voteProposal'
          });
        }
      else {
        }
      
      const v11584 = stdlib.lt(v11468, stdlib.UInt_max);
      let v11585;
      if (v11584) {
        const v11588 = stdlib.add(v11468, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:365:45:decimal', stdlib.UInt_max, '1'));
        const v11589 = [v11588, v3984];
        v11585 = v11589;
        }
      else {
        const v11590 = [v11468, v3984];
        v11585 = v11590;
        }
      await stdlib.mapSet(map0, v4507, v11585);
      const v11597 = stdlib.add(v11564, v11565);
      const v11599 = stdlib.ge(v11597, v3952);
      let v11601;
      if (v3985) {
        const v11603 = stdlib.mod(v3984, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
        const v11605 = stdlib.sub(v3984, v11603);
        const v11607 = stdlib.div(v11605, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
        v11601 = v11607;
        }
      else {
        v11601 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
        }
      let v11608;
      switch (v3955[0]) {
        case 'AllocateFunds': {
          const v11609 = v3955[1];
          const v11610 = v11609[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:76:21:array', stdlib.UInt_max, '0')];
          const v11611 = v11609[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:76:21:array', stdlib.UInt_max, '1')];
          const v11613 = stdlib.lt(v11611, v3880);
          const v11614 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v11610), null);
          let v11615;
          switch (v11614[0]) {
            case 'None': {
              const v11616 = v11614[1];
              v11615 = false;
              
              break;
              }
            case 'Some': {
              const v11617 = v11614[1];
              v11615 = true;
              
              break;
              }
            }
          const v11618 = v11615 ? v11613 : false;
          const v11620 = v3951 ? v11613 : v11618;
          v11608 = v11620;
          
          break;
          }
        case 'ChangeAdmin': {
          const v11621 = v3955[1];
          const v11622 = v11621.admin;
          const v11623 = v11621.fee;
          const v11625 = v11621.quorum;
          const v11627 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v11622), null);
          const v11629 = stdlib.fromSome(v11627, v11466);
          const v11630 = v11629[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:84:13:array', stdlib.UInt_max, '0')];
          let v11633;
          switch (v11627[0]) {
            case 'None': {
              const v11634 = v11627[1];
              v11633 = false;
              
              break;
              }
            case 'Some': {
              const v11635 = v11627[1];
              v11633 = true;
              
              break;
              }
            }
          const v11636 = stdlib.gt(v11630, v11601);
          const v11637 = v11633 ? v11636 : false;
          const v11638 = stdlib.gt(v11625, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:86:34:decimal', stdlib.UInt_max, '0'));
          let v11639;
          if (v11638) {
            const v11642 = stdlib.lt(v11625, v3848);
            v11639 = v11642;
            }
          else {
            v11639 = false;
            }
          const v11643 = stdlib.ge(v11623, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:87:34:decimal', stdlib.UInt_max, '0'));
          const v11644 = stdlib.lt(v11623, stdlib.UInt_max);
          const v11645 = v11643 ? v11644 : false;
          const v11646 = v11637 ? v11639 : false;
          const v11647 = v11646 ? v11645 : false;
          v11608 = v11647;
          
          break;
          }
        case 'EjectMember': {
          const v11648 = v3955[1];
          const v11649 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v11648), null);
          let v11650;
          switch (v11649[0]) {
            case 'None': {
              const v11651 = v11649[1];
              v11650 = false;
              
              break;
              }
            case 'Some': {
              const v11652 = v11649[1];
              v11650 = true;
              
              break;
              }
            }
          const v11654 = stdlib.addressEq(v11648, v3949);
          const v11655 = v11654 ? false : true;
          const v11656 = v11650 ? v11655 : false;
          v11608 = v11656;
          
          break;
          }
        case 'None': {
          const v11657 = v3955[1];
          v11608 = false;
          
          break;
          }
        case 'Stop': {
          const v11658 = v3955[1];
          v11608 = true;
          
          break;
          }
        }
      if (v11599) {
        const v11659 = stdlib.gt(v11564, v11565);
        const v11660 = v11608 ? v11659 : false;
        if (v11660) {
          switch (v3955[0]) {
            case 'AllocateFunds': {
              const v11661 = v3955[1];
              const v11662 = v11661[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:150:32:application', stdlib.UInt_max, '0')];
              const v11663 = v11661[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:150:32:application', stdlib.UInt_max, '1')];
              null;
              const v11670 = stdlib.sub(v3880, v11663);
              const v11671 = stdlib.ge(v11670, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:154:29:application', stdlib.UInt_max, '0'));
              stdlib.assert(v11671, {
                at: './dao/contracts/dao-core.rsh:154:29:application',
                fs: ['at ./dao/contracts/dao-core.rsh:152:28:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:153:44:function exp)', 'at ./dao/contracts/dao-core.rsh:152:28:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:152:28:function exp)', 'at ./dao/contracts/dao-core.rsh:367:28:application call to "doProposal" (defined at: ./dao/contracts/dao-core.rsh:132:51:function exp)', 'at ./dao/contracts/dao-core.rsh:361:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:361:13:function exp)'],
                msg: 'assume >= 0',
                who: 'voteProposal'
                });
              ;
              const v11675 = {
                Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                action: v3872,
                index: v3984
                };
              const v22766 = v3874;
              const v22768 = v11675;
              const v22770 = v11670;
              const v22771 = v3874.admin;
              const v22772 = v3874.fee;
              const v22773 = v3874.openTreasury;
              const v22774 = v3874.quorum;
              const v22775 = v3874.registerSelf;
              const v22776 = v11675.action;
              const v22777 = v11675.index;
              const v22778 = stdlib.ge(v22777, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
              let v22779;
              if (v22778) {
                const v22780 = stdlib.mod(v22777, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
                const v22781 = stdlib.sub(v22777, v22780);
                const v22782 = stdlib.div(v22781, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
                v22779 = v22782;
                }
              else {
                v22779 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
                }
              return;
              
              break;
              }
            case 'ChangeAdmin': {
              const v11762 = v3955[1];
              const v11763 = v11762.admin;
              const v11764 = v11762.registerSelf;
              const v11765 = v11762.fee;
              const v11766 = v11762.quorum;
              const v11767 = v11762.openTreasury;
              null;
              const v11801 = {
                Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                action: v3872,
                index: v3984
                };
              const v11802 = {
                admin: v11763,
                fee: v11765,
                openTreasury: v11767,
                quorum: v11766,
                registerSelf: v11764
                };
              const v22795 = v11802;
              const v22797 = v11801;
              const v22799 = v3880;
              const v22800 = v11802.admin;
              const v22801 = v11802.fee;
              const v22802 = v11802.openTreasury;
              const v22803 = v11802.quorum;
              const v22804 = v11802.registerSelf;
              const v22805 = v11801.action;
              const v22806 = v11801.index;
              const v22807 = stdlib.ge(v22806, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
              let v22808;
              if (v22807) {
                const v22809 = stdlib.mod(v22806, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
                const v22810 = stdlib.sub(v22806, v22809);
                const v22811 = stdlib.div(v22810, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
                v22808 = v22811;
                }
              else {
                v22808 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
                }
              return;
              
              break;
              }
            case 'EjectMember': {
              const v11866 = v3955[1];
              null;
              const v11912 = v11866;
              await stdlib.mapSet(map0, v11866, undefined /* Nothing */);
              null;
              const v11915 = {
                Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                action: v3872,
                index: v3984
                };
              const v22824 = v3874;
              const v22826 = v11915;
              const v22828 = v3880;
              const v22829 = v3874.admin;
              const v22830 = v3874.fee;
              const v22831 = v3874.openTreasury;
              const v22832 = v3874.quorum;
              const v22833 = v3874.registerSelf;
              const v22834 = v11915.action;
              const v22835 = v11915.index;
              const v22836 = stdlib.ge(v22835, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
              let v22837;
              if (v22836) {
                const v22838 = stdlib.mod(v22835, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
                const v22839 = stdlib.sub(v22835, v22838);
                const v22840 = stdlib.div(v22839, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
                v22837 = v22840;
                }
              else {
                v22837 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
                }
              return;
              
              break;
              }
            case 'None': {
              const v11965 = v3955[1];
              null;
              const v12026 = {
                Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                action: v3872,
                index: v3984
                };
              const v22853 = v3874;
              const v22855 = v12026;
              const v22857 = v3880;
              const v22858 = v3874.admin;
              const v22859 = v3874.fee;
              const v22860 = v3874.openTreasury;
              const v22861 = v3874.quorum;
              const v22862 = v3874.registerSelf;
              const v22863 = v12026.action;
              const v22864 = v12026.index;
              const v22865 = stdlib.ge(v22864, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
              let v22866;
              if (v22865) {
                const v22867 = stdlib.mod(v22864, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
                const v22868 = stdlib.sub(v22864, v22867);
                const v22869 = stdlib.div(v22868, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
                v22866 = v22869;
                }
              else {
                v22866 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
                }
              return;
              
              break;
              }
            case 'Stop': {
              const v12064 = v3955[1];
              null;
              const v12138 = undefined /* Remote */;
              const v12139 = await txn1.getOutput('internal', 'v12138', ctc20, v12138);
              const v12141 = v12139[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:168:33:application', stdlib.UInt_max, '0')];
              const v12146 = stdlib.add(v3880, v12141);
              const v12147 = stdlib.le(v12146, stdlib.UInt_max);
              stdlib.assert(v12147, {
                at: './dao/contracts/dao-core.rsh:168:33:application',
                fs: ['at ./dao/contracts/dao-core.rsh:152:28:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:167:20:function exp)', 'at ./dao/contracts/dao-core.rsh:152:28:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:152:28:function exp)', 'at ./dao/contracts/dao-core.rsh:367:28:application call to "doProposal" (defined at: ./dao/contracts/dao-core.rsh:132:51:function exp)', 'at ./dao/contracts/dao-core.rsh:361:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:361:13:function exp)'],
                msg: 'assume <= UInt.max',
                who: 'voteProposal'
                });
              const v12151 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v12141);
              stdlib.assert(v12151, {
                at: './dao/contracts/dao-core.rsh:168:33:application',
                fs: ['at ./dao/contracts/dao-core.rsh:152:28:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:167:20:function exp)', 'at ./dao/contracts/dao-core.rsh:152:28:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:152:28:function exp)', 'at ./dao/contracts/dao-core.rsh:367:28:application call to "doProposal" (defined at: ./dao/contracts/dao-core.rsh:132:51:function exp)', 'at ./dao/contracts/dao-core.rsh:361:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:361:13:function exp)'],
                msg: 'remote bill check',
                who: 'voteProposal'
                });
              const v22899 = v3874.admin;
              const v22905 = stdlib.sub(v12146, v12146);
              const v22906 = stdlib.ge(v22905, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:372:25:application', stdlib.UInt_max, '0'));
              stdlib.assert(v22906, {
                at: './dao/contracts/dao-core.rsh:372:25:application',
                fs: [],
                msg: 'assume >= 0',
                who: 'voteProposal'
                });
              ;
              const v22907 = (stdlib.le(await ctc.getBalance(), v22905) ? stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:373:29:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(), v22905));
              const v22908 = stdlib.add(v22907, v22905);
              const v22909 = stdlib.sub(v22908, v22907);
              const v22910 = stdlib.ge(v22909, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:373:35:application', stdlib.UInt_max, '0'));
              stdlib.assert(v22910, {
                at: './dao/contracts/dao-core.rsh:373:35:application',
                fs: [],
                msg: 'assume >= 0',
                who: 'voteProposal'
                });
              ;
              return;
              
              break;
              }
            }}
        else {
          if (v11659) {
            switch (v3955[0]) {
              case 'AllocateFunds': {
                const v12163 = v3955[1];
                null;
                const v12167 = {
                  Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  action: v3872,
                  index: v3984
                  };
                const v22911 = v3874;
                const v22913 = v12167;
                const v22915 = v3880;
                const v22916 = v3874.admin;
                const v22917 = v3874.fee;
                const v22918 = v3874.openTreasury;
                const v22919 = v3874.quorum;
                const v22920 = v3874.registerSelf;
                const v22921 = v12167.action;
                const v22922 = v12167.index;
                const v22923 = stdlib.ge(v22922, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
                let v22924;
                if (v22923) {
                  const v22925 = stdlib.mod(v22922, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
                  const v22926 = stdlib.sub(v22922, v22925);
                  const v22927 = stdlib.div(v22926, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
                  v22924 = v22927;
                  }
                else {
                  v22924 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
                  }
                return;
                
                break;
                }
              case 'ChangeAdmin': {
                const v12173 = v3955[1];
                null;
                const v12180 = {
                  Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  action: v3872,
                  index: v3984
                  };
                const v22940 = v3874;
                const v22942 = v12180;
                const v22944 = v3880;
                const v22945 = v3874.admin;
                const v22946 = v3874.fee;
                const v22947 = v3874.openTreasury;
                const v22948 = v3874.quorum;
                const v22949 = v3874.registerSelf;
                const v22950 = v12180.action;
                const v22951 = v12180.index;
                const v22952 = stdlib.ge(v22951, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
                let v22953;
                if (v22952) {
                  const v22954 = stdlib.mod(v22951, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
                  const v22955 = stdlib.sub(v22951, v22954);
                  const v22956 = stdlib.div(v22955, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
                  v22953 = v22956;
                  }
                else {
                  v22953 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
                  }
                return;
                
                break;
                }
              case 'EjectMember': {
                const v12186 = v3955[1];
                null;
                const v12188 = {
                  Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  action: v3872,
                  index: v3984
                  };
                const v22969 = v3874;
                const v22971 = v12188;
                const v22973 = v3880;
                const v22974 = v3874.admin;
                const v22975 = v3874.fee;
                const v22976 = v3874.openTreasury;
                const v22977 = v3874.quorum;
                const v22978 = v3874.registerSelf;
                const v22979 = v12188.action;
                const v22980 = v12188.index;
                const v22981 = stdlib.ge(v22980, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
                let v22982;
                if (v22981) {
                  const v22983 = stdlib.mod(v22980, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
                  const v22984 = stdlib.sub(v22980, v22983);
                  const v22985 = stdlib.div(v22984, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
                  v22982 = v22985;
                  }
                else {
                  v22982 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
                  }
                return;
                
                break;
                }
              case 'None': {
                const v12194 = v3955[1];
                null;
                const v12196 = {
                  Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  action: v3872,
                  index: v3984
                  };
                const v22998 = v3874;
                const v23000 = v12196;
                const v23002 = v3880;
                const v23003 = v3874.admin;
                const v23004 = v3874.fee;
                const v23005 = v3874.openTreasury;
                const v23006 = v3874.quorum;
                const v23007 = v3874.registerSelf;
                const v23008 = v12196.action;
                const v23009 = v12196.index;
                const v23010 = stdlib.ge(v23009, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
                let v23011;
                if (v23010) {
                  const v23012 = stdlib.mod(v23009, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
                  const v23013 = stdlib.sub(v23009, v23012);
                  const v23014 = stdlib.div(v23013, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
                  v23011 = v23014;
                  }
                else {
                  v23011 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
                  }
                return;
                
                break;
                }
              case 'Stop': {
                const v12202 = v3955[1];
                null;
                const v12204 = {
                  Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  action: v3872,
                  index: v3984
                  };
                const v23027 = v3874;
                const v23029 = v12204;
                const v23031 = v3880;
                const v23032 = v3874.admin;
                const v23033 = v3874.fee;
                const v23034 = v3874.openTreasury;
                const v23035 = v3874.quorum;
                const v23036 = v3874.registerSelf;
                const v23037 = v12204.action;
                const v23038 = v12204.index;
                const v23039 = stdlib.ge(v23038, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
                let v23040;
                if (v23039) {
                  const v23041 = stdlib.mod(v23038, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
                  const v23042 = stdlib.sub(v23038, v23041);
                  const v23043 = stdlib.div(v23042, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
                  v23040 = v23043;
                  }
                else {
                  v23040 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
                  }
                return;
                
                break;
                }
              }}
          else {
            switch (v3955[0]) {
              case 'AllocateFunds': {
                const v12210 = v3955[1];
                null;
                const v12214 = {
                  Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  action: v3872,
                  index: v3984
                  };
                const v23056 = v3874;
                const v23058 = v12214;
                const v23060 = v3880;
                const v23061 = v3874.admin;
                const v23062 = v3874.fee;
                const v23063 = v3874.openTreasury;
                const v23064 = v3874.quorum;
                const v23065 = v3874.registerSelf;
                const v23066 = v12214.action;
                const v23067 = v12214.index;
                const v23068 = stdlib.ge(v23067, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
                let v23069;
                if (v23068) {
                  const v23070 = stdlib.mod(v23067, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
                  const v23071 = stdlib.sub(v23067, v23070);
                  const v23072 = stdlib.div(v23071, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
                  v23069 = v23072;
                  }
                else {
                  v23069 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
                  }
                return;
                
                break;
                }
              case 'ChangeAdmin': {
                const v12220 = v3955[1];
                null;
                const v12227 = {
                  Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  action: v3872,
                  index: v3984
                  };
                const v23085 = v3874;
                const v23087 = v12227;
                const v23089 = v3880;
                const v23090 = v3874.admin;
                const v23091 = v3874.fee;
                const v23092 = v3874.openTreasury;
                const v23093 = v3874.quorum;
                const v23094 = v3874.registerSelf;
                const v23095 = v12227.action;
                const v23096 = v12227.index;
                const v23097 = stdlib.ge(v23096, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
                let v23098;
                if (v23097) {
                  const v23099 = stdlib.mod(v23096, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
                  const v23100 = stdlib.sub(v23096, v23099);
                  const v23101 = stdlib.div(v23100, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
                  v23098 = v23101;
                  }
                else {
                  v23098 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
                  }
                return;
                
                break;
                }
              case 'EjectMember': {
                const v12233 = v3955[1];
                null;
                const v12235 = {
                  Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  action: v3872,
                  index: v3984
                  };
                const v23114 = v3874;
                const v23116 = v12235;
                const v23118 = v3880;
                const v23119 = v3874.admin;
                const v23120 = v3874.fee;
                const v23121 = v3874.openTreasury;
                const v23122 = v3874.quorum;
                const v23123 = v3874.registerSelf;
                const v23124 = v12235.action;
                const v23125 = v12235.index;
                const v23126 = stdlib.ge(v23125, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
                let v23127;
                if (v23126) {
                  const v23128 = stdlib.mod(v23125, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
                  const v23129 = stdlib.sub(v23125, v23128);
                  const v23130 = stdlib.div(v23129, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
                  v23127 = v23130;
                  }
                else {
                  v23127 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
                  }
                return;
                
                break;
                }
              case 'None': {
                const v12241 = v3955[1];
                null;
                const v12243 = {
                  Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  action: v3872,
                  index: v3984
                  };
                const v23143 = v3874;
                const v23145 = v12243;
                const v23147 = v3880;
                const v23148 = v3874.admin;
                const v23149 = v3874.fee;
                const v23150 = v3874.openTreasury;
                const v23151 = v3874.quorum;
                const v23152 = v3874.registerSelf;
                const v23153 = v12243.action;
                const v23154 = v12243.index;
                const v23155 = stdlib.ge(v23154, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
                let v23156;
                if (v23155) {
                  const v23157 = stdlib.mod(v23154, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
                  const v23158 = stdlib.sub(v23154, v23157);
                  const v23159 = stdlib.div(v23158, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
                  v23156 = v23159;
                  }
                else {
                  v23156 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
                  }
                return;
                
                break;
                }
              case 'Stop': {
                const v12249 = v3955[1];
                null;
                const v12251 = {
                  Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  action: v3872,
                  index: v3984
                  };
                const v23172 = v3874;
                const v23174 = v12251;
                const v23176 = v3880;
                const v23177 = v3874.admin;
                const v23178 = v3874.fee;
                const v23179 = v3874.openTreasury;
                const v23180 = v3874.quorum;
                const v23181 = v3874.registerSelf;
                const v23182 = v12251.action;
                const v23183 = v12251.index;
                const v23184 = stdlib.ge(v23183, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
                let v23185;
                if (v23184) {
                  const v23186 = stdlib.mod(v23183, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
                  const v23187 = stdlib.sub(v23183, v23186);
                  const v23188 = stdlib.div(v23187, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
                  v23185 = v23188;
                  }
                else {
                  v23185 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
                  }
                return;
                
                break;
                }
              }}}}
      else {
        const v12257 = {
          Against: v11565,
          For: v11564,
          action: v3955,
          index: v3984
          };
        const v23201 = v3874;
        const v23203 = v12257;
        const v23205 = v3880;
        const v23206 = v3874.admin;
        const v23207 = v3874.fee;
        const v23208 = v3874.openTreasury;
        const v23209 = v3874.quorum;
        const v23210 = v3874.registerSelf;
        const v23211 = v12257.action;
        const v23212 = v12257.index;
        const v23213 = stdlib.ge(v23212, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
        let v23214;
        if (v23213) {
          const v23215 = stdlib.mod(v23212, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
          const v23216 = stdlib.sub(v23212, v23215);
          const v23217 = stdlib.div(v23216, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
          v23214 = v23217;
          }
        else {
          v23214 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
          }
        return;
        }
      break;
      }
    }
  
  
  };
export async function addMember(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for addMember expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for addMember expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _addMember3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function donate(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for donate expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for donate expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _donate3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function eject(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for eject expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for eject expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _eject3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function joinLeave(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for joinLeave expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for joinLeave expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _joinLeave3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function registerProposal(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for registerProposal expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for registerProposal expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _registerProposal3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function voteProposal(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for voteProposal expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for voteProposal expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _voteProposal3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`addMember(address)byte[0]`, `donate(uint64)byte[0]`, `eject(address)byte[0]`, `joinLeave(byte)byte[0]`, `registerProposal((byte,byte[50]))byte[0]`, `voteProposal((byte,byte[0]))byte[0]`],
    pure: [`Proposal()(byte,byte[50])`, `currentVotes()uint64`, `info()(byte[128],address,address,uint64,byte,uint64,byte)`, `isMember(address)byte`, `myRank(address)uint64`],
    sigs: [`Proposal()(byte,byte[50])`, `addMember(address)byte[0]`, `currentVotes()uint64`, `donate(uint64)byte[0]`, `eject(address)byte[0]`, `info()(byte[128],address,address,uint64,byte,uint64,byte)`, `isMember(address)byte`, `joinLeave(byte)byte[0]`, `myRank(address)uint64`, `registerProposal((byte,byte[50]))byte[0]`, `voteProposal((byte,byte[0]))byte[0]`]
    },
  appApproval: `BiAkAAH///////////8BEAQDCAIKICkRBQYhj6KvlAro3ua5DJmG0PIM+5bDug2dAkvCu92WC/qoxLkME5uQ85gF8OrrwwbxxtHcBqIDM/ACkAOhA5kDmAMy6pWp+AMmDAEAAAEBAQIBAwTjht/SBGiwvLEEQuL4EwQMmUlpBWFwcElEBGZq8OUEfmSYCyI1ADEYQRQVKWRJIls1AUkhBls1AiVbNQgxGSMSQQAKMQAoIQuvZkIT3DYaABdJQQG8IjUEIzUGSSEPDEAA4kkhEAxAAIBJIREMQABlSSESDEAALyESEkQ0ASEFEkQ2GgGIE9pJNf4iVUAABiI1/0IABiM1/0IAADT/FlEHCDUHQhOSIRESRDQBIQUSRChkKmRQK2RQJwRkUEk1AyETIRRYSTX/IQZbNP8iWwgWNQdCE2MhEBJENhoBNf8qNP9QgSuvUEIBQEkhFQxAAC9JIRYMQAAUIRYSRDYaATX/KDT/UCEXr1BCAR4hFRJENhoBNf8rNP9QIRevUEIBCiEPEkQ0ASEFEkQlrzYaAYgTMEk1/1cBEDT/IlVNVwAINQdCEvRJIRgMQACTSSEZDEAAd0khGgxAACMhGhJENAEhBRJEKGQqZFArZFAnBGRQSTUDIRshHFg1B0ISvCEZEkQ0ASEFEkQoZCpkUCtkUCcEZFBJNQNXIIA0A1cAIFA0AyEdIQlYUDQDIR4hBlhQNAMhHyNYUDQDISAhBlhQNAMhISNYUDUHQhJvIRgSRDYaATX/JwQ0/1AhIq9QQgBLSSEjDEAAEiEjEkQ2GgE1/4ABBDT/UEIAMoG2t5mVARJENhoBNf+AAQU0/1AhIq9QQgAYNhoCFzUENhoDNhoBF0khBwxADwUhBxJEIQU0ARJENARJIhJMNAISEUQoZCpkUCtkUCcEZFBJNQNJSkpKSkpKSkpXACA1/1cggDX+gaABWzX9gagBWzX8gbABWzX7V7gzNfpX6zI1+SETIRRYNfiB6AJbNfchHSEJWDX2IR5bNfUhISNYFzX0ISBbNfMhHyNYFzXyIRshHFg18YHVA1s18IHdAyNYFzXvgd4DWzXuSTUFNe2ABHVxMYY07VCwNO0iVUkhBQxACvFJIQQMQAnOSSEMDEAHISEMEkQ07VcBATXUsSKyASENshA0CLIYszT3JA5ENO9BAA808EkhCBgJIQgKNdNCAAMjNdMlr0k10jEAiBE8STXQVwEQNNAiVU1JNdEiW0k10DTTD0Q0+CEGWzXPNPgiWzXONPEiVUkhBwxAAE1JIQUMQAAYSSEEDEAACiEEEkQjNc1CAOVIIjXNQgDeSDTxVwEgNcw0zIgQ4Uk1yiJVQAAGIjXLQgAGIzXLQgAANMs0zDT2ExA1zUIAsEkjDEAAbkg08VcBMkk1zCEOWzXLNMwhCls1yjTMVwAgiBCdSTXJIlVAAAYiNchCAAYjNchCAAA0yiINQQAKNMo0/Aw1x0IAAyI1xzTINNI0yUk1xlcBEDTGIlVNIls07g0QNMcQNMsiDzTLJAwQEDXNQgA8SDTxVwEoSTXMIQlbNPcMNcs0zFcAIIgQM0k1ySJVQAAGIjXKQgAGIzXKQgAANMo0yxA0yzT0TTXNQgAANM1ENM8iDUEACzTPJDTOCQxEQgAANM4iDUEACzTOJDTPCQxEQgAANM80zgg08wxENNEhBls08AxENNRJNcsiVUAADjTPFjTOIwgWUDXMQgAONM8jCBY0zhZQNcxCAAA0zCJbNcs0zCEGWzXKNMskNMoJDEQ0yiQ0ywkMRIAIAAAAAAAALTewKTUHNNAkDEEADjTQIwgWNPAWUDXJQgAJNNAWNPAWUDXJMQAoKjTJUGY070EADzTwSSEIGAkhCAo1yEIAAyM1yDTxIlVJIQcMQABNSSEFDEAAGEkhBAxAAAohBBJEIzXHQgDlSCI1x0IA3kg08VcBIDXGNMaIDxJJNcQiVUAABiI1xUIABiM1xUIAADTFNMY09hMQNcdCALBJIwxAAG5INPFXATJJNcYhDls1xTTGIQpbNcQ0xlcAIIgOzkk1wyJVQAAGIjXCQgAGIzXCQgAANMQiDUEACjTENPwMNcFCAAMiNcE0wjTSNMNJNcBXARA0wCJVTSJbNMgNEDTBEDTFIg80xSQMEBA1x0IAPEg08VcBKEk1xiEJWzT3DDXFNMZXACCIDmRJNcMiVUAABiI1xEIABiM1xEIAADTENMUQNMU09E01x0IAADTLNMoINPMPQQO5NMs0yg01xjTHNMYQQQG9NPEiVUkhBwxAAQtJIQUMQADGSSEEDEAAlSEEEkQnBTTwFlA08VCwJwk0/RZQAzXEMgp4NcMyCmA0wwkWNcKxIrIBIQ2yEDT9shgnCrIaNPsWshqzMgpgNMMJNMIXCRa3AD5XBABQNcWACAAAAAAAAC9qNMVQsDTFSTXEIls1wzT3NMMISTXCJA5EIjTDEkQ0/zT+NP00/DT7NPo0+SIlrzT6UDTwFlAyBjTCQgvKSCcFNPAWUDTxULA0/zT+NP00/DT7NPo0+SMlrzT6UDTwFlAyBjT3QgugSDTxVwEgNcUnBTTwFlA08VCwNMUoIQuvZicINMVQsDT/NP40/TT8NPs0+jT5IyWvNPpQNPAWUDIGNPdCC2JJIwxAAExINPFXATI1xScFNPAWUDTxULA0/zT+NP00/DT7NPo0xVcAIDTFVyEIUDTFVzEBUDTFVykIUDTFVyABUCMlrzT6UDTwFlAyBjT3QgsQSDTxVwEoSTXFIQlbNcQnBTTwFlA08VCwNPc0xAlJNcMiD0SxIrIBNMSyCCOyEDTFVwAgsgezNP80/jT9NPw0+zT6NPkjJa80+lA08BZQMgY0w0IKuzTGQQD0NPEiVUkhBwxAAI9JIQUMQABeSSEEDEAALSEEEkQnBjTwFlA08VCwNP80/jT9NPw0+zT6NPkjJa80+lA08BZQMgY090IKcEgnBjTwFlA08VCwNP80/jT9NPw0+zT6NPkjJa80+lA08BZQMgY090IKRkgnBjTwFlA08VCwNP80/jT9NPw0+zT6NPkjJa80+lA08BZQMgY090IKHEkjDEAAKkgnBjTwFlA08VCwNP80/jT9NPw0+zT6NPkjJa80+lA08BZQMgY090IJ7EgnBjTwFlA08VCwNP80/jT9NPw0+zT6NPkjJa80+lA08BZQMgY090IJwjTxIlVJIQcMQACPSSEFDEAAXkkhBAxAAC0hBBJEJwc08BZQNPFQsDT/NP40/TT8NPs0+jT5IyWvNPpQNPAWUDIGNPdCCXxIJwc08BZQNPFQsDT/NP40/TT8NPs0+jT5IyWvNPpQNPAWUDIGNPdCCVJIJwc08BZQNPFQsDT/NP40/TT8NPs0+jT5IyWvNPpQNPAWUDIGNPdCCShJIwxAACpIJwc08BZQNPFQsDT/NP40/TT8NPs0+jT5IyWvNPpQNPAWUDIGNPdCCPhIJwc08BZQNPFQsDT/NP40/TT8NPs0+jT5IyWvNPpQNPAWUDIGNPdCCM40/zT+NP00/DT7NPo0+SM0yhY0yxZQNPFQNPAWUDIGNPdCCKpINO1XATM11DT3JA5ENNQ10zTvQQAPNPBJIQgYCSEICjXSQgADIzXSJa9JNdExAIgKJ0k1z1cBEDTPIlVNIltJNdA00g9ENNA07g9ENPEiVUkhBwxAAE1JIQUMQAAYSSEEDEAACiEEEkQjNc9CAOVIIjXPQgDeSDTxVwEgNc40zogJ1kk1zCJVQAAGIjXNQgAGIzXNQgAANM00zjT2ExA1z0IAsEkjDEAAbkg08VcBMkk1ziEOWzXNNM4hCls1zDTOVwAgiAmSSTXLIlVAAAYiNcpCAAYjNcpCAAA0zCINQQAKNMw0/Aw1yUIAAyI1yTTKNNE0y0k1yFcBEDTIIlVNIls07g0QNMkQNM0iDzTNJAwQEDXPQgA8SDTxVwEoSTXOIQlbNPcMNc00zlcAIIgJKEk1yyJVQAAGIjXMQgAGIzXMQgAANMw0zRA0zTT0TTXPQgAANM8URDTwJCMJDEQ00yJVSSEHDEAATUkhBQxAABhJIQQMQAAKIQQSRCM1zkIA5UgiNc5CAN5INNNXASA1zTTNiAjDSTXLIlVAAAYiNcxCAAYjNcxCAAA0zDTNNPYTEDXOQgCwSSMMQABuSDTTVwEySTXNIQ5bNcw0zSEKWzXLNM1XACCICH9JNcoiVUAABiI1yUIABiM1yUIAADTLIg1BAAo0yzT8DDXIQgADIjXINMk00TTKSTXHVwEQNMciVU0iWzTuDRA0yBA0zCIPNMwkDBAQNc5CADxINNNXAShJNc0hCVs09ww1zDTNVwAgiAgVSTXKIlVAAAYiNctCAAYjNctCAAA0yzTMEDTMNPRNNc5CAAA0zkSACAAAAAAAACeIsCk1B4AElpSnrTTTUDEAULA0/zT+NP00/DT7NPo0+SMlrzTTUDTwIwgWUDIGNPdCBgRINO1XAQE11DTUF0k100EAHzEAiAedSTXRIlVAAAYiNdJCAAYjNdJCAAA00kRCAB808kQxAIgHe0k10SJVQAAGIzXSQgAGIjXSQgAANNJENPUiNNNNSTXSJDT3CQxENPc00ghJNdEkDkQ00ogHVDTTQQAfMQCIBztJNc8iVUAABiI10EIABiM10EIAADTQREIAHzTyRDEAiAcZSTXPIlVAAAYjNdBCAAYiNdBCAAA00EQ00iQ00QkMRIAIAAAAAAAAIeawKTUHNNNBACUxACghC69mJwgxAFCwNP80/jT9NPw0+zT6NPkjNPgyBjTRQgUTMQAoKjTuFiEGr1BQZicLMQBQsDT/NP40/TT8NPs0+jT5IzT4MgY00UIE6EkjDEACvUkhBwxAAdFINO1XASA11DT3JA5ENNQ10zTTiAZ0STXSIlVAAAYiNdFCAAYjNdFCAAAxADTTE0Q00iJVQAAGIjXQQgAGIzXQQgAANNBENNE00zT2ExBEMQA09hJBADOACAAAAAAAABylsCk1BzTTKCELr2YnCDTTULA0/zT+NP00/DT7NPo0+SM0+DIGNPdCBFE08CQjCQ5ENPEiVUkhBwxAAE1JIQUMQAAYSSEEDEAACiEEEkQjNc9CAOVIIjXPQgDeSDTxVwEgNc40zogFwkk1zCJVQAAGIjXNQgAGIzXNQgAANM00zjT2ExA1z0IAsEkjDEAAbkg08VcBMkk1ziEOWzXNNM4hCls1zDTOVwAgiAV+STXLIlVAAAYiNcpCAAYjNcpCAAA0zCINQQAKNMw0/Aw1yUIAAyI1yTTKJa80y0k1yFcBEDTIIlVNIls07g0QNMkQNM0iDzTNJAwQEDXPQgA8SDTxVwEoSTXOIQlbNPcMNc00zlcAIIgFFEk1yyJVQAAGIjXMQgAGIzXMQgAANMw0zRA0zTT0TTXPQgAANM9EgAgAAAAAAAAchbApNQc0/zT+NP00/DT7NPo0+SMlrys001CBEq9QUDTwIwgWUDIGNPdCAwpINO1XAQg11DTUFzXTJDTTCTXSNPc00gxENPc00whJNdEkDkQ004gEnzTRNNIMRDEAiASFSTXQIlVAAAYiNc9CAAYjNc9CAAA0z0EAciWvNNBJNc1XARA0zSJVTUk1ziJbNc00ziEGWzXMNM0kIwkMQQAONM0jCBY0zBZQNctCABA07jTNSTTuD00WNMwWUDXLMQAoKjTLUGaACAAAAAAAABcYsCk1BzT/NP40/TT8NPs0+jT5IzT4MgY00UICS4AIAAAAAAAAFyCwKTUHNP80/jT9NPw0+zT6NPkjNPgyBjTRQgIlSDTtVwEgNdQ01DXTNNOIA8M10iWvNNJJNdFXARA00SJVTSJbNO4PRDTSIlVAAAYjNdFCAAYiNdFCAAA00UQ09zT1CEk10CQORDT1iAOVNNIiVUAABiM1z0IABiI1z0IAADTPRDTTKCo07hYhBq9QUGYnCzTTULCACAAAAAAAABHosCk1BzT/NP40/TT8NPs0+jT5IzT4MgY00EIBiCISRIHAmgyIAzyxIrIBIQ2yECKyGIAGBjEAMgkSsh6AAQayH7O0PTUIIjQBEkQ0BEkiEkw0AhIRREk1BUlKSlcAgDX/V4ABFzX+gYEBWzX9V4kBFzX8gYoBWzX7gZIBWzX6gASIl9jVNP9QNP4WUQcIUDT9FlA0/BZRBwhQNPsWUDT6FlCwJIGAlOvcAw1ENP0jD0QkIQgKNfk0/TT5DEQxGDX4MQAogBEB//////////8AAAAAAAAAAGYnCTT6FlADNfYyCng19TIKYDT1CRY19LEisgEhDbIQNPqyGCcKsho0+BayGrMyCmA09Qk09BcJFrcAPlcEAFA194AIAAAAAAAADw8091CwNPdJNfYiW0k19SQORCI09RJEgDMDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA19DEANP80+jT5NPg09DEANPsWUDT8FlEHCFA0/RZQNP4WUQcIUCMlrzT0UCEGr1AyBjT1QgAANf81/jX9Nfw1+zX6Nfk1+DX3NfY19TT8QQDENPtXACA19DT7IQlbNfM0+1coARc18jT7IQpbNfE0+1cxARc18DT9VxAzNe80/YFDW0k17iEID0k17UEADzTuSSEIGAkhCAo17EIAAyM17DT1NPZQNPcWUDT4FlA0+RZQNPpQNPtQNP1QNP8WUDT0UDTzFlA08hZRBwhQNPEWUDTwFlEHCFA071A07hZQNO0WUQcIUDTsFlAoSwFXAH9nKksBV39/ZytLAVf+f2cnBEsBgf0CgWlYZ0ghBTUBMgY1AkIAdzT7VwAgNfQ0/0kJSTXzIg9EsSKyATT/sggjshA09LIHszIKYDIKeAk08wlJNfI08wg08gkiD0SxIrIBNPKyCCOyEDT0sgezQgAAMRkhDBJEsSKyASENshA0CLIYIQyyGbOxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWNAgWUFBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCEMMTUSRCIxNhJEIzE3EkQiNQEiNQIiNQhC/6dJMRhhQAAFSCELr4koYok0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: {
    api_voteProposal: 1
    },
  extraPages: 2,
  mapDataKeys: 1,
  mapDataSize: 17,
  stateKeys: 4,
  stateSize: 486,
  unsupported: [],
  version: 10,
  warnings: [`Step 0 calls a remote object at /app/dao/contracts/dao-core.rsh:109:23:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 2 calls a remote object at /app/dao/contracts/dao-core.rsh:168:33:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`]
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
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem3",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T5",
                "name": "v3834",
                "type": "tuple"
              },
              {
                "internalType": "bool",
                "name": "v3835",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "v3836",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "v3837",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "v3838",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v3839",
                "type": "address"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T15",
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
    "name": "MemberExited",
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
    "name": "MemberJoined",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T4",
            "name": "which",
            "type": "uint8"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "elem0",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "elem1",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "_AllocateFunds",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "admin",
                "type": "address"
              },
              {
                "internalType": "bool",
                "name": "registerSelf",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "fee",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "quorum",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "openTreasury",
                "type": "bool"
              }
            ],
            "internalType": "struct T3",
            "name": "_ChangeAdmin",
            "type": "tuple"
          },
          {
            "internalType": "address payable",
            "name": "_EjectMember",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Stop",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "v0",
        "type": "tuple"
      },
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v1",
        "type": "address"
      }
    ],
    "name": "MotionCreated",
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
        "components": [
          {
            "internalType": "enum _enum_T4",
            "name": "which",
            "type": "uint8"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "elem0",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "elem1",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "_AllocateFunds",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "admin",
                "type": "address"
              },
              {
                "internalType": "bool",
                "name": "registerSelf",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "fee",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "quorum",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "openTreasury",
                "type": "bool"
              }
            ],
            "internalType": "struct T3",
            "name": "_ChangeAdmin",
            "type": "tuple"
          },
          {
            "internalType": "address payable",
            "name": "_EjectMember",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Stop",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "v1",
        "type": "tuple"
      }
    ],
    "name": "MotionEnacted",
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
        "components": [
          {
            "internalType": "enum _enum_T4",
            "name": "which",
            "type": "uint8"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "elem0",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "elem1",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "_AllocateFunds",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "admin",
                "type": "address"
              },
              {
                "internalType": "bool",
                "name": "registerSelf",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "fee",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "quorum",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "openTreasury",
                "type": "bool"
              }
            ],
            "internalType": "struct T3",
            "name": "_ChangeAdmin",
            "type": "tuple"
          },
          {
            "internalType": "address payable",
            "name": "_EjectMember",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Stop",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "v1",
        "type": "tuple"
      }
    ],
    "name": "MotionFailed",
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
        "components": [
          {
            "internalType": "enum _enum_T4",
            "name": "which",
            "type": "uint8"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "elem0",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "elem1",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "_AllocateFunds",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "admin",
                "type": "address"
              },
              {
                "internalType": "bool",
                "name": "registerSelf",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "fee",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "quorum",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "openTreasury",
                "type": "bool"
              }
            ],
            "internalType": "struct T3",
            "name": "_ChangeAdmin",
            "type": "tuple"
          },
          {
            "internalType": "address payable",
            "name": "_EjectMember",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Stop",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "v1",
        "type": "tuple"
      }
    ],
    "name": "MotionRejected",
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
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem3",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T5",
                "name": "v3834",
                "type": "tuple"
              },
              {
                "internalType": "bool",
                "name": "v3835",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "v3836",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "v3837",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "v3838",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v3839",
                "type": "address"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
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
                    "internalType": "enum _enum_T22",
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
                    "internalType": "struct T16",
                    "name": "_addMember0_352",
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
                    "internalType": "struct T17",
                    "name": "_donate0_352",
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
                    "internalType": "struct T16",
                    "name": "_eject0_352",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "bool",
                        "name": "elem0",
                        "type": "bool"
                      }
                    ],
                    "internalType": "struct T18",
                    "name": "_joinLeave0_352",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "components": [
                          {
                            "internalType": "enum _enum_T4",
                            "name": "which",
                            "type": "uint8"
                          },
                          {
                            "components": [
                              {
                                "internalType": "address payable",
                                "name": "elem0",
                                "type": "address"
                              },
                              {
                                "internalType": "uint256",
                                "name": "elem1",
                                "type": "uint256"
                              }
                            ],
                            "internalType": "struct T2",
                            "name": "_AllocateFunds",
                            "type": "tuple"
                          },
                          {
                            "components": [
                              {
                                "internalType": "address payable",
                                "name": "admin",
                                "type": "address"
                              },
                              {
                                "internalType": "bool",
                                "name": "registerSelf",
                                "type": "bool"
                              },
                              {
                                "internalType": "uint256",
                                "name": "fee",
                                "type": "uint256"
                              },
                              {
                                "internalType": "uint256",
                                "name": "quorum",
                                "type": "uint256"
                              },
                              {
                                "internalType": "bool",
                                "name": "openTreasury",
                                "type": "bool"
                              }
                            ],
                            "internalType": "struct T3",
                            "name": "_ChangeAdmin",
                            "type": "tuple"
                          },
                          {
                            "internalType": "address payable",
                            "name": "_EjectMember",
                            "type": "address"
                          },
                          {
                            "internalType": "bool",
                            "name": "_None",
                            "type": "bool"
                          },
                          {
                            "internalType": "bool",
                            "name": "_Stop",
                            "type": "bool"
                          }
                        ],
                        "internalType": "struct T4",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T19",
                    "name": "_registerProposal0_352",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "components": [
                          {
                            "internalType": "enum _enum_T20",
                            "name": "which",
                            "type": "uint8"
                          },
                          {
                            "internalType": "bool",
                            "name": "_Against",
                            "type": "bool"
                          },
                          {
                            "internalType": "bool",
                            "name": "_For",
                            "type": "bool"
                          }
                        ],
                        "internalType": "struct T20",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T21",
                    "name": "_voteProposal0_352",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T22",
                "name": "v4508",
                "type": "tuple"
              }
            ],
            "internalType": "struct T23",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T24",
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
    "name": "_reach_oe_v10120",
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
    "name": "_reach_oe_v11575",
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
        "internalType": "struct T10",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v12138",
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
        "internalType": "struct T10",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v3855",
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
    "name": "_reach_oe_v4584",
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
    "name": "_reach_oe_v5912",
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
    "name": "_reach_oe_v5920",
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
    "name": "_reach_oe_v7301",
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
    "name": "_reach_oe_v7333",
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
    "name": "_reach_oe_v8678",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "Proposal",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T4",
            "name": "which",
            "type": "uint8"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "elem0",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "elem1",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "_AllocateFunds",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "admin",
                "type": "address"
              },
              {
                "internalType": "bool",
                "name": "registerSelf",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "fee",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "quorum",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "openTreasury",
                "type": "bool"
              }
            ],
            "internalType": "struct T3",
            "name": "_ChangeAdmin",
            "type": "tuple"
          },
          {
            "internalType": "address payable",
            "name": "_EjectMember",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Stop",
            "type": "bool"
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
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T1",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
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
            "internalType": "struct T0",
            "name": "_Some",
            "type": "tuple"
          }
        ],
        "internalType": "struct T1",
        "name": "res",
        "type": "tuple"
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
                    "internalType": "enum _enum_T22",
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
                    "internalType": "struct T16",
                    "name": "_addMember0_352",
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
                    "internalType": "struct T17",
                    "name": "_donate0_352",
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
                    "internalType": "struct T16",
                    "name": "_eject0_352",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "bool",
                        "name": "elem0",
                        "type": "bool"
                      }
                    ],
                    "internalType": "struct T18",
                    "name": "_joinLeave0_352",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "components": [
                          {
                            "internalType": "enum _enum_T4",
                            "name": "which",
                            "type": "uint8"
                          },
                          {
                            "components": [
                              {
                                "internalType": "address payable",
                                "name": "elem0",
                                "type": "address"
                              },
                              {
                                "internalType": "uint256",
                                "name": "elem1",
                                "type": "uint256"
                              }
                            ],
                            "internalType": "struct T2",
                            "name": "_AllocateFunds",
                            "type": "tuple"
                          },
                          {
                            "components": [
                              {
                                "internalType": "address payable",
                                "name": "admin",
                                "type": "address"
                              },
                              {
                                "internalType": "bool",
                                "name": "registerSelf",
                                "type": "bool"
                              },
                              {
                                "internalType": "uint256",
                                "name": "fee",
                                "type": "uint256"
                              },
                              {
                                "internalType": "uint256",
                                "name": "quorum",
                                "type": "uint256"
                              },
                              {
                                "internalType": "bool",
                                "name": "openTreasury",
                                "type": "bool"
                              }
                            ],
                            "internalType": "struct T3",
                            "name": "_ChangeAdmin",
                            "type": "tuple"
                          },
                          {
                            "internalType": "address payable",
                            "name": "_EjectMember",
                            "type": "address"
                          },
                          {
                            "internalType": "bool",
                            "name": "_None",
                            "type": "bool"
                          },
                          {
                            "internalType": "bool",
                            "name": "_Stop",
                            "type": "bool"
                          }
                        ],
                        "internalType": "struct T4",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T19",
                    "name": "_registerProposal0_352",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "components": [
                          {
                            "internalType": "enum _enum_T20",
                            "name": "which",
                            "type": "uint8"
                          },
                          {
                            "internalType": "bool",
                            "name": "_Against",
                            "type": "bool"
                          },
                          {
                            "internalType": "bool",
                            "name": "_For",
                            "type": "bool"
                          }
                        ],
                        "internalType": "struct T20",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T21",
                    "name": "_voteProposal0_352",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T22",
                "name": "v4508",
                "type": "tuple"
              }
            ],
            "internalType": "struct T23",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T24",
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
    "name": "addMember",
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
    "name": "currentVotes",
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
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "donate",
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
    "name": "eject",
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
            "components": [
              {
                "internalType": "bytes32",
                "name": "elem0",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem1",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem2",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem3",
                "type": "bytes32"
              }
            ],
            "internalType": "struct T5",
            "name": "name",
            "type": "tuple"
          },
          {
            "internalType": "address payable",
            "name": "founder",
            "type": "address"
          },
          {
            "internalType": "address payable",
            "name": "admin",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "fee",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "registerSelf",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "quorum",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "openTreasury",
            "type": "bool"
          }
        ],
        "internalType": "struct T9",
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
        "internalType": "address payable",
        "name": "v23233",
        "type": "address"
      }
    ],
    "name": "isMember",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bool",
        "name": "_a0",
        "type": "bool"
      }
    ],
    "name": "joinLeave",
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
        "name": "v23235",
        "type": "address"
      }
    ],
    "name": "myRank",
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
            "internalType": "enum _enum_T4",
            "name": "which",
            "type": "uint8"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "elem0",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "elem1",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "_AllocateFunds",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "admin",
                "type": "address"
              },
              {
                "internalType": "bool",
                "name": "registerSelf",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "fee",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "quorum",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "openTreasury",
                "type": "bool"
              }
            ],
            "internalType": "struct T3",
            "name": "_ChangeAdmin",
            "type": "tuple"
          },
          {
            "internalType": "address payable",
            "name": "_EjectMember",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Stop",
            "type": "bool"
          }
        ],
        "internalType": "struct T4",
        "name": "_a0",
        "type": "tuple"
      }
    ],
    "name": "registerProposal",
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
        "components": [
          {
            "internalType": "enum _enum_T20",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_Against",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_For",
            "type": "bool"
          }
        ],
        "internalType": "struct T20",
        "name": "_a0",
        "type": "tuple"
      }
    ],
    "name": "voteProposal",
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
  Bytecode: `0x60806040526040516200756238038062007562833981016040819052620000269162000bdd565b600080554360035562000038620006db565b7f2459370484f6045637fb7fb87fc70f3038e753af1c6caeead146f0debfc1b58e33836040516200006b92919062000cc0565b60405180910390a1620000813415600c620003a7565b6200008f6001600d620003a7565b620000ae60018360200151604001511015600e620003a760201b60201c565b620000bd600a60001962000d6a565b808252602083015160400151620000d79111600f620003a7565b30602082810191909152604080830180516000199052805160009084018190523381526004845291909120805460ff191660019081178255915180519282019290925591015160029091015547610100820152602080820151604080516001600160a01b03928316602480830191909152825180830390910181526044909101825280840180516001600160e01b0316632c44543160e11b1790529285015160a0015190516000928392169082906200019290869062000d81565b60006040518083038185875af1925050503d8060008114620001d1576040519150601f19603f3d011682016040523d82523d6000602084013e620001d6565b606091505b509092509050620001ea82826010620003d7565b506200020247856101000151620003d260201b60201c565b60608501805191909152516080850181905260408051825181526020928301511515928101929092527faa7f0449bf3b272659a2f5e04e898ba8520371a6a3c35f4b1fc295110f6945689450019150620002599050565b60405180910390a16200026f60016011620003a7565b6080810151516200028390156012620003a7565b60a0810180513390526020838101805160809081015184518401528151606090810151855190151560409182015283510151855190910152905190910151915191151591015260c08101516003908190525060c0810180516000608090910181905260e083018051829052805160200182905291518251604001529051606001526200030e620007bf565b8051339052602080840180515183518301525160a09081015183516001600160a01b0391821660409182015285518551606090810191909152868501518651931660809384015260c08701518651850152928601518486018051919091528051600195019490945260e08601518451909101528251439201919091528084015151915101526200039e816200041d565b50505062001080565b81620003ce5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b900390565b60608315620003e857508162000416565b825115620003f95782518084602001fd5b60405163100960cb60e01b815260048101839052602401620003c5565b9392505050565b6200044b60405180608001604052806000151581526020016000815260200160008152602001600081525090565b81602001516020015115620005e35760208201516040015160600151600a1180158252620004ab5760208201516040015160600151600a906200049490620003d2838262000dbf565b620004a0919062000d6a565b6020820152620004b3565b600160208201525b620004bd620007e8565b8251516001600160a01b03908116825283516020908101518184015284516040908101518316818501528551606090810151818601528651608090810151851681870152875160a0908101519087015283880180515160c0880152805184015160e08801528051820151610100880152805151519095166101208701528451518401516101408701528451518301511515610160870152845151820151610180870152845151015115156101a086015283518201518201516101c08601529251810151909201516101e084015283511515610200840152838101516102208401526003600055436001559051620005b79183910162000ec1565b60405160208183030381529060405260029080519060200190620005dd929190620008d5565b50505050565b60006040820152620005f860016013620003a7565b60208201518051516080909101516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156200063d573d6000803e3d6000fd5b50604081015147908110620006685762000662818360400151620003d260201b60201c565b6200066b565b60005b6060830152506200067f60016014620003a7565b6020820151515160608201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015620006c2573d6000803e3d6000fd5b5060008080556001819055620003ce9060029062000964565b6040518061012001604052806000815260200160006001600160a01b031681526020016200071c604051806040016040528060008152602001600081525090565b8152602001620007416040518060400160405280600081526020016000151581525090565b8152602001620007666040518060400160405280600081526020016000151581525090565b81526040805160a081018252600080825260208281018290529282018190526060820181905260808201529101908152602001620007a3620009a6565b8152602001620007b262000a29565b8152602001600081525090565b6040518060400160405280620007d462000a4c565b8152602001620007e362000aa5565b905290565b604080516102408101825260008082528251608081018452818152602081810183905293810182905260608101919091529091820190815260006020820181905260408201819052606082015260800162000842620009a6565b81526040805160a0810182526000808252602082810182905292820181905260608201819052608082015291019081526020016200087f62000a29565b815260006020820181905260408201819052606082018190526080820181905260a0820181905260c082015260e001620008b8620009a6565b815260200160008152602001600015158152602001600081525090565b828054620008e39062001043565b90600052602060002090601f01602090048101928262000907576000855562000952565b82601f106200092257805160ff191683800117855562000952565b8280016001018555821562000952579182015b828111156200095257825182559160200191906001019062000935565b506200096092915062000aff565b5090565b508054620009729062001043565b6000825580601f1062000983575050565b601f016020900490600052602060002090810190620009a3919062000aff565b50565b6040805160c081019091528060008152602001620009e0604051806040016040528060006001600160a01b03168152602001600081525090565b81526040805160a0810182526000808252602082810182905292820181905260608201819052608082015291019081526000602082018190526040820181905260609091015290565b60405180608001604052806000815260200160008152602001620007b2620009a6565b6040805160c081018252600080825282516080810184528181526020818101839052938101829052606081019190915290918201908152600060208201819052604082018190526060820152608001620007e3620009a6565b6040805161014081018252600060a0820181815260c0830182905260e08301829052610100830182905261012083018290528252602082015290810162000aeb62000a29565b815260200160008152602001600081525090565b5b8082111562000960576000815560010162000b00565b604080519081016001600160401b038111828210171562000b4757634e487b7160e01b600052604160045260246000fd5b60405290565b60405160c081016001600160401b038111828210171562000b4757634e487b7160e01b600052604160045260246000fd5b604051608081016001600160401b038111828210171562000b4757634e487b7160e01b600052604160045260246000fd5b8051801515811462000bc057600080fd5b919050565b80516001600160a01b038116811462000bc057600080fd5b600081830361014081121562000bf257600080fd5b62000bfc62000b16565b83518152601f19820191506101208083121562000c1857600080fd5b62000c2262000b4d565b608084121562000c3157600080fd5b62000c3b62000b7e565b93506020860151845260408601516020850152606086015160408501526080860151606085015283815262000c7360a0870162000baf565b602082015260c0860151604082015262000c9060e0870162000baf565b6060820152610100860151608082015262000cad82870162000bc5565b60a0820152602083015250949350505050565b60006101608201905060018060a01b03808516835283516020840152602084015162000d11604085018251805182526020810151602083015260408101516040830152606081015160608301525050565b6020810151151560c0850152604081015160e085015260608101511515610100850152608081015161012085015260a00151166101409092019190915292915050565b634e487b7160e01b600052601260045260246000fd5b60008262000d7c5762000d7c62000d54565b500490565b6000825160005b8181101562000da4576020818601810151858301520162000d88565b8181111562000db4576000828501525b509190910192915050565b60008262000dd15762000dd162000d54565b500690565b80516005811062000df757634e487b7160e01b600052602160045260246000fd5b825260208181015180516001600160a01b031682850152015160408084019190915281015162000e5f606084018280516001600160a01b0316825260208082015115159083015260408082015190830152606080820151908301526080908101511515910152565b5060608101516001600160a01b03166101008301526080810151151561012083015260a00151151561014090910152565b8051825260208101516020830152604081015162000eb2604084018262000dd6565b50606001516101a09190910152565b81516001600160a01b031681526107408101602083015162000f076020840182805182526020810151602083015260408101516040830152606081015160608301525050565b5060408301516001600160a01b03811660a084015250606083015160c083015260808301516001600160a01b03811660e08401525060a083015161010062000f528185018362000dd6565b60c085015180516001600160a01b03166102608601526020810151610280860152604081015115156102a086015260608101516102c08601526080015115156102e085015260e0850151915062000fae61030085018362000e90565b8401516104c0840152506101208301516001600160a01b03166104e083015261014083015161050083015261016083015115156105208301526101808301516105408301526101a083015115156105608301526101c08301516200101761058084018262000dd6565b506101e08301516106e08301526102008301511515610700830152610220909201516107209091015290565b600181811c908216806200105857607f821691505b602082108114156200107a57634e487b7160e01b600052602260045260246000fd5b50919050565b6164d280620010906000396000f3fe6080604052600436106100eb5760003560e01c8063901d13e211610084578063c4d7841a11610056578063c4d7841a146102c3578063ca6d56dc146102e5578063dff5c8aa146102f8578063f14faf6f1461030b57005b8063901d13e214610258578063994ba4d21461026b578063a230c52414610280578063ab53f2c6146102a057005b8063473f1773116100bd578063473f1773146101fd5780635cc4f6491461021057806383230757146102305780638a4557711461024557005b80631a777ba8146100f45780631e93b0f11461011c578063370158ea1461013b5780633bc5b7bf146101d057005b366100f257005b005b61010761010236600461587b565b61031e565b60405190151581526020015b60405180910390f35b34801561012857600080fd5b506003545b604051908152602001610113565b34801561014757600080fd5b50610150610359565b60408051825180518252602080820151818401528184015183850152606091820151828401528401516001600160a01b03908116608080850191909152938501511660a0808401919091529084015160c08084019190915292840151151560e0830152830151610100820152910151151561012082015261014001610113565b3480156101dc57600080fd5b506101f06101eb3660046158ac565b610494565b60405161011391906158ef565b61010761020b36600461592c565b6104ab565b34801561021c57600080fd5b5061012d61022b3660046158ac565b6104e8565b34801561023c57600080fd5b5060015461012d565b6100f2610253366004615954565b610616565b6101076102663660046158ac565b61063a565b34801561027757600080fd5b5061012d61067e565b34801561028c57600080fd5b5061010761029b3660046158ac565b610749565b3480156102ac57600080fd5b506102b5610870565b604051610113929190615999565b3480156102cf57600080fd5b506102d861090d565b6040516101139190615a7e565b6101076102f33660046158ac565b6109d7565b610107610306366004615bba565b610a0f565b610107610319366004615bd7565b610a4a565b6000610328614a13565b6020810180515160059052515160c00151839052610344614a32565b61034e8282610a85565b60a001519392505050565b610361614a67565b600360005414156104855760006002805461037b90615bf0565b80601f01602080910402602001604051908101604052809291908181526020018280546103a790615bf0565b80156103f45780601f106103c9576101008083540402835291602001916103f4565b820191906000526020600020905b8154815290600101906020018083116103d757829003601f168201915b505050505080602001905181019061040c9190615e35565b9050610416614ac2565b602080830151825152825182516001600160a01b03918216920191909152610120830151825191166040909101526101408201518151606001526101a08201518151901515608090910152610180820151815160a0015261016090910151815190151560c09091015251919050565b61049160006009614647565b90565b61049c614ad5565b6104a58261466d565b92915050565b60006104b5614a13565b602081018051516003905251516080015183151590526104d3614a32565b6104dd8282610a85565b606001519392505050565b6000600360005414156106055760006002805461050490615bf0565b80601f016020809104026020016040519081016040528092919081815260200182805461053090615bf0565b801561057d5780601f106105525761010080835404028352916020019161057d565b820191906000526020600020905b81548152906001019060200180831161056057829003601f168201915b50505050508060200190518101906105959190615e35565b90506105b7604080516060810182526000602082018181529282015290815290565b805160009081905281516020015260016105d08561466d565b5160018111156105e2576105e26158c9565b146105ee5780516105fc565b6105f78461466d565b604001515b51949350505050565b6106116000600b614647565b919050565b61061e614a32565b6106366106303684900384018461603c565b82610a85565b5050565b6000610644614a13565b60208101805151600290525151606001516001600160a01b0384169052610669614a32565b6106738282610a85565b604001519392505050565b60006003600054141561073d5760006002805461069a90615bf0565b80601f01602080910402602001604051908101604052809291908181526020018280546106c690615bf0565b80156107135780601f106106e857610100808354040283529160200191610713565b820191906000526020600020905b8154815290600101906020018083116106f657829003601f168201915b505050505080602001905181019061072b9190615e35565b60e00151602081015190510192915050565b61049160006008614647565b6000600360005414156108645760006002805461076590615bf0565b80601f016020809104026020016040519081016040528092919081815260200182805461079190615bf0565b80156107de5780601f106107b3576101008083540402835291602001916107de565b820191906000526020600020905b8154815290600101906020018083116107c157829003601f168201915b50505050508060200190518101906107f69190615e35565b60408051602081019091526000815290915060006108138561466d565b516001811115610825576108256158c9565b1415610834576000815261085c565b600161083f8561466d565b516001811115610851576108516158c9565b141561085c57600181525b519392505050565b6106116000600a614647565b60006060600054600280805461088590615bf0565b80601f01602080910402602001604051908101604052809291908181526020018280546108b190615bf0565b80156108fe5780601f106108d3576101008083540402835291602001916108fe565b820191906000526020600020905b8154815290600101906020018083116108e157829003601f168201915b50505050509050915091509091565b610915614b0e565b600360005414156109cb5760006002805461092f90615bf0565b80601f016020809104026020016040519081016040528092919081815260200182805461095b90615bf0565b80156109a85780601f1061097d576101008083540402835291602001916109a8565b820191906000526020600020905b81548152906001019060200180831161098b57829003601f168201915b50505050508060200190518101906109c09190615e35565b6101c0015192915050565b61049160006007614647565b60006109e1614a13565b602081810180515160009052515101516001600160a01b0384169052610a05614a32565b61085c8282610a85565b6000610a19614a13565b6020810180515160049052515160a00151839052610a35614a32565b610a3f8282610a85565b608001519392505050565b6000610a54614a13565b6020810180515160019052515160400151839052610a70614a32565b610a7a8282610a85565b602001519392505050565b610a956003600054146044614647565b8151610ab0901580610aa957508251600154145b6045614647565b600080805560028054610ac290615bf0565b80601f0160208091040260200160405190810160405280929190818152602001828054610aee90615bf0565b8015610b3b5780601f10610b1057610100808354040283529160200191610b3b565b820191906000526020600020905b815481529060010190602001808311610b1e57829003601f168201915b5050505050806020019051810190610b539190615e35565b9050610b5d614b63565b7f35b2ac41a02c0ce05b6e2f0c2dc3bab826a4b4a195d0603a918923288b9f190b3385604051610b8e92919061614c565b60405180910390a16000602085015151516005811115610bb057610bb06158c9565b1415610e8e5760208085015151015180825251610bcc9061466d565b6020828101918252604083018051600090819052905190910152610220830151905151610c2a919060019081811115610c0757610c076158c9565b14610c16578260400151610c20565b8260200151604001515b5110156015614647565b60006020820151516001811115610c4357610c436158c9565b1415610c555760016060820152610c7c565b60016020820151516001811115610c6e57610c6e6158c9565b1415610c7c57600060608201525b610c8b81606001516016614647565b610100820151610140830151016080820152610ca960016017614647565b610cbb82610140015134146018614647565b60006020820151516001811115610cd457610cd46158c9565b1415610ce657600160a0820152610d0d565b60016020820151516001811115610cff57610cff6158c9565b1415610d0d57600060a08201525b610d1c8160a001516019614647565b61022082015160c082018051919091528051600060209182018190528351516001600160a01b039081168252600483526040808320805460ff1916600190811790915594518651518316845292819020835195810195909555918301516002909401939093558351519051921682527f0abf3b3f643594d958297062a019458e27d7766629590ac621aa1000fa1298ab910160405180910390a1604051600081527f8976e3e91676b34f8229a1d272fc5e882573e653f5b8be4fdef949d07b312a039060200160405180910390a160008352610df66152d2565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416908201526060808701518551820152608080880151865195169481019490945260a08088015186519091015260c08701518386018051919091528051600194019390935260e087015183519092019190915281514391015283820151905190910152610e8881614741565b50614641565b6001602085015151516005811115610ea857610ea86158c9565b14156111a2576020840151516040015160e082018190525119610100808301829052830151610ed99111601a614647565b61010082015160e08201515101610120820152610ef86001601b614647565b60e081015151610f0b903414601c614647565b610f2281610100015182610120015110601d614647565b610f2b3361466d565b6101408201819052516000906001811115610f4857610f486158c9565b1415610f5b576000610160820152610f84565b6001610140820151516001811115610f7557610f756158c9565b1415610f845760016101608201525b8061016001511561117157610180810180516000908190529051602001526001610140820151516001811115610fbc57610fbc6158c9565b14610fcc57806101800151610fd7565b806101400151604001515b6101a0820181905251600119111561101c576101a0810151516001016101e082018051919091526101a0820151602090810151825190910152516101c0820152611067565b6102208201516101a082015151101561103a57816102200151611042565b6101a0810151515b61020082018051919091526101a0820151602090810151825190910152516101c08201525b336000908152600460209081526040808320805460ff1916600190811782556101c0860151805191830191909155830151600290910155519182527fa5674e6d60ee2197cf7602777d8c42a56b82d29a8fb270046e32bc4520b6bf9391015b60405180910390a1600060208401526110dd6152d2565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416908201526060808701518551820152608080880151865195169481019490945260a08088015186519091015260c08701518386018051919091528051600194019390935260e0870151835190920191909152815143910152610120840151905190910152610e8881614741565b604051600081527fe439a2d9ee8aba63ad6d0b6f5172a579f7c29436a118ed5ed31bd6be589890ae906020016110c6565b60026020850151515160058111156111bc576111bc6158c9565b141561197057602084015151606001516102208201526111de6001601e614647565b6111ea3415601f614647565b610220810151516111fa9061466d565b6102408201819052516000906001811115611217576112176158c9565b141561122a576000610260820152611253565b6001610240820151516001811115611244576112446158c9565b14156112535760016102608201525b6102208101515161127e906001600160a01b03163314611274576001611277565b60005b6020614647565b6000610240820151516001811115611298576112986158c9565b14156112ab5760006102808201526112d4565b60016102408201515160018111156112c5576112c56158c9565b14156112d45760016102808201525b6112e48161028001516021614647565b6113308161026001516112f8576000611329565b8261012001516001600160a01b0316826102200151600001516001600160a01b031614611326576001611329565b60005b6022614647565b8161012001516001600160a01b0316336001600160a01b0316141561149357604051600081527f5b71d480ccb91c15d2b3efb40b752e23730d9ce136ad29c88a6adffe56aa686d9060200160405180910390a16000604084810182905261022083018051516001600160a01b03908116845260046020908152838520805461ffff1916815560018101869055600201949094559051519151911681527f81df7148ed3a9aa51bafe04f44371e89b96f47294267fbf6ab28b7aa8c87b386910160405180910390a16113ff6152d2565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416908201526060808701518551820152608080880151865195169481019490945260a08088015186519091015260c08701518386018051919091528051600194019390935260e0870151835190920191909152815143910152610100850151905190910152610e8881614741565b6114a8600119836101e0015111156023614647565b60006101c08301515160048111156114c2576114c26158c9565b1415611590576101c08201516020908101516102c08301819052610100840151910151106102e082015260006102c0820151516114fe9061466d565b516001811115611510576115106158c9565b1415611523576000610300820152611556565b60016102c0820151516115359061466d565b516001811115611547576115476158c9565b14156115565760016103008201525b81610160015161157c57806103000151611571576000611583565b806102e00151611583565b806102e001515b15156102a0820152611831565b60016101c08301515160048111156115aa576115aa6158c9565b14156116f4576101c0820151604001516103208201819052516115cc9061466d565b6103408201526103608101805160009081905290516020018190526103408201515160018111156115ff576115ff6158c9565b141561161257600061038082015261163b565b600161034082015151600181111561162c5761162c6158c9565b141561163b5760016103808201525b61032081015160600151156116665760608083015161032083015190910151106103a082015261166f565b60006103a08201525b8061038001516116805760006116be565b61022082015160016103408301515160018111156116a0576116a06158c9565b146116b0578161036001516116bb565b816103400151604001515b51115b6116c95760006116d0565b806103a001515b6116db576000611583565b61032081015160400151600019116102a0820152611831565b60026101c083015151600481111561170e5761170e6158c9565b14156117db576101c0820151606001516001600160a01b03166103c0820152600061173d826103c0015161466d565b51600181111561174f5761174f6158c9565b14156117625760006103e0820152611793565b6001611772826103c0015161466d565b516001811115611784576117846158c9565b14156117935760016103e08201525b806103e001516117a4576000611583565b8161012001516001600160a01b0316816103c001516001600160a01b0316146117ce576001611583565b60006102a0820152611831565b60036101c08301515160048111156117f5576117f56158c9565b14156118085760006102a0820152611831565b60046101c0830151516004811115611822576118226158c9565b14156118315760016102a08201525b611841816102a001516024614647565b604051600081527ff818eb462a42ad91850677eea395e08aa8834c7447e8c099bdef947387abbac59060200160405180910390a1600060408401526104008101516002908190525061022081015151610400820180516001600160a01b039092166060928301526104208301805160009081905281516020015290518151604001526101e0840151905160019091019101526118db6152d2565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416908201526060808701518551820152608080880151865195169481019490945260a08088015186519091015260c087015183860180519190915280516001940193909352610420860151835190920191909152815143910152610100850151905190910152610e8881614741565b600360208501515151600581111561198a5761198a6158c9565b1415611dc9576020840151516080015161044082018190525115611a195760006119b33361466d565b5160018111156119c5576119c56158c9565b14156119d8576000610460820152611a04565b60016119e33361466d565b5160018111156119f5576119f56158c9565b1415611a045760016104608201525b611a148161046001516025614647565b611a95565b611a29826101a001516026614647565b6000611a343361466d565b516001811115611a4657611a466158c9565b1415611a59576001610480820152611a85565b6001611a643361466d565b516001811115611a7657611a766158c9565b1415611a855760006104808201525b611a958161048001516027614647565b61044081015151611aab57816101400151611aae565b60005b6104a0820152610100820151611acd9019826104a00151106028614647565b6101008201516104a0820151016104c0820152611aec60016029614647565b611afe816104a001513414602a614647565b6104408101515115611b7b576000611b153361466d565b516001811115611b2757611b276158c9565b1415611b3a5760006104e0820152611b66565b6001611b453361466d565b516001811115611b5757611b576158c9565b1415611b665760016104e08201525b611b76816104e00151602b614647565b611bf7565b611b8b826101a00151602c614647565b6000611b963361466d565b516001811115611ba857611ba86158c9565b1415611bbb576001610500820152611be7565b6001611bc63361466d565b516001811115611bd857611bd86158c9565b1415611be75760006105008201525b611bf7816105000151602d614647565b6104c0810151611c109019826104a0015110602e614647565b604051600081527f50f0bdbd7f6817b51954d451c4fad2759b6ed40ee2435310321b703583a1cf019060200160405180910390a1600060608401526104408101515115611d4d57336000818152600460209081526040808320805461ffff19168155600181018490556002019290925590519182527f81df7148ed3a9aa51bafe04f44371e89b96f47294267fbf6ab28b7aa8c87b38691015b60405180910390a1611cb96152d2565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416908201526060808701518551820152608080880151865195169481019490945260a08088015186519091015260c08701518386018051919091528051600194019390935260e08701518351909201919091528151439101526104c0840151905190910152610e8881614741565b61022082015161052082018051919091528051600060209182018190523380825260048352604091829020805460ff191660019081178255945180519582019590955593830151600290940193909355519182527f0abf3b3f643594d958297062a019458e27d7766629590ac621aa1000fa1298ab9101611ca9565b6004602085015151516005811115611de357611de36158c9565b14156127815760208401515160a00151610540820152611e056001602f614647565b611e1134156030614647565b81610200015115611e4d576101e0820151600a90611e3890611e338382616211565b900390565b611e429190616225565b610560820152611e56565b60016105608201525b61058081018051600090819052905160200152610560810151611eb8906001611e7e3361466d565b516001811115611e9057611e906158c9565b14611ea057826105800151611eae565b611ea93361466d565b604001515b5110156031614647565b610220820151611f07906001611ecd3361466d565b516001811115611edf57611edf6158c9565b14611eef57826105800151611efd565b611ef83361466d565b604001515b5110156032614647565b60006101c0830151516004811115611f2157611f216158c9565b1415611fef576101c08201516020908101516105c08301819052610100840151910151106105e082015260006105c082015151611f5d9061466d565b516001811115611f6f57611f6f6158c9565b1415611f82576000610600820152611fb5565b60016105c082015151611f949061466d565b516001811115611fa657611fa66158c9565b1415611fb55760016106008201525b816101600151611fdb57806106000151611fd0576000611fe2565b806105e00151611fe2565b806105e001515b15156105a082015261227a565b60016101c0830151516004811115612009576120096158c9565b141561213d576101c08201516040015161062082018190525161202b9061466d565b6106408201819052516000906001811115612048576120486158c9565b141561205b576000610660820152612084565b6001610640820151516001811115612075576120756158c9565b14156120845760016106608201525b61062081015160600151156120af5760608083015161062083015190910151106106808201526120b8565b60006106808201525b8061066001516120c9576000612107565b61022082015160016106408301515160018111156120e9576120e96158c9565b146120f957816105800151612104565b816106400151604001515b51115b612112576000612119565b8061068001515b612124576000611fe2565b61062081015160400151600019116105a082015261227a565b60026101c0830151516004811115612157576121576158c9565b1415612224576101c0820151606001516001600160a01b03166106a08201526000612186826106a0015161466d565b516001811115612198576121986158c9565b14156121ab5760006106c08201526121dc565b60016121bb826106a0015161466d565b5160018111156121cd576121cd6158c9565b14156121dc5760016106c08201525b806106c001516121ed576000611fe2565b8161012001516001600160a01b0316816106a001516001600160a01b031614612217576001611fe2565b60006105a082015261227a565b60036101c083015151600481111561223e5761223e6158c9565b14156122515760006105a082015261227a565b60046101c083015151600481111561226b5761226b6158c9565b141561227a5760016105a08201525b612298816105a0015161228e576001612291565b60005b6033614647565b6122ac600119836101e00151106034614647565b6000610540820151515160048111156122c7576122c76158c9565b141561239657610540810151516020908101516107008301819052610100840151910151106107208201526000610700820151516123049061466d565b516001811115612316576123166158c9565b141561232957600061074082015261235c565b60016107008201515161233b9061466d565b51600181111561234d5761234d6158c9565b141561235c5760016107408201525b81610160015161238257806107400151612377576000612389565b806107200151612389565b8061072001515b15156106e0820152612627565b6001610540820151515160048111156123b1576123b16158c9565b14156124e65761054081015151604001516107608201819052516123d49061466d565b61078082018190525160009060018111156123f1576123f16158c9565b14156124045760006107a082015261242d565b600161078082015151600181111561241e5761241e6158c9565b141561242d5760016107a08201525b61076081015160600151156124585760608083015161076083015190910151106107c0820152612461565b60006107c08201525b806107a001516124725760006124b0565b6102208201516001610780830151516001811115612492576124926158c9565b146124a2578161058001516124ad565b816107800151604001515b51115b6124bb5760006124c2565b806107c001515b6124cd576000612389565b61076081015160400151600019116106e0820152612627565b600261054082015151516004811115612501576125016158c9565b14156125cf5761054081015151606001516001600160a01b03166107e08201526000612531826107e0015161466d565b516001811115612543576125436158c9565b1415612556576000610800820152612587565b6001612566826107e0015161466d565b516001811115612578576125786158c9565b14156125875760016108008201525b806108000151612598576000612389565b8161012001516001600160a01b0316816107e001516001600160a01b0316146125c2576001612389565b60006106e0820152612627565b6003610540820151515160048111156125ea576125ea6158c9565b14156125fd5760006106e0820152612627565b600461054082015151516004811115612618576126186158c9565b14156126275760016106e08201525b612637816106e001516035614647565b604051600081527f8c9b8c5b4d5e4d83e16c07a2ccfe0685fdbb2e345536a3f7eedb028b80813f889060200160405180910390a160006080840152610540810151516040517f18f2698e4794214ca6e5e526501521f9e9e882fe9c8490e38a1a71c7bad7a10c916126a9913390616239565b60405180910390a161082081018051600090819052815160200152610540820151519051604001526101e0820151600101610820820151606001526126ec6152d2565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416908201526060808701518551820152608080880151865195169481019490945260a08088015186519091015260c087015183860180519190915280516001940193909352610820860151835190920191909152815143910152610100850151905190910152610e8881614741565b600560208501515151600581111561279b5761279b6158c9565b14156146415760208401515160c001516108408201526127bd60016036614647565b6127c934156037614647565b81610200015115612800576101e0820151600a906127eb90611e338382616211565b6127f59190616225565b610860820152612809565b60016108608201525b6108808101805160009081905290516020015260016128273361466d565b516001811115612839576128396158c9565b1461284957806108800151612857565b6128523361466d565b604001515b6108a0820181905261086082015190516128749111156038614647565b60006101c083015151600481111561288e5761288e6158c9565b141561295c576101c08201516020908101516108e083018190526101008401519101511061090082015260006108e0820151516128ca9061466d565b5160018111156128dc576128dc6158c9565b14156128ef576000610920820152612922565b60016108e0820151516129019061466d565b516001811115612913576129136158c9565b14156129225760016109208201525b8161016001516129485780610920015161293d57600061294f565b80610900015161294f565b8061090001515b15156108c0820152612be7565b60016101c0830151516004811115612976576129766158c9565b1415612aaa576101c0820151604001516109408201819052516129989061466d565b61096082018190525160009060018111156129b5576129b56158c9565b14156129c85760006109808201526129f1565b60016109608201515160018111156129e2576129e26158c9565b14156129f15760016109808201525b6109408101516060015115612a1c5760608083015161094083015190910151106109a0820152612a25565b60006109a08201525b806109800151612a36576000612a74565b6102208201516001610960830151516001811115612a5657612a566158c9565b14612a6657816108800151612a71565b816109600151604001515b51115b612a7f576000612a86565b806109a001515b612a9157600061294f565b61094081015160400151600019116108c0820152612be7565b60026101c0830151516004811115612ac457612ac46158c9565b1415612b91576101c0820151606001516001600160a01b03166109c08201526000612af3826109c0015161466d565b516001811115612b0557612b056158c9565b1415612b185760006109e0820152612b49565b6001612b28826109c0015161466d565b516001811115612b3a57612b3a6158c9565b1415612b495760016109e08201525b806109e00151612b5a57600061294f565b8161012001516001600160a01b0316816109c001516001600160a01b031614612b8457600161294f565b60006108c0820152612be7565b60036101c0830151516004811115612bab57612bab6158c9565b1415612bbe5760006108c0820152612be7565b60046101c0830151516004811115612bd857612bd86158c9565b1415612be75760016108c08201525b612bf7816108c001516039614647565b60e08201516020015115612c215760e082015151612c2190198360e001516020015110603a614647565b60e08201515115612c455760e082015160208101519051612c45911911603b614647565b61018082015160e083015160208101519051612c6592910110603c614647565b612c80826101e00151826108a001516020015110603d614647565b600061084082015151516001811115612c9b57612c9b6158c9565b1415612cd15760e08201805160200151610a20830151525151600101610a20820180516020019190915251610a00820152612d1d565b600161084082015151516001811115612cec57612cec6158c9565b1415612d1d5760e082015160200151600101610a40820180519190915260e08301515181516020015251610a008201525b610a0081015160208101519051612d37911911603e614647565b610a0081015151612d55901982610a0001516020015110603f614647565b604051600081527f2cfe501089d3e5ce128ec5043e6cfdbf5b53b81d39e0a91e00a480a217f2bbc09060200160405180910390a1600060a08401526108a0810151516000191115612dcd576108a081015151600101610a8082018051919091526101e083015181516020015251610a60820152612df3565b6108a081015151610aa082018051919091526101e083015181516020015251610a608201525b336000908152600460209081526040909120805460ff191660019081178255610a608401518051918301919091559091015160029091015561020082015115612e62576101e0820151600a90612e4d90611e338382616211565b612e579190616225565b610ac0820152612e6b565b6001610ac08201525b60006101c0830151516004811115612e8557612e856158c9565b1415612f53576101c0820151602090810151610b00830181905261010084015191015110610b208201526000610b0082015151612ec19061466d565b516001811115612ed357612ed36158c9565b1415612ee6576000610b40820152612f19565b6001610b0082015151612ef89061466d565b516001811115612f0a57612f0a6158c9565b1415612f19576001610b408201525b816101600151612f3f5780610b400151612f34576000612f46565b80610b200151612f46565b80610b2001515b1515610ae08201526131de565b60016101c0830151516004811115612f6d57612f6d6158c9565b14156130a1576101c082015160400151610b60820181905251612f8f9061466d565b610b808201819052516000906001811115612fac57612fac6158c9565b1415612fbf576000610ba0820152612fe8565b6001610b80820151516001811115612fd957612fd96158c9565b1415612fe8576001610ba08201525b610b60810151606001511561301357606080830151610b608301519091015110610bc082015261301c565b6000610bc08201525b80610ba0015161302d57600061306b565b610ac08101516001610b8083015151600181111561304d5761304d6158c9565b1461305d57816108800151613068565b81610b800151604001515b51115b61307657600061307d565b80610bc001515b613088576000612f46565b610b608101516040015160001911610ae08201526131de565b60026101c08301515160048111156130bb576130bb6158c9565b1415613188576101c0820151606001516001600160a01b0316610be082015260006130ea82610be0015161466d565b5160018111156130fc576130fc6158c9565b141561310f576000610c00820152613140565b600161311f82610be0015161466d565b516001811115613131576131316158c9565b1415613140576001610c008201525b80610c000151613151576000612f46565b8161012001516001600160a01b031681610be001516001600160a01b03161461317b576001612f46565b6000610ae08201526131de565b60036101c08301515160048111156131a2576131a26158c9565b14156131b5576000610ae08201526131de565b60046101c08301515160048111156131cf576131cf6158c9565b14156131de576001610ae08201525b610180820151610a008201518051602090910151011061456b57610a008101516020810151905111610c20820152610ae081015161321d576000613224565b80610c2001515b15613a705760006101c0830151516004811115613243576132436158c9565b14156133b8576101c08201805160200151610c408301526101e0830151905160405160008051602061645d83398151915292613280929091616261565b60405180910390a1610100820151610c40820151602001519003610c608201526132ac60016040614647565b610c4081015180516020909101516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156132f0573d6000803e3d6000fd5b50610c808101805160009081905281516020015260a08301518151604001526101e08301519051606001526133236152d2565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416908201526060808701518551820152608080880151865195169481019490945260a08088015186519091015260c087015183860180519190915280516001940193909352610c80860151835190920191909152815143910152610c60840151905190910152610e8881614741565b60016101c08301515160048111156133d2576133d26158c9565b1415613544576101c082018051604090810151610ca08401526101e08401519151905160008051602061645d83398151915292613410929091616261565b60405180910390a1610cc081018051600090819052815160209081019190915260a084015182516040908101919091526101e08501519251606090810193909352610ca08401805151610ce0860180516001600160a01b0390921690915281518301518151850152815160809081015182519015159401939093528151850151815190950194909452519091015191519115159101526134ae6152d2565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416908201526060808701518551820152608080880151865195169481019490945260a080880151865190910152610ce086015183860180519190915280516001940193909352610cc0860151835190920191909152815143910152610100850151905190910152610e8881614741565b60026101c083015151600481111561355e5761355e6158c9565b14156136e0576101c082018051606001516001600160a01b0316610d008301526101e0830151905160405160008051602061645d833981519152926135a4929091616261565b60405180910390a1610d00810180516001600160a01b039081166000908152600460209081526040808320805461ffff19168155600181018490556002019290925592519051911681527f81df7148ed3a9aa51bafe04f44371e89b96f47294267fbf6ab28b7aa8c87b386910160405180910390a1610d208101805160009081905281516020015260a08301518151604001526101e083015190516060015261364b6152d2565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416908201526060808701518551820152608080880151865195169481019490945260a08088015186519091015260c087015183860180519190915280516001940193909352610d20860151835190920191909152815143910152610100850151905190910152610e8881614741565b60036101c08301515160048111156136fa576136fa6158c9565b14156137f85760008051602061645d833981519152826101e00151836101c00151604051613729929190616261565b60405180910390a1610d408101805160009081905281516020015260a08301518151604001526101e08301519051606001526137636152d2565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416908201526060808701518551820152608080880151865195169481019490945260a08088015186519091015260c087015183860180519190915280516001940193909352610d40860151835190920191909152815143910152610100850151905190910152610e8881614741565b60046101c0830151516004811115613812576138126158c9565b1415613a6b5760008051602061645d833981519152826101e00151836101c00151604051613841929190616261565b60405180910390a147610f408201526080820151604080516001600160a01b0392831660248083019190915282518083039091018152604490910182526020810180516001600160e01b0316632c44543160e11b1790528185015191519092600092839291169082906138b5908690616276565b60006040518083038185875af1925050503d80600081146138f2576040519150601f19603f3d011682016040523d82523d6000602084013e6138f7565b606091505b5091509150613908828260416149d1565b50610f408401514703610d60850180519190915251610d80850181905260408051825181526020928301511515928101929092527fff57ae8f8e1983cd004d19869e3aba8a0b97d3decdd96cd726527b0e24912f3094500191506139699050565b60405180910390a1610100820151610d808201515101610da082015261399160016042614647565b610d80810151516139a490156043614647565b610dc08101805160009081905281516020015260a08301518151604001526101e08301519051606001526139d66152d2565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416908201526060808701518551820152608080880151865195169481019490945260a08088015186519091015260c087015183860180519190915280516000940193909352610dc0860151835190920191909152815143910152610da0840151905190910152610e8881614741565b614641565b80610c20015115613ff35760006101c0830151516004811115613a9557613a956158c9565b1415613b935760008051602061647d833981519152826101e00151836101c00151604051613ac4929190616261565b60405180910390a1610de08101805160009081905281516020015260a08301518151604001526101e0830151905160600152613afe6152d2565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416908201526060808701518551820152608080880151865195169481019490945260a08088015186519091015260c087015183860180519190915280516001940193909352610de0860151835190920191909152815143910152610100850151905190910152610e8881614741565b60016101c0830151516004811115613bad57613bad6158c9565b1415613cab5760008051602061647d833981519152826101e00151836101c00151604051613bdc929190616261565b60405180910390a1610e008101805160009081905281516020015260a08301518151604001526101e0830151905160600152613c166152d2565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416908201526060808701518551820152608080880151865195169481019490945260a08088015186519091015260c087015183860180519190915280516001940193909352610e00860151835190920191909152815143910152610100850151905190910152610e8881614741565b60026101c0830151516004811115613cc557613cc56158c9565b1415613dc35760008051602061647d833981519152826101e00151836101c00151604051613cf4929190616261565b60405180910390a1610e208101805160009081905281516020015260a08301518151604001526101e0830151905160600152613d2e6152d2565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416908201526060808701518551820152608080880151865195169481019490945260a08088015186519091015260c087015183860180519190915280516001940193909352610e20860151835190920191909152815143910152610100850151905190910152610e8881614741565b60036101c0830151516004811115613ddd57613ddd6158c9565b1415613edb5760008051602061647d833981519152826101e00151836101c00151604051613e0c929190616261565b60405180910390a1610e408101805160009081905281516020015260a08301518151604001526101e0830151905160600152613e466152d2565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416908201526060808701518551820152608080880151865195169481019490945260a08088015186519091015260c087015183860180519190915280516001940193909352610e40860151835190920191909152815143910152610100850151905190910152610e8881614741565b60046101c0830151516004811115613ef557613ef56158c9565b1415613a6b5760008051602061647d833981519152826101e00151836101c00151604051613f24929190616261565b60405180910390a1610e608101805160009081905281516020015260a08301518151604001526101e0830151905160600152613f5e6152d2565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416908201526060808701518551820152608080880151865195169481019490945260a08088015186519091015260c087015183860180519190915280516001940193909352610e60860151835190920191909152815143910152610100850151905190910152610e8881614741565b60006101c083015151600481111561400d5761400d6158c9565b141561410b5760008051602061643d833981519152826101e00151836101c0015160405161403c929190616261565b60405180910390a1610e808101805160009081905281516020015260a08301518151604001526101e08301519051606001526140766152d2565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416908201526060808701518551820152608080880151865195169481019490945260a08088015186519091015260c087015183860180519190915280516001940193909352610e80860151835190920191909152815143910152610100850151905190910152610e8881614741565b60016101c0830151516004811115614125576141256158c9565b14156142235760008051602061643d833981519152826101e00151836101c00151604051614154929190616261565b60405180910390a1610ea08101805160009081905281516020015260a08301518151604001526101e083015190516060015261418e6152d2565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416908201526060808701518551820152608080880151865195169481019490945260a08088015186519091015260c087015183860180519190915280516001940193909352610ea0860151835190920191909152815143910152610100850151905190910152610e8881614741565b60026101c083015151600481111561423d5761423d6158c9565b141561433b5760008051602061643d833981519152826101e00151836101c0015160405161426c929190616261565b60405180910390a1610ec08101805160009081905281516020015260a08301518151604001526101e08301519051606001526142a66152d2565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416908201526060808701518551820152608080880151865195169481019490945260a08088015186519091015260c087015183860180519190915280516001940193909352610ec0860151835190920191909152815143910152610100850151905190910152610e8881614741565b60036101c0830151516004811115614355576143556158c9565b14156144535760008051602061643d833981519152826101e00151836101c00151604051614384929190616261565b60405180910390a1610ee08101805160009081905281516020015260a08301518151604001526101e08301519051606001526143be6152d2565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416908201526060808701518551820152608080880151865195169481019490945260a08088015186519091015260c087015183860180519190915280516001940193909352610ee0860151835190920191909152815143910152610100850151905190910152610e8881614741565b60046101c083015151600481111561446d5761446d6158c9565b1415613a6b5760008051602061643d833981519152826101e00151836101c0015160405161449c929190616261565b60405180910390a1610f008101805160009081905281516020015260a08301518151604001526101e08301519051606001526144d66152d2565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416908201526060808701518551820152608080880151865195169481019490945260a08088015186519091015260c087015183860180519190915280516001940193909352610f00860151835190920191909152815143910152610100850151905190910152610e8881614741565b610a0081018051602090810151610f2084018051919091529151518251909101526101c08301518151604001526101e08301519051606001526145ac6152d2565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416908201526060808701518551820152608080880151865195169481019490945260a08088015186519091015260c087015183860180519190915280516001940193909352610f20860151835190920191909152815143910152610100850151905190910152610e8881614741565b50505050565b816106365760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b614675614ad5565b60016001600160a01b03831660009081526004602052604090205460ff1660018111156146a4576146a46158c9565b1415614732576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff1660018111156146e5576146e56158c9565b60018111156146f6576146f66158c9565b81528154610100900460ff1615156020808301919091526040805180820182526001850154815260029094015491840191909152015292915050565b60008082526020820152919050565b61476e60405180608001604052806000151581526020016000815260200160008152602001600081525090565b816020015160200151156148f25760208201516040015160600151600a11801582526147c65760208201516040015160600151600a906147b290611e338382616211565b6147bc9190616225565b60208201526147ce565b600160208201525b6147d66152f2565b8251516001600160a01b03908116825283516020908101518184015284516040908101518316818501528551606090810151818601528651608090810151851681870152875160a0908101519087015283880180515160c0880152805184015160e08801528051820151610100880152805151519095166101208701528451518401516101408701528451518301511515610160870152845151820151610180870152845151015115156101a086015283518201518201516101c08601529251810151909201516101e0840152835115156102008401528381015161022084015260036000554360015590516148ce918391016162c1565b604051602081830303815290604052600290805190602001906146419291906153e9565b6000604082015261490560016013614647565b60208201518051516080909101516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015614949573d6000803e3d6000fd5b506040810151479081106149635760408201518103614966565b60005b60608301525061497860016014614647565b6020820151515160608201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156149ba573d6000803e3d6000fd5b50600080805560018190556106369060029061546d565b606083156149e0575081614a0c565b8251156149f05782518084602001fd5b60405163100960cb60e01b815260048101839052602401614664565b9392505050565b604051806040016040528060008152602001614a2d6154aa565b905290565b6040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a081019190915290565b6040805161016081018252600060e08201818152610100830182905261012083018290526101408301829052825260208201819052918101829052606081018290526080810182905260a0810182905260c081019190915290565b6040518060200160405280614a2d614a67565b60408051606081019091528060008152602001600015158152602001614a2d604051806040016040528060008152602001600081525090565b6040805160c081019091528060008152602001614b3b604080518082019091526000808252602082015290565b8152602001614b486154bd565b81526000602082018190526040820181905260609091015290565b60408051610f8081019091526000610f608201908152815260208101614b87614ad5565b8152602001614ba9604051806040016040528060008152602001600081525090565b815260200160001515815260200160008152602001600015158152602001614be4604051806040016040528060008152602001600081525090565b8152602001614bff6040518060200160405280600081525090565b81526020016000815260200160008152602001614c1a614ad5565b8152602001600015158152602001614c45604051806040016040528060008152602001600081525090565b8152602001614c67604051806040016040528060008152602001600081525090565b8152602001614c89604051806040016040528060008152602001600081525090565b8152602001614cab604051806040016040528060008152602001600081525090565b8152602001614ccd604051806040016040528060008152602001600081525090565b815260408051602080820183526000825283015201614cea614ad5565b8152600060208201819052604082018190526060820152608001614d1e604080518082019091526000808252602082015290565b81526000602082018190526040820152606001614d396154bd565b8152602001614d46614ad5565b8152602001614d68604051806040016040528060008152602001600081525090565b81526000602082018190526040820181905260608201819052608082015260a001614d91614b0e565b8152602001614d9e6154eb565b81526040805160208082018352600080835281850192909252828401829052606084018290526080840182905260a0840182905260c0840182905260e08401829052825180840190935281835282015261010082015261012001614e0061550c565b815260200160008152602001614e29604051806040016040528060008152602001600081525090565b815260006020820152604001614e4f604080518082019091526000808252602082015290565b81526000602082018190526040820152606001614e6a6154bd565b8152602001614e77614ad5565b815260006020820181905260408201819052606082018190526080820181905260a082015260c001614eb9604080518082019091526000808252602082015290565b81526000602082018190526040820152606001614ed46154bd565b8152602001614ee1614ad5565b81526000602082018190526040820181905260608201819052608082015260a001614f0a6154eb565b8152602001614f3660408051608081018252600060208201818152928201819052606082015290815290565b815260200160008152602001614f5f604051806040016040528060008152602001600081525090565b8152602001614f81604051806040016040528060008152602001600081525090565b815260006020820152604001614fa7604080518082019091526000808252602082015290565b81526000602082018190526040820152606001614fc26154bd565b8152602001614fcf614ad5565b815260200160001515815260200160001515815260200160006001600160a01b0316815260200160001515815260200161501c604051806040016040528060008152602001600081525090565b815260200161503e604051806040016040528060008152602001600081525090565b8152602001615060604051806040016040528060008152602001600081525090565b8152602001615082604051806040016040528060008152602001600081525090565b81526020016150a4604051806040016040528060008152602001600081525090565b81526020016150c6604051806040016040528060008152602001600081525090565b815260006020820181905260408201526060016150f3604080518082019091526000808252602082015290565b8152600060208201819052604082015260600161510e6154bd565b815260200161511b614ad5565b815260006020820181905260408201819052606082018190526080820181905260a082015260c00161515d604080518082019091526000808252602082015290565b8152602001600081526020016151716154eb565b815260200161517e6154bd565b815260200161518b6154eb565b81526040805160a081018252600080825260208281018290529282018190526060820181905260808201529101908152600060208201526040016151cd6154eb565b81526020016151da6154eb565b81526020016151fe6040518060400160405280600081526020016000151581525090565b81526020016152226040518060400160405280600081526020016000151581525090565b8152602001600081526020016152366154eb565b81526020016152436154eb565b81526020016152506154eb565b815260200161525d6154eb565b815260200161526a6154eb565b81526020016152776154eb565b81526020016152846154eb565b81526020016152916154eb565b815260200161529e6154eb565b81526020016152ab6154eb565b81526020016152b86154eb565b81526020016152c56154eb565b8152602001600081525090565b60405180604001604052806152e561551f565b8152602001614a2d615586565b60405180610240016040528060006001600160a01b0316815260200161533860408051608081018252600080825260208201819052918101829052606081019190915290565b815260006020820181905260408201819052606082015260800161535a614b0e565b81526040805160a0810182526000808252602082810182905292820181905260608201819052608082015291019081526020016153956154eb565b815260006020820181905260408201819052606082018190526080820181905260a0820181905260c082015260e0016153cc614b0e565b815260200160008152602001600015158152602001600081525090565b8280546153f590615bf0565b90600052602060002090601f016020900481019282615417576000855561545d565b82601f1061543057805160ff191683800117855561545d565b8280016001018555821561545d579182015b8281111561545d578251825591602001919060010190615442565b506154699291506155de565b5090565b50805461547990615bf0565b6000825580601f10615489575050565b601f0160209004906000526020600020908101906154a791906155de565b50565b6040518060200160405280614a2d6155f3565b6040805160a08101825260008082526020820181905291810182905260608101829052608081019190915290565b604051806080016040528060008152602001600081526020016152c5614b0e565b6040518060200160405280614a2d614b0e565b6040518060c0016040528060006001600160a01b0316815260200161556460408051608081018252600080825260208201819052918101829052606081019190915290565b8152600060208201819052604082018190526060820152608001614a2d614b0e565b6040805161014081018252600060a0820181815260c0830182905260e0830182905261010083018290526101208301829052825260208201529081016155ca6154eb565b815260200160008152602001600081525090565b5b8082111561546957600081556001016155df565b6040805160e081018252600080825282516020808201855282825280840191909152835180820185528281528385015283518082018552828152606084015283519081019093528252608081019190915260a0810161565061550c565b8152602001614a2d60408051608081018252600060208201818152928201819052606082015290815290565b60405160a0810167ffffffffffffffff811182821017156156ad57634e487b7160e01b600052604160045260246000fd5b60405290565b60405160c0810167ffffffffffffffff811182821017156156ad57634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff811182821017156156ad57634e487b7160e01b600052604160045260246000fd5b6040516080810167ffffffffffffffff811182821017156156ad57634e487b7160e01b600052604160045260246000fd5b604051610240810167ffffffffffffffff811182821017156156ad57634e487b7160e01b600052604160045260246000fd5b6040516020810167ffffffffffffffff811182821017156156ad57634e487b7160e01b600052604160045260246000fd5b60405160e0810167ffffffffffffffff811182821017156156ad57634e487b7160e01b600052604160045260246000fd5b80151581146154a757600080fd5b8035610611816157da565b60006060828403121561580557600080fd5b6040516060810181811067ffffffffffffffff8211171561583657634e487b7160e01b600052604160045260246000fd5b60405290508082356002811061584b57600080fd5b8152602083013561585b816157da565b6020820152604083013561586e816157da565b6040919091015292915050565b60006060828403121561588d57600080fd5b614a0c83836157f3565b6001600160a01b03811681146154a757600080fd5b6000602082840312156158be57600080fd5b8135614a0c81615897565b634e487b7160e01b600052602160045260246000fd5b600281106154a7576154a76158c9565b815160808201906158ff816158df565b80835250602083015115156020830152604083015180516040840152602081015160608401525092915050565b60006020828403121561593e57600080fd5b8135614a0c816157da565b803561061181615897565b6000610280828403121561596757600080fd5b50919050565b60005b83811015615988578181015183820152602001615970565b838111156146415750506000910152565b82815260406020820152600082518060408401526159be81606085016020870161596d565b601f01601f1916919091016060019392505050565b8051600581106159e5576159e56158c9565b80835250602081015160018060a01b03808251166020850152602082015160408501526040830151915080825116606085015250602081015115156080840152604081015160a0840152606081015160c08401526080810151151560e0840152506060810151615a616101008401826001600160a01b03169052565b506080810151151561012083015260a00151151561014090910152565b61016081016104a582846159d3565b600581106154a757600080fd5b600060a08284031215615aac57600080fd5b615ab461567c565b90508135615ac181615897565b81526020820135615ad1816157da565b8060208301525060408201356040820152606082013560608201526080820135615afa816157da565b608082015292915050565b6000818303610160811215615b1957600080fd5b615b216156b3565b91508235615b2e81615a8d565b82526040601f1982011215615b4257600080fd5b50615b4b6156e4565b6020830135615b5981615897565b81526040830135602080830191909152820152615b798360608401615a9a565b6040820152615b8b6101008301615949565b6060820152615b9d61012083016157e8565b6080820152615baf61014083016157e8565b60a082015292915050565b60006101608284031215615bcd57600080fd5b614a0c8383615b05565b600060208284031215615be957600080fd5b5035919050565b600181811c90821680615c0457607f821691505b6020821081141561596757634e487b7160e01b600052602260045260246000fd5b805161061181615897565b600060808284031215615c4257600080fd5b615c4a615715565b90508151815260208201516020820152604082015160408201526060820151606082015292915050565b8051610611816157da565b600060a08284031215615c9157600080fd5b615c9961567c565b90508151615ca681615897565b81526020820151615cb6816157da565b8060208301525060408201516040820152606082015160608201526080820151615afa816157da565b6000818303610160811215615cf357600080fd5b615cfb6156b3565b91508251615d0881615a8d565b82526040601f1982011215615d1c57600080fd5b50615d256156e4565b6020830151615d3381615897565b81526040830151602080830191909152820152615d538360608401615c7f565b6040820152615d656101008301615c25565b6060820152615d776101208301615c74565b6080820152615baf6101408301615c74565b600060a08284031215615d9b57600080fd5b615da361567c565b90508151615db081615897565b8152602082810151908201526040820151615dca816157da565b6040820152606082810151908201526080820151615afa816157da565b60006101c08284031215615dfa57600080fd5b615e02615715565b90508151815260208201516020820152615e1f8360408401615cdf565b60408201526101a0820151606082015292915050565b60006107408284031215615e4857600080fd5b615e50615746565b615e5983615c25565b8152615e688460208501615c30565b6020820152615e7960a08401615c25565b604082015260c08301516060820152615e9460e08401615c25565b6080820152610100615ea885828601615cdf565b60a0830152615ebb856102608601615d89565b60c0830152615ece856103008601615de7565b60e08301526104c084015190820152615eea6104e08401615c25565b610120820152610500830151610140820152615f096105208401615c74565b610160820152610540830151610180820152615f286105608401615c74565b6101a0820152615f3c846105808501615cdf565b6101c08201526106e08301516101e0820152615f5b6107008401615c74565b610200820152610720929092015161022083015250919050565b600060208284031215615f8757600080fd5b615f8f615778565b90508135615f9c81615897565b815292915050565b600060208284031215615fb657600080fd5b615fbe615778565b9135825250919050565b600060208284031215615fda57600080fd5b615fe2615778565b90508135615f9c816157da565b6000610160828403121561600257600080fd5b61600a615778565b9050615f9c8383615b05565b60006060828403121561602857600080fd5b616030615778565b9050615f9c83836157f3565b600081830361028081121561605057600080fd5b6160586156e4565b83358152610260601f198301121561606f57600080fd5b616077615778565b91506160816157a9565b60208501356006811061609357600080fd5b81526160a28660408701615f75565b60208201526160b48660608701615fa4565b60408201526160c68660808701615f75565b60608201526160d88660a08701615fc8565b60808201526160ea8660c08701615fef565b60a08201526160fd866102208701616016565b60c0820152825260208101919091529392505050565b6106368282516159d3565b8051805161612b816158df565b80845250602081015115156020840152604081015115156040840152505050565b6001600160a01b03838116825282516020808401919091528301515180516102a0840192919060068110616182576161826158c9565b80604086015250816020820151511660608501526040810151516080850152606081015191506161be60a0850183516001600160a01b03169052565b608081015151151560c085015260a081015191506161df60e0850183616113565b60c0015190506161f361024084018261611e565b509392505050565b634e487b7160e01b600052601260045260246000fd5b600082616220576162206161fb565b500690565b600082616234576162346161fb565b500490565b610180810161624882856159d3565b6001600160a01b03929092166101609190910152919050565b8281526101808101614a0c60208301846159d3565b6000825161628881846020870161596d565b9190910192915050565b805182526020810151602083015260408101516162b260408401826159d3565b50606001516101a09190910152565b81516001600160a01b03168152610740810160208301516163066020840182805182526020810151602083015260408101516040830152606081015160608301525050565b5060408301516001600160a01b03811660a084015250606083015160c083015260808301516001600160a01b03811660e08401525060a083015161010061634f818501836159d3565b60c085015180516001600160a01b03166102608601526020810151610280860152604081015115156102a086015260608101516102c08601526080015115156102e085015260e085015191506163a9610300850183616292565b8401516104c0840152506101208301516001600160a01b03166104e083015261014083015161050083015261016083015115156105208301526101808301516105408301526101a083015115156105608301526101c08301516164106105808401826159d3565b506101e08301516106e0830152610200830151151561070083015261022090920151610720909101529056fea0c08e29c71350e40fbb4cf003989233b13d526e69962aefa0a312080ee1fc54f825aeeaf8a98d102cfef2ce8a456afbe776ac52abc49aed0689abcbcf31c12f4eb456086f80a7670898a2f96c26b017204aad3098f1aeb032d9b4edbe0ef5c9a264697066735822122042ef2c40d46bd43011eb0882b6a59e0db3a3c356a04d29995eab20228455d0f764736f6c634300080c0033`,
  BytecodeLen: 30050,
  Which: `oD`,
  version: 7,
  views: {
    Proposal: `Proposal`,
    currentVotes: `currentVotes`,
    info: `info`,
    isMember: `isMember`,
    myRank: `myRank`
    }
  };
export const _stateSourceMap = {
  2: {
    at: './dao/contracts/dao-core.rsh:374:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './dao/contracts/dao-core.rsh:189:50:after expr stmt semicolon',
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
  "Founder": Founder,
  "addMember": addMember,
  "donate": donate,
  "eject": eject,
  "joinLeave": joinLeave,
  "registerProposal": registerProposal,
  "voteProposal": voteProposal
  };
export const _APIs = {
  addMember: addMember,
  donate: donate,
  eject: eject,
  joinLeave: joinLeave,
  registerProposal: registerProposal,
  voteProposal: voteProposal
  };
