exports.getDashboardData = async (req, res, next) => {
    console.log("heyy");

    const collection = global.sietdb.collection("student");
    // the following code examples can be pasted here...
    const findResult = await collection.find({}).toArray();
console.log('Found documents =>', findResult);
    return res.status(200).json({ message: "success!!" });
};