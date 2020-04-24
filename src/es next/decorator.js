//修饰器
//只能用于类和类的方法，不能用于函数

//防抖动函数
//在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时。
function debounce(timeout){
    return (target, name, descriptor)=>{
        const func = descriptor.value
        let timer
        return {
            ...descriptor,
            value(...args){
                if(timer){
                    clearTimeout(timer)
                }

                timer = setTimeout(()=>{
                    func.apply(this, args)
                },timeout)
            }
        }
    }
    
}


//节流
//规定在一个单位时间内，只能触发一次函数。如果这个单位时间内触发多次函数，只有一次生效。
function throttle(timeout){
    return (target, name, descriptor)=>{
        const fun = descriptor.value
        let timer;
        let last;
        return {
            ...descriptor,
            value: (...args)=>{
                const now = +(new Date)
                if(last && now < last + timeout){
                    return 
                }
                fun.apply(null, args)
                last = now
            }
        }
    }
}

class A{
    
    @debounce(5000)
    log(){
        console.log('log1')
    }

    @throttle(3000)
    log2(){
        console.log('log2')
    }
}

const test = new A

test.log();
setTimeout(()=>{
    test.log();
},4000)

setInterval(()=>{
    test.log2();
},100)