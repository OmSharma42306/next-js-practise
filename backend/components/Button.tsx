"use client"

function handleSubmit(){
console.log("Data Submitted!")
}
export default function Button() {
    return <div>
        <button onClick={handleSubmit}>Submit</button>
    </div>
}