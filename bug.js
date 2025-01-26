```javascript
// Incorrect use of $inc operator with a string field
db.collection.updateOne({ _id: 1 }, { $inc: { 'stringField': 1 } });
```