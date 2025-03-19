/**
 * Utility functions for localStorage and IndexedDB storage.
 */

// Local Storage Helpers
export const setLocalStorageItem = <T>(key: string, value: T): void => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Error setting localStorage item:', error);
  }
};

export const getLocalStorageItem = <T>(key: string, defaultValue?: T): T | null => {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : defaultValue || null;
  } catch (error) {
    console.error('Error getting localStorage item:', error);
    return defaultValue || null;
  }
};

export const removeLocalStorageItem = (key: string): void => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing localStorage item:', error);
  }
};

// IndexedDB Helpers
interface DBOptions {
  name: string;
  version: number;
  stores: {
    name: string;
    keyPath: string;
    indexes?: { name: string; keyPath: string; options?: IDBIndexParameters }[];
  }[];
}

export class IndexedDBService {
  private db: IDBDatabase | null = null;
  private dbName: string;
  private dbVersion: number;
  private stores: DBOptions['stores'];

  constructor(options: DBOptions) {
    this.dbName = options.name;
    this.dbVersion = options.version;
    this.stores = options.stores;
    this.init();
  }

  private init(): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, this.dbVersion);

      request.onerror = () => {
        console.error('IndexedDB error:', request.error);
        reject(request.error);
      };

      request.onsuccess = () => {
        this.db = request.result;
        resolve(this.db);
      };

      request.onupgradeneeded = () => {
        const db = request.result;

        this.stores.forEach(store => {
          if (!db.objectStoreNames.contains(store.name)) {
            const objectStore = db.createObjectStore(store.name, { keyPath: store.keyPath });
            store.indexes?.forEach(index => {
              objectStore.createIndex(index.name, index.keyPath, index.options);
            });
          }
        });
      };
    });
  }

  private async getDB(): Promise<IDBDatabase> {
    return this.db ?? this.init();
  }

  async add<T>(storeName: string, item: T): Promise<IDBValidKey> {
    const db = await this.getDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(storeName, 'readwrite');
      const store = transaction.objectStore(storeName);
      const request = store.add(item);
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  async get<T>(storeName: string, key: IDBValidKey): Promise<T | undefined> {
    const db = await this.getDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(storeName, 'readonly');
      const store = transaction.objectStore(storeName);
      const request = store.get(key);
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  async getAll<T>(storeName: string): Promise<T[]> {
    const db = await this.getDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(storeName, 'readonly');
      const store = transaction.objectStore(storeName);
      const request = store.getAll();
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  async put<T>(storeName: string, item: T): Promise<IDBValidKey> {
    const db = await this.getDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(storeName, 'readwrite');
      const store = transaction.objectStore(storeName);
      const request = store.put(item);
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  async delete(storeName: string, key: IDBValidKey): Promise<void> {
    const db = await this.getDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(storeName, 'readwrite');
      const store = transaction.objectStore(storeName);
      const request = store.delete(key);
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  }
}

export const db = new IndexedDBService({
  name: 'edvantage-db',
  version: 1,
  stores: [
    {
      name: 'user-data',
      keyPath: 'id',
      indexes: [{ name: 'userId', keyPath: 'userId' }],
    },
    {
      name: 'tasks',
      keyPath: 'id',
      indexes: [
        { name: 'userId', keyPath: 'userId' },
        { name: 'dueDate', keyPath: 'dueDate' },
        { name: 'status', keyPath: 'status' },
      ],
    },
  ],
});

interface CacheItem<T> {
  value: T;
  expires: number | null;
}

const memoryCache = new Map<string, CacheItem<unknown>>();

export const cacheService = {
  set: <T>(key: string, value: T, ttlSeconds?: number): void => {
    const item: CacheItem<T> = {
      value,
      expires: ttlSeconds ? Date.now() + ttlSeconds * 1000 : null,
    };
    memoryCache.set(key, item);
  },
  get: <T>(key: string): T | null => {
    const item = memoryCache.get(key);
    if (!item) {
      return null;
    }

    if (item.expires && item.expires < Date.now()) {
      memoryCache.delete(key);
      return null;
    }
    return item.value as T;
  },
  remove: (key: string): void => {
    memoryCache.delete(key);
  },
  clear: (): void => {
    memoryCache.clear();
  },
};