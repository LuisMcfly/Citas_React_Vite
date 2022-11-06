const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

  const { nombre, propietario, email, alta, sintomas, id} = paciente

  const handleEliminar = () => {
    const respuesta = confirm('¿Deseas eliminar este paciente?');
    if(respuesta){
      eliminarPaciente(id)
    }
  }

  return (
    <div className="mx-5 my-10 bg-white shadow-md rounded-lg py-10 px-5">
          <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: <span className="font-normal normal-case">{nombre}</span></p>
          <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: <span className="font-normal normal-case">{propietario}</span></p>
          <p className="font-bold mb-3 text-gray-700 uppercase">Email: <span className="font-normal normal-case">{email}</span></p>
          <p className="font-bold mb-3 text-gray-700 uppercase">Alta: <span className="font-normal normal-case">{alta}</span></p>
          <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: <span className="font-normal normal-case">{sintomas}</span></p>
          <div className="flex flex-col gap-4 mt-10">
            <button type="button" className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white uppercase font-bold rounded-lg" onClick={() => setPaciente(paciente)}>editar</button>
            <button type="button" className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white uppercase font-bold rounded-lg" onClick={handleEliminar}>eliminar</button>
          </div>
        </div>
  )
}

export default Paciente