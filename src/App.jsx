import { useState, useMemo, useRef } from "react"


export default function App() {
  
  //Input controllati
  const [userName,setUserName] = useState("Erremme")
  const [password,setPassword] = useState("Ciromarina96.")
  const [description,setDescription] = useState("Ciao sono raffaele e frequento il corso hshshshshhshshshshshshshshhshhhshshshshshshshshshshshshshshshshs")
 
  //input non controllati
   const firstnameRef = useRef()
   const specializationRef = useRef()
   const experienceYearsRef = useRef()
  



  

  const letters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()-_=+[]{}|;:'\\,.<>?/`~";

  //Controllo userName con useMemo
   const isUserNameValid = useMemo(() => {
    const charValid = userName.split("").every((char) => 
      letters.includes(char.toLowerCase())||
      numbers.includes(char)
    )
     
    return charValid && userName.trim().length >= 6

    },[userName])

     //Controllo password con useMemo
    const isPasswordValid = useMemo(() => {
      return(
       password.trim().length >= 8 &&
       password.split("").some((char) => numbers.includes(char))&&
       password.split("").some((char) => symbols.includes(char)) &&
       password.split("").some((char) =>letters.includes(char.toLowerCase()))
  
      )

    }, [password])

     //Controllo description con useMemo
   const  isDescriptionValid = useMemo(() => {
    return(
    description.trim().length >= 100 && 
     description.trim().length <= 1000
    )
     
   },[description])

  

  const handleSubmit = (e) => {
    e.preventDefault()
    const firstName = firstnameRef.current.value;
    const specialization = specializationRef.current.value;
    const experienceYears = experienceYearsRef.current.value
    if(
      !firstName.trim() ||
      !userName.trim() ||
      !password.trim() ||
      !specialization.trim() ||
      !experienceYears.trim() ||
       experienceYears <= 0||
      !description.trim()
    ){
      alert("Errore , Compila i campi correttamente")
      return;
    }

    console.log({
      firstName,
      userName,
      password ,
      specialization,
      experienceYears,
      description
    }
    )

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
            ref={firstnameRef}
           
           />
          
          
        </div>

        <div>
          <label htmlFor="userName">Username</label>
          <input 
          name ="userName" 
          type="text" 
          placeholder="Inserisci lo Username"
          value={userName}
           onChange={(e) => setUserName(e.target.value)}
           
          />

          {userName.trim() && 
            <p style={{color : isUserNameValid ? "green" : "red"}}>
              {isUserNameValid ? "Username valido" : "Lo Username contenere simboli e deve essere di almeno 6 caratter"}
              </p>
           }

          
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
           name ="password" 
           type="password" 
           placeholder="Inserisci la password"
           value={password}
           onChange={(e) => setPassword(e.target.value)}
           
           />

           {password.trim() && 
            <p style={{color : isPasswordValid ? "green" : "red"}}>
              {isPasswordValid ? "Paasword valida" : "La Password deve contenere almeno 8 caratteri di cui almeno 1 lettera, 1 numero e 1 simbolo"}
              </p>
           }
        </div>
         
         <select name="specialization"
          ref={specializationRef}
          
          >
            <option value="">Scegli la specializzazione</option>
            <option value="Full Stack">Full Stack</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
         </select>

         


        <div>
          <label htmlFor="experienceYears">Anni di esperienza</label>
          <input
           type="number"
           min={1}
            name="experienceYears"
            placeholder="Inscerisci quanti anni di esperienza hai"
            ref={experienceYearsRef}
            
           
             />

        </div>
        <div>
          <label htmlFor="description">Descrizione</label>
           <textarea
            name="description"
            placeholder="Inserisci una breve descrizione  su di te"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
             >

             </textarea>
             
             {description.trim() && 
            <p  style={{color : isDescriptionValid ? "green" : "red"}}>
              {isDescriptionValid ? "Testo valido" : "La descrizione deve contere tra i 100 e i 1000 caratteri"}
              </p>
           }
            
        </div>
        <button  type="submit"> invia</button>
      </form>
    </div>
  )
}