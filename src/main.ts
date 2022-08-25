import './style.css'

// Import
import { ApiPromise, WsProvider } from '@polkadot/api';

// Construct
const wsProvider = new WsProvider('wss://rpc.polkadot.io');
const api = await ApiPromise.create({ provider: wsProvider });

// Do something
const referendumId = 70;

  const unsub = await api.queryMulti(
    [
      [api.query.democracy.referendumInfoOf, referendumId]
    ],
    ([info]) => {
      const typedInfo = info.toJSON();
      console.log(`typedInfo : `, typedInfo);
    }
  );

  api.query.democracy.referendumInfoOf(referendumId, (info: any) => {
    const _info = info.unwrapOr(null);
    console.log('_info : ', _info);

    if (_info?.isOngoing){
      console.log('_info?.asOngoing.tally.ayes : ', _info?.asOngoing.tally.ayes);
      console.log('_info?.asOngoing.tally.nays : ', _info?.asOngoing.tally.nays);
      console.log('_info?.asOngoing.tally.turnout : ', _info?.asOngoing.tally.turnout);
    }
  });

  // console.log('unsub 2 : ', unsub);