var fs=require('fs');
var prompt=require('prompt');
var shuffle = require('shuffle-array');
var range=require('range');
var array=require('node-array');
var slice = require('array-slice');
var python = require('node-python');

prompt.start();
var f=JSON.parse(fs.readFileSync('a.json','utf8'));
var f=f.toString().split("}\n{");
var replace=require('replace');
f[0] = f[0].replace('{','');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,                      //for taking input value
  output: process.stdout
});
rl.question('enter size of team ', (n) => {
    console.log(`the size  of each team: ${n}`);
  
    rl.close();
 var s=[];
 for(var i=0;i<14;i++)
{
s[i]=i;
}
console.log(s);
shuffle(s);
console.log(s);
 var t = [];
 var slen = s.length;
var x = slen%n;
console.log(x);
var math=require('math');
var y = math.floor(slen/n);
console.log(y);
for(i=0;i<y;i++){
   // t+=slice(s,i*n,i*n+n);
   // t+=slice(s,y*n);
   var t=[];

   t=t+s.slice(i*n,i*n+n);
   t=t+s.slice(y*n,-1);
    console.log(t);
    
}
var w= fs.createWriteStream("v.txt");
for(var i=0;i<t.length;i++)
{
  w.write("[\n");
  w.write("{");
  w.write(f[i]);
  w.write("}\n");
  w.write("\n]\n");
  
}
});