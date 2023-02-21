/**
 * 顺时针打印矩阵:输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。
 * https://leetcode.cn/problems/shun-shi-zhen-da-yin-ju-zhen-lcof/?envType=study-plan&id=lcof&plan=lcof&plan_progress=baqe98c
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = function(matrix: number[][] ): number[] {
    if(matrix.length===0){
        return []
    }
    let res:number[] = new Array(matrix.length * matrix[0].length);

    let l = 0, r=matrix[0].length-1, t=0,b=matrix.length-1;
    
    let k= 0;
    while(k<res.length){
        for(let i=l; i<=r;i++){
            res[k] = matrix[t][i];
            k++
        }
        if(++t > b) break;
        for(let i=t;i<=b;i++){
            res[k] = matrix[i][r];
            k++
        }
        if(--r<l) break;
        for(let i=r;i>=l;i--){
            res[k] = matrix[b][i];
            k++
        }
        if(--b < t) break;
        for(let i=b;i>=t;i--){
            res[k] = matrix[i][l];
            k++
        }
        
        if(++l>r) break;
        
    }

    return res;
};