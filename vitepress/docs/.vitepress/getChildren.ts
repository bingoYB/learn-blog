import path from "path"
import fs from "fs"

export function getChildren(filePath: string){
    // 查找文件下子文件目录
    const children: {
        text: string;
        link: string;
    }[] = []

    const fullPath = path.resolve("./docs",  filePath)

    const files = fs.readdirSync(fullPath);

    console.log(filePath)

    files.forEach((file) => {
        // 过滤图片文件
        if(!file.includes(".md")){
            return;
        }
        const fileDir = path.join(fullPath, file);
        const stat = fs.statSync(fileDir);
        if (!stat.isDirectory()) {
            children.push({
                text: getFileName(file),
                link:"/"+ filePath + "/" + file
            })
        }
    })

    return children;
}

/**
 * 去除文件尾缀
 * @param fullFile string 文件名
 */
function getFileName(fullFile: string){
    // 去除文件尾缀
    return fullFile.replace(/\.md$/,"")
}