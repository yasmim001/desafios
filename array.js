let cliente = ["José", 30, 1.60];
console.log(cliente[0]); //José
console.log(cliente[3]); //José

cliente[4] = 1700;
console.log(cliente); // propriedades do array
console.log(cliente[4]);

console.log(`Tamanho do vetor:${cliente.length}`);

console.log("Concatenação de variáveis/Conteúdo js");
console.log(`Tamanho do vetor:${cliente.length}`); // template string js
console.log(`Tamanho do vetor:+cliente.length`); // forma padrão

cliente.push("Masculino");
console.log(cliente[5]);
console.log(cliente);
console.log(`Size Upgrade:$(cliente.length)`);

cliente.push({id:5}); //add um objeto no array
console.log(cliente);
console.log("id do cliente:"+cliente[6].id);

cliente.pop(); //remove elemento do array
console.log(cliente);