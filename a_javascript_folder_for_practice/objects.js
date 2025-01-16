const objects = {"objects": {"another object": {"yet another object within": 
    { "message": "hello-there"}
}}}

console.log("consoled", objects)
console.log(objects.objects["another object"]["yet another object within"].message)
