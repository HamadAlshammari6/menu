import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useState } from 'react';
function App() {
  const[total,settotal]=useState(0);
  const[counter,setcounter]=useState(0);
  const[counteritems,setcointeritems]=useState(0);


  const datamenu=[
    {
      img:"https://img.freepik.com/free-photo/side-view-shawarma-with-fried-potatoes-board-cookware_176474-3215.jpg?t=st=1714213671~exp=1714217271~hmac=d6ff108916c006dda6cc2e21999f8274d6e9abe8e22b4404c8ad77f30e7329e8&w=740",
      name:"شاورما",
      price:30
    },

    {
      img:"https://img.freepik.com/free-photo/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese_90220-1063.jpg?t=st=1714213943~exp=1714217543~hmac=9d06ce2d4fdfdf3788ff3e5cae72d904b9003e64a6971c59c05783a680bc2978&w=740",
      name:"هامبرجر",
      price:15
    },

    {
      img:"https://img.freepik.com/premium-psd/psd-saudi-food-kabsa-isolated-without-background_867452-12773.jpg?w=740",
      name:"برياني باللحم",
      price:13
    },
  ]

  const settotalval=(price,event)=>
  {
    if(event.target.checked)
    {
      settotal((total+price)*counter);
      setcounter(counter+1)
    }

    else
    {
      settotal((total-price)*counteritems);
      setcounter(counter-1)
    }
  }
  return (
   <>
    <div className='container'>
      <div className='row mt-5'>
        <div className='col'>
          <div className='card'> 
            <div className='card-body bg-warning'>
            <table className='table table-striped text-center'>
            <thead>
              <tr >
                <td className='bg-info' colSpan={2}>المجموع الكلي</td><td>{total}</td>
                <td className='bg-info' colSpan={2}>عدد الأصناف</td><td>{counter}</td>
              </tr>
              <tr>
                <td>اسم الصنف</td>
                <td>الصورة</td>
                <td>السعر</td>
                <td>العدد</td>
                <td colSpan={2}>اختر الصنف</td>
              </tr>
            </thead>

            <tbody className='table-warning'>
                {
                  datamenu.map((items,index)=>(
                   
                  <tr>
                     <td>{index+1}</td>
                     <td>{items.name}</td>
                     <td><img src={items.img} className='rounded rounded-circle' width={60} height={60}></img></td>
                     <td>{items.price}</td>
                     <td><input type='number' onChange={(e)=>setcointeritems(e.target.value)}></input></td>
                     <td><input type='checkbox' onChange={(event)=>settotalval(items.price,event)}></input></td>
                  </tr>

                  ))
                }
            </tbody>
          </table>
            </div>
          </div>
        </div>
      </div>
    </div>
   </>
  );
}

export default App;