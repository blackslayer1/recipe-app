import { useState } from "react";
import './Pizza.scss';
import { Header } from "../Header";
import cheese from "./pizzas/cheese.jpg";
import pepperoni from "./pizzas/pepperoni.jpg";
import vegetable from "./pizzas/vegetable.jpg";
import margherita from "./pizzas/margherita.jpg";
import bbq from "./pizzas/bbq.jpeg";
import hawaiian from "./pizzas/hawaiian.jpg";
import checkmark from "./icons/checkmark.png";
import x from "./icons/x.png";

const Pizza = () => {
  const [savedRecipes, setSavedRecipes] = useState<string[]>([]);
  const [total1, setTotal1] = useState<string>("");
  const [total2, setTotal2] = useState<string>("");
  const [total3, setTotal3] = useState<string>("");
  const [total4, setTotal4] = useState<string>("");
  const [total5, setTotal5] = useState<string>("");
  const [total6, setTotal6] = useState<string>("");

  const save = (e: React.MouseEvent) => {
    let id = (e.target as HTMLImageElement).id;
    setSavedRecipes([...savedRecipes, id]);
  }

  const check = (array1: string[], array2: string[], checkedIngredients: string[], number: number) => {
    let elem = document.getElementById(`p${number}`)!;
    elem.style.visibility="visible";
    for (let i = 0; i < checkedIngredients.length; i++) {
      for (let j = 0; j < array2.length; j++) {
        if(checkedIngredients[i] === array2[j]){
          array1.push(checkedIngredients[i]);
        }
      }
    }
  
     if(array1.length !== array2.length && array1.length > 0){
      document.getElementById(`x${number}`)!.style.visibility="visible";
      document.getElementById(`checkmark${number}`)!.style.visibility="hidden";
      elem.style.color="yellow";
      switch(number){
        case 1:
          setTotal1('Some');
        break;
        case 2:
          setTotal2('Some');
        break;
        case 3:
          setTotal3('Some');
        break;
        case 4:
          setTotal4('Some');
        break;
        case 5:
          setTotal5('Some');
        break;
        case 6:
          setTotal6('Some');
        break;
      }
    }  else if (array1.length == 0){
      document.getElementById(`x${number}`)!.style.visibility="visible";
      document.getElementById(`checkmark${number}`)!.style.visibility="hidden";
      elem.style.color="red";
      switch(number){
        case 1:
          setTotal1('None');
        break;
        case 2:
          setTotal2('None');
        break;
        case 3:
          setTotal3('None');
        break;
        case 4:
          setTotal4('None');
        break;
        case 5:
          setTotal5('None');
        break;
        case 6:
          setTotal6('None');
        break;
      }
    } else {
      document.getElementById(`checkmark${number}`)!.style.visibility="visible";
      document.getElementById(`x${number}`)!.style.visibility="hidden";
      elem.style.color="green";
      switch(number){
        case 1:
          setTotal1('All');
        break;
        case 2:
          setTotal2('All');
        break;
        case 3:
          setTotal3('All');
        break;
        case 4:
          setTotal4('All');
        break;
        case 5:
          setTotal5('All');
        break;
        case 6:
          setTotal6('All');
        break;
      }
    }
  }

  const submit = () => {
  let checkedIngredients = []
  let array1: string[] = []
  let array2: string[] = []
  let array3: string[] = []
  let array4: string[] = []
  let array5: string[] = []
  let array6: string[] = []
  let checkboxes = document.querySelectorAll<HTMLInputElement>('input[type=checkbox]:checked');
  let first: string[] = ["cheese", "dough", "sauce"];
  let second: string[] = ["cheese", "dough", "sauce", "pepperoni"];
  let third: string[] = ["cheese", "dough", "sauce", "olives", "mushroom"];
  let fourth: string[] = ["cheese", "dough", "sauce", "cilantro"];
  let fifth: string[] = ["cheese", "dough", "sauce", "meat", "pineapple"];
  let sixth: string[] = ["cheese", "dough", "cilantro", "chicken", "bbq", "olives"];

  for (let i = 0; i < checkboxes.length; i++) {
    checkedIngredients.push(checkboxes[i].value)
  }

  check(array1, first, checkedIngredients, 1);
  check(array2, second, checkedIngredients, 2);
  check(array3, third, checkedIngredients, 3);
  check(array4, fourth, checkedIngredients, 4);
  check(array5, fifth, checkedIngredients, 5);
  check(array6, sixth, checkedIngredients, 6);

  } 

  return (

<div>
<Header />
    <div className='container'>
      <h4 style={{position: "relative", left: "70px", color: "gray"}}>Showing results for {(window.location.pathname).split( '/' ).pop()}</h4>
      <div className="pizzaContainer">
        <div>
        <img id="cheese" onClick={save} src={cheese} alt="Cheese Pizza"/>
        <p>Classic Cheese Pizza</p>
        <p>Calories: 272</p>
        <p id="p1"><span>{total1}</span> of the <br/> ingredients match</p>
        <img id="checkmark1" src={checkmark}/>
        <img id="x1" src={x}/>
        </div>
        <div>
        <img id="pepperoni" onClick={save} src={pepperoni} alt="Pepperoni Pizza"/>
        <p>Pepperoni Pizza</p>
        <p>Calories: 494</p>
        <p id="p2"><span>{total2}</span> of the <br/> ingredients match</p>
        <img id="checkmark2" src={checkmark}/>
        <img id="x2" src={x}/>
        </div>
        <div>
        <img id="vegetable" onClick={save} src={vegetable} alt="Vegetable Pizza"/>
        <p>Vegetable Pizza</p>
        <p>Calories: 240</p>
        <p id="p3"><span>{total3}</span> of the <br/> ingredients match</p>
        <img id="checkmark3" src={checkmark}/>
        <img id="x3" src={x}/>
        </div>
        <div>
        <img id="margherita" onClick={save} src={margherita} alt="Margherita Pizza"/>
        <p>Margherita Pizza</p>
        <p>Calories: 204</p>
        <p id="p4"><span>{total4}</span> of the <br/> ingredients match</p>
        <img id="checkmark4" src={checkmark}/>
        <img id="x4" src={x}/>
        </div>
        <div>
        <img id="hawaiian" onClick={save} src={hawaiian} alt="Hawaiian Pizza"/>
        <p>Hawaiian Pizza</p>
        <p>Calories: 260</p>
        <p id="p5"><span>{total5}</span> of the <br/> ingredients match</p>
        <img id="checkmark5" src={checkmark}/>
        <img id="x5" src={x}/>
        </div>
        <div>
        <img id="bbq" onClick={save} src={bbq} alt="BBQ Chicken Pizza"/>
        <p>BBQ Chicken Pizza</p>
        <p>Calories: 220</p>
        <p id="p6"><span>{total6}</span> of the <br/> ingredients match</p>
        <img id="checkmark6" src={checkmark}/>
        <img id="x6" src={x}/>
        </div>
      </div>
    </div>
    <div className="checklist">
    <h3 style={{color: "#6F439C"}}>Ingredients checklist for pizza: </h3>
    <input type="checkbox" value="dough"/>
    <label >Pizza dough</label>
    <input type="checkbox" value="cilantro"/>
    <label >Cilantro</label>
    <input type="checkbox" value="pepperoni"/>
    <label>Pepperoni</label>
    <input type="checkbox" value="chicken"/>
    <label>Chicken</label>
    <input type="checkbox" value="sauce"/>
    <label>Tomato sauce</label>
    <input type="checkbox" value="mushroom"/>
    <label>Mushroom</label>
    <input type="checkbox" value="cheese"/>
    <label>Cheese</label>
    <input type="checkbox" value="olives"/>
    <label>Olives</label>
    <input type="checkbox" value="pineapple"/>
    <label>Pineapple</label>
    <input type="checkbox" value="bbq"/>
    <label>BBQ sauce</label>
    <input type="checkbox" value="meat"/>
    <label>Meat</label>
    <button onClick={submit}>Submit</button>
    </div>
    </div>
  )
}

export default Pizza
