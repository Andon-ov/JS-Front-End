function solve(text) {
    let words = text.split(" ");
    let dict = {};
    let result = []
    words.forEach((element) => {
        if (!dict.hasOwnProperty(element.toLowerCase())) {
            dict[element.toLowerCase()] = 0
        }

        dict[element.toLowerCase()] += 1


    });

    for (const dictKey in dict) {
        if(dict[dictKey]%2 !==0)
            result.push(dictKey)

    }
    console.log(...result)
}

solve("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
solve("Cake IS SWEET is Soft CAKE sweet Food");
