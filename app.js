const add = (num1, num2) => (num1 + num2);

const multiply = (num3, num4) =>(num3 * num4 );

document.writeln ( "El resultado de la function add es " + add (9824,777) + "<br>");

document.writeln ( "El resultado de 36325 * (9824 + 777) es " + multiply (36325, add(9824,777)));



