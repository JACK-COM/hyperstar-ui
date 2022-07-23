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
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Contract;
  return {
    itemPurchased: [ctc0, ctc1, ctc1],
    listingClosed: [ctc0],
    listingCreated: [ctc2, ctc0, ctc1]
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Contract;
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc3, ctc3, ctc4]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc7 = stdlib.T_Struct([['item', ctc2], ['altToken', ctc2], ['seller', ctc0], ['useBondingCurve', ctc4]]);
  const ctc8 = stdlib.T_Struct([['price', ctc3], ['altPrice', ctc3], ['qty', ctc3]]);
  
  return {
    infos: {
      info: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v1677, v1678, v1679, v1680, v1681, v1682, v1683, v1684, v1701] = svs;
            return (await ((async () => {
              
              const v1731 = {
                altToken: v1682,
                item: v1679,
                seller: v1677,
                useBondingCurve: v1684
                };
              
              return v1731;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
            const [v1677, v1679, v1680, v1681, v1682, v1683, v1684, v1768, v1769, v1776, v1777, v1801, v1802] = svs;
            return (await ((async () => {
              
              const v1731 = {
                altToken: v1682,
                item: v1679,
                seller: v1677,
                useBondingCurve: v1684
                };
              
              return v1731;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc7
        },
      pricing: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v1677, v1678, v1679, v1680, v1681, v1682, v1683, v1684, v1701] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
            const [v1677, v1679, v1680, v1681, v1682, v1683, v1684, v1768, v1769, v1776, v1777, v1801, v1802] = svs;
            return (await ((async () => {
              
              const v1805 = {
                altPrice: v1768,
                price: v1769,
                qty: v1801
                };
              
              return v1805;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc8
        }
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc3, ctc3, ctc2, ctc3, ctc4, ctc6],
      4: [ctc0, ctc2, ctc3, ctc3, ctc2, ctc3, ctc4, ctc3, ctc3, ctc6, ctc3, ctc3, ctc4]
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
export async function Seller(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Seller expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Seller expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Contract;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_Tuple([ctc0, ctc4]);
  const ctc6 = stdlib.T_Tuple([ctc0]);
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Data({
    altBuy0_306: ctc6,
    buy0_306: ctc6,
    closeSale0_306: ctc7
    });
  const ctc9 = stdlib.T_Address;
  const ctc10 = stdlib.T_Tuple([ctc0, ctc0, ctc3]);
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  
  
  const v1635 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v1636 = [v1635, v1635];
  const v1640 = stdlib.protect(ctc0, interact.altPrice, 'for Seller\'s interact field altPrice');
  const v1641 = stdlib.protect(ctc1, interact.altToken, 'for Seller\'s interact field altToken');
  const v1642 = stdlib.protect(ctc2, interact.announcer, 'for Seller\'s interact field announcer');
  const v1643 = stdlib.protect(ctc1, interact.item, 'for Seller\'s interact field item');
  const v1644 = stdlib.protect(ctc0, interact.price, 'for Seller\'s interact field price');
  const v1645 = stdlib.protect(ctc0, interact.qty, 'for Seller\'s interact field qty');
  const v1646 = stdlib.protect(ctc3, interact.useBondingCurve, 'for Seller\'s interact field useBondingCurve');
  
  const v1649 = stdlib.eq(v1644, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:63:22:decimal', stdlib.UInt_max, '0'));
  const v1650 = stdlib.eq(v1640, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:63:39:decimal', stdlib.UInt_max, '0'));
  const v1651 = v1649 ? v1650 : false;
  const v1652 = v1651 ? false : true;
  stdlib.assert(v1652, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./contracts/sell-item.rsh:63:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/sell-item.rsh:51:14:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:51:18:function exp)'],
    msg: 'Price and alt price are 0',
    who: 'Seller'
    });
  const v1654 = stdlib.gt(v1645, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:64:17:decimal', stdlib.UInt_max, '0'));
  const v1655 = stdlib.lt(v1645, stdlib.UInt_max);
  const v1656 = v1654 ? v1655 : false;
  stdlib.assert(v1656, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./contracts/sell-item.rsh:64:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/sell-item.rsh:51:14:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:51:18:function exp)'],
    msg: 'Invalid quantity',
    who: 'Seller'
    });
  const v1658 = stdlib.mul(v1645, v1644);
  const v1663 = stdlib.sub(stdlib.UInt_max, v1658);
  const v1664 = stdlib.le(v1658, v1663);
  stdlib.assert(v1664, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./contracts/sell-item.rsh:65:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/sell-item.rsh:51:14:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:51:18:function exp)'],
    msg: 'Invalid price',
    who: 'Seller'
    });
  const v1666 = stdlib.mul(v1645, v1640);
  const v1671 = stdlib.sub(stdlib.UInt_max, v1666);
  const v1672 = stdlib.le(v1666, v1671);
  stdlib.assert(v1672, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./contracts/sell-item.rsh:66:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/sell-item.rsh:51:14:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:51:18:function exp)'],
    msg: 'Invalid alt price',
    who: 'Seller'
    });
  const v1674 = stdlib.tokenEq(v1643, v1641);
  const v1675 = v1674 ? false : true;
  stdlib.assert(v1675, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./contracts/sell-item.rsh:67:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/sell-item.rsh:51:14:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:51:18:function exp)'],
    msg: 'Can\'t sell gold for gold!',
    who: 'Seller'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1642, v1643, v1644, v1640, v1641, v1645, v1646],
    evt_cnt: 7,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./contracts/sell-item.rsh:70:10:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc2, ctc1, ctc0, ctc0, ctc1, ctc0, ctc3],
    pay: [stdlib.checkedBigNumberify('./contracts/sell-item.rsh:70:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1678, v1679, v1680, v1681, v1682, v1683, v1684], secs: v1686, time: v1685, didSend: v141, from: v1677 } = txn1;
      
      const v1689 = v1636[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:70:10:dot', stdlib.UInt_max, '0')];
      const v1691 = v1689[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:70:10:dot', stdlib.UInt_max, '1')];
      const v1692 = v1689[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:70:10:dot', stdlib.UInt_max, '2')];
      const v1693 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1691, v1692];
      const v1694 = stdlib.Array_set(v1636, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:70:10:dot', stdlib.UInt_max, '0'), v1693);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v1679
        });
      const v1696 = v1694[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:70:10:dot', stdlib.UInt_max, '1')];
      const v1698 = v1696[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:70:10:dot', stdlib.UInt_max, '1')];
      const v1699 = v1696[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:70:10:dot', stdlib.UInt_max, '2')];
      const v1700 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1698, v1699];
      const v1701 = stdlib.Array_set(v1694, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:70:10:dot', stdlib.UInt_max, '1'), v1700);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v1682
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc1, ctc0, ctc0, ctc1, ctc0, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v1678, v1679, v1680, v1681, v1682, v1683, v1684], secs: v1686, time: v1685, didSend: v141, from: v1677 } = txn1;
  const v1687 = stdlib.tokenEq(v1679, v1682);
  const v1688 = v1687 ? false : true;
  stdlib.assert(v1688, {
    at: './contracts/sell-item.rsh:70:10:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Seller'
    });
  const v1689 = v1636[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:70:10:dot', stdlib.UInt_max, '0')];
  const v1691 = v1689[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:70:10:dot', stdlib.UInt_max, '1')];
  const v1692 = v1689[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:70:10:dot', stdlib.UInt_max, '2')];
  const v1693 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1691, v1692];
  const v1694 = stdlib.Array_set(v1636, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:70:10:dot', stdlib.UInt_max, '0'), v1693);
  ;
  const v1696 = v1694[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:70:10:dot', stdlib.UInt_max, '1')];
  const v1698 = v1696[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:70:10:dot', stdlib.UInt_max, '1')];
  const v1699 = v1696[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:70:10:dot', stdlib.UInt_max, '2')];
  const v1700 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1698, v1699];
  const v1701 = stdlib.Array_set(v1694, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:70:10:dot', stdlib.UInt_max, '1'), v1700);
  ;
  ;
  const v1703 = stdlib.eq(v1680, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:79:20:decimal', stdlib.UInt_max, '0'));
  const v1704 = stdlib.eq(v1681, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:79:37:decimal', stdlib.UInt_max, '0'));
  const v1705 = v1703 ? v1704 : false;
  const v1706 = v1705 ? false : true;
  stdlib.assert(v1706, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./contracts/sell-item.rsh:79:8:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'Price and alt price are 0',
    who: 'Seller'
    });
  const v1708 = stdlib.gt(v1683, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:80:15:decimal', stdlib.UInt_max, '0'));
  const v1709 = stdlib.lt(v1683, stdlib.UInt_max);
  const v1710 = v1708 ? v1709 : false;
  stdlib.assert(v1710, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./contracts/sell-item.rsh:80:8:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'Invalid quantity',
    who: 'Seller'
    });
  const v1712 = stdlib.mul(v1683, v1680);
  const v1717 = stdlib.sub(stdlib.UInt_max, v1712);
  const v1718 = stdlib.le(v1712, v1717);
  stdlib.assert(v1718, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./contracts/sell-item.rsh:81:8:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'Invalid price',
    who: 'Seller'
    });
  const v1720 = stdlib.mul(v1683, v1681);
  const v1725 = stdlib.sub(stdlib.UInt_max, v1720);
  const v1726 = stdlib.le(v1720, v1725);
  stdlib.assert(v1726, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./contracts/sell-item.rsh:82:8:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: 'Invalid alt price',
    who: 'Seller'
    });
  const txn2 = await (ctc.sendrecv({
    args: [v1677, v1678, v1679, v1680, v1681, v1682, v1683, v1684, v1701],
    evt_cnt: 0,
    funcNum: 1,
    lct: v1685,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./contracts/sell-item.rsh:96:25:decimal', stdlib.UInt_max, '0'), [[v1683, v1679]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v1734, time: v1733, didSend: v253, from: v1732 } = txn2;
      
      ;
      const v1735 = v1701[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:96:10:dot', stdlib.UInt_max, '0')];
      const v1736 = v1735[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:96:10:dot', stdlib.UInt_max, '0')];
      const v1737 = stdlib.add(v1736, v1683);
      const v1744 = v1735[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:96:10:dot', stdlib.UInt_max, '1')];
      const v1745 = v1735[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:96:10:dot', stdlib.UInt_max, '2')];
      const v1746 = [v1737, v1744, v1745];
      const v1747 = stdlib.Array_set(v1701, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:96:10:dot', stdlib.UInt_max, '0'), v1746);
      sim_r.txns.push({
        amt: v1683,
        kind: 'to',
        tok: v1679
        });
      
      const v1750 = await ctc.getContractInfo();
      const v1753 = [stdlib.checkedBigNumberify('./contracts/sell-item.rsh:103:29:application', stdlib.UInt_max, '0'), ((sim_r.txns.push({
        kind: 'remote',
        obj: v1678,
        remote: ({
          accs: [],
          apps: [],
          bills: stdlib.checkedBigNumberify('./contracts/sell-item.rsh:103:29:application', stdlib.UInt_max, '0'),
          fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          pays: stdlib.checkedBigNumberify('./contracts/sell-item.rsh:103:29:application', stdlib.UInt_max, '0'),
          toks: []
          })
        })), undefined)];
      const v1754 = await txn2.getOutput('internal', 'v1753', ctc5, v1753);
      const v1756 = v1754[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:103:29:application', stdlib.UInt_max, '0')];
      null;
      const v1768 = v1681;
      const v1769 = v1680;
      const v1770 = v1733;
      const v1776 = v1747;
      const v1777 = v1756;
      
      if (await (async () => {
        const v1785 = v1776[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:125:33:application', stdlib.UInt_max, '0')];
        const v1786 = v1785[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:125:33:application', stdlib.UInt_max, '0')];
        const v1787 = stdlib.gt(v1786, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:125:42:decimal', stdlib.UInt_max, '0'));
        const v1794 = stdlib.eq(v1777, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:135:46:decimal', stdlib.UInt_max, '0'));
        const v1795 = v1787 ? v1794 : false;
        const v1796 = v1776[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:135:58:application', stdlib.UInt_max, '1')];
        const v1797 = v1796[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:135:58:application', stdlib.UInt_max, '0')];
        const v1798 = stdlib.eq(v1797, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:135:72:decimal', stdlib.UInt_max, '0'));
        const v1799 = v1795 ? v1798 : false;
        
        return v1799;})()) {
        const v1800 = v1776[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:125:33:application', stdlib.UInt_max, '0')];
        const v1801 = v1800[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:125:33:application', stdlib.UInt_max, '0')];
        const v1802 = stdlib.gt(v1801, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:125:42:decimal', stdlib.UInt_max, '0'));
        sim_r.isHalt = false;
        }
      else {
        const v2660 = v1776[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:125:33:application', stdlib.UInt_max, '0')];
        const v2661 = v2660[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:125:33:application', stdlib.UInt_max, '0')];
        const v2673 = stdlib.sub(v2661, v2661);
        const v2679 = v2660[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:219:35:application', stdlib.UInt_max, '1')];
        const v2680 = v2660[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:219:35:application', stdlib.UInt_max, '2')];
        const v2681 = [v2673, v2679, v2680];
        const v2682 = stdlib.Array_set(v1776, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:219:35:application', stdlib.UInt_max, '0'), v2681);
        sim_r.txns.push({
          kind: 'from',
          to: v1677,
          tok: v1679
          });
        sim_r.txns.push({
          kind: 'from',
          to: v1677,
          tok: undefined /* Nothing */
          });
        const v2691 = v2682[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:221:19:application', stdlib.UInt_max, '1')];
        const v2692 = v2691[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:221:19:application', stdlib.UInt_max, '0')];
        sim_r.txns.push({
          kind: 'from',
          to: v1677,
          tok: v1682
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v1682
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: v1679
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
    tys: [ctc9, ctc2, ctc1, ctc0, ctc0, ctc1, ctc0, ctc3, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1734, time: v1733, didSend: v253, from: v1732 } = txn2;
  ;
  const v1735 = v1701[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:96:10:dot', stdlib.UInt_max, '0')];
  const v1736 = v1735[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:96:10:dot', stdlib.UInt_max, '0')];
  const v1737 = stdlib.add(v1736, v1683);
  const v1738 = stdlib.le(v1737, stdlib.UInt_max);
  stdlib.assert(v1738, {
    at: './contracts/sell-item.rsh:96:10:dot',
    fs: [],
    msg: 'assume <= UInt.max',
    who: 'Seller'
    });
  const v1744 = v1735[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:96:10:dot', stdlib.UInt_max, '1')];
  const v1745 = v1735[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:96:10:dot', stdlib.UInt_max, '2')];
  const v1746 = [v1737, v1744, v1745];
  const v1747 = stdlib.Array_set(v1701, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:96:10:dot', stdlib.UInt_max, '0'), v1746);
  ;
  const v1748 = stdlib.addressEq(v1677, v1732);
  stdlib.assert(v1748, {
    at: './contracts/sell-item.rsh:96:10:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Seller'
    });
  stdlib.protect(ctc4, await interact.showComplete(), {
    at: './contracts/sell-item.rsh:97:31:application',
    fs: ['at ./contracts/sell-item.rsh:97:31:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:97:31:function exp)', 'at ./contracts/sell-item.rsh:97:31:application call to "liftedInteract" (defined at: ./contracts/sell-item.rsh:97:31:application)'],
    msg: 'showComplete',
    who: 'Seller'
    });
  
  const v1750 = await ctc.getContractInfo();
  const v1753 = undefined /* Remote */;
  const v1754 = await txn2.getOutput('internal', 'v1753', ctc5, v1753);
  const v1756 = v1754[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:103:29:application', stdlib.UInt_max, '0')];
  const v1762 = stdlib.le(v1756, stdlib.UInt_max);
  stdlib.assert(v1762, {
    at: './contracts/sell-item.rsh:103:29:application',
    fs: [],
    msg: 'assume <= UInt.max',
    who: 'Seller'
    });
  const v1766 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1756);
  stdlib.assert(v1766, {
    at: './contracts/sell-item.rsh:103:29:application',
    fs: [],
    msg: 'remote bill check',
    who: 'Seller'
    });
  null;
  let v1768 = v1681;
  let v1769 = v1680;
  let v1770 = v1733;
  let v1776 = v1747;
  let v1777 = v1756;
  
  while (await (async () => {
    const v1785 = v1776[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:125:33:application', stdlib.UInt_max, '0')];
    const v1786 = v1785[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:125:33:application', stdlib.UInt_max, '0')];
    const v1787 = stdlib.gt(v1786, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:125:42:decimal', stdlib.UInt_max, '0'));
    const v1794 = stdlib.eq(v1777, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:135:46:decimal', stdlib.UInt_max, '0'));
    const v1795 = v1787 ? v1794 : false;
    const v1796 = v1776[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:135:58:application', stdlib.UInt_max, '1')];
    const v1797 = v1796[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:135:58:application', stdlib.UInt_max, '0')];
    const v1798 = stdlib.eq(v1797, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:135:72:decimal', stdlib.UInt_max, '0'));
    const v1799 = v1795 ? v1798 : false;
    
    return v1799;})()) {
    const v1800 = v1776[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:125:33:application', stdlib.UInt_max, '0')];
    const v1801 = v1800[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:125:33:application', stdlib.UInt_max, '0')];
    const v1802 = stdlib.gt(v1801, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:125:42:decimal', stdlib.UInt_max, '0'));
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc8],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1904], secs: v1906, time: v1905, didSend: v1078, from: v1903 } = txn3;
    switch (v1904[0]) {
      case 'altBuy0_306': {
        const v1907 = v1904[1];
        undefined /* setApiDetails */;
        const v1912 = v1907[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:185:9:spread', stdlib.UInt_max, '0')];
        if (v1684) {
          const v1914 = stdlib.eq(v1912, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:195:24:decimal', stdlib.UInt_max, '1'));
          stdlib.assert(v1914, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./contracts/sell-item.rsh:195:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/sell-item.rsh:193:13:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:193:13:function exp)', 'at ./contracts/sell-item.rsh:121:57:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:193:13:function exp)', 'at ./contracts/sell-item.rsh:121:57:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:121:57:function exp)', 'at ./contracts/sell-item.rsh:123:14:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:123:14:function exp)'],
            msg: 'Max. 1 item per purchase (special pricing)',
            who: 'Seller'
            });
          }
        else {
          }
        const v1916 = stdlib.mul(v1912, v1768);
        const v1953 = stdlib.le(v1777, stdlib.UInt_max);
        stdlib.assert(v1953, {
          at: './contracts/sell-item.rsh:121:57:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Seller'
          });
        ;
        const v1957 = v1776[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:121:57:dot', stdlib.UInt_max, '1')];
        const v1958 = v1957[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:121:57:dot', stdlib.UInt_max, '0')];
        const v1959 = stdlib.add(v1958, v1916);
        const v1960 = stdlib.le(v1959, stdlib.UInt_max);
        stdlib.assert(v1960, {
          at: './contracts/sell-item.rsh:121:57:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Seller'
          });
        const v1966 = v1957[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:121:57:dot', stdlib.UInt_max, '1')];
        const v1967 = v1957[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:121:57:dot', stdlib.UInt_max, '2')];
        const v1968 = [v1959, v1966, v1967];
        const v1969 = stdlib.Array_set(v1776, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:121:57:dot', stdlib.UInt_max, '1'), v1968);
        ;
        stdlib.assert(v1802, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./contracts/sell-item.rsh:200:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/sell-item.rsh:199:21:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:199:21:function exp)'],
          msg: 'Sale has ended!',
          who: 'Seller'
          });
        const v1973 = stdlib.gt(v1768, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:201:33:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v1973, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./contracts/sell-item.rsh:201:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/sell-item.rsh:199:21:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:199:21:function exp)'],
          msg: 'No alternate pricing for item',
          who: 'Seller'
          });
        const v1975 = stdlib.gt(v1912, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:202:21:decimal', stdlib.UInt_max, '0'));
        const v1976 = stdlib.lt(v1912, stdlib.UInt_max);
        const v1977 = v1975 ? v1976 : false;
        stdlib.assert(v1977, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./contracts/sell-item.rsh:202:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/sell-item.rsh:199:21:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:199:21:function exp)'],
          msg: 'Invalid amount!',
          who: 'Seller'
          });
        if (v1684) {
          const v1980 = stdlib.eq(v1912, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:204:24:decimal', stdlib.UInt_max, '1'));
          stdlib.assert(v1980, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./contracts/sell-item.rsh:204:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/sell-item.rsh:199:21:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:199:21:function exp)'],
            msg: 'Max. 1 item per purchase (special pricing)',
            who: 'Seller'
            });
          }
        else {
          }
        const v1982 = v1969[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:206:29:application', stdlib.UInt_max, '0')];
        const v1983 = v1982[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:206:29:application', stdlib.UInt_max, '0')];
        const v1984 = stdlib.le(v1912, v1983);
        stdlib.assert(v1984, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./contracts/sell-item.rsh:206:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/sell-item.rsh:199:21:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:199:21:function exp)'],
          msg: 'Insufficient inventory',
          who: 'Seller'
          });
        const v1991 = stdlib.sub(v1983, v1912);
        const v1992 = stdlib.ge(v1991, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:208:31:application', stdlib.UInt_max, '0'));
        stdlib.assert(v1992, {
          at: './contracts/sell-item.rsh:208:31:application',
          fs: ['at ./contracts/sell-item.rsh:199:21:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:199:21:function exp)'],
          msg: 'assume >= 0',
          who: 'Seller'
          });
        const v1997 = v1982[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:208:31:application', stdlib.UInt_max, '1')];
        const v1998 = v1982[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:208:31:application', stdlib.UInt_max, '2')];
        const v1999 = [v1991, v1997, v1998];
        const v2000 = stdlib.Array_set(v1969, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:208:31:application', stdlib.UInt_max, '0'), v1999);
        ;
        const v2005 = stdlib.sub(v1777, v1777);
        const v2006 = stdlib.ge(v2005, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:209:31:application', stdlib.UInt_max, '0'));
        stdlib.assert(v2006, {
          at: './contracts/sell-item.rsh:209:31:application',
          fs: ['at ./contracts/sell-item.rsh:199:21:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:199:21:function exp)'],
          msg: 'assume >= 0',
          who: 'Seller'
          });
        ;
        const v2009 = v2000[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:210:25:application', stdlib.UInt_max, '1')];
        const v2010 = v2009[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:210:25:application', stdlib.UInt_max, '0')];
        const v2016 = stdlib.sub(v2010, v2010);
        const v2017 = stdlib.ge(v2016, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:210:49:application', stdlib.UInt_max, '0'));
        stdlib.assert(v2017, {
          at: './contracts/sell-item.rsh:210:49:application',
          fs: ['at ./contracts/sell-item.rsh:199:21:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:199:21:function exp)'],
          msg: 'assume >= 0',
          who: 'Seller'
          });
        const v2022 = v2009[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:210:49:application', stdlib.UInt_max, '1')];
        const v2023 = v2009[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:210:49:application', stdlib.UInt_max, '2')];
        const v2024 = [v2016, v2022, v2023];
        const v2025 = stdlib.Array_set(v2000, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:210:49:application', stdlib.UInt_max, '1'), v2024);
        ;
        const v2026 = null;
        await txn3.getOutput('altBuy', 'v2026', ctc4, v2026);
        const v2033 = v2025[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:213:55:application', stdlib.UInt_max, '0')];
        const v2034 = v2033[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:213:55:application', stdlib.UInt_max, '0')];
        null;
        let v2035;
        if (v1684) {
          const v2039 = stdlib.eq(v2034, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:110:42:decimal', stdlib.UInt_max, '0'));
          const v2042 = v2039 ? stdlib.checkedBigNumberify('./contracts/sell-item.rsh:110:46:decimal', stdlib.UInt_max, '1') : v2034;
          const v2044 = stdlib.div(v1683, v2042);
          const v2045 = stdlib.mul(v2044, v1680);
          const v2047 = stdlib.mul(v2044, v1681);
          const v2049 = [v2045, v2047];
          v2035 = v2049;
          }
        else {
          const v2050 = [v1680, v1681];
          v2035 = v2050;
          }
        const v2051 = v2035[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:121:9:array', stdlib.UInt_max, '0')];
        const v2052 = v2035[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:121:9:array', stdlib.UInt_max, '1')];
        const cv1768 = v2052;
        const cv1769 = v2051;
        const cv1770 = v1905;
        const cv1776 = v2025;
        const cv1777 = v2005;
        
        v1768 = cv1768;
        v1769 = cv1769;
        v1770 = cv1770;
        v1776 = cv1776;
        v1777 = cv1777;
        
        continue;
        break;
        }
      case 'buy0_306': {
        const v2158 = v1904[1];
        undefined /* setApiDetails */;
        const v2176 = v2158[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:152:9:spread', stdlib.UInt_max, '0')];
        if (v1684) {
          const v2178 = stdlib.eq(v2176, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:165:24:decimal', stdlib.UInt_max, '1'));
          stdlib.assert(v2178, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./contracts/sell-item.rsh:165:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/sell-item.rsh:163:13:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:163:13:function exp)', 'at ./contracts/sell-item.rsh:121:57:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:163:13:function exp)', 'at ./contracts/sell-item.rsh:121:57:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:121:57:function exp)', 'at ./contracts/sell-item.rsh:123:14:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:123:14:function exp)'],
            msg: 'Max. 1 item per purchase (special pricing)',
            who: 'Seller'
            });
          }
        else {
          }
        const v2180 = stdlib.mul(v2176, v1769);
        const v2203 = stdlib.add(v1777, v2180);
        const v2204 = stdlib.le(v2203, stdlib.UInt_max);
        stdlib.assert(v2204, {
          at: './contracts/sell-item.rsh:121:57:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Seller'
          });
        ;
        const v2208 = v1776[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:121:57:dot', stdlib.UInt_max, '1')];
        const v2209 = v2208[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:121:57:dot', stdlib.UInt_max, '0')];
        const v2211 = stdlib.le(v2209, stdlib.UInt_max);
        stdlib.assert(v2211, {
          at: './contracts/sell-item.rsh:121:57:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Seller'
          });
        const v2217 = v2208[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:121:57:dot', stdlib.UInt_max, '1')];
        const v2218 = v2208[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:121:57:dot', stdlib.UInt_max, '2')];
        const v2219 = [v2209, v2217, v2218];
        const v2220 = stdlib.Array_set(v1776, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:121:57:dot', stdlib.UInt_max, '1'), v2219);
        ;
        stdlib.assert(v1802, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./contracts/sell-item.rsh:170:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/sell-item.rsh:169:21:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:169:21:function exp)'],
          msg: 'Sale has ended!',
          who: 'Seller'
          });
        const v2307 = stdlib.gt(v2176, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:171:21:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v2307, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./contracts/sell-item.rsh:171:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/sell-item.rsh:169:21:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:169:21:function exp)'],
          msg: 'Invalid amount!',
          who: 'Seller'
          });
        const v2309 = stdlib.gt(v1769, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:172:30:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v2309, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./contracts/sell-item.rsh:172:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/sell-item.rsh:169:21:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:169:21:function exp)'],
          msg: 'Only alternate pricing for item',
          who: 'Seller'
          });
        const v2311 = v2220[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:173:29:application', stdlib.UInt_max, '0')];
        const v2312 = v2311[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:173:29:application', stdlib.UInt_max, '0')];
        const v2313 = stdlib.le(v2176, v2312);
        stdlib.assert(v2313, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./contracts/sell-item.rsh:173:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/sell-item.rsh:169:21:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:169:21:function exp)'],
          msg: 'Insufficient inventory',
          who: 'Seller'
          });
        const v2320 = stdlib.sub(v2312, v2176);
        const v2321 = stdlib.ge(v2320, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:175:31:application', stdlib.UInt_max, '0'));
        stdlib.assert(v2321, {
          at: './contracts/sell-item.rsh:175:31:application',
          fs: ['at ./contracts/sell-item.rsh:169:21:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:169:21:function exp)'],
          msg: 'assume >= 0',
          who: 'Seller'
          });
        const v2326 = v2311[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:175:31:application', stdlib.UInt_max, '1')];
        const v2327 = v2311[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:175:31:application', stdlib.UInt_max, '2')];
        const v2328 = [v2320, v2326, v2327];
        const v2329 = stdlib.Array_set(v2220, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:175:31:application', stdlib.UInt_max, '0'), v2328);
        ;
        const v2334 = stdlib.sub(v2203, v2203);
        const v2335 = stdlib.ge(v2334, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:176:31:application', stdlib.UInt_max, '0'));
        stdlib.assert(v2335, {
          at: './contracts/sell-item.rsh:176:31:application',
          fs: ['at ./contracts/sell-item.rsh:169:21:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:169:21:function exp)'],
          msg: 'assume >= 0',
          who: 'Seller'
          });
        ;
        const v2338 = v2329[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:177:25:application', stdlib.UInt_max, '1')];
        const v2339 = v2338[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:177:25:application', stdlib.UInt_max, '0')];
        const v2345 = stdlib.sub(v2339, v2339);
        const v2346 = stdlib.ge(v2345, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:177:49:application', stdlib.UInt_max, '0'));
        stdlib.assert(v2346, {
          at: './contracts/sell-item.rsh:177:49:application',
          fs: ['at ./contracts/sell-item.rsh:169:21:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:169:21:function exp)'],
          msg: 'assume >= 0',
          who: 'Seller'
          });
        const v2351 = v2338[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:177:49:application', stdlib.UInt_max, '1')];
        const v2352 = v2338[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:177:49:application', stdlib.UInt_max, '2')];
        const v2353 = [v2345, v2351, v2352];
        const v2354 = stdlib.Array_set(v2329, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:177:49:application', stdlib.UInt_max, '1'), v2353);
        ;
        const v2355 = null;
        await txn3.getOutput('buy', 'v2355', ctc4, v2355);
        const v2362 = v2354[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:180:55:application', stdlib.UInt_max, '0')];
        const v2363 = v2362[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:180:55:application', stdlib.UInt_max, '0')];
        null;
        let v2364;
        if (v1684) {
          const v2368 = stdlib.eq(v2363, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:110:42:decimal', stdlib.UInt_max, '0'));
          const v2371 = v2368 ? stdlib.checkedBigNumberify('./contracts/sell-item.rsh:110:46:decimal', stdlib.UInt_max, '1') : v2363;
          const v2373 = stdlib.div(v1683, v2371);
          const v2374 = stdlib.mul(v2373, v1680);
          const v2376 = stdlib.mul(v2373, v1681);
          const v2378 = [v2374, v2376];
          v2364 = v2378;
          }
        else {
          const v2379 = [v1680, v1681];
          v2364 = v2379;
          }
        const v2380 = v2364[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:121:9:array', stdlib.UInt_max, '0')];
        const v2381 = v2364[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:121:9:array', stdlib.UInt_max, '1')];
        const cv1768 = v2381;
        const cv1769 = v2380;
        const cv1770 = v1905;
        const cv1776 = v2354;
        const cv1777 = v2334;
        
        v1768 = cv1768;
        v1769 = cv1769;
        v1770 = cv1770;
        v1776 = cv1776;
        v1777 = cv1777;
        
        continue;
        break;
        }
      case 'closeSale0_306': {
        const v2409 = v1904[1];
        undefined /* setApiDetails */;
        const v2455 = stdlib.le(v1777, stdlib.UInt_max);
        stdlib.assert(v2455, {
          at: './contracts/sell-item.rsh:121:57:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Seller'
          });
        ;
        const v2459 = v1776[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:121:57:dot', stdlib.UInt_max, '1')];
        const v2460 = v2459[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:121:57:dot', stdlib.UInt_max, '0')];
        const v2462 = stdlib.le(v2460, stdlib.UInt_max);
        stdlib.assert(v2462, {
          at: './contracts/sell-item.rsh:121:57:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Seller'
          });
        const v2468 = v2459[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:121:57:dot', stdlib.UInt_max, '1')];
        const v2469 = v2459[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:121:57:dot', stdlib.UInt_max, '2')];
        const v2470 = [v2460, v2468, v2469];
        const v2471 = stdlib.Array_set(v1776, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:121:57:dot', stdlib.UInt_max, '1'), v2470);
        ;
        const v2634 = stdlib.addressEq(v1903, v1677);
        stdlib.assert(v2634, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./contracts/sell-item.rsh:143:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/sell-item.rsh:142:16:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:142:16:function exp)'],
          msg: 'Unauthorized access',
          who: 'Seller'
          });
        const v2636 = v2471[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:144:25:application', stdlib.UInt_max, '0')];
        const v2637 = v2636[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:144:25:application', stdlib.UInt_max, '0')];
        const v2643 = stdlib.sub(v2637, v2637);
        const v2644 = stdlib.ge(v2643, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:144:41:application', stdlib.UInt_max, '0'));
        stdlib.assert(v2644, {
          at: './contracts/sell-item.rsh:144:41:application',
          fs: ['at ./contracts/sell-item.rsh:142:16:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:142:16:function exp)'],
          msg: 'assume >= 0',
          who: 'Seller'
          });
        const v2649 = v2636[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:144:41:application', stdlib.UInt_max, '1')];
        const v2650 = v2636[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:144:41:application', stdlib.UInt_max, '2')];
        const v2651 = [v2643, v2649, v2650];
        const v2652 = stdlib.Array_set(v2471, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:144:41:application', stdlib.UInt_max, '0'), v2651);
        ;
        const v2653 = null;
        await txn3.getOutput('closeSale', 'v2653', ctc4, v2653);
        null;
        const cv1768 = stdlib.checkedBigNumberify('./contracts/sell-item.rsh:149:20:decimal', stdlib.UInt_max, '0');
        const cv1769 = stdlib.checkedBigNumberify('./contracts/sell-item.rsh:149:17:decimal', stdlib.UInt_max, '0');
        const cv1770 = v1905;
        const cv1776 = v2652;
        const cv1777 = v1777;
        
        v1768 = cv1768;
        v1769 = cv1769;
        v1770 = cv1770;
        v1776 = cv1776;
        v1777 = cv1777;
        
        continue;
        break;
        }
      }
    
    }
  const v2660 = v1776[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:125:33:application', stdlib.UInt_max, '0')];
  const v2661 = v2660[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:125:33:application', stdlib.UInt_max, '0')];
  const v2673 = stdlib.sub(v2661, v2661);
  const v2674 = stdlib.ge(v2673, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:219:35:application', stdlib.UInt_max, '0'));
  stdlib.assert(v2674, {
    at: './contracts/sell-item.rsh:219:35:application',
    fs: [],
    msg: 'assume >= 0',
    who: 'Seller'
    });
  const v2679 = v2660[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:219:35:application', stdlib.UInt_max, '1')];
  const v2680 = v2660[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:219:35:application', stdlib.UInt_max, '2')];
  const v2681 = [v2673, v2679, v2680];
  const v2682 = stdlib.Array_set(v1776, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:219:35:application', stdlib.UInt_max, '0'), v2681);
  ;
  const v2687 = stdlib.sub(v1777, v1777);
  const v2688 = stdlib.ge(v2687, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:220:25:application', stdlib.UInt_max, '0'));
  stdlib.assert(v2688, {
    at: './contracts/sell-item.rsh:220:25:application',
    fs: [],
    msg: 'assume >= 0',
    who: 'Seller'
    });
  ;
  const v2691 = v2682[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:221:19:application', stdlib.UInt_max, '1')];
  const v2692 = v2691[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:221:19:application', stdlib.UInt_max, '0')];
  const v2698 = stdlib.sub(v2692, v2692);
  const v2699 = stdlib.ge(v2698, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:221:43:application', stdlib.UInt_max, '0'));
  stdlib.assert(v2699, {
    at: './contracts/sell-item.rsh:221:43:application',
    fs: [],
    msg: 'assume >= 0',
    who: 'Seller'
    });
  ;
  return;
  
  
  
  
  };
export async function _altBuy4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _altBuy4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _altBuy4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc6 = stdlib.T_Tuple([ctc2]);
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Data({
    altBuy0_306: ctc6,
    buy0_306: ctc6,
    closeSale0_306: ctc7
    });
  const ctc9 = stdlib.T_Null;
  
  
  const [v1677, v1679, v1680, v1681, v1682, v1683, v1684, v1768, v1769, v1776, v1777, v1801, v1802] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc2, ctc2, ctc1, ctc2, ctc3, ctc2, ctc2, ctc5, ctc2, ctc2, ctc3]);
  const v1841 = stdlib.protect(ctc6, await interact.in(), {
    at: './contracts/sell-item.rsh:1:23:application',
    fs: ['at ./contracts/sell-item.rsh:187:13:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:187:13:function exp)', 'at ./contracts/sell-item.rsh:121:57:application call to "runaltBuy0_306" (defined at: ./contracts/sell-item.rsh:185:9:function exp)', 'at ./contracts/sell-item.rsh:121:57:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:121:57:function exp)'],
    msg: 'in',
    who: 'altBuy'
    });
  const v1842 = v1841[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:1:23:application', stdlib.UInt_max, '0')];
  stdlib.assert(v1802, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./contracts/sell-item.rsh:188:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/sell-item.rsh:187:13:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:187:13:function exp)', 'at ./contracts/sell-item.rsh:187:13:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:187:13:function exp)', 'at ./contracts/sell-item.rsh:121:57:application call to "runaltBuy0_306" (defined at: ./contracts/sell-item.rsh:185:9:function exp)', 'at ./contracts/sell-item.rsh:121:57:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:121:57:function exp)'],
    msg: 'Sale has ended!',
    who: 'altBuy'
    });
  const v1846 = stdlib.gt(v1768, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:189:33:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v1846, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./contracts/sell-item.rsh:189:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/sell-item.rsh:187:13:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:187:13:function exp)', 'at ./contracts/sell-item.rsh:187:13:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:187:13:function exp)', 'at ./contracts/sell-item.rsh:121:57:application call to "runaltBuy0_306" (defined at: ./contracts/sell-item.rsh:185:9:function exp)', 'at ./contracts/sell-item.rsh:121:57:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:121:57:function exp)'],
    msg: 'No alternate pricing for item',
    who: 'altBuy'
    });
  const v1848 = stdlib.gt(v1842, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:190:21:decimal', stdlib.UInt_max, '0'));
  const v1849 = stdlib.lt(v1842, stdlib.UInt_max);
  const v1850 = v1848 ? v1849 : false;
  stdlib.assert(v1850, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./contracts/sell-item.rsh:190:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/sell-item.rsh:187:13:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:187:13:function exp)', 'at ./contracts/sell-item.rsh:187:13:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:187:13:function exp)', 'at ./contracts/sell-item.rsh:121:57:application call to "runaltBuy0_306" (defined at: ./contracts/sell-item.rsh:185:9:function exp)', 'at ./contracts/sell-item.rsh:121:57:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:121:57:function exp)'],
    msg: 'Invalid amount!',
    who: 'altBuy'
    });
  const v1854 = stdlib.le(v1842, v1801);
  stdlib.assert(v1854, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./contracts/sell-item.rsh:191:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/sell-item.rsh:187:13:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:187:13:function exp)', 'at ./contracts/sell-item.rsh:187:13:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:187:13:function exp)', 'at ./contracts/sell-item.rsh:121:57:application call to "runaltBuy0_306" (defined at: ./contracts/sell-item.rsh:185:9:function exp)', 'at ./contracts/sell-item.rsh:121:57:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:121:57:function exp)'],
    msg: 'Insufficient inventory',
    who: 'altBuy'
    });
  const v1859 = ['altBuy0_306', v1841];
  
  if (v1684) {
    const v1864 = stdlib.eq(v1842, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:195:24:decimal', stdlib.UInt_max, '1'));
    stdlib.assert(v1864, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./contracts/sell-item.rsh:195:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/sell-item.rsh:193:13:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:193:13:function exp)', 'at ./contracts/sell-item.rsh:121:57:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:193:13:function exp)', 'at ./contracts/sell-item.rsh:121:57:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:121:57:function exp)', 'at ./contracts/sell-item.rsh:123:14:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:123:14:function exp)'],
      msg: 'Max. 1 item per purchase (special pricing)',
      who: 'altBuy'
      });
    }
  else {
    }
  const v1866 = stdlib.mul(v1842, v1768);
  
  const txn1 = await (ctc.sendrecv({
    args: [v1677, v1679, v1680, v1681, v1682, v1683, v1684, v1768, v1769, v1776, v1777, v1801, v1802, v1859],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./contracts/sell-item.rsh:197:17:decimal', stdlib.UInt_max, '0'), [[v1866, v1682]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1904], secs: v1906, time: v1905, didSend: v1078, from: v1903 } = txn1;
      
      switch (v1904[0]) {
        case 'altBuy0_306': {
          const v1907 = v1904[1];
          sim_r.txns.push({
            kind: 'api',
            who: "altBuy"
            });
          const v1912 = v1907[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:185:9:spread', stdlib.UInt_max, '0')];
          const v1916 = stdlib.mul(v1912, v1768);
          ;
          const v1957 = v1776[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:121:57:dot', stdlib.UInt_max, '1')];
          const v1958 = v1957[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:121:57:dot', stdlib.UInt_max, '0')];
          const v1959 = stdlib.add(v1958, v1916);
          const v1966 = v1957[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:121:57:dot', stdlib.UInt_max, '1')];
          const v1967 = v1957[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:121:57:dot', stdlib.UInt_max, '2')];
          const v1968 = [v1959, v1966, v1967];
          const v1969 = stdlib.Array_set(v1776, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:121:57:dot', stdlib.UInt_max, '1'), v1968);
          sim_r.txns.push({
            amt: v1916,
            kind: 'to',
            tok: v1682
            });
          const v1982 = v1969[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:206:29:application', stdlib.UInt_max, '0')];
          const v1983 = v1982[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:206:29:application', stdlib.UInt_max, '0')];
          const v1991 = stdlib.sub(v1983, v1912);
          const v1997 = v1982[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:208:31:application', stdlib.UInt_max, '1')];
          const v1998 = v1982[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:208:31:application', stdlib.UInt_max, '2')];
          const v1999 = [v1991, v1997, v1998];
          const v2000 = stdlib.Array_set(v1969, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:208:31:application', stdlib.UInt_max, '0'), v1999);
          sim_r.txns.push({
            kind: 'from',
            to: v1903,
            tok: v1679
            });
          const v2005 = stdlib.sub(v1777, v1777);
          sim_r.txns.push({
            kind: 'from',
            to: v1677,
            tok: undefined /* Nothing */
            });
          const v2009 = v2000[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:210:25:application', stdlib.UInt_max, '1')];
          const v2010 = v2009[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:210:25:application', stdlib.UInt_max, '0')];
          const v2016 = stdlib.sub(v2010, v2010);
          const v2022 = v2009[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:210:49:application', stdlib.UInt_max, '1')];
          const v2023 = v2009[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:210:49:application', stdlib.UInt_max, '2')];
          const v2024 = [v2016, v2022, v2023];
          const v2025 = stdlib.Array_set(v2000, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:210:49:application', stdlib.UInt_max, '1'), v2024);
          sim_r.txns.push({
            kind: 'from',
            to: v1677,
            tok: v1682
            });
          const v2026 = null;
          const v2027 = await txn1.getOutput('altBuy', 'v2026', ctc9, v2026);
          
          const v2033 = v2025[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:213:55:application', stdlib.UInt_max, '0')];
          const v2034 = v2033[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:213:55:application', stdlib.UInt_max, '0')];
          null;
          let v2035;
          if (v1684) {
            const v2039 = stdlib.eq(v2034, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:110:42:decimal', stdlib.UInt_max, '0'));
            const v2042 = v2039 ? stdlib.checkedBigNumberify('./contracts/sell-item.rsh:110:46:decimal', stdlib.UInt_max, '1') : v2034;
            const v2044 = stdlib.div(v1683, v2042);
            const v2045 = stdlib.mul(v2044, v1680);
            const v2047 = stdlib.mul(v2044, v1681);
            const v2049 = [v2045, v2047];
            v2035 = v2049;
            }
          else {
            const v2050 = [v1680, v1681];
            v2035 = v2050;
            }
          const v2051 = v2035[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:121:9:array', stdlib.UInt_max, '0')];
          const v2052 = v2035[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:121:9:array', stdlib.UInt_max, '1')];
          const v3016 = v2052;
          const v3017 = v2051;
          const v3019 = v2025;
          const v3020 = v2005;
          const v3023 = stdlib.gt(v2034, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:125:42:decimal', stdlib.UInt_max, '0'));
          const v3024 = stdlib.eq(v2005, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:135:46:decimal', stdlib.UInt_max, '0'));
          const v3025 = v3023 ? v3024 : false;
          const v3026 = v2025[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:135:58:application', stdlib.UInt_max, '1')];
          const v3027 = v3026[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:135:58:application', stdlib.UInt_max, '0')];
          const v3028 = stdlib.eq(v3027, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:135:72:decimal', stdlib.UInt_max, '0'));
          const v3029 = v3025 ? v3028 : false;
          if (v3029) {
            sim_r.isHalt = false;
            }
          else {
            const v3035 = stdlib.sub(v2034, v2034);
            const v3037 = v2033[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:219:35:application', stdlib.UInt_max, '1')];
            const v3038 = v2033[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:219:35:application', stdlib.UInt_max, '2')];
            const v3039 = [v3035, v3037, v3038];
            const v3040 = stdlib.Array_set(v2025, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:219:35:application', stdlib.UInt_max, '0'), v3039);
            sim_r.txns.push({
              kind: 'from',
              to: v1677,
              tok: v1679
              });
            sim_r.txns.push({
              kind: 'from',
              to: v1677,
              tok: undefined /* Nothing */
              });
            const v3043 = v3040[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:221:19:application', stdlib.UInt_max, '1')];
            const v3044 = v3043[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:221:19:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v1677,
              tok: v1682
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v1682
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: v1679
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'buy0_306': {
          const v2158 = v1904[1];
          
          break;
          }
        case 'closeSale0_306': {
          const v2409 = v1904[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc2, ctc1, ctc2, ctc3, ctc2, ctc2, ctc5, ctc2, ctc2, ctc3, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v1904], secs: v1906, time: v1905, didSend: v1078, from: v1903 } = txn1;
  switch (v1904[0]) {
    case 'altBuy0_306': {
      const v1907 = v1904[1];
      undefined /* setApiDetails */;
      const v1912 = v1907[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:185:9:spread', stdlib.UInt_max, '0')];
      if (v1684) {
        const v1914 = stdlib.eq(v1912, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:195:24:decimal', stdlib.UInt_max, '1'));
        stdlib.assert(v1914, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./contracts/sell-item.rsh:195:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/sell-item.rsh:193:13:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:193:13:function exp)', 'at ./contracts/sell-item.rsh:121:57:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:193:13:function exp)', 'at ./contracts/sell-item.rsh:121:57:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:121:57:function exp)', 'at ./contracts/sell-item.rsh:123:14:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:123:14:function exp)'],
          msg: 'Max. 1 item per purchase (special pricing)',
          who: 'altBuy'
          });
        }
      else {
        }
      const v1916 = stdlib.mul(v1912, v1768);
      const v1953 = stdlib.le(v1777, stdlib.UInt_max);
      stdlib.assert(v1953, {
        at: './contracts/sell-item.rsh:121:57:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'altBuy'
        });
      ;
      const v1957 = v1776[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:121:57:dot', stdlib.UInt_max, '1')];
      const v1958 = v1957[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:121:57:dot', stdlib.UInt_max, '0')];
      const v1959 = stdlib.add(v1958, v1916);
      const v1960 = stdlib.le(v1959, stdlib.UInt_max);
      stdlib.assert(v1960, {
        at: './contracts/sell-item.rsh:121:57:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'altBuy'
        });
      const v1966 = v1957[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:121:57:dot', stdlib.UInt_max, '1')];
      const v1967 = v1957[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:121:57:dot', stdlib.UInt_max, '2')];
      const v1968 = [v1959, v1966, v1967];
      const v1969 = stdlib.Array_set(v1776, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:121:57:dot', stdlib.UInt_max, '1'), v1968);
      ;
      stdlib.assert(v1802, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./contracts/sell-item.rsh:200:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/sell-item.rsh:199:21:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:199:21:function exp)'],
        msg: 'Sale has ended!',
        who: 'altBuy'
        });
      const v1973 = stdlib.gt(v1768, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:201:33:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v1973, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./contracts/sell-item.rsh:201:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/sell-item.rsh:199:21:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:199:21:function exp)'],
        msg: 'No alternate pricing for item',
        who: 'altBuy'
        });
      const v1975 = stdlib.gt(v1912, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:202:21:decimal', stdlib.UInt_max, '0'));
      const v1976 = stdlib.lt(v1912, stdlib.UInt_max);
      const v1977 = v1975 ? v1976 : false;
      stdlib.assert(v1977, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./contracts/sell-item.rsh:202:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/sell-item.rsh:199:21:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:199:21:function exp)'],
        msg: 'Invalid amount!',
        who: 'altBuy'
        });
      if (v1684) {
        const v1980 = stdlib.eq(v1912, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:204:24:decimal', stdlib.UInt_max, '1'));
        stdlib.assert(v1980, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./contracts/sell-item.rsh:204:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/sell-item.rsh:199:21:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:199:21:function exp)'],
          msg: 'Max. 1 item per purchase (special pricing)',
          who: 'altBuy'
          });
        }
      else {
        }
      const v1982 = v1969[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:206:29:application', stdlib.UInt_max, '0')];
      const v1983 = v1982[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:206:29:application', stdlib.UInt_max, '0')];
      const v1984 = stdlib.le(v1912, v1983);
      stdlib.assert(v1984, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./contracts/sell-item.rsh:206:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/sell-item.rsh:199:21:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:199:21:function exp)'],
        msg: 'Insufficient inventory',
        who: 'altBuy'
        });
      const v1991 = stdlib.sub(v1983, v1912);
      const v1992 = stdlib.ge(v1991, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:208:31:application', stdlib.UInt_max, '0'));
      stdlib.assert(v1992, {
        at: './contracts/sell-item.rsh:208:31:application',
        fs: ['at ./contracts/sell-item.rsh:199:21:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:199:21:function exp)'],
        msg: 'assume >= 0',
        who: 'altBuy'
        });
      const v1997 = v1982[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:208:31:application', stdlib.UInt_max, '1')];
      const v1998 = v1982[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:208:31:application', stdlib.UInt_max, '2')];
      const v1999 = [v1991, v1997, v1998];
      const v2000 = stdlib.Array_set(v1969, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:208:31:application', stdlib.UInt_max, '0'), v1999);
      ;
      const v2005 = stdlib.sub(v1777, v1777);
      const v2006 = stdlib.ge(v2005, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:209:31:application', stdlib.UInt_max, '0'));
      stdlib.assert(v2006, {
        at: './contracts/sell-item.rsh:209:31:application',
        fs: ['at ./contracts/sell-item.rsh:199:21:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:199:21:function exp)'],
        msg: 'assume >= 0',
        who: 'altBuy'
        });
      ;
      const v2009 = v2000[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:210:25:application', stdlib.UInt_max, '1')];
      const v2010 = v2009[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:210:25:application', stdlib.UInt_max, '0')];
      const v2016 = stdlib.sub(v2010, v2010);
      const v2017 = stdlib.ge(v2016, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:210:49:application', stdlib.UInt_max, '0'));
      stdlib.assert(v2017, {
        at: './contracts/sell-item.rsh:210:49:application',
        fs: ['at ./contracts/sell-item.rsh:199:21:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:199:21:function exp)'],
        msg: 'assume >= 0',
        who: 'altBuy'
        });
      const v2022 = v2009[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:210:49:application', stdlib.UInt_max, '1')];
      const v2023 = v2009[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:210:49:application', stdlib.UInt_max, '2')];
      const v2024 = [v2016, v2022, v2023];
      const v2025 = stdlib.Array_set(v2000, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:210:49:application', stdlib.UInt_max, '1'), v2024);
      ;
      const v2026 = null;
      const v2027 = await txn1.getOutput('altBuy', 'v2026', ctc9, v2026);
      if (v1078) {
        stdlib.protect(ctc9, await interact.out(v1907, v2027), {
          at: './contracts/sell-item.rsh:186:7:application',
          fs: ['at ./contracts/sell-item.rsh:186:7:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:186:7:function exp)', 'at ./contracts/sell-item.rsh:212:15:application call to "notify" (defined at: ./contracts/sell-item.rsh:199:21:function exp)', 'at ./contracts/sell-item.rsh:199:21:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:199:21:function exp)'],
          msg: 'out',
          who: 'altBuy'
          });
        }
      else {
        }
      
      const v2033 = v2025[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:213:55:application', stdlib.UInt_max, '0')];
      const v2034 = v2033[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:213:55:application', stdlib.UInt_max, '0')];
      null;
      let v2035;
      if (v1684) {
        const v2039 = stdlib.eq(v2034, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:110:42:decimal', stdlib.UInt_max, '0'));
        const v2042 = v2039 ? stdlib.checkedBigNumberify('./contracts/sell-item.rsh:110:46:decimal', stdlib.UInt_max, '1') : v2034;
        const v2044 = stdlib.div(v1683, v2042);
        const v2045 = stdlib.mul(v2044, v1680);
        const v2047 = stdlib.mul(v2044, v1681);
        const v2049 = [v2045, v2047];
        v2035 = v2049;
        }
      else {
        const v2050 = [v1680, v1681];
        v2035 = v2050;
        }
      const v2051 = v2035[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:121:9:array', stdlib.UInt_max, '0')];
      const v2052 = v2035[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:121:9:array', stdlib.UInt_max, '1')];
      const v3016 = v2052;
      const v3017 = v2051;
      const v3019 = v2025;
      const v3020 = v2005;
      const v3023 = stdlib.gt(v2034, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:125:42:decimal', stdlib.UInt_max, '0'));
      const v3024 = stdlib.eq(v2005, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:135:46:decimal', stdlib.UInt_max, '0'));
      const v3025 = v3023 ? v3024 : false;
      const v3026 = v2025[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:135:58:application', stdlib.UInt_max, '1')];
      const v3027 = v3026[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:135:58:application', stdlib.UInt_max, '0')];
      const v3028 = stdlib.eq(v3027, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:135:72:decimal', stdlib.UInt_max, '0'));
      const v3029 = v3025 ? v3028 : false;
      if (v3029) {
        return;
        }
      else {
        const v3035 = stdlib.sub(v2034, v2034);
        const v3036 = stdlib.ge(v3035, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:219:35:application', stdlib.UInt_max, '0'));
        stdlib.assert(v3036, {
          at: './contracts/sell-item.rsh:219:35:application',
          fs: [],
          msg: 'assume >= 0',
          who: 'altBuy'
          });
        const v3037 = v2033[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:219:35:application', stdlib.UInt_max, '1')];
        const v3038 = v2033[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:219:35:application', stdlib.UInt_max, '2')];
        const v3039 = [v3035, v3037, v3038];
        const v3040 = stdlib.Array_set(v2025, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:219:35:application', stdlib.UInt_max, '0'), v3039);
        ;
        const v3041 = stdlib.sub(v2005, v2005);
        const v3042 = stdlib.ge(v3041, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:220:25:application', stdlib.UInt_max, '0'));
        stdlib.assert(v3042, {
          at: './contracts/sell-item.rsh:220:25:application',
          fs: [],
          msg: 'assume >= 0',
          who: 'altBuy'
          });
        ;
        const v3043 = v3040[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:221:19:application', stdlib.UInt_max, '1')];
        const v3044 = v3043[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:221:19:application', stdlib.UInt_max, '0')];
        const v3045 = stdlib.sub(v3044, v3044);
        const v3046 = stdlib.ge(v3045, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:221:43:application', stdlib.UInt_max, '0'));
        stdlib.assert(v3046, {
          at: './contracts/sell-item.rsh:221:43:application',
          fs: [],
          msg: 'assume >= 0',
          who: 'altBuy'
          });
        ;
        return;
        }
      break;
      }
    case 'buy0_306': {
      const v2158 = v1904[1];
      return;
      break;
      }
    case 'closeSale0_306': {
      const v2409 = v1904[1];
      return;
      break;
      }
    }
  
  
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
  const ctc6 = stdlib.T_Tuple([ctc2]);
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Data({
    altBuy0_306: ctc6,
    buy0_306: ctc6,
    closeSale0_306: ctc7
    });
  const ctc9 = stdlib.T_Null;
  
  
  const [v1677, v1679, v1680, v1681, v1682, v1683, v1684, v1768, v1769, v1776, v1777, v1801, v1802] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc2, ctc2, ctc1, ctc2, ctc3, ctc2, ctc2, ctc5, ctc2, ctc2, ctc3]);
  const v1818 = stdlib.protect(ctc6, await interact.in(), {
    at: './contracts/sell-item.rsh:1:23:application',
    fs: ['at ./contracts/sell-item.rsh:154:13:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:154:13:function exp)', 'at ./contracts/sell-item.rsh:121:57:application call to "runbuy0_306" (defined at: ./contracts/sell-item.rsh:152:9:function exp)', 'at ./contracts/sell-item.rsh:121:57:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:121:57:function exp)'],
    msg: 'in',
    who: 'buy'
    });
  const v1819 = v1818[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:1:23:application', stdlib.UInt_max, '0')];
  stdlib.assert(v1802, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./contracts/sell-item.rsh:155:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/sell-item.rsh:154:13:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:154:13:function exp)', 'at ./contracts/sell-item.rsh:154:13:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:154:13:function exp)', 'at ./contracts/sell-item.rsh:121:57:application call to "runbuy0_306" (defined at: ./contracts/sell-item.rsh:152:9:function exp)', 'at ./contracts/sell-item.rsh:121:57:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:121:57:function exp)'],
    msg: 'Sale has ended!',
    who: 'buy'
    });
  const v1823 = stdlib.gt(v1819, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:156:21:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v1823, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./contracts/sell-item.rsh:156:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/sell-item.rsh:154:13:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:154:13:function exp)', 'at ./contracts/sell-item.rsh:154:13:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:154:13:function exp)', 'at ./contracts/sell-item.rsh:121:57:application call to "runbuy0_306" (defined at: ./contracts/sell-item.rsh:152:9:function exp)', 'at ./contracts/sell-item.rsh:121:57:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:121:57:function exp)'],
    msg: 'Invalid amount!',
    who: 'buy'
    });
  if (v1684) {
    const v1826 = stdlib.eq(v1819, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:158:24:decimal', stdlib.UInt_max, '1'));
    stdlib.assert(v1826, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./contracts/sell-item.rsh:158:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/sell-item.rsh:154:13:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:154:13:function exp)', 'at ./contracts/sell-item.rsh:154:13:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:154:13:function exp)', 'at ./contracts/sell-item.rsh:121:57:application call to "runbuy0_306" (defined at: ./contracts/sell-item.rsh:152:9:function exp)', 'at ./contracts/sell-item.rsh:121:57:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:121:57:function exp)'],
      msg: 'Max. 1 item per purchase (special pricing)',
      who: 'buy'
      });
    }
  else {
    }
  const v1828 = stdlib.gt(v1769, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:160:30:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v1828, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./contracts/sell-item.rsh:160:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/sell-item.rsh:154:13:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:154:13:function exp)', 'at ./contracts/sell-item.rsh:154:13:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:154:13:function exp)', 'at ./contracts/sell-item.rsh:121:57:application call to "runbuy0_306" (defined at: ./contracts/sell-item.rsh:152:9:function exp)', 'at ./contracts/sell-item.rsh:121:57:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:121:57:function exp)'],
    msg: 'Only alternate pricing for item',
    who: 'buy'
    });
  const v1832 = stdlib.le(v1819, v1801);
  stdlib.assert(v1832, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./contracts/sell-item.rsh:161:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/sell-item.rsh:154:13:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:154:13:function exp)', 'at ./contracts/sell-item.rsh:154:13:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:154:13:function exp)', 'at ./contracts/sell-item.rsh:121:57:application call to "runbuy0_306" (defined at: ./contracts/sell-item.rsh:152:9:function exp)', 'at ./contracts/sell-item.rsh:121:57:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:121:57:function exp)'],
    msg: 'Insufficient inventory',
    who: 'buy'
    });
  const v1837 = ['buy0_306', v1818];
  
  if (v1684) {
    const v1880 = stdlib.eq(v1819, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:165:24:decimal', stdlib.UInt_max, '1'));
    stdlib.assert(v1880, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./contracts/sell-item.rsh:165:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/sell-item.rsh:163:13:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:163:13:function exp)', 'at ./contracts/sell-item.rsh:121:57:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:163:13:function exp)', 'at ./contracts/sell-item.rsh:121:57:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:121:57:function exp)', 'at ./contracts/sell-item.rsh:123:14:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:123:14:function exp)'],
      msg: 'Max. 1 item per purchase (special pricing)',
      who: 'buy'
      });
    }
  else {
    }
  const v1882 = stdlib.mul(v1819, v1769);
  
  const txn1 = await (ctc.sendrecv({
    args: [v1677, v1679, v1680, v1681, v1682, v1683, v1684, v1768, v1769, v1776, v1777, v1801, v1802, v1837],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [v1882, [[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:167:38:decimal', stdlib.UInt_max, '0'), v1682]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1904], secs: v1906, time: v1905, didSend: v1078, from: v1903 } = txn1;
      
      switch (v1904[0]) {
        case 'altBuy0_306': {
          const v1907 = v1904[1];
          
          break;
          }
        case 'buy0_306': {
          const v2158 = v1904[1];
          sim_r.txns.push({
            kind: 'api',
            who: "buy"
            });
          const v2176 = v2158[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:152:9:spread', stdlib.UInt_max, '0')];
          const v2180 = stdlib.mul(v2176, v1769);
          const v2203 = stdlib.add(v1777, v2180);
          sim_r.txns.push({
            amt: v2180,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v2208 = v1776[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:121:57:dot', stdlib.UInt_max, '1')];
          const v2209 = v2208[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:121:57:dot', stdlib.UInt_max, '0')];
          const v2217 = v2208[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:121:57:dot', stdlib.UInt_max, '1')];
          const v2218 = v2208[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:121:57:dot', stdlib.UInt_max, '2')];
          const v2219 = [v2209, v2217, v2218];
          const v2220 = stdlib.Array_set(v1776, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:121:57:dot', stdlib.UInt_max, '1'), v2219);
          ;
          const v2311 = v2220[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:173:29:application', stdlib.UInt_max, '0')];
          const v2312 = v2311[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:173:29:application', stdlib.UInt_max, '0')];
          const v2320 = stdlib.sub(v2312, v2176);
          const v2326 = v2311[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:175:31:application', stdlib.UInt_max, '1')];
          const v2327 = v2311[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:175:31:application', stdlib.UInt_max, '2')];
          const v2328 = [v2320, v2326, v2327];
          const v2329 = stdlib.Array_set(v2220, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:175:31:application', stdlib.UInt_max, '0'), v2328);
          sim_r.txns.push({
            kind: 'from',
            to: v1903,
            tok: v1679
            });
          const v2334 = stdlib.sub(v2203, v2203);
          sim_r.txns.push({
            kind: 'from',
            to: v1677,
            tok: undefined /* Nothing */
            });
          const v2338 = v2329[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:177:25:application', stdlib.UInt_max, '1')];
          const v2339 = v2338[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:177:25:application', stdlib.UInt_max, '0')];
          const v2345 = stdlib.sub(v2339, v2339);
          const v2351 = v2338[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:177:49:application', stdlib.UInt_max, '1')];
          const v2352 = v2338[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:177:49:application', stdlib.UInt_max, '2')];
          const v2353 = [v2345, v2351, v2352];
          const v2354 = stdlib.Array_set(v2329, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:177:49:application', stdlib.UInt_max, '1'), v2353);
          sim_r.txns.push({
            kind: 'from',
            to: v1677,
            tok: v1682
            });
          const v2355 = null;
          const v2356 = await txn1.getOutput('buy', 'v2355', ctc9, v2355);
          
          const v2362 = v2354[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:180:55:application', stdlib.UInt_max, '0')];
          const v2363 = v2362[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:180:55:application', stdlib.UInt_max, '0')];
          null;
          let v2364;
          if (v1684) {
            const v2368 = stdlib.eq(v2363, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:110:42:decimal', stdlib.UInt_max, '0'));
            const v2371 = v2368 ? stdlib.checkedBigNumberify('./contracts/sell-item.rsh:110:46:decimal', stdlib.UInt_max, '1') : v2363;
            const v2373 = stdlib.div(v1683, v2371);
            const v2374 = stdlib.mul(v2373, v1680);
            const v2376 = stdlib.mul(v2373, v1681);
            const v2378 = [v2374, v2376];
            v2364 = v2378;
            }
          else {
            const v2379 = [v1680, v1681];
            v2364 = v2379;
            }
          const v2380 = v2364[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:121:9:array', stdlib.UInt_max, '0')];
          const v2381 = v2364[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:121:9:array', stdlib.UInt_max, '1')];
          const v3140 = v2381;
          const v3141 = v2380;
          const v3143 = v2354;
          const v3144 = v2334;
          const v3147 = stdlib.gt(v2363, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:125:42:decimal', stdlib.UInt_max, '0'));
          const v3148 = stdlib.eq(v2334, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:135:46:decimal', stdlib.UInt_max, '0'));
          const v3149 = v3147 ? v3148 : false;
          const v3150 = v2354[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:135:58:application', stdlib.UInt_max, '1')];
          const v3151 = v3150[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:135:58:application', stdlib.UInt_max, '0')];
          const v3152 = stdlib.eq(v3151, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:135:72:decimal', stdlib.UInt_max, '0'));
          const v3153 = v3149 ? v3152 : false;
          if (v3153) {
            sim_r.isHalt = false;
            }
          else {
            const v3159 = stdlib.sub(v2363, v2363);
            const v3161 = v2362[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:219:35:application', stdlib.UInt_max, '1')];
            const v3162 = v2362[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:219:35:application', stdlib.UInt_max, '2')];
            const v3163 = [v3159, v3161, v3162];
            const v3164 = stdlib.Array_set(v2354, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:219:35:application', stdlib.UInt_max, '0'), v3163);
            sim_r.txns.push({
              kind: 'from',
              to: v1677,
              tok: v1679
              });
            sim_r.txns.push({
              kind: 'from',
              to: v1677,
              tok: undefined /* Nothing */
              });
            const v3167 = v3164[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:221:19:application', stdlib.UInt_max, '1')];
            const v3168 = v3167[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:221:19:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v1677,
              tok: v1682
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v1682
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: v1679
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'closeSale0_306': {
          const v2409 = v1904[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc2, ctc1, ctc2, ctc3, ctc2, ctc2, ctc5, ctc2, ctc2, ctc3, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v1904], secs: v1906, time: v1905, didSend: v1078, from: v1903 } = txn1;
  switch (v1904[0]) {
    case 'altBuy0_306': {
      const v1907 = v1904[1];
      return;
      break;
      }
    case 'buy0_306': {
      const v2158 = v1904[1];
      undefined /* setApiDetails */;
      const v2176 = v2158[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:152:9:spread', stdlib.UInt_max, '0')];
      if (v1684) {
        const v2178 = stdlib.eq(v2176, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:165:24:decimal', stdlib.UInt_max, '1'));
        stdlib.assert(v2178, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./contracts/sell-item.rsh:165:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/sell-item.rsh:163:13:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:163:13:function exp)', 'at ./contracts/sell-item.rsh:121:57:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:163:13:function exp)', 'at ./contracts/sell-item.rsh:121:57:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:121:57:function exp)', 'at ./contracts/sell-item.rsh:123:14:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:123:14:function exp)'],
          msg: 'Max. 1 item per purchase (special pricing)',
          who: 'buy'
          });
        }
      else {
        }
      const v2180 = stdlib.mul(v2176, v1769);
      const v2203 = stdlib.add(v1777, v2180);
      const v2204 = stdlib.le(v2203, stdlib.UInt_max);
      stdlib.assert(v2204, {
        at: './contracts/sell-item.rsh:121:57:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'buy'
        });
      ;
      const v2208 = v1776[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:121:57:dot', stdlib.UInt_max, '1')];
      const v2209 = v2208[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:121:57:dot', stdlib.UInt_max, '0')];
      const v2211 = stdlib.le(v2209, stdlib.UInt_max);
      stdlib.assert(v2211, {
        at: './contracts/sell-item.rsh:121:57:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'buy'
        });
      const v2217 = v2208[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:121:57:dot', stdlib.UInt_max, '1')];
      const v2218 = v2208[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:121:57:dot', stdlib.UInt_max, '2')];
      const v2219 = [v2209, v2217, v2218];
      const v2220 = stdlib.Array_set(v1776, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:121:57:dot', stdlib.UInt_max, '1'), v2219);
      ;
      stdlib.assert(v1802, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./contracts/sell-item.rsh:170:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/sell-item.rsh:169:21:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:169:21:function exp)'],
        msg: 'Sale has ended!',
        who: 'buy'
        });
      const v2307 = stdlib.gt(v2176, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:171:21:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v2307, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./contracts/sell-item.rsh:171:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/sell-item.rsh:169:21:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:169:21:function exp)'],
        msg: 'Invalid amount!',
        who: 'buy'
        });
      const v2309 = stdlib.gt(v1769, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:172:30:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v2309, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./contracts/sell-item.rsh:172:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/sell-item.rsh:169:21:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:169:21:function exp)'],
        msg: 'Only alternate pricing for item',
        who: 'buy'
        });
      const v2311 = v2220[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:173:29:application', stdlib.UInt_max, '0')];
      const v2312 = v2311[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:173:29:application', stdlib.UInt_max, '0')];
      const v2313 = stdlib.le(v2176, v2312);
      stdlib.assert(v2313, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./contracts/sell-item.rsh:173:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/sell-item.rsh:169:21:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:169:21:function exp)'],
        msg: 'Insufficient inventory',
        who: 'buy'
        });
      const v2320 = stdlib.sub(v2312, v2176);
      const v2321 = stdlib.ge(v2320, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:175:31:application', stdlib.UInt_max, '0'));
      stdlib.assert(v2321, {
        at: './contracts/sell-item.rsh:175:31:application',
        fs: ['at ./contracts/sell-item.rsh:169:21:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:169:21:function exp)'],
        msg: 'assume >= 0',
        who: 'buy'
        });
      const v2326 = v2311[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:175:31:application', stdlib.UInt_max, '1')];
      const v2327 = v2311[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:175:31:application', stdlib.UInt_max, '2')];
      const v2328 = [v2320, v2326, v2327];
      const v2329 = stdlib.Array_set(v2220, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:175:31:application', stdlib.UInt_max, '0'), v2328);
      ;
      const v2334 = stdlib.sub(v2203, v2203);
      const v2335 = stdlib.ge(v2334, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:176:31:application', stdlib.UInt_max, '0'));
      stdlib.assert(v2335, {
        at: './contracts/sell-item.rsh:176:31:application',
        fs: ['at ./contracts/sell-item.rsh:169:21:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:169:21:function exp)'],
        msg: 'assume >= 0',
        who: 'buy'
        });
      ;
      const v2338 = v2329[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:177:25:application', stdlib.UInt_max, '1')];
      const v2339 = v2338[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:177:25:application', stdlib.UInt_max, '0')];
      const v2345 = stdlib.sub(v2339, v2339);
      const v2346 = stdlib.ge(v2345, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:177:49:application', stdlib.UInt_max, '0'));
      stdlib.assert(v2346, {
        at: './contracts/sell-item.rsh:177:49:application',
        fs: ['at ./contracts/sell-item.rsh:169:21:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:169:21:function exp)'],
        msg: 'assume >= 0',
        who: 'buy'
        });
      const v2351 = v2338[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:177:49:application', stdlib.UInt_max, '1')];
      const v2352 = v2338[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:177:49:application', stdlib.UInt_max, '2')];
      const v2353 = [v2345, v2351, v2352];
      const v2354 = stdlib.Array_set(v2329, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:177:49:application', stdlib.UInt_max, '1'), v2353);
      ;
      const v2355 = null;
      const v2356 = await txn1.getOutput('buy', 'v2355', ctc9, v2355);
      if (v1078) {
        stdlib.protect(ctc9, await interact.out(v2158, v2356), {
          at: './contracts/sell-item.rsh:153:7:application',
          fs: ['at ./contracts/sell-item.rsh:153:7:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:153:7:function exp)', 'at ./contracts/sell-item.rsh:179:15:application call to "notify" (defined at: ./contracts/sell-item.rsh:169:21:function exp)', 'at ./contracts/sell-item.rsh:169:21:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:169:21:function exp)'],
          msg: 'out',
          who: 'buy'
          });
        }
      else {
        }
      
      const v2362 = v2354[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:180:55:application', stdlib.UInt_max, '0')];
      const v2363 = v2362[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:180:55:application', stdlib.UInt_max, '0')];
      null;
      let v2364;
      if (v1684) {
        const v2368 = stdlib.eq(v2363, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:110:42:decimal', stdlib.UInt_max, '0'));
        const v2371 = v2368 ? stdlib.checkedBigNumberify('./contracts/sell-item.rsh:110:46:decimal', stdlib.UInt_max, '1') : v2363;
        const v2373 = stdlib.div(v1683, v2371);
        const v2374 = stdlib.mul(v2373, v1680);
        const v2376 = stdlib.mul(v2373, v1681);
        const v2378 = [v2374, v2376];
        v2364 = v2378;
        }
      else {
        const v2379 = [v1680, v1681];
        v2364 = v2379;
        }
      const v2380 = v2364[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:121:9:array', stdlib.UInt_max, '0')];
      const v2381 = v2364[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:121:9:array', stdlib.UInt_max, '1')];
      const v3140 = v2381;
      const v3141 = v2380;
      const v3143 = v2354;
      const v3144 = v2334;
      const v3147 = stdlib.gt(v2363, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:125:42:decimal', stdlib.UInt_max, '0'));
      const v3148 = stdlib.eq(v2334, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:135:46:decimal', stdlib.UInt_max, '0'));
      const v3149 = v3147 ? v3148 : false;
      const v3150 = v2354[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:135:58:application', stdlib.UInt_max, '1')];
      const v3151 = v3150[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:135:58:application', stdlib.UInt_max, '0')];
      const v3152 = stdlib.eq(v3151, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:135:72:decimal', stdlib.UInt_max, '0'));
      const v3153 = v3149 ? v3152 : false;
      if (v3153) {
        return;
        }
      else {
        const v3159 = stdlib.sub(v2363, v2363);
        const v3160 = stdlib.ge(v3159, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:219:35:application', stdlib.UInt_max, '0'));
        stdlib.assert(v3160, {
          at: './contracts/sell-item.rsh:219:35:application',
          fs: [],
          msg: 'assume >= 0',
          who: 'buy'
          });
        const v3161 = v2362[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:219:35:application', stdlib.UInt_max, '1')];
        const v3162 = v2362[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:219:35:application', stdlib.UInt_max, '2')];
        const v3163 = [v3159, v3161, v3162];
        const v3164 = stdlib.Array_set(v2354, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:219:35:application', stdlib.UInt_max, '0'), v3163);
        ;
        const v3165 = stdlib.sub(v2334, v2334);
        const v3166 = stdlib.ge(v3165, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:220:25:application', stdlib.UInt_max, '0'));
        stdlib.assert(v3166, {
          at: './contracts/sell-item.rsh:220:25:application',
          fs: [],
          msg: 'assume >= 0',
          who: 'buy'
          });
        ;
        const v3167 = v3164[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:221:19:application', stdlib.UInt_max, '1')];
        const v3168 = v3167[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:221:19:application', stdlib.UInt_max, '0')];
        const v3169 = stdlib.sub(v3168, v3168);
        const v3170 = stdlib.ge(v3169, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:221:43:application', stdlib.UInt_max, '0'));
        stdlib.assert(v3170, {
          at: './contracts/sell-item.rsh:221:43:application',
          fs: [],
          msg: 'assume >= 0',
          who: 'buy'
          });
        ;
        return;
        }
      break;
      }
    case 'closeSale0_306': {
      const v2409 = v1904[1];
      return;
      break;
      }
    }
  
  
  };
export async function _closeSale4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _closeSale4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _closeSale4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Tuple([ctc2]);
  const ctc8 = stdlib.T_Data({
    altBuy0_306: ctc7,
    buy0_306: ctc7,
    closeSale0_306: ctc6
    });
  const ctc9 = stdlib.T_Null;
  
  
  const [v1677, v1679, v1680, v1681, v1682, v1683, v1684, v1768, v1769, v1776, v1777, v1801, v1802] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc2, ctc2, ctc1, ctc2, ctc3, ctc2, ctc2, ctc5, ctc2, ctc2, ctc3]);
  const v1806 = ctc.selfAddress();
  const v1808 = stdlib.protect(ctc6, await interact.in(), {
    at: './contracts/sell-item.rsh:1:23:application',
    fs: ['at ./contracts/sell-item.rsh:138:10:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:138:10:function exp)', 'at ./contracts/sell-item.rsh:121:57:application call to "runcloseSale0_306" (defined at: ./contracts/sell-item.rsh:136:9:function exp)', 'at ./contracts/sell-item.rsh:121:57:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:121:57:function exp)'],
    msg: 'in',
    who: 'closeSale'
    });
  const v1810 = stdlib.addressEq(v1806, v1677);
  stdlib.assert(v1810, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./contracts/sell-item.rsh:139:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/sell-item.rsh:138:10:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:138:10:function exp)', 'at ./contracts/sell-item.rsh:138:10:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:138:10:function exp)', 'at ./contracts/sell-item.rsh:121:57:application call to "runcloseSale0_306" (defined at: ./contracts/sell-item.rsh:136:9:function exp)', 'at ./contracts/sell-item.rsh:121:57:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:121:57:function exp)'],
    msg: 'Unauthorized access',
    who: 'closeSale'
    });
  const v1814 = ['closeSale0_306', v1808];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1677, v1679, v1680, v1681, v1682, v1683, v1684, v1768, v1769, v1776, v1777, v1801, v1802, v1814],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./contracts/sell-item.rsh:141:14:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:141:18:decimal', stdlib.UInt_max, '0'), v1682]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1904], secs: v1906, time: v1905, didSend: v1078, from: v1903 } = txn1;
      
      switch (v1904[0]) {
        case 'altBuy0_306': {
          const v1907 = v1904[1];
          
          break;
          }
        case 'buy0_306': {
          const v2158 = v1904[1];
          
          break;
          }
        case 'closeSale0_306': {
          const v2409 = v1904[1];
          sim_r.txns.push({
            kind: 'api',
            who: "closeSale"
            });
          ;
          const v2459 = v1776[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:121:57:dot', stdlib.UInt_max, '1')];
          const v2460 = v2459[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:121:57:dot', stdlib.UInt_max, '0')];
          const v2468 = v2459[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:121:57:dot', stdlib.UInt_max, '1')];
          const v2469 = v2459[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:121:57:dot', stdlib.UInt_max, '2')];
          const v2470 = [v2460, v2468, v2469];
          const v2471 = stdlib.Array_set(v1776, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:121:57:dot', stdlib.UInt_max, '1'), v2470);
          ;
          const v2636 = v2471[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:144:25:application', stdlib.UInt_max, '0')];
          const v2637 = v2636[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:144:25:application', stdlib.UInt_max, '0')];
          const v2643 = stdlib.sub(v2637, v2637);
          const v2649 = v2636[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:144:41:application', stdlib.UInt_max, '1')];
          const v2650 = v2636[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:144:41:application', stdlib.UInt_max, '2')];
          const v2651 = [v2643, v2649, v2650];
          const v2652 = stdlib.Array_set(v2471, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:144:41:application', stdlib.UInt_max, '0'), v2651);
          sim_r.txns.push({
            kind: 'from',
            to: v1903,
            tok: v1679
            });
          const v2653 = null;
          const v2654 = await txn1.getOutput('closeSale', 'v2653', ctc9, v2653);
          
          null;
          const v3264 = stdlib.checkedBigNumberify('./contracts/sell-item.rsh:149:20:decimal', stdlib.UInt_max, '0');
          const v3265 = stdlib.checkedBigNumberify('./contracts/sell-item.rsh:149:17:decimal', stdlib.UInt_max, '0');
          const v3267 = v2652;
          const v3268 = v1777;
          const v3269 = v2652[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:125:33:application', stdlib.UInt_max, '0')];
          const v3270 = v3269[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:125:33:application', stdlib.UInt_max, '0')];
          const v3271 = stdlib.gt(v3270, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:125:42:decimal', stdlib.UInt_max, '0'));
          const v3272 = stdlib.eq(v1777, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:135:46:decimal', stdlib.UInt_max, '0'));
          const v3273 = v3271 ? v3272 : false;
          const v3274 = v2652[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:135:58:application', stdlib.UInt_max, '1')];
          const v3275 = v3274[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:135:58:application', stdlib.UInt_max, '0')];
          const v3276 = stdlib.eq(v3275, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:135:72:decimal', stdlib.UInt_max, '0'));
          const v3277 = v3273 ? v3276 : false;
          if (v3277) {
            sim_r.isHalt = false;
            }
          else {
            const v3283 = stdlib.sub(v3270, v3270);
            const v3285 = v3269[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:219:35:application', stdlib.UInt_max, '1')];
            const v3286 = v3269[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:219:35:application', stdlib.UInt_max, '2')];
            const v3287 = [v3283, v3285, v3286];
            const v3288 = stdlib.Array_set(v2652, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:219:35:application', stdlib.UInt_max, '0'), v3287);
            sim_r.txns.push({
              kind: 'from',
              to: v1677,
              tok: v1679
              });
            sim_r.txns.push({
              kind: 'from',
              to: v1677,
              tok: undefined /* Nothing */
              });
            const v3291 = v3288[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:221:19:application', stdlib.UInt_max, '1')];
            const v3292 = v3291[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:221:19:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v1677,
              tok: v1682
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v1682
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: v1679
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
    tys: [ctc0, ctc1, ctc2, ctc2, ctc1, ctc2, ctc3, ctc2, ctc2, ctc5, ctc2, ctc2, ctc3, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v1904], secs: v1906, time: v1905, didSend: v1078, from: v1903 } = txn1;
  switch (v1904[0]) {
    case 'altBuy0_306': {
      const v1907 = v1904[1];
      return;
      break;
      }
    case 'buy0_306': {
      const v2158 = v1904[1];
      return;
      break;
      }
    case 'closeSale0_306': {
      const v2409 = v1904[1];
      undefined /* setApiDetails */;
      const v2455 = stdlib.le(v1777, stdlib.UInt_max);
      stdlib.assert(v2455, {
        at: './contracts/sell-item.rsh:121:57:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'closeSale'
        });
      ;
      const v2459 = v1776[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:121:57:dot', stdlib.UInt_max, '1')];
      const v2460 = v2459[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:121:57:dot', stdlib.UInt_max, '0')];
      const v2462 = stdlib.le(v2460, stdlib.UInt_max);
      stdlib.assert(v2462, {
        at: './contracts/sell-item.rsh:121:57:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'closeSale'
        });
      const v2468 = v2459[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:121:57:dot', stdlib.UInt_max, '1')];
      const v2469 = v2459[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:121:57:dot', stdlib.UInt_max, '2')];
      const v2470 = [v2460, v2468, v2469];
      const v2471 = stdlib.Array_set(v1776, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:121:57:dot', stdlib.UInt_max, '1'), v2470);
      ;
      const v2634 = stdlib.addressEq(v1903, v1677);
      stdlib.assert(v2634, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./contracts/sell-item.rsh:143:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./contracts/sell-item.rsh:142:16:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:142:16:function exp)'],
        msg: 'Unauthorized access',
        who: 'closeSale'
        });
      const v2636 = v2471[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:144:25:application', stdlib.UInt_max, '0')];
      const v2637 = v2636[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:144:25:application', stdlib.UInt_max, '0')];
      const v2643 = stdlib.sub(v2637, v2637);
      const v2644 = stdlib.ge(v2643, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:144:41:application', stdlib.UInt_max, '0'));
      stdlib.assert(v2644, {
        at: './contracts/sell-item.rsh:144:41:application',
        fs: ['at ./contracts/sell-item.rsh:142:16:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:142:16:function exp)'],
        msg: 'assume >= 0',
        who: 'closeSale'
        });
      const v2649 = v2636[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:144:41:application', stdlib.UInt_max, '1')];
      const v2650 = v2636[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:144:41:application', stdlib.UInt_max, '2')];
      const v2651 = [v2643, v2649, v2650];
      const v2652 = stdlib.Array_set(v2471, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:144:41:application', stdlib.UInt_max, '0'), v2651);
      ;
      const v2653 = null;
      const v2654 = await txn1.getOutput('closeSale', 'v2653', ctc9, v2653);
      if (v1078) {
        stdlib.protect(ctc9, await interact.out(v2409, v2654), {
          at: './contracts/sell-item.rsh:137:7:application',
          fs: ['at ./contracts/sell-item.rsh:137:7:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:137:7:function exp)', 'at ./contracts/sell-item.rsh:146:15:application call to "notify" (defined at: ./contracts/sell-item.rsh:142:16:function exp)', 'at ./contracts/sell-item.rsh:142:16:application call to [unknown function] (defined at: ./contracts/sell-item.rsh:142:16:function exp)'],
          msg: 'out',
          who: 'closeSale'
          });
        }
      else {
        }
      
      null;
      const v3264 = stdlib.checkedBigNumberify('./contracts/sell-item.rsh:149:20:decimal', stdlib.UInt_max, '0');
      const v3265 = stdlib.checkedBigNumberify('./contracts/sell-item.rsh:149:17:decimal', stdlib.UInt_max, '0');
      const v3267 = v2652;
      const v3268 = v1777;
      const v3269 = v2652[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:125:33:application', stdlib.UInt_max, '0')];
      const v3270 = v3269[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:125:33:application', stdlib.UInt_max, '0')];
      const v3271 = stdlib.gt(v3270, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:125:42:decimal', stdlib.UInt_max, '0'));
      const v3272 = stdlib.eq(v1777, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:135:46:decimal', stdlib.UInt_max, '0'));
      const v3273 = v3271 ? v3272 : false;
      const v3274 = v2652[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:135:58:application', stdlib.UInt_max, '1')];
      const v3275 = v3274[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:135:58:application', stdlib.UInt_max, '0')];
      const v3276 = stdlib.eq(v3275, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:135:72:decimal', stdlib.UInt_max, '0'));
      const v3277 = v3273 ? v3276 : false;
      if (v3277) {
        return;
        }
      else {
        const v3283 = stdlib.sub(v3270, v3270);
        const v3284 = stdlib.ge(v3283, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:219:35:application', stdlib.UInt_max, '0'));
        stdlib.assert(v3284, {
          at: './contracts/sell-item.rsh:219:35:application',
          fs: [],
          msg: 'assume >= 0',
          who: 'closeSale'
          });
        const v3285 = v3269[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:219:35:application', stdlib.UInt_max, '1')];
        const v3286 = v3269[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:219:35:application', stdlib.UInt_max, '2')];
        const v3287 = [v3283, v3285, v3286];
        const v3288 = stdlib.Array_set(v2652, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:219:35:application', stdlib.UInt_max, '0'), v3287);
        ;
        const v3289 = stdlib.sub(v1777, v1777);
        const v3290 = stdlib.ge(v3289, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:220:25:application', stdlib.UInt_max, '0'));
        stdlib.assert(v3290, {
          at: './contracts/sell-item.rsh:220:25:application',
          fs: [],
          msg: 'assume >= 0',
          who: 'closeSale'
          });
        ;
        const v3291 = v3288[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:221:19:application', stdlib.UInt_max, '1')];
        const v3292 = v3291[stdlib.checkedBigNumberify('./contracts/sell-item.rsh:221:19:application', stdlib.UInt_max, '0')];
        const v3293 = stdlib.sub(v3292, v3292);
        const v3294 = stdlib.ge(v3293, stdlib.checkedBigNumberify('./contracts/sell-item.rsh:221:43:application', stdlib.UInt_max, '0'));
        stdlib.assert(v3294, {
          at: './contracts/sell-item.rsh:221:43:application',
          fs: [],
          msg: 'assume >= 0',
          who: 'closeSale'
          });
        ;
        return;
        }
      break;
      }
    }
  
  
  };
export async function altBuy(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for altBuy expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for altBuy expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _altBuy4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
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
export async function closeSale(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for closeSale expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for closeSale expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _closeSale4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`altBuy(uint64)byte[0]`, `buy(uint64)byte[0]`, `closeSale()byte[0]`],
    pure: [`info()(uint64,uint64,address,byte)`, `pricing()(uint64,uint64,uint64)`],
    sigs: [`altBuy(uint64)byte[0]`, `buy(uint64)byte[0]`, `closeSale()byte[0]`, `info()(uint64,uint64,address,byte)`, `pricing()(uint64,uint64,uint64)`]
    },
  appApproval: `BiARAAEE////////////AQgDICigjQabo7LLBpDS+KkK1Y6erg3hhdnfBTA4QAImBAEAAAEBBEPSBzIiNQAxGEEJGClkSSJbNQEhBFs1AjYaABdJQQDSIjUEIzUGSSEJDEAAV0khCgxAADxJIQsMQAAQIQsSRDYaATX/KjT/UEIAxSEKEkQ0ASQSRChkKmRQSTUDV1EINANXSQhQNANXgwhQNQdCCKwhCRJEKTX/gAECNP9QIQSvUEIAjEkhDAxAAFMhDBJENAFJJAxAACUkEkQoZCpkUEk1A1cgCDQDVzgIUDQDVwAgUDQDV0gBUDUHQghgIxJEKGRJNQNXKAg0A1dACFA0A1cAIFA0A1dQAVA1B0IIPoGpqPbpAxJENhoBNf8oNP9QQgAeNhoCFzUENhoDNhoBF0kjDEAFXkkhBQxABCUhBRJEJDQBEkQ0BEkiEkw0AhIRRChkKmRQSTUDSUpKSkpKVwAgNf8hBls1/iEHWzX9IQ1bNfwhDls1+yEPWzX6V0gBFzX5gUlbNfiBUVs191dZIjX2gXtbNfVXiwEXNfRJNQU184AEkfGnmjTzULA08yJVSSMMQAIjSSEQDEAApCEQEkQ09SUORDT2VxERSTXyIltJNfElDkQ09lcAETTxFjTyVwgIUDTyVxABUFA18DEANP8SRDTwVwARSTXvIltJNe5JCUk17SIPRLEisgE07rISJLIQMQCyFDT+shGzgAgAAAAAAAAKXbApNQeABL0AECo0/hZQsDT/NP40/TT8NPs0+jT5IiIyBjTtFjTvVwgIUDTvVxABUDTwVxERUDT1QgV8SDTzVwEINfI08hc18TT5QQAINPEjEkRCAAA08TT3CzXwNPU08AhJNe8lDkQ08IgG4TT2VxERSTXuIltJNe0lDkQ09lcAETTtFjTuVwgIUDTuVxABUFA17DT0RDTxIg1ENPciDUQ07FcAEUk16yJbNeo08TTqDkQ06jTxCUk16SIPRDTpFjTrVwgIUDTrVxABUDTsVxERUDXosSKyATTxshIkshAxALIUNP6yEbM070kJSTXnIg9EsSKyATTvsggjshA0/7IHszToVxERSTXmIltJNeVJCUk15CIPRDToVwARNOQWNOZXCAhQNOZXEAFQUDXjsSKyATTlshIkshA0/7IUNPuyEbOACAAAAAAAAAkzsCk1BzTjVwARIls14is0/hZQNPEWUDTiFlCwNPlBAB40+jTiIzTiIhJNCkk14DT9CxY04DT8CxZQNeFCAAk0/RY0/BZQNeE0/zT+NP00/DT7NPo0+TThIQRbNOEiWzIGNOM050IEBEg081cBCDXyNPIXNfE0+UEACDTxIxJEQgAANPE0+As18DT1JQ5ENPZXERFJNe8iWzTwCEk17iUORDT2VwARNO4WNO9XCAhQNO9XEAFQUDXtNPA0+4gFWzT0RDT4Ig1ENPEiDTTxJQwQRDT5QQAINPEjEkRCAAA07VcAEUk17CJbNes08TTrDkQ06zTxCUk16iIPRDTqFjTsVwgIUDTsVxABUDTtVxERUDXpsSKyATTxshIkshAxALIUNP6yEbM09UkJSTXoIg9EsSKyATT1sggjshA0/7IHszTpVxERSTXnIltJNeZJCUk15SIPRDTpVwARNOUWNOdXCAhQNOdXEAFQUDXksSKyATTmshIkshA0/7IUNPuyEbOACAAAAAAAAAfqsCk1BzTkVwARIls14ys0/hZQNPEWUDTjFlCwNPlBAB40+jTjIzTjIhJNCkk14TT9CxY04TT8CxZQNeJCAAk0/RY0/BZQNeI0/zT+NP00/DT7NPo0+TTiIQRbNOIiWzIGNOQ06EICeyMSRCM0ARJENARJIhJMNAISEUQoZEk1A0lKSkpXACA1/yEHWzX+IQ1bNf0hDls1/CEPWzX7gUhbNfpXUAEXNflXUSI1+IAEmouRdLA0+FcAEUk19yJbNPoISTX2JQ5ENPo0/ogDwzT/MQASRDEYNfWABWFwcElENANXIAhQAzXzMgp4NfIyCmA08gkWNfGxIrIBgQayEDQDIQZbshiABEvRvVSyGjT1FrIaNP4Wsho0+hayGjT5FlEHCLIaszIKYDTyCTTxFwkWtwA+VwQAUDX0gAgAAAAAAAAG2TT0ULA09Ek18yJbSTXyJQ5EIjTyEkSABAvS0oo09RZQNP4WUDT6FlCwNP80/jT9NPw0+zT6NPk0/DT9MgY09hY091cICFA091cQAVA0+FcREVA08kIBSUghCIgC2SI0ARJENARJIhJMNAISEURJNQVJSkpJIls1/yEEWzX+gRBbNf2BGFs1/CEGWzX7IQdbNfpXMAEXNfmABGTtY0g0/xZQNP4WUDT9FlA0/BZQNPsWUDT6FlA0+RZRBwhQsIERr0k1+ElQNfc0/jT7E0Q091cAETX2IQSvNPZXCAhQNPZXEAFQNPdXERFQNfUhCIgCRrEisgEishIkshAyCrIUNP6yEbM09VcRETX0NPVXABEhBK809FcICFA09FcQAVBQNfMhCIgCELEisgEishIkshAyCrIUNPuyEbM0/SISNPwiEhAURDT6Ig00+iUMEEQ0+jT9C0k18iU08gkORDT6NPwLSTXxJTTxCQ5EMQA0/xZQNP4WUDT9FlA0/BZQNPsWUDT6FlA0+RZRBwhQNPNQKEsBVwBzZ0gjNQEyBjUCQgFENf81/jX9Nfw1+zX6Nfk1+DX3NfY19TX0NP5XABFJNfMiW0k18iINSTXxNP8iEhA0/lcRESJbIhIQQQBQNPQ09RZQNPYWUDT3FlA0+BZQNPkWUDT6FlEHCFA0+xZQNPwWUDT+UDT/FlA08hZQNPEWUQcIUChLAVcAf2cqSwFXfw1nSCQ1ATIGNQJCALg08kkJSTXwIg9EsSKyATTyshIkshA09LIUNPWyEbM0/0kJIg9EsSKyATT/sggjshA09LIHszTwFjTzVwgIUDTzVxABUDT+VxERUFcRESJbSTXvSQkiD0SxIrIBNO+yEiSyEDT0shQ0+LIRs7EisgEishIkshAyCbIVMgqyFDT4shGzsSKyASKyEiSyEDIJshUyCrIUNPWyEbNCAAAxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEIQUxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rjQASUojCDUAOAcyChJEOBAjEkQ4CBJEiTQASUpJIwg1ADgUMgoSRDgQJBJEOBFPAhJEOBISRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 1,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 140,
  unsupported: [],
  version: 10,
  warnings: [`Step 1 calls a remote object at /app/contracts/sell-item.rsh:103:29:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`]
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
                "name": "v1678",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v1679",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v1680",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1681",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v1682",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v1683",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "v1684",
                "type": "bool"
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
                "name": "v1678",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v1679",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v1680",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1681",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v1682",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v1683",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "v1684",
                "type": "bool"
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
        "internalType": "struct T13",
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
                    "internalType": "enum _enum_T16",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T14",
                    "name": "_altBuy0_306",
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
                    "internalType": "struct T14",
                    "name": "_buy0_306",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_closeSale0_306",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T16",
                "name": "v1904",
                "type": "tuple"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T19",
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
        "internalType": "struct T8",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v1753",
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
    "name": "_reach_oe_v2026",
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
    "name": "_reach_oe_v2355",
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
    "name": "_reach_oe_v2653",
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
        "internalType": "uint256",
        "name": "v1",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v2",
        "type": "uint256"
      }
    ],
    "name": "itemPurchased",
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
    "name": "listingClosed",
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
      }
    ],
    "name": "listingCreated",
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
        "internalType": "struct T13",
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
                    "internalType": "enum _enum_T16",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T14",
                    "name": "_altBuy0_306",
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
                    "internalType": "struct T14",
                    "name": "_buy0_306",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_closeSale0_306",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T16",
                "name": "v1904",
                "type": "tuple"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T19",
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
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "altBuy",
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
    "name": "closeSale",
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
            "name": "item",
            "type": "address"
          },
          {
            "internalType": "address payable",
            "name": "altToken",
            "type": "address"
          },
          {
            "internalType": "address payable",
            "name": "seller",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "useBondingCurve",
            "type": "bool"
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
    "name": "pricing",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "price",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "altPrice",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "qty",
            "type": "uint256"
          }
        ],
        "internalType": "struct T5",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162003736380380620037368339810160408190526200002691620006bb565b60008055436003556200003862000421565b7f01bb0063caea3737e506049bf1b173146598e84218a82f9d4e0714bdde9d37943383604051620000db92919060006101208201905060018060a01b03808516835283516020840152602084015181815116604085015281602082015116606085015260408101516080850152606081015160a08501528160808201511660c085015260a081015160e085015260c0810151151561010085015250509392505050565b60405180910390a180516000908190528151602090810182905282516040019190915281518183018051919091528251905182015282810151608081015191015162000147916001600160a01b039182169116146200013c5760016200013f565b60005b600962000374565b6040818101805160009081905260208085018051518201518451909201919091528051518401518351901515940193909352915190516200018992906200039e565b60608201908152608082018051600090528151602090810151810151825182015282510151604090810151825190151591015290519051620001cf91906001906200039e565b60a0820152620001e23415600a62000374565b62000222600083602001516040015114620001ff5760006200020a565b602083015160600151155b620002175760016200021a565b60005b600b62000374565b620002556000836020015160a00151116200023f5760006200024d565b600019836020015160a00151105b600c62000374565b602082015160a08101516040909101510260c082018190526200027e9080191015600d62000374565b602082015160a08101516060909101510260e08201819052620002a79080191015600e62000374565b620002b1620004ca565b33815260208084018051516001600160a01b0390811683850152815183015181166040808601919091528251810151606080870191909152835101516080808701919091528351015190911660a080860191909152825181015160c080870191909152925190920151151560e08501529084015161010084015260016000819055439055516200034491839101620007d5565b604051602081830303815290604052600290805190602001906200036a92919062000543565b50505050620008d7565b816200039a5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b620003a8620005d2565b60005b6002811015620003fe57848160028110620003ca57620003ca62000779565b6020020151828260028110620003e457620003e462000779565b602002015280620003f58162000870565b915050620003ab565b508181846002811062000415576200041562000779565b60200201529392505050565b60408051610160810190915260006101008201818152610120830182905261014083019190915281526020810162000458620005d2565b8152604080516060810182526000808252602082810182905292820152910190815260200162000487620005d2565b81526040805160608101825260008082526020828101829052928201529101908152602001620004b6620005d2565b815260200160008152602001600081525090565b60405180610120016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081526020016000151581526020016200053e620005d2565b905290565b82805462000551906200089a565b90600052602060002090601f016020900481019282620005755760008555620005c0565b82601f106200059057805160ff1916838001178555620005c0565b82800160010185558215620005c0579182015b82811115620005c0578251825591602001919060010190620005a3565b50620005ce9291506200061f565b5090565b60405180604001604052806002905b62000608604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620005e15790505090565b5b80821115620005ce576000815560010162000620565b604080519081016001600160401b03811182821017156200066757634e487b7160e01b600052604160045260246000fd5b60405290565b60405160e081016001600160401b03811182821017156200066757634e487b7160e01b600052604160045260246000fd5b80516001600160a01b0381168114620006b657600080fd5b919050565b6000818303610100811215620006d057600080fd5b620006da62000636565b8351815260e0601f1983011215620006f157600080fd5b620006fb6200066d565b91506200070b602085016200069e565b82526200071b604085016200069e565b602083015260608401516040830152608084015160608301526200074260a085016200069e565b608083015260c084015160a083015260e084015180151581146200076557600080fd5b60c083015260208101919091529392505050565b634e487b7160e01b600052603260045260246000fd5b8060005b6002811015620007cf57815180518552602080820151818701526040918201511515918601919091526060909401939091019060010162000793565b50505050565b81516001600160a01b039081168252602080840151821690830152604080840151918216908301526101c082019050606083015160608301526080830151608083015260a08301516200083360a08401826001600160a01b03169052565b5060c083015160c083015260e08301516200085260e084018215159052565b506101008084015162000868828501826200078f565b505092915050565b60006000198214156200089357634e487b7160e01b600052601160045260246000fd5b5060010190565b600181811c90821680620008af57607f821691505b60208210811415620008d157634e487b7160e01b600052602260045260246000fd5b50919050565b612e4f80620008e76000396000f3fe60806040526004361061008f5760003560e01c80638bd115ed116100565780638bd115ed1461017257806390e4a0df14610195578063ab53f2c6146101a8578063d96a094a146101cb578063ee55efee146101de57005b80631e93b0f1146100985780632c10a159146100bc578063370158ea146100cf5780637ce9141114610126578063832307571461015d57005b3661009657005b005b3480156100a457600080fd5b506003545b6040519081526020015b60405180910390f35b6100966100ca36600461268e565b6101e6565b3480156100db57600080fd5b506100e461021f565b6040805182516001600160a01b0390811682526020808501518216908301528383015116918101919091526060918201511515918101919091526080016100b3565b34801561013257600080fd5b5061013b610494565b60408051825181526020808401519082015291810151908201526060016100b3565b34801561016957600080fd5b506001546100a9565b6101856101803660046126a6565b61067a565b60405190151581526020016100b3565b6100966101a33660046126bf565b6106c3565b3480156101b457600080fd5b506101bd6106f8565b6040516100b39291906126fd565b6101856101d93660046126a6565b610795565b6101856107e5565b604080516060810182526000808252602082018190529181019190915261021b61021536849003840184612835565b8261082a565b5050565b60408051608081018252600080825260208201819052918101829052606081018290529054600114156103615760006002805461025b9061286d565b80601f01602080910402602001604051908101604052809291908181526020018280546102879061286d565b80156102d45780601f106102a9576101008083540402835291602001916102d4565b820191906000526020600020905b8154815290600101906020018083116102b757829003601f168201915b50505050508060200190518101906102ec9190612952565b905061031c6040805160a08101825260006020820181815292820181905260608201819052608082015290815290565b60408083015182516001600160a01b03918216905260a0840151835190821660209091015283518351911691015260e090910151815190151560609091015251919050565b600460005414156104855760006002805461037b9061286d565b80601f01602080910402602001604051908101604052809291908181526020018280546103a79061286d565b80156103f45780601f106103c9576101008083540402835291602001916103f4565b820191906000526020600020905b8154815290600101906020018083116103d757829003601f168201915b505050505080602001905181019061040c91906129f4565b905061043c6040805160a08101825260006020820181815292820181905260608201819052608082015290815290565b60208083015182516001600160a01b0391821690526080840151835190821692019190915282518251911660409091015260c09091015181519015156060919091015251919050565b61049160006007610cea565b90565b6104b860405180606001604052806000815260200160008152602001600081525090565b60016000541415610573576000600280546104d29061286d565b80601f01602080910402602001604051908101604052809291908181526020018280546104fe9061286d565b801561054b5780601f106105205761010080835404028352916020019161054b565b820191906000526020600020905b81548152906001019060200180831161052e57829003601f168201915b50505050508060200190518101906105639190612952565b905061057160006008610cea565b505b6004600054141561066e5760006002805461058d9061286d565b80601f01602080910402602001604051908101604052809291908181526020018280546105b99061286d565b80156106065780601f106105db57610100808354040283529160200191610606565b820191906000526020600020905b8154815290600101906020018083116105e957829003601f168201915b505050505080602001905181019061061e91906129f4565b905061064760408051608081018252600060208201818152928201819052606082015290815290565b61010082015181515260e08201518151602001526101609091015181516040015251919050565b61049160006008610cea565b6000610684611fe6565b6020818101805151600090819052905151820151859052604080516060810182528281529283018290528201526106bb8282610d10565b519392505050565b604080516060810182526000808252602082018190529181019190915261021b6106f236849003840184612b1e565b82610d10565b60006060600054600280805461070d9061286d565b80601f01602080910402602001604051908101604052809291908181526020018280546107399061286d565b80156107865780601f1061075b57610100808354040283529160200191610786565b820191906000526020600020905b81548152906001019060200180831161076957829003601f168201915b50505050509050915091509091565b600061079f611fe6565b602081810180515160019052515160409081015185905280516060810182526000808252928101839052908101919091526107da8282610d10565b602001519392505050565b60006107ef611fe6565b6020818101515160029052604080516060810182526000808252928101839052908101919091526108208282610d10565b6040015192915050565b61083a6001600054146018610cea565b815161085590158061084e57508251600154145b6019610cea565b6000808055600280546108679061286d565b80601f01602080910402602001604051908101604052809291908181526020018280546108939061286d565b80156108e05780601f106108b5576101008083540402835291602001916108e0565b820191906000526020600020905b8154815290600101906020018083116108c357829003601f168201915b50505050508060200190518101906108f89190612952565b9050610902612000565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f13385604051610933929190612bbd565b60405180910390a16109473415600f610cea565b610100820151515160c083015101815261096360016010610cea565b805160208083018051929092526101008401805151820151835190920191909152515160409081015191519115159181019190915282015160c08301516109b7916109b0913391906119f2565b6011610cea565b81516109cf906001600160a01b031633146012610cea565b3060408083018290528301516109e9916104919190611a0a565b60c082015260a0820151610a01906104919030611a0a565b6101008201524760a08201526040808201518382015160c085015160e086015184516001600160a01b0394851660248201529284166044840152606483019190915215156084808301919091528351808303909101815260a49091018352602080820180516001600160e01b031663dbd0bf1f60e01b1790528501519251909260009283929116908290610a96908690612bfc565b60006040518083038185875af1925050503d8060008114610ad3576040519150601f19603f3d011682016040523d82523d6000602084013e610ad8565b606091505b5091509150610ae982826015611ad6565b50610b05610afb866040015130611a0a565b8560c00151900390565b60e08501819052610b1890156013610cea565b610b34610b298660a0015130611a0a565b856101000151900390565b6101208501819052610b4890156014610cea565b50505060a08101516060820180514792909203909152516080820181905260408051825181526020928301511515928101929092527fdc91fa285dd714875857e9581daaa7fb041210eb8d61af4237eda5ddd29e1906910160405180910390a1610bb460016016610cea565b608081015151610bc690156017610cea565b6040818101518382015160c085015183516001600160a01b0393841681529290911660208301528183015290517f6f72a1ed58990ab977ffd46c588396b34b3ccdb5858ade15a184251f847d1f5c9181900360600190a1610c256120ba565b825181516001600160a01b03918216905260408085015183519083166020918201526060808701805186518501526080808901805188519094019390935260a0808a015188519716969091019590955260c08089015187519096019590955260e08801518651901515950194909452518185018051919091529251835182015291514391015261010084015190830151610cc29190600090611b11565b602082018051606001919091526080808401515191510152610ce381611b85565b5050505050565b8161021b5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b610d20600460005414603c610cea565b8151610d3b901580610d3457508251600154145b603d610cea565b600080805560028054610d4d9061286d565b80601f0160208091040260200160405190810160405280929190818152602001828054610d799061286d565b8015610dc65780601f10610d9b57610100808354040283529160200191610dc6565b820191906000526020600020905b815481529060010190602001808311610da957829003601f168201915b5050505050806020019051810190610dde91906129f4565b9050610de8612108565b7f4ddde2a55b7fee5ba7bf66b8a3e88bdfa9e0d9317f38776944687a22b9e2bc4d3385604051610e19929190612c18565b60405180910390a16000602085015151516002811115610e3b57610e3b612ac6565b14156112d257602080850151510151815260c082015115610e6757805151610e6790600114601d610cea565b80515160e0830151026020820152610e816001601e610cea565b610e8d3415601f610cea565b6101208201516020908101515190820151016040820152610eb060016020610cea565b6040818101516060830180519190915261012084018051602090810151810151835182015281510151830151825190151593019290925290519051610ef89190600190611b11565b8160800181905250610f1d610f1633846080015184602001516119f2565b6021610cea565b610f2d8261018001516022610cea565b610f3f60008360e00151116023610cea565b805151610f6090610f51576000610f59565b815151600019115b6024610cea565b8160c0015115610f7b57805151610f7b906001146025610cea565b60808101515151815151610f929110156026610cea565b60808101515151815151900360a0820152610faf60016027610cea565b60a081015160c08201805191909152608082018051516020908101518351909101528051516040908101518351901515910152519051610ff29190600090611b11565b60e0820152602082015181515161100b91903390611e1d565b600061010082015261101f60016028610cea565b81516101408301516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561105d573d6000803e3d6000fd5b5060e081015160208101515161107b9160015b602002015151900390565b61012082015261108d60016029610cea565b610120810151610140820180519190915260e08201805160209081015181015183518201528151015160409081015183519015159101525190516110d49190600190611b11565b6101608201526080820151825160e08301516110fa92919060015b602002015151611e1d565b604051600081527f2805a56424379c07be98aa133fea638653ac6bf9f03cf5605be98319eebd64ed9060200160405180910390a1600083526020828101518251516101608401515151604080516001600160a01b039094168452938301919091528183015290517ffd80f748202072fbf019cde492b4320cc89d62fffe36601374a986d5db4636529181900360600190a18160c00151156111f7576101608101515151156111af5761016081015151516111b2565b60015b8260a001516111c19190612c8a565b6101a0820181815260408401516101c084018051919093029052516060840151825191026020909101525161018082015261121a565b60408201516101e082018051919091526060830151815160200152516101808201525b6112226120ba565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184518201526060808701518551820152608080880151865195169481019490945260a08088015186519091015260c0808801518651901515910152610180860180518401518487018051919091529051518151909401939093528251439201919091526101608501518251909101526101008401519051909101526112cc81611b85565b506119ec565b60016020850151515160028111156112ec576112ec612ac6565b1415611775576020840151516040015161020082015260c082015115611321576102008101515161132190600114602a610cea565b61020081015151610100830151026102208201819052610140830151016102408201526113506001602b610cea565b6113628161022001513414602c610cea565b61136e6001602d610cea565b61012082018051602090810151516102608401805191909152825182015182015181518301528251909101516040908101518251901515910152905190516113b99190600190611b11565b8161028001819052506113dc6113d533846080015160006119f2565b602e610cea565b6113ec826101800151602f610cea565b610200810151516114009015156030610cea565b6114136000836101000151116031610cea565b61028081015151516102008201515161142f9110156032610cea565b61028081015151516102008201515190036102a082015261145260016033610cea565b6102a08101516102c08201805191909152610280820180515160209081015183519091015280515160409081015183519015159101525190516114989190600090611b11565b6102e08201526020820151610200820151516114b691903390611e1d565b60006103008201526114ca60016034610cea565b81516102408201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015611508573d6000803e3d6000fd5b506102e0810151602081015151611520916001611070565b61032082015261153260016035610cea565b61032081015161034082018051919091526102e082018051602090810151810151835182015281510151604090810151835190151591015251905161157a9190600190611b11565b610360820152608082015182516102e083015161159a92919060016110ef565b604051600081527fcfd78bda05c8d6501f691aa91bd51f3ebc875c06216fed73d6e7ffc356ce728c9060200160405180910390a1600060208481019190915282810151610200830151516103608401515151604080516001600160a01b039094168452938301919091528183015290517ffd80f748202072fbf019cde492b4320cc89d62fffe36601374a986d5db4636529181900360600190a18160c00151156116a05761036081015151511561165857610360810151515161165b565b60015b8260a0015161166a9190612c8a565b6103a0820181815260408401516103c08401805191909302905251606084015182519102602090910152516103808201526116c3565b60408201516103e082018051919091526060830151815160200152516103808201525b6116cb6120ba565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184518201526060808701518551820152608080880151865195169481019490945260a08088015186519091015260c0808801518651901515910152610380860180518401518487018051919091529051518151909401939093528251439201919091526103608501518251909101526103008401519051909101526112cc81611b85565b600260208501515151600281111561178f5761178f612ac6565b14156119ec576117a160016036610cea565b6117ad34156037610cea565b6117b960016038610cea565b61012082018051602090810151516104008401805191909152825182015182015181518301528251909101516040908101518251901515910152905190516118049190600190611b11565b81610420018190525061182761182033846080015160006119f2565b6039610cea565b815161183f906001600160a01b03163314603a610cea565b610420810151805151611853916000611070565b6104408201526118656001603b610cea565b61044081015161046082018051919091526104208201805151602090810151835182015281515160409081015193519315159301929092529083015190516118b19190339060006110ef565b604051600081527fcfde8cf79ffbd35a2ecefb907d972096b96abc473a6b9a22aa1eed4cb6a802149060200160405180910390a1600060408481019190915260208381015191516001600160a01b0390921682527f3b5d9a0f7661722652636f35c2348f173d2471cbd622ab13147fd8d9d315a528910160405180910390a16119386120ba565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184518201526060808701518551909101526080808701518551941693019290925260a08086015184519091015260c08086015184519015159101528083018051600090819052815190920182905251439201919091526104208301516104608401516119ca9290611b11565b602082018051606001919091526101408401519051608001526112cc81611b85565b50505050565b6000611a0083853085611e36565b90505b9392505050565b604080516001600160a01b0383811660248084019190915283518084039091018152604490920183526020820180516001600160e01b03166370a0823160e01b179052915160009283928392918716918391611a6591612bfc565b60006040518083038185875af1925050503d8060008114611aa2576040519150601f19603f3d011682016040523d82523d6000602084013e611aa7565b606091505b5091509150611ab882826006611ad6565b5080806020019051810190611acd9190612cac565b95945050505050565b60608315611ae5575081611a03565b825115611af55782518084602001fd5b60405163100960cb60e01b815260048101839052602401610d07565b611b1961240a565b60005b6002811015611b6557848160028110611b3757611b37612be6565b6020020151828260028110611b4e57611b4e612be6565b602002015280611b5d81612cc5565b915050611b1c565b5081818460028110611b7957611b79612be6565b60200201529392505050565b611b8d612455565b60208201516060015151511515808252611ba8576000611bb3565b602082015160800151155b611bbe576000611bcd565b60208281015160600151015151155b15611cb957611bda612492565b8251516001600160a01b0390811682528351602090810151821681840152845160409081015181850152855160609081015181860152865160809081015190941684860152865160a09081015190860152865160c09081015115159086015282870180515160e0870152805184015161010087015280518201516101208701528051909401516101408601529251909201515151610160840152835115156101808401526004600055436001559051611c9591839101612d2c565b604051602081830303815290604052600290805190602001906119ec92919061251f565b602082015160600151805151611cd0916000611070565b6020820152611ce16001601a610cea565b6020818101516040808401805192909252848301805160609081015151850151845186015281518101515183015193519315159390920192909252845192830151925191510151611d3592919060006110ef565b611d416001601b610cea565b8151516020830151608001516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015611d83573d6000803e3d6000fd5b50611dd76000611dce611da485602001516060015160008660400151611b11565b6001602002015160000151611dc786602001516060015160008760400151611b11565b6001611070565b1015601c610cea565b8151608081015190516020840151606001516040840151611e07939291611e0091600090611b11565b60016110ef565b6000808055600181905561021b906002906125a3565b611e28838383611f10565b611e3157600080fd5b505050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391611e9d91612bfc565b60006040518083038185875af1925050503d8060008114611eda576040519150601f19603f3d011682016040523d82523d6000602084013e611edf565b606091505b5091509150611ef082826001611ad6565b5080806020019051810190611f059190612dfc565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391611f6f91612bfc565b60006040518083038185875af1925050503d8060008114611fac576040519150601f19603f3d011682016040523d82523d6000602084013e611fb1565b606091505b5091509150611fc282826002611ad6565b5080806020019051810190611fd79190612dfc565b9695505050505050565b905290565b604051806040016040528060008152602001611fe16125e0565b60405180610140016040528060008152602001612039604051806060016040528060008152602001600081526020016000151581525090565b815260200160006001600160a01b0316815260200161206d6040518060400160405280600081526020016000151581525090565b81526020016120916040518060400160405280600081526020016000151581525090565b815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610120810182526000918101828152606082018390526080820183905260a0820183905260c0820183905260e0820183905261010082019290925290815260208101611fe16125f3565b604080516104a0810190915260006104808201908152819081526020016000815260200160008152602001612159604051806060016040528060008152602001600081526020016000151581525090565b815260200161216661240a565b815260200160008152602001612198604051806060016040528060008152602001600081526020016000151581525090565b81526020016121a561240a565b815260200160008152602001600081526020016121de604051806060016040528060008152602001600081526020016000151581525090565b81526020016121eb61240a565b815260200161220d604051806040016040528060008152602001600081525090565b815260200160008152602001612236604051806040016040528060008152602001600081525090565b8152602001612258604051806040016040528060008152602001600081525090565b81526020016122736040518060200160405280600081525090565b815260200160008152602001600081526020016122ac604051806060016040528060008152602001600081526020016000151581525090565b81526020016122b961240a565b8152602001600081526020016122eb604051806060016040528060008152602001600081526020016000151581525090565b81526020016122f861240a565b81526020016000815260200160008152602001612331604051806060016040528060008152602001600081526020016000151581525090565b815260200161233e61240a565b8152602001612360604051806040016040528060008152602001600081525090565b815260200160008152602001612389604051806040016040528060008152602001600081525090565b81526020016123ab604051806040016040528060008152602001600081525090565b815260408051606081018252600080825260208281018290529282015291019081526020016123d861240a565b815260200160008152602001611fe1604051806060016040528060008152602001600081526020016000151581525090565b60405180604001604052806002905b61243f604051806060016040528060008152602001600081526020016000151581525090565b8152602001906001900390816124195790505090565b6040805160608101825260008082526020820152908101611fe1604051806060016040528060008152602001600081526020016000151581525090565b604051806101a0016040528060006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600015158152602001600081526020016000815260200161250261240a565b815260200160008152602001600081526020016000151581525090565b82805461252b9061286d565b90600052602060002090601f01602090048101928261254d5760008555612593565b82601f1061256657805160ff1916838001178555612593565b82800160010185558215612593579182015b82811115612593578251825591602001919060010190612578565b5061259f929150612628565b5090565b5080546125af9061286d565b6000825580601f106125bf575050565b601f0160209004906000526020600020908101906125dd9190612628565b50565b6040518060200160405280611fe161263d565b6040518060a0016040528060008152602001600081526020016000815260200161261b61240a565b8152602001600081525090565b5b8082111561259f5760008155600101612629565b604080516080810190915280600081526020016126666040518060200160405280600081525090565b81526020016126816040518060200160405280600081525090565b8152600060209091015290565b6000604082840312156126a057600080fd5b50919050565b6000602082840312156126b857600080fd5b5035919050565b600060a082840312156126a057600080fd5b60005b838110156126ec5781810151838201526020016126d4565b838111156119ec5750506000910152565b82815260406020820152600082518060408401526127228160608501602087016126d1565b601f01601f1916919091016060019392505050565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff8111828210171561277057612770612737565b60405290565b6040516060810167ffffffffffffffff8111828210171561277057612770612737565b604051610120810167ffffffffffffffff8111828210171561277057612770612737565b6040516101a0810167ffffffffffffffff8111828210171561277057612770612737565b6040516020810167ffffffffffffffff8111828210171561277057612770612737565b6040516080810167ffffffffffffffff8111828210171561277057612770612737565b80151581146125dd57600080fd5b60006040828403121561284757600080fd5b61284f61274d565b82358152602083013561286181612827565b60208201529392505050565b600181811c9082168061288157607f821691505b602082108114156126a057634e487b7160e01b600052602260045260246000fd5b80516001600160a01b03811681146128b957600080fd5b919050565b80516128b981612827565b600082601f8301126128da57600080fd5b6128e261274d565b8060c08401858111156128f457600080fd5b845b81811015612947576060818803121561290f5760008081fd5b612917612776565b815181526020808301518183015260408084015161293481612827565b90830152908552909301926060016128f6565b509095945050505050565b60006101c0828403121561296557600080fd5b61296d612799565b612976836128a2565b8152612984602084016128a2565b6020820152612995604084016128a2565b604082015260608301516060820152608083015160808201526129ba60a084016128a2565b60a082015260c083015160c08201526129d560e084016128be565b60e08201526101006129e9858286016128c9565b908201529392505050565b60006102408284031215612a0757600080fd5b612a0f6127bd565b612a18836128a2565b8152612a26602084016128a2565b60208201526040830151604082015260608301516060820152612a4b608084016128a2565b608082015260a083015160a0820152612a6660c084016128be565b60c082015260e083015160e0820152610100808401518183015250610120612a90858286016128c9565b908201526101e0830151610140820152610200830151610160820152612ab961022084016128be565b6101808201529392505050565b634e487b7160e01b600052602160045260246000fd5b600060208284031215612aee57600080fd5b6040516020810181811067ffffffffffffffff82111715612b1157612b11612737565b6040529135825250919050565b600081830360a0811215612b3157600080fd5b612b3961274d565b833581526080601f1983011215612b4f57600080fd5b612b576127e1565b9150612b61612804565b602085013560038110612b7357600080fd5b8152612b828660408701612adc565b6020820152612b948660608701612adc565b60408201526080850135612ba781612827565b6060820152825260208101919091529392505050565b6001600160a01b038316815260608101611a036020830184805182526020908101511515910152565b634e487b7160e01b600052603260045260246000fd5b60008251612c0e8184602087016126d1565b9190910192915050565b6001600160a01b0383168152815160208083019190915282015151805160c08301919060038110612c5957634e487b7160e01b600052602160045260246000fd5b80604085015250602081015151606084015260408101515160808401526060810151151560a0840152509392505050565b600082612ca757634e487b7160e01b600052601260045260246000fd5b500490565b600060208284031215612cbe57600080fd5b5051919050565b6000600019821415612ce757634e487b7160e01b600052601160045260246000fd5b5060010190565b8060005b60028110156119ec578151805185526020808201518187015260409182015115159186019190915260609094019390910190600101612cf2565b81516001600160a01b0316815261024081016020830151612d5860208401826001600160a01b03169052565b5060408301516040830152606083015160608301526080830151612d8760808401826001600160a01b03169052565b5060a083015160a083015260c0830151612da560c084018215159052565b5060e083015160e083015261010080840151818401525061012080840151612dcf82850182612cee565b50506101408301516101e08301526101608301516102008301526101809092015115156102209091015290565b600060208284031215612e0e57600080fd5b8151611a038161282756fea264697066735822122002ca2067a75768c339c96b90fdb16d3d2d79b65cfa80c8d6e99f22df5413baa664736f6c634300080c0033`,
  BytecodeLen: 14134,
  Which: `oD`,
  version: 7,
  views: {
    info: `info`,
    pricing: `pricing`
    }
  };
export const _stateSourceMap = {
  1: {
    at: './contracts/sell-item.rsh:93:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './contracts/sell-item.rsh:222:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './contracts/sell-item.rsh:121:57:after expr stmt semicolon',
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
  "Seller": Seller,
  "altBuy": altBuy,
  "buy": buy,
  "closeSale": closeSale
  };
export const _APIs = {
  altBuy: altBuy,
  buy: buy,
  closeSale: closeSale
  };
