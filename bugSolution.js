```javascript
// Correct approach: Ensure the field is a number
db.collection.updateOne({ _id: 1 }, { $inc: { 'numberField': 1 } });

// Convert string field to number and then update
db.collection.updateMany({}, [{$set: {numberField: {$toInt: "$stringField"}}}, {$inc: {numberField: 1}}, {$unset:{"stringField":1}}]);
```