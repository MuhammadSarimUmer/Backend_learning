console.log("WE ARE LEARNING ABOUT FILE HANDLING");
import {readFile,writeFile,appendFile,mkdir} from "fs/promises";


//READING FILES
const  readfile = async (fileName)=>{
    const data = await readFile(fileName, "utf-8");
    console.log(data);
}

// readfile("sample.txt");

//WRITING FILES

const write_file = async (fileName,content)=>{
    await writeFile(fileName,content);
    console.log("File made and content is Written");
}

// write_file("ai.py","this is a python file");

//APPENDING FILES
const update_file = async (fileName,content)=>{
    await appendFile(fileName,content);
    console.log("File made and content is appended");
}

// update_file("ai.py","new content added");

const making_folder = async(folderName)=>{
   await mkdir(folderName,{recursive:true});
   console.log("Folder made",);

}

making_folder("src/components/java");