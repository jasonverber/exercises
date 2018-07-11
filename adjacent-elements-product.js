//Timed challenge to find and return greatest product of two adjacent elements, where no element was less than -1000 or greater than 1000.
//
function adjacentElementsProduct(inputArray) {
    return inputArray.reduce((a,b,i,arr)=>(b*(arr[i+1]?arr[i+1]:arr[i-1])>a)?(b*(arr[i+1]?arr[i+1]:arr[i-1])):a,(-1000*1000)-1);
}
