export function getSizeImg(url,size){
    return `${url}?param=${size}x${size}`
}

export function numFormat(num){
    if(num<10000){
        return num
    }else if(num>=10000){
        return `${Math.floor(num/1000)/10}万`
    }else if(num>=100000000){
        return `${Math.floor(num/10000000)/10}亿`
    }
}