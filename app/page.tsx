

import Utils from './services/utils'


export default async function  Home() {

  function RenderXp({item}) {
  
    return (
      <div className="card bg-dark  rounded mt-1">
      <div className="card-body">
        <h5 className="card-title">{item.emp}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">Função: {item.fn}</h6>
        <span className="card-text">Período: {item.prd}</span> <br />
        <span className="card-text">Tecnologias: {item.tcs}</span>
        <p className="card-text">
          Descrição: 
          {item.dsc}
        </p>
      </div>
    </div>
    )
  }


  return (
    <div className="row  bg-dark ">
      <div className="col-md-12 text-center">
        <h3 className="card-title">ODAIR DE OLIVEIRA BRITO</h3>
      </div>
     
      <div className="col-md-10  rounded p-1">
          <p>
            Analista de Sistema P/S com sede em Planaltina, Distrito Federal, Brasil. <br />
            Experiência sólida em gerenciamento de projetos e testes, com habilidades distintas em diferentes áreas. <br /> <br />
            Formação Acadêmica:  Universidade Cruzeiro do Sul, onde obteve o título de Tecnólogo em Análise e Desenvolvimento de Sistemas de 2015 a 2017.
          </p>
      
          <ul className="list-group">
            <li className="list-group-item bg-dark text-white ">Back End (Pleno/Sênior): PHP, Node.js, Bun</li>
            <li className="list-group-item bg-dark text-white "> Back End (Júnior): Rust, Python, Solidity</li>
            <li className="list-group-item bg-dark text-white "> Frontend (Pleno): JavaScript (ECM), ReactJS, Angular, VueJS, NextJS</li>
            <li className="list-group-item bg-dark text-white "> 
              App Nativo: ElectronJS, Tauri, VueNative, ReactNative,PHPNative (Laravel na build)
            </li>
          </ul>
           
          <p className="mt-3">
            Outras habilidades: Servidores Linux, ETL, WordPress, Framework Laravel, integrações com Mailchimp, Cloudflare, Zoho, banco de dados MySQL, banco NoSQL (MongoDB), ORM (Mongoose), construção de integrações com diversas APIs (Iugu, PagSeguro, PayPal, Google Agenda),
            configurações de servidores em Linux.
          </p>

        
         <span>Contatos</span>

          <ul className="list-group mt-1">
              <li className="list-group-item bg-dark text-white ">
                  Email: testeoob@gmail.com / odair.oobnet1@gmail.com <br />
                  Telefone: 61994374234 /  6193506893
              </li>
              <li className="list-group-item bg-dark text-white ">
                <a href="https://www.linkedin.com/in/odairoliveirabrito" className="text-white" target="_blank">https://www.linkedin.com/in/odairoliveirabrito</a>
              </li>
              <li className="list-group-item bg-dark text-white ">
                <a href="https://github.com/oobnet" className="text-white" target="_blank">https://github.com/oobnet</a>
              </li>
          </ul>
         
      </div>
      <div className="col-md-2">
        <img src={Utils?.avatar} className="card" width="100%" />
      </div>
      <div className="col-md-12 mt-2 p-1  rounded">
        <p className="h6">Certificados</p>
        <ul> 
          {Utils?.arrayCert.map((resp,index) => <li key={index}>{resp.toLowerCase()}</li>) }
        </ul>
      </div>

      <div className="col-md-12 mt-2 p-4  rounded">
        <p className="h6 mb-3">Experiências:</p>
        {
          Utils?.experiencie.map( (resp,index) => <RenderXp item={resp} />)
        }
       
      </div>

    </div>


  );
}
