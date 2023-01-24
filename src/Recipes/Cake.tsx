import { useState } from "react";
import './Cake.scss';
import { Header } from "../Header";
import vanilla from "./cakes/vanilla.jpg";
import chocolate from "./cakes/chocolate.jpg";
import sponge from "./cakes/sponge.jpg";
import cheesecake from "./cakes/cheesecake.jpg";
import checkmark from "./icons/checkmark.png";
import x from "./icons/x.png";

const Cake = () => {
  const [savedRecipes, setSavedRecipes] = useState<string[]>([]);
  const [total1, setTotal1] = useState<string>("");
  const [total2, setTotal2] = useState<string>("");
  const [total3, setTotal3] = useState<string>("");
  const [total4, setTotal4] = useState<string>("");

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
      }
    }
  }

  const submit = () => {
  let checkedIngredients = []
  let array1: string[] = []
  let array2: string[] = []
  let array3: string[] = []
  let array4: string[] = []
  let checkboxes = document.querySelectorAll<HTMLInputElement>('input[type=checkbox]:checked');
  let first: string[] = ["eggs", "vanilla", "powder", "milk", "flour", "sugar", "butter"];
  let second: string[] = ["eggs", "powder", "milk", "flour", "chocolate", "butter"];
  let third: string[] = ["eggs", "vanilla", "milk", "sugar", "cheese"];
  let fourth: string[] = ["eggs", "vanilla", "powder", "milk", "flour"];

  for (let i = 0; i < checkboxes.length; i++) {
    checkedIngredients.push(checkboxes[i].value)
  }

  check(array1, first, checkedIngredients, 1);
  check(array2, second, checkedIngredients, 2);
  check(array3, third, checkedIngredients, 3);
  check(array4, fourth, checkedIngredients, 4);

  } 

  return (

<div>
<Header />
    <div className='container'>
      <h4 style={{position: "relative", left: "70px", color: "gray"}}>Showing results for {(window.location.pathname).split( '/' ).pop()}</h4>
      <div className="pizzaContainer">
        <div>
        <img id="cheese" onClick={save} src={vanilla} alt="Cheese Pizza"/>
        <p>Vanilla Cake</p>
        <p>Calories: 250</p>
        <p id="p1"><span>{total1}</span> of the <br/> ingredients match</p>
        <img id="checkmark1" src={checkmark}/>
        <img id="x1" src={x}/>
        </div>
        <div>
        <img id="pepperoni" onClick={save} src={chocolate} alt="Pepperoni Pizza"/>
        <p>Chocolate Cake</p>
        <p>Calories: 352</p>
        <p id="p2"><span>{total2}</span> of the <br/> ingredients match</p>
        <img id="checkmark2" src={checkmark}/>
        <img id="x2" src={x}/>
        </div>
        <div>
        <img id="vegetable" onClick={save} src={cheesecake} alt="Vegetable Pizza"/>
        <p>Cheese cake</p>
        <p>Calories: 401</p>
        <p id="p3"><span>{total3}</span> of the <br/> ingredients match</p>
        <img id="checkmark3" src={checkmark}/>
        <img id="x3" src={x}/>
        </div>
        <div>
        <img id="margherita" onClick={save} src={sponge} alt="Margherita Pizza"/>
        <p>Sponge Cake</p>
        <p>Calories: 84</p>
        <p id="p4"><span>{total4}</span> of the <br/> ingredients match</p>
        <img id="checkmark4" src={checkmark}/>
        <img id="x4" src={x}/>
        </div>
        <div>
        </div>
      </div>
    </div>
    <div className="checklist">
    <h3 style={{color: "#6F439C"}}>Ingredients checklist for cake: </h3>
    <input type="checkbox" value="eggs"/>
    <label >Eggs</label>
    <input type="checkbox" value="sugar"/>
    <label >Sugar</label>
    <input type="checkbox" value="vanilla"/>
    <label>Vanilla extract</label>
    <input type="checkbox" value="flour"/>
    <label>Flour</label>
    <input type="checkbox" value="milk"/>
    <label>Milk</label>
    <input type="checkbox" value="powder"/>
    <label>Baking powder</label>
    <input type="checkbox" value="chocolate"/>
    <label>Chocolate</label>
    <input type="checkbox" value="cheese"/>
    <label>Cream cheese</label>
    <input type="checkbox" value="butter"/>
    <label>Butter</label>
    <button onClick={submit}>Submit</button>
    </div>
    </div>
  )
}

export default Cake
