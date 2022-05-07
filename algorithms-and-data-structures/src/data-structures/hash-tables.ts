type HashTableKey = string | number;

type Bucket<K extends HashTableKey = HashTableKey, V = unknown> = [K, V][];
type Buckets<K extends HashTableKey = HashTableKey, V = unknown> = Bucket<K, V>[];

class HashTable<K extends HashTableKey = HashTableKey, V = unknown> {
  private static kMaxStringHashLength = 100;

  private buckets: Buckets<K, V>;

  private _size = 0;

  constructor(private readonly numberOfBuckets = 10) {
    this.buckets = new Array(numberOfBuckets);
  }

  public get size() {
    return this._size;
  }

  private bucketOf(key: K): Bucket<K, V> {
    return (this.buckets[this.hash(key)] ??= []);
  }

  public set(key: K, value: V): this {
    const bucket = this.bucketOf(key);

    const element = bucket.find(([k]) => k === key);
    if (element) {
      element[1] = value;
    } else {
      bucket.push([key, value]);
      ++this._size;
    }

    return this;
  }

  public get(key: K): V | undefined {
    const bucket = this.bucketOf(key);

    return bucket.find(([k]) => k === key)?.[1];
  }

  public delete(key: K): boolean {
    const bucket = this.bucketOf(key);

    const elementIdx = bucket.findIndex(([k]) => k === key);
    if (elementIdx === -1) {
      return false;
    }

    bucket.splice(elementIdx, 1);

    --this._size;

    return true;
  }

  public keys(): K[] {
    return this.buckets.reduce((keys, bucket) => {
      bucket.forEach(([k]) => keys.push(k));
      return keys;
    }, [] as K[]);
  }

  public values(): V[] {
    return this.buckets.reduce((values, bucket) => {
      bucket.forEach(([, v]) => values.push(v));
      return values;
    }, [] as V[]);
  }

  public entries(): [K, V][] {
    return this.buckets.reduce((values, bucket) => {
      bucket.forEach((entry) => values.push(entry));
      return values;
    }, [] as [K, V][]);
  }

  private hash(key: K) {
    let hash = typeof key === 'number' ? key : 0;

    if (typeof key === 'string') {
      // convert the string to a number then hash the number based on V8 integer hash function: https://github.com/nodejs/node/blob/238104c531219db05e3421521c305404ce0c0cce/deps/v8/src/utils/utils.h#L224
      const maxIterations = Math.min(HashTable.kMaxStringHashLength, key.length);
      for (let i = 0; i < maxIterations; ++i) {
        hash += key.charCodeAt(i);
      }
    }

    hash = ~hash + (hash << 18); // hash = (hash << 18) - hash - 1;
    hash ^= hash >> 31;
    hash *= 21; // hash = (hash + (hash << 2)) + (hash << 4);
    hash ^= hash >> 11;
    hash += hash << 6;
    hash ^= hash >> 22;

    return hash % this.numberOfBuckets;
  }
}

const t = new HashTable();

console.log(t);

t.set(1, 1).set('number', 1e10).set('string', 'hi').set('array', [1]);
console.log(t.get(1), t.get('number'), t.get('string'), t.get('array'));

console.log(t.keys());
console.log(t.values());
console.log(t.entries());

t.set(1, 2).set('number', -1e10).set('string', 'ih').set('array', [-1]);
console.log(t.get(1), t.get('number'), t.get('string'), t.get('array'));

console.log(
  t.delete('any'),
  t.delete(1),
  t.delete('number'),
  t.delete('string'),
  t.delete('array'),
);
console.log(t.get(1), t.get('number'), t.get('string'), t.get('array'));

console.log(t);
