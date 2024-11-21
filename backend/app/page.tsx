import axios from "axios";

async function getUserDetails(){
  //Artificial Loaders ...
  //await new Promise((r)=>setTimeout(r,5000));
  const responce = await axios.get('http://localhost:3000/api/user');
  
  return responce.data;
}


// create async component
export default async function Home() {
  let userData = await getUserDetails();
  return (
    <div className="flex flex-col justify-center h-screen">
    <div className="flex justify-center">
        <div className="border p-8 rounded">
            <div>
                Name: {userData?.name}
            </div>
            
            Email : {userData?.email}
        </div>
    </div>
</div>
  );
}
