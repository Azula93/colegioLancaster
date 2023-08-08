import {useForm} from 'react-hook-form';
import { registerRequest } from '../api/auth';

function RegisterPage() {

  
    const {register, handleSubmit} = useForm();
  
// formulario con react-hook-form
  return (
    <div className='bg-zinc-800 max-w-md p-10- rounded-md'>

      <form onSubmit={handleSubmit(async(values) =>{
        console.log(values);
        const res = await registerRequest(values)
        console.log(res)
      })}>
        <input type="text" {...register('name', {required: true})} 
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2 mt-40"
          placeholder='name'
        />
        <input type="email" {...register('email', {required: true})} 
        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        placeholder='email'
        />
        <input type="password" {...register('password', {required: true})} 
        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        placeholder='password'/>

        <div className="md:w-2/3">
      <button type='submit' className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" >
        Registrar
      </button>
      </div>
      </form>
    </div>
  )
}

export default RegisterPage
