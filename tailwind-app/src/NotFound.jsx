
function NotFound(){
    return(
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-2">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Página no encontrada
        </h2>
        <p className="text-gray-600 mb-6">
            La página que buscas no existe
        </p> 
        </div>
    );
  }

export default NotFound;