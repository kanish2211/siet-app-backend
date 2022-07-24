exports.insertNews = async(req, res, next) => {
    const collection = global.sietdb.collection("news");

    // the following code examples can be pasted here...
    const insertResult = await collection.insertMany(req.body);
    console.log("Inserted documents =>", insertResult);
    return res.status(200).json({ message: "success!!" });
};