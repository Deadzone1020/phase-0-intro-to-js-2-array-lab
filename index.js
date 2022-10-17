// Write your solution here!
const cats = ["Milo", "Otis" , "Garfield"] 
   function destructivelyAppendCat(name){
        cats.push(name) }
            function destructivelyPrependCat(name){
                cats.unshift(name)}
                    function destructivelyRemoveLastCat(Garfield){
                        cats.pop(Garfield)}
                        function destructivelyRemoveFirstCat(Milo){
                            cats.shift(Milo)}
                                function appendCat(name){ 
                                    const cat2 = [...cats, name] 
                                         return cat2} 

                                function prependCat(name){
                                    const cat2 = [name ,...cats] 
                                        return cat2 
                                }
                                function removeLastCat(Garfield){
                                    const cat2 =[...cats,] 
                                        cat2.pop(Garfield) 
                                        return cat2 }
                                    function removeFirstCat(Milo){
                                        const cats2 =[...cats] 
                                        cats2.shift(Milo) 
                                        return cats2
                                    }