exports.insertSuggestionData = async (req, res, next) => {
    console.log("heyy");

    const collection = global.sietdb.collection("suggestion");
    // the following code examples can be pasted here...
    console.log(req.body);
    const insertResult = await collection.insertOne(req.body);
console.log('Inserted documents =>', insertResult);
    return res.status(200).json({ message: "success!!" });
};
