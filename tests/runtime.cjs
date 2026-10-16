// Minimal DOM/canvas shim for input and game-rule regression tests. Visual QA is separate.
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
function env(file){
  const elements={},canvases={},storage=new Map();
  function element(){return {style:{},hidden:true,disabled:false,textContent:'',classList:{add(){},toggle(){}},addEventListener(){},setPointerCapture(){},getBoundingClientRect:()=>({left:0,top:0,width:184,height:190})};}
  function canvas(w=256,h=176){
    const c={...element(),width:w,height:h}; const stack=[];
    const ctx=new Proxy({canvas:c,globalAlpha:1,save(){stack.push(this.globalAlpha)},restore(){this.globalAlpha=stack.pop()??1},getImageData(x,y,w,h){return {data:new Uint8ClampedArray(w*h*4)}},createImageData(w,h){return {data:new Uint8ClampedArray(w*h*4)}},createLinearGradient(){return {addColorStop(){}}}}, {get(o,k){return k in o?o[k]:(()=>{})}});
    c.getContext=()=>ctx;c.getBoundingClientRect=()=>({left:0,top:0,width:c.width,height:c.height});return c;
  }
  class Image {constructor(){this.width=224;this.height=256;}set src(value){this.onload?.();}}
  canvases.game=canvas();canvases.cinema=canvas(512,352);
  const context={console,Image,URLSearchParams,URL,Math,Date,performance:{now:()=>0},location:{search:'?seed=42&stage=1',href:'file://'+file},navigator:{},requestAnimationFrame:()=>0,setTimeout,clearTimeout,localStorage:{getItem:k=>storage.get(k)||null,setItem:(k,v)=>storage.set(k,String(v)),removeItem:k=>storage.delete(k)},document:{getElementById:k=>canvases[k]||(elements[k]||(elements[k]=element())),createElement:t=>t==='canvas'?canvas():element(),addEventListener(){},body:{appendChild(){},classList:{add(){}}}},innerWidth:1024,innerHeight:704,addEventListener(){}};context.window=context;
  vm.createContext(context);vm.runInContext(fs.readFileSync(file,'utf8').split('<script>')[1].split('</script>')[0],context);return {context,canvases};
}
module.exports={env,vm,fs,assert};
