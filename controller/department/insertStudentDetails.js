exports.insertStudentDetails = async (req, res, next) => {
    const collection = global.sietdb.collection("studentDetails");
    console.log("heyy");
    // the following code examples can be pasted here...
    const insertResult = await collection.insertOne(req.body);
    console.log("Inserted documents =>", insertResult);
    return res.status(200).json({ message: "success!!" });
};
