const Paciente = ({paciente}) => {

  const { nombre, propietario, email, alta, sintomas} = paciente

  return (
    <div className="mx-5 my-10 bg-white shadow-md rounded-lg py-10 px-5">
          <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: <span className="font-normal normal-case">{nombre}</span></p>
          <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: <span className="font-normal normal-case">{propietario}</span></p>
          <p className="font-bold mb-3 text-gray-700 uppercase">Email: <span className="font-normal normal-case">{email}</span></p>
          <p className="font-bold mb-3 text-gray-700 uppercase">Alta: <span className="font-normal normal-case">{alta}</span></p>
          <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: <span className="font-normal normal-case">{sintomas}</span></p>
        </div>
  )
}

export default Paciente