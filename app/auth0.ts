import { initAuth0, SessionStore } from '@auth0/nextjs-auth0/edge';

export class Store implements SessionStore {
  public store: { [key: string]: any };
  constructor() {
    this.store = {};
  }
  get(id: string) {
    console.log('Store#get', id, !!this.store[id]);
    return Promise.resolve(this.store[id]);
  }
  async set(id: string, val: any) {
    console.log('Store#set', id, val);
    this.store[id] = val;
    await Promise.resolve();
  }
  async delete(id: string) {
    console.log('Store#delete', id);
    delete this.store[id];
    await Promise.resolve();
  }
}

export default initAuth0({ backchannelLogout: { store: new Store() } });
