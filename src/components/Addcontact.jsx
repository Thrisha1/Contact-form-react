import { useState } from 'react'

const Addcontact = (props) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    
    const add = (e) => {
        e.preventDefault();
        console.log(name);
        console.log(email);
        props.adder(name,email)
        setName("")
        setEmail("")
    }

    return ( 
        <div className="p-3">
            <nav class="navbar bg-light">
                <div class="container-fluid">
                    <h2 class="mb-0">Add Contact</h2>
                </div>
            </nav>
            <form >
                <div class="mb-3 ">
                    <label for="formGroupExampleInput" class="form-label">Name</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Name" value={name} onChange={(e)=>{
                        setName(e.target.value)
                    }} />
                </div>
                <div class="mb-3" >
                    <label for="formGroupExampleInput2" class="form-label">E-mail</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="E-mail" value={email} onChange={(e)=>{
                        setEmail(e.target.value)
                    }} />
                    <button type="button" className="btn btn-primary mt-3" onClick={add}>Add</button>
                </div>
            </form>

        </div>
     );
}
 
export default Addcontact;