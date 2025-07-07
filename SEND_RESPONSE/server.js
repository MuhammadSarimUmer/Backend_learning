import express from 'express';
import path from 'path';

const app = express();

const products = [
    {
        name: "iPhone 12",
        price: 999,
    },
    {
        name: "iPhone 12 Pro",
        price: 999,
    },
    {
        name: "iPhone 12 Pro Max",
        price: 850,
    }
]
const path_dir = path.resolve();
const path_html = path.join(path_dir,"index.html");
console.log(path_html);
app.get("/", (req, res) => {
    // res.json({
    //     products:products,
    //     message:"Server is running on port 3000",
    // }
    // )
    res.sendFile(path_html);

})






















const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})