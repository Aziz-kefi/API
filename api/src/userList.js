import React , {UseState,UseEffect} from "react";
import UserCard from './component/UserCard';

function UserList(){
    const[ListUser,setListUser]=UseState([])
    const[Error ,setError]=UseState(null)
    UseEffect(()=>{
        function fetchlistuser(){
            fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(res => setListUser(res))
        .catch(err => setError(err));
    
        }
        fetchlistuser();
    },[]);
    if(Error)
    {return ("an ERROR HAS OCCURED",Error)}
   return (<div style={{ marginTop: '150px' }}>

      {ListUser.map((el) => (<UserCard data={el} />



      ))}


    </div>
  )
}

export default UserList;