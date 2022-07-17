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
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Tuple([ctc0, ctc2]);
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Struct([['admin', ctc0], ['registerSelf', ctc4], ['fee', ctc2], ['quorum', ctc2], ['openTreasury', ctc4]]);
  const ctc6 = stdlib.T_Null;
  const ctc7 = stdlib.T_Data({
    AllocateFunds: ctc3,
    ChangeAdmin: ctc5,
    EjectMember: ctc0,
    None: ctc6,
    Stop: ctc6
    });
  const ctc8 = stdlib.T_Object({
    admin: ctc0,
    fee: ctc2,
    openTreasury: ctc4,
    quorum: ctc2,
    registerSelf: ctc4
    });
  const ctc9 = stdlib.T_Object({
    Against: ctc2,
    For: ctc2,
    action: ctc7,
    index: ctc2
    });
  const ctc10 = stdlib.T_Struct([['name', ctc1], ['founder', ctc0], ['admin', ctc0], ['fee', ctc2], ['registerSelf', ctc4], ['quorum', ctc2], ['openTreasury', ctc4]]);
  const ctc11 = stdlib.T_Tuple([ctc2, ctc2]);
  const ctc12 = stdlib.T_Data({
    None: ctc6,
    Some: ctc11
    });
  const map0_ctc = ctc12;
  
  
  return {
    infos: {
      Proposal: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v3798, v3799, v3812, v3820, v3822, v3824, v3828, v3897, v3898, v3899, v3900, v3901, v3903, v3932, v3933, v3934] = svs;
            return (await ((async () => {
              
              
              return v3903;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc7
        },
      currentVotes: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v3798, v3799, v3812, v3820, v3822, v3824, v3828, v3897, v3898, v3899, v3900, v3901, v3903, v3932, v3933, v3934] = svs;
            return (await ((async () => {
              
              const v3916 = v3824.For;
              const v3917 = v3824.Against;
              const v3920 = stdlib.add(v3916, v3917);
              
              return v3920;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc2
        },
      info: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v3798, v3799, v3812, v3820, v3822, v3824, v3828, v3897, v3898, v3899, v3900, v3901, v3903, v3932, v3933, v3934] = svs;
            return (await ((async () => {
              
              const v3902 = {
                admin: v3897,
                fee: v3898,
                founder: v3798,
                name: v3799,
                openTreasury: v3899,
                quorum: v3900,
                registerSelf: v3901
                };
              
              return v3902;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc10
        },
      isMember: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v3798, v3799, v3812, v3820, v3822, v3824, v3828, v3897, v3898, v3899, v3900, v3901, v3903, v3932, v3933, v3934] = svs;
            return (await ((async (_v3921 ) => {
                const v3921 = stdlib.protect(ctc0, _v3921, null);
              
              const v3922 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v3921), null);
              let v3923;
              switch (v3922[0]) {
                case 'None': {
                  const v3924 = v3922[1];
                  v3923 = false;
                  
                  break;
                  }
                case 'Some': {
                  const v3925 = v3922[1];
                  v3923 = true;
                  
                  break;
                  }
                }
              
              return v3923;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc4
        },
      myRank: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v3798, v3799, v3812, v3820, v3822, v3824, v3828, v3897, v3898, v3899, v3900, v3901, v3903, v3932, v3933, v3934] = svs;
            return (await ((async (_v3926 ) => {
                const v3926 = stdlib.protect(ctc0, _v3926, null);
              
              const v3927 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v3926), null);
              const v3928 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
              const v3929 = stdlib.fromSome(v3927, v3928);
              const v3930 = v3929[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:98:11:array', stdlib.UInt_max, '0')];
              
              return v3930;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc2
        }
      },
    views: {
      3: [ctc0, ctc1, ctc2, ctc7, ctc8, ctc9, ctc2, ctc0, ctc2, ctc4, ctc2, ctc4, ctc7, ctc2, ctc4, ctc2]
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
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Tuple([ctc6]);
  const ctc8 = stdlib.T_Tuple([ctc1]);
  const ctc9 = stdlib.T_Tuple([ctc5]);
  const ctc10 = stdlib.T_Tuple([ctc6, ctc1]);
  const ctc11 = stdlib.T_Struct([['admin', ctc6], ['registerSelf', ctc5], ['fee', ctc1], ['quorum', ctc1], ['openTreasury', ctc5]]);
  const ctc12 = stdlib.T_Data({
    AllocateFunds: ctc10,
    ChangeAdmin: ctc11,
    EjectMember: ctc6,
    None: ctc0,
    Stop: ctc0
    });
  const ctc13 = stdlib.T_Tuple([ctc12]);
  const ctc14 = stdlib.T_Data({
    Against: ctc0,
    For: ctc0
    });
  const ctc15 = stdlib.T_Tuple([ctc14]);
  const ctc16 = stdlib.T_Data({
    addMember0_334: ctc7,
    donate0_334: ctc8,
    eject0_334: ctc7,
    joinLeave0_334: ctc9,
    registerProposal0_334: ctc13,
    voteProposal0_334: ctc15
    });
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v3782 = stdlib.protect(ctc1, interact.fee, 'for Founder\'s interact field fee');
  const v3783 = stdlib.protect(ctc4, interact.name, 'for Founder\'s interact field name');
  const v3784 = stdlib.protect(ctc5, interact.openTreasury, 'for Founder\'s interact field openTreasury');
  const v3785 = stdlib.protect(ctc1, interact.quorum, 'for Founder\'s interact field quorum');
  const v3786 = stdlib.protect(ctc5, interact.registerSelf, 'for Founder\'s interact field registerSelf');
  
  const v3789 = stdlib.gt(stdlib.UInt_max, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:82:22:decimal', stdlib.UInt_max, '1000000000'));
  stdlib.assert(v3789, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./dao/contracts/dao-core.rsh:82:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:73:15:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:73:19:function exp)'],
    msg: 'Invalid consensus state',
    who: 'Founder'
    });
  const v3792 = stdlib.ge(v3785, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:69:18:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v3792, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./dao/contracts/dao-core.rsh:69:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:83:24:application call to "checkValidateQuorum" (defined at: ./dao/contracts/dao-core.rsh:68:37:function exp)', 'at ./dao/contracts/dao-core.rsh:73:15:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:73:19:function exp)'],
    msg: 'Quorum cannot be 0',
    who: 'Founder'
    });
  const v3795 = stdlib.div(stdlib.UInt_max, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:70:28:decimal', stdlib.UInt_max, '10'));
  const v3796 = stdlib.lt(v3785, v3795);
  stdlib.assert(v3796, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./dao/contracts/dao-core.rsh:70:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:83:24:application call to "checkValidateQuorum" (defined at: ./dao/contracts/dao-core.rsh:68:37:function exp)', 'at ./dao/contracts/dao-core.rsh:73:15:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:73:19:function exp)'],
    msg: 'Quorum seems worryingly large',
    who: 'Founder'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v3783, v3786, v3785, v3784, v3782],
    evt_cnt: 5,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:86:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4, ctc5, ctc1, ctc5, ctc1],
    pay: [stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:86:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v3799, v3800, v3801, v3802, v3803], secs: v3805, time: v3804, didSend: v89, from: v3798 } = txn1;
      
      ;
      const v3812 = stdlib.div(stdlib.UInt_max, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:70:28:decimal', stdlib.UInt_max, '10'));
      const v3815 = await ctc.getContractInfo();
      const v3816 = [stdlib.UInt_max, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      await stdlib.simMapSet(sim_r, 0, v3798, v3816);
      
      const v3818 = {
        admin: v3798,
        fee: v3803,
        openTreasury: v3802,
        quorum: v3801,
        registerSelf: v3800
        };
      const v3820 = ['None', null];
      const v3821 = {
        Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        action: v3820,
        index: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v3822 = v3818;
      const v3823 = true;
      const v3824 = v3821;
      const v3825 = v3804;
      const v3828 = stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:66:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        
        return v3823;})()) {
        const v3897 = v3822.admin;
        const v3898 = v3822.fee;
        const v3899 = v3822.openTreasury;
        const v3900 = v3822.quorum;
        const v3901 = v3822.registerSelf;
        const v3903 = v3824.action;
        const v3932 = v3824.index;
        const v3933 = stdlib.ge(v3932, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
        let v3934;
        if (v3933) {
          const v3936 = stdlib.mod(v3932, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
          const v3938 = stdlib.sub(v3932, v3936);
          const v3940 = stdlib.div(v3938, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
          v3934 = v3940;
          }
        else {
          v3934 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
          }
        sim_r.isHalt = false;
        }
      else {
        const v11731 = v3822.admin;
        const v11780 = stdlib.sub(v3828, v3828);
        sim_r.txns.push({
          kind: 'from',
          to: v11731,
          tok: undefined /* Nothing */
          });
        const v11785 = (stdlib.le(await ctc.getBalance(), v11780) ? stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:353:29:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(), v11780));
        sim_r.txns.push({
          kind: 'from',
          to: v11731,
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
    tys: [ctc4, ctc5, ctc1, ctc5, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v3799, v3800, v3801, v3802, v3803], secs: v3805, time: v3804, didSend: v89, from: v3798 } = txn1;
  ;
  const v3806 = stdlib.gt(stdlib.UInt_max, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:87:20:decimal', stdlib.UInt_max, '1000000000'));
  stdlib.assert(v3806, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./dao/contracts/dao-core.rsh:87:8:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'Invalid consensus state',
    who: 'Founder'
    });
  const v3809 = stdlib.ge(v3801, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:69:18:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v3809, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./dao/contracts/dao-core.rsh:69:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:88:22:application call to "checkValidateQuorum" (defined at: ./dao/contracts/dao-core.rsh:68:37:function exp)'],
    msg: 'Quorum cannot be 0',
    who: 'Founder'
    });
  const v3812 = stdlib.div(stdlib.UInt_max, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:70:28:decimal', stdlib.UInt_max, '10'));
  const v3813 = stdlib.lt(v3801, v3812);
  stdlib.assert(v3813, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./dao/contracts/dao-core.rsh:70:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:88:22:application call to "checkValidateQuorum" (defined at: ./dao/contracts/dao-core.rsh:68:37:function exp)'],
    msg: 'Quorum seems worryingly large',
    who: 'Founder'
    });
  const v3815 = await ctc.getContractInfo();
  const v3816 = [stdlib.UInt_max, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  await stdlib.mapSet(map0, v3798, v3816);
  stdlib.protect(ctc0, await interact.done(v3815), {
    at: './dao/contracts/dao-core.rsh:93:24:application',
    fs: ['at ./dao/contracts/dao-core.rsh:93:24:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:93:24:function exp)', 'at ./dao/contracts/dao-core.rsh:93:24:application call to "liftedInteract" (defined at: ./dao/contracts/dao-core.rsh:93:24:application)'],
    msg: 'done',
    who: 'Founder'
    });
  
  const v3818 = {
    admin: v3798,
    fee: v3803,
    openTreasury: v3802,
    quorum: v3801,
    registerSelf: v3800
    };
  const v3820 = ['None', null];
  const v3821 = {
    Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    action: v3820,
    index: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  let v3822 = v3818;
  let v3823 = true;
  let v3824 = v3821;
  let v3825 = v3804;
  let v3828 = stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:66:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    
    return v3823;})()) {
    const v3897 = v3822.admin;
    const v3898 = v3822.fee;
    const v3899 = v3822.openTreasury;
    const v3900 = v3822.quorum;
    const v3901 = v3822.registerSelf;
    const v3903 = v3824.action;
    const v3932 = v3824.index;
    const v3933 = stdlib.ge(v3932, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
    let v3934;
    if (v3933) {
      const v3936 = stdlib.mod(v3932, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
      const v3938 = stdlib.sub(v3932, v3936);
      const v3940 = stdlib.div(v3938, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
      v3934 = v3940;
      }
    else {
      v3934 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
      }
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc16],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v4456], secs: v4458, time: v4457, didSend: v2511, from: v4455 } = txn2;
    switch (v4456[0]) {
      case 'addMember0_334': {
        const v4459 = v4456[1];
        undefined /* setApiDetails */;
        const v4464 = v4459[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:196:10:spread', stdlib.UInt_max, '0')];
        const v4465 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4464), null);
        const v4466 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v4467 = stdlib.fromSome(v4465, v4466);
        const v4468 = v4467[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:98:11:array', stdlib.UInt_max, '0')];
        const v4470 = stdlib.ge(v4468, v3934);
        stdlib.assert(v4470, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./dao/contracts/dao-core.rsh:197:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:196:36:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:196:36:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:196:36:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:169:50:function exp)'],
          msg: 'User is below Citizen Rank threshold',
          who: 'Founder'
          });
        let v4473;
        switch (v4465[0]) {
          case 'None': {
            const v4474 = v4465[1];
            v4473 = true;
            
            break;
            }
          case 'Some': {
            const v4475 = v4465[1];
            v4473 = false;
            
            break;
            }
          }
        stdlib.assert(v4473, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./dao/contracts/dao-core.rsh:198:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:196:36:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:196:36:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:196:36:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:169:50:function exp)'],
          msg: 'Address is already a member',
          who: 'Founder'
          });
        const v4510 = stdlib.add(v3828, v3898);
        const v4511 = stdlib.le(v4510, stdlib.UInt_max);
        stdlib.assert(v4511, {
          at: './dao/contracts/dao-core.rsh:169:50:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Founder'
          });
        ;
        let v4525;
        switch (v4465[0]) {
          case 'None': {
            const v4526 = v4465[1];
            v4525 = true;
            
            break;
            }
          case 'Some': {
            const v4527 = v4465[1];
            v4525 = false;
            
            break;
            }
          }
        stdlib.assert(v4525, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./dao/contracts/dao-core.rsh:198:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:203:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:203:13:function exp)'],
          msg: 'Address is already a member',
          who: 'Founder'
          });
        const v4530 = [v3934, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        await stdlib.mapSet(map0, v4464, v4530);
        null;
        const v4532 = null;
        await txn2.getOutput('addMember', 'v4532', ctc0, v4532);
        const cv3822 = v3822;
        const cv3823 = true;
        const cv3824 = v3824;
        const cv3825 = v4457;
        const cv3828 = v4510;
        
        v3822 = cv3822;
        v3823 = cv3823;
        v3824 = cv3824;
        v3825 = cv3825;
        v3828 = cv3828;
        
        continue;
        break;
        }
      case 'donate0_334': {
        const v5671 = v4456[1];
        undefined /* setApiDetails */;
        const v5691 = v5671[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:212:10:spread', stdlib.UInt_max, '0')];
        const v5694 = stdlib.sub(stdlib.UInt_max, v5691);
        const v5695 = stdlib.lt(v3828, v5694);
        stdlib.assert(v5695, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./dao/contracts/dao-core.rsh:213:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:212:33:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:212:33:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:212:33:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:169:50:function exp)'],
          msg: 'Donation is too generous',
          who: 'Founder'
          });
        const v5722 = stdlib.add(v3828, v5691);
        const v5723 = stdlib.le(v5722, stdlib.UInt_max);
        stdlib.assert(v5723, {
          at: './dao/contracts/dao-core.rsh:169:50:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Founder'
          });
        ;
        const v5757 = stdlib.lt(v5722, v5694);
        stdlib.assert(v5757, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./dao/contracts/dao-core.rsh:213:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:218:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:218:13:function exp)'],
          msg: 'Donation is too generous',
          who: 'Founder'
          });
        const v5760 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4455), null);
        let v5761;
        switch (v5760[0]) {
          case 'None': {
            const v5762 = v5760[1];
            v5761 = false;
            
            break;
            }
          case 'Some': {
            const v5763 = v5760[1];
            v5761 = true;
            
            break;
            }
          }
        if (v5761) {
          const v5765 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v5766 = stdlib.fromSome(v5760, v5765);
          const v5767 = v5766[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:220:19:array', stdlib.UInt_max, '0')];
          const v5768 = v5766[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:220:19:array', stdlib.UInt_max, '1')];
          const v5770 = stdlib.sub(stdlib.UInt_max, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:222:36:decimal', stdlib.UInt_max, '1'));
          const v5771 = stdlib.lt(v5767, v5770);
          let v5772;
          if (v5771) {
            const v5775 = stdlib.add(v5767, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:223:30:decimal', stdlib.UInt_max, '1'));
            const v5776 = [v5775, v5768];
            v5772 = v5776;
            }
          else {
            const v5777 = stdlib.ge(v5767, v3934);
            const v5778 = v5777 ? v5767 : v3934;
            const v5779 = [v5778, v5768];
            v5772 = v5779;
            }
          await stdlib.mapSet(map0, v4455, v5772);
          const v5780 = null;
          await txn2.getOutput('donate', 'v5780', ctc0, v5780);
          const cv3822 = v3822;
          const cv3823 = true;
          const cv3824 = v3824;
          const cv3825 = v4457;
          const cv3828 = v5722;
          
          v3822 = cv3822;
          v3823 = cv3823;
          v3824 = cv3824;
          v3825 = cv3825;
          v3828 = cv3828;
          
          continue;}
        else {
          const v5788 = null;
          await txn2.getOutput('donate', 'v5788', ctc0, v5788);
          const cv3822 = v3822;
          const cv3823 = true;
          const cv3824 = v3824;
          const cv3825 = v4457;
          const cv3828 = v5722;
          
          v3822 = cv3822;
          v3823 = cv3823;
          v3824 = cv3824;
          v3825 = cv3825;
          v3828 = cv3828;
          
          continue;}
        break;
        }
      case 'eject0_334': {
        const v6883 = v4456[1];
        undefined /* setApiDetails */;
        const v6935 = stdlib.le(v3828, stdlib.UInt_max);
        stdlib.assert(v6935, {
          at: './dao/contracts/dao-core.rsh:169:50:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Founder'
          });
        ;
        const v7009 = v6883[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:233:10:spread', stdlib.UInt_max, '0')];
        const v7010 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v7009), null);
        let v7011;
        switch (v7010[0]) {
          case 'None': {
            const v7012 = v7010[1];
            v7011 = false;
            
            break;
            }
          case 'Some': {
            const v7013 = v7010[1];
            v7011 = true;
            
            break;
            }
          }
        const v7015 = stdlib.addressEq(v7009, v3897);
        const v7016 = v7015 ? false : true;
        const v7017 = v7011 ? v7016 : false;
        const v7018 = stdlib.addressEq(v4455, v7009);
        const v7019 = v7018 ? false : true;
        stdlib.assert(v7019, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./dao/contracts/dao-core.rsh:236:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:250:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:250:13:function exp)'],
          msg: 'Use \'Leave\' API to exit',
          who: 'Founder'
          });
        let v7022;
        switch (v7010[0]) {
          case 'None': {
            const v7023 = v7010[1];
            v7022 = false;
            
            break;
            }
          case 'Some': {
            const v7024 = v7010[1];
            v7022 = true;
            
            break;
            }
          }
        stdlib.assert(v7022, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./dao/contracts/dao-core.rsh:237:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:250:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:250:13:function exp)'],
          msg: 'Address is not a member',
          who: 'Founder'
          });
        stdlib.assert(v7017, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./dao/contracts/dao-core.rsh:238:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:250:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:250:13:function exp)'],
          msg: 'Requires ChangeAdmin proposal',
          who: 'Founder'
          });
        const v7028 = stdlib.addressEq(v4455, v3897);
        if (v7028) {
          const v7121 = null;
          await txn2.getOutput('eject', 'v7121', ctc0, v7121);
          await stdlib.mapSet(map0, v7009, undefined /* Nothing */);
          null;
          const cv3822 = v3822;
          const cv3823 = true;
          const cv3824 = v3824;
          const cv3825 = v4457;
          const cv3828 = v3828;
          
          v3822 = cv3822;
          v3823 = cv3823;
          v3824 = cv3824;
          v3825 = cv3825;
          v3828 = cv3828;
          
          continue;}
        else {
          const v7033 = stdlib.sub(stdlib.UInt_max, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:242:35:decimal', stdlib.UInt_max, '1'));
          const v7034 = stdlib.le(v3932, v7033);
          stdlib.assert(v7034, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./dao/contracts/dao-core.rsh:242:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:250:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:250:13:function exp)'],
            msg: 'Proposals Limit reached',
            who: 'Founder'
            });
          let v7036;
          switch (v3903[0]) {
            case 'AllocateFunds': {
              const v7037 = v3903[1];
              const v7038 = v7037[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:76:21:array', stdlib.UInt_max, '0')];
              const v7039 = v7037[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:76:21:array', stdlib.UInt_max, '1')];
              const v7041 = stdlib.lt(v7039, v3828);
              const v7042 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v7038), null);
              let v7043;
              switch (v7042[0]) {
                case 'None': {
                  const v7044 = v7042[1];
                  v7043 = false;
                  
                  break;
                  }
                case 'Some': {
                  const v7045 = v7042[1];
                  v7043 = true;
                  
                  break;
                  }
                }
              const v7046 = v7043 ? v7041 : false;
              const v7048 = v3899 ? v7041 : v7046;
              v7036 = v7048;
              
              break;
              }
            case 'ChangeAdmin': {
              const v7049 = v3903[1];
              const v7050 = v7049.admin;
              const v7051 = v7049.fee;
              const v7053 = v7049.quorum;
              const v7055 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v7050), null);
              const v7056 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
              const v7057 = stdlib.fromSome(v7055, v7056);
              const v7058 = v7057[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:84:13:array', stdlib.UInt_max, '0')];
              let v7061;
              switch (v7055[0]) {
                case 'None': {
                  const v7062 = v7055[1];
                  v7061 = false;
                  
                  break;
                  }
                case 'Some': {
                  const v7063 = v7055[1];
                  v7061 = true;
                  
                  break;
                  }
                }
              const v7064 = stdlib.gt(v7058, v3934);
              const v7065 = v7061 ? v7064 : false;
              const v7066 = stdlib.gt(v7053, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:86:34:decimal', stdlib.UInt_max, '0'));
              let v7067;
              if (v7066) {
                const v7070 = stdlib.lt(v7053, v3812);
                v7067 = v7070;
                }
              else {
                v7067 = false;
                }
              const v7071 = stdlib.gt(v7051, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:87:33:decimal', stdlib.UInt_max, '0'));
              const v7072 = stdlib.lt(v7051, stdlib.UInt_max);
              const v7073 = v7071 ? v7072 : false;
              const v7074 = v7065 ? v7067 : false;
              const v7075 = v7074 ? v7073 : false;
              v7036 = v7075;
              
              break;
              }
            case 'EjectMember': {
              const v7076 = v3903[1];
              const v7077 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v7076), null);
              let v7078;
              switch (v7077[0]) {
                case 'None': {
                  const v7079 = v7077[1];
                  v7078 = false;
                  
                  break;
                  }
                case 'Some': {
                  const v7080 = v7077[1];
                  v7078 = true;
                  
                  break;
                  }
                }
              const v7082 = stdlib.addressEq(v7076, v3897);
              const v7083 = v7082 ? false : true;
              const v7084 = v7078 ? v7083 : false;
              v7036 = v7084;
              
              break;
              }
            case 'None': {
              const v7085 = v3903[1];
              v7036 = false;
              
              break;
              }
            case 'Stop': {
              const v7086 = v3903[1];
              v7036 = true;
              
              break;
              }
            }
          stdlib.assert(v7036, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./dao/contracts/dao-core.rsh:243:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:250:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:250:13:function exp)'],
            msg: 'A Proposal is already active.',
            who: 'Founder'
            });
          const v7089 = null;
          await txn2.getOutput('eject', 'v7089', ctc0, v7089);
          const v7107 = stdlib.add(v3932, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:163:30:decimal', stdlib.UInt_max, '1'));
          const v7108 = ['EjectMember', v7009];
          const v7109 = {
            Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            action: v7108,
            index: v7107
            };
          const cv3822 = v3822;
          const cv3823 = true;
          const cv3824 = v7109;
          const cv3825 = v4457;
          const cv3828 = v3828;
          
          v3822 = cv3822;
          v3823 = cv3823;
          v3824 = cv3824;
          v3825 = cv3825;
          v3828 = cv3828;
          
          continue;}
        break;
        }
      case 'joinLeave0_334': {
        const v8095 = v4456[1];
        undefined /* setApiDetails */;
        const v8123 = v8095[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:264:10:spread', stdlib.UInt_max, '0')];
        if (v8123) {
          const v8124 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4455), null);
          let v8125;
          switch (v8124[0]) {
            case 'None': {
              const v8126 = v8124[1];
              v8125 = false;
              
              break;
              }
            case 'Some': {
              const v8127 = v8124[1];
              v8125 = true;
              
              break;
              }
            }
          stdlib.assert(v8125, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./dao/contracts/dao-core.rsh:266:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:264:40:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:264:40:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:264:40:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:169:50:function exp)'],
            msg: 'Address is not a member',
            who: 'Founder'
            });
          }
        else {
          stdlib.assert(v3901, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./dao/contracts/dao-core.rsh:268:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:264:40:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:264:40:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:264:40:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:169:50:function exp)'],
            msg: 'An existing user has to add you to this DAO',
            who: 'Founder'
            });
          const v8131 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4455), null);
          let v8132;
          switch (v8131[0]) {
            case 'None': {
              const v8133 = v8131[1];
              v8132 = true;
              
              break;
              }
            case 'Some': {
              const v8134 = v8131[1];
              v8132 = false;
              
              break;
              }
            }
          stdlib.assert(v8132, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./dao/contracts/dao-core.rsh:269:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:264:40:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:264:40:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:264:40:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:169:50:function exp)'],
            msg: 'Address is already a member',
            who: 'Founder'
            });
          }
        const v8137 = v8123 ? stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:272:35:decimal', stdlib.UInt_max, '0') : v3898;
        const v8140 = stdlib.sub(stdlib.UInt_max, v3828);
        const v8141 = stdlib.lt(v8137, v8140);
        stdlib.assert(v8141, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./dao/contracts/dao-core.rsh:273:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:264:40:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:264:40:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:264:40:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:169:50:function exp)'],
          msg: 'Membership is at maximum capacity',
          who: 'Founder'
          });
        const v8146 = stdlib.add(v3828, v8137);
        const v8147 = stdlib.le(v8146, stdlib.UInt_max);
        stdlib.assert(v8147, {
          at: './dao/contracts/dao-core.rsh:169:50:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Founder'
          });
        ;
        if (v8123) {
          const v8366 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4455), null);
          let v8367;
          switch (v8366[0]) {
            case 'None': {
              const v8368 = v8366[1];
              v8367 = false;
              
              break;
              }
            case 'Some': {
              const v8369 = v8366[1];
              v8367 = true;
              
              break;
              }
            }
          stdlib.assert(v8367, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./dao/contracts/dao-core.rsh:266:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:278:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:278:13:function exp)'],
            msg: 'Address is not a member',
            who: 'Founder'
            });
          }
        else {
          stdlib.assert(v3901, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./dao/contracts/dao-core.rsh:268:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:278:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:278:13:function exp)'],
            msg: 'An existing user has to add you to this DAO',
            who: 'Founder'
            });
          const v8373 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4455), null);
          let v8374;
          switch (v8373[0]) {
            case 'None': {
              const v8375 = v8373[1];
              v8374 = true;
              
              break;
              }
            case 'Some': {
              const v8376 = v8373[1];
              v8374 = false;
              
              break;
              }
            }
          stdlib.assert(v8374, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./dao/contracts/dao-core.rsh:269:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:278:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:278:13:function exp)'],
            msg: 'Address is already a member',
            who: 'Founder'
            });
          }
        const v8382 = stdlib.sub(stdlib.UInt_max, v8146);
        const v8383 = stdlib.lt(v8137, v8382);
        stdlib.assert(v8383, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./dao/contracts/dao-core.rsh:273:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:278:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:278:13:function exp)'],
          msg: 'Membership is at maximum capacity',
          who: 'Founder'
          });
        const v8386 = null;
        await txn2.getOutput('joinLeave', 'v8386', ctc0, v8386);
        if (v8123) {
          await stdlib.mapSet(map0, v4455, undefined /* Nothing */);
          null;
          const cv3822 = v3822;
          const cv3823 = true;
          const cv3824 = v3824;
          const cv3825 = v4457;
          const cv3828 = v8146;
          
          v3822 = cv3822;
          v3823 = cv3823;
          v3824 = cv3824;
          v3825 = cv3825;
          v3828 = cv3828;
          
          continue;}
        else {
          const v8395 = [v3934, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          await stdlib.mapSet(map0, v4455, v8395);
          null;
          const cv3822 = v3822;
          const cv3823 = true;
          const cv3824 = v3824;
          const cv3825 = v4457;
          const cv3828 = v8146;
          
          v3822 = cv3822;
          v3823 = cv3823;
          v3824 = cv3824;
          v3825 = cv3825;
          v3828 = cv3828;
          
          continue;}
        break;
        }
      case 'registerProposal0_334': {
        const v9307 = v4456[1];
        undefined /* setApiDetails */;
        const v9359 = stdlib.le(v3828, stdlib.UInt_max);
        stdlib.assert(v9359, {
          at: './dao/contracts/dao-core.rsh:169:50:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Founder'
          });
        ;
        const v9611 = v9307[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:291:10:spread', stdlib.UInt_max, '0')];
        let v9615;
        if (v3933) {
          const v9617 = stdlib.mod(v3932, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
          const v9619 = stdlib.sub(v3932, v9617);
          const v9621 = stdlib.div(v9619, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
          v9615 = v9621;
          }
        else {
          v9615 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
          }
        const v9622 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4455), null);
        const v9623 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v9624 = stdlib.fromSome(v9622, v9623);
        const v9625 = v9624[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:103:11:array', stdlib.UInt_max, '0')];
        const v9627 = stdlib.ge(v9625, v9615);
        stdlib.assert(v9627, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./dao/contracts/dao-core.rsh:104:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:292:22:application call to "requireIsMember" (defined at: ./dao/contracts/dao-core.rsh:101:36:function exp)', 'at ./dao/contracts/dao-core.rsh:304:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:304:13:function exp)'],
          msg: 'THIEF! SEIZE THEM!',
          who: 'Founder'
          });
        const v9634 = stdlib.ge(v9625, v3934);
        stdlib.assert(v9634, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./dao/contracts/dao-core.rsh:293:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:304:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:304:13:function exp)'],
          msg: 'User is below Citizen Rank threshold',
          who: 'Founder'
          });
        let v9638;
        switch (v3903[0]) {
          case 'AllocateFunds': {
            const v9639 = v3903[1];
            const v9640 = v9639[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:76:21:array', stdlib.UInt_max, '0')];
            const v9641 = v9639[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:76:21:array', stdlib.UInt_max, '1')];
            const v9643 = stdlib.lt(v9641, v3828);
            const v9644 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v9640), null);
            let v9645;
            switch (v9644[0]) {
              case 'None': {
                const v9646 = v9644[1];
                v9645 = false;
                
                break;
                }
              case 'Some': {
                const v9647 = v9644[1];
                v9645 = true;
                
                break;
                }
              }
            const v9648 = v9645 ? v9643 : false;
            const v9650 = v3899 ? v9643 : v9648;
            v9638 = v9650;
            
            break;
            }
          case 'ChangeAdmin': {
            const v9651 = v3903[1];
            const v9652 = v9651.admin;
            const v9653 = v9651.fee;
            const v9655 = v9651.quorum;
            const v9657 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v9652), null);
            const v9659 = stdlib.fromSome(v9657, v9623);
            const v9660 = v9659[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:84:13:array', stdlib.UInt_max, '0')];
            let v9663;
            switch (v9657[0]) {
              case 'None': {
                const v9664 = v9657[1];
                v9663 = false;
                
                break;
                }
              case 'Some': {
                const v9665 = v9657[1];
                v9663 = true;
                
                break;
                }
              }
            const v9666 = stdlib.gt(v9660, v3934);
            const v9667 = v9663 ? v9666 : false;
            const v9668 = stdlib.gt(v9655, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:86:34:decimal', stdlib.UInt_max, '0'));
            let v9669;
            if (v9668) {
              const v9672 = stdlib.lt(v9655, v3812);
              v9669 = v9672;
              }
            else {
              v9669 = false;
              }
            const v9673 = stdlib.gt(v9653, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:87:33:decimal', stdlib.UInt_max, '0'));
            const v9674 = stdlib.lt(v9653, stdlib.UInt_max);
            const v9675 = v9673 ? v9674 : false;
            const v9676 = v9667 ? v9669 : false;
            const v9677 = v9676 ? v9675 : false;
            v9638 = v9677;
            
            break;
            }
          case 'EjectMember': {
            const v9678 = v3903[1];
            const v9679 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v9678), null);
            let v9680;
            switch (v9679[0]) {
              case 'None': {
                const v9681 = v9679[1];
                v9680 = false;
                
                break;
                }
              case 'Some': {
                const v9682 = v9679[1];
                v9680 = true;
                
                break;
                }
              }
            const v9684 = stdlib.addressEq(v9678, v3897);
            const v9685 = v9684 ? false : true;
            const v9686 = v9680 ? v9685 : false;
            v9638 = v9686;
            
            break;
            }
          case 'None': {
            const v9687 = v3903[1];
            v9638 = false;
            
            break;
            }
          case 'Stop': {
            const v9688 = v3903[1];
            v9638 = true;
            
            break;
            }
          }
        const v9689 = v9638 ? false : true;
        stdlib.assert(v9689, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./dao/contracts/dao-core.rsh:295:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:304:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:304:13:function exp)'],
          msg: 'A Proposal is already active.',
          who: 'Founder'
          });
        const v9692 = stdlib.sub(stdlib.UInt_max, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:300:32:decimal', stdlib.UInt_max, '1'));
        const v9693 = stdlib.lt(v3932, v9692);
        stdlib.assert(v9693, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./dao/contracts/dao-core.rsh:300:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:304:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:304:13:function exp)'],
          msg: 'Governance limit reached',
          who: 'Founder'
          });
        let v9695;
        switch (v9611[0]) {
          case 'AllocateFunds': {
            const v9696 = v9611[1];
            const v9697 = v9696[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:76:21:array', stdlib.UInt_max, '0')];
            const v9698 = v9696[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:76:21:array', stdlib.UInt_max, '1')];
            const v9700 = stdlib.lt(v9698, v3828);
            const v9701 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v9697), null);
            let v9702;
            switch (v9701[0]) {
              case 'None': {
                const v9703 = v9701[1];
                v9702 = false;
                
                break;
                }
              case 'Some': {
                const v9704 = v9701[1];
                v9702 = true;
                
                break;
                }
              }
            const v9705 = v9702 ? v9700 : false;
            const v9707 = v3899 ? v9700 : v9705;
            v9695 = v9707;
            
            break;
            }
          case 'ChangeAdmin': {
            const v9708 = v9611[1];
            const v9709 = v9708.admin;
            const v9710 = v9708.fee;
            const v9712 = v9708.quorum;
            const v9714 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v9709), null);
            const v9716 = stdlib.fromSome(v9714, v9623);
            const v9717 = v9716[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:84:13:array', stdlib.UInt_max, '0')];
            let v9720;
            switch (v9714[0]) {
              case 'None': {
                const v9721 = v9714[1];
                v9720 = false;
                
                break;
                }
              case 'Some': {
                const v9722 = v9714[1];
                v9720 = true;
                
                break;
                }
              }
            const v9723 = stdlib.gt(v9717, v3934);
            const v9724 = v9720 ? v9723 : false;
            const v9725 = stdlib.gt(v9712, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:86:34:decimal', stdlib.UInt_max, '0'));
            let v9726;
            if (v9725) {
              const v9729 = stdlib.lt(v9712, v3812);
              v9726 = v9729;
              }
            else {
              v9726 = false;
              }
            const v9730 = stdlib.gt(v9710, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:87:33:decimal', stdlib.UInt_max, '0'));
            const v9731 = stdlib.lt(v9710, stdlib.UInt_max);
            const v9732 = v9730 ? v9731 : false;
            const v9733 = v9724 ? v9726 : false;
            const v9734 = v9733 ? v9732 : false;
            v9695 = v9734;
            
            break;
            }
          case 'EjectMember': {
            const v9735 = v9611[1];
            const v9736 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v9735), null);
            let v9737;
            switch (v9736[0]) {
              case 'None': {
                const v9738 = v9736[1];
                v9737 = false;
                
                break;
                }
              case 'Some': {
                const v9739 = v9736[1];
                v9737 = true;
                
                break;
                }
              }
            const v9741 = stdlib.addressEq(v9735, v3897);
            const v9742 = v9741 ? false : true;
            const v9743 = v9737 ? v9742 : false;
            v9695 = v9743;
            
            break;
            }
          case 'None': {
            const v9744 = v9611[1];
            v9695 = false;
            
            break;
            }
          case 'Stop': {
            const v9745 = v9611[1];
            v9695 = true;
            
            break;
            }
          }
        stdlib.assert(v9695, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./dao/contracts/dao-core.rsh:301:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:304:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:304:13:function exp)'],
          msg: 'Bad suggestion is bad. Apologize to everyone.',
          who: 'Founder'
          });
        const v9748 = null;
        await txn2.getOutput('registerProposal', 'v9748', ctc0, v9748);
        null;
        const v9782 = stdlib.add(v3932, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:163:30:decimal', stdlib.UInt_max, '1'));
        const v9783 = {
          Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          action: v9611,
          index: v9782
          };
        const cv3822 = v3822;
        const cv3823 = true;
        const cv3824 = v9783;
        const cv3825 = v4457;
        const cv3828 = v3828;
        
        v3822 = cv3822;
        v3823 = cv3823;
        v3824 = cv3824;
        v3825 = cv3825;
        v3828 = cv3828;
        
        continue;
        break;
        }
      case 'voteProposal0_334': {
        const v10519 = v4456[1];
        undefined /* setApiDetails */;
        const v10571 = stdlib.le(v3828, stdlib.UInt_max);
        stdlib.assert(v10571, {
          at: './dao/contracts/dao-core.rsh:169:50:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Founder'
          });
        ;
        const v11002 = v10519[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:313:10:spread', stdlib.UInt_max, '0')];
        let v11006;
        if (v3933) {
          const v11008 = stdlib.mod(v3932, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
          const v11010 = stdlib.sub(v3932, v11008);
          const v11012 = stdlib.div(v11010, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
          v11006 = v11012;
          }
        else {
          v11006 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
          }
        const v11013 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4455), null);
        const v11014 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v11015 = stdlib.fromSome(v11013, v11014);
        const v11016 = v11015[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:103:11:array', stdlib.UInt_max, '0')];
        const v11017 = v11015[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:103:11:array', stdlib.UInt_max, '1')];
        const v11018 = stdlib.ge(v11016, v11006);
        stdlib.assert(v11018, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./dao/contracts/dao-core.rsh:104:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:314:22:application call to "requireIsMember" (defined at: ./dao/contracts/dao-core.rsh:101:36:function exp)', 'at ./dao/contracts/dao-core.rsh:341:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:341:13:function exp)'],
          msg: 'THIEF! SEIZE THEM!',
          who: 'Founder'
          });
        const v11020 = v3824.For;
        const v11021 = v3824.Against;
        let v11024;
        switch (v3903[0]) {
          case 'AllocateFunds': {
            const v11025 = v3903[1];
            const v11026 = v11025[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:76:21:array', stdlib.UInt_max, '0')];
            const v11027 = v11025[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:76:21:array', stdlib.UInt_max, '1')];
            const v11029 = stdlib.lt(v11027, v3828);
            const v11030 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v11026), null);
            let v11031;
            switch (v11030[0]) {
              case 'None': {
                const v11032 = v11030[1];
                v11031 = false;
                
                break;
                }
              case 'Some': {
                const v11033 = v11030[1];
                v11031 = true;
                
                break;
                }
              }
            const v11034 = v11031 ? v11029 : false;
            const v11036 = v3899 ? v11029 : v11034;
            v11024 = v11036;
            
            break;
            }
          case 'ChangeAdmin': {
            const v11037 = v3903[1];
            const v11038 = v11037.admin;
            const v11039 = v11037.fee;
            const v11041 = v11037.quorum;
            const v11043 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v11038), null);
            const v11045 = stdlib.fromSome(v11043, v11014);
            const v11046 = v11045[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:84:13:array', stdlib.UInt_max, '0')];
            let v11049;
            switch (v11043[0]) {
              case 'None': {
                const v11050 = v11043[1];
                v11049 = false;
                
                break;
                }
              case 'Some': {
                const v11051 = v11043[1];
                v11049 = true;
                
                break;
                }
              }
            const v11052 = stdlib.gt(v11046, v3934);
            const v11053 = v11049 ? v11052 : false;
            const v11054 = stdlib.gt(v11041, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:86:34:decimal', stdlib.UInt_max, '0'));
            let v11055;
            if (v11054) {
              const v11058 = stdlib.lt(v11041, v3812);
              v11055 = v11058;
              }
            else {
              v11055 = false;
              }
            const v11059 = stdlib.gt(v11039, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:87:33:decimal', stdlib.UInt_max, '0'));
            const v11060 = stdlib.lt(v11039, stdlib.UInt_max);
            const v11061 = v11059 ? v11060 : false;
            const v11062 = v11053 ? v11055 : false;
            const v11063 = v11062 ? v11061 : false;
            v11024 = v11063;
            
            break;
            }
          case 'EjectMember': {
            const v11064 = v3903[1];
            const v11065 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v11064), null);
            let v11066;
            switch (v11065[0]) {
              case 'None': {
                const v11067 = v11065[1];
                v11066 = false;
                
                break;
                }
              case 'Some': {
                const v11068 = v11065[1];
                v11066 = true;
                
                break;
                }
              }
            const v11070 = stdlib.addressEq(v11064, v3897);
            const v11071 = v11070 ? false : true;
            const v11072 = v11066 ? v11071 : false;
            v11024 = v11072;
            
            break;
            }
          case 'None': {
            const v11073 = v3903[1];
            v11024 = false;
            
            break;
            }
          case 'Stop': {
            const v11074 = v3903[1];
            v11024 = true;
            
            break;
            }
          }
        stdlib.assert(v11024, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./dao/contracts/dao-core.rsh:316:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:341:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:341:13:function exp)'],
          msg: 'No Proposal is currently active',
          who: 'Founder'
          });
        const v11076 = stdlib.gt(v11020, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:321:17:decimal', stdlib.UInt_max, '0'));
        if (v11076) {
          const v11078 = stdlib.sub(stdlib.UInt_max, v11021);
          const v11079 = stdlib.lt(v11020, v11078);
          stdlib.assert(v11079, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./dao/contracts/dao-core.rsh:322:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:341:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:341:13:function exp)'],
            msg: 'Voting limit reached',
            who: 'Founder'
            });
          }
        else {
          }
        const v11081 = stdlib.gt(v11021, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:324:21:decimal', stdlib.UInt_max, '0'));
        if (v11081) {
          const v11083 = stdlib.sub(stdlib.UInt_max, v11020);
          const v11084 = stdlib.lt(v11021, v11083);
          stdlib.assert(v11084, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./dao/contracts/dao-core.rsh:325:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:341:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:341:13:function exp)'],
            msg: 'Voting limit reached',
            who: 'Founder'
            });
          }
        else {
          }
        const v11088 = stdlib.add(v11020, v11021);
        const v11090 = stdlib.lt(v11088, v3900);
        stdlib.assert(v11090, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./dao/contracts/dao-core.rsh:328:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:341:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:341:13:function exp)'],
          msg: 'Quorum reached',
          who: 'Founder'
          });
        const v11097 = stdlib.lt(v11017, v3932);
        stdlib.assert(v11097, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./dao/contracts/dao-core.rsh:331:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:341:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:341:13:function exp)'],
          msg: 'Address has already voted in this session',
          who: 'Founder'
          });
        let v11099;
        switch (v11002[0]) {
          case 'Against': {
            const v11100 = v11002[1];
            const v11103 = stdlib.add(v11021, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:335:40:decimal', stdlib.UInt_max, '1'));
            const v11104 = [v11020, v11103];
            v11099 = v11104;
            
            break;
            }
          case 'For': {
            const v11106 = v11002[1];
            const v11109 = stdlib.add(v11020, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:334:27:decimal', stdlib.UInt_max, '1'));
            const v11110 = [v11109, v11021];
            v11099 = v11110;
            
            break;
            }
          }
        const v11112 = v11099[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:333:13:array', stdlib.UInt_max, '0')];
        const v11113 = v11099[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:333:13:array', stdlib.UInt_max, '1')];
        const v11115 = stdlib.sub(stdlib.UInt_max, v11113);
        const v11116 = stdlib.lt(v11112, v11115);
        stdlib.assert(v11116, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./dao/contracts/dao-core.rsh:337:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:341:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:341:13:function exp)'],
          msg: 'Voting limit reached (2)',
          who: 'Founder'
          });
        const v11119 = stdlib.sub(stdlib.UInt_max, v11112);
        const v11120 = stdlib.lt(v11113, v11119);
        stdlib.assert(v11120, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./dao/contracts/dao-core.rsh:338:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:341:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:341:13:function exp)'],
          msg: 'Voting limit reached (2)',
          who: 'Founder'
          });
        const v11123 = null;
        await txn2.getOutput('voteProposal', 'v11123', ctc0, v11123);
        const v11132 = stdlib.lt(v11016, stdlib.UInt_max);
        let v11133;
        if (v11132) {
          const v11136 = stdlib.add(v11016, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:345:45:decimal', stdlib.UInt_max, '1'));
          const v11137 = [v11136, v3932];
          v11133 = v11137;
          }
        else {
          const v11138 = [v11016, v3932];
          v11133 = v11138;
          }
        await stdlib.mapSet(map0, v4455, v11133);
        const v11145 = stdlib.add(v11112, v11113);
        const v11147 = stdlib.ge(v11145, v3900);
        let v11149;
        if (v3933) {
          const v11151 = stdlib.mod(v3932, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
          const v11153 = stdlib.sub(v3932, v11151);
          const v11155 = stdlib.div(v11153, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
          v11149 = v11155;
          }
        else {
          v11149 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
          }
        let v11156;
        switch (v3903[0]) {
          case 'AllocateFunds': {
            const v11157 = v3903[1];
            const v11158 = v11157[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:76:21:array', stdlib.UInt_max, '0')];
            const v11159 = v11157[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:76:21:array', stdlib.UInt_max, '1')];
            const v11161 = stdlib.lt(v11159, v3828);
            const v11162 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v11158), null);
            let v11163;
            switch (v11162[0]) {
              case 'None': {
                const v11164 = v11162[1];
                v11163 = false;
                
                break;
                }
              case 'Some': {
                const v11165 = v11162[1];
                v11163 = true;
                
                break;
                }
              }
            const v11166 = v11163 ? v11161 : false;
            const v11168 = v3899 ? v11161 : v11166;
            v11156 = v11168;
            
            break;
            }
          case 'ChangeAdmin': {
            const v11169 = v3903[1];
            const v11170 = v11169.admin;
            const v11171 = v11169.fee;
            const v11173 = v11169.quorum;
            const v11175 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v11170), null);
            const v11177 = stdlib.fromSome(v11175, v11014);
            const v11178 = v11177[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:84:13:array', stdlib.UInt_max, '0')];
            let v11181;
            switch (v11175[0]) {
              case 'None': {
                const v11182 = v11175[1];
                v11181 = false;
                
                break;
                }
              case 'Some': {
                const v11183 = v11175[1];
                v11181 = true;
                
                break;
                }
              }
            const v11184 = stdlib.gt(v11178, v11149);
            const v11185 = v11181 ? v11184 : false;
            const v11186 = stdlib.gt(v11173, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:86:34:decimal', stdlib.UInt_max, '0'));
            let v11187;
            if (v11186) {
              const v11190 = stdlib.lt(v11173, v3812);
              v11187 = v11190;
              }
            else {
              v11187 = false;
              }
            const v11191 = stdlib.gt(v11171, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:87:33:decimal', stdlib.UInt_max, '0'));
            const v11192 = stdlib.lt(v11171, stdlib.UInt_max);
            const v11193 = v11191 ? v11192 : false;
            const v11194 = v11185 ? v11187 : false;
            const v11195 = v11194 ? v11193 : false;
            v11156 = v11195;
            
            break;
            }
          case 'EjectMember': {
            const v11196 = v3903[1];
            const v11197 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v11196), null);
            let v11198;
            switch (v11197[0]) {
              case 'None': {
                const v11199 = v11197[1];
                v11198 = false;
                
                break;
                }
              case 'Some': {
                const v11200 = v11197[1];
                v11198 = true;
                
                break;
                }
              }
            const v11202 = stdlib.addressEq(v11196, v3897);
            const v11203 = v11202 ? false : true;
            const v11204 = v11198 ? v11203 : false;
            v11156 = v11204;
            
            break;
            }
          case 'None': {
            const v11205 = v3903[1];
            v11156 = false;
            
            break;
            }
          case 'Stop': {
            const v11206 = v3903[1];
            v11156 = true;
            
            break;
            }
          }
        if (v11147) {
          const v11207 = stdlib.gt(v11112, v11113);
          const v11208 = v11156 ? v11207 : false;
          if (v11208) {
            switch (v3903[0]) {
              case 'AllocateFunds': {
                const v11209 = v3903[1];
                const v11210 = v11209[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:133:32:application', stdlib.UInt_max, '0')];
                const v11211 = v11209[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:133:32:application', stdlib.UInt_max, '1')];
                null;
                const v11218 = stdlib.sub(v3828, v11211);
                const v11219 = stdlib.ge(v11218, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:137:29:application', stdlib.UInt_max, '0'));
                stdlib.assert(v11219, {
                  at: './dao/contracts/dao-core.rsh:137:29:application',
                  fs: ['at ./dao/contracts/dao-core.rsh:135:28:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:136:44:function exp)', 'at ./dao/contracts/dao-core.rsh:135:28:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:135:28:function exp)', 'at ./dao/contracts/dao-core.rsh:347:28:application call to "doProposal" (defined at: ./dao/contracts/dao-core.rsh:115:51:function exp)', 'at ./dao/contracts/dao-core.rsh:341:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:341:13:function exp)'],
                  msg: 'assume >= 0',
                  who: 'Founder'
                  });
                ;
                const v11223 = {
                  Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  action: v3820,
                  index: v3932
                  };
                const cv3822 = v3822;
                const cv3823 = true;
                const cv3824 = v11223;
                const cv3825 = v4457;
                const cv3828 = v11218;
                
                v3822 = cv3822;
                v3823 = cv3823;
                v3824 = cv3824;
                v3825 = cv3825;
                v3828 = cv3828;
                
                continue;
                break;
                }
              case 'ChangeAdmin': {
                const v11294 = v3903[1];
                const v11295 = v11294.admin;
                const v11296 = v11294.registerSelf;
                const v11297 = v11294.fee;
                const v11298 = v11294.quorum;
                const v11299 = v11294.openTreasury;
                null;
                const v11333 = {
                  Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  action: v3820,
                  index: v3932
                  };
                const v11334 = {
                  admin: v11295,
                  fee: v11297,
                  openTreasury: v11299,
                  quorum: v11298,
                  registerSelf: v11296
                  };
                const cv3822 = v11334;
                const cv3823 = true;
                const cv3824 = v11333;
                const cv3825 = v4457;
                const cv3828 = v3828;
                
                v3822 = cv3822;
                v3823 = cv3823;
                v3824 = cv3824;
                v3825 = cv3825;
                v3828 = cv3828;
                
                continue;
                break;
                }
              case 'EjectMember': {
                const v11382 = v3903[1];
                null;
                const v11428 = v11382;
                await stdlib.mapSet(map0, v11382, undefined /* Nothing */);
                null;
                const v11431 = {
                  Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  action: v3820,
                  index: v3932
                  };
                const cv3822 = v3822;
                const cv3823 = true;
                const cv3824 = v11431;
                const cv3825 = v4457;
                const cv3828 = v3828;
                
                v3822 = cv3822;
                v3823 = cv3823;
                v3824 = cv3824;
                v3825 = cv3825;
                v3828 = cv3828;
                
                continue;
                break;
                }
              case 'None': {
                const v11465 = v3903[1];
                null;
                const v11526 = {
                  Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  action: v3820,
                  index: v3932
                  };
                const cv3822 = v3822;
                const cv3823 = true;
                const cv3824 = v11526;
                const cv3825 = v4457;
                const cv3828 = v3828;
                
                v3822 = cv3822;
                v3823 = cv3823;
                v3824 = cv3824;
                v3825 = cv3825;
                v3828 = cv3828;
                
                continue;
                break;
                }
              case 'Stop': {
                const v11548 = v3903[1];
                null;
                const v11621 = {
                  Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  action: v3820,
                  index: v3932
                  };
                const cv3822 = v3822;
                const cv3823 = false;
                const cv3824 = v11621;
                const cv3825 = v4457;
                const cv3828 = v3828;
                
                v3822 = cv3822;
                v3823 = cv3823;
                v3824 = cv3824;
                v3825 = cv3825;
                v3828 = cv3828;
                
                continue;
                break;
                }
              }}
          else {
            if (v11207) {
              switch (v3903[0]) {
                case 'AllocateFunds': {
                  const v11631 = v3903[1];
                  null;
                  const v11635 = {
                    Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    action: v3820,
                    index: v3932
                    };
                  const cv3822 = v3822;
                  const cv3823 = true;
                  const cv3824 = v11635;
                  const cv3825 = v4457;
                  const cv3828 = v3828;
                  
                  v3822 = cv3822;
                  v3823 = cv3823;
                  v3824 = cv3824;
                  v3825 = cv3825;
                  v3828 = cv3828;
                  
                  continue;
                  break;
                  }
                case 'ChangeAdmin': {
                  const v11641 = v3903[1];
                  null;
                  const v11648 = {
                    Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    action: v3820,
                    index: v3932
                    };
                  const cv3822 = v3822;
                  const cv3823 = true;
                  const cv3824 = v11648;
                  const cv3825 = v4457;
                  const cv3828 = v3828;
                  
                  v3822 = cv3822;
                  v3823 = cv3823;
                  v3824 = cv3824;
                  v3825 = cv3825;
                  v3828 = cv3828;
                  
                  continue;
                  break;
                  }
                case 'EjectMember': {
                  const v11654 = v3903[1];
                  null;
                  const v11656 = {
                    Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    action: v3820,
                    index: v3932
                    };
                  const cv3822 = v3822;
                  const cv3823 = true;
                  const cv3824 = v11656;
                  const cv3825 = v4457;
                  const cv3828 = v3828;
                  
                  v3822 = cv3822;
                  v3823 = cv3823;
                  v3824 = cv3824;
                  v3825 = cv3825;
                  v3828 = cv3828;
                  
                  continue;
                  break;
                  }
                case 'None': {
                  const v11662 = v3903[1];
                  null;
                  const v11664 = {
                    Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    action: v3820,
                    index: v3932
                    };
                  const cv3822 = v3822;
                  const cv3823 = true;
                  const cv3824 = v11664;
                  const cv3825 = v4457;
                  const cv3828 = v3828;
                  
                  v3822 = cv3822;
                  v3823 = cv3823;
                  v3824 = cv3824;
                  v3825 = cv3825;
                  v3828 = cv3828;
                  
                  continue;
                  break;
                  }
                case 'Stop': {
                  const v11670 = v3903[1];
                  null;
                  const v11672 = {
                    Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    action: v3820,
                    index: v3932
                    };
                  const cv3822 = v3822;
                  const cv3823 = true;
                  const cv3824 = v11672;
                  const cv3825 = v4457;
                  const cv3828 = v3828;
                  
                  v3822 = cv3822;
                  v3823 = cv3823;
                  v3824 = cv3824;
                  v3825 = cv3825;
                  v3828 = cv3828;
                  
                  continue;
                  break;
                  }
                }}
            else {
              switch (v3903[0]) {
                case 'AllocateFunds': {
                  const v11678 = v3903[1];
                  null;
                  const v11682 = {
                    Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    action: v3820,
                    index: v3932
                    };
                  const cv3822 = v3822;
                  const cv3823 = true;
                  const cv3824 = v11682;
                  const cv3825 = v4457;
                  const cv3828 = v3828;
                  
                  v3822 = cv3822;
                  v3823 = cv3823;
                  v3824 = cv3824;
                  v3825 = cv3825;
                  v3828 = cv3828;
                  
                  continue;
                  break;
                  }
                case 'ChangeAdmin': {
                  const v11688 = v3903[1];
                  null;
                  const v11695 = {
                    Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    action: v3820,
                    index: v3932
                    };
                  const cv3822 = v3822;
                  const cv3823 = true;
                  const cv3824 = v11695;
                  const cv3825 = v4457;
                  const cv3828 = v3828;
                  
                  v3822 = cv3822;
                  v3823 = cv3823;
                  v3824 = cv3824;
                  v3825 = cv3825;
                  v3828 = cv3828;
                  
                  continue;
                  break;
                  }
                case 'EjectMember': {
                  const v11701 = v3903[1];
                  null;
                  const v11703 = {
                    Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    action: v3820,
                    index: v3932
                    };
                  const cv3822 = v3822;
                  const cv3823 = true;
                  const cv3824 = v11703;
                  const cv3825 = v4457;
                  const cv3828 = v3828;
                  
                  v3822 = cv3822;
                  v3823 = cv3823;
                  v3824 = cv3824;
                  v3825 = cv3825;
                  v3828 = cv3828;
                  
                  continue;
                  break;
                  }
                case 'None': {
                  const v11709 = v3903[1];
                  null;
                  const v11711 = {
                    Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    action: v3820,
                    index: v3932
                    };
                  const cv3822 = v3822;
                  const cv3823 = true;
                  const cv3824 = v11711;
                  const cv3825 = v4457;
                  const cv3828 = v3828;
                  
                  v3822 = cv3822;
                  v3823 = cv3823;
                  v3824 = cv3824;
                  v3825 = cv3825;
                  v3828 = cv3828;
                  
                  continue;
                  break;
                  }
                case 'Stop': {
                  const v11717 = v3903[1];
                  null;
                  const v11719 = {
                    Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    action: v3820,
                    index: v3932
                    };
                  const cv3822 = v3822;
                  const cv3823 = true;
                  const cv3824 = v11719;
                  const cv3825 = v4457;
                  const cv3828 = v3828;
                  
                  v3822 = cv3822;
                  v3823 = cv3823;
                  v3824 = cv3824;
                  v3825 = cv3825;
                  v3828 = cv3828;
                  
                  continue;
                  break;
                  }
                }}}}
        else {
          const v11725 = {
            Against: v11113,
            For: v11112,
            action: v3903,
            index: v3932
            };
          const cv3822 = v3822;
          const cv3823 = true;
          const cv3824 = v11725;
          const cv3825 = v4457;
          const cv3828 = v3828;
          
          v3822 = cv3822;
          v3823 = cv3823;
          v3824 = cv3824;
          v3825 = cv3825;
          v3828 = cv3828;
          
          continue;}
        break;
        }
      }
    
    }
  const v11731 = v3822.admin;
  const v11780 = stdlib.sub(v3828, v3828);
  const v11781 = stdlib.ge(v11780, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:352:25:application', stdlib.UInt_max, '0'));
  stdlib.assert(v11781, {
    at: './dao/contracts/dao-core.rsh:352:25:application',
    fs: [],
    msg: 'assume >= 0',
    who: 'Founder'
    });
  ;
  const v11785 = (stdlib.le(await ctc.getBalance(), v11780) ? stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:353:29:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(), v11780));
  const v11786 = stdlib.add(v11785, v11780);
  const v11791 = stdlib.sub(v11786, v11785);
  const v11792 = stdlib.ge(v11791, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:353:35:application', stdlib.UInt_max, '0'));
  stdlib.assert(v11792, {
    at: './dao/contracts/dao-core.rsh:353:35:application',
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
  const ctc6 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Struct([['admin', ctc4], ['registerSelf', ctc7], ['fee', ctc1], ['quorum', ctc1], ['openTreasury', ctc7]]);
  const ctc9 = stdlib.T_Data({
    AllocateFunds: ctc6,
    ChangeAdmin: ctc8,
    EjectMember: ctc4,
    None: ctc0,
    Stop: ctc0
    });
  const ctc10 = stdlib.T_Object({
    admin: ctc4,
    fee: ctc1,
    openTreasury: ctc7,
    quorum: ctc1,
    registerSelf: ctc7
    });
  const ctc11 = stdlib.T_Object({
    Against: ctc1,
    For: ctc1,
    action: ctc9,
    index: ctc1
    });
  const ctc12 = stdlib.T_Tuple([ctc4]);
  const ctc13 = stdlib.T_Tuple([ctc1]);
  const ctc14 = stdlib.T_Tuple([ctc7]);
  const ctc15 = stdlib.T_Tuple([ctc9]);
  const ctc16 = stdlib.T_Data({
    Against: ctc0,
    For: ctc0
    });
  const ctc17 = stdlib.T_Tuple([ctc16]);
  const ctc18 = stdlib.T_Data({
    addMember0_334: ctc12,
    donate0_334: ctc13,
    eject0_334: ctc12,
    joinLeave0_334: ctc14,
    registerProposal0_334: ctc15,
    voteProposal0_334: ctc17
    });
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v3798, v3799, v3812, v3820, v3822, v3824, v3828, v3897, v3898, v3899, v3900, v3901, v3903, v3932, v3933, v3934] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc1, ctc9, ctc10, ctc11, ctc1, ctc4, ctc1, ctc7, ctc1, ctc7, ctc9, ctc1, ctc7, ctc1]);
  const v3943 = stdlib.protect(ctc12, await interact.in(), {
    at: './dao/contracts/dao-core.rsh:1:23:application',
    fs: ['at ./dao/contracts/dao-core.rsh:196:36:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:196:36:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to "runaddMember0_334" (defined at: ./dao/contracts/dao-core.rsh:196:10:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:169:50:function exp)'],
    msg: 'in',
    who: 'addMember'
    });
  const v3944 = v3943[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v3946 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v3944), null);
  const v3947 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v3948 = stdlib.fromSome(v3946, v3947);
  const v3949 = v3948[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:98:11:array', stdlib.UInt_max, '0')];
  const v3951 = stdlib.ge(v3949, v3934);
  stdlib.assert(v3951, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./dao/contracts/dao-core.rsh:197:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:196:36:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:196:36:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to "runaddMember0_334" (defined at: ./dao/contracts/dao-core.rsh:196:10:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:169:50:function exp)'],
    msg: 'User is below Citizen Rank threshold',
    who: 'addMember'
    });
  let v3954;
  switch (v3946[0]) {
    case 'None': {
      const v3955 = v3946[1];
      v3954 = true;
      
      break;
      }
    case 'Some': {
      const v3956 = v3946[1];
      v3954 = false;
      
      break;
      }
    }
  stdlib.assert(v3954, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./dao/contracts/dao-core.rsh:198:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:196:36:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:196:36:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to "runaddMember0_334" (defined at: ./dao/contracts/dao-core.rsh:196:10:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:169:50:function exp)'],
    msg: 'Address is already a member',
    who: 'addMember'
    });
  const v3963 = ['addMember0_334', v3943];
  
  let v4419;
  switch (v3946[0]) {
    case 'None': {
      const v4420 = v3946[1];
      v4419 = true;
      
      break;
      }
    case 'Some': {
      const v4421 = v3946[1];
      v4419 = false;
      
      break;
      }
    }
  stdlib.assert(v4419, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./dao/contracts/dao-core.rsh:198:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:196:36:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:196:36:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:196:36:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:169:50:function exp)'],
    msg: 'Address is already a member',
    who: 'addMember'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v3798, v3799, v3812, v3820, v3822, v3824, v3828, v3897, v3898, v3899, v3900, v3901, v3903, v3932, v3933, v3934, v3963],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [v3898, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v4456], secs: v4458, time: v4457, didSend: v2511, from: v4455 } = txn1;
      
      switch (v4456[0]) {
        case 'addMember0_334': {
          const v4459 = v4456[1];
          sim_r.txns.push({
            kind: 'api',
            who: "addMember"
            });
          const v4464 = v4459[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:196:10:spread', stdlib.UInt_max, '0')];
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v4464), null);
          const v4510 = stdlib.add(v3828, v3898);
          sim_r.txns.push({
            amt: v3898,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v4530 = [v3934, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 0, v4464, v4530);
          null;
          const v4532 = null;
          const v4533 = await txn1.getOutput('addMember', 'v4532', ctc0, v4532);
          
          const v18522 = v3822;
          const v18524 = v3824;
          const v18526 = v4510;
          const v18527 = v3822.admin;
          const v18528 = v3822.fee;
          const v18529 = v3822.openTreasury;
          const v18530 = v3822.quorum;
          const v18531 = v3822.registerSelf;
          const v18532 = v3824.action;
          const v18533 = v3824.index;
          const v18534 = stdlib.ge(v18533, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
          let v18535;
          if (v18534) {
            const v18536 = stdlib.mod(v18533, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
            const v18537 = stdlib.sub(v18533, v18536);
            const v18538 = stdlib.div(v18537, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
            v18535 = v18538;
            }
          else {
            v18535 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
            }
          sim_r.isHalt = false;
          
          break;
          }
        case 'donate0_334': {
          const v5671 = v4456[1];
          
          break;
          }
        case 'eject0_334': {
          const v6883 = v4456[1];
          
          break;
          }
        case 'joinLeave0_334': {
          const v8095 = v4456[1];
          
          break;
          }
        case 'registerProposal0_334': {
          const v9307 = v4456[1];
          
          break;
          }
        case 'voteProposal0_334': {
          const v10519 = v4456[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc1, ctc9, ctc10, ctc11, ctc1, ctc4, ctc1, ctc7, ctc1, ctc7, ctc9, ctc1, ctc7, ctc1, ctc18],
    waitIfNotPresent: false
    }));
  const {data: [v4456], secs: v4458, time: v4457, didSend: v2511, from: v4455 } = txn1;
  switch (v4456[0]) {
    case 'addMember0_334': {
      const v4459 = v4456[1];
      undefined /* setApiDetails */;
      const v4464 = v4459[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:196:10:spread', stdlib.UInt_max, '0')];
      const v4465 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4464), null);
      const v4466 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v4467 = stdlib.fromSome(v4465, v4466);
      const v4468 = v4467[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:98:11:array', stdlib.UInt_max, '0')];
      const v4470 = stdlib.ge(v4468, v3934);
      stdlib.assert(v4470, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./dao/contracts/dao-core.rsh:197:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:196:36:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:196:36:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:196:36:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:169:50:function exp)'],
        msg: 'User is below Citizen Rank threshold',
        who: 'addMember'
        });
      let v4473;
      switch (v4465[0]) {
        case 'None': {
          const v4474 = v4465[1];
          v4473 = true;
          
          break;
          }
        case 'Some': {
          const v4475 = v4465[1];
          v4473 = false;
          
          break;
          }
        }
      stdlib.assert(v4473, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./dao/contracts/dao-core.rsh:198:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:196:36:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:196:36:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:196:36:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:169:50:function exp)'],
        msg: 'Address is already a member',
        who: 'addMember'
        });
      const v4510 = stdlib.add(v3828, v3898);
      const v4511 = stdlib.le(v4510, stdlib.UInt_max);
      stdlib.assert(v4511, {
        at: './dao/contracts/dao-core.rsh:169:50:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'addMember'
        });
      ;
      let v4525;
      switch (v4465[0]) {
        case 'None': {
          const v4526 = v4465[1];
          v4525 = true;
          
          break;
          }
        case 'Some': {
          const v4527 = v4465[1];
          v4525 = false;
          
          break;
          }
        }
      stdlib.assert(v4525, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./dao/contracts/dao-core.rsh:198:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:203:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:203:13:function exp)'],
        msg: 'Address is already a member',
        who: 'addMember'
        });
      const v4530 = [v3934, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      await stdlib.mapSet(map0, v4464, v4530);
      null;
      const v4532 = null;
      const v4533 = await txn1.getOutput('addMember', 'v4532', ctc0, v4532);
      if (v2511) {
        stdlib.protect(ctc0, await interact.out(v4459, v4533), {
          at: './dao/contracts/dao-core.rsh:196:11:application',
          fs: ['at ./dao/contracts/dao-core.rsh:196:11:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:196:11:function exp)', 'at ./dao/contracts/dao-core.rsh:205:12:application call to "k" (defined at: ./dao/contracts/dao-core.rsh:203:13:function exp)', 'at ./dao/contracts/dao-core.rsh:203:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:203:13:function exp)'],
          msg: 'out',
          who: 'addMember'
          });
        }
      else {
        }
      
      const v18522 = v3822;
      const v18524 = v3824;
      const v18526 = v4510;
      const v18527 = v3822.admin;
      const v18528 = v3822.fee;
      const v18529 = v3822.openTreasury;
      const v18530 = v3822.quorum;
      const v18531 = v3822.registerSelf;
      const v18532 = v3824.action;
      const v18533 = v3824.index;
      const v18534 = stdlib.ge(v18533, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
      let v18535;
      if (v18534) {
        const v18536 = stdlib.mod(v18533, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
        const v18537 = stdlib.sub(v18533, v18536);
        const v18538 = stdlib.div(v18537, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
        v18535 = v18538;
        }
      else {
        v18535 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
        }
      return;
      
      break;
      }
    case 'donate0_334': {
      const v5671 = v4456[1];
      return;
      break;
      }
    case 'eject0_334': {
      const v6883 = v4456[1];
      return;
      break;
      }
    case 'joinLeave0_334': {
      const v8095 = v4456[1];
      return;
      break;
      }
    case 'registerProposal0_334': {
      const v9307 = v4456[1];
      return;
      break;
      }
    case 'voteProposal0_334': {
      const v10519 = v4456[1];
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
  const ctc6 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Struct([['admin', ctc4], ['registerSelf', ctc7], ['fee', ctc1], ['quorum', ctc1], ['openTreasury', ctc7]]);
  const ctc9 = stdlib.T_Data({
    AllocateFunds: ctc6,
    ChangeAdmin: ctc8,
    EjectMember: ctc4,
    None: ctc0,
    Stop: ctc0
    });
  const ctc10 = stdlib.T_Object({
    admin: ctc4,
    fee: ctc1,
    openTreasury: ctc7,
    quorum: ctc1,
    registerSelf: ctc7
    });
  const ctc11 = stdlib.T_Object({
    Against: ctc1,
    For: ctc1,
    action: ctc9,
    index: ctc1
    });
  const ctc12 = stdlib.T_Tuple([ctc1]);
  const ctc13 = stdlib.T_Tuple([ctc4]);
  const ctc14 = stdlib.T_Tuple([ctc7]);
  const ctc15 = stdlib.T_Tuple([ctc9]);
  const ctc16 = stdlib.T_Data({
    Against: ctc0,
    For: ctc0
    });
  const ctc17 = stdlib.T_Tuple([ctc16]);
  const ctc18 = stdlib.T_Data({
    addMember0_334: ctc13,
    donate0_334: ctc12,
    eject0_334: ctc13,
    joinLeave0_334: ctc14,
    registerProposal0_334: ctc15,
    voteProposal0_334: ctc17
    });
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v3798, v3799, v3812, v3820, v3822, v3824, v3828, v3897, v3898, v3899, v3900, v3901, v3903, v3932, v3933, v3934] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc1, ctc9, ctc10, ctc11, ctc1, ctc4, ctc1, ctc7, ctc1, ctc7, ctc9, ctc1, ctc7, ctc1]);
  const v3967 = stdlib.protect(ctc12, await interact.in(), {
    at: './dao/contracts/dao-core.rsh:1:23:application',
    fs: ['at ./dao/contracts/dao-core.rsh:212:33:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:212:33:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to "rundonate0_334" (defined at: ./dao/contracts/dao-core.rsh:212:10:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:169:50:function exp)'],
    msg: 'in',
    who: 'donate'
    });
  const v3968 = v3967[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v3972 = stdlib.sub(stdlib.UInt_max, v3968);
  const v3973 = stdlib.lt(v3828, v3972);
  stdlib.assert(v3973, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./dao/contracts/dao-core.rsh:213:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:212:33:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:212:33:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to "rundonate0_334" (defined at: ./dao/contracts/dao-core.rsh:212:10:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:169:50:function exp)'],
    msg: 'Donation is too generous',
    who: 'donate'
    });
  const v3980 = ['donate0_334', v3967];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3798, v3799, v3812, v3820, v3822, v3824, v3828, v3897, v3898, v3899, v3900, v3901, v3903, v3932, v3933, v3934, v3980],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [v3968, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v4456], secs: v4458, time: v4457, didSend: v2511, from: v4455 } = txn1;
      
      switch (v4456[0]) {
        case 'addMember0_334': {
          const v4459 = v4456[1];
          
          break;
          }
        case 'donate0_334': {
          const v5671 = v4456[1];
          sim_r.txns.push({
            kind: 'api',
            who: "donate"
            });
          const v5691 = v5671[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:212:10:spread', stdlib.UInt_max, '0')];
          const v5722 = stdlib.add(v3828, v5691);
          sim_r.txns.push({
            amt: v5691,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v5760 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v4455), null);
          let v5761;
          switch (v5760[0]) {
            case 'None': {
              const v5762 = v5760[1];
              v5761 = false;
              
              break;
              }
            case 'Some': {
              const v5763 = v5760[1];
              v5761 = true;
              
              break;
              }
            }
          if (v5761) {
            const v5765 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
            const v5766 = stdlib.fromSome(v5760, v5765);
            const v5767 = v5766[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:220:19:array', stdlib.UInt_max, '0')];
            const v5768 = v5766[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:220:19:array', stdlib.UInt_max, '1')];
            const v5770 = stdlib.sub(stdlib.UInt_max, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:222:36:decimal', stdlib.UInt_max, '1'));
            const v5771 = stdlib.lt(v5767, v5770);
            let v5772;
            if (v5771) {
              const v5775 = stdlib.add(v5767, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:223:30:decimal', stdlib.UInt_max, '1'));
              const v5776 = [v5775, v5768];
              v5772 = v5776;
              }
            else {
              const v5777 = stdlib.ge(v5767, v3934);
              const v5778 = v5777 ? v5767 : v3934;
              const v5779 = [v5778, v5768];
              v5772 = v5779;
              }
            await stdlib.simMapSet(sim_r, 0, v4455, v5772);
            const v5780 = null;
            const v5781 = await txn1.getOutput('donate', 'v5780', ctc0, v5780);
            
            const v19247 = v3822;
            const v19249 = v3824;
            const v19251 = v5722;
            const v19252 = v3822.admin;
            const v19253 = v3822.fee;
            const v19254 = v3822.openTreasury;
            const v19255 = v3822.quorum;
            const v19256 = v3822.registerSelf;
            const v19257 = v3824.action;
            const v19258 = v3824.index;
            const v19259 = stdlib.ge(v19258, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
            let v19260;
            if (v19259) {
              const v19261 = stdlib.mod(v19258, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
              const v19262 = stdlib.sub(v19258, v19261);
              const v19263 = stdlib.div(v19262, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
              v19260 = v19263;
              }
            else {
              v19260 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
              }
            sim_r.isHalt = false;
            }
          else {
            const v5788 = null;
            const v5789 = await txn1.getOutput('donate', 'v5788', ctc0, v5788);
            
            const v19276 = v3822;
            const v19278 = v3824;
            const v19280 = v5722;
            const v19281 = v3822.admin;
            const v19282 = v3822.fee;
            const v19283 = v3822.openTreasury;
            const v19284 = v3822.quorum;
            const v19285 = v3822.registerSelf;
            const v19286 = v3824.action;
            const v19287 = v3824.index;
            const v19288 = stdlib.ge(v19287, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
            let v19289;
            if (v19288) {
              const v19290 = stdlib.mod(v19287, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
              const v19291 = stdlib.sub(v19287, v19290);
              const v19292 = stdlib.div(v19291, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
              v19289 = v19292;
              }
            else {
              v19289 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
              }
            sim_r.isHalt = false;
            }
          break;
          }
        case 'eject0_334': {
          const v6883 = v4456[1];
          
          break;
          }
        case 'joinLeave0_334': {
          const v8095 = v4456[1];
          
          break;
          }
        case 'registerProposal0_334': {
          const v9307 = v4456[1];
          
          break;
          }
        case 'voteProposal0_334': {
          const v10519 = v4456[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc1, ctc9, ctc10, ctc11, ctc1, ctc4, ctc1, ctc7, ctc1, ctc7, ctc9, ctc1, ctc7, ctc1, ctc18],
    waitIfNotPresent: false
    }));
  const {data: [v4456], secs: v4458, time: v4457, didSend: v2511, from: v4455 } = txn1;
  switch (v4456[0]) {
    case 'addMember0_334': {
      const v4459 = v4456[1];
      return;
      break;
      }
    case 'donate0_334': {
      const v5671 = v4456[1];
      undefined /* setApiDetails */;
      const v5691 = v5671[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:212:10:spread', stdlib.UInt_max, '0')];
      const v5694 = stdlib.sub(stdlib.UInt_max, v5691);
      const v5695 = stdlib.lt(v3828, v5694);
      stdlib.assert(v5695, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./dao/contracts/dao-core.rsh:213:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:212:33:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:212:33:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:212:33:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:169:50:function exp)'],
        msg: 'Donation is too generous',
        who: 'donate'
        });
      const v5722 = stdlib.add(v3828, v5691);
      const v5723 = stdlib.le(v5722, stdlib.UInt_max);
      stdlib.assert(v5723, {
        at: './dao/contracts/dao-core.rsh:169:50:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'donate'
        });
      ;
      const v5757 = stdlib.lt(v5722, v5694);
      stdlib.assert(v5757, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./dao/contracts/dao-core.rsh:213:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:218:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:218:13:function exp)'],
        msg: 'Donation is too generous',
        who: 'donate'
        });
      const v5760 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4455), null);
      let v5761;
      switch (v5760[0]) {
        case 'None': {
          const v5762 = v5760[1];
          v5761 = false;
          
          break;
          }
        case 'Some': {
          const v5763 = v5760[1];
          v5761 = true;
          
          break;
          }
        }
      if (v5761) {
        const v5765 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v5766 = stdlib.fromSome(v5760, v5765);
        const v5767 = v5766[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:220:19:array', stdlib.UInt_max, '0')];
        const v5768 = v5766[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:220:19:array', stdlib.UInt_max, '1')];
        const v5770 = stdlib.sub(stdlib.UInt_max, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:222:36:decimal', stdlib.UInt_max, '1'));
        const v5771 = stdlib.lt(v5767, v5770);
        let v5772;
        if (v5771) {
          const v5775 = stdlib.add(v5767, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:223:30:decimal', stdlib.UInt_max, '1'));
          const v5776 = [v5775, v5768];
          v5772 = v5776;
          }
        else {
          const v5777 = stdlib.ge(v5767, v3934);
          const v5778 = v5777 ? v5767 : v3934;
          const v5779 = [v5778, v5768];
          v5772 = v5779;
          }
        await stdlib.mapSet(map0, v4455, v5772);
        const v5780 = null;
        const v5781 = await txn1.getOutput('donate', 'v5780', ctc0, v5780);
        if (v2511) {
          stdlib.protect(ctc0, await interact.out(v5671, v5781), {
            at: './dao/contracts/dao-core.rsh:212:11:application',
            fs: ['at ./dao/contracts/dao-core.rsh:212:11:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:212:11:function exp)', 'at ./dao/contracts/dao-core.rsh:226:12:application call to "k" (defined at: ./dao/contracts/dao-core.rsh:218:13:function exp)', 'at ./dao/contracts/dao-core.rsh:218:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:218:13:function exp)'],
            msg: 'out',
            who: 'donate'
            });
          }
        else {
          }
        
        const v19247 = v3822;
        const v19249 = v3824;
        const v19251 = v5722;
        const v19252 = v3822.admin;
        const v19253 = v3822.fee;
        const v19254 = v3822.openTreasury;
        const v19255 = v3822.quorum;
        const v19256 = v3822.registerSelf;
        const v19257 = v3824.action;
        const v19258 = v3824.index;
        const v19259 = stdlib.ge(v19258, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
        let v19260;
        if (v19259) {
          const v19261 = stdlib.mod(v19258, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
          const v19262 = stdlib.sub(v19258, v19261);
          const v19263 = stdlib.div(v19262, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
          v19260 = v19263;
          }
        else {
          v19260 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
          }
        return;
        }
      else {
        const v5788 = null;
        const v5789 = await txn1.getOutput('donate', 'v5788', ctc0, v5788);
        if (v2511) {
          stdlib.protect(ctc0, await interact.out(v5671, v5789), {
            at: './dao/contracts/dao-core.rsh:212:11:application',
            fs: ['at ./dao/contracts/dao-core.rsh:212:11:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:212:11:function exp)', 'at ./dao/contracts/dao-core.rsh:226:12:application call to "k" (defined at: ./dao/contracts/dao-core.rsh:218:13:function exp)', 'at ./dao/contracts/dao-core.rsh:218:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:218:13:function exp)'],
            msg: 'out',
            who: 'donate'
            });
          }
        else {
          }
        
        const v19276 = v3822;
        const v19278 = v3824;
        const v19280 = v5722;
        const v19281 = v3822.admin;
        const v19282 = v3822.fee;
        const v19283 = v3822.openTreasury;
        const v19284 = v3822.quorum;
        const v19285 = v3822.registerSelf;
        const v19286 = v3824.action;
        const v19287 = v3824.index;
        const v19288 = stdlib.ge(v19287, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
        let v19289;
        if (v19288) {
          const v19290 = stdlib.mod(v19287, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
          const v19291 = stdlib.sub(v19287, v19290);
          const v19292 = stdlib.div(v19291, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
          v19289 = v19292;
          }
        else {
          v19289 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
          }
        return;
        }
      break;
      }
    case 'eject0_334': {
      const v6883 = v4456[1];
      return;
      break;
      }
    case 'joinLeave0_334': {
      const v8095 = v4456[1];
      return;
      break;
      }
    case 'registerProposal0_334': {
      const v9307 = v4456[1];
      return;
      break;
      }
    case 'voteProposal0_334': {
      const v10519 = v4456[1];
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
  const ctc6 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Struct([['admin', ctc4], ['registerSelf', ctc7], ['fee', ctc1], ['quorum', ctc1], ['openTreasury', ctc7]]);
  const ctc9 = stdlib.T_Data({
    AllocateFunds: ctc6,
    ChangeAdmin: ctc8,
    EjectMember: ctc4,
    None: ctc0,
    Stop: ctc0
    });
  const ctc10 = stdlib.T_Object({
    admin: ctc4,
    fee: ctc1,
    openTreasury: ctc7,
    quorum: ctc1,
    registerSelf: ctc7
    });
  const ctc11 = stdlib.T_Object({
    Against: ctc1,
    For: ctc1,
    action: ctc9,
    index: ctc1
    });
  const ctc12 = stdlib.T_Tuple([ctc4]);
  const ctc13 = stdlib.T_Tuple([ctc1]);
  const ctc14 = stdlib.T_Tuple([ctc7]);
  const ctc15 = stdlib.T_Tuple([ctc9]);
  const ctc16 = stdlib.T_Data({
    Against: ctc0,
    For: ctc0
    });
  const ctc17 = stdlib.T_Tuple([ctc16]);
  const ctc18 = stdlib.T_Data({
    addMember0_334: ctc12,
    donate0_334: ctc13,
    eject0_334: ctc12,
    joinLeave0_334: ctc14,
    registerProposal0_334: ctc15,
    voteProposal0_334: ctc17
    });
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v3798, v3799, v3812, v3820, v3822, v3824, v3828, v3897, v3898, v3899, v3900, v3901, v3903, v3932, v3933, v3934] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc1, ctc9, ctc10, ctc11, ctc1, ctc4, ctc1, ctc7, ctc1, ctc7, ctc9, ctc1, ctc7, ctc1]);
  const v3982 = ctc.selfAddress();
  const v3984 = stdlib.protect(ctc12, await interact.in(), {
    at: './dao/contracts/dao-core.rsh:1:23:application',
    fs: ['at ./dao/contracts/dao-core.rsh:233:32:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:233:32:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to "runeject0_334" (defined at: ./dao/contracts/dao-core.rsh:233:10:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:169:50:function exp)'],
    msg: 'in',
    who: 'eject'
    });
  const v3985 = v3984[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v3987 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v3985), null);
  let v3988;
  switch (v3987[0]) {
    case 'None': {
      const v3989 = v3987[1];
      v3988 = false;
      
      break;
      }
    case 'Some': {
      const v3990 = v3987[1];
      v3988 = true;
      
      break;
      }
    }
  const v3992 = stdlib.addressEq(v3985, v3897);
  const v3993 = v3992 ? false : true;
  const v3994 = v3988 ? v3993 : false;
  const v3995 = stdlib.addressEq(v3982, v3985);
  const v3996 = v3995 ? false : true;
  stdlib.assert(v3996, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./dao/contracts/dao-core.rsh:236:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:233:32:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:233:32:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to "runeject0_334" (defined at: ./dao/contracts/dao-core.rsh:233:10:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:169:50:function exp)'],
    msg: 'Use \'Leave\' API to exit',
    who: 'eject'
    });
  let v3999;
  switch (v3987[0]) {
    case 'None': {
      const v4000 = v3987[1];
      v3999 = false;
      
      break;
      }
    case 'Some': {
      const v4001 = v3987[1];
      v3999 = true;
      
      break;
      }
    }
  stdlib.assert(v3999, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./dao/contracts/dao-core.rsh:237:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:233:32:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:233:32:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to "runeject0_334" (defined at: ./dao/contracts/dao-core.rsh:233:10:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:169:50:function exp)'],
    msg: 'Address is not a member',
    who: 'eject'
    });
  stdlib.assert(v3994, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./dao/contracts/dao-core.rsh:238:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:233:32:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:233:32:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to "runeject0_334" (defined at: ./dao/contracts/dao-core.rsh:233:10:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:169:50:function exp)'],
    msg: 'Requires ChangeAdmin proposal',
    who: 'eject'
    });
  const v4005 = stdlib.addressEq(v3982, v3897);
  if (v4005) {
    }
  else {
    const v4010 = stdlib.sub(stdlib.UInt_max, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:242:35:decimal', stdlib.UInt_max, '1'));
    const v4011 = stdlib.le(v3932, v4010);
    stdlib.assert(v4011, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./dao/contracts/dao-core.rsh:242:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:233:32:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:233:32:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to "runeject0_334" (defined at: ./dao/contracts/dao-core.rsh:233:10:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:169:50:function exp)'],
      msg: 'Proposals Limit reached',
      who: 'eject'
      });
    let v4013;
    switch (v3903[0]) {
      case 'AllocateFunds': {
        const v4014 = v3903[1];
        const v4015 = v4014[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:76:21:array', stdlib.UInt_max, '0')];
        const v4016 = v4014[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:76:21:array', stdlib.UInt_max, '1')];
        const v4018 = stdlib.lt(v4016, v3828);
        const v4019 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4015), null);
        let v4020;
        switch (v4019[0]) {
          case 'None': {
            const v4021 = v4019[1];
            v4020 = false;
            
            break;
            }
          case 'Some': {
            const v4022 = v4019[1];
            v4020 = true;
            
            break;
            }
          }
        const v4023 = v4020 ? v4018 : false;
        const v4025 = v3899 ? v4018 : v4023;
        v4013 = v4025;
        
        break;
        }
      case 'ChangeAdmin': {
        const v4026 = v3903[1];
        const v4027 = v4026.admin;
        const v4028 = v4026.fee;
        const v4030 = v4026.quorum;
        const v4032 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4027), null);
        const v4033 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v4034 = stdlib.fromSome(v4032, v4033);
        const v4035 = v4034[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:84:13:array', stdlib.UInt_max, '0')];
        let v4038;
        switch (v4032[0]) {
          case 'None': {
            const v4039 = v4032[1];
            v4038 = false;
            
            break;
            }
          case 'Some': {
            const v4040 = v4032[1];
            v4038 = true;
            
            break;
            }
          }
        const v4041 = stdlib.gt(v4035, v3934);
        const v4042 = v4038 ? v4041 : false;
        const v4043 = stdlib.gt(v4030, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:86:34:decimal', stdlib.UInt_max, '0'));
        let v4044;
        if (v4043) {
          const v4047 = stdlib.lt(v4030, v3812);
          v4044 = v4047;
          }
        else {
          v4044 = false;
          }
        const v4048 = stdlib.gt(v4028, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:87:33:decimal', stdlib.UInt_max, '0'));
        const v4049 = stdlib.lt(v4028, stdlib.UInt_max);
        const v4050 = v4048 ? v4049 : false;
        const v4051 = v4042 ? v4044 : false;
        const v4052 = v4051 ? v4050 : false;
        v4013 = v4052;
        
        break;
        }
      case 'EjectMember': {
        const v4053 = v3903[1];
        const v4054 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4053), null);
        let v4055;
        switch (v4054[0]) {
          case 'None': {
            const v4056 = v4054[1];
            v4055 = false;
            
            break;
            }
          case 'Some': {
            const v4057 = v4054[1];
            v4055 = true;
            
            break;
            }
          }
        const v4059 = stdlib.addressEq(v4053, v3897);
        const v4060 = v4059 ? false : true;
        const v4061 = v4055 ? v4060 : false;
        v4013 = v4061;
        
        break;
        }
      case 'None': {
        const v4062 = v3903[1];
        v4013 = false;
        
        break;
        }
      case 'Stop': {
        const v4063 = v3903[1];
        v4013 = true;
        
        break;
        }
      }
    stdlib.assert(v4013, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./dao/contracts/dao-core.rsh:243:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:233:32:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:233:32:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to "runeject0_334" (defined at: ./dao/contracts/dao-core.rsh:233:10:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:169:50:function exp)'],
      msg: 'A Proposal is already active.',
      who: 'eject'
      });
    }
  const v4070 = ['eject0_334', v3984];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3798, v3799, v3812, v3820, v3822, v3824, v3828, v3897, v3898, v3899, v3900, v3901, v3903, v3932, v3933, v3934, v4070],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:233:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v4456], secs: v4458, time: v4457, didSend: v2511, from: v4455 } = txn1;
      
      switch (v4456[0]) {
        case 'addMember0_334': {
          const v4459 = v4456[1];
          
          break;
          }
        case 'donate0_334': {
          const v5671 = v4456[1];
          
          break;
          }
        case 'eject0_334': {
          const v6883 = v4456[1];
          sim_r.txns.push({
            kind: 'api',
            who: "eject"
            });
          ;
          const v7009 = v6883[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:233:10:spread', stdlib.UInt_max, '0')];
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v7009), null);
          const v7028 = stdlib.addressEq(v4455, v3897);
          if (v7028) {
            const v7121 = null;
            const v7122 = await txn1.getOutput('eject', 'v7121', ctc0, v7121);
            
            await stdlib.simMapSet(sim_r, 0, v7009, undefined /* Nothing */);
            null;
            const v20001 = v3822;
            const v20003 = v3824;
            const v20005 = v3828;
            const v20006 = v3822.admin;
            const v20007 = v3822.fee;
            const v20008 = v3822.openTreasury;
            const v20009 = v3822.quorum;
            const v20010 = v3822.registerSelf;
            const v20011 = v3824.action;
            const v20012 = v3824.index;
            const v20013 = stdlib.ge(v20012, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
            let v20014;
            if (v20013) {
              const v20015 = stdlib.mod(v20012, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
              const v20016 = stdlib.sub(v20012, v20015);
              const v20017 = stdlib.div(v20016, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
              v20014 = v20017;
              }
            else {
              v20014 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
              }
            sim_r.isHalt = false;
            }
          else {
            switch (v3903[0]) {
              case 'AllocateFunds': {
                const v7037 = v3903[1];
                const v7038 = v7037[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:76:21:array', stdlib.UInt_max, '0')];
                stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v7038), null);
                
                break;
                }
              case 'ChangeAdmin': {
                const v7049 = v3903[1];
                const v7050 = v7049.admin;
                stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v7050), null);
                
                break;
                }
              case 'EjectMember': {
                const v7076 = v3903[1];
                stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v7076), null);
                
                break;
                }
              case 'None': {
                const v7085 = v3903[1];
                
                break;
                }
              case 'Stop': {
                const v7086 = v3903[1];
                
                break;
                }
              }
            const v7089 = null;
            const v7090 = await txn1.getOutput('eject', 'v7089', ctc0, v7089);
            
            const v7107 = stdlib.add(v3932, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:163:30:decimal', stdlib.UInt_max, '1'));
            const v7108 = ['EjectMember', v7009];
            const v7109 = {
              Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
              For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
              action: v7108,
              index: v7107
              };
            const v20030 = v3822;
            const v20032 = v7109;
            const v20034 = v3828;
            const v20035 = v3822.admin;
            const v20036 = v3822.fee;
            const v20037 = v3822.openTreasury;
            const v20038 = v3822.quorum;
            const v20039 = v3822.registerSelf;
            const v20040 = v7109.action;
            const v20041 = v7109.index;
            const v20042 = stdlib.ge(v20041, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
            let v20043;
            if (v20042) {
              const v20044 = stdlib.mod(v20041, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
              const v20045 = stdlib.sub(v20041, v20044);
              const v20046 = stdlib.div(v20045, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
              v20043 = v20046;
              }
            else {
              v20043 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
              }
            sim_r.isHalt = false;
            }
          break;
          }
        case 'joinLeave0_334': {
          const v8095 = v4456[1];
          
          break;
          }
        case 'registerProposal0_334': {
          const v9307 = v4456[1];
          
          break;
          }
        case 'voteProposal0_334': {
          const v10519 = v4456[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc1, ctc9, ctc10, ctc11, ctc1, ctc4, ctc1, ctc7, ctc1, ctc7, ctc9, ctc1, ctc7, ctc1, ctc18],
    waitIfNotPresent: false
    }));
  const {data: [v4456], secs: v4458, time: v4457, didSend: v2511, from: v4455 } = txn1;
  switch (v4456[0]) {
    case 'addMember0_334': {
      const v4459 = v4456[1];
      return;
      break;
      }
    case 'donate0_334': {
      const v5671 = v4456[1];
      return;
      break;
      }
    case 'eject0_334': {
      const v6883 = v4456[1];
      undefined /* setApiDetails */;
      const v6935 = stdlib.le(v3828, stdlib.UInt_max);
      stdlib.assert(v6935, {
        at: './dao/contracts/dao-core.rsh:169:50:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'eject'
        });
      ;
      const v7009 = v6883[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:233:10:spread', stdlib.UInt_max, '0')];
      const v7010 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v7009), null);
      let v7011;
      switch (v7010[0]) {
        case 'None': {
          const v7012 = v7010[1];
          v7011 = false;
          
          break;
          }
        case 'Some': {
          const v7013 = v7010[1];
          v7011 = true;
          
          break;
          }
        }
      const v7015 = stdlib.addressEq(v7009, v3897);
      const v7016 = v7015 ? false : true;
      const v7017 = v7011 ? v7016 : false;
      const v7018 = stdlib.addressEq(v4455, v7009);
      const v7019 = v7018 ? false : true;
      stdlib.assert(v7019, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./dao/contracts/dao-core.rsh:236:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:250:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:250:13:function exp)'],
        msg: 'Use \'Leave\' API to exit',
        who: 'eject'
        });
      let v7022;
      switch (v7010[0]) {
        case 'None': {
          const v7023 = v7010[1];
          v7022 = false;
          
          break;
          }
        case 'Some': {
          const v7024 = v7010[1];
          v7022 = true;
          
          break;
          }
        }
      stdlib.assert(v7022, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./dao/contracts/dao-core.rsh:237:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:250:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:250:13:function exp)'],
        msg: 'Address is not a member',
        who: 'eject'
        });
      stdlib.assert(v7017, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./dao/contracts/dao-core.rsh:238:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:250:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:250:13:function exp)'],
        msg: 'Requires ChangeAdmin proposal',
        who: 'eject'
        });
      const v7028 = stdlib.addressEq(v4455, v3897);
      if (v7028) {
        const v7121 = null;
        const v7122 = await txn1.getOutput('eject', 'v7121', ctc0, v7121);
        if (v2511) {
          stdlib.protect(ctc0, await interact.out(v6883, v7122), {
            at: './dao/contracts/dao-core.rsh:233:11:application',
            fs: ['at ./dao/contracts/dao-core.rsh:233:11:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:233:11:function exp)', 'at ./dao/contracts/dao-core.rsh:251:12:application call to "k" (defined at: ./dao/contracts/dao-core.rsh:250:13:function exp)', 'at ./dao/contracts/dao-core.rsh:250:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:250:13:function exp)'],
            msg: 'out',
            who: 'eject'
            });
          }
        else {
          }
        
        await stdlib.mapSet(map0, v7009, undefined /* Nothing */);
        null;
        const v20001 = v3822;
        const v20003 = v3824;
        const v20005 = v3828;
        const v20006 = v3822.admin;
        const v20007 = v3822.fee;
        const v20008 = v3822.openTreasury;
        const v20009 = v3822.quorum;
        const v20010 = v3822.registerSelf;
        const v20011 = v3824.action;
        const v20012 = v3824.index;
        const v20013 = stdlib.ge(v20012, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
        let v20014;
        if (v20013) {
          const v20015 = stdlib.mod(v20012, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
          const v20016 = stdlib.sub(v20012, v20015);
          const v20017 = stdlib.div(v20016, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
          v20014 = v20017;
          }
        else {
          v20014 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
          }
        return;
        }
      else {
        const v7033 = stdlib.sub(stdlib.UInt_max, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:242:35:decimal', stdlib.UInt_max, '1'));
        const v7034 = stdlib.le(v3932, v7033);
        stdlib.assert(v7034, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./dao/contracts/dao-core.rsh:242:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:250:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:250:13:function exp)'],
          msg: 'Proposals Limit reached',
          who: 'eject'
          });
        let v7036;
        switch (v3903[0]) {
          case 'AllocateFunds': {
            const v7037 = v3903[1];
            const v7038 = v7037[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:76:21:array', stdlib.UInt_max, '0')];
            const v7039 = v7037[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:76:21:array', stdlib.UInt_max, '1')];
            const v7041 = stdlib.lt(v7039, v3828);
            const v7042 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v7038), null);
            let v7043;
            switch (v7042[0]) {
              case 'None': {
                const v7044 = v7042[1];
                v7043 = false;
                
                break;
                }
              case 'Some': {
                const v7045 = v7042[1];
                v7043 = true;
                
                break;
                }
              }
            const v7046 = v7043 ? v7041 : false;
            const v7048 = v3899 ? v7041 : v7046;
            v7036 = v7048;
            
            break;
            }
          case 'ChangeAdmin': {
            const v7049 = v3903[1];
            const v7050 = v7049.admin;
            const v7051 = v7049.fee;
            const v7053 = v7049.quorum;
            const v7055 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v7050), null);
            const v7056 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
            const v7057 = stdlib.fromSome(v7055, v7056);
            const v7058 = v7057[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:84:13:array', stdlib.UInt_max, '0')];
            let v7061;
            switch (v7055[0]) {
              case 'None': {
                const v7062 = v7055[1];
                v7061 = false;
                
                break;
                }
              case 'Some': {
                const v7063 = v7055[1];
                v7061 = true;
                
                break;
                }
              }
            const v7064 = stdlib.gt(v7058, v3934);
            const v7065 = v7061 ? v7064 : false;
            const v7066 = stdlib.gt(v7053, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:86:34:decimal', stdlib.UInt_max, '0'));
            let v7067;
            if (v7066) {
              const v7070 = stdlib.lt(v7053, v3812);
              v7067 = v7070;
              }
            else {
              v7067 = false;
              }
            const v7071 = stdlib.gt(v7051, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:87:33:decimal', stdlib.UInt_max, '0'));
            const v7072 = stdlib.lt(v7051, stdlib.UInt_max);
            const v7073 = v7071 ? v7072 : false;
            const v7074 = v7065 ? v7067 : false;
            const v7075 = v7074 ? v7073 : false;
            v7036 = v7075;
            
            break;
            }
          case 'EjectMember': {
            const v7076 = v3903[1];
            const v7077 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v7076), null);
            let v7078;
            switch (v7077[0]) {
              case 'None': {
                const v7079 = v7077[1];
                v7078 = false;
                
                break;
                }
              case 'Some': {
                const v7080 = v7077[1];
                v7078 = true;
                
                break;
                }
              }
            const v7082 = stdlib.addressEq(v7076, v3897);
            const v7083 = v7082 ? false : true;
            const v7084 = v7078 ? v7083 : false;
            v7036 = v7084;
            
            break;
            }
          case 'None': {
            const v7085 = v3903[1];
            v7036 = false;
            
            break;
            }
          case 'Stop': {
            const v7086 = v3903[1];
            v7036 = true;
            
            break;
            }
          }
        stdlib.assert(v7036, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./dao/contracts/dao-core.rsh:243:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:250:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:250:13:function exp)'],
          msg: 'A Proposal is already active.',
          who: 'eject'
          });
        const v7089 = null;
        const v7090 = await txn1.getOutput('eject', 'v7089', ctc0, v7089);
        if (v2511) {
          stdlib.protect(ctc0, await interact.out(v6883, v7090), {
            at: './dao/contracts/dao-core.rsh:233:11:application',
            fs: ['at ./dao/contracts/dao-core.rsh:233:11:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:233:11:function exp)', 'at ./dao/contracts/dao-core.rsh:251:12:application call to "k" (defined at: ./dao/contracts/dao-core.rsh:250:13:function exp)', 'at ./dao/contracts/dao-core.rsh:250:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:250:13:function exp)'],
            msg: 'out',
            who: 'eject'
            });
          }
        else {
          }
        
        const v7107 = stdlib.add(v3932, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:163:30:decimal', stdlib.UInt_max, '1'));
        const v7108 = ['EjectMember', v7009];
        const v7109 = {
          Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          action: v7108,
          index: v7107
          };
        const v20030 = v3822;
        const v20032 = v7109;
        const v20034 = v3828;
        const v20035 = v3822.admin;
        const v20036 = v3822.fee;
        const v20037 = v3822.openTreasury;
        const v20038 = v3822.quorum;
        const v20039 = v3822.registerSelf;
        const v20040 = v7109.action;
        const v20041 = v7109.index;
        const v20042 = stdlib.ge(v20041, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
        let v20043;
        if (v20042) {
          const v20044 = stdlib.mod(v20041, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
          const v20045 = stdlib.sub(v20041, v20044);
          const v20046 = stdlib.div(v20045, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
          v20043 = v20046;
          }
        else {
          v20043 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
          }
        return;
        }
      break;
      }
    case 'joinLeave0_334': {
      const v8095 = v4456[1];
      return;
      break;
      }
    case 'registerProposal0_334': {
      const v9307 = v4456[1];
      return;
      break;
      }
    case 'voteProposal0_334': {
      const v10519 = v4456[1];
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
  const ctc6 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Struct([['admin', ctc4], ['registerSelf', ctc7], ['fee', ctc1], ['quorum', ctc1], ['openTreasury', ctc7]]);
  const ctc9 = stdlib.T_Data({
    AllocateFunds: ctc6,
    ChangeAdmin: ctc8,
    EjectMember: ctc4,
    None: ctc0,
    Stop: ctc0
    });
  const ctc10 = stdlib.T_Object({
    admin: ctc4,
    fee: ctc1,
    openTreasury: ctc7,
    quorum: ctc1,
    registerSelf: ctc7
    });
  const ctc11 = stdlib.T_Object({
    Against: ctc1,
    For: ctc1,
    action: ctc9,
    index: ctc1
    });
  const ctc12 = stdlib.T_Tuple([ctc7]);
  const ctc13 = stdlib.T_Tuple([ctc4]);
  const ctc14 = stdlib.T_Tuple([ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc9]);
  const ctc16 = stdlib.T_Data({
    Against: ctc0,
    For: ctc0
    });
  const ctc17 = stdlib.T_Tuple([ctc16]);
  const ctc18 = stdlib.T_Data({
    addMember0_334: ctc13,
    donate0_334: ctc14,
    eject0_334: ctc13,
    joinLeave0_334: ctc12,
    registerProposal0_334: ctc15,
    voteProposal0_334: ctc17
    });
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v3798, v3799, v3812, v3820, v3822, v3824, v3828, v3897, v3898, v3899, v3900, v3901, v3903, v3932, v3933, v3934] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc1, ctc9, ctc10, ctc11, ctc1, ctc4, ctc1, ctc7, ctc1, ctc7, ctc9, ctc1, ctc7, ctc1]);
  const v4072 = ctc.selfAddress();
  const v4074 = stdlib.protect(ctc12, await interact.in(), {
    at: './dao/contracts/dao-core.rsh:1:23:application',
    fs: ['at ./dao/contracts/dao-core.rsh:264:40:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:264:40:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to "runjoinLeave0_334" (defined at: ./dao/contracts/dao-core.rsh:264:10:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:169:50:function exp)'],
    msg: 'in',
    who: 'joinLeave'
    });
  const v4075 = v4074[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:1:23:application', stdlib.UInt_max, '0')];
  if (v4075) {
    const v4077 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4072), null);
    let v4078;
    switch (v4077[0]) {
      case 'None': {
        const v4079 = v4077[1];
        v4078 = false;
        
        break;
        }
      case 'Some': {
        const v4080 = v4077[1];
        v4078 = true;
        
        break;
        }
      }
    stdlib.assert(v4078, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./dao/contracts/dao-core.rsh:266:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:264:40:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:264:40:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to "runjoinLeave0_334" (defined at: ./dao/contracts/dao-core.rsh:264:10:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:169:50:function exp)'],
      msg: 'Address is not a member',
      who: 'joinLeave'
      });
    }
  else {
    stdlib.assert(v3901, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./dao/contracts/dao-core.rsh:268:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:264:40:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:264:40:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to "runjoinLeave0_334" (defined at: ./dao/contracts/dao-core.rsh:264:10:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:169:50:function exp)'],
      msg: 'An existing user has to add you to this DAO',
      who: 'joinLeave'
      });
    const v4084 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4072), null);
    let v4085;
    switch (v4084[0]) {
      case 'None': {
        const v4086 = v4084[1];
        v4085 = true;
        
        break;
        }
      case 'Some': {
        const v4087 = v4084[1];
        v4085 = false;
        
        break;
        }
      }
    stdlib.assert(v4085, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./dao/contracts/dao-core.rsh:269:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:264:40:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:264:40:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to "runjoinLeave0_334" (defined at: ./dao/contracts/dao-core.rsh:264:10:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:169:50:function exp)'],
      msg: 'Address is already a member',
      who: 'joinLeave'
      });
    }
  const v4090 = v4075 ? stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:272:35:decimal', stdlib.UInt_max, '0') : v3898;
  const v4093 = stdlib.sub(stdlib.UInt_max, v3828);
  const v4094 = stdlib.lt(v4090, v4093);
  stdlib.assert(v4094, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./dao/contracts/dao-core.rsh:273:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:264:40:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:264:40:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to "runjoinLeave0_334" (defined at: ./dao/contracts/dao-core.rsh:264:10:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:169:50:function exp)'],
    msg: 'Membership is at maximum capacity',
    who: 'joinLeave'
    });
  const v4101 = ['joinLeave0_334', v4074];
  
  if (v4075) {
    const v4434 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4072), null);
    let v4435;
    switch (v4434[0]) {
      case 'None': {
        const v4436 = v4434[1];
        v4435 = false;
        
        break;
        }
      case 'Some': {
        const v4437 = v4434[1];
        v4435 = true;
        
        break;
        }
      }
    stdlib.assert(v4435, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./dao/contracts/dao-core.rsh:266:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:264:40:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:264:40:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:264:40:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:169:50:function exp)'],
      msg: 'Address is not a member',
      who: 'joinLeave'
      });
    }
  else {
    stdlib.assert(v3901, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./dao/contracts/dao-core.rsh:268:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:264:40:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:264:40:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:264:40:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:169:50:function exp)'],
      msg: 'An existing user has to add you to this DAO',
      who: 'joinLeave'
      });
    const v4441 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4072), null);
    let v4442;
    switch (v4441[0]) {
      case 'None': {
        const v4443 = v4441[1];
        v4442 = true;
        
        break;
        }
      case 'Some': {
        const v4444 = v4441[1];
        v4442 = false;
        
        break;
        }
      }
    stdlib.assert(v4442, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./dao/contracts/dao-core.rsh:269:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:264:40:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:264:40:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:264:40:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:169:50:function exp)'],
      msg: 'Address is already a member',
      who: 'joinLeave'
      });
    }
  
  const txn1 = await (ctc.sendrecv({
    args: [v3798, v3799, v3812, v3820, v3822, v3824, v3828, v3897, v3898, v3899, v3900, v3901, v3903, v3932, v3933, v3934, v4101],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [v4090, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v4456], secs: v4458, time: v4457, didSend: v2511, from: v4455 } = txn1;
      
      switch (v4456[0]) {
        case 'addMember0_334': {
          const v4459 = v4456[1];
          
          break;
          }
        case 'donate0_334': {
          const v5671 = v4456[1];
          
          break;
          }
        case 'eject0_334': {
          const v6883 = v4456[1];
          
          break;
          }
        case 'joinLeave0_334': {
          const v8095 = v4456[1];
          sim_r.txns.push({
            kind: 'api',
            who: "joinLeave"
            });
          const v8123 = v8095[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:264:10:spread', stdlib.UInt_max, '0')];
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v4455), null);
          const v8137 = v8123 ? stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:272:35:decimal', stdlib.UInt_max, '0') : v3898;
          const v8146 = stdlib.add(v3828, v8137);
          sim_r.txns.push({
            amt: v8137,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v4455), null);
          const v8386 = null;
          const v8387 = await txn1.getOutput('joinLeave', 'v8386', ctc0, v8386);
          
          if (v8123) {
            await stdlib.simMapSet(sim_r, 0, v4455, undefined /* Nothing */);
            null;
            const v20755 = v3822;
            const v20757 = v3824;
            const v20759 = v8146;
            const v20760 = v3822.admin;
            const v20761 = v3822.fee;
            const v20762 = v3822.openTreasury;
            const v20763 = v3822.quorum;
            const v20764 = v3822.registerSelf;
            const v20765 = v3824.action;
            const v20766 = v3824.index;
            const v20767 = stdlib.ge(v20766, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
            let v20768;
            if (v20767) {
              const v20769 = stdlib.mod(v20766, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
              const v20770 = stdlib.sub(v20766, v20769);
              const v20771 = stdlib.div(v20770, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
              v20768 = v20771;
              }
            else {
              v20768 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
              }
            sim_r.isHalt = false;
            }
          else {
            const v8395 = [v3934, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
            await stdlib.simMapSet(sim_r, 0, v4455, v8395);
            null;
            const v20784 = v3822;
            const v20786 = v3824;
            const v20788 = v8146;
            const v20789 = v3822.admin;
            const v20790 = v3822.fee;
            const v20791 = v3822.openTreasury;
            const v20792 = v3822.quorum;
            const v20793 = v3822.registerSelf;
            const v20794 = v3824.action;
            const v20795 = v3824.index;
            const v20796 = stdlib.ge(v20795, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
            let v20797;
            if (v20796) {
              const v20798 = stdlib.mod(v20795, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
              const v20799 = stdlib.sub(v20795, v20798);
              const v20800 = stdlib.div(v20799, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
              v20797 = v20800;
              }
            else {
              v20797 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
              }
            sim_r.isHalt = false;
            }
          break;
          }
        case 'registerProposal0_334': {
          const v9307 = v4456[1];
          
          break;
          }
        case 'voteProposal0_334': {
          const v10519 = v4456[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc1, ctc9, ctc10, ctc11, ctc1, ctc4, ctc1, ctc7, ctc1, ctc7, ctc9, ctc1, ctc7, ctc1, ctc18],
    waitIfNotPresent: false
    }));
  const {data: [v4456], secs: v4458, time: v4457, didSend: v2511, from: v4455 } = txn1;
  switch (v4456[0]) {
    case 'addMember0_334': {
      const v4459 = v4456[1];
      return;
      break;
      }
    case 'donate0_334': {
      const v5671 = v4456[1];
      return;
      break;
      }
    case 'eject0_334': {
      const v6883 = v4456[1];
      return;
      break;
      }
    case 'joinLeave0_334': {
      const v8095 = v4456[1];
      undefined /* setApiDetails */;
      const v8123 = v8095[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:264:10:spread', stdlib.UInt_max, '0')];
      if (v8123) {
        const v8124 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4455), null);
        let v8125;
        switch (v8124[0]) {
          case 'None': {
            const v8126 = v8124[1];
            v8125 = false;
            
            break;
            }
          case 'Some': {
            const v8127 = v8124[1];
            v8125 = true;
            
            break;
            }
          }
        stdlib.assert(v8125, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./dao/contracts/dao-core.rsh:266:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:264:40:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:264:40:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:264:40:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:169:50:function exp)'],
          msg: 'Address is not a member',
          who: 'joinLeave'
          });
        }
      else {
        stdlib.assert(v3901, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./dao/contracts/dao-core.rsh:268:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:264:40:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:264:40:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:264:40:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:169:50:function exp)'],
          msg: 'An existing user has to add you to this DAO',
          who: 'joinLeave'
          });
        const v8131 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4455), null);
        let v8132;
        switch (v8131[0]) {
          case 'None': {
            const v8133 = v8131[1];
            v8132 = true;
            
            break;
            }
          case 'Some': {
            const v8134 = v8131[1];
            v8132 = false;
            
            break;
            }
          }
        stdlib.assert(v8132, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./dao/contracts/dao-core.rsh:269:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:264:40:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:264:40:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:264:40:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:169:50:function exp)'],
          msg: 'Address is already a member',
          who: 'joinLeave'
          });
        }
      const v8137 = v8123 ? stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:272:35:decimal', stdlib.UInt_max, '0') : v3898;
      const v8140 = stdlib.sub(stdlib.UInt_max, v3828);
      const v8141 = stdlib.lt(v8137, v8140);
      stdlib.assert(v8141, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./dao/contracts/dao-core.rsh:273:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:264:40:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:264:40:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:264:40:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:169:50:function exp)'],
        msg: 'Membership is at maximum capacity',
        who: 'joinLeave'
        });
      const v8146 = stdlib.add(v3828, v8137);
      const v8147 = stdlib.le(v8146, stdlib.UInt_max);
      stdlib.assert(v8147, {
        at: './dao/contracts/dao-core.rsh:169:50:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'joinLeave'
        });
      ;
      if (v8123) {
        const v8366 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4455), null);
        let v8367;
        switch (v8366[0]) {
          case 'None': {
            const v8368 = v8366[1];
            v8367 = false;
            
            break;
            }
          case 'Some': {
            const v8369 = v8366[1];
            v8367 = true;
            
            break;
            }
          }
        stdlib.assert(v8367, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./dao/contracts/dao-core.rsh:266:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:278:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:278:13:function exp)'],
          msg: 'Address is not a member',
          who: 'joinLeave'
          });
        }
      else {
        stdlib.assert(v3901, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./dao/contracts/dao-core.rsh:268:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:278:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:278:13:function exp)'],
          msg: 'An existing user has to add you to this DAO',
          who: 'joinLeave'
          });
        const v8373 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4455), null);
        let v8374;
        switch (v8373[0]) {
          case 'None': {
            const v8375 = v8373[1];
            v8374 = true;
            
            break;
            }
          case 'Some': {
            const v8376 = v8373[1];
            v8374 = false;
            
            break;
            }
          }
        stdlib.assert(v8374, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./dao/contracts/dao-core.rsh:269:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:278:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:278:13:function exp)'],
          msg: 'Address is already a member',
          who: 'joinLeave'
          });
        }
      const v8382 = stdlib.sub(stdlib.UInt_max, v8146);
      const v8383 = stdlib.lt(v8137, v8382);
      stdlib.assert(v8383, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./dao/contracts/dao-core.rsh:273:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:278:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:278:13:function exp)'],
        msg: 'Membership is at maximum capacity',
        who: 'joinLeave'
        });
      const v8386 = null;
      const v8387 = await txn1.getOutput('joinLeave', 'v8386', ctc0, v8386);
      if (v2511) {
        stdlib.protect(ctc0, await interact.out(v8095, v8387), {
          at: './dao/contracts/dao-core.rsh:264:11:application',
          fs: ['at ./dao/contracts/dao-core.rsh:264:11:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:264:11:function exp)', 'at ./dao/contracts/dao-core.rsh:279:12:application call to "k" (defined at: ./dao/contracts/dao-core.rsh:278:13:function exp)', 'at ./dao/contracts/dao-core.rsh:278:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:278:13:function exp)'],
          msg: 'out',
          who: 'joinLeave'
          });
        }
      else {
        }
      
      if (v8123) {
        await stdlib.mapSet(map0, v4455, undefined /* Nothing */);
        null;
        const v20755 = v3822;
        const v20757 = v3824;
        const v20759 = v8146;
        const v20760 = v3822.admin;
        const v20761 = v3822.fee;
        const v20762 = v3822.openTreasury;
        const v20763 = v3822.quorum;
        const v20764 = v3822.registerSelf;
        const v20765 = v3824.action;
        const v20766 = v3824.index;
        const v20767 = stdlib.ge(v20766, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
        let v20768;
        if (v20767) {
          const v20769 = stdlib.mod(v20766, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
          const v20770 = stdlib.sub(v20766, v20769);
          const v20771 = stdlib.div(v20770, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
          v20768 = v20771;
          }
        else {
          v20768 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
          }
        return;
        }
      else {
        const v8395 = [v3934, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        await stdlib.mapSet(map0, v4455, v8395);
        null;
        const v20784 = v3822;
        const v20786 = v3824;
        const v20788 = v8146;
        const v20789 = v3822.admin;
        const v20790 = v3822.fee;
        const v20791 = v3822.openTreasury;
        const v20792 = v3822.quorum;
        const v20793 = v3822.registerSelf;
        const v20794 = v3824.action;
        const v20795 = v3824.index;
        const v20796 = stdlib.ge(v20795, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
        let v20797;
        if (v20796) {
          const v20798 = stdlib.mod(v20795, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
          const v20799 = stdlib.sub(v20795, v20798);
          const v20800 = stdlib.div(v20799, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
          v20797 = v20800;
          }
        else {
          v20797 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
          }
        return;
        }
      break;
      }
    case 'registerProposal0_334': {
      const v9307 = v4456[1];
      return;
      break;
      }
    case 'voteProposal0_334': {
      const v10519 = v4456[1];
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
  const ctc6 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Struct([['admin', ctc4], ['registerSelf', ctc7], ['fee', ctc1], ['quorum', ctc1], ['openTreasury', ctc7]]);
  const ctc9 = stdlib.T_Data({
    AllocateFunds: ctc6,
    ChangeAdmin: ctc8,
    EjectMember: ctc4,
    None: ctc0,
    Stop: ctc0
    });
  const ctc10 = stdlib.T_Object({
    admin: ctc4,
    fee: ctc1,
    openTreasury: ctc7,
    quorum: ctc1,
    registerSelf: ctc7
    });
  const ctc11 = stdlib.T_Object({
    Against: ctc1,
    For: ctc1,
    action: ctc9,
    index: ctc1
    });
  const ctc12 = stdlib.T_Tuple([ctc9]);
  const ctc13 = stdlib.T_Tuple([ctc4]);
  const ctc14 = stdlib.T_Tuple([ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc7]);
  const ctc16 = stdlib.T_Data({
    Against: ctc0,
    For: ctc0
    });
  const ctc17 = stdlib.T_Tuple([ctc16]);
  const ctc18 = stdlib.T_Data({
    addMember0_334: ctc13,
    donate0_334: ctc14,
    eject0_334: ctc13,
    joinLeave0_334: ctc15,
    registerProposal0_334: ctc12,
    voteProposal0_334: ctc17
    });
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v3798, v3799, v3812, v3820, v3822, v3824, v3828, v3897, v3898, v3899, v3900, v3901, v3903, v3932, v3933, v3934] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc1, ctc9, ctc10, ctc11, ctc1, ctc4, ctc1, ctc7, ctc1, ctc7, ctc9, ctc1, ctc7, ctc1]);
  const v4103 = ctc.selfAddress();
  const v4105 = stdlib.protect(ctc12, await interact.in(), {
    at: './dao/contracts/dao-core.rsh:1:23:application',
    fs: ['at ./dao/contracts/dao-core.rsh:291:44:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:291:44:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to "runregisterProposal0_334" (defined at: ./dao/contracts/dao-core.rsh:291:10:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:169:50:function exp)'],
    msg: 'in',
    who: 'registerProposal'
    });
  const v4106 = v4105[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:1:23:application', stdlib.UInt_max, '0')];
  let v4123;
  if (v3933) {
    const v4125 = stdlib.mod(v3932, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
    const v4127 = stdlib.sub(v3932, v4125);
    const v4129 = stdlib.div(v4127, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
    v4123 = v4129;
    }
  else {
    v4123 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
    }
  const v4130 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4103), null);
  const v4131 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v4132 = stdlib.fromSome(v4130, v4131);
  const v4133 = v4132[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:103:11:array', stdlib.UInt_max, '0')];
  const v4135 = stdlib.ge(v4133, v4123);
  stdlib.assert(v4135, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./dao/contracts/dao-core.rsh:104:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:292:22:application call to "requireIsMember" (defined at: ./dao/contracts/dao-core.rsh:101:36:function exp)', 'at ./dao/contracts/dao-core.rsh:291:44:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:291:44:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to "runregisterProposal0_334" (defined at: ./dao/contracts/dao-core.rsh:291:10:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:169:50:function exp)'],
    msg: 'THIEF! SEIZE THEM!',
    who: 'registerProposal'
    });
  const v4142 = stdlib.ge(v4133, v3934);
  stdlib.assert(v4142, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./dao/contracts/dao-core.rsh:293:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:291:44:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:291:44:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to "runregisterProposal0_334" (defined at: ./dao/contracts/dao-core.rsh:291:10:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:169:50:function exp)'],
    msg: 'User is below Citizen Rank threshold',
    who: 'registerProposal'
    });
  let v4146;
  switch (v3903[0]) {
    case 'AllocateFunds': {
      const v4147 = v3903[1];
      const v4148 = v4147[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:76:21:array', stdlib.UInt_max, '0')];
      const v4149 = v4147[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:76:21:array', stdlib.UInt_max, '1')];
      const v4151 = stdlib.lt(v4149, v3828);
      const v4152 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4148), null);
      let v4153;
      switch (v4152[0]) {
        case 'None': {
          const v4154 = v4152[1];
          v4153 = false;
          
          break;
          }
        case 'Some': {
          const v4155 = v4152[1];
          v4153 = true;
          
          break;
          }
        }
      const v4156 = v4153 ? v4151 : false;
      const v4158 = v3899 ? v4151 : v4156;
      v4146 = v4158;
      
      break;
      }
    case 'ChangeAdmin': {
      const v4159 = v3903[1];
      const v4160 = v4159.admin;
      const v4161 = v4159.fee;
      const v4163 = v4159.quorum;
      const v4165 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4160), null);
      const v4167 = stdlib.fromSome(v4165, v4131);
      const v4168 = v4167[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:84:13:array', stdlib.UInt_max, '0')];
      let v4171;
      switch (v4165[0]) {
        case 'None': {
          const v4172 = v4165[1];
          v4171 = false;
          
          break;
          }
        case 'Some': {
          const v4173 = v4165[1];
          v4171 = true;
          
          break;
          }
        }
      const v4174 = stdlib.gt(v4168, v3934);
      const v4175 = v4171 ? v4174 : false;
      const v4176 = stdlib.gt(v4163, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:86:34:decimal', stdlib.UInt_max, '0'));
      let v4177;
      if (v4176) {
        const v4180 = stdlib.lt(v4163, v3812);
        v4177 = v4180;
        }
      else {
        v4177 = false;
        }
      const v4181 = stdlib.gt(v4161, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:87:33:decimal', stdlib.UInt_max, '0'));
      const v4182 = stdlib.lt(v4161, stdlib.UInt_max);
      const v4183 = v4181 ? v4182 : false;
      const v4184 = v4175 ? v4177 : false;
      const v4185 = v4184 ? v4183 : false;
      v4146 = v4185;
      
      break;
      }
    case 'EjectMember': {
      const v4186 = v3903[1];
      const v4187 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4186), null);
      let v4188;
      switch (v4187[0]) {
        case 'None': {
          const v4189 = v4187[1];
          v4188 = false;
          
          break;
          }
        case 'Some': {
          const v4190 = v4187[1];
          v4188 = true;
          
          break;
          }
        }
      const v4192 = stdlib.addressEq(v4186, v3897);
      const v4193 = v4192 ? false : true;
      const v4194 = v4188 ? v4193 : false;
      v4146 = v4194;
      
      break;
      }
    case 'None': {
      const v4195 = v3903[1];
      v4146 = false;
      
      break;
      }
    case 'Stop': {
      const v4196 = v3903[1];
      v4146 = true;
      
      break;
      }
    }
  const v4197 = v4146 ? false : true;
  stdlib.assert(v4197, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./dao/contracts/dao-core.rsh:295:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:291:44:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:291:44:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to "runregisterProposal0_334" (defined at: ./dao/contracts/dao-core.rsh:291:10:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:169:50:function exp)'],
    msg: 'A Proposal is already active.',
    who: 'registerProposal'
    });
  const v4200 = stdlib.sub(stdlib.UInt_max, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:300:32:decimal', stdlib.UInt_max, '1'));
  const v4201 = stdlib.lt(v3932, v4200);
  stdlib.assert(v4201, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./dao/contracts/dao-core.rsh:300:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:291:44:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:291:44:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to "runregisterProposal0_334" (defined at: ./dao/contracts/dao-core.rsh:291:10:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:169:50:function exp)'],
    msg: 'Governance limit reached',
    who: 'registerProposal'
    });
  let v4203;
  switch (v4106[0]) {
    case 'AllocateFunds': {
      const v4204 = v4106[1];
      const v4205 = v4204[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:76:21:array', stdlib.UInt_max, '0')];
      const v4206 = v4204[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:76:21:array', stdlib.UInt_max, '1')];
      const v4208 = stdlib.lt(v4206, v3828);
      const v4209 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4205), null);
      let v4210;
      switch (v4209[0]) {
        case 'None': {
          const v4211 = v4209[1];
          v4210 = false;
          
          break;
          }
        case 'Some': {
          const v4212 = v4209[1];
          v4210 = true;
          
          break;
          }
        }
      const v4213 = v4210 ? v4208 : false;
      const v4215 = v3899 ? v4208 : v4213;
      v4203 = v4215;
      
      break;
      }
    case 'ChangeAdmin': {
      const v4216 = v4106[1];
      const v4217 = v4216.admin;
      const v4218 = v4216.fee;
      const v4220 = v4216.quorum;
      const v4222 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4217), null);
      const v4224 = stdlib.fromSome(v4222, v4131);
      const v4225 = v4224[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:84:13:array', stdlib.UInt_max, '0')];
      let v4228;
      switch (v4222[0]) {
        case 'None': {
          const v4229 = v4222[1];
          v4228 = false;
          
          break;
          }
        case 'Some': {
          const v4230 = v4222[1];
          v4228 = true;
          
          break;
          }
        }
      const v4231 = stdlib.gt(v4225, v3934);
      const v4232 = v4228 ? v4231 : false;
      const v4233 = stdlib.gt(v4220, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:86:34:decimal', stdlib.UInt_max, '0'));
      let v4234;
      if (v4233) {
        const v4237 = stdlib.lt(v4220, v3812);
        v4234 = v4237;
        }
      else {
        v4234 = false;
        }
      const v4238 = stdlib.gt(v4218, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:87:33:decimal', stdlib.UInt_max, '0'));
      const v4239 = stdlib.lt(v4218, stdlib.UInt_max);
      const v4240 = v4238 ? v4239 : false;
      const v4241 = v4232 ? v4234 : false;
      const v4242 = v4241 ? v4240 : false;
      v4203 = v4242;
      
      break;
      }
    case 'EjectMember': {
      const v4243 = v4106[1];
      const v4244 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4243), null);
      let v4245;
      switch (v4244[0]) {
        case 'None': {
          const v4246 = v4244[1];
          v4245 = false;
          
          break;
          }
        case 'Some': {
          const v4247 = v4244[1];
          v4245 = true;
          
          break;
          }
        }
      const v4249 = stdlib.addressEq(v4243, v3897);
      const v4250 = v4249 ? false : true;
      const v4251 = v4245 ? v4250 : false;
      v4203 = v4251;
      
      break;
      }
    case 'None': {
      const v4252 = v4106[1];
      v4203 = false;
      
      break;
      }
    case 'Stop': {
      const v4253 = v4106[1];
      v4203 = true;
      
      break;
      }
    }
  stdlib.assert(v4203, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./dao/contracts/dao-core.rsh:301:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:291:44:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:291:44:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to "runregisterProposal0_334" (defined at: ./dao/contracts/dao-core.rsh:291:10:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:169:50:function exp)'],
    msg: 'Bad suggestion is bad. Apologize to everyone.',
    who: 'registerProposal'
    });
  const v4272 = ['registerProposal0_334', v4105];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3798, v3799, v3812, v3820, v3822, v3824, v3828, v3897, v3898, v3899, v3900, v3901, v3903, v3932, v3933, v3934, v4272],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:291:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v4456], secs: v4458, time: v4457, didSend: v2511, from: v4455 } = txn1;
      
      switch (v4456[0]) {
        case 'addMember0_334': {
          const v4459 = v4456[1];
          
          break;
          }
        case 'donate0_334': {
          const v5671 = v4456[1];
          
          break;
          }
        case 'eject0_334': {
          const v6883 = v4456[1];
          
          break;
          }
        case 'joinLeave0_334': {
          const v8095 = v4456[1];
          
          break;
          }
        case 'registerProposal0_334': {
          const v9307 = v4456[1];
          sim_r.txns.push({
            kind: 'api',
            who: "registerProposal"
            });
          ;
          const v9611 = v9307[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:291:10:spread', stdlib.UInt_max, '0')];
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v4455), null);
          switch (v3903[0]) {
            case 'AllocateFunds': {
              const v9639 = v3903[1];
              const v9640 = v9639[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:76:21:array', stdlib.UInt_max, '0')];
              stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v9640), null);
              
              break;
              }
            case 'ChangeAdmin': {
              const v9651 = v3903[1];
              const v9652 = v9651.admin;
              stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v9652), null);
              
              break;
              }
            case 'EjectMember': {
              const v9678 = v3903[1];
              stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v9678), null);
              
              break;
              }
            case 'None': {
              const v9687 = v3903[1];
              
              break;
              }
            case 'Stop': {
              const v9688 = v3903[1];
              
              break;
              }
            }
          switch (v9611[0]) {
            case 'AllocateFunds': {
              const v9696 = v9611[1];
              const v9697 = v9696[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:76:21:array', stdlib.UInt_max, '0')];
              stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v9697), null);
              
              break;
              }
            case 'ChangeAdmin': {
              const v9708 = v9611[1];
              const v9709 = v9708.admin;
              stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v9709), null);
              
              break;
              }
            case 'EjectMember': {
              const v9735 = v9611[1];
              stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v9735), null);
              
              break;
              }
            case 'None': {
              const v9744 = v9611[1];
              
              break;
              }
            case 'Stop': {
              const v9745 = v9611[1];
              
              break;
              }
            }
          const v9748 = null;
          const v9749 = await txn1.getOutput('registerProposal', 'v9748', ctc0, v9748);
          
          null;
          const v9782 = stdlib.add(v3932, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:163:30:decimal', stdlib.UInt_max, '1'));
          const v9783 = {
            Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            action: v9611,
            index: v9782
            };
          const v21509 = v3822;
          const v21511 = v9783;
          const v21513 = v3828;
          const v21514 = v3822.admin;
          const v21515 = v3822.fee;
          const v21516 = v3822.openTreasury;
          const v21517 = v3822.quorum;
          const v21518 = v3822.registerSelf;
          const v21519 = v9783.action;
          const v21520 = v9783.index;
          const v21521 = stdlib.ge(v21520, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
          let v21522;
          if (v21521) {
            const v21523 = stdlib.mod(v21520, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
            const v21524 = stdlib.sub(v21520, v21523);
            const v21525 = stdlib.div(v21524, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
            v21522 = v21525;
            }
          else {
            v21522 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
            }
          sim_r.isHalt = false;
          
          break;
          }
        case 'voteProposal0_334': {
          const v10519 = v4456[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc1, ctc9, ctc10, ctc11, ctc1, ctc4, ctc1, ctc7, ctc1, ctc7, ctc9, ctc1, ctc7, ctc1, ctc18],
    waitIfNotPresent: false
    }));
  const {data: [v4456], secs: v4458, time: v4457, didSend: v2511, from: v4455 } = txn1;
  switch (v4456[0]) {
    case 'addMember0_334': {
      const v4459 = v4456[1];
      return;
      break;
      }
    case 'donate0_334': {
      const v5671 = v4456[1];
      return;
      break;
      }
    case 'eject0_334': {
      const v6883 = v4456[1];
      return;
      break;
      }
    case 'joinLeave0_334': {
      const v8095 = v4456[1];
      return;
      break;
      }
    case 'registerProposal0_334': {
      const v9307 = v4456[1];
      undefined /* setApiDetails */;
      const v9359 = stdlib.le(v3828, stdlib.UInt_max);
      stdlib.assert(v9359, {
        at: './dao/contracts/dao-core.rsh:169:50:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'registerProposal'
        });
      ;
      const v9611 = v9307[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:291:10:spread', stdlib.UInt_max, '0')];
      let v9615;
      if (v3933) {
        const v9617 = stdlib.mod(v3932, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
        const v9619 = stdlib.sub(v3932, v9617);
        const v9621 = stdlib.div(v9619, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
        v9615 = v9621;
        }
      else {
        v9615 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
        }
      const v9622 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4455), null);
      const v9623 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v9624 = stdlib.fromSome(v9622, v9623);
      const v9625 = v9624[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:103:11:array', stdlib.UInt_max, '0')];
      const v9627 = stdlib.ge(v9625, v9615);
      stdlib.assert(v9627, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./dao/contracts/dao-core.rsh:104:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:292:22:application call to "requireIsMember" (defined at: ./dao/contracts/dao-core.rsh:101:36:function exp)', 'at ./dao/contracts/dao-core.rsh:304:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:304:13:function exp)'],
        msg: 'THIEF! SEIZE THEM!',
        who: 'registerProposal'
        });
      const v9634 = stdlib.ge(v9625, v3934);
      stdlib.assert(v9634, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./dao/contracts/dao-core.rsh:293:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:304:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:304:13:function exp)'],
        msg: 'User is below Citizen Rank threshold',
        who: 'registerProposal'
        });
      let v9638;
      switch (v3903[0]) {
        case 'AllocateFunds': {
          const v9639 = v3903[1];
          const v9640 = v9639[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:76:21:array', stdlib.UInt_max, '0')];
          const v9641 = v9639[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:76:21:array', stdlib.UInt_max, '1')];
          const v9643 = stdlib.lt(v9641, v3828);
          const v9644 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v9640), null);
          let v9645;
          switch (v9644[0]) {
            case 'None': {
              const v9646 = v9644[1];
              v9645 = false;
              
              break;
              }
            case 'Some': {
              const v9647 = v9644[1];
              v9645 = true;
              
              break;
              }
            }
          const v9648 = v9645 ? v9643 : false;
          const v9650 = v3899 ? v9643 : v9648;
          v9638 = v9650;
          
          break;
          }
        case 'ChangeAdmin': {
          const v9651 = v3903[1];
          const v9652 = v9651.admin;
          const v9653 = v9651.fee;
          const v9655 = v9651.quorum;
          const v9657 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v9652), null);
          const v9659 = stdlib.fromSome(v9657, v9623);
          const v9660 = v9659[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:84:13:array', stdlib.UInt_max, '0')];
          let v9663;
          switch (v9657[0]) {
            case 'None': {
              const v9664 = v9657[1];
              v9663 = false;
              
              break;
              }
            case 'Some': {
              const v9665 = v9657[1];
              v9663 = true;
              
              break;
              }
            }
          const v9666 = stdlib.gt(v9660, v3934);
          const v9667 = v9663 ? v9666 : false;
          const v9668 = stdlib.gt(v9655, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:86:34:decimal', stdlib.UInt_max, '0'));
          let v9669;
          if (v9668) {
            const v9672 = stdlib.lt(v9655, v3812);
            v9669 = v9672;
            }
          else {
            v9669 = false;
            }
          const v9673 = stdlib.gt(v9653, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:87:33:decimal', stdlib.UInt_max, '0'));
          const v9674 = stdlib.lt(v9653, stdlib.UInt_max);
          const v9675 = v9673 ? v9674 : false;
          const v9676 = v9667 ? v9669 : false;
          const v9677 = v9676 ? v9675 : false;
          v9638 = v9677;
          
          break;
          }
        case 'EjectMember': {
          const v9678 = v3903[1];
          const v9679 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v9678), null);
          let v9680;
          switch (v9679[0]) {
            case 'None': {
              const v9681 = v9679[1];
              v9680 = false;
              
              break;
              }
            case 'Some': {
              const v9682 = v9679[1];
              v9680 = true;
              
              break;
              }
            }
          const v9684 = stdlib.addressEq(v9678, v3897);
          const v9685 = v9684 ? false : true;
          const v9686 = v9680 ? v9685 : false;
          v9638 = v9686;
          
          break;
          }
        case 'None': {
          const v9687 = v3903[1];
          v9638 = false;
          
          break;
          }
        case 'Stop': {
          const v9688 = v3903[1];
          v9638 = true;
          
          break;
          }
        }
      const v9689 = v9638 ? false : true;
      stdlib.assert(v9689, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./dao/contracts/dao-core.rsh:295:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:304:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:304:13:function exp)'],
        msg: 'A Proposal is already active.',
        who: 'registerProposal'
        });
      const v9692 = stdlib.sub(stdlib.UInt_max, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:300:32:decimal', stdlib.UInt_max, '1'));
      const v9693 = stdlib.lt(v3932, v9692);
      stdlib.assert(v9693, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./dao/contracts/dao-core.rsh:300:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:304:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:304:13:function exp)'],
        msg: 'Governance limit reached',
        who: 'registerProposal'
        });
      let v9695;
      switch (v9611[0]) {
        case 'AllocateFunds': {
          const v9696 = v9611[1];
          const v9697 = v9696[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:76:21:array', stdlib.UInt_max, '0')];
          const v9698 = v9696[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:76:21:array', stdlib.UInt_max, '1')];
          const v9700 = stdlib.lt(v9698, v3828);
          const v9701 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v9697), null);
          let v9702;
          switch (v9701[0]) {
            case 'None': {
              const v9703 = v9701[1];
              v9702 = false;
              
              break;
              }
            case 'Some': {
              const v9704 = v9701[1];
              v9702 = true;
              
              break;
              }
            }
          const v9705 = v9702 ? v9700 : false;
          const v9707 = v3899 ? v9700 : v9705;
          v9695 = v9707;
          
          break;
          }
        case 'ChangeAdmin': {
          const v9708 = v9611[1];
          const v9709 = v9708.admin;
          const v9710 = v9708.fee;
          const v9712 = v9708.quorum;
          const v9714 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v9709), null);
          const v9716 = stdlib.fromSome(v9714, v9623);
          const v9717 = v9716[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:84:13:array', stdlib.UInt_max, '0')];
          let v9720;
          switch (v9714[0]) {
            case 'None': {
              const v9721 = v9714[1];
              v9720 = false;
              
              break;
              }
            case 'Some': {
              const v9722 = v9714[1];
              v9720 = true;
              
              break;
              }
            }
          const v9723 = stdlib.gt(v9717, v3934);
          const v9724 = v9720 ? v9723 : false;
          const v9725 = stdlib.gt(v9712, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:86:34:decimal', stdlib.UInt_max, '0'));
          let v9726;
          if (v9725) {
            const v9729 = stdlib.lt(v9712, v3812);
            v9726 = v9729;
            }
          else {
            v9726 = false;
            }
          const v9730 = stdlib.gt(v9710, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:87:33:decimal', stdlib.UInt_max, '0'));
          const v9731 = stdlib.lt(v9710, stdlib.UInt_max);
          const v9732 = v9730 ? v9731 : false;
          const v9733 = v9724 ? v9726 : false;
          const v9734 = v9733 ? v9732 : false;
          v9695 = v9734;
          
          break;
          }
        case 'EjectMember': {
          const v9735 = v9611[1];
          const v9736 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v9735), null);
          let v9737;
          switch (v9736[0]) {
            case 'None': {
              const v9738 = v9736[1];
              v9737 = false;
              
              break;
              }
            case 'Some': {
              const v9739 = v9736[1];
              v9737 = true;
              
              break;
              }
            }
          const v9741 = stdlib.addressEq(v9735, v3897);
          const v9742 = v9741 ? false : true;
          const v9743 = v9737 ? v9742 : false;
          v9695 = v9743;
          
          break;
          }
        case 'None': {
          const v9744 = v9611[1];
          v9695 = false;
          
          break;
          }
        case 'Stop': {
          const v9745 = v9611[1];
          v9695 = true;
          
          break;
          }
        }
      stdlib.assert(v9695, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./dao/contracts/dao-core.rsh:301:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:304:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:304:13:function exp)'],
        msg: 'Bad suggestion is bad. Apologize to everyone.',
        who: 'registerProposal'
        });
      const v9748 = null;
      const v9749 = await txn1.getOutput('registerProposal', 'v9748', ctc0, v9748);
      if (v2511) {
        stdlib.protect(ctc0, await interact.out(v9307, v9749), {
          at: './dao/contracts/dao-core.rsh:291:11:application',
          fs: ['at ./dao/contracts/dao-core.rsh:291:11:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:291:11:function exp)', 'at ./dao/contracts/dao-core.rsh:305:12:application call to "k" (defined at: ./dao/contracts/dao-core.rsh:304:13:function exp)', 'at ./dao/contracts/dao-core.rsh:304:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:304:13:function exp)'],
          msg: 'out',
          who: 'registerProposal'
          });
        }
      else {
        }
      
      null;
      const v9782 = stdlib.add(v3932, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:163:30:decimal', stdlib.UInt_max, '1'));
      const v9783 = {
        Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        action: v9611,
        index: v9782
        };
      const v21509 = v3822;
      const v21511 = v9783;
      const v21513 = v3828;
      const v21514 = v3822.admin;
      const v21515 = v3822.fee;
      const v21516 = v3822.openTreasury;
      const v21517 = v3822.quorum;
      const v21518 = v3822.registerSelf;
      const v21519 = v9783.action;
      const v21520 = v9783.index;
      const v21521 = stdlib.ge(v21520, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
      let v21522;
      if (v21521) {
        const v21523 = stdlib.mod(v21520, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
        const v21524 = stdlib.sub(v21520, v21523);
        const v21525 = stdlib.div(v21524, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
        v21522 = v21525;
        }
      else {
        v21522 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
        }
      return;
      
      break;
      }
    case 'voteProposal0_334': {
      const v10519 = v4456[1];
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
  const ctc6 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Struct([['admin', ctc4], ['registerSelf', ctc7], ['fee', ctc1], ['quorum', ctc1], ['openTreasury', ctc7]]);
  const ctc9 = stdlib.T_Data({
    AllocateFunds: ctc6,
    ChangeAdmin: ctc8,
    EjectMember: ctc4,
    None: ctc0,
    Stop: ctc0
    });
  const ctc10 = stdlib.T_Object({
    admin: ctc4,
    fee: ctc1,
    openTreasury: ctc7,
    quorum: ctc1,
    registerSelf: ctc7
    });
  const ctc11 = stdlib.T_Object({
    Against: ctc1,
    For: ctc1,
    action: ctc9,
    index: ctc1
    });
  const ctc12 = stdlib.T_Data({
    Against: ctc0,
    For: ctc0
    });
  const ctc13 = stdlib.T_Tuple([ctc12]);
  const ctc14 = stdlib.T_Tuple([ctc4]);
  const ctc15 = stdlib.T_Tuple([ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc7]);
  const ctc17 = stdlib.T_Tuple([ctc9]);
  const ctc18 = stdlib.T_Data({
    addMember0_334: ctc14,
    donate0_334: ctc15,
    eject0_334: ctc14,
    joinLeave0_334: ctc16,
    registerProposal0_334: ctc17,
    voteProposal0_334: ctc13
    });
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v3798, v3799, v3812, v3820, v3822, v3824, v3828, v3897, v3898, v3899, v3900, v3901, v3903, v3932, v3933, v3934] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc1, ctc9, ctc10, ctc11, ctc1, ctc4, ctc1, ctc7, ctc1, ctc7, ctc9, ctc1, ctc7, ctc1]);
  const v4274 = ctc.selfAddress();
  const v4276 = stdlib.protect(ctc13, await interact.in(), {
    at: './dao/contracts/dao-core.rsh:1:23:application',
    fs: ['at ./dao/contracts/dao-core.rsh:313:38:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:313:38:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to "runvoteProposal0_334" (defined at: ./dao/contracts/dao-core.rsh:313:10:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:169:50:function exp)'],
    msg: 'in',
    who: 'voteProposal'
    });
  const v4277 = v4276[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:1:23:application', stdlib.UInt_max, '0')];
  let v4284;
  if (v3933) {
    const v4286 = stdlib.mod(v3932, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
    const v4288 = stdlib.sub(v3932, v4286);
    const v4290 = stdlib.div(v4288, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
    v4284 = v4290;
    }
  else {
    v4284 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
    }
  const v4291 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4274), null);
  const v4292 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v4293 = stdlib.fromSome(v4291, v4292);
  const v4294 = v4293[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:103:11:array', stdlib.UInt_max, '0')];
  const v4295 = v4293[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:103:11:array', stdlib.UInt_max, '1')];
  const v4296 = stdlib.ge(v4294, v4284);
  stdlib.assert(v4296, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./dao/contracts/dao-core.rsh:104:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:314:22:application call to "requireIsMember" (defined at: ./dao/contracts/dao-core.rsh:101:36:function exp)', 'at ./dao/contracts/dao-core.rsh:313:38:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:313:38:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to "runvoteProposal0_334" (defined at: ./dao/contracts/dao-core.rsh:313:10:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:169:50:function exp)'],
    msg: 'THIEF! SEIZE THEM!',
    who: 'voteProposal'
    });
  const v4298 = v3824.For;
  const v4299 = v3824.Against;
  let v4302;
  switch (v3903[0]) {
    case 'AllocateFunds': {
      const v4303 = v3903[1];
      const v4304 = v4303[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:76:21:array', stdlib.UInt_max, '0')];
      const v4305 = v4303[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:76:21:array', stdlib.UInt_max, '1')];
      const v4307 = stdlib.lt(v4305, v3828);
      const v4308 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4304), null);
      let v4309;
      switch (v4308[0]) {
        case 'None': {
          const v4310 = v4308[1];
          v4309 = false;
          
          break;
          }
        case 'Some': {
          const v4311 = v4308[1];
          v4309 = true;
          
          break;
          }
        }
      const v4312 = v4309 ? v4307 : false;
      const v4314 = v3899 ? v4307 : v4312;
      v4302 = v4314;
      
      break;
      }
    case 'ChangeAdmin': {
      const v4315 = v3903[1];
      const v4316 = v4315.admin;
      const v4317 = v4315.fee;
      const v4319 = v4315.quorum;
      const v4321 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4316), null);
      const v4323 = stdlib.fromSome(v4321, v4292);
      const v4324 = v4323[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:84:13:array', stdlib.UInt_max, '0')];
      let v4327;
      switch (v4321[0]) {
        case 'None': {
          const v4328 = v4321[1];
          v4327 = false;
          
          break;
          }
        case 'Some': {
          const v4329 = v4321[1];
          v4327 = true;
          
          break;
          }
        }
      const v4330 = stdlib.gt(v4324, v3934);
      const v4331 = v4327 ? v4330 : false;
      const v4332 = stdlib.gt(v4319, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:86:34:decimal', stdlib.UInt_max, '0'));
      let v4333;
      if (v4332) {
        const v4336 = stdlib.lt(v4319, v3812);
        v4333 = v4336;
        }
      else {
        v4333 = false;
        }
      const v4337 = stdlib.gt(v4317, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:87:33:decimal', stdlib.UInt_max, '0'));
      const v4338 = stdlib.lt(v4317, stdlib.UInt_max);
      const v4339 = v4337 ? v4338 : false;
      const v4340 = v4331 ? v4333 : false;
      const v4341 = v4340 ? v4339 : false;
      v4302 = v4341;
      
      break;
      }
    case 'EjectMember': {
      const v4342 = v3903[1];
      const v4343 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4342), null);
      let v4344;
      switch (v4343[0]) {
        case 'None': {
          const v4345 = v4343[1];
          v4344 = false;
          
          break;
          }
        case 'Some': {
          const v4346 = v4343[1];
          v4344 = true;
          
          break;
          }
        }
      const v4348 = stdlib.addressEq(v4342, v3897);
      const v4349 = v4348 ? false : true;
      const v4350 = v4344 ? v4349 : false;
      v4302 = v4350;
      
      break;
      }
    case 'None': {
      const v4351 = v3903[1];
      v4302 = false;
      
      break;
      }
    case 'Stop': {
      const v4352 = v3903[1];
      v4302 = true;
      
      break;
      }
    }
  stdlib.assert(v4302, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./dao/contracts/dao-core.rsh:316:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:313:38:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:313:38:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to "runvoteProposal0_334" (defined at: ./dao/contracts/dao-core.rsh:313:10:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:169:50:function exp)'],
    msg: 'No Proposal is currently active',
    who: 'voteProposal'
    });
  const v4354 = stdlib.gt(v4298, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:321:17:decimal', stdlib.UInt_max, '0'));
  if (v4354) {
    const v4356 = stdlib.sub(stdlib.UInt_max, v4299);
    const v4357 = stdlib.lt(v4298, v4356);
    stdlib.assert(v4357, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./dao/contracts/dao-core.rsh:322:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:313:38:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:313:38:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to "runvoteProposal0_334" (defined at: ./dao/contracts/dao-core.rsh:313:10:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:169:50:function exp)'],
      msg: 'Voting limit reached',
      who: 'voteProposal'
      });
    }
  else {
    }
  const v4359 = stdlib.gt(v4299, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:324:21:decimal', stdlib.UInt_max, '0'));
  if (v4359) {
    const v4361 = stdlib.sub(stdlib.UInt_max, v4298);
    const v4362 = stdlib.lt(v4299, v4361);
    stdlib.assert(v4362, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./dao/contracts/dao-core.rsh:325:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:313:38:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:313:38:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to "runvoteProposal0_334" (defined at: ./dao/contracts/dao-core.rsh:313:10:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:169:50:function exp)'],
      msg: 'Voting limit reached',
      who: 'voteProposal'
      });
    }
  else {
    }
  const v4366 = stdlib.add(v4298, v4299);
  const v4368 = stdlib.lt(v4366, v3900);
  stdlib.assert(v4368, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./dao/contracts/dao-core.rsh:328:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:313:38:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:313:38:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to "runvoteProposal0_334" (defined at: ./dao/contracts/dao-core.rsh:313:10:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:169:50:function exp)'],
    msg: 'Quorum reached',
    who: 'voteProposal'
    });
  const v4375 = stdlib.lt(v4295, v3932);
  stdlib.assert(v4375, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./dao/contracts/dao-core.rsh:331:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:313:38:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:313:38:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to "runvoteProposal0_334" (defined at: ./dao/contracts/dao-core.rsh:313:10:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:169:50:function exp)'],
    msg: 'Address has already voted in this session',
    who: 'voteProposal'
    });
  let v4377;
  switch (v4277[0]) {
    case 'Against': {
      const v4378 = v4277[1];
      const v4381 = stdlib.add(v4299, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:335:40:decimal', stdlib.UInt_max, '1'));
      const v4382 = [v4298, v4381];
      v4377 = v4382;
      
      break;
      }
    case 'For': {
      const v4384 = v4277[1];
      const v4387 = stdlib.add(v4298, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:334:27:decimal', stdlib.UInt_max, '1'));
      const v4388 = [v4387, v4299];
      v4377 = v4388;
      
      break;
      }
    }
  const v4390 = v4377[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:333:13:array', stdlib.UInt_max, '0')];
  const v4391 = v4377[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:333:13:array', stdlib.UInt_max, '1')];
  const v4393 = stdlib.sub(stdlib.UInt_max, v4391);
  const v4394 = stdlib.lt(v4390, v4393);
  stdlib.assert(v4394, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./dao/contracts/dao-core.rsh:337:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:313:38:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:313:38:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to "runvoteProposal0_334" (defined at: ./dao/contracts/dao-core.rsh:313:10:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:169:50:function exp)'],
    msg: 'Voting limit reached (2)',
    who: 'voteProposal'
    });
  const v4397 = stdlib.sub(stdlib.UInt_max, v4390);
  const v4398 = stdlib.lt(v4391, v4397);
  stdlib.assert(v4398, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./dao/contracts/dao-core.rsh:338:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:313:38:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:313:38:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to "runvoteProposal0_334" (defined at: ./dao/contracts/dao-core.rsh:313:10:function exp)', 'at ./dao/contracts/dao-core.rsh:169:50:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:169:50:function exp)'],
    msg: 'Voting limit reached (2)',
    who: 'voteProposal'
    });
  const v4407 = ['voteProposal0_334', v4276];
  
  const txn1 = await (ctc.sendrecv({
    args: [v3798, v3799, v3812, v3820, v3822, v3824, v3828, v3897, v3898, v3899, v3900, v3901, v3903, v3932, v3933, v3934, v4407],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:313:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v4456], secs: v4458, time: v4457, didSend: v2511, from: v4455 } = txn1;
      
      switch (v4456[0]) {
        case 'addMember0_334': {
          const v4459 = v4456[1];
          
          break;
          }
        case 'donate0_334': {
          const v5671 = v4456[1];
          
          break;
          }
        case 'eject0_334': {
          const v6883 = v4456[1];
          
          break;
          }
        case 'joinLeave0_334': {
          const v8095 = v4456[1];
          
          break;
          }
        case 'registerProposal0_334': {
          const v9307 = v4456[1];
          
          break;
          }
        case 'voteProposal0_334': {
          const v10519 = v4456[1];
          sim_r.txns.push({
            kind: 'api',
            who: "voteProposal"
            });
          ;
          const v11002 = v10519[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:313:10:spread', stdlib.UInt_max, '0')];
          const v11013 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v4455), null);
          const v11014 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v11015 = stdlib.fromSome(v11013, v11014);
          const v11016 = v11015[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:103:11:array', stdlib.UInt_max, '0')];
          const v11020 = v3824.For;
          const v11021 = v3824.Against;
          switch (v3903[0]) {
            case 'AllocateFunds': {
              const v11025 = v3903[1];
              const v11026 = v11025[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:76:21:array', stdlib.UInt_max, '0')];
              stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v11026), null);
              
              break;
              }
            case 'ChangeAdmin': {
              const v11037 = v3903[1];
              const v11038 = v11037.admin;
              stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v11038), null);
              
              break;
              }
            case 'EjectMember': {
              const v11064 = v3903[1];
              stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v11064), null);
              
              break;
              }
            case 'None': {
              const v11073 = v3903[1];
              
              break;
              }
            case 'Stop': {
              const v11074 = v3903[1];
              
              break;
              }
            }
          let v11099;
          switch (v11002[0]) {
            case 'Against': {
              const v11100 = v11002[1];
              const v11103 = stdlib.add(v11021, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:335:40:decimal', stdlib.UInt_max, '1'));
              const v11104 = [v11020, v11103];
              v11099 = v11104;
              
              break;
              }
            case 'For': {
              const v11106 = v11002[1];
              const v11109 = stdlib.add(v11020, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:334:27:decimal', stdlib.UInt_max, '1'));
              const v11110 = [v11109, v11021];
              v11099 = v11110;
              
              break;
              }
            }
          const v11112 = v11099[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:333:13:array', stdlib.UInt_max, '0')];
          const v11113 = v11099[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:333:13:array', stdlib.UInt_max, '1')];
          const v11123 = null;
          const v11124 = await txn1.getOutput('voteProposal', 'v11123', ctc0, v11123);
          
          const v11132 = stdlib.lt(v11016, stdlib.UInt_max);
          let v11133;
          if (v11132) {
            const v11136 = stdlib.add(v11016, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:345:45:decimal', stdlib.UInt_max, '1'));
            const v11137 = [v11136, v3932];
            v11133 = v11137;
            }
          else {
            const v11138 = [v11016, v3932];
            v11133 = v11138;
            }
          await stdlib.simMapSet(sim_r, 0, v4455, v11133);
          const v11145 = stdlib.add(v11112, v11113);
          const v11147 = stdlib.ge(v11145, v3900);
          let v11149;
          if (v3933) {
            const v11151 = stdlib.mod(v3932, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
            const v11153 = stdlib.sub(v3932, v11151);
            const v11155 = stdlib.div(v11153, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
            v11149 = v11155;
            }
          else {
            v11149 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
            }
          let v11156;
          switch (v3903[0]) {
            case 'AllocateFunds': {
              const v11157 = v3903[1];
              const v11158 = v11157[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:76:21:array', stdlib.UInt_max, '0')];
              const v11159 = v11157[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:76:21:array', stdlib.UInt_max, '1')];
              const v11161 = stdlib.lt(v11159, v3828);
              const v11162 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v11158), null);
              let v11163;
              switch (v11162[0]) {
                case 'None': {
                  const v11164 = v11162[1];
                  v11163 = false;
                  
                  break;
                  }
                case 'Some': {
                  const v11165 = v11162[1];
                  v11163 = true;
                  
                  break;
                  }
                }
              const v11166 = v11163 ? v11161 : false;
              const v11168 = v3899 ? v11161 : v11166;
              v11156 = v11168;
              
              break;
              }
            case 'ChangeAdmin': {
              const v11169 = v3903[1];
              const v11170 = v11169.admin;
              const v11171 = v11169.fee;
              const v11173 = v11169.quorum;
              const v11175 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v11170), null);
              const v11177 = stdlib.fromSome(v11175, v11014);
              const v11178 = v11177[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:84:13:array', stdlib.UInt_max, '0')];
              let v11181;
              switch (v11175[0]) {
                case 'None': {
                  const v11182 = v11175[1];
                  v11181 = false;
                  
                  break;
                  }
                case 'Some': {
                  const v11183 = v11175[1];
                  v11181 = true;
                  
                  break;
                  }
                }
              const v11184 = stdlib.gt(v11178, v11149);
              const v11185 = v11181 ? v11184 : false;
              const v11186 = stdlib.gt(v11173, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:86:34:decimal', stdlib.UInt_max, '0'));
              let v11187;
              if (v11186) {
                const v11190 = stdlib.lt(v11173, v3812);
                v11187 = v11190;
                }
              else {
                v11187 = false;
                }
              const v11191 = stdlib.gt(v11171, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:87:33:decimal', stdlib.UInt_max, '0'));
              const v11192 = stdlib.lt(v11171, stdlib.UInt_max);
              const v11193 = v11191 ? v11192 : false;
              const v11194 = v11185 ? v11187 : false;
              const v11195 = v11194 ? v11193 : false;
              v11156 = v11195;
              
              break;
              }
            case 'EjectMember': {
              const v11196 = v3903[1];
              const v11197 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v11196), null);
              let v11198;
              switch (v11197[0]) {
                case 'None': {
                  const v11199 = v11197[1];
                  v11198 = false;
                  
                  break;
                  }
                case 'Some': {
                  const v11200 = v11197[1];
                  v11198 = true;
                  
                  break;
                  }
                }
              const v11202 = stdlib.addressEq(v11196, v3897);
              const v11203 = v11202 ? false : true;
              const v11204 = v11198 ? v11203 : false;
              v11156 = v11204;
              
              break;
              }
            case 'None': {
              const v11205 = v3903[1];
              v11156 = false;
              
              break;
              }
            case 'Stop': {
              const v11206 = v3903[1];
              v11156 = true;
              
              break;
              }
            }
          if (v11147) {
            const v11207 = stdlib.gt(v11112, v11113);
            const v11208 = v11156 ? v11207 : false;
            if (v11208) {
              switch (v3903[0]) {
                case 'AllocateFunds': {
                  const v11209 = v3903[1];
                  const v11210 = v11209[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:133:32:application', stdlib.UInt_max, '0')];
                  const v11211 = v11209[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:133:32:application', stdlib.UInt_max, '1')];
                  null;
                  const v11218 = stdlib.sub(v3828, v11211);
                  sim_r.txns.push({
                    kind: 'from',
                    to: v11210,
                    tok: undefined /* Nothing */
                    });
                  const v11223 = {
                    Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    action: v3820,
                    index: v3932
                    };
                  const v22234 = v3822;
                  const v22236 = v11223;
                  const v22238 = v11218;
                  const v22239 = v3822.admin;
                  const v22240 = v3822.fee;
                  const v22241 = v3822.openTreasury;
                  const v22242 = v3822.quorum;
                  const v22243 = v3822.registerSelf;
                  const v22244 = v11223.action;
                  const v22245 = v11223.index;
                  const v22246 = stdlib.ge(v22245, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
                  let v22247;
                  if (v22246) {
                    const v22248 = stdlib.mod(v22245, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
                    const v22249 = stdlib.sub(v22245, v22248);
                    const v22250 = stdlib.div(v22249, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
                    v22247 = v22250;
                    }
                  else {
                    v22247 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
                    }
                  sim_r.isHalt = false;
                  
                  break;
                  }
                case 'ChangeAdmin': {
                  const v11294 = v3903[1];
                  const v11295 = v11294.admin;
                  const v11296 = v11294.registerSelf;
                  const v11297 = v11294.fee;
                  const v11298 = v11294.quorum;
                  const v11299 = v11294.openTreasury;
                  null;
                  const v11333 = {
                    Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    action: v3820,
                    index: v3932
                    };
                  const v11334 = {
                    admin: v11295,
                    fee: v11297,
                    openTreasury: v11299,
                    quorum: v11298,
                    registerSelf: v11296
                    };
                  const v22263 = v11334;
                  const v22265 = v11333;
                  const v22267 = v3828;
                  const v22268 = v11334.admin;
                  const v22269 = v11334.fee;
                  const v22270 = v11334.openTreasury;
                  const v22271 = v11334.quorum;
                  const v22272 = v11334.registerSelf;
                  const v22273 = v11333.action;
                  const v22274 = v11333.index;
                  const v22275 = stdlib.ge(v22274, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
                  let v22276;
                  if (v22275) {
                    const v22277 = stdlib.mod(v22274, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
                    const v22278 = stdlib.sub(v22274, v22277);
                    const v22279 = stdlib.div(v22278, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
                    v22276 = v22279;
                    }
                  else {
                    v22276 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
                    }
                  sim_r.isHalt = false;
                  
                  break;
                  }
                case 'EjectMember': {
                  const v11382 = v3903[1];
                  null;
                  const v11428 = v11382;
                  await stdlib.simMapSet(sim_r, 0, v11382, undefined /* Nothing */);
                  null;
                  const v11431 = {
                    Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    action: v3820,
                    index: v3932
                    };
                  const v22292 = v3822;
                  const v22294 = v11431;
                  const v22296 = v3828;
                  const v22297 = v3822.admin;
                  const v22298 = v3822.fee;
                  const v22299 = v3822.openTreasury;
                  const v22300 = v3822.quorum;
                  const v22301 = v3822.registerSelf;
                  const v22302 = v11431.action;
                  const v22303 = v11431.index;
                  const v22304 = stdlib.ge(v22303, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
                  let v22305;
                  if (v22304) {
                    const v22306 = stdlib.mod(v22303, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
                    const v22307 = stdlib.sub(v22303, v22306);
                    const v22308 = stdlib.div(v22307, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
                    v22305 = v22308;
                    }
                  else {
                    v22305 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
                    }
                  sim_r.isHalt = false;
                  
                  break;
                  }
                case 'None': {
                  const v11465 = v3903[1];
                  null;
                  const v11526 = {
                    Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    action: v3820,
                    index: v3932
                    };
                  const v22321 = v3822;
                  const v22323 = v11526;
                  const v22325 = v3828;
                  const v22326 = v3822.admin;
                  const v22327 = v3822.fee;
                  const v22328 = v3822.openTreasury;
                  const v22329 = v3822.quorum;
                  const v22330 = v3822.registerSelf;
                  const v22331 = v11526.action;
                  const v22332 = v11526.index;
                  const v22333 = stdlib.ge(v22332, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
                  let v22334;
                  if (v22333) {
                    const v22335 = stdlib.mod(v22332, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
                    const v22336 = stdlib.sub(v22332, v22335);
                    const v22337 = stdlib.div(v22336, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
                    v22334 = v22337;
                    }
                  else {
                    v22334 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
                    }
                  sim_r.isHalt = false;
                  
                  break;
                  }
                case 'Stop': {
                  const v11548 = v3903[1];
                  null;
                  const v22367 = v3822.admin;
                  const v22373 = stdlib.sub(v3828, v3828);
                  sim_r.txns.push({
                    kind: 'from',
                    to: v22367,
                    tok: undefined /* Nothing */
                    });
                  const v22375 = (stdlib.le(await ctc.getBalance(), v22373) ? stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:353:29:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(), v22373));
                  sim_r.txns.push({
                    kind: 'from',
                    to: v22367,
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
              if (v11207) {
                switch (v3903[0]) {
                  case 'AllocateFunds': {
                    const v11631 = v3903[1];
                    null;
                    const v11635 = {
                      Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      action: v3820,
                      index: v3932
                      };
                    const v22379 = v3822;
                    const v22381 = v11635;
                    const v22383 = v3828;
                    const v22384 = v3822.admin;
                    const v22385 = v3822.fee;
                    const v22386 = v3822.openTreasury;
                    const v22387 = v3822.quorum;
                    const v22388 = v3822.registerSelf;
                    const v22389 = v11635.action;
                    const v22390 = v11635.index;
                    const v22391 = stdlib.ge(v22390, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
                    let v22392;
                    if (v22391) {
                      const v22393 = stdlib.mod(v22390, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
                      const v22394 = stdlib.sub(v22390, v22393);
                      const v22395 = stdlib.div(v22394, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
                      v22392 = v22395;
                      }
                    else {
                      v22392 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
                      }
                    sim_r.isHalt = false;
                    
                    break;
                    }
                  case 'ChangeAdmin': {
                    const v11641 = v3903[1];
                    null;
                    const v11648 = {
                      Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      action: v3820,
                      index: v3932
                      };
                    const v22408 = v3822;
                    const v22410 = v11648;
                    const v22412 = v3828;
                    const v22413 = v3822.admin;
                    const v22414 = v3822.fee;
                    const v22415 = v3822.openTreasury;
                    const v22416 = v3822.quorum;
                    const v22417 = v3822.registerSelf;
                    const v22418 = v11648.action;
                    const v22419 = v11648.index;
                    const v22420 = stdlib.ge(v22419, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
                    let v22421;
                    if (v22420) {
                      const v22422 = stdlib.mod(v22419, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
                      const v22423 = stdlib.sub(v22419, v22422);
                      const v22424 = stdlib.div(v22423, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
                      v22421 = v22424;
                      }
                    else {
                      v22421 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
                      }
                    sim_r.isHalt = false;
                    
                    break;
                    }
                  case 'EjectMember': {
                    const v11654 = v3903[1];
                    null;
                    const v11656 = {
                      Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      action: v3820,
                      index: v3932
                      };
                    const v22437 = v3822;
                    const v22439 = v11656;
                    const v22441 = v3828;
                    const v22442 = v3822.admin;
                    const v22443 = v3822.fee;
                    const v22444 = v3822.openTreasury;
                    const v22445 = v3822.quorum;
                    const v22446 = v3822.registerSelf;
                    const v22447 = v11656.action;
                    const v22448 = v11656.index;
                    const v22449 = stdlib.ge(v22448, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
                    let v22450;
                    if (v22449) {
                      const v22451 = stdlib.mod(v22448, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
                      const v22452 = stdlib.sub(v22448, v22451);
                      const v22453 = stdlib.div(v22452, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
                      v22450 = v22453;
                      }
                    else {
                      v22450 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
                      }
                    sim_r.isHalt = false;
                    
                    break;
                    }
                  case 'None': {
                    const v11662 = v3903[1];
                    null;
                    const v11664 = {
                      Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      action: v3820,
                      index: v3932
                      };
                    const v22466 = v3822;
                    const v22468 = v11664;
                    const v22470 = v3828;
                    const v22471 = v3822.admin;
                    const v22472 = v3822.fee;
                    const v22473 = v3822.openTreasury;
                    const v22474 = v3822.quorum;
                    const v22475 = v3822.registerSelf;
                    const v22476 = v11664.action;
                    const v22477 = v11664.index;
                    const v22478 = stdlib.ge(v22477, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
                    let v22479;
                    if (v22478) {
                      const v22480 = stdlib.mod(v22477, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
                      const v22481 = stdlib.sub(v22477, v22480);
                      const v22482 = stdlib.div(v22481, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
                      v22479 = v22482;
                      }
                    else {
                      v22479 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
                      }
                    sim_r.isHalt = false;
                    
                    break;
                    }
                  case 'Stop': {
                    const v11670 = v3903[1];
                    null;
                    const v11672 = {
                      Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      action: v3820,
                      index: v3932
                      };
                    const v22495 = v3822;
                    const v22497 = v11672;
                    const v22499 = v3828;
                    const v22500 = v3822.admin;
                    const v22501 = v3822.fee;
                    const v22502 = v3822.openTreasury;
                    const v22503 = v3822.quorum;
                    const v22504 = v3822.registerSelf;
                    const v22505 = v11672.action;
                    const v22506 = v11672.index;
                    const v22507 = stdlib.ge(v22506, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
                    let v22508;
                    if (v22507) {
                      const v22509 = stdlib.mod(v22506, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
                      const v22510 = stdlib.sub(v22506, v22509);
                      const v22511 = stdlib.div(v22510, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
                      v22508 = v22511;
                      }
                    else {
                      v22508 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
                      }
                    sim_r.isHalt = false;
                    
                    break;
                    }
                  }}
              else {
                switch (v3903[0]) {
                  case 'AllocateFunds': {
                    const v11678 = v3903[1];
                    null;
                    const v11682 = {
                      Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      action: v3820,
                      index: v3932
                      };
                    const v22524 = v3822;
                    const v22526 = v11682;
                    const v22528 = v3828;
                    const v22529 = v3822.admin;
                    const v22530 = v3822.fee;
                    const v22531 = v3822.openTreasury;
                    const v22532 = v3822.quorum;
                    const v22533 = v3822.registerSelf;
                    const v22534 = v11682.action;
                    const v22535 = v11682.index;
                    const v22536 = stdlib.ge(v22535, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
                    let v22537;
                    if (v22536) {
                      const v22538 = stdlib.mod(v22535, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
                      const v22539 = stdlib.sub(v22535, v22538);
                      const v22540 = stdlib.div(v22539, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
                      v22537 = v22540;
                      }
                    else {
                      v22537 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
                      }
                    sim_r.isHalt = false;
                    
                    break;
                    }
                  case 'ChangeAdmin': {
                    const v11688 = v3903[1];
                    null;
                    const v11695 = {
                      Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      action: v3820,
                      index: v3932
                      };
                    const v22553 = v3822;
                    const v22555 = v11695;
                    const v22557 = v3828;
                    const v22558 = v3822.admin;
                    const v22559 = v3822.fee;
                    const v22560 = v3822.openTreasury;
                    const v22561 = v3822.quorum;
                    const v22562 = v3822.registerSelf;
                    const v22563 = v11695.action;
                    const v22564 = v11695.index;
                    const v22565 = stdlib.ge(v22564, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
                    let v22566;
                    if (v22565) {
                      const v22567 = stdlib.mod(v22564, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
                      const v22568 = stdlib.sub(v22564, v22567);
                      const v22569 = stdlib.div(v22568, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
                      v22566 = v22569;
                      }
                    else {
                      v22566 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
                      }
                    sim_r.isHalt = false;
                    
                    break;
                    }
                  case 'EjectMember': {
                    const v11701 = v3903[1];
                    null;
                    const v11703 = {
                      Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      action: v3820,
                      index: v3932
                      };
                    const v22582 = v3822;
                    const v22584 = v11703;
                    const v22586 = v3828;
                    const v22587 = v3822.admin;
                    const v22588 = v3822.fee;
                    const v22589 = v3822.openTreasury;
                    const v22590 = v3822.quorum;
                    const v22591 = v3822.registerSelf;
                    const v22592 = v11703.action;
                    const v22593 = v11703.index;
                    const v22594 = stdlib.ge(v22593, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
                    let v22595;
                    if (v22594) {
                      const v22596 = stdlib.mod(v22593, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
                      const v22597 = stdlib.sub(v22593, v22596);
                      const v22598 = stdlib.div(v22597, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
                      v22595 = v22598;
                      }
                    else {
                      v22595 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
                      }
                    sim_r.isHalt = false;
                    
                    break;
                    }
                  case 'None': {
                    const v11709 = v3903[1];
                    null;
                    const v11711 = {
                      Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      action: v3820,
                      index: v3932
                      };
                    const v22611 = v3822;
                    const v22613 = v11711;
                    const v22615 = v3828;
                    const v22616 = v3822.admin;
                    const v22617 = v3822.fee;
                    const v22618 = v3822.openTreasury;
                    const v22619 = v3822.quorum;
                    const v22620 = v3822.registerSelf;
                    const v22621 = v11711.action;
                    const v22622 = v11711.index;
                    const v22623 = stdlib.ge(v22622, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
                    let v22624;
                    if (v22623) {
                      const v22625 = stdlib.mod(v22622, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
                      const v22626 = stdlib.sub(v22622, v22625);
                      const v22627 = stdlib.div(v22626, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
                      v22624 = v22627;
                      }
                    else {
                      v22624 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
                      }
                    sim_r.isHalt = false;
                    
                    break;
                    }
                  case 'Stop': {
                    const v11717 = v3903[1];
                    null;
                    const v11719 = {
                      Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      action: v3820,
                      index: v3932
                      };
                    const v22640 = v3822;
                    const v22642 = v11719;
                    const v22644 = v3828;
                    const v22645 = v3822.admin;
                    const v22646 = v3822.fee;
                    const v22647 = v3822.openTreasury;
                    const v22648 = v3822.quorum;
                    const v22649 = v3822.registerSelf;
                    const v22650 = v11719.action;
                    const v22651 = v11719.index;
                    const v22652 = stdlib.ge(v22651, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
                    let v22653;
                    if (v22652) {
                      const v22654 = stdlib.mod(v22651, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
                      const v22655 = stdlib.sub(v22651, v22654);
                      const v22656 = stdlib.div(v22655, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
                      v22653 = v22656;
                      }
                    else {
                      v22653 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
                      }
                    sim_r.isHalt = false;
                    
                    break;
                    }
                  }}}}
          else {
            const v11725 = {
              Against: v11113,
              For: v11112,
              action: v3903,
              index: v3932
              };
            const v22669 = v3822;
            const v22671 = v11725;
            const v22673 = v3828;
            const v22674 = v3822.admin;
            const v22675 = v3822.fee;
            const v22676 = v3822.openTreasury;
            const v22677 = v3822.quorum;
            const v22678 = v3822.registerSelf;
            const v22679 = v11725.action;
            const v22680 = v11725.index;
            const v22681 = stdlib.ge(v22680, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
            let v22682;
            if (v22681) {
              const v22683 = stdlib.mod(v22680, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
              const v22684 = stdlib.sub(v22680, v22683);
              const v22685 = stdlib.div(v22684, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
              v22682 = v22685;
              }
            else {
              v22682 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
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
    tys: [ctc4, ctc5, ctc1, ctc9, ctc10, ctc11, ctc1, ctc4, ctc1, ctc7, ctc1, ctc7, ctc9, ctc1, ctc7, ctc1, ctc18],
    waitIfNotPresent: false
    }));
  const {data: [v4456], secs: v4458, time: v4457, didSend: v2511, from: v4455 } = txn1;
  switch (v4456[0]) {
    case 'addMember0_334': {
      const v4459 = v4456[1];
      return;
      break;
      }
    case 'donate0_334': {
      const v5671 = v4456[1];
      return;
      break;
      }
    case 'eject0_334': {
      const v6883 = v4456[1];
      return;
      break;
      }
    case 'joinLeave0_334': {
      const v8095 = v4456[1];
      return;
      break;
      }
    case 'registerProposal0_334': {
      const v9307 = v4456[1];
      return;
      break;
      }
    case 'voteProposal0_334': {
      const v10519 = v4456[1];
      undefined /* setApiDetails */;
      const v10571 = stdlib.le(v3828, stdlib.UInt_max);
      stdlib.assert(v10571, {
        at: './dao/contracts/dao-core.rsh:169:50:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'voteProposal'
        });
      ;
      const v11002 = v10519[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:313:10:spread', stdlib.UInt_max, '0')];
      let v11006;
      if (v3933) {
        const v11008 = stdlib.mod(v3932, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
        const v11010 = stdlib.sub(v3932, v11008);
        const v11012 = stdlib.div(v11010, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
        v11006 = v11012;
        }
      else {
        v11006 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
        }
      const v11013 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4455), null);
      const v11014 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v11015 = stdlib.fromSome(v11013, v11014);
      const v11016 = v11015[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:103:11:array', stdlib.UInt_max, '0')];
      const v11017 = v11015[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:103:11:array', stdlib.UInt_max, '1')];
      const v11018 = stdlib.ge(v11016, v11006);
      stdlib.assert(v11018, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./dao/contracts/dao-core.rsh:104:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:314:22:application call to "requireIsMember" (defined at: ./dao/contracts/dao-core.rsh:101:36:function exp)', 'at ./dao/contracts/dao-core.rsh:341:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:341:13:function exp)'],
        msg: 'THIEF! SEIZE THEM!',
        who: 'voteProposal'
        });
      const v11020 = v3824.For;
      const v11021 = v3824.Against;
      let v11024;
      switch (v3903[0]) {
        case 'AllocateFunds': {
          const v11025 = v3903[1];
          const v11026 = v11025[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:76:21:array', stdlib.UInt_max, '0')];
          const v11027 = v11025[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:76:21:array', stdlib.UInt_max, '1')];
          const v11029 = stdlib.lt(v11027, v3828);
          const v11030 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v11026), null);
          let v11031;
          switch (v11030[0]) {
            case 'None': {
              const v11032 = v11030[1];
              v11031 = false;
              
              break;
              }
            case 'Some': {
              const v11033 = v11030[1];
              v11031 = true;
              
              break;
              }
            }
          const v11034 = v11031 ? v11029 : false;
          const v11036 = v3899 ? v11029 : v11034;
          v11024 = v11036;
          
          break;
          }
        case 'ChangeAdmin': {
          const v11037 = v3903[1];
          const v11038 = v11037.admin;
          const v11039 = v11037.fee;
          const v11041 = v11037.quorum;
          const v11043 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v11038), null);
          const v11045 = stdlib.fromSome(v11043, v11014);
          const v11046 = v11045[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:84:13:array', stdlib.UInt_max, '0')];
          let v11049;
          switch (v11043[0]) {
            case 'None': {
              const v11050 = v11043[1];
              v11049 = false;
              
              break;
              }
            case 'Some': {
              const v11051 = v11043[1];
              v11049 = true;
              
              break;
              }
            }
          const v11052 = stdlib.gt(v11046, v3934);
          const v11053 = v11049 ? v11052 : false;
          const v11054 = stdlib.gt(v11041, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:86:34:decimal', stdlib.UInt_max, '0'));
          let v11055;
          if (v11054) {
            const v11058 = stdlib.lt(v11041, v3812);
            v11055 = v11058;
            }
          else {
            v11055 = false;
            }
          const v11059 = stdlib.gt(v11039, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:87:33:decimal', stdlib.UInt_max, '0'));
          const v11060 = stdlib.lt(v11039, stdlib.UInt_max);
          const v11061 = v11059 ? v11060 : false;
          const v11062 = v11053 ? v11055 : false;
          const v11063 = v11062 ? v11061 : false;
          v11024 = v11063;
          
          break;
          }
        case 'EjectMember': {
          const v11064 = v3903[1];
          const v11065 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v11064), null);
          let v11066;
          switch (v11065[0]) {
            case 'None': {
              const v11067 = v11065[1];
              v11066 = false;
              
              break;
              }
            case 'Some': {
              const v11068 = v11065[1];
              v11066 = true;
              
              break;
              }
            }
          const v11070 = stdlib.addressEq(v11064, v3897);
          const v11071 = v11070 ? false : true;
          const v11072 = v11066 ? v11071 : false;
          v11024 = v11072;
          
          break;
          }
        case 'None': {
          const v11073 = v3903[1];
          v11024 = false;
          
          break;
          }
        case 'Stop': {
          const v11074 = v3903[1];
          v11024 = true;
          
          break;
          }
        }
      stdlib.assert(v11024, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./dao/contracts/dao-core.rsh:316:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:341:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:341:13:function exp)'],
        msg: 'No Proposal is currently active',
        who: 'voteProposal'
        });
      const v11076 = stdlib.gt(v11020, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:321:17:decimal', stdlib.UInt_max, '0'));
      if (v11076) {
        const v11078 = stdlib.sub(stdlib.UInt_max, v11021);
        const v11079 = stdlib.lt(v11020, v11078);
        stdlib.assert(v11079, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./dao/contracts/dao-core.rsh:322:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:341:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:341:13:function exp)'],
          msg: 'Voting limit reached',
          who: 'voteProposal'
          });
        }
      else {
        }
      const v11081 = stdlib.gt(v11021, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:324:21:decimal', stdlib.UInt_max, '0'));
      if (v11081) {
        const v11083 = stdlib.sub(stdlib.UInt_max, v11020);
        const v11084 = stdlib.lt(v11021, v11083);
        stdlib.assert(v11084, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./dao/contracts/dao-core.rsh:325:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:341:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:341:13:function exp)'],
          msg: 'Voting limit reached',
          who: 'voteProposal'
          });
        }
      else {
        }
      const v11088 = stdlib.add(v11020, v11021);
      const v11090 = stdlib.lt(v11088, v3900);
      stdlib.assert(v11090, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./dao/contracts/dao-core.rsh:328:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:341:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:341:13:function exp)'],
        msg: 'Quorum reached',
        who: 'voteProposal'
        });
      const v11097 = stdlib.lt(v11017, v3932);
      stdlib.assert(v11097, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./dao/contracts/dao-core.rsh:331:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:341:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:341:13:function exp)'],
        msg: 'Address has already voted in this session',
        who: 'voteProposal'
        });
      let v11099;
      switch (v11002[0]) {
        case 'Against': {
          const v11100 = v11002[1];
          const v11103 = stdlib.add(v11021, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:335:40:decimal', stdlib.UInt_max, '1'));
          const v11104 = [v11020, v11103];
          v11099 = v11104;
          
          break;
          }
        case 'For': {
          const v11106 = v11002[1];
          const v11109 = stdlib.add(v11020, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:334:27:decimal', stdlib.UInt_max, '1'));
          const v11110 = [v11109, v11021];
          v11099 = v11110;
          
          break;
          }
        }
      const v11112 = v11099[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:333:13:array', stdlib.UInt_max, '0')];
      const v11113 = v11099[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:333:13:array', stdlib.UInt_max, '1')];
      const v11115 = stdlib.sub(stdlib.UInt_max, v11113);
      const v11116 = stdlib.lt(v11112, v11115);
      stdlib.assert(v11116, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./dao/contracts/dao-core.rsh:337:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:341:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:341:13:function exp)'],
        msg: 'Voting limit reached (2)',
        who: 'voteProposal'
        });
      const v11119 = stdlib.sub(stdlib.UInt_max, v11112);
      const v11120 = stdlib.lt(v11113, v11119);
      stdlib.assert(v11120, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./dao/contracts/dao-core.rsh:338:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./dao/contracts/dao-core.rsh:341:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:341:13:function exp)'],
        msg: 'Voting limit reached (2)',
        who: 'voteProposal'
        });
      const v11123 = null;
      const v11124 = await txn1.getOutput('voteProposal', 'v11123', ctc0, v11123);
      if (v2511) {
        stdlib.protect(ctc0, await interact.out(v10519, v11124), {
          at: './dao/contracts/dao-core.rsh:313:11:application',
          fs: ['at ./dao/contracts/dao-core.rsh:313:11:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:313:11:function exp)', 'at ./dao/contracts/dao-core.rsh:342:12:application call to "k" (defined at: ./dao/contracts/dao-core.rsh:341:13:function exp)', 'at ./dao/contracts/dao-core.rsh:341:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:341:13:function exp)'],
          msg: 'out',
          who: 'voteProposal'
          });
        }
      else {
        }
      
      const v11132 = stdlib.lt(v11016, stdlib.UInt_max);
      let v11133;
      if (v11132) {
        const v11136 = stdlib.add(v11016, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:345:45:decimal', stdlib.UInt_max, '1'));
        const v11137 = [v11136, v3932];
        v11133 = v11137;
        }
      else {
        const v11138 = [v11016, v3932];
        v11133 = v11138;
        }
      await stdlib.mapSet(map0, v4455, v11133);
      const v11145 = stdlib.add(v11112, v11113);
      const v11147 = stdlib.ge(v11145, v3900);
      let v11149;
      if (v3933) {
        const v11151 = stdlib.mod(v3932, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
        const v11153 = stdlib.sub(v3932, v11151);
        const v11155 = stdlib.div(v11153, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
        v11149 = v11155;
        }
      else {
        v11149 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
        }
      let v11156;
      switch (v3903[0]) {
        case 'AllocateFunds': {
          const v11157 = v3903[1];
          const v11158 = v11157[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:76:21:array', stdlib.UInt_max, '0')];
          const v11159 = v11157[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:76:21:array', stdlib.UInt_max, '1')];
          const v11161 = stdlib.lt(v11159, v3828);
          const v11162 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v11158), null);
          let v11163;
          switch (v11162[0]) {
            case 'None': {
              const v11164 = v11162[1];
              v11163 = false;
              
              break;
              }
            case 'Some': {
              const v11165 = v11162[1];
              v11163 = true;
              
              break;
              }
            }
          const v11166 = v11163 ? v11161 : false;
          const v11168 = v3899 ? v11161 : v11166;
          v11156 = v11168;
          
          break;
          }
        case 'ChangeAdmin': {
          const v11169 = v3903[1];
          const v11170 = v11169.admin;
          const v11171 = v11169.fee;
          const v11173 = v11169.quorum;
          const v11175 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v11170), null);
          const v11177 = stdlib.fromSome(v11175, v11014);
          const v11178 = v11177[stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:84:13:array', stdlib.UInt_max, '0')];
          let v11181;
          switch (v11175[0]) {
            case 'None': {
              const v11182 = v11175[1];
              v11181 = false;
              
              break;
              }
            case 'Some': {
              const v11183 = v11175[1];
              v11181 = true;
              
              break;
              }
            }
          const v11184 = stdlib.gt(v11178, v11149);
          const v11185 = v11181 ? v11184 : false;
          const v11186 = stdlib.gt(v11173, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:86:34:decimal', stdlib.UInt_max, '0'));
          let v11187;
          if (v11186) {
            const v11190 = stdlib.lt(v11173, v3812);
            v11187 = v11190;
            }
          else {
            v11187 = false;
            }
          const v11191 = stdlib.gt(v11171, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:87:33:decimal', stdlib.UInt_max, '0'));
          const v11192 = stdlib.lt(v11171, stdlib.UInt_max);
          const v11193 = v11191 ? v11192 : false;
          const v11194 = v11185 ? v11187 : false;
          const v11195 = v11194 ? v11193 : false;
          v11156 = v11195;
          
          break;
          }
        case 'EjectMember': {
          const v11196 = v3903[1];
          const v11197 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v11196), null);
          let v11198;
          switch (v11197[0]) {
            case 'None': {
              const v11199 = v11197[1];
              v11198 = false;
              
              break;
              }
            case 'Some': {
              const v11200 = v11197[1];
              v11198 = true;
              
              break;
              }
            }
          const v11202 = stdlib.addressEq(v11196, v3897);
          const v11203 = v11202 ? false : true;
          const v11204 = v11198 ? v11203 : false;
          v11156 = v11204;
          
          break;
          }
        case 'None': {
          const v11205 = v3903[1];
          v11156 = false;
          
          break;
          }
        case 'Stop': {
          const v11206 = v3903[1];
          v11156 = true;
          
          break;
          }
        }
      if (v11147) {
        const v11207 = stdlib.gt(v11112, v11113);
        const v11208 = v11156 ? v11207 : false;
        if (v11208) {
          switch (v3903[0]) {
            case 'AllocateFunds': {
              const v11209 = v3903[1];
              const v11210 = v11209[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:133:32:application', stdlib.UInt_max, '0')];
              const v11211 = v11209[stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:133:32:application', stdlib.UInt_max, '1')];
              null;
              const v11218 = stdlib.sub(v3828, v11211);
              const v11219 = stdlib.ge(v11218, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:137:29:application', stdlib.UInt_max, '0'));
              stdlib.assert(v11219, {
                at: './dao/contracts/dao-core.rsh:137:29:application',
                fs: ['at ./dao/contracts/dao-core.rsh:135:28:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:136:44:function exp)', 'at ./dao/contracts/dao-core.rsh:135:28:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:135:28:function exp)', 'at ./dao/contracts/dao-core.rsh:347:28:application call to "doProposal" (defined at: ./dao/contracts/dao-core.rsh:115:51:function exp)', 'at ./dao/contracts/dao-core.rsh:341:13:application call to [unknown function] (defined at: ./dao/contracts/dao-core.rsh:341:13:function exp)'],
                msg: 'assume >= 0',
                who: 'voteProposal'
                });
              ;
              const v11223 = {
                Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                action: v3820,
                index: v3932
                };
              const v22234 = v3822;
              const v22236 = v11223;
              const v22238 = v11218;
              const v22239 = v3822.admin;
              const v22240 = v3822.fee;
              const v22241 = v3822.openTreasury;
              const v22242 = v3822.quorum;
              const v22243 = v3822.registerSelf;
              const v22244 = v11223.action;
              const v22245 = v11223.index;
              const v22246 = stdlib.ge(v22245, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
              let v22247;
              if (v22246) {
                const v22248 = stdlib.mod(v22245, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
                const v22249 = stdlib.sub(v22245, v22248);
                const v22250 = stdlib.div(v22249, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
                v22247 = v22250;
                }
              else {
                v22247 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
                }
              return;
              
              break;
              }
            case 'ChangeAdmin': {
              const v11294 = v3903[1];
              const v11295 = v11294.admin;
              const v11296 = v11294.registerSelf;
              const v11297 = v11294.fee;
              const v11298 = v11294.quorum;
              const v11299 = v11294.openTreasury;
              null;
              const v11333 = {
                Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                action: v3820,
                index: v3932
                };
              const v11334 = {
                admin: v11295,
                fee: v11297,
                openTreasury: v11299,
                quorum: v11298,
                registerSelf: v11296
                };
              const v22263 = v11334;
              const v22265 = v11333;
              const v22267 = v3828;
              const v22268 = v11334.admin;
              const v22269 = v11334.fee;
              const v22270 = v11334.openTreasury;
              const v22271 = v11334.quorum;
              const v22272 = v11334.registerSelf;
              const v22273 = v11333.action;
              const v22274 = v11333.index;
              const v22275 = stdlib.ge(v22274, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
              let v22276;
              if (v22275) {
                const v22277 = stdlib.mod(v22274, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
                const v22278 = stdlib.sub(v22274, v22277);
                const v22279 = stdlib.div(v22278, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
                v22276 = v22279;
                }
              else {
                v22276 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
                }
              return;
              
              break;
              }
            case 'EjectMember': {
              const v11382 = v3903[1];
              null;
              const v11428 = v11382;
              await stdlib.mapSet(map0, v11382, undefined /* Nothing */);
              null;
              const v11431 = {
                Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                action: v3820,
                index: v3932
                };
              const v22292 = v3822;
              const v22294 = v11431;
              const v22296 = v3828;
              const v22297 = v3822.admin;
              const v22298 = v3822.fee;
              const v22299 = v3822.openTreasury;
              const v22300 = v3822.quorum;
              const v22301 = v3822.registerSelf;
              const v22302 = v11431.action;
              const v22303 = v11431.index;
              const v22304 = stdlib.ge(v22303, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
              let v22305;
              if (v22304) {
                const v22306 = stdlib.mod(v22303, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
                const v22307 = stdlib.sub(v22303, v22306);
                const v22308 = stdlib.div(v22307, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
                v22305 = v22308;
                }
              else {
                v22305 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
                }
              return;
              
              break;
              }
            case 'None': {
              const v11465 = v3903[1];
              null;
              const v11526 = {
                Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                action: v3820,
                index: v3932
                };
              const v22321 = v3822;
              const v22323 = v11526;
              const v22325 = v3828;
              const v22326 = v3822.admin;
              const v22327 = v3822.fee;
              const v22328 = v3822.openTreasury;
              const v22329 = v3822.quorum;
              const v22330 = v3822.registerSelf;
              const v22331 = v11526.action;
              const v22332 = v11526.index;
              const v22333 = stdlib.ge(v22332, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
              let v22334;
              if (v22333) {
                const v22335 = stdlib.mod(v22332, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
                const v22336 = stdlib.sub(v22332, v22335);
                const v22337 = stdlib.div(v22336, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
                v22334 = v22337;
                }
              else {
                v22334 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
                }
              return;
              
              break;
              }
            case 'Stop': {
              const v11548 = v3903[1];
              null;
              const v22367 = v3822.admin;
              const v22373 = stdlib.sub(v3828, v3828);
              const v22374 = stdlib.ge(v22373, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:352:25:application', stdlib.UInt_max, '0'));
              stdlib.assert(v22374, {
                at: './dao/contracts/dao-core.rsh:352:25:application',
                fs: [],
                msg: 'assume >= 0',
                who: 'voteProposal'
                });
              ;
              const v22375 = (stdlib.le(await ctc.getBalance(), v22373) ? stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:353:29:application', stdlib.UInt_max, '0') : stdlib.sub(await ctc.getBalance(), v22373));
              const v22376 = stdlib.add(v22375, v22373);
              const v22377 = stdlib.sub(v22376, v22375);
              const v22378 = stdlib.ge(v22377, stdlib.checkedBigNumberify('./dao/contracts/dao-core.rsh:353:35:application', stdlib.UInt_max, '0'));
              stdlib.assert(v22378, {
                at: './dao/contracts/dao-core.rsh:353:35:application',
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
          if (v11207) {
            switch (v3903[0]) {
              case 'AllocateFunds': {
                const v11631 = v3903[1];
                null;
                const v11635 = {
                  Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  action: v3820,
                  index: v3932
                  };
                const v22379 = v3822;
                const v22381 = v11635;
                const v22383 = v3828;
                const v22384 = v3822.admin;
                const v22385 = v3822.fee;
                const v22386 = v3822.openTreasury;
                const v22387 = v3822.quorum;
                const v22388 = v3822.registerSelf;
                const v22389 = v11635.action;
                const v22390 = v11635.index;
                const v22391 = stdlib.ge(v22390, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
                let v22392;
                if (v22391) {
                  const v22393 = stdlib.mod(v22390, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
                  const v22394 = stdlib.sub(v22390, v22393);
                  const v22395 = stdlib.div(v22394, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
                  v22392 = v22395;
                  }
                else {
                  v22392 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
                  }
                return;
                
                break;
                }
              case 'ChangeAdmin': {
                const v11641 = v3903[1];
                null;
                const v11648 = {
                  Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  action: v3820,
                  index: v3932
                  };
                const v22408 = v3822;
                const v22410 = v11648;
                const v22412 = v3828;
                const v22413 = v3822.admin;
                const v22414 = v3822.fee;
                const v22415 = v3822.openTreasury;
                const v22416 = v3822.quorum;
                const v22417 = v3822.registerSelf;
                const v22418 = v11648.action;
                const v22419 = v11648.index;
                const v22420 = stdlib.ge(v22419, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
                let v22421;
                if (v22420) {
                  const v22422 = stdlib.mod(v22419, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
                  const v22423 = stdlib.sub(v22419, v22422);
                  const v22424 = stdlib.div(v22423, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
                  v22421 = v22424;
                  }
                else {
                  v22421 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
                  }
                return;
                
                break;
                }
              case 'EjectMember': {
                const v11654 = v3903[1];
                null;
                const v11656 = {
                  Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  action: v3820,
                  index: v3932
                  };
                const v22437 = v3822;
                const v22439 = v11656;
                const v22441 = v3828;
                const v22442 = v3822.admin;
                const v22443 = v3822.fee;
                const v22444 = v3822.openTreasury;
                const v22445 = v3822.quorum;
                const v22446 = v3822.registerSelf;
                const v22447 = v11656.action;
                const v22448 = v11656.index;
                const v22449 = stdlib.ge(v22448, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
                let v22450;
                if (v22449) {
                  const v22451 = stdlib.mod(v22448, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
                  const v22452 = stdlib.sub(v22448, v22451);
                  const v22453 = stdlib.div(v22452, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
                  v22450 = v22453;
                  }
                else {
                  v22450 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
                  }
                return;
                
                break;
                }
              case 'None': {
                const v11662 = v3903[1];
                null;
                const v11664 = {
                  Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  action: v3820,
                  index: v3932
                  };
                const v22466 = v3822;
                const v22468 = v11664;
                const v22470 = v3828;
                const v22471 = v3822.admin;
                const v22472 = v3822.fee;
                const v22473 = v3822.openTreasury;
                const v22474 = v3822.quorum;
                const v22475 = v3822.registerSelf;
                const v22476 = v11664.action;
                const v22477 = v11664.index;
                const v22478 = stdlib.ge(v22477, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
                let v22479;
                if (v22478) {
                  const v22480 = stdlib.mod(v22477, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
                  const v22481 = stdlib.sub(v22477, v22480);
                  const v22482 = stdlib.div(v22481, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
                  v22479 = v22482;
                  }
                else {
                  v22479 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
                  }
                return;
                
                break;
                }
              case 'Stop': {
                const v11670 = v3903[1];
                null;
                const v11672 = {
                  Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  action: v3820,
                  index: v3932
                  };
                const v22495 = v3822;
                const v22497 = v11672;
                const v22499 = v3828;
                const v22500 = v3822.admin;
                const v22501 = v3822.fee;
                const v22502 = v3822.openTreasury;
                const v22503 = v3822.quorum;
                const v22504 = v3822.registerSelf;
                const v22505 = v11672.action;
                const v22506 = v11672.index;
                const v22507 = stdlib.ge(v22506, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
                let v22508;
                if (v22507) {
                  const v22509 = stdlib.mod(v22506, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
                  const v22510 = stdlib.sub(v22506, v22509);
                  const v22511 = stdlib.div(v22510, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
                  v22508 = v22511;
                  }
                else {
                  v22508 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
                  }
                return;
                
                break;
                }
              }}
          else {
            switch (v3903[0]) {
              case 'AllocateFunds': {
                const v11678 = v3903[1];
                null;
                const v11682 = {
                  Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  action: v3820,
                  index: v3932
                  };
                const v22524 = v3822;
                const v22526 = v11682;
                const v22528 = v3828;
                const v22529 = v3822.admin;
                const v22530 = v3822.fee;
                const v22531 = v3822.openTreasury;
                const v22532 = v3822.quorum;
                const v22533 = v3822.registerSelf;
                const v22534 = v11682.action;
                const v22535 = v11682.index;
                const v22536 = stdlib.ge(v22535, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
                let v22537;
                if (v22536) {
                  const v22538 = stdlib.mod(v22535, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
                  const v22539 = stdlib.sub(v22535, v22538);
                  const v22540 = stdlib.div(v22539, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
                  v22537 = v22540;
                  }
                else {
                  v22537 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
                  }
                return;
                
                break;
                }
              case 'ChangeAdmin': {
                const v11688 = v3903[1];
                null;
                const v11695 = {
                  Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  action: v3820,
                  index: v3932
                  };
                const v22553 = v3822;
                const v22555 = v11695;
                const v22557 = v3828;
                const v22558 = v3822.admin;
                const v22559 = v3822.fee;
                const v22560 = v3822.openTreasury;
                const v22561 = v3822.quorum;
                const v22562 = v3822.registerSelf;
                const v22563 = v11695.action;
                const v22564 = v11695.index;
                const v22565 = stdlib.ge(v22564, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
                let v22566;
                if (v22565) {
                  const v22567 = stdlib.mod(v22564, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
                  const v22568 = stdlib.sub(v22564, v22567);
                  const v22569 = stdlib.div(v22568, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
                  v22566 = v22569;
                  }
                else {
                  v22566 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
                  }
                return;
                
                break;
                }
              case 'EjectMember': {
                const v11701 = v3903[1];
                null;
                const v11703 = {
                  Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  action: v3820,
                  index: v3932
                  };
                const v22582 = v3822;
                const v22584 = v11703;
                const v22586 = v3828;
                const v22587 = v3822.admin;
                const v22588 = v3822.fee;
                const v22589 = v3822.openTreasury;
                const v22590 = v3822.quorum;
                const v22591 = v3822.registerSelf;
                const v22592 = v11703.action;
                const v22593 = v11703.index;
                const v22594 = stdlib.ge(v22593, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
                let v22595;
                if (v22594) {
                  const v22596 = stdlib.mod(v22593, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
                  const v22597 = stdlib.sub(v22593, v22596);
                  const v22598 = stdlib.div(v22597, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
                  v22595 = v22598;
                  }
                else {
                  v22595 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
                  }
                return;
                
                break;
                }
              case 'None': {
                const v11709 = v3903[1];
                null;
                const v11711 = {
                  Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  action: v3820,
                  index: v3932
                  };
                const v22611 = v3822;
                const v22613 = v11711;
                const v22615 = v3828;
                const v22616 = v3822.admin;
                const v22617 = v3822.fee;
                const v22618 = v3822.openTreasury;
                const v22619 = v3822.quorum;
                const v22620 = v3822.registerSelf;
                const v22621 = v11711.action;
                const v22622 = v11711.index;
                const v22623 = stdlib.ge(v22622, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
                let v22624;
                if (v22623) {
                  const v22625 = stdlib.mod(v22622, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
                  const v22626 = stdlib.sub(v22622, v22625);
                  const v22627 = stdlib.div(v22626, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
                  v22624 = v22627;
                  }
                else {
                  v22624 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
                  }
                return;
                
                break;
                }
              case 'Stop': {
                const v11717 = v3903[1];
                null;
                const v11719 = {
                  Against: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  For: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  action: v3820,
                  index: v3932
                  };
                const v22640 = v3822;
                const v22642 = v11719;
                const v22644 = v3828;
                const v22645 = v3822.admin;
                const v22646 = v3822.fee;
                const v22647 = v3822.openTreasury;
                const v22648 = v3822.quorum;
                const v22649 = v3822.registerSelf;
                const v22650 = v11719.action;
                const v22651 = v11719.index;
                const v22652 = stdlib.ge(v22651, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
                let v22653;
                if (v22652) {
                  const v22654 = stdlib.mod(v22651, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
                  const v22655 = stdlib.sub(v22651, v22654);
                  const v22656 = stdlib.div(v22655, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
                  v22653 = v22656;
                  }
                else {
                  v22653 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
                  }
                return;
                
                break;
                }
              }}}}
      else {
        const v11725 = {
          Against: v11113,
          For: v11112,
          action: v3903,
          index: v3932
          };
        const v22669 = v3822;
        const v22671 = v11725;
        const v22673 = v3828;
        const v22674 = v3822.admin;
        const v22675 = v3822.fee;
        const v22676 = v3822.openTreasury;
        const v22677 = v3822.quorum;
        const v22678 = v3822.registerSelf;
        const v22679 = v11725.action;
        const v22680 = v11725.index;
        const v22681 = stdlib.ge(v22680, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:12:decimal', stdlib.UInt_max, '10'));
        let v22682;
        if (v22681) {
          const v22683 = stdlib.mod(v22680, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:35:decimal', stdlib.UInt_max, '10'));
          const v22684 = stdlib.sub(v22680, v22683);
          const v22685 = stdlib.div(v22684, stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:42:decimal', stdlib.UInt_max, '10'));
          v22682 = v22685;
          }
        else {
          v22682 = stdlib.checkedBigNumberify('./dao/contracts/shared.rsh:52:47:decimal', stdlib.UInt_max, '1');
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
  appApproval: `BiAkAAEQ////////////AQQDCAIKICkRBSEGj6KvlAro3ua5DJmG0PIM+5bDug2NAkvCu92WC/qoxLkME5uQ85gF8OrrwwbxxtHcBpIDM+ACgAORA4kDiAMy6pWp+AMmCgEAAAEBAQIBAwTjht/SBGiwvLEEQuL4EwQMmUlpBH5kmAsiNQAxGEESwClkSSJbNQFJIQZbNQIkWzUIMRkjEkEACjEAKCELr2ZCEoc2GgAXSUEBvCI1BCM1BkkhDwxAAOJJIRAMQACASSERDEAAZUkhEgxAAC8hEhJENAEhBRJENhoBiBKFSTX+IlVAAAYiNf9CAAYjNf9CAAA0/xZRBwg1B0ISPSEREkQ0ASEFEkQoZCpkUCtkUCcEZFBJNQMhEyEUWEk1/yEGWzT/IlsIFjUHQhIOIRASRDYaATX/KjT/UIErr1BCAUBJIRUMQAAvSSEWDEAAFCEWEkQ2GgE1/yg0/1AhF69QQgEeIRUSRDYaATX/KzT/UCEXr1BCAQohDxJENAEhBRJEJK82GgGIEdtJNf9XARA0/yJVTVcACDUHQhGfSSEYDEAAk0khGQxAAHdJIRoMQAAjIRoSRDQBIQUSRChkKmRQK2RQJwRkUEk1AyEbIRxYNQdCEWchGRJENAEhBRJEKGQqZFArZFAnBGRQSTUDVyCANANXACBQNAMhHSEJWFA0AyEeIQZYUDQDIR8jWFA0AyEgIQZYUDQDISEjWFA1B0IRGiEYEkQ2GgE1/ycENP9QISKvUEIAS0khIwxAABIhIxJENhoBNf+AAQQ0/1BCADKBtreZlQESRDYaATX/gAEFNP9QISKvUEIAGDYaAhc1BDYaAzYaARdJIQcMQA4wIQcSRCEFNAESRDQESSISTDQCEhFEKGQqZFArZFAnBGRQSTUDSUpKSkpKSkpXACA1/1cggDX+gaABWzX9V6gzNfxX2zI1+yETIRRYNfqB2AJbNfkhHSEJWDX4IR5bNfchISNYFzX2ISBbNfUhHyNYFzX0IRshHFg184HFA1s18oHNAyNYFzXxgc4DWzXwSTUFNe+ABHVxMYY071CwNO8iVUkhBQxACj1JIQQMQAkiSSEMDEAGeSEMEkQ071cBATXWsSKyASEOshA0CLIYszT5JQ5ENPFBAA808kkhCBgJIQgKNdVCAAMjNdUkr0k11DEAiA/0STXSVwEQNNIiVU1JNdMiW0k10jTVD0Q0+iEGWzXRNPoiWzXQNPMiVUkhBwxAAE1JIQUMQAAYSSEEDEAACiEEEkQjNc9CAOVIIjXPQgDeSDTzVwEgNc40zogPmUk1zCJVQAAGIjXNQgAGIzXNQgAANM00zjT4ExA1z0IAsEkjDEAAbkg081cBMkk1ziENWzXNNM4hCls1zDTOVwAgiA9VSTXLIlVAAAYiNcpCAAYjNcpCAAA0zCINQQAKNMw0/Qw1yUIAAyI1yTTKNNQ0y0k1yFcBEDTIIlVNIls08A0QNMkQNM0iDTTNJQwQEDXPQgA8SDTzVwEoSTXOIQlbNPkMNc00zlcAIIgO60k1yyJVQAAGIjXMQgAGIzXMQgAANMw0zRA0zTT2TTXPQgAANM9ENNEiDUEACzTRJTTQCQxEQgAANNAiDUEACzTQJTTRCQxEQgAANNE00Ag09QxENNMhBls08gxENNZJNc0iVUAADjTRFjTQIwgWUDXOQgAONNEjCBY00BZQNc5CAAA0ziJbNc00ziEGWzXMNM0lNMwJDEQ0zCU0zQkMRIAIAAAAAAAAK3OwKTUHNNIlDEEADjTSIwgWNPIWUDXLQgAJNNIWNPIWUDXLMQAoKjTLUGY08UEADzTySSEIGAkhCAo1ykIAAyM1yjTzIlVJIQcMQABNSSEFDEAAGEkhBAxAAAohBBJEIzXJQgDlSCI1yUIA3kg081cBIDXINMiIDcpJNcYiVUAABiI1x0IABiM1x0IAADTHNMg0+BMQNclCALBJIwxAAG5INPNXATJJNcghDVs1xzTIIQpbNcY0yFcAIIgNhkk1xSJVQAAGIjXEQgAGIzXEQgAANMYiDUEACjTGNP0MNcNCAAMiNcM0xDTUNMVJNcJXARA0wiJVTSJbNMoNEDTDEDTHIg00xyUMEBA1yUIAPEg081cBKEk1yCEJWzT5DDXHNMhXACCIDRxJNcUiVUAABiI1xkIABiM1xkIAADTGNMcQNMc09k01yUIAADTNNMwINPUPQQMVNM00zA01yDTJNMgQQQFBNPMiVUkhBwxAAJdJIQUMQABWSSEEDEAAKSEEEkQnBTTyFlA081CwNP80/jT9NPw0+yIkrzT8UDTyFlAyBjT5Qgr6SCcFNPIWUDTzULA0/zT+NP00/DT7IySvNPxQNPIWUDIGNPlCCtRINPNXASA1xycFNPIWUDTzULA0xyghC69mJwg0x1CwNP80/jT9NPw0+yMkrzT8UDTyFlAyBjT5QgqaSSMMQABISDTzVwEyNccnBTTyFlA081CwNP80/jT9NPw0x1cAIDTHVyEIUDTHVzEBUDTHVykIUDTHVyABUCMkrzT8UDTyFlAyBjT5QgpMSDTzVwEoSTXHIQlbNcYnBTTyFlA081CwNPk0xglJNcUiD0SxIrIBNMayCCOyEDTHVwAgsgezNP80/jT9NPw0+yMkrzT8UDTyFlAyBjTFQgn7NMhBAOA08yJVSSEHDEAAg0khBQxAAFZJIQQMQAApIQQSRCcGNPIWUDTzULA0/zT+NP00/DT7IySvNPxQNPIWUDIGNPlCCbRIJwY08hZQNPNQsDT/NP40/TT8NPsjJK80/FA08hZQMgY0+UIJjkgnBjTyFlA081CwNP80/jT9NPw0+yMkrzT8UDTyFlAyBjT5QgloSSMMQAAmSCcGNPIWUDTzULA0/zT+NP00/DT7IySvNPxQNPIWUDIGNPlCCTxIJwY08hZQNPNQsDT/NP40/TT8NPsjJK80/FA08hZQMgY0+UIJFjTzIlVJIQcMQACDSSEFDEAAVkkhBAxAACkhBBJEJwc08hZQNPNQsDT/NP40/TT8NPsjJK80/FA08hZQMgY0+UII1EgnBzTyFlA081CwNP80/jT9NPw0+yMkrzT8UDTyFlAyBjT5QgiuSCcHNPIWUDTzULA0/zT+NP00/DT7IySvNPxQNPIWUDIGNPlCCIhJIwxAACZIJwc08hZQNPNQsDT/NP40/TT8NPsjJK80/FA08hZQMgY0+UIIXEgnBzTyFlA081CwNP80/jT9NPw0+yMkrzT8UDTyFlAyBjT5Qgg2NP80/jT9NPw0+yM0zBY0zRZQNPNQNPIWUDIGNPlCCBZINO9XATM11jT5JQ5ENNY11TTxQQAPNPJJIQgYCSEICjXUQgADIzXUJK9JNdMxAIgJh0k10VcBEDTRIlVNIltJNdI01A9ENNI08A9ENPMiVUkhBwxAAE1JIQUMQAAYSSEEDEAACiEEEkQjNdFCAOVIIjXRQgDeSDTzVwEgNdA00IgJNkk1ziJVQAAGIjXPQgAGIzXPQgAANM800DT4ExA10UIAsEkjDEAAbkg081cBMkk10CENWzXPNNAhCls1zjTQVwAgiAjySTXNIlVAAAYiNcxCAAYjNcxCAAA0ziINQQAKNM40/Qw1y0IAAyI1yzTMNNM0zUk1ylcBEDTKIlVNIls08A0QNMsQNM8iDTTPJQwQEDXRQgA8SDTzVwEoSTXQIQlbNPkMNc800FcAIIgIiEk1zSJVQAAGIjXOQgAGIzXOQgAANM40zxA0zzT2TTXRQgAANNEURDTyJSMJDEQ01SJVSSEHDEAATUkhBQxAABhJIQQMQAAKIQQSRCM10EIA5UgiNdBCAN5INNVXASA1zzTPiAgjSTXNIlVAAAYiNc5CAAYjNc5CAAA0zjTPNPgTEDXQQgCwSSMMQABuSDTVVwEySTXPIQ1bNc40zyEKWzXNNM9XACCIB99JNcwiVUAABiI1y0IABiM1y0IAADTNIg1BAAo0zTT9DDXKQgADIjXKNMs00zTMSTXJVwEQNMkiVU0iWzTwDRA0yhA0ziINNM4lDBAQNdBCADxINNVXAShJNc8hCVs0+Qw1zjTPVwAgiAd1STXMIlVAAAYiNc1CAAYjNc1CAAA0zTTOEDTONPZNNdBCAAA00ESACAAAAAAAACYUsCk1B4AElpSnrTTVUDEAULA0/zT+NP00/DT7IySvNNVQNPIjCBZQMgY0+UIFdEg071cBATXWNNYXSTXVQQAfMQCIBwFJNdMiVUAABiI11EIABiM11EIAADTUREIAHzT0RDEAiAbfSTXTIlVAAAYjNdRCAAYiNdRCAAA01EQ09yI01U1JNdQlNPkJDEQ0+TTUCEk10yUORDTUiAa4NNVBAB8xAIgGn0k10SJVQAAGIjXSQgAGIzXSQgAANNJEQgAfNPREMQCIBn1JNdEiVUAABiM10kIABiI10kIAADTSRDTUJTTTCQxEgAgAAAAAAAAgwrApNQc01UEAITEAKCELr2YnCDEAULA0/zT+NP00/DT7IzT6MgY000IEhzEAKCo08BYhBq9QUGYnCTEAULA0/zT+NP00/DT7IzT6MgY000IEYEkjDEACrUkhBwxAAclINO9XASA11jT5JQ5ENNY11TTViAXgSTXUIlVAAAYiNdNCAAYjNdNCAAAxADTVE0Q01CJVQAAGIjXSQgAGIzXSQgAANNJENNM01TT4ExBEMQA0+BJBAC+ACAAAAAAAABvRsCk1BzTVKCELr2YnCDTVULA0/zT+NP00/DT7IzT6MgY0+UIDzTTyJSMJDkQ08yJVSSEHDEAATUkhBQxAABhJIQQMQAAKIQQSRCM10UIA5UgiNdFCAN5INPNXASA10DTQiAUySTXOIlVAAAYiNc9CAAYjNc9CAAA0zzTQNPgTEDXRQgCwSSMMQABuSDTzVwEySTXQIQ1bNc800CEKWzXONNBXACCIBO5JNc0iVUAABiI1zEIABiM1zEIAADTOIg1BAAo0zjT9DDXLQgADIjXLNMwkrzTNSTXKVwEQNMoiVU0iWzTwDRA0yxA0zyINNM8lDBAQNdFCADxINPNXAShJNdAhCVs0+Qw1zzTQVwAgiASESTXNIlVAAAYiNc5CAAYjNc5CAAA0zjTPEDTPNPZNNdFCAAA00USACAAAAAAAABuxsCk1BzT/NP40/TT8NPsjJK8rNNVQgRKvUFA08iMIFlAyBjT5QgKKSDTvVwEINdY01hc11SU01Qk11DT5NNQMRDT5NNUISTXTJQ5ENNWIBBM00zTUDEQxAIgD+Uk10iJVQAAGIjXRQgAGIzXRQgAANNFBAG4krzTSSTXPVwEQNM8iVU1JNdAiWzXPNNAhBls1zjTPJSMJDEEADjTPIwgWNM4WUDXNQgAQNPA0z0k08A9NFjTOFlA1zTEAKCo0zVBmgAgAAAAAAAAWlLApNQc0/zT+NP00/DT7IzT6MgY000IBz4AIAAAAAAAAFpywKTUHNP80/jT9NPw0+yM0+jIGNNNCAa1INO9XASA11jTWNdU01YgDPzXUJK801Ek101cBEDTTIlVNIls08A9ENNQiVUAABiM100IABiI100IAADTTRDT5NPcISTXSJQ5ENPeIAxE01CJVQAAGIzXRQgAGIjXRQgAANNFENNUoKjTwFiEGr1BQZicJNNVQsIAIAAAAAAAAEbSwKTUHNP80/jT9NPw0+yM0+jIGNNJCARQiEkSBwJoMiAK8sSKyASEOshAishiABgYxADIJErIegAEGsh+ztD01CCI0ARJENARJIhJMNAISEURJNQVJSklXAIA1/1eAARc1/oGBAVs1/VeJARc1/IGKAVs1+4AEX/m0qTT/UDT+FlEHCFA0/RZQNPwWUQcIUDT7FlCwJYGAlOvcAw1ENP0jD0QlIQgKNfo0/TT6DEQxACiAEQH//////////wAAAAAAAAAAZoAzAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANfkxADT/NPo0+TEANPsWUDT8FlEHCFA0/RZQNP4WUQcIUCMkrzT5UCEGr1AyBiJCAAA1/zX+Nf01/DX7Nfo1+TX4Nfc0/EEAvDT7VwAgNfY0+yEJWzX1NPtXKAEXNfQ0+yEKWzXzNPtXMQEXNfI0/VcQMzXxNP2BQ1tJNfAhCA9JNe9BAA808EkhCBgJIQgKNe5CAAMjNe409zT4UDT5FlA0+lA0+1A0/VA0/xZQNPZQNPUWUDT0FlEHCFA08xZQNPIWUQcIUDTxUDTwFlA07xZRBwhQNO4WUChLAVcAf2cqSwFXf39nK0sBV/5/ZycESwGB/QKBWVhnSCEFNQEyBjUCQgB3NPtXACA19jT/SQlJNfUiD0SxIrIBNP+yCCOyEDT2sgezMgpgMgp4CTT1CUk19DT1CDT0CSIPRLEisgE09LIII7IQNPayB7NCAAAxGSEMEkSxIrIBIQ6yEDQIshghDLIZs7EisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCk0ARY0AhY0CBZQUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEIQwxNRJEIjE2EkQjMTcSRCI1ASI1AiI1CEL/p0kxGGFAAAVIIQuviShiiTQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: {
    api_voteProposal: 1
    },
  extraPages: 2,
  mapDataKeys: 1,
  mapDataSize: 17,
  stateKeys: 4,
  stateSize: 470,
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
                "name": "v3799",
                "type": "tuple"
              },
              {
                "internalType": "bool",
                "name": "v3800",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "v3801",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "v3802",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "v3803",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
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
                "name": "v3799",
                "type": "tuple"
              },
              {
                "internalType": "bool",
                "name": "v3800",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "v3801",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "v3802",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "v3803",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
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
                    "internalType": "enum _enum_T21",
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
                    "internalType": "struct T15",
                    "name": "_addMember0_334",
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
                    "internalType": "struct T16",
                    "name": "_donate0_334",
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
                    "internalType": "struct T15",
                    "name": "_eject0_334",
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
                    "internalType": "struct T17",
                    "name": "_joinLeave0_334",
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
                    "internalType": "struct T18",
                    "name": "_registerProposal0_334",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "components": [
                          {
                            "internalType": "enum _enum_T19",
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
                        "internalType": "struct T19",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T20",
                    "name": "_voteProposal0_334",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T21",
                "name": "v4456",
                "type": "tuple"
              }
            ],
            "internalType": "struct T22",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T23",
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
    "name": "_reach_oe_v11123",
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
    "name": "_reach_oe_v4532",
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
    "name": "_reach_oe_v5780",
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
    "name": "_reach_oe_v5788",
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
    "name": "_reach_oe_v7089",
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
    "name": "_reach_oe_v7121",
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
    "name": "_reach_oe_v8386",
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
    "name": "_reach_oe_v9748",
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
                    "internalType": "enum _enum_T21",
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
                    "internalType": "struct T15",
                    "name": "_addMember0_334",
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
                    "internalType": "struct T16",
                    "name": "_donate0_334",
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
                    "internalType": "struct T15",
                    "name": "_eject0_334",
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
                    "internalType": "struct T17",
                    "name": "_joinLeave0_334",
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
                    "internalType": "struct T18",
                    "name": "_registerProposal0_334",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "components": [
                          {
                            "internalType": "enum _enum_T19",
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
                        "internalType": "struct T19",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T20",
                    "name": "_voteProposal0_334",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T21",
                "name": "v4456",
                "type": "tuple"
              }
            ],
            "internalType": "struct T22",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T23",
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
        "name": "v22701",
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
        "name": "v22703",
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
            "internalType": "enum _enum_T19",
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
        "internalType": "struct T19",
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
  Bytecode: `0x608060405260405162006cfd38038062006cfd833981016040819052620000269162000952565b600080554360035562000038620004e2565b7f54fcc60229fb8b48da371e2faf9f386c112f33d5f23c9d84b579eb2466a70a7e33836040516200006b92919062000a22565b60405180910390a1620000813415600c6200020d565b6200008f6001600d6200020d565b620000ae60018360200151604001511015600e6200020d60201b60201c565b620000bd600a60001962000abe565b808252602083015160400151620000d79111600f6200020d565b6020818101805160001990528051600090830181905233808252600484526040808320805460ff19166001908117825594518051958201959095559385015160029094019390935582850180519190915285840180516080908101518351870152815160609081015184519015159087015282518601518451820152915186015192519215159281019290925280860180516003905280518301849052918601805184905280519095018390529051845190930192909252915101526200019d62000563565b8051339052602080840151518251820152825182516040908101919091526060808501518451820152818501518385018051919091528051600194019390935260808086015184519093019290925282514391015290516000910152620002048162000237565b50505062000d69565b81620002335760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6200026560405180608001604052806000151581526020016000815260200160008152602001600081525090565b81602001516020015115620003ea5760208201516040015160600151600a1180158252620002ca5760208201516040015160600151600a90620002b390620002ae838262000ad5565b900390565b620002bf919062000abe565b6020820152620002d2565b600160208201525b620002dc62000587565b8251516001600160a01b039081168252835160209081015181840152845160409081015181850152855160609081015181860152828701805151608080880191909152815184015160a0880152815181015160c08801528151515190951660e0870152805151840151610100870152805151830151151561012087015280515182015161014087015280515190940151151561016086015283518201518201516101808601529251810151909201516101a0840152835115156101c0840152838101516101e08401526003600055436001559051620003be9183910162000bd7565b60405160208183030381529060405260029080519060200190620003e492919062000666565b50505050565b60006040820152620003ff600160106200020d565b60208201518051516080909101516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801562000444573d6000803e3d6000fd5b506040810151479081106200046f5762000469818360400151620002ae60201b60201c565b62000472565b60005b60608301525062000486600160116200020d565b6020820151515160608201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015620004c9573d6000803e3d6000fd5b50600080805560018190556200023390600290620006f5565b6040518060a001604052806000815260200162000512604051806040016040528060008152602001600081525090565b81526040805160a0810182526000808252602082810182905292820181905260608201819052608082015291019081526020016200054f62000737565b81526020016200055e620007ba565b905290565b604051806040016040528062000578620007ea565b81526020016200055e62000832565b604080516102008101825260008082528251608081018452818152602081810183905293810182905260608101919091529091820190815260200160008152602001620005d362000737565b81526040805160a08101825260008082526020828101829052928201819052606082018190526080820152910190815260200162000610620007ba565b815260006020820181905260408201819052606082018190526080820181905260a0820181905260c082015260e0016200064962000737565b815260200160008152602001600015158152602001600081525090565b828054620006749062000d2c565b90600052602060002090601f016020900481019282620006985760008555620006e3565b82601f10620006b357805160ff1916838001178555620006e3565b82800160010185558215620006e3579182015b82811115620006e3578251825591602001919060010190620006c6565b50620006f19291506200088c565b5090565b508054620007039062000d2c565b6000825580601f1062000714575050565b601f0160209004906000526020600020908101906200073491906200088c565b50565b6040805160c08101909152806000815260200162000771604051806040016040528060006001600160a01b03168152602001600081525090565b81526040805160a0810182526000808252602082810182905292820181905260608201819052608082015291019081526000602082018190526040820181905260609091015290565b60405180608001604052806000815260200160008152602001620007dd62000737565b8152602001600081525090565b60408051608080820183526000808352835191820184528082526020828101829052938201819052606082015290918201908152602001600081526020016200055e62000737565b6040805161014081018252600060a0820181815260c0830182905260e08301829052610100830182905261012083018290528252602082015290810162000878620007ba565b815260200160008152602001600081525090565b5b80821115620006f157600081556001016200088d565b604080519081016001600160401b0381118282101715620008d457634e487b7160e01b600052604160045260246000fd5b60405290565b60405160a081016001600160401b0381118282101715620008d457634e487b7160e01b600052604160045260246000fd5b604051608081016001600160401b0381118282101715620008d457634e487b7160e01b600052604160045260246000fd5b805180151581146200094d57600080fd5b919050565b60008183036101208112156200096757600080fd5b62000971620008a3565b83518152601f1982019150610100808312156200098d57600080fd5b62000997620008da565b6080841215620009a657600080fd5b620009b06200090b565b935060208601518452604086015160208501526060860151604085015260808601516060850152838152620009e860a087016200093c565b602082015260c0860151604082015262000a0560e087016200093c565b606082015294015160808501526020810193909352509092915050565b60006101408201905060018060a01b038416825282516020830152602083015162000a72604084018251805182526020810151602083015260408101516040830152606081015160608301525050565b6020810151151560c0840152604081015160e0840152606081015115156101008401526080810151610120840152509392505050565b634e487b7160e01b600052601260045260246000fd5b60008262000ad05762000ad062000aa8565b500490565b60008262000ae75762000ae762000aa8565b500690565b80516005811062000b0d57634e487b7160e01b600052602160045260246000fd5b825260208181015180516001600160a01b031682850152015160408084019190915281015162000b75606084018280516001600160a01b0316825260208082015115159083015260408082015190830152606080820151908301526080908101511515910152565b5060608101516001600160a01b03166101008301526080810151151561012083015260a00151151561014090910152565b8051825260208101516020830152604081015162000bc8604084018262000aec565b50606001516101a09190910152565b81516001600160a01b031681526107008101602083015162000c1d6020840182805182526020810151602083015260408101516040830152606081015160608301525050565b50604083015160a0830152606083015162000c3c60c084018262000aec565b5060808381015180516001600160a01b03166102208501526020810151610240850152604081015115156102608501526060810151610280850152015115156102a083015260a083015162000c966102c084018262000ba6565b5060c083015161048083015260e08301516001600160a01b03166104a08301526101008301516104c083015261012083015115156104e0830152610140830151610500830152610160830151151561052083015261018083015162000d0061054084018262000aec565b506101a08301516106a08301526101c083015115156106c08301526101e0909201516106e09091015290565b600181811c9082168062000d4157607f821691505b6020821081141562000d6357634e487b7160e01b600052602260045260246000fd5b50919050565b615f848062000d796000396000f3fe6080604052600436106100eb5760003560e01c8063901d13e211610084578063c4d7841a11610056578063c4d7841a146102c3578063ca6d56dc146102e5578063dff5c8aa146102f8578063f14faf6f1461030b57005b8063901d13e214610258578063994ba4d21461026b578063a230c52414610280578063ab53f2c6146102a057005b8063473f1773116100bd578063473f1773146101fd5780635cc4f6491461021057806383230757146102305780638a4557711461024557005b80631a777ba8146100f45780631e93b0f11461011c578063370158ea1461013b5780633bc5b7bf146101d057005b366100f257005b005b61010761010236600461539c565b61031e565b60405190151581526020015b60405180910390f35b34801561012857600080fd5b506003545b604051908152602001610113565b34801561014757600080fd5b50610150610359565b60408051825180518252602080820151818401528184015183850152606091820151828401528401516001600160a01b03908116608080850191909152938501511660a0808401919091529084015160c08084019190915292840151151560e0830152830151610100820152910151151561012082015261014001610113565b3480156101dc57600080fd5b506101f06101eb3660046153d4565b610493565b6040516101139190615417565b61010761020b366004615454565b6104aa565b34801561021c57600080fd5b5061012d61022b3660046153d4565b6104e7565b34801561023c57600080fd5b5060015461012d565b6100f261025336600461547c565b610615565b6101076102663660046153d4565b610639565b34801561027757600080fd5b5061012d61067d565b34801561028c57600080fd5b5061010761029b3660046153d4565b610748565b3480156102ac57600080fd5b506102b561086f565b604051610113929190615495565b3480156102cf57600080fd5b506102d861090c565b604051610113919061559d565b6101076102f33660046153d4565b6109d6565b6101076103063660046156d9565b610a0e565b6101076103193660046156f6565b610a49565b60006103286145b2565b6020810180515160059052515160c001518390526103446145d1565b61034e8282610a84565b60a001519392505050565b610361614606565b600360005414156104845760006002805461037b9061570f565b80601f01602080910402602001604051908101604052809291908181526020018280546103a79061570f565b80156103f45780601f106103c9576101008083540402835291602001916103f4565b820191906000526020600020905b8154815290600101906020018083116103d757829003601f168201915b505050505080602001905181019061040c9190615954565b9050610416614661565b602080830151825152825182516001600160a01b0391821692019190915260e0830151825191166040909101526101008201518151606001526101608201518151901515608090910152610140820151815160a0015261012090910151815190151560c09091015251919050565b61049060006009614241565b90565b61049b614674565b6104a482614266565b92915050565b60006104b46145b2565b602081018051516003905251516080015183151590526104d26145d1565b6104dc8282610a84565b606001519392505050565b600060036000541415610604576000600280546105039061570f565b80601f016020809104026020016040519081016040528092919081815260200182805461052f9061570f565b801561057c5780601f106105515761010080835404028352916020019161057c565b820191906000526020600020905b81548152906001019060200180831161055f57829003601f168201915b50505050508060200190518101906105949190615954565b90506105b6604080516060810182526000602082018181529282015290815290565b805160009081905281516020015260016105cf85614266565b5160018111156105e1576105e16153f1565b146105ed5780516105fb565b6105f684614266565b604001515b51949350505050565b6106106000600b614241565b919050565b61061d6145d1565b61063561062f36849003840184615b37565b82610a84565b5050565b60006106436145b2565b60208101805151600290525151606001516001600160a01b03841690526106686145d1565b6106728282610a84565b604001519392505050565b60006003600054141561073c576000600280546106999061570f565b80601f01602080910402602001604051908101604052809291908181526020018280546106c59061570f565b80156107125780601f106106e757610100808354040283529160200191610712565b820191906000526020600020905b8154815290600101906020018083116106f557829003601f168201915b505050505080602001905181019061072a9190615954565b60a00151602081015190510192915050565b61049060006008614241565b600060036000541415610863576000600280546107649061570f565b80601f01602080910402602001604051908101604052809291908181526020018280546107909061570f565b80156107dd5780601f106107b2576101008083540402835291602001916107dd565b820191906000526020600020905b8154815290600101906020018083116107c057829003601f168201915b50505050508060200190518101906107f59190615954565b604080516020810190915260008152909150600061081285614266565b516001811115610824576108246153f1565b1415610833576000815261085b565b600161083e85614266565b516001811115610850576108506153f1565b141561085b57600181525b519392505050565b6106106000600a614241565b6000606060005460028080546108849061570f565b80601f01602080910402602001604051908101604052809291908181526020018280546108b09061570f565b80156108fd5780601f106108d2576101008083540402835291602001916108fd565b820191906000526020600020905b8154815290600101906020018083116108e057829003601f168201915b50505050509050915091509091565b6109146146ad565b600360005414156109ca5760006002805461092e9061570f565b80601f016020809104026020016040519081016040528092919081815260200182805461095a9061570f565b80156109a75780601f1061097c576101008083540402835291602001916109a7565b820191906000526020600020905b81548152906001019060200180831161098a57829003601f168201915b50505050508060200190518101906109bf9190615954565b610180015192915050565b61049060006007614241565b60006109e06145b2565b602081810180515160009052515101516001600160a01b0384169052610a046145d1565b61085b8282610a84565b6000610a186145b2565b6020810180515160049052515160a00151839052610a346145d1565b610a3e8282610a84565b608001519392505050565b6000610a536145b2565b6020810180515160019052515160400151839052610a6f6145d1565b610a798282610a84565b602001519392505050565b610a94600360005414603e614241565b8151610aaf901580610aa857508251600154145b603f614241565b600080805560028054610ac19061570f565b80601f0160208091040260200160405190810160405280929190818152602001828054610aed9061570f565b8015610b3a5780601f10610b0f57610100808354040283529160200191610b3a565b820191906000526020600020905b815481529060010190602001808311610b1d57829003601f168201915b5050505050806020019051810190610b529190615954565b9050610b5c614702565b7f35b2ac41a02c0ce05b6e2f0c2dc3bab826a4b4a195d0603a918923288b9f190b3385604051610b8d929190615c47565b60405180910390a16000602085015151516005811115610baf57610baf6153f1565b1415610e6a5760208085015151015180825251610bcb90614266565b60208281019182526040830180516000908190529051909101526101e0830151905151610c29919060019081811115610c0657610c066153f1565b14610c15578260400151610c1f565b8260200151604001515b5110156012614241565b60006020820151516001811115610c4257610c426153f1565b1415610c545760016060820152610c7b565b60016020820151516001811115610c6d57610c6d6153f1565b1415610c7b57600060608201525b610c8a81606001516013614241565b60c0820151610100830151016080820152610ca760016014614241565b610cb982610100015134146015614241565b60006020820151516001811115610cd257610cd26153f1565b1415610ce457600160a0820152610d0b565b60016020820151516001811115610cfd57610cfd6153f1565b1415610d0b57600060a08201525b610d1a8160a001516016614241565b6101e082015160c082018051919091528051600060209182018190528351516001600160a01b039081168252600483526040808320805460ff1916600190811790915594518651518316845292819020835195810195909555918301516002909401939093558351519051921682527f0abf3b3f643594d958297062a019458e27d7766629590ac621aa1000fa1298ab910160405180910390a1604051600081527f70b5db5ce898cd03240ca1f67f073b95f13d578e04267536eedf62724b9ca7ee9060200160405180910390a160008352610df4614e15565b825181516001600160a01b0390911690526020808401518251820152604080850151835182015260608086015184518201526080808701518486018051919091528051600195019490945260a08701518451909301929092528251439101528381015191510152610e648161433a565b5061423b565b6001602085015151516005811115610e8457610e846153f1565b141561115c576020840151516040015160e082018190525119610100820181905260c0830151610eb691116017614241565b60c082015160e08201515101610120820152610ed460016018614241565b60e081015151610ee79034146019614241565b610efe81610100015182610120015110601a614241565b610f0733614266565b6101408201819052516000906001811115610f2457610f246153f1565b1415610f37576000610160820152610f60565b6001610140820151516001811115610f5157610f516153f1565b1415610f605760016101608201525b8061016001511561112b57610180810180516000908190529051602001526001610140820151516001811115610f9857610f986153f1565b14610fa857806101800151610fb3565b806101400151604001515b6101a08201819052516001191115610ff8576101a0810151516001016101e082018051919091526101a0820151602090810151825190910152516101c0820152611043565b6101e08201516101a082015151101561101657816101e0015161101e565b6101a0810151515b61020082018051919091526101a0820151602090810151825190910152516101c08201525b336000908152600460209081526040808320805460ff1916600190811782556101c0860151805191830191909155830151600290910155519182527f4878a2fd93ae304c0e5906a315bd066c5755e721e76b9679bd219d833479754e91015b60405180910390a1600060208401526110b9614e15565b825181516001600160a01b0390911690526020808401518251820152604080850151835182015260608086015184518201526080808701518486018051919091528051600195019490945260a087015184519093019290925282514391015261012084015191510152610e648161433a565b604051600081527f6d5168086dc56df808ffe33dd2dabbecfdf4461ca6554bdaf6b1d17027f0383a906020016110a2565b6002602085015151516005811115611176576111766153f1565b14156118f757602084015151606001516102208201526111986001601b614241565b6111a43415601c614241565b610220810151516111b490614266565b61024082018190525160009060018111156111d1576111d16153f1565b14156111e457600061026082015261120d565b60016102408201515160018111156111fe576111fe6153f1565b141561120d5760016102608201525b61022081015151611238906001600160a01b0316331461122e576001611231565b60005b601d614241565b6000610240820151516001811115611252576112526153f1565b141561126557600061028082015261128e565b600161024082015151600181111561127f5761127f6153f1565b141561128e5760016102808201525b61129e816102800151601e614241565b6112e98161026001516112b25760006112e2565b8260e001516001600160a01b0316826102200151600001516001600160a01b0316146112df5760016112e2565b60005b601f614241565b8160e001516001600160a01b0316336001600160a01b0316141561142857604051600081527f643898274eb7af13e7298b6dddb6e7dc13ba53c9b0c470983edeb830eac8e5159060200160405180910390a16000604084810182905261022083018051516001600160a01b03908116845260046020908152838520805461ffff1916815560018101869055600201949094559051519151911681527f81df7148ed3a9aa51bafe04f44371e89b96f47294267fbf6ab28b7aa8c87b386910160405180910390a16113b7614e15565b825181516001600160a01b0390911690526020808401518251820152604080850151835182015260608086015184518201526080808701518486018051919091528051600195019490945260a087015184519093019290925282514391015260c085015191510152610e648161433a565b61143d600119836101a0015111156020614241565b6000610180830151516004811115611457576114576153f1565b1415611524576101808201516020908101516102c0830181905260c0840151910151106102e082015260006102c08201515161149290614266565b5160018111156114a4576114a46153f1565b14156114b75760006103008201526114ea565b60016102c0820151516114c990614266565b5160018111156114db576114db6153f1565b14156114ea5760016103008201525b81610120015161151057806103000151611505576000611517565b806102e00151611517565b806102e001515b15156102a08201526117db565b600161018083015151600481111561153e5761153e6153f1565b141561169f576101808201516040015161032082018190525161156090614266565b610340820152610360810180516000908190529051602001819052610340820151516001811115611593576115936153f1565b14156115a65760006103808201526115cf565b60016103408201515160018111156115c0576115c06153f1565b14156115cf5760016103808201525b61032081015160600151156115f957604082015161032082015160600151106103a0820152611602565b60006103a08201525b806103800151611613576000611651565b6101e08201516001610340830151516001811115611633576116336153f1565b146116435781610360015161164e565b816103400151604001515b51115b61165c576000611663565b806103a001515b61166e576000611517565b60008161032001516040015111611686576000611517565b61032081015160400151600019116102a08201526117db565b60026101808301515160048111156116b9576116b96153f1565b141561178557610180820151606001516001600160a01b03166103c082015260006116e8826103c00151614266565b5160018111156116fa576116fa6153f1565b141561170d5760006103e082015261173e565b600161171d826103c00151614266565b51600181111561172f5761172f6153f1565b141561173e5760016103e08201525b806103e0015161174f576000611517565b8160e001516001600160a01b0316816103c001516001600160a01b031614611778576001611517565b60006102a08201526117db565b600361018083015151600481111561179f5761179f6153f1565b14156117b25760006102a08201526117db565b60046101808301515160048111156117cc576117cc6153f1565b14156117db5760016102a08201525b6117eb816102a001516021614241565b604051600081527fc4398620e4414fe5d5b0f554d463504a8726197ac7ac1628a94f305591410b869060200160405180910390a1600060408401526104008101516002908190525061022081015151610400820180516001600160a01b039092166060928301526104208301805160009081905281516020015290518151604001526101a084015190516001909101910152611885614e15565b825181516001600160a01b0390911690526020808401518251820152604080850151835182015260608086015184518201526080808701518486018051919091528051600195019490945261042086015184519093019290925282514391015260c085015191510152610e648161433a565b6003602085015151516005811115611911576119116153f1565b1415611d2c5760208401515160800151610440820181905251156119a057600061193a33614266565b51600181111561194c5761194c6153f1565b141561195f57600061046082015261198b565b600161196a33614266565b51600181111561197c5761197c6153f1565b141561198b5760016104608201525b61199b8161046001516022614241565b611a1c565b6119b08261016001516023614241565b60006119bb33614266565b5160018111156119cd576119cd6153f1565b14156119e0576001610480820152611a0c565b60016119eb33614266565b5160018111156119fd576119fd6153f1565b1415611a0c5760006104808201525b611a1c8161048001516024614241565b61044081015151611a3257816101000151611a35565b60005b6104a082015260c0820151611a539019826104a00151106025614241565b60c08201516104a0820151016104c0820152611a7160016026614241565b611a83816104a0015134146027614241565b6104408101515115611b00576000611a9a33614266565b516001811115611aac57611aac6153f1565b1415611abf5760006104e0820152611aeb565b6001611aca33614266565b516001811115611adc57611adc6153f1565b1415611aeb5760016104e08201525b611afb816104e001516028614241565b611b7c565b611b108261016001516029614241565b6000611b1b33614266565b516001811115611b2d57611b2d6153f1565b1415611b40576001610500820152611b6c565b6001611b4b33614266565b516001811115611b5d57611b5d6153f1565b1415611b6c5760006105008201525b611b7c816105000151602a614241565b6104c0810151611b959019826104a0015110602b614241565b604051600081527fe42cd63e0877ca62345537ae5ffd379e6d22754fade2a4ce7b6072bf0c4686539060200160405180910390a1600060608401526104408101515115611cb057336000818152600460209081526040808320805461ffff19168155600181018490556002019290925590519182527f81df7148ed3a9aa51bafe04f44371e89b96f47294267fbf6ab28b7aa8c87b38691015b60405180910390a1611c3e614e15565b825181516001600160a01b0390911690526020808401518251820152604080850151835182015260608086015184518201526080808701518486018051919091528051600195019490945260a08701518451909301929092528251439101526104c084015191510152610e648161433a565b6101e082015161052082018051919091528051600060209182018190523380825260048352604091829020805460ff191660019081178255945180519582019590955593830151600290940193909355519182527f0abf3b3f643594d958297062a019458e27d7766629590ac621aa1000fa1298ab9101611c2e565b6004602085015151516005811115611d4657611d466153f1565b14156126eb5760208401515160a00151610540820152611d686001602c614241565b611d743415602d614241565b816101c0015115611db0576101a0820151600a90611d9b90611d968382615d0c565b900390565b611da59190615d20565b610560820152611db9565b60016105608201525b61058081018051600090819052905160200152610560810151611e1b906001611de133614266565b516001811115611df357611df36153f1565b14611e0357826105800151611e11565b611e0c33614266565b604001515b511015602e614241565b6101e0820151611e6a906001611e3033614266565b516001811115611e4257611e426153f1565b14611e5257826105800151611e60565b611e5b33614266565b604001515b511015602f614241565b6000610180830151516004811115611e8457611e846153f1565b1415611f51576101808201516020908101516105c0830181905260c0840151910151106105e082015260006105c082015151611ebf90614266565b516001811115611ed157611ed16153f1565b1415611ee4576000610600820152611f17565b60016105c082015151611ef690614266565b516001811115611f0857611f086153f1565b1415611f175760016106008201525b816101200151611f3d57806106000151611f32576000611f44565b806105e00151611f44565b806105e001515b15156105a08201526121f2565b6001610180830151516004811115611f6b57611f6b6153f1565b14156120b65761018082015160400151610620820181905251611f8d90614266565b6106408201819052516000906001811115611faa57611faa6153f1565b1415611fbd576000610660820152611fe6565b6001610640820151516001811115611fd757611fd76153f1565b1415611fe65760016106608201525b61062081015160600151156120105760408201516106208201516060015110610680820152612019565b60006106808201525b80610660015161202a576000612068565b6101e0820151600161064083015151600181111561204a5761204a6153f1565b1461205a57816105800151612065565b816106400151604001515b51115b61207357600061207a565b8061068001515b612085576000611f44565b6000816106200151604001511161209d576000611f44565b61062081015160400151600019116105a08201526121f2565b60026101808301515160048111156120d0576120d06153f1565b141561219c57610180820151606001516001600160a01b03166106a082015260006120ff826106a00151614266565b516001811115612111576121116153f1565b14156121245760006106c0820152612155565b6001612134826106a00151614266565b516001811115612146576121466153f1565b14156121555760016106c08201525b806106c00151612166576000611f44565b8160e001516001600160a01b0316816106a001516001600160a01b03161461218f576001611f44565b60006105a08201526121f2565b60036101808301515160048111156121b6576121b66153f1565b14156121c95760006105a08201526121f2565b60046101808301515160048111156121e3576121e36153f1565b14156121f25760016105a08201525b612210816105a00151612206576001612209565b60005b6030614241565b612224600119836101a00151106031614241565b60006105408201515151600481111561223f5761223f6153f1565b141561230d5761054081015151602090810151610700830181905260c08401519101511061072082015260006107008201515161227b90614266565b51600181111561228d5761228d6153f1565b14156122a05760006107408201526122d3565b6001610700820151516122b290614266565b5160018111156122c4576122c46153f1565b14156122d35760016107408201525b8161012001516122f9578061074001516122ee576000612300565b806107200151612300565b8061072001515b15156106e08201526125b4565b600161054082015151516004811115612328576123286153f1565b141561247457610540810151516040015161076082018190525161234b90614266565b6107808201819052516000906001811115612368576123686153f1565b141561237b5760006107a08201526123a4565b6001610780820151516001811115612395576123956153f1565b14156123a45760016107a08201525b61076081015160600151156123ce57604082015161076082015160600151106107c08201526123d7565b60006107c08201525b806107a001516123e8576000612426565b6101e08201516001610780830151516001811115612408576124086153f1565b1461241857816105800151612423565b816107800151604001515b51115b612431576000612438565b806107c001515b612443576000612300565b6000816107600151604001511161245b576000612300565b61076081015160400151600019116106e08201526125b4565b60026105408201515151600481111561248f5761248f6153f1565b141561255c5761054081015151606001516001600160a01b03166107e082015260006124bf826107e00151614266565b5160018111156124d1576124d16153f1565b14156124e4576000610800820152612515565b60016124f4826107e00151614266565b516001811115612506576125066153f1565b14156125155760016108008201525b806108000151612526576000612300565b8160e001516001600160a01b0316816107e001516001600160a01b03161461254f576001612300565b60006106e08201526125b4565b600361054082015151516004811115612577576125776153f1565b141561258a5760006106e08201526125b4565b6004610540820151515160048111156125a5576125a56153f1565b14156125b45760016106e08201525b6125c4816106e001516032614241565b604051600081527f86fc678c4ea0a4d60b8d448e77e6d3805d3b953e223c5b6a285f2b7576b5f3ac9060200160405180910390a160006080840152610540810151516040517f18f2698e4794214ca6e5e526501521f9e9e882fe9c8490e38a1a71c7bad7a10c91612636913390615d34565b60405180910390a161082081018051600090819052815160200152610540820151519051604001526101a082015160010161082082015160600152612679614e15565b825181516001600160a01b0390911690526020808401518251820152604080850151835182015260608086015184518201526080808701518486018051919091528051600195019490945261082086015184519093019290925282514391015260c085015191510152610e648161433a565b6005602085015151516005811115612705576127056153f1565b141561423b5760208401515160c0015161084082015261272760016033614241565b61273334156034614241565b816101c001511561276a576101a0820151600a9061275590611d968382615d0c565b61275f9190615d20565b610860820152612773565b60016108608201525b61088081018051600090819052905160200152600161279133614266565b5160018111156127a3576127a36153f1565b146127b3578061088001516127c1565b6127bc33614266565b604001515b6108a0820181905261086082015190516127de9111156035614241565b60006101808301515160048111156127f8576127f86153f1565b14156128c5576101808201516020908101516108e0830181905260c08401519101511061090082015260006108e08201515161283390614266565b516001811115612845576128456153f1565b141561285857600061092082015261288b565b60016108e08201515161286a90614266565b51600181111561287c5761287c6153f1565b141561288b5760016109208201525b8161012001516128b1578061092001516128a65760006128b8565b8061090001516128b8565b8061090001515b15156108c0820152612b66565b60016101808301515160048111156128df576128df6153f1565b1415612a2a576101808201516040015161094082018190525161290190614266565b610960820181905251600090600181111561291e5761291e6153f1565b141561293157600061098082015261295a565b600161096082015151600181111561294b5761294b6153f1565b141561295a5760016109808201525b610940810151606001511561298457604082015161094082015160600151106109a082015261298d565b60006109a08201525b80610980015161299e5760006129dc565b6101e082015160016109608301515160018111156129be576129be6153f1565b146129ce578161088001516129d9565b816109600151604001515b51115b6129e75760006129ee565b806109a001515b6129f95760006128b8565b60008161094001516040015111612a115760006128b8565b61094081015160400151600019116108c0820152612b66565b6002610180830151516004811115612a4457612a446153f1565b1415612b1057610180820151606001516001600160a01b03166109c08201526000612a73826109c00151614266565b516001811115612a8557612a856153f1565b1415612a985760006109e0820152612ac9565b6001612aa8826109c00151614266565b516001811115612aba57612aba6153f1565b1415612ac95760016109e08201525b806109e00151612ada5760006128b8565b8160e001516001600160a01b0316816109c001516001600160a01b031614612b035760016128b8565b60006108c0820152612b66565b6003610180830151516004811115612b2a57612b2a6153f1565b1415612b3d5760006108c0820152612b66565b6004610180830151516004811115612b5757612b576153f1565b1415612b665760016108c08201525b612b76816108c001516036614241565b60a08201516020015115612ba05760a082015151612ba090198360a0015160200151106037614241565b60a08201515115612bc45760a082015160208101519051612bc49119116038614241565b61014082015160a083015160208101519051612be4929101106039614241565b612bff826101a00151826108a001516020015110603a614241565b600061084082015151516001811115612c1a57612c1a6153f1565b1415612c505760a08201805160200151610a20830151525151600101610a20820180516020019190915251610a00820152612c9c565b600161084082015151516001811115612c6b57612c6b6153f1565b1415612c9c5760a082015160200151600101610a40820180519190915260a08301515181516020015251610a008201525b610a0081015160208101519051612cb6911911603b614241565b610a0081015151612cd4901982610a0001516020015110603c614241565b604051600081527f4334279692c0c7730628f7d869fc37e6243136d9c873f7f2faf662e85df1c3a79060200160405180910390a1600060a08401526108a0810151516000191115612d4c576108a081015151600101610a8082018051919091526101a083015181516020015251610a60820152612d72565b6108a081015151610aa082018051919091526101a083015181516020015251610a608201525b336000908152600460209081526040909120805460ff191660019081178255610a60840151805191830191909155909101516002909101556101c082015115612de1576101a0820151600a90612dcc90611d968382615d0c565b612dd69190615d20565b610ac0820152612dea565b6001610ac08201525b6000610180830151516004811115612e0457612e046153f1565b1415612ed157610180820151602090810151610b00830181905260c084015191015110610b208201526000610b0082015151612e3f90614266565b516001811115612e5157612e516153f1565b1415612e64576000610b40820152612e97565b6001610b0082015151612e7690614266565b516001811115612e8857612e886153f1565b1415612e97576001610b408201525b816101200151612ebd5780610b400151612eb2576000612ec4565b80610b200151612ec4565b80610b2001515b1515610ae0820152613172565b6001610180830151516004811115612eeb57612eeb6153f1565b14156130365761018082015160400151610b60820181905251612f0d90614266565b610b808201819052516000906001811115612f2a57612f2a6153f1565b1415612f3d576000610ba0820152612f66565b6001610b80820151516001811115612f5757612f576153f1565b1415612f66576001610ba08201525b610b608101516060015115612f90576040820151610b608201516060015110610bc0820152612f99565b6000610bc08201525b80610ba00151612faa576000612fe8565b610ac08101516001610b80830151516001811115612fca57612fca6153f1565b14612fda57816108800151612fe5565b81610b800151604001515b51115b612ff3576000612ffa565b80610bc001515b613005576000612ec4565b600081610b600151604001511161301d576000612ec4565b610b608101516040015160001911610ae0820152613172565b6002610180830151516004811115613050576130506153f1565b141561311c57610180820151606001516001600160a01b0316610be0820152600061307f82610be00151614266565b516001811115613091576130916153f1565b14156130a4576000610c008201526130d5565b60016130b482610be00151614266565b5160018111156130c6576130c66153f1565b14156130d5576001610c008201525b80610c0001516130e6576000612ec4565b8160e001516001600160a01b031681610be001516001600160a01b03161461310f576001612ec4565b6000610ae0820152613172565b6003610180830151516004811115613136576131366153f1565b1415613149576000610ae0820152613172565b6004610180830151516004811115613163576131636153f1565b1415613172576001610ae08201525b610140820151610a008201518051602090910151011061418857610a008101516020810151905111610c20820152610ae08101516131b15760006131b8565b80610c2001515b156137f55760006101808301515160048111156131d7576131d76153f1565b1415613328576101808201805160200151610c408301526101a08301519051604051600080516020615f0f83398151915292613214929091615d5c565b60405180910390a160c0820151610c40820151602001519003610c6082015261323f6001603d614241565b610c4081015180516020909101516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015613283573d6000803e3d6000fd5b50610c80810180516000908190528151602001526060808401518251604001526101a0840151915101526132b5614e15565b825181516001600160a01b03909116905260208084015182518201526040808501518351820152606080860151845182015260808087015184860180519190915280516001950194909452610c80860151845190930192909252825143910152610c6084015191510152610e648161433a565b6001610180830151516004811115613342576133426153f1565b14156134905761018082018051604090810151610ca08401526101a084015191519051600080516020615f0f83398151915292613380929091615d5c565b60405180910390a1610cc081018051600090819052815160209081019190915260608085015183516040908101919091526101a08601519351820193909352610ca08401805151610ce0860180516001600160a01b03909216909152815185015181518501528151608090810151825190151596019590955281518301518151909301929092525190910151905190151591015261341c614e15565b825181516001600160a01b039091169052602080840151825182015260408085015183518201526060808601518451820152610ce085015183850180519190915280516001940193909352610cc085015183519092019190915281514391015260c0840151905160800152610e648161433a565b60026101808301515160048111156134aa576134aa6153f1565b14156136085761018082018051606001516001600160a01b0316610d008301526101a08301519051604051600080516020615f0f833981519152926134f0929091615d5c565b60405180910390a1610d00810180516001600160a01b039081166000908152600460209081526040808320805461ffff19168155600181018490556002019290925592519051911681527f81df7148ed3a9aa51bafe04f44371e89b96f47294267fbf6ab28b7aa8c87b386910160405180910390a1610d20810180516000908190528151602001526060808401518251604001526101a084015191510152613596614e15565b825181516001600160a01b03909116905260208084015182518201526040808501518351820152606080860151845182015260808087015184860180519190915280516001950194909452610d2086015184519093019290925282514391015260c085015191510152610e648161433a565b6003610180830151516004811115613622576136226153f1565b14156136fc57600080516020615f0f833981519152826101a00151836101800151604051613651929190615d5c565b60405180910390a1610d40810180516000908190528151602001526060808401518251604001526101a08401519151015261368a614e15565b825181516001600160a01b03909116905260208084015182518201526040808501518351820152606080860151845182015260808087015184860180519190915280516001950194909452610d4086015184519093019290925282514391015260c085015191510152610e648161433a565b6004610180830151516004811115613716576137166153f1565b14156137f057600080516020615f0f833981519152826101a00151836101800151604051613745929190615d5c565b60405180910390a1610d60810180516000908190528151602001526060808401518251604001526101a08401519151015261377e614e15565b825181516001600160a01b03909116905260208084015182518201526040808501518351820152606080860151845182015260808087015184860180519190915280516000950194909452610d6086015184519093019290925282514391015260c085015191510152610e648161433a565b61423b565b80610c20015115613cc457600061018083015151600481111561381a5761381a6153f1565b14156138f457600080516020615f2f833981519152826101a00151836101800151604051613849929190615d5c565b60405180910390a1610d80810180516000908190528151602001526060808401518251604001526101a084015191510152613882614e15565b825181516001600160a01b03909116905260208084015182518201526040808501518351820152606080860151845182015260808087015184860180519190915280516001950194909452610d8086015184519093019290925282514391015260c085015191510152610e648161433a565b600161018083015151600481111561390e5761390e6153f1565b14156139e857600080516020615f2f833981519152826101a0015183610180015160405161393d929190615d5c565b60405180910390a1610da0810180516000908190528151602001526060808401518251604001526101a084015191510152613976614e15565b825181516001600160a01b03909116905260208084015182518201526040808501518351820152606080860151845182015260808087015184860180519190915280516001950194909452610da086015184519093019290925282514391015260c085015191510152610e648161433a565b6002610180830151516004811115613a0257613a026153f1565b1415613adc57600080516020615f2f833981519152826101a00151836101800151604051613a31929190615d5c565b60405180910390a1610dc0810180516000908190528151602001526060808401518251604001526101a084015191510152613a6a614e15565b825181516001600160a01b03909116905260208084015182518201526040808501518351820152606080860151845182015260808087015184860180519190915280516001950194909452610dc086015184519093019290925282514391015260c085015191510152610e648161433a565b6003610180830151516004811115613af657613af66153f1565b1415613bd057600080516020615f2f833981519152826101a00151836101800151604051613b25929190615d5c565b60405180910390a1610de0810180516000908190528151602001526060808401518251604001526101a084015191510152613b5e614e15565b825181516001600160a01b03909116905260208084015182518201526040808501518351820152606080860151845182015260808087015184860180519190915280516001950194909452610de086015184519093019290925282514391015260c085015191510152610e648161433a565b6004610180830151516004811115613bea57613bea6153f1565b14156137f057600080516020615f2f833981519152826101a00151836101800151604051613c19929190615d5c565b60405180910390a1610e00810180516000908190528151602001526060808401518251604001526101a084015191510152613c52614e15565b825181516001600160a01b03909116905260208084015182518201526040808501518351820152606080860151845182015260808087015184860180519190915280516001950194909452610e0086015184519093019290925282514391015260c085015191510152610e648161433a565b6000610180830151516004811115613cde57613cde6153f1565b1415613db857600080516020615eef833981519152826101a00151836101800151604051613d0d929190615d5c565b60405180910390a1610e20810180516000908190528151602001526060808401518251604001526101a084015191510152613d46614e15565b825181516001600160a01b03909116905260208084015182518201526040808501518351820152606080860151845182015260808087015184860180519190915280516001950194909452610e2086015184519093019290925282514391015260c085015191510152610e648161433a565b6001610180830151516004811115613dd257613dd26153f1565b1415613eac57600080516020615eef833981519152826101a00151836101800151604051613e01929190615d5c565b60405180910390a1610e40810180516000908190528151602001526060808401518251604001526101a084015191510152613e3a614e15565b825181516001600160a01b03909116905260208084015182518201526040808501518351820152606080860151845182015260808087015184860180519190915280516001950194909452610e4086015184519093019290925282514391015260c085015191510152610e648161433a565b6002610180830151516004811115613ec657613ec66153f1565b1415613fa057600080516020615eef833981519152826101a00151836101800151604051613ef5929190615d5c565b60405180910390a1610e60810180516000908190528151602001526060808401518251604001526101a084015191510152613f2e614e15565b825181516001600160a01b03909116905260208084015182518201526040808501518351820152606080860151845182015260808087015184860180519190915280516001950194909452610e6086015184519093019290925282514391015260c085015191510152610e648161433a565b6003610180830151516004811115613fba57613fba6153f1565b141561409457600080516020615eef833981519152826101a00151836101800151604051613fe9929190615d5c565b60405180910390a1610e80810180516000908190528151602001526060808401518251604001526101a084015191510152614022614e15565b825181516001600160a01b03909116905260208084015182518201526040808501518351820152606080860151845182015260808087015184860180519190915280516001950194909452610e8086015184519093019290925282514391015260c085015191510152610e648161433a565b60046101808301515160048111156140ae576140ae6153f1565b14156137f057600080516020615eef833981519152826101a001518361018001516040516140dd929190615d5c565b60405180910390a1610ea0810180516000908190528151602001526060808401518251604001526101a084015191510152614116614e15565b825181516001600160a01b03909116905260208084015182518201526040808501518351820152606080860151845182015260808087015184860180519190915280516001950194909452610ea086015184519093019290925282514391015260c085015191510152610e648161433a565b610a0081018051602090810151610ec084018051919091529151518251909101526101808301518151604001526101a08301519051606001526141c9614e15565b825181516001600160a01b03909116905260208084015182518201526040808501518351820152606080860151845182015260808087015184860180519190915280516001950194909452610ec086015184519093019290925282514391015260c085015191510152610e648161433a565b50505050565b816106355760405163100960cb60e01b81526004810182905260240160405180910390fd5b61426e614674565b60016001600160a01b03831660009081526004602052604090205460ff16600181111561429d5761429d6153f1565b141561432b576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff1660018111156142de576142de6153f1565b60018111156142ef576142ef6153f1565b81528154610100900460ff1615156020808301919091526040805180820182526001850154815260029094015491840191909152015292915050565b60008082526020820152919050565b61436760405180608001604052806000151581526020016000815260200160008152602001600081525090565b816020015160200151156144d35760208201516040015160600151600a11801582526143bf5760208201516040015160600151600a906143ab90611d968382615d0c565b6143b59190615d20565b60208201526143c7565b600160208201525b6143cf614e35565b8251516001600160a01b039081168252835160209081015181840152845160409081015181850152855160609081015181860152828701805151608080880191909152815184015160a0880152815181015160c08801528151515190951660e0870152805151840151610100870152805151830151151561012087015280515182015161014087015280515190940151151561016086015283518201518201516101808601529251810151909201516101a0840152835115156101c0840152838101516101e084015260036000554360015590516144af91839101615da0565b6040516020818303038152906040526002908051906020019061423b929190614f1e565b600060408201526144e660016010614241565b60208201518051516080909101516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561452a573d6000803e3d6000fd5b506040810151479081106145445760408201518103614547565b60005b60608301525061455960016011614241565b6020820151515160608201516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561459b573d6000803e3d6000fd5b506000808055600181905561063590600290614fa2565b6040518060400160405280600081526020016145cc614fdf565b905290565b6040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a081019190915290565b6040805161016081018252600060e08201818152610100830182905261012083018290526101408301829052825260208201819052918101829052606081018290526080810182905260a0810182905260c081019190915290565b60405180602001604052806145cc614606565b604080516060810190915280600081526020016000151581526020016145cc604051806040016040528060008152602001600081525090565b6040805160c0810190915280600081526020016146da604080518082019091526000808252602082015290565b81526020016146e7614ff2565b81526000602082018190526040820181905260609091015290565b60408051610f0081019091526000610ee08201908152815260208101614726614674565b8152602001614748604051806040016040528060008152602001600081525090565b815260200160001515815260200160008152602001600015158152602001614783604051806040016040528060008152602001600081525090565b815260200161479e6040518060200160405280600081525090565b815260200160008152602001600081526020016147b9614674565b81526020016000151581526020016147e4604051806040016040528060008152602001600081525090565b8152602001614806604051806040016040528060008152602001600081525090565b8152602001614828604051806040016040528060008152602001600081525090565b815260200161484a604051806040016040528060008152602001600081525090565b815260200161486c604051806040016040528060008152602001600081525090565b815260408051602080820183526000825283015201614889614674565b81526000602082018190526040820181905260608201526080016148bd604080518082019091526000808252602082015290565b815260006020820181905260408201526060016148d8614ff2565b81526020016148e5614674565b8152602001614907604051806040016040528060008152602001600081525090565b81526000602082018190526040820181905260608201819052608082015260a0016149306146ad565b815260200161493d615020565b81526040805160208082018352600080835281850192909252828401829052606084018290526080840182905260a0840182905260c0840182905260e0840182905282518084019093528183528201526101008201526101200161499f61504e565b8152602001600081526020016149c8604051806040016040528060008152602001600081525090565b8152600060208201526040016149ee604080518082019091526000808252602082015290565b81526000602082018190526040820152606001614a09614ff2565b8152602001614a16614674565b815260006020820181905260408201819052606082018190526080820181905260a082015260c001614a58604080518082019091526000808252602082015290565b81526000602082018190526040820152606001614a73614ff2565b8152602001614a80614674565b81526000602082018190526040820181905260608201819052608082015260a001614aa9615020565b8152602001614ad560408051608081018252600060208201818152928201819052606082015290815290565b815260200160008152602001614afe604051806040016040528060008152602001600081525090565b8152602001614b20604051806040016040528060008152602001600081525090565b815260006020820152604001614b46604080518082019091526000808252602082015290565b81526000602082018190526040820152606001614b61614ff2565b8152602001614b6e614674565b815260200160001515815260200160001515815260200160006001600160a01b03168152602001600015158152602001614bbb604051806040016040528060008152602001600081525090565b8152602001614bdd604051806040016040528060008152602001600081525090565b8152602001614bff604051806040016040528060008152602001600081525090565b8152602001614c21604051806040016040528060008152602001600081525090565b8152602001614c43604051806040016040528060008152602001600081525090565b8152602001614c65604051806040016040528060008152602001600081525090565b81526000602082018190526040820152606001614c92604080518082019091526000808252602082015290565b81526000602082018190526040820152606001614cad614ff2565b8152602001614cba614674565b815260006020820181905260408201819052606082018190526080820181905260a082015260c001614cfc604080518082019091526000808252602082015290565b815260200160008152602001614d10615020565b8152602001614d1d614ff2565b8152602001614d2a615020565b81526040805160a08101825260008082526020828101829052928201819052606082018190526080820152910190815260006020820152604001614d6c615020565b8152602001614d79615020565b8152602001614d86615020565b8152602001614d93615020565b8152602001614da0615020565b8152602001614dad615020565b8152602001614dba615020565b8152602001614dc7615020565b8152602001614dd4615020565b8152602001614de1615020565b8152602001614dee615020565b8152602001614dfb615020565b8152602001614e08615020565b81526020016145cc615020565b6040518060400160405280614e28615061565b81526020016145cc6150a7565b60405180610200016040528060006001600160a01b03168152602001614e7b60408051608081018252600080825260208201819052918101829052606081019190915290565b815260200160008152602001614e8f6146ad565b81526040805160a081018252600080825260208281018290529282018190526060820181905260808201529101908152602001614eca615020565b815260006020820181905260408201819052606082018190526080820181905260a0820181905260c082015260e001614f016146ad565b815260200160008152602001600015158152602001600081525090565b828054614f2a9061570f565b90600052602060002090601f016020900481019282614f4c5760008555614f92565b82601f10614f6557805160ff1916838001178555614f92565b82800160010185558215614f92579182015b82811115614f92578251825591602001919060010190614f77565b50614f9e9291506150ff565b5090565b508054614fae9061570f565b6000825580601f10614fbe575050565b601f016020900490600052602060002090810190614fdc91906150ff565b50565b60405180602001604052806145cc615114565b6040805160a08101825260008082526020820181905291810182905260608101829052608081019190915290565b604051806080016040528060008152602001600081526020016150416146ad565b8152602001600081525090565b60405180602001604052806145cc6146ad565b60408051608080820183526000808352835191820184528082526020828101829052938201819052606082015290918201908152602001600081526020016145cc6146ad565b6040805161014081018252600060a0820181815260c0830182905260e0830182905261010083018290526101208301829052825260208201529081016150eb615020565b815260200160008152602001600081525090565b5b80821115614f9e5760008155600101615100565b6040805160e081018252600080825282516020808201855282825280840191909152835180820185528281528385015283518082018552828152606084015283519081019093528252608081019190915260a0810161517161504e565b81526020016145cc60408051608081018252600060208201818152928201819052606082015290815290565b60405160a0810167ffffffffffffffff811182821017156151ce57634e487b7160e01b600052604160045260246000fd5b60405290565b60405160c0810167ffffffffffffffff811182821017156151ce57634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff811182821017156151ce57634e487b7160e01b600052604160045260246000fd5b6040516080810167ffffffffffffffff811182821017156151ce57634e487b7160e01b600052604160045260246000fd5b604051610200810167ffffffffffffffff811182821017156151ce57634e487b7160e01b600052604160045260246000fd5b6040516020810167ffffffffffffffff811182821017156151ce57634e487b7160e01b600052604160045260246000fd5b60405160e0810167ffffffffffffffff811182821017156151ce57634e487b7160e01b600052604160045260246000fd5b8015158114614fdc57600080fd5b8035610610816152fb565b60006060828403121561532657600080fd5b6040516060810181811067ffffffffffffffff8211171561535757634e487b7160e01b600052604160045260246000fd5b60405290508082356002811061536c57600080fd5b8152602083013561537c816152fb565b6020820152604083013561538f816152fb565b6040919091015292915050565b6000606082840312156153ae57600080fd5b6153b88383615314565b9392505050565b6001600160a01b0381168114614fdc57600080fd5b6000602082840312156153e657600080fd5b81356153b8816153bf565b634e487b7160e01b600052602160045260246000fd5b60028110614fdc57614fdc6153f1565b8151608082019061542781615407565b80835250602083015115156020830152604083015180516040840152602081015160608401525092915050565b60006020828403121561546657600080fd5b81356153b8816152fb565b8035610610816153bf565b6000610280828403121561548f57600080fd5b50919050565b82815260006020604081840152835180604085015260005b818110156154c9578581018301518582016060015282016154ad565b818111156154db576000606083870101525b50601f01601f191692909201606001949350505050565b805160058110615504576155046153f1565b80835250602081015160018060a01b03808251166020850152602082015160408501526040830151915080825116606085015250602081015115156080840152604081015160a0840152606081015160c08401526080810151151560e08401525060608101516155806101008401826001600160a01b03169052565b506080810151151561012083015260a00151151561014090910152565b61016081016104a482846154f2565b60058110614fdc57600080fd5b600060a082840312156155cb57600080fd5b6155d361519d565b905081356155e0816153bf565b815260208201356155f0816152fb565b8060208301525060408201356040820152606082013560608201526080820135615619816152fb565b608082015292915050565b600081830361016081121561563857600080fd5b6156406151d4565b9150823561564d816155ac565b82526040601f198201121561566157600080fd5b5061566a615205565b6020830135615678816153bf565b8152604083013560208083019190915282015261569883606084016155b9565b60408201526156aa6101008301615471565b60608201526156bc6101208301615309565b60808201526156ce6101408301615309565b60a082015292915050565b600061016082840312156156ec57600080fd5b6153b88383615624565b60006020828403121561570857600080fd5b5035919050565b600181811c9082168061572357607f821691505b6020821081141561548f57634e487b7160e01b600052602260045260246000fd5b8051610610816153bf565b60006080828403121561576157600080fd5b615769615236565b90508151815260208201516020820152604082015160408201526060820151606082015292915050565b8051610610816152fb565b600060a082840312156157b057600080fd5b6157b861519d565b905081516157c5816153bf565b815260208201516157d5816152fb565b8060208301525060408201516040820152606082015160608201526080820151615619816152fb565b600081830361016081121561581257600080fd5b61581a6151d4565b91508251615827816155ac565b82526040601f198201121561583b57600080fd5b50615844615205565b6020830151615852816153bf565b81526040830151602080830191909152820152615872836060840161579e565b60408201526158846101008301615744565b60608201526158966101208301615793565b60808201526156ce6101408301615793565b600060a082840312156158ba57600080fd5b6158c261519d565b905081516158cf816153bf565b81526020828101519082015260408201516158e9816152fb565b6040820152606082810151908201526080820151615619816152fb565b60006101c0828403121561591957600080fd5b615921615236565b9050815181526020820151602082015261593e83604084016157fe565b60408201526101a0820151606082015292915050565b6000610700828403121561596757600080fd5b61596f615267565b61597883615744565b8152615987846020850161574f565b602082015260a083015160408201526159a38460c085016157fe565b60608201526159b68461022085016158a8565b60808201526159c9846102c08501615906565b60a082015261048083015160c08201526159e66104a08401615744565b60e08201526104c0830151610100820152615a046104e08401615793565b610120820152610500830151610140820152615a236105208401615793565b610160820152615a378461054085016157fe565b6101808201526106a08301516101a0820152615a566106c08401615793565b6101c08201526106e092909201516101e083015250919050565b600060208284031215615a8257600080fd5b615a8a615299565b90508135615a97816153bf565b815292915050565b600060208284031215615ab157600080fd5b615ab9615299565b9135825250919050565b600060208284031215615ad557600080fd5b615add615299565b90508135615a97816152fb565b60006101608284031215615afd57600080fd5b615b05615299565b9050615a978383615624565b600060608284031215615b2357600080fd5b615b2b615299565b9050615a978383615314565b6000818303610280811215615b4b57600080fd5b615b53615205565b83358152610260601f1983011215615b6a57600080fd5b615b72615299565b9150615b7c6152ca565b602085013560068110615b8e57600080fd5b8152615b9d8660408701615a70565b6020820152615baf8660608701615a9f565b6040820152615bc18660808701615a70565b6060820152615bd38660a08701615ac3565b6080820152615be58660c08701615aea565b60a0820152615bf8866102208701615b11565b60c0820152825260208101919091529392505050565b6106358282516154f2565b80518051615c2681615407565b80845250602081015115156020840152604081015115156040840152505050565b6001600160a01b03838116825282516020808401919091528301515180516102a0840192919060068110615c7d57615c7d6153f1565b8060408601525081602082015151166060850152604081015151608085015260608101519150615cb960a0850183516001600160a01b03169052565b608081015151151560c085015260a08101519150615cda60e0850183615c0e565b60c001519050615cee610240840182615c19565b509392505050565b634e487b7160e01b600052601260045260246000fd5b600082615d1b57615d1b615cf6565b500690565b600082615d2f57615d2f615cf6565b500490565b6101808101615d4382856154f2565b6001600160a01b03929092166101609190910152919050565b82815261018081016153b860208301846154f2565b80518252602081015160208301526040810151615d9160408401826154f2565b50606001516101a09190910152565b81516001600160a01b0316815261070081016020830151615de56020840182805182526020810151602083015260408101516040830152606081015160608301525050565b50604083015160a08301526060830151615e0260c08401826154f2565b5060808381015180516001600160a01b03166102208501526020810151610240850152604081015115156102608501526060810151610280850152015115156102a083015260a0830151615e5a6102c0840182615d71565b5060c083015161048083015260e08301516001600160a01b03166104a08301526101008301516104c083015261012083015115156104e08301526101408301516105008301526101608301511515610520830152610180830151615ec26105408401826154f2565b506101a08301516106a08301526101c083015115156106c08301526101e0909201516106e0909101529056fea0c08e29c71350e40fbb4cf003989233b13d526e69962aefa0a312080ee1fc54f825aeeaf8a98d102cfef2ce8a456afbe776ac52abc49aed0689abcbcf31c12f4eb456086f80a7670898a2f96c26b017204aad3098f1aeb032d9b4edbe0ef5c9a2646970667358221220b607919378eb27db13e0d006a9592126906f5c61b9954d195e6cd478cba5684964736f6c634300080c0033`,
  BytecodeLen: 27901,
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
    at: './dao/contracts/dao-core.rsh:354:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './dao/contracts/dao-core.rsh:169:50:after expr stmt semicolon',
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
