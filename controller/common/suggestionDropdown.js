exports.getSuggestionDropdown = async (req, res, next) => {
    
    const collection = global.sietdb.collection("suggestionDropdown");
    
    const findResult = await collection.find(req.body).toArray();
console.log('Found documents =>', findResult);
    return res.status(200).json({"results":findResult});
};
