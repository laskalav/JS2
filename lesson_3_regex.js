
var str = "Text 'text' 'text' aren't 'Text'";
// Task 1
var task1 = str.replace(/\'/g, '"');
// Task 2:
var task2 = str.replace(/(?:(\b\')|(\'\b))(?<!(\b\'\b))/g, '"');
