# Incorrect use of $inc operator with a string field in MongoDB
This example demonstrates an uncommon error in MongoDB where the `$inc` operator is incorrectly used with a string field. The `$inc` operator is designed to increment numeric fields, and using it with a string field will lead to unexpected behavior or errors.

## Bug
The bug involves attempting to increment a string field using the `$inc` operator. This operation is not supported and will result in an error or unexpected data modification.

## Solution
The solution involves ensuring that the field being incremented is of numeric type (int or double). If the field is a string, you'll need to modify your schema to use a numeric type for the field. If the field currently stores numeric data as strings, you would need to convert it to a numeric type before you use the `$inc` operator. 