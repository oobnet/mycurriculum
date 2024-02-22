
'client server'
import Utils from './services/utils'


export default async function  Home() {

  return (
    <div className="row  bg-dark ">
      <div className="col-md-12 text-center">
        <h3 className="card-title">ODAIR DE OLIVEIRA BRITO</h3>
      </div>
      <div className="col-md-3">
        <img src={Utils?.avatar} className="card" width="100%" />
      </div>
      <div className="col-md-9">
          <p>
          Analista de Sistema P/S com sede em Planaltina, Distrito Federal, Brasil. <br />
            Experiência sólida em gerenciamento de projetos e testes, com habilidades distintas em diferentes áreas. <br /> <br />
            Formação Acadêmica:  Universidade Cruzeiro do Sul, onde obteve o título de Tecnólogo em Análise e Desenvolvimento de Sistemas de 2015 a 2017.
          </p>
          <p>
            <ul>
              <li>Back End (Pleno/Sênior): PHP, Node.js, Bun</li>
              <li> Back End (Júnior): Rust, Python, Solidity</li>
              <li> Frontend (Pleno): JavaScript (ECM), ReactJS, Angular, VueJS, NextJS</li>
              <li> App Nativo: ElectronJS, Tauri, VueNative, ReactNative,
                 PHPNative (Laravel na build)
              </li>
             
            </ul>
            </p>
            <p>
              Outras habilidades: Servidores Linux, ETL, WordPress, Framework Laravel, integrações com Mailchimp, Cloudflare, Zoho, banco de dados MySQL, banco NoSQL (MongoDB), ORM (Mongoose), construção de integrações com diversas APIs (Iugu, PagSeguro, PayPal, Google Agenda),
              configurações de servidores em Linux.
           </p>

        
         <span>Contatos</span>

          <ul>
          <li>
                Email: testeoob@gmail.com / odair.oobnet1@gmail.com <br />
                Telefone: 61994374234 /  6193506893
              </li>
            <li>
                <a href="https://www.linkedin.com/in/odairoliveirabrito" className="text-white" target="_blank">https://www.linkedin.com/in/odairoliveirabrito</a>
              </li>
              <li>
                <a href="https://github.com/oobnet" className="text-white" target="_blank">https://github.com/oobnet</a>
              </li>
            
            </ul>
         
      </div>
      <div className="col-md-12">
        <p className="h6">
        CERTIFICADOS
        </p>
       
        <ul> 
          {Utils?.arrayCert.map((resp,index) => <li key={index}>{resp.toLowerCase()}</li>) }
        </ul>
      
      </div>

    </div>


  );
}
