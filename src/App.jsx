import { useState } from "react"

const initialFormValue = {
  firstName : "",
  lastName : "",
  password : "",
 specialization: "",
 experienceYears : 0,
 description : ""
}

const initialErrors = {
  firstName: false,
  lastName: false,
  password: false,
  specialization: false,
  experienceYears: false,
  description: false
}

export default function App() {
  const [form ,setForm] = useState(initialFormValue)
  const [errors , setErrors] = useState(initialErrors)

  

  const handleChange = (e) =>  {
    const fieldName = e.target.name;
    const value = e.target.value

      setForm((current) => {
          return{
      ...current,
      [fieldName] : value
         }
      }
   )

   setErrors((current) => {
    return{
      ...current,
      [fieldName] : value.trim() === "" || fieldName === "experienceYears" && value <= 0
    }
   })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(Object.values(errors).some((error) => error !== false )){
       return;
    }else{
      console.log(form)
    }

  }
  


  
  return(
    <div className="container">
      <h1>Signup</h1>

      <form onSubmit={handleSubmit} >

        <div>
          <label htmlFor="firstName">Nome</label>
          <input 
          name ="firstName" 
          type="text"
           placeholder="Inserisci il Nome "
           value={form.firstName}
           onChange={handleChange}
           
           
           />
           {errors.firstName && 
            <p className="errors">Compila il campo</p>
           }
          
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

          {errors.lastName && 
            <p className="errors">Compila il campo</p>
           }
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

           {errors.password && 
            <p className="errors">Compila il campo</p>
           }
        </div>
         
         <select name="specialization" onChange={handleChange} >
            <option value="">Scegli la specializzazione</option>
            <option value="Full Stack">Full Stack</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
         </select>

         {errors.specialization && 
            <p className="errors">Compila il campo</p>
           }



        <div>
          <label htmlFor="experienceYears">Anni di esperienza</label>
          <input
           type="number"
           min={1}
            name="experienceYears"
            placeholder="Inscerisci quanti anni di esperienza hai"
            value={form.experienceYears}
           onChange={handleChange}
             />

             {errors.experienceYears && 
            <p className="errors">Il numero deve essere maggiore di "0"</p>
           }
        </div>
        <div>
          <label htmlFor="description">Descrizione</label>
           <textarea
            name="description"
             placeholder="Inserisci una breve descrizione  su di te"
             value={form.description}
            onChange={handleChange}
             >

             </textarea>

             {errors.description && 
            <p className="errors">Compila il campo</p>
           }
        </div>
        <button  type="submit"> invia</button>
      </form>
    </div>
  )
}