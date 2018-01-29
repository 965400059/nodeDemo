// Node.js 目前支持的字符编码包括：
// ascii - 仅支持 7 位 ASCII 数据。如果设置去掉高位的话，这种编码是非常快的。
// utf8 - 多字节编码的 Unicode 字符。许多网页和其他文档格式都使用 UTF-8 。
// utf16le - 2 或 4 个字节，小字节序编码的 Unicode 字符。支持代理对（U+10000 至 U+10FFFF）。
// ucs2 - utf16le 的别名。
// base64 - Base64 编码。
// latin1 - 一种把 Buffer 编码成一字节编码的字符串的方式。
// binary - latin1 的别名。
// hex - 将每个字节编码为两个十六进制字符。
const buf = Buffer.from('abc', 'ascii');
console.log(buf.toString('hex'));
console.log(buf.toString('base64'));


// Buffer 提供了以下 API 来创建 Buffer 类：
// Buffer.alloc(size[, fill[, encoding]])： 返回一个指定大小的 Buffer 实例，如果没有设置 fill，则默认填满 0
// Buffer.allocUnsafe(size)： 返回一个指定大小的 Buffer 实例，但是它不会被初始化，所以它可能包含敏感的数据
// Buffer.allocUnsafeSlow(size)
// Buffer.from(array)： 返回一个被 array 的值初始化的新的 Buffer 实例（传入的 array 的元素只能是数字，不然就会自动被 0 覆盖）
// Buffer.from(arrayBuffer[, byteOffset[, length]])： 返回一个新建的与给定的 ArrayBuffer 共享同一内存的 Buffer。
// Buffer.from(buffer)： 复制传入的 Buffer 实例的数据，并返回一个新的 Buffer 实例
// Buffer.from(string[, encoding])： 返回一个被 string 的值初始化的新的 Buffer 实例
console.log(Buffer.alloc(10));
console.log(Buffer.alloc(10,1));
console.log(Buffer.allocUnsafe(10));
console.log(Buffer.from([1,2,3]));
console.log(Buffer.from("test"));
console.log(Buffer.from('test','latin1'));

const buf1 = Buffer.alloc(256);
len = buf1.write("liweiwei");
console.log(len);

const buf2 = Buffer.alloc(26);
for(let i = 0;i<26;i++){
    buf2[i] = i+97;
}

console.log(buf2.toString("ascii"));
console.log(buf2.toString('ascii',0,5));
console.log(buf2.toString('utf8',0,5));
console.log(buf2.toString(undefined,0,5));

const buf3 = Buffer.from("liweiwei");
var json = buf3.toJSON(buf3);
console.log(json);

var buffer1 = Buffer.from("li");
var buffer2 = Buffer.from('weiwei');
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log('name is ' + buffer3.toString());
