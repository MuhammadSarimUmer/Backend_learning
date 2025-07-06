console.log("PATH_MODULE");

import path from "path"

//to join the path of two or more files:-

const fullPath = path.join("/path","index.html","styles.css");

// console.log(fullPath);

//to get absolute path of a file:-(original path of file )

const absolutePath = path.resolve();
// console.log(absolutePath)

//to get name of file extension:-

const fileExtension = path.extname("resume.docx");
console.log(fileExtension);