function getValue(condition){
    
    const maxValue = 100;

    if(condition){
        var myValue="Erick";
        //com let:
        //let myValue


        maxValue = 120;
        //erro, não se muda valor da const

        const person ={
            name: 'Erick'
        }

        person.name = "José";

        person = {
            name: "José"
        }
        //retornará erro


        return myValue;
    }else{
        console.log(myValue);
        //por causa do hoisting, é undefined
        return null;
    }

}


console.log(getValue(false));
//daria erro com false, pq myValue não está definida
//está apenas no escopo



