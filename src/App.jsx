import { useState } from "react"

const initialFormValue = {
  firstName : "",
  lastName : "",
  password : "",
 specialization: "",
 experienceYears : 1,
 description : ""
}

const initialErrors = {
  firstName: "",
  lastName: "",
  password: "",
  specialization: "",
  experienceYears: "",
  description: ""
}

export default function App() {
  const [form ,setForm] = useState(initialFormValue)
  const [errors , setErrors] = useState(initialErrors)

  const letters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()-_=+[]{}|;:'\\,.<>?/`~";

  

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
    let errorMsg = ""
    if(value.trim() === ""){

      errorMsg = "Compila il campo!"

   } else if(fieldName === "experienceYears" && value  <= 0){
       
      errorMsg = "Il campo puo contenere solo numeri positivi"

    }else if (
        fieldName === "firstName" &&
        (numbers.split('').some(char => value.includes(char)) ||
         symbols.split('').some(char => value.includes(char)) ||
         value.trim().length < 6)

      ) {
        errorMsg = "Il nome non può contenere numeri o simboli e deve essere di almeno 6 caratteri";

      }else if (
        fieldName === "lastName" &&
        (numbers.split('').some(char => value.includes(char)) ||
         symbols.split('').some(char => value.includes(char)) ||
         value.trim().length < 6)

      ) {
        errorMsg = "Il nome non può contenere numeri o simboli e deve essere di almeno 6 caratteri";

      }else if (
        fieldName === "password" &&
        (!numbers.split('').some(char => value.includes(char)) ||
         !symbols.split('').some(char => value.includes(char)) ||
         value.trim().length < 8)

      )  {
        errorMsg = "Deve contenere almeno 8 caratteri, 1 lettera, 1 numero e 1 simbolo.";
      }else if (
        fieldName === "description" &&
        ( 
         value.trim().length < 100 || value.trim().length > 1000 )

      )  {
        errorMsg = "Descrizione: Deve contenere tra 100 e 1000 caratteri (senza spazi iniziali e finali)";
      }
    return{
      ...current,
      [fieldName] : errorMsg
    }
   })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(Object.values(errors).some((error) => error !== "" )){
       return console.log("compila i campi")
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
            <p className="errors">{errors.firstName}</p>
           }

           {!errors.firstName &&  form.firstName.trim() !== "" &&
            <p className="success" >Campo valido!</p>
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
            <p className="errors">{errors.lastName}</p>
           }

           {!errors.lastName &&  form.lastName.trim() !== "" &&
            <p className="success" >Campo valido!</p>
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
            <p className="errors">{errors.password}</p>
           }

           {!errors.password &&  form.password.trim() !== "" &&
            <p className="success" >Campo valido!</p>
           }
        </div>
         
         <select name="specialization" onChange={handleChange} value={form.specialization} >
            <option value="">Scegli la specializzazione</option>
            <option value="Full Stack">Full Stack</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
         </select>

         {errors.specialization && 
            <p className="errors">{errors.specialization}</p>
           }

           {!errors.specialization &&  form.specialization.trim() !== "" &&
            <p className="success" >Campo valido!</p>
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
            <p className="errors">{errors.experienceYears}</p>
             }

             {!errors.experienceYears && form.experienceYears !== "" && 
            <p className="success" >Campo valido!</p>
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
            <p className="errors">{errors.description}</p>
            }

            {!errors.description &&  
            <p className="success" >Campo valido!</p>
           }
        </div>
        <button  type="submit"> invia</button>
      </form>
    </div>
  )
}