'use server'
import Image from "next/image";
import axios from 'axios'
import NavBar from './components/NavBar'

export default async function  Home() {

  const _owner = 'https://api.github.com/users/oobnet'
  const avatar = 'https://avatars.githubusercontent.com/u/22033657?v=4'
  const arrayCert = [
    'Certificação Solid com PHP - School Of Net',
    'Framework Laravel Essencial 5.4',
    'VueJs 2 Essencial',
    'Work Series PHP orientado a objetos - UpInside treinamentos',
    'Pro Tableless padrões web - UpInside treinamentos',
    'Domínio e Hospedagem - UpInside treinamentos',
    'Pro Labs - UpInside treinamentos',
    'Certificado HTML 5 - Curso em Vídeo',
    'Curso de HTML e CSS essencial - Mx cursos',
    'Laravel Notifications',
    'Participação de Maratona Web3.0 DAPS',
  ]

  const xp = [
    {
    emp: 'HealthGo Technologies',
    fn: ' Programador de software',
    prd: 'Agosto de 2023 - Novembro de 2023 (4 meses)',
    dsc: `
    Desenvolvimento de software personalizado de sistemas de TI, voltados para
    área de saúde.
    `,
    tcs: 'Tecnologia REACJS,ANGULAR,ELECTRONJS,NODEJS.',
    },
    {
    emp: 'Única Consultores de Enge,nharia Ltda.'
    fn: 'Analista de Sistema Pleno',
    prd: '1 ano 2 meses',
    dsc: `
    Lider de projeto de um determinado modulo, do sistema SUPRA (SUPERVISÃO AVANÇADA) do Órgão DNIT(Departamento Nacional de Infraestrutura e Transporte).
    Desenvolvendo a aplicação com framework CodeIgnaiter (3), banco de dados SQLSERVER, linguagem PHP 7.3, Javascript (JQUERY);
    Atuando também no code review da equipe formada por 6 contando comigo. Pois outros membros atuam em outros módulos do projeto.
    `,
    tcs: ' Tecnologia ágeis: git, figma.',
    },

    {
    emp: 'Consult Mídia',
    fn: 'Programador PHP/Pleno',
    prd: '4 meses',
    dsc: `
    Trabalhando com PHP Framework (Laravel 7.*), ReactJs, configuração dos servidores,AngularJS, BPM, gerenciando projeto da empresa, teste. 
    Analisando requisitos do sistema.
    `,
    tcs: 'ágeis, Trello, versionamento com git.',
    },
    {
    emp: 'Basis Tecnologia - ME,C'
    fn: 'Programador PHP/Pleno',
    prd: '5 meses',
    dsc: `Trabalhando com PHP 5.4 banco de dados Postgrees, estava trabalhando com framework próprio do ministério da educação chamado SIMEC, nas partes de livros que seriam publicados para os alunos.`
    tcs: 'semec,postgrees',
    },
    {
    emp: 'Consult Mídia',
    fn: 'Programador PHP/Pleno',
    prd: '1 ano e 4 meses',
    dsc: `
    Trabalhando com PHP Framework (Laravel 7.0), ReactJs, configuração dos servidores, gerenciando projeto da empresa, teste. 
    Analisando requisitos do sistema.
    `,
    tcs: 'ágeis, Trello, versionamento com git.',
    },
    {
    emp: 'Qualidade.co',
    fn: 'Programador Javascript (NODEJS)',
    prd: '6 meses',
    dsc: `Trabalhando com as tecnologias hiper do momento, exercendo função backend com Java Script, banco Nosql (MongoDB) com ORM(mongoose), construindo integrações com diversos tipos de Api (iugu, pagseguro, paypal, google agenda) ,configurações de servidores em Linux.
    Analisando requisitos do sistema.`,
    tcs: 'Tecnologia ágeis, Trello, bitbucket, integrações continuas com git.',
    },
    {
    emp: 'Quoda (Statup)',
    fn: 'Programador Traine (PHP)',
    prd: '5 meses',
    dsc: `Trabalhando com servidores linux , ETL, wordpress , framework (Laravel), integrações com mailchimp , cloud flare, zooho, banco de dados mysql.`,
    tcs: 'Tecnologia ageis, Trello, GitLab, integrações continuas com git.',
    },
    {
    emp: 'Velum Marketing Digital ',
    fn: 'Analista Programador PHP ( PJ )',
    prd: '5 meses',
    dsc: `Trabalhando com Php , wordpress, correções em css do template, banco de dados mysql, e analisando requisitos do sistema`,
    tcs: 'WordPress, PHP, javascript, google ads, mailshimp,',
    },
    {
    emp: 'Micro Empreendedor',
    fn: 'Manutenção em Micro e Administrando Lan House',
    prd: '4 anos',
    dsc: `Montagem e configuração de pcs, xeroz, recarregamento de impressoa toner, acesso a internet, em geral`,
    tcs: 'PCS',
    },
    {
    emp: 'RC MONITORAMENTO',
    fn: 'Auxiliar Administrativo',
    prd: '1 ano',
    dsc: `Monitoramento de cameras, gestção de arquivos da empresa, cobrança e atendimento aos clientes, CFTV.`,
    tcs: 'cstv',
    },
  ]


  return (<>
    <main className="container bg-dark text-white">
      <NavBar />
  
    <div className="row  bg-dark ">
      <div className="col-md-12 text-center">
        
        
        <h3 className="card-title">ODAIR DE OLIVEIRA BRITO</h3>
      </div>
      <div className="col-md-3">
        <img src={avatar} className="card" width="100%" />
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

         <p >
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
         </p>

      
    
      </div>
      <div className="col-md-12">
        
        <p className="h6">
        CERTIFICADOS
        </p>
        <p>
          <ul> { arrayCert.map((resp,index) => <li key={index}>{resp.toLowerCase()}</li>) }
          </ul>
      </p>
      </div>

    </div>

   

    </main>
  </>
  

  );
}
