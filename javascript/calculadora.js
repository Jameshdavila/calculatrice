
var value1 = null;
var operator = null;
var value2 = null;



//--------------------------------------------------------
function operadorfunc( idButton ){

    switch( idButton ) {

        case 'allclear':
            value1 = null;
            operator = null;
            value2 = null;
            showResultado(0);
            break;

        case "plusmoins":

            break;

        case "porcentage":

            break;

        case "virgule":

          handlerComa( idButton);


        break;

        case "egal":
          if ( value1 != null && operator != null){
            if ( value2 == null ) value2 = value1;
            calcul();
          }

          operator = idButton;
          value2 = null;
        break;

        //-------------------------------------

        case "division":
        case "multiplication":
        case "soustraction":
        case "addition":
              handlerBasicOperators( idButton );
          break;


        // on a cliqué sur un button avec un chiffre 0-9
        default:
            handlerNumbers(idButton);
          }
      }

//--------------------------------------------------------
function handlerComa( idButton ){
  if ( value1 == null ){
     value1 = "0.";
     showResultado(value1);
  }
  else {
    if ( operator == null ){

    }
  }
}
//--------------------------------------------------------
// division,multiplication,soustraction,addition
function handlerBasicOperators( idButton ){
  if (value1 != null ){
    if ( operator == null)  operator = idButton;
    else{
      if ( operator == "egal"){
          operator = idButton;
      }
      else {
        calcul();
        operator = idButton;
      }
    }
  }
}

//--------------------------------------------------------
//On gère quand je clique sur un des numéro ( 0 - 9 )
function handlerNumbers( idButton ){
  //On récupère l'elément Button ( component )
  var btnNumero = document.getElementById(idButton);

  //On récupère la valeur du bouton
  var valueButton = btnNumero.firstChild.nodeValue;


  if ( value1 == null ){
    value1 = valueButton;
    showResultado(value1);
  }
  else {

      if (operator == null ){

        var strConcat = value1+""+valueButton;


        value1 = parseFloat(strConcat);

        showResultado(value1);
      }
      else{
        if ( value2 == null ){
          value2 = valueButton;
          showResultado(value2);
        }
        else{
          var strConcat2 = value2+""+valueButton;
          value2 = parseFloat(strConcat2);
          showResultado(value2);
        }
      }
  }
}

//--------------------------------------------------------
//On calcule le resultat de l'opération
function calcul(){
  var finalValue = 0;

  var v1 = parseFloat(value1);
  var v2 = parseFloat ( value2 );

  if ( operator == "addition") finalValue = v1 + v2;
  else if ( operator == "soustraction") finalValue = v1 - v2;
  else if ( operator == "multiplication") finalValue = v1 * v2;
  else if ( operator == "division") finalValue = v1 / v2;

//On affiche le résultat à l'écran
  showResultado(finalValue);

//On réinitialise les variables
  value1 = finalValue;
  value2 = null;
  operator = null;
}
//--------------------------------------------------------
//On affiche le resultat à l'écran
function showResultado( value ){

  var spanResultado= document.getElementById("resultado");
/*
  if ( value.indexOf(".") != -1 ) alert("existe el punto => "+value);
  else alert("NO existe el punto ==> "+value);
  var strFinal =  value.replace(".",",");
   spanResultado.textContent = strFinal;*/

   spanResultado.textContent = value;
}
