
function Calculator(){
 const [cal, setcal]= React.useState({
   current:"0",
    total:"0",
   isinitial: true,
   preOp: ""
 });
  function handlenumber(value)
  {
   let newValue= value;
    
    if(!cal.isinitial)
    {newValue=cal.current+value;}
    
    setcal({current:newValue, total: cal.total, isinitial:false, preOp:cal.preOp});
  }
  function handleoperator(value){
    const total= docalculation();
    setcal({current:total.toString(), total:total.toString(), isinitial:true, preOp: value});
  }
  function docalculation(){
    let total= parseInt(cal.total)
    switch(cal.preOp){
      case "+":
        total+=parseInt(cal.current);
        break;
      case "-":
        total-=parseInt(cal.current);
        break;
      case "*":
        total*=parseInt(cal.current);
        break;        
       case "/":
        total/=parseInt(cal.current);
        break;          
      default:
        total=parseInt(cal.current);
    }
    return total;
  }
  function renderDisplay(){
    
    return cal.current;
  }
  function handleClear(){
    setcal({
   current:"0",
    total:"0",
   isinitial: true,
   preOp: ""
 });
  }

  return (
    <div className="calculator">
      <div className="display">{renderDisplay()}</div>  
      <Calbtn value="7" onClick={handlenumber}/>
      <Calbtn value="8" onClick={handlenumber}/>
      <Calbtn value="9" onClick={handlenumber}/>
      <Calbtn className="operator" onClick={handleoperator} value="/"/>
      
      <Calbtn value="4" onClick={handlenumber}/>
      <Calbtn value="5" onClick={handlenumber}/>
      <Calbtn value="6" onClick={handlenumber}/>
      <Calbtn className="operator" onClick={handleoperator} value="*"/>
      
      <Calbtn value="1" onClick={handlenumber}/>
      <Calbtn value="2" onClick={handlenumber}/>
      <Calbtn value="3" onClick={handlenumber}/>
      <Calbtn className="operator" onClick={handleoperator}  value="-"/>
      
      <Calbtn value="c" onClick={handleClear}/>
      <Calbtn value="0" onClick={handlenumber}/>
      <Calbtn value="=" onClick={handleoperator}/>
      <Calbtn className="operator" onClick={handleoperator} value="+"/>
    </div>
        )
}
function Calbtn(props)
{
  return <button className={props.className} onClick={()=> props.onClick(props.value)}>{props.value}</button>
}
	ReactDOM.render(<div className="app-container"><Calculator/></div>, document.getElementById("root"));
