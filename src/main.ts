import './style.css'

// Import
import { ApiPromise, WsProvider } from '@polkadot/api';

// Construct
const wsProvider = new WsProvider('wss://rpc.polkadot.io');
const api = await ApiPromise.create({ provider: wsProvider });

// Do something
let unsubscribe: () => void;

api.query.balances.totalIssuance((result: any) => {
  console.log('result : ', result);
})
  .then( unsub => {
    console.log('typeof unsub : ', typeof unsub);
    console.log('unsub : ', unsub);
    unsubscribe = unsub;
  })
  .catch(console.error);
