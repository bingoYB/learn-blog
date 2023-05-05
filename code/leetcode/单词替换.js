// https://leetcode.cn/problems/replace-words/description/
// 648. 单词替换
// 在英语中，我们有一个叫做 词根(root) 的概念，可以词根后面添加其他一些词组成另一个较长的单词——我们称这个词为 继承词(successor)。例如，词根an，跟随着单词 other(其他)，可以形成新的单词 another(另一个)。
// 现在，给定一个由许多词根组成的词典 dictionary 和一个用空格分隔单词形成的句子 sentence。你需要将句子中的所有继承词用词根替换掉。如果继承词有许多可以形成它的词根，则用最短的词根替换它。
// 你需要输出替换之后的句子。

/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 * @example 
 * 输入：dictionary = ["cat","bat","rat"], sentence = "the cattle was rattled by the battery"
 * 输出："the cat was rat by the bat"
 */
var replaceWords = function(dictionary, sentence) {
    const dic = new Map();
    
    for(let i =0; i<dictionary.length;i++){
        const str = dictionary[i];
        let curDic = dic;
        for (let j = 0; j<str.length;j++){
            const c = str[j];
            if(!curDic.get(c)){
                curDic.set(c, new Map())
            }

            curDic = curDic.get(c);
        }

        curDic.set("end", true);
    }
    
    let sentenceList = sentence.split(" ");
    
    for(let i=0;i<sentenceList.length;i++){
        const str = sentenceList[i];
        let curDic = dic;
        for (let j = 0; j<str.length;j++){
            const c = str[j];
            const next = curDic.get(c)
            if(!next){
                break;
            }

            if(next.get("end")){
                sentenceList[i] = str.substring(0, j+1);
                break;
            }

            curDic = next;
        }
    }

    return sentenceList.join(" ");
};