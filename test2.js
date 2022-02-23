const jerarquizar = ()=>{

    const empleados = [

        // CEO ={
        //     nombre: 'nombre',
        //     edad:15,
        //     nacimiento: 20040513, 
        // },
        
        // CEO.hijo={
        //     nombre: 'nombre',
        //     edad:15,
        //     nacimiento: 200405,
        //     hijo:{}
        // }
    
        
    ]
    
    for (var i=0; i<10000; i++){
        const persona = {
            nombre: 'nombre',
            edad:15,
            nacimiento: 20040513, 
            padre: empleados.length-1,
            hijo: empleados.length+1
        };
        empleados.push(persona)
    }; 
    
    
    
     console.log( empleados)
    

}

jerarquizar();

//     const CEO ={
//     nombre: 'nombre',
//     edad:15,
//     nacimiento: 20040513, 
// }

// CEO.hijo={
//     nombre: 'nombre',
//     edad:15,
//     nacimiento: 200405,
//     hijo:{}
// }







