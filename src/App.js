import {useEffect,useState} from 'react';
  
const Dashboard = () => {
    
  const[record,setRecord] = useState([])
  const [rs,setrs] = useState({
     id:'',
     userName:'',
     username:'',
     email:'',
     website:''
  })
  
   const getData = () =>
   {
       fetch('https://jsonplaceholder.typicode.com/users/')
       .then(resposne=> resposne.json())
       .then(res=>setRecord(res))
   }
  
   useEffect(() => {
      getData();
   },[])
    
    const showDetail = (id) =>
    {
       
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(resposne=> resposne.json())
      .then(res=>setrs(res))
    }
  
  
    return (
    <div class="container mt-2">
        <div class="row mt-2 ">
            <div class="col-lg-1 col-md-6 col-sm-12">
            </div>  
            <div class="col-lg-11 col-md-6 col-sm-12">
              <h4 class="mt-3 mb-3 text-secondary">
               Display Users details in Modal Box with json API
              </h4>
                <div class=" mt-5">
                    <table class="table table-striped table-sm">
                        <thead class="thead-light">
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Username</th>
                                <th>Show Details</th>
                            </tr>
                        </thead>
                        <tbody>
                         
                          {record.map((names,index)=>
                           <tr key={index}>
                               <td>{names.id}</td>
                              <td>{names.name}</td>
                              <td>{names.username}</td>
                              <td><button class="btn btn-primary" onClick={(e)=>showDetail(names.id)} data-bs-toggle="modal" data-bs-target="#myModal">View Details</button></td>
                           </tr>
                           )}
                        </tbody>
                    </table>
                </div>
            </div>
             
        </div>
 
 
      <div class="modal" id="myModal">
        <div class="modal-dialog" style={{width:"700px"}}>
          <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Employee Details</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p>Employee ID : {rs.id}</p>
                <p>Name : {rs.name}</p>
                <p>Username : {rs.username}</p>
                <p>Email : {rs.email}</p>
                <p>Website : {rs.website}</p>
            </div>
              
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
              
          </div>
        </div>
      </div>
  
    </div>
    )
}
  
  
export default Dashboard