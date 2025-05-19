import {Map} from 'immutable';
import {Equatable} from "./equatable";

class TrieNode<K extends Equatable<K>, V> {
    children: Map<K, TrieNode<K, V>>;
    isEnd: boolean;
    value?: V;

    constructor(isEnd: boolean = false) {
        this.children = Map<K, TrieNode<K, V>>();
        this.isEnd = isEnd;
    }
}

export class Trie<K extends Equatable<K>, V> {
    root: TrieNode<K, V>;

    constructor() {
        this.root = new TrieNode<K, V>();
    }

    set(list: K[], value: V) {
        let cursor = this.root;
        for (let i = 0; i < list.length; i++) {
            const key = list[i];
            if (!cursor.children.has(key)) {
                cursor.children.set(key, new TrieNode<K, V>());
            }
            cursor = cursor.children.get(key)!;
        }
        cursor.isEnd = true;
        cursor.value = value;
    }

    get(list: K[]) {
        let cursor = this.root;
        for (let i = 0; i < list.length; i++) {
            const key = list[i];
            if (!cursor.children.has(key)) {
                return undefined;
            }
            cursor = cursor.children.get(key)!;
        }
        return cursor.value;
    }

    has(list: K[]) {
        return this.get(list) === undefined;
    }
}