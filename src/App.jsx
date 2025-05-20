import { useState } from "react"

const initialFormValue = {
  firstName : "",
  lastName : "",
  password : "",
 specialization: "",
 experienceYears : 0,
 description : ""
}

export default function App() {
  const [form ,setForm] = useState(initialFormValue)

  const handleChange = (e) =>  {
    const fieldName = e.target.name;
    const value = e.target.value
   setForm((current) => {
    return{
      ...current,
      [fieldName] : value
    }
   } )
   
  }

  console.log(form)
  return(
    <div className="container">
      <h1>Signup</h1>

      <form>

        <div>
          <label htmlFor="firstName">Nome</label>
          <input 
          name ="firstName" 
          type="text"
           placeholder="Inserisci il Nome "
           value={form.firstName}
           onChange={handleChange}
           
           />
          
        </div>

        <div>
          <label htmlFor="lastName">Cognome</label>
          <input 
          name ="lastName" 
          type="text" 
          placeholder="Inserisci il Cognome"
          value={form.lastName}
           onChange={handleChange}
          
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
           name ="password" 
           type="password" 
           placeholder="Inserisci la password"
           value={form.password}
           onChange={handleChange}
           />
        </div>

         <select name="specialization" onChange={handleChange} >
            <option value="">Scegli la specializzazione</option>
            <option value="Full Stack">Full Stack</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
         </select>

        <div>
          <label htmlFor="experienceYears">Anni di esperienza</label>
          <input
           type="number"
            name="experienceYears"
            placeholder="Inscerisci quanti anni di esperienza hai"
            value={form.experienceYears}
           onChange={handleChange}
             
           
             />
        </div>
        <div>
          <label htmlFor="description">Descrizione</label>
           <textarea
            name="description"
             placeholder="Inserisci una breve descrizione  su di te"
             value={form.description}
            onChange={handleChange}
             
             
             ></textarea>
        </div>
      </form>
    </div>
  )
}