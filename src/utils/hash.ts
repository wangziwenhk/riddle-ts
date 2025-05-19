declare global {
    interface String {
        hashCode(): number;
    }
}
export {};

function hashCode(this: string): number {
    let hash = 0;
    if (this.length === 0) {
        return hash;
    }

    for (let i = 0; i < this.length; i++) {
        const char = this.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        // 将结果强制转换为 32 位带符号整数
        hash = hash | 0;
    }
    return hash;
}

Object.defineProperty(String.prototype, 'hashCode', {
    value: hashCode,
    writable: true,
    configurable: true
});