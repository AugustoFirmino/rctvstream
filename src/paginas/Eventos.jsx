import { Link } from "react-router-dom";

function Home() {
  return (
    <div>

      {/* Banner Principal */}
      <section className="bg-red-700 text-white min-h-screen flex items-center">
        <div className="container mx-auto px-6">

          <h1 className="text-5xl font-bold mb-4">
            Bem-vindo ao CAP Nº 272
          </h1>

          <p className="text-xl mb-6">
            Informação, organização e proximidade com a comunidade.
          </p>

          <Link
            to="/sobre"
            className="bg-white text-red-700 px-6 py-3 rounded-lg font-bold"
          >
            Conheça o CAP
          </Link>

        </div>
      </section>


      {/* Notícias */}
      <section className="py-12 px-6">

        <h2 className="text-3xl font-bold text-center mb-8">
          Últimas Notícias
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="shadow-lg p-6 rounded-lg">
            <h3 className="font-bold text-xl">
              Assembleia de Balanço
            </h3>

            <p>
              Acompanhe as principais atividades realizadas pelo CAP Nº 272.
            </p>
          </div>


          <div className="shadow-lg p-6 rounded-lg">
            <h3 className="font-bold text-xl">
              Renovação de Mandatos
            </h3>

            <p>
              Conheça a nova direção e os novos desafios.
            </p>
          </div>


          <div className="shadow-lg p-6 rounded-lg">
            <h3 className="font-bold text-xl">
              Atividades Comunitárias
            </h3>

            <p>
              Projetos e ações desenvolvidas na comunidade.
            </p>
          </div>

        </div>

      </section>


      {/* Mensagem */}
      <section className="bg-gray-100 py-12 text-center">

        <h2 className="text-3xl font-bold">
          MPLA – A Força do Povo
        </h2>

        <p className="mt-3">
          Rumo à vitória em 2027.
        </p>

      </section>

    </div>
  );
}

export default Home;